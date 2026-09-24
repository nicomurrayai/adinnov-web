import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import * as cheerio from "cheerio";

const rentalSlides = [
  ["1-img.jpg", "01.jpg", "02.jpg", "03.png", "04.png", "05.png", "06.png", "07.jpg", "09.jpg"],
  ["2-img.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"],
  ["3-img.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"],
  ["4-img.jpg", "01.jpg", "02.png", "03.jpg", "04.jpeg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.png", "10.jpg", "11.jpg"],
  ["5-img.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"],
  ["6-img.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"],
  ["7-img.jpg", "01.jpeg", "02.jpg", "03.png", "04.jpg", "05.jpg", "06.jpg"],
  ["8-img.jpg", "01.jpg", "02.jpg", "03.jpeg", "04.jpg", "05.jpg", "06.jpg", "08.jpg", "09.jpg"],
];

const verticalImages = [
  "eventos.png", "oficinas.jpg", "gastronomico.png", "hotelero.jpg", "retail.jpg",
  "monitoreo.jpg", "aeropuerto.jpg", "gobierno.jpg", "sala-reuniones.png", "museo.jpg",
];

const origin = "https://adinnov.com.ar";
const html = await (await fetch(origin)).text();
const $ = cheerio.load(html);
const clientsHeading = $("*").filter((_, element) =>
  $(element).children().length === 0 && $(element).text().trim() === "NUESTROS CLIENTES"
).first();
const clientImages = [...new Set(clientsHeading.parent().parent().find("img").map((_, image) => $(image).attr("src")).get())];
const rentalImages = rentalSlides.flatMap((slides, index) =>
  slides.map((file) => `/img/alquileres/${String(index + 1).padStart(2, "0")}/${file}`)
);
const paths = [
  ...rentalImages,
  ...verticalImages.map((file) => `/img/verticales/${file}`),
  ...clientImages,
];

const results = await Promise.all(paths.map(async (source) => {
  const response = await fetch(`${origin}${encodeURI(source)}`);
  if (!response.ok) throw new Error(`${source}: HTTP ${response.status}`);
  const target = `public/original-home${source.slice(4)}`;
  await mkdir(dirname(target), { recursive: true });
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(target, buffer);
  return buffer.length;
}));

console.log(`Guardadas ${paths.length} imágenes originales (${(results.reduce((sum, size) => sum + size, 0) / 1024 / 1024).toFixed(1)} MB).`);
console.log("Clientes:", JSON.stringify(clientImages));
