# Navbar claro sobre el hero

## Objetivo

Mejorar la diferenciación del navbar sobre el video oscuro del hero de inicio mediante una superficie clara que mantenga el aspecto flotante actual.

## Dirección visual aprobada

El navbar utilizará un fondo blanco translúcido con desenfoque, borde tenue y sombra suave. Los enlaces, el icono del menú móvil y sus estados de interacción usarán azul oscuro; el enlace activo conservará el acento rojo de la marca. El botón “Cotizar” mantiene su fondo rojo y texto blanco.

La apariencia clara será consistente antes y después del desplazamiento para evitar un cambio de color innecesario. En móvil, la barra superior permanecerá clara cuando se abra el menú, mientras que las tarjetas internas del panel conservarán su fondo oscuro.

## Alcance técnico

- Simplificar `Header` para usar una única variante cromática clara en todas las rutas y posiciones de scroll.
- Eliminar el estado de scroll si deja de tener una función visual.
- Conservar estructura, navegación, mega menú, comportamiento de teclado y foco.
- Ajustar el divisor del panel móvil al esquema claro.
- No modificar el hero, el logo ni el contenido del navbar.

## Verificación

- Ejecutar lint y typecheck.
- Ejecutar las pruebas de navegación relevantes.
- Revisar visualmente el inicio en escritorio y móvil, tanto con el menú cerrado como abierto.
- Confirmar contraste, transición y legibilidad sobre el video del hero.
