# Plan de implementación: navbar claro sobre el hero

## 1. Estilos y estado

- Reemplazar las variantes oscura y clara del navbar por una única superficie blanca translúcida.
- Usar azul oscuro en enlaces e iconos y conservar el rojo de marca en el estado activo y en “Cotizar”.
- Eliminar el estado y el listener de scroll que ya no sean necesarios.

## 2. Menú móvil

- Mantener clara la barra superior al abrir el menú.
- Conservar las tarjetas internas oscuras y adaptar el divisor del panel a la superficie clara.

## 3. Verificación

- Ejecutar lint, typecheck y las pruebas de navegación.
- Construir el proyecto.
- Revisar el inicio en escritorio y móvil con el navbar sobre el hero y con el menú abierto.
