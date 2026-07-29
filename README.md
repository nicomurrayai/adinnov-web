# Adinnov Web

Rediseño del sitio de [Adinnov](https://adinnov.com.ar/) para venta, alquiler e integración de cartelería digital.

## Stack

- Next.js 16 (App Router) y React 19
- TypeScript y Tailwind CSS 4
- Motion para animaciones progresivas y respetuosas de `prefers-reduced-motion`
- Zod para validar consultas y Resend para el envío
- Vitest, Playwright y axe para aceptación automatizada

## Desarrollo y preview

```bash
npm install
npm run dev
```

La preview local queda disponible en [http://localhost:3000](http://localhost:3000).

Para probar el servidor de producción:

```bash
npm run build
npm start
```

## Contenido

El catálogo estático vive en `content/`. Incluye 47 fichas, seis familias públicas y disponibilidad explícita para venta y alquiler.

```bash
npm run generate:image-dimensions
npm run validate:content
npm run manifest:assets
```

`validate:content` comprueba slugs, archivos, dimensiones, textos alternativos, disponibilidad, relaciones y claims editoriales no aprobados. El manifiesto de uso se escribe en `reports/asset-usage.json`; debe revisarse antes de retirar activos.

Los scripts `mine` y `clean:products` sirven para reextraer el contenido base del sitio anterior. No reemplazan la curaduría editorial de `content/productMeta.ts`.

## Contacto

Copiá `.env.example` a `.env.local` y configurá `RESEND_API_KEY`, `RESEND_FROM` y `CONTACT_TO` para habilitar el envío.

La API devuelve éxito únicamente cuando Resend confirma un identificador de envío. Si falta la configuración o falla el proveedor, devuelve un error `503` y la interfaz ofrece email y WhatsApp como alternativas; no registra un éxito falso.

## Verificación

```bash
npm run lint
npm run typecheck
npm run validate:content
npm test
npm run test:e2e
npm run build
```

Las pruebas E2E compilan y levantan el sitio de producción en `http://127.0.0.1:3100`; cubren escritorio y móvil sin depender de la compilación bajo demanda del servidor de desarrollo. Los artefactos se guardan en `output/playwright/`.

Con una preview de producción activa en el puerto `3100`, `npm run measure:vitals` ejecuta un diagnóstico móvil local sobre Inicio, Catálogo y una ficha. Usa Pixel 7, Fast 4G aproximado y CPU 4×, y guarda el resultado en `reports/local-web-vitals.json`. Es una comprobación reproducible de presupuestos, no un reemplazo del informe oficial de Lighthouse.
