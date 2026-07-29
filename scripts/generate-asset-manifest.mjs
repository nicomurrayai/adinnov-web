import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const publicRoot = path.join(projectRoot, "public");
const sourceRoots = ["src", "content"].map((folder) => path.join(projectRoot, folder));
const reportPath = path.join(projectRoot, "reports", "asset-usage.json");
const textExtensions = new Set([".css", ".json", ".js", ".mjs", ".ts", ".tsx"]);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const absolutePath = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(absolutePath) : [absolutePath];
    }),
  );
  return nested.flat();
}

const sourceFiles = (
  await Promise.all(sourceRoots.map((directory) => walk(directory)))
)
  .flat()
  .filter(
    (file) =>
      textExtensions.has(path.extname(file).toLowerCase()) &&
      path.basename(file) !== "imageDimensions.json",
  );

const sourceText = (await Promise.all(sourceFiles.map((file) => readFile(file, "utf8")))).join(
  "\n",
);
const publicFiles = (await walk(publicRoot)).sort((a, b) => a.localeCompare(b));

const entries = publicFiles.map((file) => {
  const publicPath = `/${path.relative(publicRoot, file).split(path.sep).join("/")}`;
  return {
    path: publicPath,
    referenced: sourceText.includes(publicPath),
  };
});

const report = {
  generatedAt: new Date().toISOString(),
  totals: {
    assets: entries.length,
    referenced: entries.filter((entry) => entry.referenced).length,
    unreferenced: entries.filter((entry) => !entry.referenced).length,
  },
  referenced: entries.filter((entry) => entry.referenced).map((entry) => entry.path),
  unreferenced: entries.filter((entry) => !entry.referenced).map((entry) => entry.path),
};

await mkdir(path.dirname(reportPath), { recursive: true });
await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify(report.totals));
