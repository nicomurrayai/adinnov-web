# Imágenes de categorías para el mega menú

## Objetivo

Reemplazar las seis imágenes heterogéneas del mega menú de Productos por una serie fotográfica generada con IA que permita reconocer cada familia de producto de un vistazo y se sienta coherente con la identidad visual de Adinnov.

## Dirección visual aprobada

La serie utilizará fotografía editorial de arquitectura y tecnología, con espacios contemporáneos, composición vertical, luz controlada y un tratamiento cromático uniforme: azul marino, grises cálidos, negro y acentos amarillos. Las escenas deben ser realistas, sobrias y comerciales, sin texto legible, marcas, logos ni marcas de agua.

Cada imagen tendrá un sujeto principal claro y espacio visual suficiente en el tercio inferior para el degradado y el nombre de la categoría que ya dibuja el componente.

## Escenas

1. **Tótems y terminales:** tótem digital vertical en un lobby corporativo contemporáneo.
2. **Pantallas profesionales:** videowall o conjunto de displays en un espacio comercial refinado.
3. **LED:** instalación LED de gran impacto en un showroom o escenario corporativo.
4. **Pizarras e interacción:** pantalla táctil colaborativa en una sala de reunión moderna.
5. **Kioscos y autogestión:** terminal de autoservicio para pedidos o atención en un entorno comercial.
6. **Software y servicios:** puesto de control que administra una red de pantallas digitales.

## Integración

- Guardar los activos finales en `public/navigation/product-families/` con nombres estables y descriptivos.
- Usar el mismo tamaño y relación de aspecto en las seis imágenes.
- Convertir los resultados finales a WebP y comprimirlos para el uso pequeño del mega menú.
- Actualizar únicamente las rutas `image` de `productFamilies` en `content/site.ts`; conservar la interacción, el texto y la accesibilidad actuales.
- Mantener el recorte mediante `object-cover` y validar que el sujeto principal continúe visible en el panel vertical.

## Verificación

- Ejecutar lint, typecheck y las pruebas relevantes.
- Construir el proyecto con Next.js.
- Revisar visualmente el mega menú en escritorio y confirmar las seis transiciones por hover/foco.
- Comprobar que no haya texto defectuoso, logos, artefactos visuales ni diferencias fuertes de exposición o color entre imágenes.

