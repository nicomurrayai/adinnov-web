# Plan de implementación: imágenes de familias de producto para la Home

## 1. Generación

- Crear seis prompts específicos con una dirección fotográfica compartida y composición horizontal 16:10.
- Generar una imagen independiente por familia mediante el generador integrado.
- Inspeccionar cada salida y repetir únicamente las que no representen claramente la categoría o rompan la coherencia de la serie.

## 2. Preparación de activos

- Copiar las seis selecciones al directorio `public/home/product-families/`.
- Normalizar dimensiones y relación de aspecto sin deformar el contenido.
- Convertir a WebP con compresión adecuada para cards de aproximadamente un tercio del ancho de escritorio.

## 3. Integración

- Añadir `homeImage` a las seis entradas de `productFamilies`.
- Cambiar exclusivamente el origen de imagen de `SolutionsStrip` de `family.image` a `family.homeImage`.
- No modificar `Header`, el campo `image` ni los archivos de `public/navigation/product-families/`.

## 4. Verificación

- Ejecutar lint, typecheck, tests y build.
- Revisar visualmente la Home en viewport de escritorio y móvil.
- Comparar el estado de los assets del navbar antes y después para confirmar que permanecen idénticos.
