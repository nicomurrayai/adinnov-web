# Plan de implementación: imágenes de categorías del navbar

## 1. Generación

- Generar seis imágenes fotorealistas con prompts específicos y una dirección visual compartida.
- Inspeccionar cada salida para comprobar categoría, composición vertical, coherencia cromática y ausencia de texto, marcas o artefactos.
- Repetir únicamente las imágenes que no cumplan el criterio visual.

## 2. Preparación de activos

- Copiar las imágenes seleccionadas a `public/navigation/product-families/`.
- Normalizar dimensiones y relación de aspecto.
- Convertir a WebP con compresión apropiada para un panel de aproximadamente 280 × 352 px.

## 3. Integración

- Actualizar las seis rutas `image` en `content/site.ts`.
- Mantener intactos el componente `Header`, la interacción por hover/foco y los textos existentes salvo que una revisión visual demuestre que el recorte necesita un ajuste mínimo.

## 4. Verificación

- Ejecutar `npm run lint`, `npm run typecheck`, `npm test` y `npm run build`.
- Abrir el sitio en escritorio, desplegar Productos y recorrer las seis familias.
- Verificar recorte, transición, contraste del degradado, teclado y ausencia de errores de carga.

