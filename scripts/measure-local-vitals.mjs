import { mkdir, writeFile } from "node:fs/promises";
import { chromium, devices } from "@playwright/test";

const baseUrl = process.env.PERF_BASE_URL ?? "http://127.0.0.1:3100";
const routes = [
  { name: "inicio", path: "/", interaction: 'button[aria-label="Abrir menú"]' },
  {
    name: "catalogo",
    path: "/productos",
    interaction: 'button[aria-controls="catalog-filter-panel"]',
  },
  {
    name: "ficha-totem-digital",
    path: "/productos/totem-digital",
    interaction: 'button[aria-label="Imagen siguiente"]',
  },
];

const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [];

try {
  for (const route of routes) {
    const context = await browser.newContext({
      ...devices["Pixel 7"],
      locale: "es-AR",
      serviceWorkers: "block",
    });
    const page = await context.newPage();
    const cdp = await context.newCDPSession(page);

    await cdp.send("Network.emulateNetworkConditions", {
      offline: false,
      latency: 150,
      downloadThroughput: (1.6 * 1024 * 1024) / 8,
      uploadThroughput: (750 * 1024) / 8,
      connectionType: "cellular4g",
    });
    await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });

    await page.addInitScript(() => {
      window.__adinnovLabVitals = {
        cls: 0,
        lcp: 0,
        lcpElement: null,
        lcpUrl: null,
        interactions: {},
      };

      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const latest = entries.at(-1);
        if (latest) {
          window.__adinnovLabVitals.lcp = latest.startTime;
          window.__adinnovLabVitals.lcpElement = latest.element
            ? `${latest.element.tagName.toLowerCase()}${latest.element.id ? `#${latest.element.id}` : ""}.${Array.from(latest.element.classList).slice(0, 3).join(".")}`
            : null;
          window.__adinnovLabVitals.lcpUrl = latest.url || null;
        }
      }).observe({ type: "largest-contentful-paint", buffered: true });

      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) window.__adinnovLabVitals.cls += entry.value;
        }
      }).observe({ type: "layout-shift", buffered: true });

      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.interactionId) continue;
          const id = String(entry.interactionId);
          window.__adinnovLabVitals.interactions[id] = Math.max(
            window.__adinnovLabVitals.interactions[id] ?? 0,
            entry.duration,
          );
        }
      }).observe({ type: "event", buffered: true, durationThreshold: 16 });
    });

    const response = await page.goto(`${baseUrl}${route.path}`, {
      waitUntil: "domcontentloaded",
      timeout: 45_000,
    });
    await page.waitForLoadState("load");
    await page.waitForTimeout(5_000);
    await page.locator(route.interaction).click();
    await page.waitForTimeout(750);

    const metrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType("navigation")[0];
      const interactions = Object.values(window.__adinnovLabVitals.interactions);

      return {
        lcpMs: Math.round(window.__adinnovLabVitals.lcp),
        lcpElement: window.__adinnovLabVitals.lcpElement,
        lcpUrl: window.__adinnovLabVitals.lcpUrl,
        cls: Number(window.__adinnovLabVitals.cls.toFixed(4)),
        inpMs: interactions.length ? Math.round(Math.max(...interactions)) : "<16",
        ttfbMs: Math.round(navigation.responseStart),
      };
    });

    results.push({
      route: route.path,
      status: response?.status() ?? null,
      profile: "Pixel 7 · Fast 4G aproximado · CPU 4×",
      ...metrics,
    });

    await context.close();
  }
} finally {
  await browser.close();
}

await mkdir("reports", { recursive: true });
await writeFile(
  "reports/local-web-vitals.json",
  `${JSON.stringify({ measuredAt: new Date().toISOString(), results }, null, 2)}\n`,
  "utf8",
);

console.log(JSON.stringify(results, null, 2));
