# Adinnov Web

Sitio rediseñado de [Adinnov](https://adinnov.com.ar/) — cartelería digital.

## Stack

- Next.js (App Router) + React 19
- TypeScript
- Tailwind CSS v4

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Contenido

El catálogo vive en `content/` (TypeScript estático). Para re-extraer del sitio actual:

```bash
npm run mine
npm run clean:products
```

## Contacto

El formulario en `/contacto` usa Resend si configurás `RESEND_API_KEY` (ver `.env.example`). Sin API key, hace fallback a `mailto:`.

## Build

```bash
npm run build
npm start
```
