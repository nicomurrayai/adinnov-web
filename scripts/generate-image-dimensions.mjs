import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const publicRoot = path.join(projectRoot, "public");
const outputPath = path.join(projectRoot, "content", "imageDimensions.json");
const supportedExtensions = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".png",
  ".webp",
]);

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

const files = (await walk(publicRoot))
  .filter((file) => supportedExtensions.has(path.extname(file).toLowerCase()))
  .sort((a, b) => a.localeCompare(b));

const dimensions = {};
for (const file of files) {
  const metadata = await sharp(file).metadata();
  if (!metadata.width || !metadata.height) {
    throw new Error(`No se pudieron leer las dimensiones de ${file}`);
  }

  const publicPath = `/${path
    .relative(publicRoot, file)
    .split(path.sep)
    .join("/")}`;
  dimensions[publicPath] = {
    width: metadata.width,
    height: metadata.height,
  };
}

await writeFile(outputPath, `${JSON.stringify(dimensions, null, 2)}\n`, "utf8");
console.log(`Dimensiones registradas: ${files.length}`);
