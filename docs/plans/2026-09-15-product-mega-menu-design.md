# Mega menú de productos con previews individuales

## Objetivo

Reemplazar en escritorio la navegación por seis familias por un mega menú de cinco columnas que exponga las 47 fichas existentes y muestre una preview dedicada para el producto activo. El menú móvil conserva su navegación actual por familias.

## Estructura e interacción

- Las columnas son Productos, Samsung, Soluciones LED, Software y Otras soluciones, respetando el orden de `content/megaMenu.ts`.
- Una franja inferior estable muestra únicamente la imagen centrada del producto activo; Tótem Digital es el estado inicial.
- Hover y foco actualizan la selección. `ArrowDown` desde el disparador enfoca el primer producto, `Tab` mantiene el orden visual y Escape devuelve el foco al disparador.
- El panel queda unido al navbar, conserva el cierre por salida del puntero, click exterior y navegación, y mantiene la preview fija mientras las columnas permiten scroll interno cuando falta altura.
- Solo se renderiza la preview visible y, durante un cambio, se conserva la anterior hasta que cargue la siguiente.

## Dirección visual

- Cada producto dispone de un WebP dedicado de 640×320 en `public/navigation/products/`.
- Se priorizan fotografías reales y renders fieles sobre un lienzo neutro, con el producto centrado y margen seguro.
- Para software se utilizan interfaces reales dentro de dispositivos o composiciones neutras.
- No se incorporan textos generados, logos nuevos, marcas de agua ni alteraciones del producto.

## Verificación

- Validar que los 47 productos aparezcan exactamente una vez, que los enlaces resuelvan fichas reales y que todos los assets existan y midan 640×320.
- Cubrir interacción por mouse y teclado, viewport bajo, móvil sin cambios y accesibilidad automatizada.
- Añadir una referencia visual del mega menú abierto y ejecutar contenido, lint, tipos, pruebas y build.
