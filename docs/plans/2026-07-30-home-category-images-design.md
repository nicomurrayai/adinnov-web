# Imágenes de familias de producto para la Home

## Objetivo

Crear una serie de seis imágenes generadas con IA para la sección “Una tecnología para cada punto de contacto”, adaptadas al formato horizontal de sus cards y separadas por completo de las imágenes del navbar.

## Dirección visual aprobada

La serie continuará la estética editorial de arquitectura y tecnología del navbar: espacios contemporáneos, fotografía realista y comercial, luz controlada y una paleta común de azul marino, grises cálidos, negro y acentos amarillos.

Las composiciones se diseñarán específicamente para la relación horizontal 16:10. Cada escena tendrá un sujeto principal reconocible, suficiente contexto arquitectónico y un encuadre que resista el recorte con `object-cover`. No habrá texto legible, logos, marcas ni marcas de agua.

## Escenas

1. **Tótems y terminales:** tótem digital vertical en un lobby corporativo contemporáneo, integrado al espacio y visible de cuerpo completo.
2. **Pantallas profesionales:** videowall o conjunto de displays profesionales dentro de un espacio comercial refinado.
3. **LED:** instalación LED de gran impacto en un showroom o escenario corporativo oscuro.
4. **Pizarras e interacción:** pantalla táctil colaborativa en una sala de reunión moderna, con una interacción humana natural y secundaria.
5. **Kioscos y autogestión:** terminal de autoservicio para pedidos, pagos o atención en un entorno comercial contemporáneo.
6. **Software y servicios:** puesto de control que administra una red de pantallas digitales, con monitores y señalización visibles en la misma escena.

## Integración

- Guardar los activos finales en `public/home/product-families/` con nombres estables y descriptivos.
- Generar y normalizar las seis imágenes a la misma relación 16:10 y convertirlas a WebP para uso web.
- Añadir un campo `homeImage` a cada entrada de `productFamilies` en `content/site.ts`.
- Hacer que `SolutionsStrip` consuma `homeImage`.
- Mantener `image` y los seis archivos de `public/navigation/product-families/` sin modificaciones para que el navbar conserve exactamente sus imágenes actuales.
- Conservar textos, enlaces, interacción y accesibilidad de las cards.

## Verificación

- Inspeccionar las seis imágenes para comprobar identidad de categoría, composición horizontal, coherencia cromática y ausencia de texto o artefactos.
- Validar visualmente la sección en escritorio y móvil.
- Confirmar por diff y rutas que el navbar sigue consumiendo `image` y que sus archivos no cambiaron.
- Ejecutar lint, typecheck, pruebas relevantes y build de producción.
