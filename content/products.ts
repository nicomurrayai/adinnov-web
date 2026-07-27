import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "totem-digital",
    title: "Tótem Digital",
    description: "Equipo especialmente dedicado para Cartelería Digital: transmisión videos e imágenes (comunicación y publicidad)",
    category: "totems",
    images: ["/products/totem-digital/01.jpg", "/products/totem-digital/02.jpg", "/products/totem-digital/03.jpg", "/products/totem-digital/04.png", "/products/totem-digital/05.jpg"],
    features: [
      "Estructura de madera",
      "Diseño único con esquinas superiores redondeadas",
      "Laterales de aluminio anodizado: 10 cm",
      "Frente: ploteado con vinilo premium importado de 300 micrones marca Oracal tipo Fibra de Carbono o similar",
      "Color: negro (el color más común), pero se puede encargar de cualquier color",
      "Diseño: puede plotearse el frente con el diseño que el cliente desee",
      "Vidrio float 4 mm (para proteger la pantalla)",
      "Puertas traseras de inspección",
      "Base afelpada para que se pueda deslizar fácilmente",
      "Base opcional: con rueditas",
      "Tensión: 220 V",
      "Conexión Wifi / Ethernet",
      "Posibilidad de incorporarles periféricos y accesorios como cámara web, lector de códigos de barra y QR, POSNET, teclado, impresora térmica, parlantes, auriculares, etc",
      "Unidad de procesamiento: mini PC con Windows o Android Media Player",
      "Opcional: Licencia de Software (sistema de administración remota)",
      "Tótems digitales con pantallas de cualquier medida",
      "Diseño Industrial N° 93139 - Modelo INPI - Derechos reservados",
      "Disponibles para venta y alquiler",
    ],
    sections: [
      {
        heading: "Pantallas Disponibles",
        type: "list" as const,
        items: [
          "LED Display de 32'', 43'', 50'', 55'', 65'' y 75'' Samsung o Philips",
          "Resolución: Full HD (1080 x 1920 px) / 4K (2160 x 3840 px)",
        ],
      },
      {
        heading: "Características Físicas",
        type: "list" as const,
        items: [
          "Indoor: diseñados para uso constante en interior o solo unas pocas horas en exterior",
          "Diseño elegante y moderno",
          "ULTRA DELGADO: solo 10/12 cm de espesor",
          "Peso: liviano, puede ser transportado por una sola persona",
        ],
      },
      {
        heading: "Diseño y Construcción",
        type: "list" as const,
        items: [
          "Estructura de madera",
          "Diseño único con esquinas superiores redondeadas",
          "Laterales de aluminio anodizado: 10 cm",
          "Frente: ploteado con vinilo premium importado de 300 micrones marca Oracal tipo Fibra de Carbono o similar",
          "Color: negro (el color más común), pero se puede encargar de cualquier color",
          "Diseño: puede plotearse el frente con el diseño que el cliente desee",
          "Vidrio float 4 mm (para proteger la pantalla)",
        ],
      },
      {
        heading: "Medidas por Modelo",
        type: "table" as const,
        rows: [
          ["Tamaño", "Alto", "Ancho", "Profundidad"],
          ["32''", "1.90 m", "0.51 m", "0.10 m"],
          ["43''", "1.90 m", "0.63 m", "0.10 m"],
          ["50''", "1.90 m", "0.70 m", "0.10 m"],
          ["55''", "1.95 m", "0.75 m", "0.10 m"],
          ["65''", "1.95 m", "0.80 m", "0.12 m"],
          ["75''", "1.95 m", "0.85 m", "0.12 m"],
        ],
      },
      {
        heading: "Componentes Técnicos",
        type: "list" as const,
        items: [
          "Puertas traseras de inspección",
          "Base afelpada para que se pueda deslizar fácilmente",
          "Base opcional: con rueditas",
          "Tensión: 220 V",
          "Conexión Wifi / Ethernet",
        ],
      },
      {
        heading: "Accesorios y Periféricos",
        type: "list" as const,
        items: [
          "Posibilidad de incorporarles periféricos y accesorios como cámara web, lector de códigos de barra y QR, POSNET, teclado, impresora térmica, parlantes, auriculares, etc",
          "Unidad de procesamiento: mini PC con Windows o Android Media Player",
          "Opcional: Licencia de Software (sistema de administración remota)",
        ],
      },
      {
        heading: "Función",
        type: "list" as const,
        items: [
          "Equipo especialmente dedicado para Cartelería Digital: transmisión videos e imágenes (comunicación y publicidad).",
        ],
      },
      {
        heading: "Fabricación Nacional",
        type: "list" as const,
        items: [
          "Tótems digitales con pantallas de cualquier medida",
          "Diseño Industrial N° 93139 - Modelo INPI - Derechos reservados",
          "Disponibles para venta y alquiler",
        ],
      },
    ],
  },
  {
    slug: "totem-interactivo",
    title: "Tótem Interactivo",
    description: "Equipo especialmente dedicado para usar apps interactivas, juegos, navegación de sitios web, catálogos, ingreso de datos y muchas otras aplicaciones que necesiten una pantalla táctil para interactuar con el software instalado",
    category: "totems",
    images: ["/products/totem-interactivo/01.jpg", "/products/totem-interactivo/02.jpeg", "/products/totem-interactivo/03.png", "/products/totem-interactivo/04.jpeg", "/products/totem-interactivo/05.jpg"],
    features: [
      "Estructura de madera",
      "Diseño único con esquinas superiores redondeadas",
      "Laterales de aluminio anodizado: 10 cm",
      "Frente: ploteado con vinilo premium importado de 300 micrones marca Oracal tipo Fibra de Carbono o similar",
      "Color: negro (el color más común), pero se puede encargar de cualquier color",
      "Diseño: puede plotearse el frente con el diseño que el cliente desee",
      "Vidrio float 4 mm (para proteger la pantalla)",
      "Puertas traseras de inspección",
      "Base afelpada para que se pueda deslizar fácilmente",
      "Base opcional: con rueditas",
      "Tensión: 220 V",
      "Conexión Wifi / Ethernet",
      "Posibilidad de incorporarles periféricos y accesorios como cámara web, lector de códigos de barra y QR, POSNET, teclado, impresora térmica, parlantes, auriculares, etc",
      "Unidad de procesamiento: mini PC con Windows o Android Media Player",
      "Opcional: Licencia de Software (sistema de administración remota)",
      "Tótems digitales con pantallas de cualquier medida",
      "Diseño Industrial N° 93139 - Modelo INPI - Derechos reservados",
      "Disponibles para venta y alquiler",
    ],
    sections: [
      {
        heading: "Pantallas Disponibles",
        type: "list" as const,
        items: [
          "LED Display de 32'', 43'', 50'', 55'', 65'' y 75'' Samsung o Philips",
          "Resolución: Full HD (1080 x 1920 px) / 4K (2160 x 3840 px)",
        ],
      },
      {
        heading: "Características Físicas",
        type: "list" as const,
        items: [
          "Indoor: diseñados para uso constante en interior o solo unas pocas horas en exterior",
          "Diseño elegante y moderno",
          "Marco táctil IR: para lograr que la pantalla sea táctil interactiva",
          "ULTRA DELGADO: solo 10/12 cm de espesor",
          "Peso: liviano, puede ser transportado por una sola persona",
        ],
      },
      {
        heading: "Diseño y Construcción",
        type: "list" as const,
        items: [
          "Estructura de madera",
          "Diseño único con esquinas superiores redondeadas",
          "Laterales de aluminio anodizado: 10 cm",
          "Frente: ploteado con vinilo premium importado de 300 micrones marca Oracal tipo Fibra de Carbono o similar",
          "Color: negro (el color más común), pero se puede encargar de cualquier color",
          "Diseño: puede plotearse el frente con el diseño que el cliente desee",
          "Vidrio float 4 mm (para proteger la pantalla)",
        ],
      },
      {
        heading: "Medidas por Modelo",
        type: "table" as const,
        rows: [
          ["Tamaño", "Alto", "Ancho", "Profundidad"],
          ["32''", "1.90 m", "0.51 m", "0.10 m"],
          ["43''", "1.90 m", "0.63 m", "0.10 m"],
          ["50''", "1.90 m", "0.70 m", "0.10 m"],
          ["55''", "1.95 m", "0.75 m", "0.10 m"],
          ["65''", "1.95 m", "0.80 m", "0.12 m"],
          ["75''", "1.95 m", "0.85 m", "0.12 m"],
        ],
      },
      {
        heading: "Componentes Técnicos",
        type: "list" as const,
        items: [
          "Puertas traseras de inspección",
          "Base afelpada para que se pueda deslizar fácilmente",
          "Base opcional: con rueditas",
          "Tensión: 220 V",
          "Conexión Wifi / Ethernet",
        ],
      },
      {
        heading: "Accesorios y Periféricos",
        type: "list" as const,
        items: [
          "Posibilidad de incorporarles periféricos y accesorios como cámara web, lector de códigos de barra y QR, POSNET, teclado, impresora térmica, parlantes, auriculares, etc",
          "Unidad de procesamiento: mini PC con Windows o Android Media Player",
          "Opcional: Licencia de Software (sistema de administración remota)",
        ],
      },
      {
        heading: "Función",
        type: "list" as const,
        items: [
          "Equipo especialmente dedicado para usar apps interactivas, juegos, navegación de sitios web, catálogos, ingreso de datos y muchas otras aplicaciones que necesiten una pantalla táctil para interactuar con el software instalado.También puede ser usado para Cartelería Digital: transmisión videos e imágenes (comunicación y publicidad).",
        ],
      },
      {
        heading: "Fabricación Nacional",
        type: "list" as const,
        items: [
          "Tótems digitales con pantallas de cualquier medida",
          "Diseño Industrial N° 93139 - Modelo INPI - Derechos reservados",
          "Disponibles para venta y alquiler",
        ],
      },
    ],
  },
  {
    slug: "pantallas-y-pizarras-interactivas",
    title: "Pantallas y Pizarras Interactivas",
    description: "Descubre la tecnología táctil que está revolucionando la educación, el trabajo colaborativo y la interacción digital",
    category: "pizarras",
    images: ["/products/pantallas-y-pizarras-interactivas/01.jpg", "/products/pantallas-y-pizarras-interactivas/02.jpg", "/products/pantallas-y-pizarras-interactivas/03.jpg", "/products/pantallas-y-pizarras-interactivas/04.jpg"],
    features: [
      "Detecta la electricidad natural del cuerpo humano",
      "Es muy precisa, permite gestos multitáctiles (como zoom con dos dedos)",
      "Tiene dos capas que se presionan al tocar",
      "Se puede usar con cualquier objeto (dedo, lápiz, guante)",
      "Usa sensores y haces de luz que detectan interrupciones cuando alguien toca",
      "Soporta varios puntos de contacto y es muy resistente",
      "Intuitivas: se usan fácilmente con gestos naturales",
      "Rápidas: permiten ejecutar acciones directamente",
      "Versátiles: se adaptan a múltiples usos y entornos",
      "Ahorro de espacio: no requieren periféricos externos",
      "Hacer video conferencias a través de Zoom, Skype, Google HangOuts, Microsoft Teams, etc.",
      "Conectarse a la pantalla con cualquier dispositivo (PC, Android o iOS) para exponer",
      "Conectar más de un dispositivo a la vez",
      "Interactuar con herramientas de marcación en pantalla en cualquiera de los dispositivos",
      "Navegar páginas Web y hacer marcaciones sobre estas",
      "Ver videos y poder hacer marcaciones sobre estos",
      "Compilar todas las pantallas con marcaciones en una pizarra virtual",
      "Trabajar con distintos pizarrones simultáneamente",
      "Utilizar aplicaciones de Windows con capacidades táctiles de gran escala",
      "Ideal para salas de reuniones, oficinas o aulas",
      "Mejora la participación y atención del público",
      "Permite guardar las anotaciones para repasarlas después",
      "Se adapta a diferentes estilos de aprendizaje",
      "Fomenta el trabajo en equipo y la interactividad",
    ],
    sections: [
      {
        heading: "¿Qué es una pantalla táctil?",
        type: "list" as const,
        items: [
          "Una pantalla táctil es una superficie sensible al tacto que permite interactuar directamente con lo que se muestra en la pantalla, sin necesidad de un teclado o mouse. Basta con tocar con el dedo o un lápiz digital (stylus) para ejecutar acciones, escribir, dibujar o navegar.",
        ],
      },
      {
        heading: "¿Cómo funciona?",
        type: "list" as const,
        items: [
          "Las pantallas táctiles detectan el contacto físico en su superficie mediante distintos sistemas tecnológicos. Los más comunes son:",
        ],
      },
      {
        heading: "1. Capacitiva",
        type: "list" as const,
        items: [
          "La más usada en celulares, tablets y monitores modernos:",
          "Detecta la electricidad natural del cuerpo humano",
          "Es muy precisa, permite gestos multitáctiles (como zoom con dos dedos)",
        ],
      },
      {
        heading: "2. Resistiva",
        type: "list" as const,
        items: [
          "Más antigua, usada en cajeros o dispositivos industriales:",
          "Tiene dos capas que se presionan al tocar",
          "Se puede usar con cualquier objeto (dedo, lápiz, guante)",
        ],
      },
      {
        heading: "3. Infrarroja / Óptica",
        type: "list" as const,
        items: [
          "En pizarras interactivas y pantallas grandes:",
          "Usa sensores y haces de luz que detectan interrupciones cuando alguien toca",
          "Soporta varios puntos de contacto y es muy resistente",
        ],
      },
      {
        heading: "¿Para qué se usan?",
        type: "list" as const,
        items: [
          "Tecnología personalCelulares, tablets, notebooks convertibles.Educación y oficinasPizarras interactivas, monitores táctiles para presentaciones.Comercio y serviciosKioscos de autoservicio, cajeros automáticos, terminales de pago.Industria y medicinaPaneles de control, sistemas de diagnóstico interactivo.",
        ],
      },
      {
        heading: "Tecnología personal",
        type: "list" as const,
        items: [
          "Celulares, tablets, notebooks convertibles.",
        ],
      },
      {
        heading: "Educación y oficinas",
        type: "list" as const,
        items: [
          "Pizarras interactivas, monitores táctiles para presentaciones.",
        ],
      },
      {
        heading: "Comercio y servicios",
        type: "list" as const,
        items: [
          "Kioscos de autoservicio, cajeros automáticos, terminales de pago.",
        ],
      },
      {
        heading: "Industria y medicina",
        type: "list" as const,
        items: [
          "Paneles de control, sistemas de diagnóstico interactivo.",
        ],
      },
      {
        heading: "Ventajas de las pantallas táctiles",
        type: "list" as const,
        items: [
          "Intuitivas: se usan fácilmente con gestos naturales✓Rápidas: permiten ejecutar acciones directamente✓Versátiles: se adaptan a múltiples usos y entornos✓Ahorro de espacio: no requieren periféricos externos",
        ],
      },
      {
        heading: "En resumen",
        type: "list" as const,
        items: [
          "Una pantalla táctil es una tecnología que permite controlar un dispositivo directamente con el dedo o un lápiz digital, reemplazando los métodos tradicionales de entrada. Su facilidad de uso y versatilidad la han convertido en una herramienta clave en la vida cotidiana, la educación, el trabajo y la industria.",
        ],
      },
      {
        heading: "Pantalla táctil",
        type: "list" as const,
        items: [
          "Permite que uno o varios usuarios interactúen directamente con la superficie.",
        ],
      },
      {
        heading: "Funciona como extensión de PC",
        type: "list" as const,
        items: [
          "Todo lo que se muestra en la computadora puede manipularse desde la pizarra.",
        ],
      },
      {
        heading: "Herramientas digitales",
        type: "list" as const,
        items: [
          "Ofrece lápices, subrayadores, borradores, reglas virtuales y funciones multimedia.",
        ],
      },
      {
        heading: "Software educativo",
        type: "list" as const,
        items: [
          "Suelen incluir programas que facilitan la enseñanza o el trabajo colaborativo.",
        ],
      },
      {
        heading: "Usos comunes",
        type: "list" as const,
        items: [
          "EducaciónClases dinámicas, actividades interactivas, anotaciones sobre mapas, videos o documentos.EmpresasReuniones, brainstorming, presentaciones colaborativas o capacitaciones.Salud, arquitectura, diseñoPara analizar imágenes, colaborar sobre planos o mostrar tratamientos.",
        ],
      },
      {
        heading: "Educación",
        type: "list" as const,
        items: [
          "Clases dinámicas, actividades interactivas, anotaciones sobre mapas, videos o documentos.",
        ],
      },
      {
        heading: "Empresas",
        type: "list" as const,
        items: [
          "Reuniones, brainstorming, presentaciones colaborativas o capacitaciones.",
        ],
      },
      {
        heading: "Salud, arquitectura, diseño",
        type: "list" as const,
        items: [
          "Para analizar imágenes, colaborar sobre planos o mostrar tratamientos.",
        ],
      },
      {
        heading: "Ventajas de las pizarras interactivas",
        type: "list" as const,
        items: [
          "Mejora la participación y atención del público✓Permite guardar las anotaciones para repasarlas después✓Se adapta a diferentes estilos de aprendizaje✓Fomenta el trabajo en equipo y la interactividad",
        ],
      },
      {
        heading: "Poder de procesamiento",
        type: "list" as const,
        items: [
          "Las pantallas interactivas cuentan con procesadores y memoria RAM integrados, así como también memoria interna de almacenamiento ultra rápido (SSD). Los sistemas operativos pueden ser Windows, Android o algún otro SO propietario de cada marca.",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "Conectividad inalámbrica con dispositivos Windows, Android y iOS",
          "Entradas USB 3.0, entrada RJ45, HDMI y DP",
        ],
      },
      {
        heading: "Multitáctil",
        type: "list" as const,
        items: [
          "Gracias a su característica multitáctil, pueden interactuar al mismo tiempo con el dispositivo múltiples personas. Tecnología infrarroja de última generación.",
        ],
      },
      {
        heading: "Múltiples pizarras",
        type: "list" as const,
        items: [
          "La pizarra incorpora un pizarrón que permitirá utilizar el dispositivo como una pizarra, guardar distintos pizarrones en un archivo PDF, interactuar con imágenes y recortes de aplicaciones o sitios web, etc.",
        ],
      },
      {
        heading: "Trabajo con sitios web",
        type: "list" as const,
        items: [
          "Incorpore fácilmente un recorte de cualquier sitio web para incorporar a alguna de sus páginas de su pizarra digital.",
        ],
      },
      {
        heading: "Teclado Wireless + Teclado en pantalla",
        type: "list" as const,
        items: [
          "El dispositivo puede ser acompañado de un teclado/mouse inalámbrico para poder ingresar datos de forma veloz, aunque también se puede hacer el mismo proceso con el teclado en pantalla que incluye.",
        ],
      },
      {
        heading: "Lápiz táctil",
        type: "list" as const,
        items: [
          "Los lápices táctiles son usados para un mejor uso de la escritura en pantalla (aunque no son imprescindibles para escribir en pantalla).",
        ],
      },
      {
        heading: "Interfaz táctil avanzada",
        type: "list" as const,
        items: [
          "Tecnología de última generación que permite una experiencia táctil fluida y precisa para todas las aplicaciones.",
        ],
      },
      {
        heading: "Pantalla multitáctil",
        type: "list" as const,
        items: [
          "Soporte para múltiples puntos de contacto simultáneos para colaboración en equipo.",
        ],
      },
      {
        heading: "Marcación en pantalla, sitios y videos",
        type: "list" as const,
        items: [
          "Aproveche para hacer anotaciones y luego guardarlos o grabar la pantalla para poder ser compartido.",
        ],
      },
      {
        heading: "Hand Swipe",
        type: "list" as const,
        items: [
          "La comodidad de escribir con una mano y borrar con la otra, sin necesidad de tener que seleccionar ninguna herramienta. Esto permite trabajar con mayor comodidad, velocidad y fluidez.",
        ],
      },
      {
        heading: "Sistema Operativo: Windows",
        type: "list" as const,
        items: [
          "El corazón de la pantalla, que pocos equipos de estas características pueden ofrecer. Hace todo lo que estás acostumbrado a hacer en tu PC en un tamaño mucho más grande y con una interfaz táctil.",
        ],
      },
      {
        heading: "Software preinstalado",
        type: "list" as const,
        items: [
          "La pizarra digital viene con un software preinstalado que permite la utilización de todas las herramientas principales con las que una Pizarra Interactiva debe contar.",
        ],
      },
    ],
  },
  {
    slug: "pizarra-interactiva-i3touch-e-one",
    title: "Pizarra Interactiva i3Touch E-One",
    description: "Panel interactivo todo-en-uno de i3-Technologies con tecnología IR de alta precisión y experiencia táctil natural",
    category: "pizarras",
    images: ["/products/pizarra-interactiva-i3touch-e-one/01.png", "/products/pizarra-interactiva-i3touch-e-one/02.png", "/products/pizarra-interactiva-i3touch-e-one/03.png", "/products/pizarra-interactiva-i3touch-e-one/04.webp", "/products/pizarra-interactiva-i3touch-e-one/05.jpeg", "/products/pizarra-interactiva-i3touch-e-one/06.jpeg"],
    features: [
      "Disponible en 65″, 75″ y 86″ con resolución 4K UHD (3840 × 2160)",
      "Brillo entre 380–450 cd/m²",
      "Contraste dinámico hasta 4000:1",
      "Panel IPS-ADS con vidrio antirreflejo de 4 mm",
      "Escritura fluida \"pen-to-paper\" gracias al \"zero air gap\"",
      "Tecnología infrarroja de alta precisión",
      "Múltiples toques simultáneos",
      "Escritura con sensación natural",
      "Dos stylus pasivos con borrador incorporado",
      "Corre con Android 11",
      "i3STUDIO preinstalado",
      "Pizarra digital, anotaciones, presentaciones",
      "Navegación y videoconferencia",
      "Sin necesidad de ordenador",
      "Tres HDMI 2.0 (uno con ARC)",
      "VGA, RS-232, S/PDIF",
      "Salida HDMI",
      "2× USB-C (un puerto con Power Delivery 65 W)",
      "3× USB-A 2.0",
      "2× USB-A 3.0",
      "2× RJ-45",
      "Estética moderna con bordes ultrafinos y detalles en aluminio",
      "Vidrio reforzado (MOHS 7)",
      "Vida útil estimada en unas 50.000 h",
    ],
    sections: [
      {
        heading: "Descripción General",
        type: "list" as const,
        items: [
          "El i3TOUCH E-ONE es un panel interactivo todo-en-uno de i3-Technologies, diseñado para aulas y espacios corporativos que ofrece una experiencia táctil natural y una excelente relación calidad-precio.",
          "El i3TOUCH E-ONE ofrece potencia, durabilidad y una experiencia integrada todo en uno por un valor increíble. Con tecnología IR de alta precisión y espacio de aire cero, el E-ONE le brinda una excelente experiencia multitáctil.",
        ],
      },
      {
        heading: "Pantalla e Imagen",
        type: "list" as const,
        items: [
          "Disponible en 65″, 75″ y 86″ con resolución 4K UHD (3840 × 2160)",
          "Brillo entre 380–450 cd/m²",
          "Contraste dinámico hasta 4000:1",
          "Panel IPS-ADS con vidrio antirreflejo de 4 mm",
          "Escritura fluida \"pen-to-paper\" gracias al \"zero air gap\"",
        ],
      },
      {
        heading: "Táctil e Interactividad",
        type: "list" as const,
        items: [
          "Tecnología infrarroja de alta precisión",
          "Múltiples toques simultáneos",
          "Escritura con sensación natural",
          "Dos stylus pasivos con borrador incorporado",
        ],
      },
      {
        heading: "Sistema y Software",
        type: "list" as const,
        items: [
          "Corre con Android 11",
          "i3STUDIO preinstalado",
          "Pizarra digital, anotaciones, presentaciones",
          "Navegación y videoconferencia",
          "Sin necesidad de ordenador",
        ],
      },
      {
        heading: "Conectividad y Hardware",
        type: "list" as const,
        items: [
          "Botón ConfigurableUn botón configurable permite congelar imagen, hacer capturas o cambiar fuente.Entradas de Video• Tres HDMI 2.0 (uno con ARC)• VGA, RS-232, S/PDIF• Salida HDMIConectividad USB• 2× USB-C (un puerto con Power Delivery 65 W)• 3× USB-A 2.0• 2× USB-A 3.0• 2× RJ-45Sistema de AudioAltavoces estéreo integrados: 2×16 W + subwoofer 16 W.",
        ],
      },
      {
        heading: "Botón Configurable",
        type: "list" as const,
        items: [
          "Un botón configurable permite congelar imagen, hacer capturas o cambiar fuente.",
        ],
      },
      {
        heading: "Entradas de Video",
        type: "list" as const,
        items: [
          "Tres HDMI 2.0 (uno con ARC)",
          "VGA, RS-232, S/PDIF",
          "Salida HDMI",
        ],
      },
      {
        heading: "Conectividad USB",
        type: "list" as const,
        items: [
          "2× USB-C (un puerto con Power Delivery 65 W)",
          "3× USB-A 2.0",
          "2× USB-A 3.0",
          "2× RJ-45",
        ],
      },
      {
        heading: "Sistema de Audio",
        type: "list" as const,
        items: [
          "Altavoces estéreo integrados: 2×16 W + subwoofer 16 W.",
        ],
      },
      {
        heading: "Multitarea",
        type: "list" as const,
        items: [
          "Soporta multitarea con modo pantalla dividida.",
        ],
      },
      {
        heading: "Sensor Inteligente",
        type: "list" as const,
        items: [
          "Sensor de luz y movimiento, que ajusta brillo y ahorra energía.",
        ],
      },
      {
        heading: "Administración Remota",
        type: "list" as const,
        items: [
          "Administración remota de dispositivos vía i3RDM, ideal para flotas en entornos educativos o corporativos.",
        ],
      },
      {
        heading: "Videoconferencia",
        type: "list" as const,
        items: [
          "Compatible con cámaras externas, como la i3CAMERA Pro 4K (se vende aparte), para reuniones híbridas.",
        ],
      },
      {
        heading: "Videoconferencia",
        type: "list" as const,
        items: [
          "Cámaras ExternasCompatible con cámaras externas, como la i3CAMERA Pro 4K (se vende aparte), para reuniones híbridas.Opción BYOMOpción BYOM (\"Bring Your Own Meeting\"): conecta tu notebook por USB-C para usar tu propio software de videollamadas.",
        ],
      },
      {
        heading: "Cámaras Externas",
        type: "list" as const,
        items: [
          "Compatible con cámaras externas, como la i3CAMERA Pro 4K (se vende aparte), para reuniones híbridas.",
        ],
      },
      {
        heading: "Opción BYOM",
        type: "list" as const,
        items: [
          "Opción BYOM (\"Bring Your Own Meeting\"): conecta tu notebook por USB-C para usar tu propio software de videollamadas.",
        ],
      },
      {
        heading: "Diseño y Resistencia",
        type: "list" as const,
        items: [
          "Estética moderna con bordes ultrafinos y detalles en aluminio✓Vidrio reforzado (MOHS 7)✓Vida útil estimada en unas 50.000 h✓Consumo energético eficiente✓Sin suscripciones de software✓Actualizaciones OTA gratuitas",
        ],
      },
      {
        heading: "Botón Multifunción",
        type: "list" as const,
        items: [
          "Defina sus acciones favoritas en un botón de hardware. Puede configurarlo para congelar la imagen, tomar una captura de pantalla, cambiar a su fuente de entrada de video preferida, etc.",
        ],
      },
      {
        heading: "i3STUDIO",
        type: "list" as const,
        items: [
          "Nuestras pantallas interactivas vienen con i3STUDIO preinstalado. i3STUDIO le ofrece todo lo que necesita para desarrollar su mejor clase, lanzamiento, presentación o sesión de brainstorming.",
        ],
      },
      {
        heading: "Multitasking",
        type: "list" as const,
        items: [
          "La pantalla soporta el modo de pantalla dividida, lo que le permite usar dos aplicaciones al mismo tiempo en su i3TOUCH.",
        ],
      },
      {
        heading: "Conexión de un Solo Cable",
        type: "list" as const,
        items: [
          "Utilice los altavoces y la cámara de la pantalla i3TOUCH conectando su portátil a la pantalla con un cable USBC. Un solo cable para el audio, el vídeo, la alimentación y la función táctil.",
        ],
      },
      {
        heading: "Altavoces Integrados",
        type: "list" as const,
        items: [
          "El sistema de audio integrado emite un sonido alto y con cuerpo que es capaz de llenar toda una habitación.",
        ],
      },
      {
        heading: "Escritura Natural",
        type: "list" as const,
        items: [
          "Una experiencia de escritura natural es una de nuestras principales prioridades. Gracias a la tecnología de espacio de aire cero, pudimos lograr una sensación de lápiz sobre papel.",
        ],
      },
      {
        heading: "Entrada Fácil",
        type: "list" as const,
        items: [
          "Disfrute de la libertad de la conectividad con las ranuras de entrada USB-C y HDMI frontales.",
        ],
      },
      {
        heading: "Sensor de Movimiento y Luz",
        type: "list" as const,
        items: [
          "La combinación de un sensor de movimiento y luz optimizará su experiencia de visualización en todas las condiciones de iluminación y mantendrá el consumo de energía equilibrado.",
        ],
      },
      {
        heading: "Tecnología Zero Air Gap",
        type: "list" as const,
        items: [
          "La tecnología de espacio de aire cero proporciona una experiencia de escritura natural y fluida, similar a escribir en papel.",
        ],
      },
      {
        heading: "Experiencia Táctil",
        type: "list" as const,
        items: [
          "Tecnología infrarroja de alta precisión que permite múltiples toques simultáneos y escritura con sensación natural.",
        ],
      },
      {
        heading: "Especificaciones Técnicas",
        type: "list" as const,
        items: [
          "CaracterísticaEspecificaciónTamaños Disponibles65″, 75″ y 86″Resolución4K UHD (3840 × 2160)Brillo380–450 cd/m²ContrasteHasta 4000:1PanelIPS-ADS con vidrio antirreflejo de 4 mmSistema OperativoAndroid 11Tecnología TáctilInfrarroja de alta precisiónVida ÚtilEstimada en 50.000 horas",
        ],
      },
    ],
  },
  {
    slug: "pizarra-interactiva-i3touch-ultra-105",
    title: "Pizarra Interactiva i3Touch Ultra 105''",
    description: "Pantalla interactiva ultra ancha premium de aspecto 21:9 que redefine la colaboración visual en espacios grandes",
    category: "pizarras",
    images: ["/products/pizarra-interactiva-i3touch-ultra-105/01.png", "/products/pizarra-interactiva-i3touch-ultra-105/02.png", "/products/pizarra-interactiva-i3touch-ultra-105/03.png", "/products/pizarra-interactiva-i3touch-ultra-105/04.jpg", "/products/pizarra-interactiva-i3touch-ultra-105/05.jpg", "/products/pizarra-interactiva-i3touch-ultra-105/06.jpg"],
    features: [
      "Panel de 105″ con proporción 21:9",
      "33% más de espacio útil que pantalla 16:9",
      "Formato ultra ancho para colaboración",
      "Resolución 5K ultra-nítida: 5120 × 2160 píxeles",
      "Tecnología de bonding óptico",
      "Contraste 4,000:1 y brillo 450 cd/m²",
      "Vidrio antirreflejo",
      "178° horizontales y verticales",
      "Panel IPS de alta calidad",
      "Visibilidad perfecta desde cualquier ángulo",
      "USB-C (100 W PD + DisplayPort)",
      "USB-C adicional, HDMI 2.0 (varios)",
      "HDMI Out, USB-A 2.0/3.0",
      "Salida de audio 3.5 mm, SPDIF, RS-232",
      "Wi-Fi, Bluetooth",
      "Estructura robusta con bordes ultrafinos y acabado premium",
      "Vidrio reforzado, panel ópticamente bondado y construcción duradera (~100 kg)",
      "Garantía de 5 años (registración extiende a 8 en entornos educativos)",
      "Contraste mejorado y ángulos más amplios",
      "Calidad de imagen perfecta en espacios más grandes",
    ],
    sections: [
      {
        heading: "Descripción General",
        type: "list" as const,
        items: [
          "El i3TOUCH ULTRA 105'' es una pantalla interactiva ultra ancha premium de aspecto 21:9 que redefine la colaboración visual en espacios grandes. Analice, visualice e interactúe con big data y temas complejos, y divida la pantalla para trabajar en múltiples tareas.",
          "Reúna a todos con capacidades inmersivas de videoconferencia y presentación. Con un 33% más de espacio útil que una pantalla tradicional 16:9, es ideal para análisis de datos, gestión de proyectos y colaboración en equipo.",
        ],
      },
      {
        heading: "Tamaño y Formato",
        type: "list" as const,
        items: [
          "Panel de 105″ con proporción 21:9",
          "33% más de espacio útil que pantalla 16:9",
          "Formato ultra ancho para colaboración",
        ],
      },
      {
        heading: "Resolución 5K",
        type: "list" as const,
        items: [
          "Resolución 5K ultra-nítida: 5120 × 2160 píxeles",
          "Tecnología de bonding óptico",
          "Contraste 4,000:1 y brillo 450 cd/m²",
          "Vidrio antirreflejo",
        ],
      },
      {
        heading: "Ángulos de Visión",
        type: "list" as const,
        items: [
          "178° horizontales y verticales",
          "Panel IPS de alta calidad",
          "Visibilidad perfecta desde cualquier ángulo",
        ],
      },
      {
        heading: "Interactividad y Tacto",
        type: "list" as const,
        items: [
          "Tecnología C-SenseTecnología táctil capacitiva que ofrece una experiencia rápida y natural con hasta 20 toques simultáneos.Precisión y RobustezVidrio resistente tipo safety glass con táctil preciso incluso al usar stylus para máxima precisión.",
        ],
      },
      {
        heading: "Tecnología C-Sense",
        type: "list" as const,
        items: [
          "Tecnología táctil capacitiva que ofrece una experiencia rápida y natural con hasta 20 toques simultáneos.",
        ],
      },
      {
        heading: "Precisión y Robustez",
        type: "list" as const,
        items: [
          "Vidrio resistente tipo safety glass con táctil preciso incluso al usar stylus para máxima precisión.",
        ],
      },
      {
        heading: "Sistema Operativo",
        type: "list" as const,
        items: [
          "Android 13 con i3STUDIO preinstalado. Incluye pizarra digital, multitarea, aplicaciones, anotaciones y videoconferencia sin necesidad de PC extra.",
        ],
      },
      {
        heading: "Split-Screen Multitarea",
        type: "list" as const,
        items: [
          "Se destacan usos simultáneos de varias aplicaciones o ventanas para máxima productividad.",
        ],
      },
      {
        heading: "Slot OPS",
        type: "list" as const,
        items: [
          "Permite conectar PC dedicado internamente, manteniendo el diseño limpio y sin cables visibles.",
        ],
      },
      {
        heading: "Escalado Adaptable",
        type: "list" as const,
        items: [
          "Su software se puede utilizar inmediatamente después de la configuración, adaptándose automáticamente a la relación de aspecto 21:9.",
        ],
      },
      {
        heading: "Reuniones Híbridas Optimizadas",
        type: "list" as const,
        items: [
          "Diseñado para Microsoft Teams Rooms, Zoom Rooms y compatible con Microsoft Front Row en 21:9, favoreciendo que todos los participantes se vean a la misma altura.",
        ],
      },
      {
        heading: "Análisis y Visualización",
        type: "list" as const,
        items: [
          "Ideal para análisis y visualización: permite ver data extensa, hojas de cálculo o diseños lado a lado sin necesidad de cambiar ventanas.",
        ],
      },
      {
        heading: "Gestión de Proyectos",
        type: "list" as const,
        items: [
          "Perfecto para Jira, Miro, Mural, BIM u otro software especializado combinado con las capacidades interactivas de la pantalla.",
        ],
      },
      {
        heading: "Sensores Inteligentes",
        type: "list" as const,
        items: [
          "Sensores de luz y movimiento que ajustan el brillo automáticamente para ahorro energético.",
        ],
      },
      {
        heading: "Audio Envolvente",
        type: "list" as const,
        items: [
          "Parlantes integrados potentes para cubrir salas grandes con calidad de sonido excepcional.",
        ],
      },
      {
        heading: "Conectividad Completa",
        type: "list" as const,
        items: [
          "USB-C (100 W PD + DisplayPort)",
          "USB-C adicional, HDMI 2.0 (varios)",
          "HDMI Out, USB-A 2.0/3.0",
          "Salida de audio 3.5 mm, SPDIF, RS-232",
          "Wi-Fi, Bluetooth",
        ],
      },
      {
        heading: "Diseño y Durabilidad",
        type: "list" as const,
        items: [
          "Estructura robusta con bordes ultrafinos y acabado premium✓Vidrio reforzado, panel ópticamente bondado y construcción duradera (~100 kg)✓Garantía de 5 años (registración extiende a 8 en entornos educativos)✓Contraste mejorado y ángulos más amplios✓Calidad de imagen perfecta en espacios más grandes",
        ],
      },
      {
        heading: "Espacio de Trabajo Amplio",
        type: "list" as const,
        items: [
          "Con su relación de pantalla ultra ancha de 21:9, muestra un 33% más de contenido que una pantalla estándar 16:9, adaptándose mejor para múltiples ventanas y aplicaciones lado a lado.",
        ],
      },
      {
        heading: "Excel y Contenido Rico",
        type: "list" as const,
        items: [
          "Muy útil cuando se trabaja con archivos de Excel, contenidos ricos en texto y multimedia, y dibujos o imágenes hiperdetallados. Los participantes pueden ver más información sin acercar y alejar constantemente.",
        ],
      },
      {
        heading: "Sala Multifuncional",
        type: "list" as const,
        items: [
          "Transforme cualquier sala en un espacio multifuncional: desde una sala de scrum de pie a una sala de videoconferencias, o desde una sala de cara al cliente a un espacio de brainstorming.",
        ],
      },
      {
        heading: "Participación Activa",
        type: "list" as const,
        items: [
          "Promueva el compromiso del equipo al permitir que los usuarios compartan ideas, creen contenido e interactúen con pizarras, resaltado y edición. Una pantalla ultra ancha significa más espacio para la colaboración visual.",
        ],
      },
      {
        heading: "Especificaciones Técnicas",
        type: "list" as const,
        items: [
          "EspecificaciónDetallesPantalla105″ 21:9 5K (5120×2160)TáctilCapacitiva – 20 toques simultáneosSistema OperativoAndroid 13 con i3STUDIOConectividadUSB-C (100 W), HDMI, USB-A, SPDIF, RS-232, Wi-Fi, BluetoothSensoresLuz y movimientoAudioIntegrado y potenteDimensiones2.511 × 1.124 × 0.097 mPeso~100 kg",
        ],
      },
    ],
  },
  {
    slug: "terminales-interactivas-pantallas-pequenas",
    title: "Terminales Interactivas",
    description: "Pantallas pequeñas (15'' - 27'') - Soluciones digitales personalizadas para autoservicio y automatización",
    category: "terminales",
    images: ["/products/terminales-interactivas-pantallas-pequenas/01.jpg", "/products/terminales-interactivas-pantallas-pequenas/02.jpg", "/products/terminales-interactivas-pantallas-pequenas/03.jpg", "/products/terminales-interactivas-pantallas-pequenas/04.jpg", "/products/terminales-interactivas-pantallas-pequenas/05.jpg"],
    features: [
      "✅Facilitan la autogestión del usuario",
      "✅Agilizan trámites, reduciendo colas y esperas",
      "✅Mejoran la accesibilidad a información y servicios",
      "✅Operan 24/7 (en muchos casos)",
      "✅Reducen la carga operativa del personal humano",
      "Impresora térmica",
      "Posnet",
      "Lector de códigos QR",
      "Teclado",
      "Cámara de videovigilancia",
      "Altavoces",
      "Sensores de movimiento",
    ],
    sections: [
      {
        heading: "Descripción General",
        type: "list" as const,
        items: [
          "En ADINNOV fabricamos terminales interactivas con diferentes diseños: distintos tipos de materiales, dimensiones y funcionalidades. Poseemos algunos diseños estándar ya realizados, pero también podemos realizar cualquier tipo de diseño a la medida de las necesidades de nuestros clientes.",
          "Podemos incorporarle todo tipo de periférico como impresora térmica, posnet, lector de códigos QR, teclado, cámara de videovigilancia, altavoces, sensores de movimiento, etc. La configuración de la pantalla es totalmente libre.",
        ],
      },
      {
        heading: "🖥️ Pantalla Táctil",
        type: "list" as const,
        items: [
          "Permite al usuario seleccionar opciones, completar formularios o hacer búsquedas con solo tocar la pantalla.",
        ],
      },
      {
        heading: "💾 Software Personalizado",
        type: "list" as const,
        items: [
          "Cada terminal tiene un sistema diseñado para un fin específico: información turística, turnos médicos, pagos, encuestas, etc.",
        ],
      },
      {
        heading: "💳 Opciones de Pago",
        type: "list" as const,
        items: [
          "Pueden incluir lector de tarjetas, QR, NFC o efectivo, especialmente si se usan para compras o trámites pagos.",
        ],
      },
      {
        heading: "🖨️ Impresión de Tickets",
        type: "list" as const,
        items: [
          "Algunas terminales imprimen turnos, recibos, entradas, facturas, etc.",
        ],
      },
      {
        heading: "📡 Conectividad",
        type: "list" as const,
        items: [
          "Están conectadas a internet o redes internas para mantener el sistema actualizado y registrar operaciones.",
        ],
      },
      {
        heading: "⚙️ Configuración Libre",
        type: "list" as const,
        items: [
          "Monitores desde 15'' hasta 27'' con orientación horizontal o vertical según necesidades.",
        ],
      },
      {
        heading: "Pantallas Pequeñas (15'' - 27'')",
        type: "list" as const,
        items: [
          "Los tamaños más comunes son 19'', 22'' y 24''. Ideales para espacios reducidos y aplicaciones específicas.",
        ],
      },
      {
        heading: "Pantallas Grandes (32'' - 55'')",
        type: "list" as const,
        items: [
          "Equipos diferentes no solo en cuanto a sus dimensiones sino también a las funcionalidades que ofrecen.",
        ],
      },
      {
        heading: "Orientación Flexible",
        type: "list" as const,
        items: [
          "La orientación es opcional pudiendo dejarla en formato horizontal o vertical según el uso específico.",
        ],
      },
      {
        heading: "🏦 Bancos",
        type: "list" as const,
        items: [
          "Consultas de saldo, transferencias, emisión de comprobantes, gestión de turnos.",
        ],
      },
      {
        heading: "🏥 Salud",
        type: "list" as const,
        items: [
          "Registro de pacientes, emisión de turnos, consulta de resultados.",
        ],
      },
      {
        heading: "🏛️ Organismos Públicos",
        type: "list" as const,
        items: [
          "Trámites como solicitar partidas, imprimir constancias, sacar turnos.",
        ],
      },
      {
        heading: "🛍️ Comercio",
        type: "list" as const,
        items: [
          "Kioscos de pago, consulta de precios, búsqueda de productos.",
        ],
      },
      {
        heading: "🚌 Transporte",
        type: "list" as const,
        items: [
          "Compra de pasajes, check-in, impresión de boletos.",
        ],
      },
      {
        heading: "🎫 Eventos",
        type: "list" as const,
        items: [
          "Retiro de entradas, registro, votación en ferias o congresos.",
        ],
      },
      {
        heading: "Ventajas",
        type: "list" as const,
        items: [
          "✅Facilitan la autogestión del usuario✅Agilizan trámites, reduciendo colas y esperas✅Mejoran la accesibilidad a información y servicios✅Operan 24/7 (en muchos casos)✅Reducen la carga operativa del personal humano",
        ],
      },
      {
        heading: "Periféricos Disponibles",
        type: "list" as const,
        items: [
          "Impresora térmica",
          "Posnet",
          "Lector de códigos QR",
          "Teclado",
          "Cámara de videovigilancia",
          "Altavoces",
          "Sensores de movimiento",
        ],
      },
      {
        heading: "Unidad de Procesamiento",
        type: "list" as const,
        items: [
          "Se elige de acuerdo a las necesidades del cliente. Se debe tener en cuenta la aplicación que se quiera dejar corriendo en el equipo.",
          "Se elegirá una unidad de procesamiento que cuente con un procesador, memoria RAM y memoria de almacenamiento adecuados para que la experiencia del usuario sea excelente.",
        ],
      },
      {
        heading: "En Resumen",
        type: "list" as const,
        items: [
          "Una terminal interactiva táctil es una solución tecnológica moderna que permite automatizar servicios y facilitar el acceso a información o trámites, ofreciendo una experiencia rápida, eficiente y amigable para el usuario. Se utilizan ampliamente en distintos sectores por su practicidad y versatilidad.",
        ],
      },
    ],
  },
  {
    slug: "terminales-interactivas-pantallas-grandes",
    title: "Terminales Interactivas",
    description: "Pantallas grandes (32'' - 55'') - Soluciones digitales de gran formato para máxima visibilidad e impacto",
    category: "terminales",
    images: ["/products/terminales-interactivas-pantallas-grandes/01.jpg", "/products/terminales-interactivas-pantallas-grandes/02.jpg", "/products/terminales-interactivas-pantallas-grandes/03.png", "/products/terminales-interactivas-pantallas-grandes/04.jpg"],
    features: [
      "Mayor visibilidad y impacto visual",
      "Ideales para entornos amplios",
      "Limitaciones en incorporación de periféricos",
      "Orientación principalmente horizontal",
      "Aplicaciones más visuales e inmersivas",
      "Más adecuadas para periféricos",
      "Impresora térmica, posnet, QR",
      "Teclado, cámara, altavoces",
      "Orientación flexible",
      "Aplicaciones más funcionales",
    ],
    sections: [
      {
        heading: "Descripción General",
        type: "list" as const,
        items: [
          "En ADINNOV fabricamos terminales interactivas con diferentes diseños: distintos tipos de materiales, dimensiones y funcionalidades. Poseemos algunos diseños estándar ya realizados, pero también podemos realizar cualquier tipo de diseño a la medida de las necesidades de nuestros clientes.",
          "En este tipo de terminales interactivas la configuración de la pantalla posee ciertas limitaciones por las grandes dimensiones de las pantallas. Podemos incorporar monitores desde 32'' hasta 55'', siendo los de 43'' y 50'' los más usados.",
        ],
      },
      {
        heading: "🖥️ Pantalla de Gran Formato",
        type: "list" as const,
        items: [
          "Brinda mejor visibilidad desde lejos, ideal para entornos amplios. Permite mostrar más contenido al mismo tiempo y mejora la experiencia de uso en interfaces ricas.",
        ],
      },
      {
        heading: "👆 Interfaz Multitáctil",
        type: "list" as const,
        items: [
          "Se puede operar con uno o varios dedos. Ideal para gestos como zoom, desplazamiento, escritura, etc.",
        ],
      },
      {
        heading: "💡 Diseño Robusto",
        type: "list" as const,
        items: [
          "Estructura de tipo tótem horizontal, pensado para uso intensivo. Frecuentemente instalado en horizontal para mayor comodidad.",
        ],
      },
      {
        heading: "🌐 Conectividad",
        type: "list" as const,
        items: [
          "Se conecta a internet o a sistemas internos para mostrar información en tiempo real o gestionar interacciones centralizadas.",
        ],
      },
      {
        heading: "📏 Tamaños Disponibles",
        type: "list" as const,
        items: [
          "Desde 32'' hasta 55'', siendo los de 43'' y 50'' los más usados. Tamaños como 65'' y 75'' no son aconsejables por estabilidad.",
        ],
      },
      {
        heading: "⚙️ Orientación",
        type: "list" as const,
        items: [
          "Formato horizontal es el más usado especialmente por su comodidad de uso. El formato vertical no es recomendable para pantallas grandes.",
        ],
      },
      {
        heading: "Pantallas Grandes (32'' - 55'')",
        type: "list" as const,
        items: [
          "Mayor visibilidad y impacto visual",
          "Ideales para entornos amplios",
          "Limitaciones en incorporación de periféricos",
          "Orientación principalmente horizontal",
          "Aplicaciones más visuales e inmersivas",
        ],
      },
      {
        heading: "Pantallas Pequeñas (15'' - 27'')",
        type: "list" as const,
        items: [
          "Más adecuadas para periféricos",
          "Impresora térmica, posnet, QR",
          "Teclado, cámara, altavoces",
          "Orientación flexible",
          "Aplicaciones más funcionales",
        ],
      },
      {
        heading: "🏢 Edificios Públicos",
        type: "list" as const,
        items: [
          "Terminales de autogestión para turnos, informes, ingreso de datos.",
        ],
      },
      {
        heading: "🛍️ Centros Comerciales",
        type: "list" as const,
        items: [
          "Catálogos digitales, consulta de productos, promociones.",
        ],
      },
      {
        heading: "🏥 Hospitales y Clínicas",
        type: "list" as const,
        items: [
          "Registro, turnos, ubicación de sectores.",
        ],
      },
      {
        heading: "🚌 Terminales y Aeropuertos",
        type: "list" as const,
        items: [
          "Información de horarios, check-in, impresión de pasajes.",
        ],
      },
      {
        heading: "🎫 Museos y Eventos",
        type: "list" as const,
        items: [
          "Mapas interactivos, experiencias multimedia, juegos informativos.",
        ],
      },
      {
        heading: "🧑‍🏫 Educación",
        type: "list" as const,
        items: [
          "Pantallas táctiles interactivas para actividades grupales o informativas.",
        ],
      },
      {
        heading: "Alta Visibilidad",
        type: "list" as const,
        items: [
          "Ideal para captar la atención del público desde lejos.",
        ],
      },
      {
        heading: "Mayor Espacio de Trabajo",
        type: "list" as const,
        items: [
          "Permite interfaces cómodas, claras y accesibles.",
        ],
      },
      {
        heading: "Mejora la Accesibilidad",
        type: "list" as const,
        items: [
          "Usuarios de todas las edades o capacidades pueden interactuar fácilmente.",
        ],
      },
      {
        heading: "Versatilidad",
        type: "list" as const,
        items: [
          "Se adapta a distintos sectores y necesidades (informativas, comerciales, educativas, etc.).",
        ],
      },
      {
        heading: "Imagen Moderna",
        type: "list" as const,
        items: [
          "Transmite innovación y mejora la experiencia del cliente o usuario.",
        ],
      },
      {
        heading: "Experiencia Inmersiva",
        type: "list" as const,
        items: [
          "Ofrece una experiencia envolvente y atractiva para el usuario.",
        ],
      },
      {
        heading: "Limitaciones de Periféricos",
        type: "list" as const,
        items: [
          "Los periféricos como impresora térmica, posnet, lector de códigos QR, teclado, cámara de videovigilancia, altavoces, etc., son mucho más complicados de incorporar en terminales interactivas con pantallas grandes.",
          "Estas terminales se enfocan más en la experiencia visual y de interacción táctil.",
        ],
      },
      {
        heading: "Unidad de Procesamiento",
        type: "list" as const,
        items: [
          "Se elige de acuerdo a las necesidades del cliente. Se debe tener en cuenta la aplicación que se quiera dejar corriendo en el equipo.",
          "Se elegirá una unidad de procesamiento que cuente con un procesador, memoria RAM y memoria de almacenamiento adecuados para que la experiencia del usuario sea excelente.",
        ],
      },
      {
        heading: "En Resumen",
        type: "list" as const,
        items: [
          "Una terminal interactiva con pantalla grande es una solución tecnológica potente, visible y versátil que permite interactuar con sistemas de forma autónoma, ofreciendo una experiencia envolvente, cómoda y eficiente en entornos de atención pública, comercio, educación, salud y más.",
        ],
      },
    ],
  },
  {
    slug: "pantalla-dual-solum-49-55",
    title: "Pantalla Dual SOLUM 49'' - 55''",
    description: "Pantallas digitales duales ideales para retail, tiendas de moda, restaurantes y más",
    category: "pantallas",
    images: ["/products/pantalla-dual-solum-49-55/01.png", "/products/pantalla-dual-solum-49-55/02.jpeg", "/products/pantalla-dual-solum-49-55/03.png", "/products/pantalla-dual-solum-49-55/04.png", "/products/pantalla-dual-solum-49-55/05.png", "/products/pantalla-dual-solum-49-55/06.png", "/products/pantalla-dual-solum-49-55/07.png"],
    features: [
      "Contenido sincronizado en ambas pantallas",
      "Mensajes contrastantes o complementarios",
      "Flexibilidad total en la presentación",
      "Configuración adaptada a cada entorno",
      "Tamaño: 49\" (Doble) / 55\" (Doble)",
      "Resolución: 1920 x 1080",
      "Relación de aspecto: 1.77 (16:9)",
      "Brillo: A: 400 nits / B: 800 nits",
      "Visualización: Sólo modo Portrait",
      "Contraste: 5000:1",
      "Ángulo de visión: 178° / 178°",
      "Tiempo de respuesta: 8 ms",
      "Área activa: 1.074,0 × 604,0 mm",
      "Gama de colores: 72%",
      "Tipo de luz: LED electrónico",
      "Vida útil LED: 50.000 horas",
      "SO: Android 8.1",
      "CPU: Arm Cortex-A17 de cuatro núcleos",
      "GPU: Mali-T764 MP",
      "RAM: 2 GB DDR3",
      "Almacenamiento: eMMC de 16 GB",
      "Red: Ethernet RJ45 / Wi-Fi 2,4 GHz",
      "Conectividad: USB 2.0 x 1 unidad",
      "HDMI/DP: Salida HDMI",
    ],
    sections: [
      {
        heading: "Descripción General",
        type: "list" as const,
        items: [
          "SOLUM ofrece pantallas digitales de 49 y 55 pulgadas Dual Side ideales para retail, tiendas de moda, restaurantes y más. Con su sistema integrado de doble pantalla, esta innovadora señalización ofrece una versatilidad inigualable.",
          "Pantalla dual: muestra diferentes contenidos en ambos lados✔Diseño elegante: mejora la estética de tu espacio✔Fácil de usar: gestión y configuración sencilla",
        ],
      },
      {
        heading: "Pantallas Duales Integradas",
        type: "list" as const,
        items: [
          "La solución cuenta con un sistema integrado que alberga dos pantallas en una sola unidad, ofreciendo una experiencia visual fluida y sincronizada en ambas pantallas.",
        ],
      },
      {
        heading: "Modos de Visualización Versátiles",
        type: "list" as const,
        items: [
          "Ofrece modos de visualización versátiles, permitiendo mostrar contenido atractivo simultáneamente en cada pantalla con flexibilidad en la presentación.",
        ],
      },
      {
        heading: "Mayor Visibilidad e Impacto",
        type: "list" as const,
        items: [
          "Con su configuración de doble pantalla, las empresas pueden mejorar la interacción y visibilidad, maximizando el uso del espacio y aumentando el impacto de los mensajes.",
        ],
      },
      {
        heading: "Exhibición de Productos Minoristas",
        type: "list" as const,
        items: [
          "Las pantallas duales de 49\" y 55'' transforman los espacios comerciales, combinando detalles completos del producto con imágenes cautivadoras para mejorar la experiencia de compra.",
        ],
      },
      {
        heading: "Puntos de Información Atractivos",
        type: "list" as const,
        items: [
          "Ideales para espacios públicos, estas pantallas utilizan la función de pantalla dividida. Un lado ofrece información esencial o mapas, mientras que el otro refleja el mismo contenido.",
        ],
      },
      {
        heading: "Centro de Comunicación Corporativa",
        type: "list" as const,
        items: [
          "En entornos corporativos, las pantallas duales funcionan como herramientas de comunicación eficiente, presentando anuncios o noticias importantes mientras muestran contenido dinámico.",
        ],
      },
      {
        heading: "Máximo Impacto Visual",
        type: "list" as const,
        items: [
          "Captura la atención desde cualquier ángulo",
        ],
      },
      {
        heading: "Uso Eficiente del Espacio",
        type: "list" as const,
        items: [
          "Aprovecha al máximo el área disponible",
        ],
      },
      {
        heading: "Presentación Dinámica",
        type: "list" as const,
        items: [
          "Contenido atractivo y en movimiento",
        ],
      },
      {
        heading: "Pantalla",
        type: "list" as const,
        items: [
          "Tamaño: 49\" (Doble) / 55\" (Doble)",
          "Resolución: 1920 x 1080",
          "Relación de aspecto: 1.77 (16:9)",
          "Brillo: A: 400 nits / B: 800 nits",
          "Visualización: Sólo modo Portrait",
          "Contraste: 5000:1",
          "Ángulo de visión: 178° / 178°",
          "Tiempo de respuesta: 8 ms",
          "Área activa: 1.074,0 × 604,0 mm",
          "Gama de colores: 72%",
          "Tipo de luz: LED electrónico",
          "Vida útil LED: 50.000 horas",
        ],
      },
      {
        heading: "Sistema",
        type: "list" as const,
        items: [
          "SO: Android 8.1",
          "CPU: Arm Cortex-A17 de cuatro núcleos",
          "GPU: Mali-T764 MP",
          "RAM: 2 GB DDR3",
          "Almacenamiento: eMMC de 16 GB",
          "Red: Ethernet RJ45 / Wi-Fi 2,4 GHz",
          "Conectividad: USB 2.0 x 1 unidad",
          "HDMI/DP: Salida HDMI",
        ],
      },
      {
        heading: "Especificaciones Físicas",
        type: "list" as const,
        items: [
          "Dimensiones: 1340,0 × 659,6 × 25,4 mm",
          "Peso: 24 kilos",
          "Embalaje: 1505,0 × 810,0 × 191,0 mm",
          "Bisel: 12.5 mm (todos los lados)",
          "Parlantes: 10 W + 10 W",
          "Táctil: No",
          "Consumo: 150 W (máx.)",
          "Energía en espera: ≤ 1 W",
          "Alimentación: 100-240 V CA",
          "Temperatura: 0°C - 40°C",
          "Humedad: 10 ~ 80%",
        ],
      },
    ],
  },
  {
    slug: "bar-display-pantallas-stretch-solum",
    title: "BAR Display: Pantallas Stretch",
    description: "Renovación del comercio minorista con la excelencia de SOLUM",
    category: "pantallas",
    images: ["/products/bar-display-pantallas-stretch-solum/01.png", "/products/bar-display-pantallas-stretch-solum/02.webp", "/products/bar-display-pantallas-stretch-solum/03.webp", "/products/bar-display-pantallas-stretch-solum/04.webp", "/products/bar-display-pantallas-stretch-solum/05.webp", "/products/bar-display-pantallas-stretch-solum/06.png", "/products/bar-display-pantallas-stretch-solum/07.png", "/products/bar-display-pantallas-stretch-solum/08.png", "/products/bar-display-pantallas-stretch-solum/09.png", "/products/bar-display-pantallas-stretch-solum/10.png", "/products/bar-display-pantallas-stretch-solum/11.png", "/products/bar-display-pantallas-stretch-solum/12.png", "/products/bar-display-pantallas-stretch-solum/13.webp", "/products/bar-display-pantallas-stretch-solum/14.png", "/products/bar-display-pantallas-stretch-solum/15.png"],
    features: [
      "OS: Android 8.1",
      "CPU: Quad-core ARM Cortex-A35, 1.35GHz",
      "GPU: Mali-G31 MP2 GPU",
      "RAM: 1GB DDR3",
      "Almacenamiento: 8GB eMMC",
      "Red: WLAN 802.11 b/g/n (2.4GHz)",
      "Conectividad: Micro USB 2.0 (OTG)",
      "HDMI/DP: No",
      "Dimensiones: 593.8 × 63.4 × 20.0 mm",
      "VESA: No",
      "Peso: 0.8 kg",
      "Embalaje: 905.0 × 153.0 × 73.0 mm",
      "Peso embalaje: 1.3 kg",
      "Bisel: 5.6/4.1/4.1/9.6 mm",
      "Parlantes: No",
      "Táctil: Sí",
      "Consumo: 11.8W (Typ)",
      "Energía en espera: No",
      "Alimentación: USB Type C",
      "Temperatura operación: 0°C - 45°C",
      "Humedad operación: 10 ~ 80%",
      "Temperatura almacenamiento: -20°C ~ 60°C",
    ],
    sections: [
      {
        heading: "Transforme su Experiencia en la Tienda",
        type: "list" as const,
        items: [
          "Mejore su entorno comercial con la línea de señalización digital diseñada específicamente para el sector. Nuestra línea de expositores para bares redefine la experiencia de los clientes con su marca, ofreciendo claridad, impacto y versatilidad.",
          "Ya sea que busque impulsar las promociones en tienda, mejorar la señalización interactiva o crear presentaciones de productos inmersivas, SOLUM Signage es su aliado para el éxito.",
        ],
      },
      {
        heading: "Integración de Estante Inteligente",
        type: "list" as const,
        items: [
          "Integre nuestros expositores a la perfección en los estantes de su tienda para lograr una apariencia limpia y despejada. Estos expositores se convierten en una extensión de la presentación de sus productos.",
        ],
      },
      {
        heading: "Interacción Mejorada con el Producto",
        type: "list" as const,
        items: [
          "Atraiga a sus clientes a un nuevo nivel con funciones mejoradas de interacción con el producto. Nuestros expositores ofrecen tecnología táctil para explorar detalles del producto.",
        ],
      },
      {
        heading: "Programación y Gestión de Contenidos",
        type: "list" as const,
        items: [
          "Controle su estrategia de contenido en tienda con herramientas avanzadas de programación. Actualice fácilmente promociones, anuncios e información de productos en toda su red.",
        ],
      },
      {
        heading: "23\" FHD Bar Display",
        type: "list" as const,
        items: [
          "Reimagina las promociones en tienda con el expositor de barra FHD de 23\". Su diseño delgado se integra a la perfección en los estantes, garantizando que tus productos se muestren con detalles nítidos.",
        ],
      },
      {
        heading: "25\" QHD Elevator Display",
        type: "list" as const,
        items: [
          "Transforme espacios reducidos en atractivos centros promocionales con nuestros expositores optimizados para ascensores. Diseñados para un máximo impacto en entornos compactos.",
        ],
      },
      {
        heading: "29\" FHD Bar Display",
        type: "list" as const,
        items: [
          "Cree exhibidores atractivos para su tienda con el Expositor de Barra FHD de 29\". Diseñado para una integración perfecta en los estantes con compatibilidad ESL.",
        ],
      },
      {
        heading: "35\" UHD Bar Display",
        type: "list" as const,
        items: [
          "Mejore la presentación de sus productos con la pantalla de barra UHD de 35\". Experimente el comercio minorista con impresionantes imágenes de alta definición.",
        ],
      },
      {
        heading: "37\" FHD Bar Display",
        type: "list" as const,
        items: [
          "Atraiga a sus clientes con la interacción interactiva con el producto en la pantalla de barra FHD de 37\". La tecnología táctil permite explorar detalles del producto.",
        ],
      },
      {
        heading: "47.1\" UHD Bar Display",
        type: "list" as const,
        items: [
          "Transforme su tienda con exhibidores de productos elegantes e informativos. La pantalla de barra UHD de 47.1 pulgadas transmite el mensaje de su marca de forma eficaz.",
        ],
      },
      {
        heading: "Promociones de Productos en Tienda",
        type: "list" as const,
        items: [
          "Mejore las promociones en tienda con expositores de barra especializados. Presente sus productos con claridad y dinamismo en los estantes, garantizando una experiencia de compra cautivadora e interactiva.",
        ],
      },
      {
        heading: "Señalización Interactiva",
        type: "list" as const,
        items: [
          "Transforme el entorno minorista con pantallas interactivas que funcionan como soluciones de señalización. Guíe a los clientes fácilmente por la tienda, mejorando su experiencia de navegación.",
        ],
      },
      {
        heading: "Promociones en Ascensores",
        type: "list" as const,
        items: [
          "Capte la atención de los pasajeros con promociones dinámicas durante su viaje en ascensor. Las Promociones en Ascensores convierten los espacios reducidos en oportunidades para conectar con su público.",
        ],
      },
      {
        heading: "Exhibiciones de Productos Inmersivas",
        type: "list" as const,
        items: [
          "Cree exhibiciones de productos inmersivas con displays de alto rendimiento. Atraiga a los clientes con contenido visualmente impactante que resalta las características y beneficios de los productos.",
        ],
      },
      {
        heading: "Merchandising Visual Personalizable",
        type: "list" as const,
        items: [
          "Mejore sus promociones en tienda con expositores personalizables, garantizando que sus productos se exhiban con precisión y estilo.",
        ],
      },
      {
        heading: "Navegación Fluida en la Tienda",
        type: "list" as const,
        items: [
          "Mejore la experiencia del cliente con soluciones de navegación fluida en la tienda, impulsadas por nuestras pantallas táctiles.",
        ],
      },
      {
        heading: "Exhibiciones de Productos Atractivas",
        type: "list" as const,
        items: [
          "Capte la atención de los clientes mediante exhibiciones de productos impactantes que transmitan el mensaje de su marca de forma eficaz y emotiva.",
        ],
      },
      {
        heading: "Especificaciones Técnicas",
        type: "list" as const,
        items: [
          "Especificación23.1\"25.0\"29.0\"35.0\"37.0\"47.1\"Resolución1920 x 158-----WXH Ratio12.15-----Brillo700 nits-----ModoPortrait-----Contraste1000:1-----Ángulo de Visión178°/178°-----Tiempo de Respuesta9ms-----Área Activa585.56×48.18mm-----Gama de Colores72%-----Tipo de LuzE-LED-----Vida Útil LED50,000 Hrs-----",
        ],
      },
      {
        heading: "Sistema",
        type: "list" as const,
        items: [
          "OS: Android 8.1",
          "CPU: Quad-core ARM Cortex-A35, 1.35GHz",
          "GPU: Mali-G31 MP2 GPU",
          "RAM: 1GB DDR3",
          "Almacenamiento: 8GB eMMC",
          "Red: WLAN 802.11 b/g/n (2.4GHz)",
          "Conectividad: Micro USB 2.0 (OTG)",
          "HDMI/DP: No",
        ],
      },
      {
        heading: "Mecánicas",
        type: "list" as const,
        items: [
          "Dimensiones: 593.8 × 63.4 × 20.0 mm",
          "VESA: No",
          "Peso: 0.8 kg",
          "Embalaje: 905.0 × 153.0 × 73.0 mm",
          "Peso embalaje: 1.3 kg",
          "Bisel: 5.6/4.1/4.1/9.6 mm",
          "Parlantes: No",
          "Táctil: Sí",
        ],
      },
      {
        heading: "Ambiental",
        type: "list" as const,
        items: [
          "Consumo: 11.8W (Typ)",
          "Energía en espera: No",
          "Alimentación: USB Type C",
          "Temperatura operación: 0°C - 45°C",
          "Humedad operación: 10 ~ 80%",
          "Temperatura almacenamiento: -20°C ~ 60°C",
        ],
      },
    ],
  },
  {
    slug: "kiosco-autogestion-3nstar",
    title: "Kiosco de Autoservicio 3nStar",
    description: "K21-J6412 - Solución interactiva de vanguardia con pantalla táctil de 21.5\"",
    category: "kioscos",
    images: ["/products/kiosco-autogestion-3nstar/01.png", "/products/kiosco-autogestion-3nstar/02.png", "/products/kiosco-autogestion-3nstar/03.png", "/products/kiosco-autogestion-3nstar/04.png", "/products/kiosco-autogestion-3nstar/05.png", "/products/kiosco-autogestion-3nstar/06.png", "/products/kiosco-autogestion-3nstar/07.png"],
    features: [
      "Dimensiones: 794mm(H) x 349mm(L) x 400mm(W)",
      "Peso: 23.2 KG",
      "Construcción: Marcos de acero y piezas de aluminio",
      "Color: Negro",
      "SO: Opcional: Windows o Linux",
      "CPU: Intel Celeron J6412 cuatro núcleos 2.0GHz",
      "Memoria: 8GB RAM (Max 16 GB) DDR4",
      "Almacenamiento: 240 GB SSD M.2 PCIe NVM 4Gen (Max 1TB)",
      "Wi-Fi: 802.11b/g/n 150/300Mbps",
      "Bluetooth: 4.0",
      "Ethernet: 10/100/1000M RJ45",
      "USB: 4 Puertos internos, 2 Puertos externos",
      "Serial: 1 RS232 DB9",
      "Vídeo: 1 VGA",
      "Audio: 2 Altavoces",
      "Tipo: Capacitiva 10 Puntos",
      "Transmitancia: >85%",
      "Tiempos de contacto: Más de 50.000.000",
      "Tipo: 21\" TFT LCD Panel",
      "Resolución: 1920 × 1080",
      "Pixel: 0.24825(V)×0.08275(H)mm",
      "Brillo: 250 cd/m² (típico)",
      "Contraste: 2000:1(Min) 3000:1(Tipo)",
      "Ancho de banda: 60Hz",
    ],
    sections: [
      {
        heading: "Descripción General",
        type: "list" as const,
        items: [
          "El Kiosco 3nStar K21 es una solución interactiva de vanguardia con pantalla táctil de 21.5\" y opciones de impresora de 80 mm, lector de código de barras 2D y de banda magnética.",
          "Con un diseño elegante y resistente, este kiosco ofrece una experiencia intuitiva y versátil para aplicaciones de autoservicio, comercio minorista y centros de información.",
          "La pantalla amplia y nítida brinda una interfaz fácil de usar, mientras que la impresora de alta calidad permite la impresión rápida de recibos.",
        ],
      },
      {
        heading: "Procesador Intel Celeron J6412",
        type: "list" as const,
        items: [
          "Cuatro núcleos 2.0GHz para un rendimiento óptimo en aplicaciones de autoservicio.",
        ],
      },
      {
        heading: "Memoria RAM Ampliable",
        type: "list" as const,
        items: [
          "8 GB de RAM (ampliable a 16 GB) permite realizar múltiples tareas sin problemas.",
        ],
      },
      {
        heading: "Almacenamiento SSD",
        type: "list" as const,
        items: [
          "Disco duro de estado sólido de 240 GB (ampliable a 1 TB) para rendimiento y fiabilidad de primer nivel.",
        ],
      },
      {
        heading: "Impresora Térmica",
        type: "list" as const,
        items: [
          "Impresora térmica opcional de 80 mm con cortador automático para una impresión sin complicaciones.",
        ],
      },
      {
        heading: "Conectividad Avanzada",
        type: "list" as const,
        items: [
          "Wi-Fi 802.11ac de doble banda y Bluetooth 4.0 para conectividad inalámbrica sin esfuerzo.",
        ],
      },
      {
        heading: "Compatibilidad",
        type: "list" as const,
        items: [
          "Compatible con la mayoría de las versiones de Windows y Linux, con opciones de soporte adicionales.",
        ],
      },
      {
        heading: "Características Físicas",
        type: "list" as const,
        items: [
          "Dimensiones: 794mm(H) x 349mm(L) x 400mm(W)",
          "Peso: 23.2 KG",
          "Construcción: Marcos de acero y piezas de aluminio",
          "Color: Negro",
        ],
      },
      {
        heading: "Performance",
        type: "list" as const,
        items: [
          "SO: Opcional: Windows o Linux",
          "CPU: Intel Celeron J6412 cuatro núcleos 2.0GHz",
          "Memoria: 8GB RAM (Max 16 GB) DDR4",
          "Almacenamiento: 240 GB SSD M.2 PCIe NVM 4Gen (Max 1TB)",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "Wi-Fi: 802.11b/g/n 150/300Mbps",
          "Bluetooth: 4.0",
          "Ethernet: 10/100/1000M RJ45",
          "USB: 4 Puertos internos, 2 Puertos externos",
          "Serial: 1 RS232 DB9",
          "Vídeo: 1 VGA",
          "Audio: 2 Altavoces",
        ],
      },
      {
        heading: "Panel Táctil y Monitor",
        type: "list" as const,
        items: [
          "Panel Táctil• Tipo: Capacitiva 10 Puntos• Transmitancia: >85%• Tiempos de contacto: Más de 50.000.000Monitor• Tipo: 21\" TFT LCD Panel• Resolución: 1920 × 1080• Pixel: 0.24825(V)×0.08275(H)mm• Brillo: 250 cd/m² (típico)• Contraste: 2000:1(Min) 3000:1(Tipo)• Ancho de banda: 60Hz• Soporte de color: 16.7M• Vida útil: Más de 30.000 horas",
        ],
      },
      {
        heading: "Panel Táctil",
        type: "list" as const,
        items: [
          "Tipo: Capacitiva 10 Puntos",
          "Transmitancia: >85%",
          "Tiempos de contacto: Más de 50.000.000",
        ],
      },
      {
        heading: "Monitor",
        type: "list" as const,
        items: [
          "Tipo: 21\" TFT LCD Panel",
          "Resolución: 1920 × 1080",
          "Pixel: 0.24825(V)×0.08275(H)mm",
          "Brillo: 250 cd/m² (típico)",
          "Contraste: 2000:1(Min) 3000:1(Tipo)",
          "Ancho de banda: 60Hz",
          "Soporte de color: 16.7M",
          "Vida útil: Más de 30.000 horas",
        ],
      },
      {
        heading: "Impresora Térmica",
        type: "list" as const,
        items: [
          "Especificaciones de Impresora• Tipo: RPT015 opcional• Velocidad de impresión: 300 mm/s• Vida útil del cabezal: 150 Km• Vida útil del cortador: 2 millones de cortesCaracterísticasImpresora térmica de 80 mm con cortador automático para una impresión rápida y sin complicaciones de recibos y tickets.",
        ],
      },
      {
        heading: "Especificaciones de Impresora",
        type: "list" as const,
        items: [
          "Tipo: RPT015 opcional",
          "Velocidad de impresión: 300 mm/s",
          "Vida útil del cabezal: 150 Km",
          "Vida útil del cortador: 2 millones de cortes",
        ],
      },
      {
        heading: "Características",
        type: "list" as const,
        items: [
          "Impresora térmica de 80 mm con cortador automático para una impresión rápida y sin complicaciones de recibos y tickets.",
        ],
      },
      {
        heading: "Soporte de Suelo",
        type: "list" as const,
        items: [
          "Proporciona una solución de instalación perfecta para colocar el quiosco de forma segura en el suelo.",
        ],
      },
      {
        heading: "Escáner 2D",
        type: "list" as const,
        items: [
          "Escáner de código de barras opcional SCK 2D Scanner para lectura de códigos QR y códigos de barras.",
        ],
      },
      {
        heading: "Lector MSR",
        type: "list" as const,
        items: [
          "Lector de banda magnética opcional MSR003 3 Pistas para lectura de tarjetas de crédito y débito.",
        ],
      },
      {
        heading: "Terminal de Pago",
        type: "list" as const,
        items: [
          "Soporte para terminal de pago que soporta diferentes tamaños de terminales de pago para transacciones seguras.",
        ],
      },
      {
        heading: "Especificaciones Eléctricas y Ambientales",
        type: "list" as const,
        items: [
          "EléctricoConsumo: 57WSalida adaptador: DC 12V 7AEntrada adaptador: AC 100-240V, 50-60HZAmbientalTemp. funcionamiento: 0°C to 40°CTemp. almacenamiento: -20°C to 60°CHumedad: 10% to 80%EmbalajeKiosco: 910mm x 510mm x 515mmSoporte piso: 940mm x 340mm x 340mmPeso kiosco: 25KgPeso soporte: 9.5KgGarantía: 1 año (extendida disponible)",
        ],
      },
      {
        heading: "Eléctrico",
        type: "list" as const,
        items: [
          "Consumo: 57W",
          "Salida adaptador: DC 12V 7A",
          "Entrada adaptador: AC 100-240V, 50-60HZ",
        ],
      },
      {
        heading: "Ambiental",
        type: "list" as const,
        items: [
          "Temp. funcionamiento: 0°C to 40°C",
          "Temp. almacenamiento: -20°C to 60°C",
          "Humedad: 10% to 80%",
        ],
      },
      {
        heading: "Embalaje",
        type: "list" as const,
        items: [
          "Kiosco: 910mm x 510mm x 515mm",
          "Soporte piso: 940mm x 340mm x 340mm",
          "Peso kiosco: 25Kg",
          "Peso soporte: 9.5Kg",
          "Garantía: 1 año (extendida disponible)",
        ],
      },
    ],
  },
  {
    slug: "kiosco-autogestion-gastronomia",
    title: "Kioscos de Autogestión para Gastronomía",
    description: "Dispositivos digitales interactivos que mejoran la experiencia del cliente y agilizan el servicio",
    category: "kioscos",
    images: ["/products/kiosco-autogestion-gastronomia/01.jpg", "/products/kiosco-autogestion-gastronomia/02.jpg", "/products/kiosco-autogestion-gastronomia/03.webp"],
    features: [
      "Ver el menú digital",
      "Elegir y personalizar su pedido",
      "Pagar con tarjeta, QR o billetera virtual",
      "Recibir su número de orden o ticket",
    ],
    sections: [
      {
        heading: "Descripción General",
        type: "list" as const,
        items: [
          "Los kioscos de autogestión para locales gastronómicos son dispositivos digitales interactivos que permiten a los clientes hacer sus pedidos y pagar sin pasar por el mostrador ni interactuar con un mozo o cajero.",
          "Están diseñados para mejorar la experiencia del cliente, agilizar el servicio y reducir los tiempos de espera en restaurantes, fast food y cafés.",
        ],
      },
      {
        heading: "Aumenta la Velocidad del Servicio",
        type: "list" as const,
        items: [
          "Evita colas y pedidos lentos en el mostrador, mejorando la eficiencia operativa.",
        ],
      },
      {
        heading: "Incrementa el Ticket Promedio",
        type: "list" as const,
        items: [
          "Sugiere automáticamente extras y combos (upselling y cross-selling).",
        ],
      },
      {
        heading: "Reduce Costos Operativos",
        type: "list" as const,
        items: [
          "Menos personal necesario para la toma de pedidos, optimizando recursos.",
        ],
      },
      {
        heading: "Mejora la Precisión del Pedido",
        type: "list" as const,
        items: [
          "Se eliminan errores humanos en la toma manual, garantizando exactitud.",
        ],
      },
      {
        heading: "Moderniza la Imagen del Local",
        type: "list" as const,
        items: [
          "Da una sensación de innovación y servicio de calidad a los clientes.",
        ],
      },
      {
        heading: "Experiencia del Cliente",
        type: "list" as const,
        items: [
          "Los clientes pueden tomarse su tiempo para elegir sin presión, mejorando su satisfacción.",
        ],
      },
      {
        heading: "Restaurantes de Comida Rápida",
        type: "list" as const,
        items: [
          "Ideal para cadenas de hamburguesas, pollo frito y comida rápida en general.",
        ],
      },
      {
        heading: "Locales Especializados",
        type: "list" as const,
        items: [
          "Sushi, pizzerías, cafeterías y restaurantes temáticos.",
        ],
      },
      {
        heading: "Patios de Comida",
        type: "list" as const,
        items: [
          "Centros comerciales, aeropuertos y espacios de food court.",
        ],
      },
      {
        heading: "Food Trucks",
        type: "list" as const,
        items: [
          "Camiones de comida y puestos móviles con espacio limitado.",
        ],
      },
      {
        heading: "Franquicias",
        type: "list" as const,
        items: [
          "Cadenas gastronómicas que buscan estandarizar el servicio.",
        ],
      },
      {
        heading: "Cafeterías",
        type: "list" as const,
        items: [
          "Cafés y locales de bebidas con menús variados.",
        ],
      },
      {
        heading: "Opciones de Instalación",
        type: "list" as const,
        items: [
          "📱Totem Vertical de PieMás llamativo, ideal para entrada o centro del local. Máxima visibilidad y accesibilidad.💻Kiosco de SobremesaMás compacto, para mesas o mostradores. Perfecto para espacios reducidos.🖼️Montado en ParedCuando se necesita ahorrar espacio. Solución elegante y funcional.",
        ],
      },
      {
        heading: "Totem Vertical de Pie",
        type: "list" as const,
        items: [
          "Más llamativo, ideal para entrada o centro del local. Máxima visibilidad y accesibilidad.",
        ],
      },
      {
        heading: "Kiosco de Sobremesa",
        type: "list" as const,
        items: [
          "Más compacto, para mesas o mostradores. Perfecto para espacios reducidos.",
        ],
      },
      {
        heading: "Montado en Pared",
        type: "list" as const,
        items: [
          "Cuando se necesita ahorrar espacio. Solución elegante y funcional.",
        ],
      },
    ],
  },
  {
    slug: "mini-totem-digital",
    title: "Mini Tótem Digital e Interactivo",
    description: "Formato pequeño ideal para mostradores, estantes y escritorios - Fabricación nacional",
    category: "totems",
    images: ["/products/mini-totem-digital/01.jpg", "/products/mini-totem-digital/02.jpg", "/products/mini-totem-digital/03.jpg", "/products/mini-totem-digital/04.jpg"],
    features: [
      "Mini PC con Windows",
      "Android Media Player",
      "Conexión WiFi / Ethernet",
      "Almacenamiento interno en la base",
      "Larga vida útil: por encima de 60 millones de toques",
      "Gran precisión y durabilidad",
      "Alta resolución y sensibilidad al tacto",
      "Rápida respuesta",
      "Sincronía exacta con el ordenador de conexión",
      "Publicidad dinámica",
      "Comunicación interna",
      "Promociones y ofertas",
      "Información institucional",
      "Apps interactivas y juegos",
      "Navegación de sitios web",
      "Catálogos digitales",
      "Ingreso de datos",
      "Sistemas de gestión",
    ],
    sections: [
      {
        heading: "Descripción General",
        type: "list" as const,
        items: [
          "Mini tótem digital con monitor LED Samsung o Philips, disponible en varias medidas (19\", 22\", 24\" y 27\") con resolución HD o Full HD. Estructura de madera con diseño elegante y moderno.",
          "Formato pequeño ideal para poder ser apoyado en mostradores, estantes, mesas y escritorios. Perfecto para espacios reducidos que requieren cartelería digital o interacción táctil.",
          "Fabricación nacional con acabado premium, frente ploteado con vinilo importado de 300 micrones marca Oracal tipo Fibra de Carbono o similar.",
        ],
      },
      {
        heading: "Monitor LED Premium",
        type: "list" as const,
        items: [
          "Samsung o Philips en medidas 19\", 22\", 24\" y 27\" con resolución HD (1366 x 768 px) o Full HD (1080 x 1920 px).",
        ],
      },
      {
        heading: "Estructura Premium",
        type: "list" as const,
        items: [
          "Estructura de madera con frente pintado o ploteado con vinilo premium importado de 300 micrones marca Oracal.",
        ],
      },
      {
        heading: "Diseño Compacto",
        type: "list" as const,
        items: [
          "Formato pequeño para ser apoyado en mostradores, estantes, mesas y escritorios. Diseño elegante y moderno.",
        ],
      },
      {
        heading: "Base Funcional",
        type: "list" as const,
        items: [
          "Base afelpada con espacio para guardado de la unidad de procesamiento. Tapa trasera de inspección.",
        ],
      },
      {
        heading: "Personalización",
        type: "list" as const,
        items: [
          "Color negro estándar, pero puede encargarse en cualquier color. Diseño ploteado según deseo del cliente.",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "Conexión WiFi / Ethernet. Tensión 220V. Posibilidad de incorporar periféricos y accesorios.",
        ],
      },
      {
        heading: "Unidad de Procesamiento",
        type: "list" as const,
        items: [
          "Opciones Disponibles• Mini PC con Windows• Android Media Player• Conexión WiFi / Ethernet• Almacenamiento interno en la baseSoftware OpcionalLicencia de Software con sistema de administración remota para gestión centralizada de contenido.",
        ],
      },
      {
        heading: "Opciones Disponibles",
        type: "list" as const,
        items: [
          "Mini PC con Windows",
          "Android Media Player",
          "Conexión WiFi / Ethernet",
          "Almacenamiento interno en la base",
        ],
      },
      {
        heading: "Software Opcional",
        type: "list" as const,
        items: [
          "Licencia de Software con sistema de administración remota para gestión centralizada de contenido.",
        ],
      },
      {
        heading: "Monitor Táctil Resistivo",
        type: "list" as const,
        items: [
          "Panel de 5 hilos con tecnología resistiva de alta calidad.",
          "Larga vida útil: por encima de 60 millones de toques",
          "Gran precisión y durabilidad",
          "Alta resolución y sensibilidad al tacto",
          "Rápida respuesta",
          "Sincronía exacta con el ordenador de conexión",
        ],
      },
      {
        heading: "Aplicaciones",
        type: "list" as const,
        items: [
          "Perfecto para apps interactivas, juegos, navegación de sitios web, catálogos, ingreso de datos y muchas otras aplicaciones.",
        ],
      },
      {
        heading: "Cámara Web",
        type: "list" as const,
        items: [
          "Para videoconferencias, reconocimiento facial o aplicaciones de seguridad.",
        ],
      },
      {
        heading: "Lector QR y Código de Barras",
        type: "list" as const,
        items: [
          "Para lectura de códigos QR, códigos de barras y documentos.",
        ],
      },
      {
        heading: "POSNET",
        type: "list" as const,
        items: [
          "Terminal de pago para transacciones con tarjetas de crédito y débito.",
        ],
      },
      {
        heading: "Teclado",
        type: "list" as const,
        items: [
          "Teclado físico para ingreso de datos y aplicaciones específicas.",
        ],
      },
      {
        heading: "Impresora Térmica",
        type: "list" as const,
        items: [
          "Para impresión de tickets, recibos y comprobantes.",
        ],
      },
      {
        heading: "Otros Accesorios",
        type: "list" as const,
        items: [
          "Múltiples opciones según las necesidades del cliente.",
        ],
      },
      {
        heading: "Medidas Disponibles",
        type: "list" as const,
        items: [
          "TamañoCuerpo del EquipoDisplay19\"50 cm (alto) x 33 cm (ancho) x 20 cm (prof)40,9 cm (alto) x 23 cm (ancho)22\"58 cm (alto) x 37 cm (ancho) x 20 cm (prof)47,60 cm (alto) x 26,7 cm (ancho)24\"65 cm (alto) x 41 cm (ancho) x 21 cm (prof)53 cm (alto) x 29,5 cm (ancho)27\"70 cm (alto) x 44 cm (ancho) x 21 cm (prof)60,2 cm (alto) x 33,1 cm (ancho)",
        ],
      },
      {
        heading: "Cartelería Digital",
        type: "list" as const,
        items: [
          "Equipo especialmente dedicado para transmisión de videos e imágenes (comunicación y publicidad).",
          "Publicidad dinámica",
          "Comunicación interna",
          "Promociones y ofertas",
          "Información institucional",
        ],
      },
      {
        heading: "Aplicaciones Interactivas",
        type: "list" as const,
        items: [
          "Con pantalla táctil puede ser usado como All In One para múltiples aplicaciones:",
          "Apps interactivas y juegos",
          "Navegación de sitios web",
          "Catálogos digitales",
          "Ingreso de datos",
          "Sistemas de gestión",
        ],
      },
    ],
  },
  {
    slug: "video-walls",
    title: "Videowalls",
    description: "Soluciones visuales de gran impacto para espacios públicos y profesionales",
    category: "pantallas",
    images: ["/products/video-walls/01.png", "/products/video-walls/02.jpg", "/products/video-walls/03.png", "/products/video-walls/04.png", "/products/video-walls/05.jpg"],
    features: [
      "Diseñadas para uso continuo 24/7",
      "Biseles muy delgados",
      "Brillo y contraste altos",
      "En ángulos",
      "Desalineadas",
      "Formando figuras",
      "Superpuestas",
      "En estructuras curvas o envolventes",
      "Atraer la atención y generar efecto wow",
      "Comunicar de forma artística y memorable",
      "Adaptarse al diseño arquitectónico",
      "Romper con la estética rectangular",
      "Asimétrico en escalera",
      "Mosaico desalineado",
      "Curvo o envolvente",
      "Videowall vertical libre",
      "Formas artísticas personalizadas",
      "Retail y vidrieras interactivas",
      "Centros comerciales",
      "Museos y espacios culturales",
      "Eventos y lanzamientos",
      "Lobby de hoteles o empresas",
    ],
    sections: [
      {
        heading: "¿Qué es un Videowall?",
        type: "list" as const,
        items: [
          "Un videowall (o muro de video) es una composición de varias pantallas o monitores profesionales dispuestos en forma de cuadrícula o mosaico para formar una única imagen o múltiples contenidos visuales de gran tamaño.",
          "Se usa principalmente en espacios donde se necesita una gran superficie de visualización con alta calidad, impacto visual y versatilidad, como centros comerciales, salas de control, eventos, retail, aeropuertos, estadios, y más.",
        ],
      },
      {
        heading: "🧠 Controlador de Videowall",
        type: "list" as const,
        items: [
          "Se encarga de dividir y distribuir la imagen o los videos entre todas las pantallas para que funcionen como una sola.",
        ],
      },
      {
        heading: "🔌 Conexión entre Pantallas",
        type: "list" as const,
        items: [
          "Puede hacerse por HDMI, DisplayPort, DVI, o por red (en sistemas más avanzados).",
        ],
      },
      {
        heading: "🖥️ Pantallas Especializadas",
        type: "list" as const,
        items: [
          "Diseñadas para uso continuo 24/7",
          "Biseles muy delgados",
          "Brillo y contraste altos",
        ],
      },
      {
        heading: "🔁 Escalabilidad",
        type: "list" as const,
        items: [
          "Se pueden armar videowalls de 2x2, 3x3, 4x4 o más, según el espacio y necesidad.",
        ],
      },
      {
        heading: "🧩 Configuración Flexible",
        type: "list" as const,
        items: [
          "Se puede mostrar una sola imagen a gran escala o dividir el muro en varias zonas con diferentes contenidos.",
        ],
      },
      {
        heading: "🎯 Control Centralizado",
        type: "list" as const,
        items: [
          "El contenido puede actualizarse remotamente con software de gestión.",
        ],
      },
      {
        heading: "Corporativo",
        type: "list" as const,
        items: [
          "Presentaciones, bienvenida en recepciones, branding institucional.",
        ],
      },
      {
        heading: "Retail",
        type: "list" as const,
        items: [
          "Escaparates digitales, campañas impactantes, promociones en vidrieras.",
        ],
      },
      {
        heading: "Eventos",
        type: "list" as const,
        items: [
          "Fondos visuales en espectáculos, conciertos, ferias.",
        ],
      },
      {
        heading: "Salas de Control",
        type: "list" as const,
        items: [
          "Monitoreo de tráfico, seguridad, energía, datos en tiempo real.",
        ],
      },
      {
        heading: "Aeropuertos",
        type: "list" as const,
        items: [
          "Información de vuelos, señales, publicidad.",
        ],
      },
      {
        heading: "Estadios",
        type: "list" as const,
        items: [
          "Marcadores, repeticiones, publicidad en vivo.",
        ],
      },
      {
        heading: "Alto Impacto Visual",
        type: "list" as const,
        items: [
          "Captura la atención del público inmediatamente.",
        ],
      },
      {
        heading: "Gran Superficie de Contenido",
        type: "list" as const,
        items: [
          "Sin pérdida de calidad incluso en grandes formatos.",
        ],
      },
      {
        heading: "Flexibilidad Total",
        type: "list" as const,
        items: [
          "En tamaño, forma y contenido según necesidades.",
        ],
      },
      {
        heading: "Alta Durabilidad",
        type: "list" as const,
        items: [
          "Monitores profesionales diseñados para operar 24/7.",
        ],
      },
      {
        heading: "Impacto e Información",
        type: "list" as const,
        items: [
          "Impresiona e informa al público al mismo tiempo.",
        ],
      },
      {
        heading: "Versatilidad",
        type: "list" as const,
        items: [
          "Adaptable a cualquier espacio y necesidad.",
        ],
      },
      {
        heading: "¿Qué son?",
        type: "list" as const,
        items: [
          "Es un conjunto de pantallas (LED o LCD) dispuestas en una configuración no convencional:",
          "En ángulos",
          "Desalineadas",
          "Formando figuras",
          "Superpuestas",
          "En estructuras curvas o envolventes",
          "A diferencia de los videowalls tradicionales que siguen una matriz rectangular, los creativos se basan en una composición libre con sincronización de contenidos personalizada.",
        ],
      },
      {
        heading: "Objetivos Principales",
        type: "list" as const,
        items: [
          "Atraer la atención y generar efecto wow",
          "Comunicar de forma artística y memorable",
          "Adaptarse al diseño arquitectónico",
          "Romper con la estética rectangular",
        ],
      },
      {
        heading: "Configuraciones Creativas",
        type: "list" as const,
        items: [
          "Asimétrico en escalera",
          "Mosaico desalineado",
          "Curvo o envolvente",
          "Videowall vertical libre",
          "Formas artísticas personalizadas",
        ],
      },
      {
        heading: "Aplicaciones Frecuentes",
        type: "list" as const,
        items: [
          "Retail y vidrieras interactivas",
          "Centros comerciales",
          "Museos y espacios culturales",
          "Eventos y lanzamientos",
          "Lobby de hoteles o empresas",
        ],
      },
      {
        heading: "Requisitos Técnicos",
        type: "list" as const,
        items: [
          "Controlador de Video AvanzadoPermite mapear contenido pixel a pixel sobre cualquier configuración.Software de GestiónQue admita rotación de pantallas, distribución personalizada y sincronización exacta.Pantallas con Bisel UltradelgadoOpcional: Para que las uniones entre pantallas no interrumpan el diseño.",
        ],
      },
      {
        heading: "Controlador de Video Avanzado",
        type: "list" as const,
        items: [
          "Permite mapear contenido pixel a pixel sobre cualquier configuración.",
        ],
      },
      {
        heading: "Software de Gestión",
        type: "list" as const,
        items: [
          "Que admita rotación de pantallas, distribución personalizada y sincronización exacta.",
        ],
      },
      {
        heading: "Pantallas con Bisel Ultradelgado",
        type: "list" as const,
        items: [
          "Opcional: Para que las uniones entre pantallas no interrumpan el diseño.",
        ],
      },
    ],
  },
  {
    slug: "atril-digital",
    title: "Atril Digital",
    description: "Dispositivo interactivo con pantalla embebida para oradores y presentaciones profesionales",
    category: "totems",
    images: ["/products/atril-digital/01.png", "/products/atril-digital/02.jpg", "/products/atril-digital/03.jpeg", "/products/atril-digital/04.jpg", "/products/atril-digital/05.jpg"],
    features: [
      "Ver sus presentaciones o discursos (con doble pantalla)",
      "Controlar las diapositivas (adelantar, retroceder, pausar videos, etc.)",
      "Acceder a notas personales sin mostrarlas al público",
      "Integrarse con sistemas de audio, proyección o videoconferencia",
      "Grabar la presentación o transmitirla en vivo",
      "Tamaño: 43\"",
      "Marca: Samsung o Phillips",
      "Resolución: Full HD (1920 x 1080)",
      "Pantalla frontal: 43\" hacia el público",
      "Pantalla posterior: 18,5\" hacia el orador",
      "Material: Madera",
      "Color: Negro o blanco (personalizable)",
      "Ploteado: Vinilo premium Oracal 300 micrones",
      "Medidas: 1.35m x 0.70m x 0.20m",
      "Peso: Liviano, transportable por una persona",
      "Unidad: Mini PC con Windows",
      "Conexión: WiFi / Ethernet",
      "Tensión: 220V",
      "Software: Administración remota opcional",
      "Uso: Indoor",
      "Base: Afelpada para transporte",
      "Tarima: Soporte para micrófono y papeles",
      "Fabricación: Nacional",
      "Disponibilidad: Venta y alquiler",
    ],
    sections: [
      {
        heading: "¿Qué es un Atril Digital?",
        type: "list" as const,
        items: [
          "Es un dispositivo interactivo con forma de atril que incluye una pantalla embebida, normalmente táctil, donde el orador puede:",
          "Ver sus presentaciones o discursos (con doble pantalla)",
          "Controlar las diapositivas (adelantar, retroceder, pausar videos, etc.)",
          "Acceder a notas personales sin mostrarlas al público",
          "Integrarse con sistemas de audio, proyección o videoconferencia",
          "Grabar la presentación o transmitirla en vivo",
        ],
      },
      {
        heading: "Mayor Autonomía",
        type: "list" as const,
        items: [
          "El orador no depende de asistentes técnicos para controlar su presentación.",
        ],
      },
      {
        heading: "Mejor Integración",
        type: "list" as const,
        items: [
          "Se integra perfectamente con entornos híbridos o virtuales.",
        ],
      },
      {
        heading: "Accesibilidad Mejorada",
        type: "list" as const,
        items: [
          "Visual y auditiva mejorada para todos los asistentes.",
        ],
      },
      {
        heading: "Estética Moderna",
        type: "list" as const,
        items: [
          "Diseño profesional que transmite innovación y tecnología.",
        ],
      },
      {
        heading: "Ahorro de Papel",
        type: "list" as const,
        items: [
          "Todo se puede cargar en formato digital, reduciendo el uso de papel.",
        ],
      },
      {
        heading: "Flexibilidad",
        type: "list" as const,
        items: [
          "Permite múltiples formatos de contenido y presentación.",
        ],
      },
      {
        heading: "Congresos Médicos",
        type: "list" as const,
        items: [
          "Presentaciones de casos clínicos, investigaciones y conferencias académicas.",
        ],
      },
      {
        heading: "Eventos Empresariales",
        type: "list" as const,
        items: [
          "Reuniones corporativas, capacitaciones y presentaciones ejecutivas.",
        ],
      },
      {
        heading: "Lanzamientos de Productos",
        type: "list" as const,
        items: [
          "Presentaciones de nuevos productos y servicios al mercado.",
        ],
      },
      {
        heading: "Conferencias Gubernamentales",
        type: "list" as const,
        items: [
          "Eventos oficiales, ruedas de prensa y actos institucionales.",
        ],
      },
      {
        heading: "Salones de Actos",
        type: "list" as const,
        items: [
          "Auditorios, teatros y espacios de eventos especiales.",
        ],
      },
      {
        heading: "Eventos Académicos",
        type: "list" as const,
        items: [
          "Conferencias universitarias, simposios y jornadas educativas.",
        ],
      },
      {
        heading: "Monitor LED",
        type: "list" as const,
        items: [
          "Tamaño: 43\"",
          "Marca: Samsung o Phillips",
          "Resolución: Full HD (1920 x 1080)",
          "Pantalla frontal: 43\" hacia el público",
          "Pantalla posterior: 18,5\" hacia el orador",
        ],
      },
      {
        heading: "Estructura",
        type: "list" as const,
        items: [
          "Material: Madera",
          "Color: Negro o blanco (personalizable)",
          "Ploteado: Vinilo premium Oracal 300 micrones",
          "Medidas: 1.35m x 0.70m x 0.20m",
          "Peso: Liviano, transportable por una persona",
        ],
      },
      {
        heading: "Sistema",
        type: "list" as const,
        items: [
          "Unidad: Mini PC con Windows",
          "Conexión: WiFi / Ethernet",
          "Tensión: 220V",
          "Software: Administración remota opcional",
        ],
      },
      {
        heading: "Características",
        type: "list" as const,
        items: [
          "Uso: Indoor",
          "Base: Afelpada para transporte",
          "Tarima: Soporte para micrófono y papeles",
          "Fabricación: Nacional",
          "Disponibilidad: Venta y alquiler",
        ],
      },
      {
        heading: "Diseño",
        type: "list" as const,
        items: [
          "Estilo: Elegante y moderno",
          "Personalización: Colores y diseños",
          "Funcionalidad: Doble pantalla",
          "Portabilidad: Fácil traslado",
        ],
      },
      {
        heading: "Planos Técnicos",
        type: "list" as const,
        items: [
          "Vista FrontalPantalla de 43\" que mira hacia el público para visualización de presentaciones.Vista PosteriorPantalla de 18,5\" que mira hacia el orador para control y notas privadas.",
        ],
      },
      {
        heading: "Vista Frontal",
        type: "list" as const,
        items: [
          "Pantalla de 43\" que mira hacia el público para visualización de presentaciones.",
        ],
      },
      {
        heading: "Vista Posterior",
        type: "list" as const,
        items: [
          "Pantalla de 18,5\" que mira hacia el orador para control y notas privadas.",
        ],
      },
    ],
  },
  {
    slug: "terminal-interactiva-sillas-ruedas",
    title: "Terminal Interactiva para Sillas de Ruedas",
    description: "Solución de accesibilidad universal para personas con movilidad reducida",
    category: "terminales",
    images: ["/products/terminal-interactiva-sillas-ruedas/01.jpg", "/products/terminal-interactiva-sillas-ruedas/02.jpg", "/products/terminal-interactiva-sillas-ruedas/03.jpg", "/products/terminal-interactiva-sillas-ruedas/04.jpg"],
    features: [
      "Capacitiva 32\"",
      "LED display Philips HD (1366 x 768 px)",
      "Panel Multitáctil Capacitivo (hasta 10 toques simultáneos)",
      "Vidrio float 4 mm laminado",
      "Montaje de pantalla horizontal",
      "Material: Madera MDF con soportes y refuerzos de metal",
      "Color: Blanco",
      "Medidas: 1.10m x 1.20m x 0.70m",
      "Base antideslizante con opción de fijación al piso",
      "Rueditas con freno (opcional)",
      "Ergonómico para accesibilidad",
      "Elegante y moderno",
      "Monitor con inclinación fija",
      "Uso: Indoor",
      "Espacio para guardar mini PC",
      "Puerta trasera de inspección con cerradura",
      "Ploteo en la base con símbolo de Silla de Ruedas",
      "Luz de led que ilumina la base (opcional)",
      "Altura accesible para sillas de ruedas",
      "Espacio libre inferior mínimo 70cm",
      "Interfaz adaptada para movilidad reducida",
      "Cumple normativas ADA e ISO",
    ],
    sections: [
      {
        heading: "¿Qué es una Terminal Interactiva para Sillas de Ruedas?",
        type: "list" as const,
        items: [
          "Una terminal interactiva para personas en silla de ruedas es una versión adaptada de los kioscos de autogestión o cartelería digital, diseñada para garantizar accesibilidad universal. Está pensada para que pueda ser utilizada cómodamente por personas con movilidad reducida, sin asistencia de terceros.",
          "Esta terminal interactiva táctil, generalmente es colocada en lugares públicos o instituciones, cuya estructura, interfaz y funcionalidad están adaptadas especialmente para ser utilizadas por personas en silla de ruedas. Su propósito es ofrecer autonomía y acceso equitativo a servicios digitales.",
        ],
      },
      {
        heading: "Altura Reducida",
        type: "list" as const,
        items: [
          "Pantalla y periféricos colocados a una altura accesible (entre 85 y 110 cm desde el suelo), según normas ADA o ISO.",
        ],
      },
      {
        heading: "Pantalla Táctil Inclinada",
        type: "list" as const,
        items: [
          "Inclinación entre 15° y 30° para facilitar la visualización y el alcance desde una posición sentada.",
        ],
      },
      {
        heading: "Espacio Libre Inferior",
        type: "list" as const,
        items: [
          "Debe tener espacio bajo el equipo (mínimo 70 cm de alto) para permitir que la silla de ruedas se aproxime cómodamente.",
        ],
      },
      {
        heading: "Botones Grandes y Accesibles",
        type: "list" as const,
        items: [
          "Interfaz gráfica diseñada con botones amplios y de alto contraste para facilitar su uso incluso con movilidad limitada.",
        ],
      },
      {
        heading: "Lectores y Puertos Frontales",
        type: "list" as const,
        items: [
          "Lectores de documentos, escáner QR, ranuras para tarjetas y puertos USB ubicados en el frente y a baja altura.",
        ],
      },
      {
        heading: "Software Accesible",
        type: "list" as const,
        items: [
          "Compatible con lectores de pantalla, narración por voz, subtítulos y modo de alto contraste.",
        ],
      },
      {
        heading: "Sistema de Audio",
        type: "list" as const,
        items: [
          "Con auriculares o parlante direccional para instrucciones auditivas sin afectar la privacidad ni generar ruido ambiente.",
        ],
      },
      {
        heading: "Hospitales y Centros de Salud",
        type: "list" as const,
        items: [
          "Acceso a información médica, citas y servicios de salud de forma independiente.",
        ],
      },
      {
        heading: "Estaciones de Tren o Aeropuertos",
        type: "list" as const,
        items: [
          "Información de horarios, compra de tickets y servicios de transporte.",
        ],
      },
      {
        heading: "Dependencias Gubernamentales",
        type: "list" as const,
        items: [
          "Tramites administrativos y servicios públicos accesibles.",
        ],
      },
      {
        heading: "Bancos o Terminales de Autoservicio",
        type: "list" as const,
        items: [
          "Operaciones bancarias y servicios financieros independientes.",
        ],
      },
      {
        heading: "Museos o Espacios Culturales",
        type: "list" as const,
        items: [
          "Información cultural, guías interactivas y experiencias accesibles.",
        ],
      },
      {
        heading: "Universidades y Escuelas",
        type: "list" as const,
        items: [
          "Información académica, inscripciones y servicios educativos.",
        ],
      },
      {
        heading: "Ventajas",
        type: "list" as const,
        items: [
          "♿Promueve la InclusiónGarantiza acceso equitativo a servicios digitales para todas las personas.🤝IndependenciaReduce la necesidad de asistencia humana para realizar trámites.📋Cumple NormativasCumple con normativas de accesibilidad ADA e ISO.🏢Imagen InstitucionalMejora la imagen institucional de las organizaciones.",
        ],
      },
      {
        heading: "Promueve la Inclusión",
        type: "list" as const,
        items: [
          "Garantiza acceso equitativo a servicios digitales para todas las personas.",
        ],
      },
      {
        heading: "Independencia",
        type: "list" as const,
        items: [
          "Reduce la necesidad de asistencia humana para realizar trámites.",
        ],
      },
      {
        heading: "Cumple Normativas",
        type: "list" as const,
        items: [
          "Cumple con normativas de accesibilidad ADA e ISO.",
        ],
      },
      {
        heading: "Imagen Institucional",
        type: "list" as const,
        items: [
          "Mejora la imagen institucional de las organizaciones.",
        ],
      },
      {
        heading: "Pantalla Táctil",
        type: "list" as const,
        items: [
          "Capacitiva 32\"",
          "LED display Philips HD (1366 x 768 px)",
          "Panel Multitáctil Capacitivo (hasta 10 toques simultáneos)",
          "Vidrio float 4 mm laminado",
          "Montaje de pantalla horizontal",
        ],
      },
      {
        heading: "Estructura",
        type: "list" as const,
        items: [
          "Material: Madera MDF con soportes y refuerzos de metal",
          "Color: Blanco",
          "Medidas: 1.10m x 1.20m x 0.70m",
          "Base antideslizante con opción de fijación al piso",
          "Rueditas con freno (opcional)",
        ],
      },
      {
        heading: "Diseño",
        type: "list" as const,
        items: [
          "Ergonómico para accesibilidad",
          "Elegante y moderno",
          "Monitor con inclinación fija",
          "Uso: Indoor",
        ],
      },
      {
        heading: "Funcionalidades",
        type: "list" as const,
        items: [
          "Espacio para guardar mini PC",
          "Puerta trasera de inspección con cerradura",
          "Ploteo en la base con símbolo de Silla de Ruedas",
          "Luz de led que ilumina la base (opcional)",
        ],
      },
      {
        heading: "Accesibilidad",
        type: "list" as const,
        items: [
          "Altura accesible para sillas de ruedas",
          "Espacio libre inferior mínimo 70cm",
          "Interfaz adaptada para movilidad reducida",
          "Cumple normativas ADA e ISO",
        ],
      },
      {
        heading: "Opciones Disponibles",
        type: "list" as const,
        items: [
          "Opción 1Configuración estándar con todas las características de accesibilidad incluidas.Opción 2Configuración personalizada con opciones adicionales según necesidades específicas.",
        ],
      },
      {
        heading: "Opción 1",
        type: "list" as const,
        items: [
          "Configuración estándar con todas las características de accesibilidad incluidas.",
        ],
      },
      {
        heading: "Opción 2",
        type: "list" as const,
        items: [
          "Configuración personalizada con opciones adicionales según necesidades específicas.",
        ],
      },
    ],
  },
  {
    slug: "mesa-interactiva",
    title: "Mesa Interactiva",
    description: "Dispositivo digital con pantalla táctil horizontal para experiencias colaborativas e inmersivas",
    category: "totems",
    images: ["/products/mesa-interactiva/01.png", "/products/mesa-interactiva/02.jpg", "/products/mesa-interactiva/03.jpg"],
    features: [
      "Juegos didácticos",
      "Actividades en grupo",
      "Tareas colaborativas en nivel inicial y primario",
      "Mapas interactivos",
      "Información turística",
      "Check-in digital",
      "Catálogos digitales",
      "Personalización de productos",
      "Promociones interactivas",
      "Mesas con menú digital",
      "Pedidos desde la mesa",
      "Juegos para niños",
      "Explorar contenido multimedia",
      "Ver reconstrucciones en 3D",
      "Aprender jugando",
      "Presentaciones colaborativas",
      "Brainstorming interactivo",
      "Reuniones dinámicas",
    ],
    sections: [
      {
        heading: "¿Qué es una Mesa Interactiva?",
        type: "list" as const,
        items: [
          "Una mesa interactiva es un dispositivo digital en forma de mesa con una pantalla táctil integrada en su superficie horizontal. Funciona como una gran tablet o monitor táctil, permitiendo que una o varias personas interactúen al mismo tiempo con contenido multimedia, juegos, aplicaciones educativas, presentaciones, planos, catálogos, etc.",
          "Es una herramienta cada vez más utilizada en sectores como la educación, el turismo, la publicidad, la hostelería y el retail, por su capacidad de generar experiencias dinámicas, colaborativas y atractivas.",
          "Una mesa interactiva es una fusión entre tecnología táctil y mobiliario funcional, pensada para facilitar la interacción directa, simultánea y creativa entre personas y contenidos digitales. Es ideal para crear experiencias modernas, inmersivas y educativas.",
        ],
      },
      {
        heading: "Pantalla Táctil Horizontal",
        type: "list" as const,
        items: [
          "La superficie completa funciona como una pantalla interactiva multitáctil, permitiendo que varias personas la usen al mismo tiempo.",
        ],
      },
      {
        heading: "Interacción Multiusuario",
        type: "list" as const,
        items: [
          "Soporta gestos simultáneos, ideal para juegos educativos, brainstorming, atención al cliente, etc.",
        ],
      },
      {
        heading: "Diseño Robusto y Ergonómico",
        type: "list" as const,
        items: [
          "Pensada para un uso intensivo, con materiales resistentes y altura adaptada para su uso cómodo.",
        ],
      },
      {
        heading: "Software Personalizado",
        type: "list" as const,
        items: [
          "Puede incluir apps específicas según el sector: menús interactivos para restaurantes, juegos didácticos, mapas turísticos, catálogos de productos, etc.",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "Muchas se conectan a internet o redes locales para actualizar el contenido en tiempo real.",
        ],
      },
      {
        heading: "Experiencia Inmersiva",
        type: "list" as const,
        items: [
          "Crea experiencias modernas, inmersivas y educativas que fomentan la participación activa.",
        ],
      },
      {
        heading: "Ventajas",
        type: "list" as const,
        items: [
          "👀Atrae la AtenciónAtrae la atención del público de todas las edades con su interactividad.🤝Trabajo en EquipoFomenta el trabajo en equipo y la participación activa.💫Experiencia MemorableBrinda una experiencia interactiva memorable y única.🎯Contenido PersonalizablePermite personalizar el contenido según el contexto o la audiencia.",
        ],
      },
      {
        heading: "Atrae la Atención",
        type: "list" as const,
        items: [
          "Atrae la atención del público de todas las edades con su interactividad.",
        ],
      },
      {
        heading: "Trabajo en Equipo",
        type: "list" as const,
        items: [
          "Fomenta el trabajo en equipo y la participación activa.",
        ],
      },
      {
        heading: "Experiencia Memorable",
        type: "list" as const,
        items: [
          "Brinda una experiencia interactiva memorable y única.",
        ],
      },
      {
        heading: "Contenido Personalizable",
        type: "list" as const,
        items: [
          "Permite personalizar el contenido según el contexto o la audiencia.",
        ],
      },
      {
        heading: "Galería de Imágenes",
        type: "list" as const,
        items: [
          "Experiencia ColaborativaMúltiples usuarios interactuando simultáneamente con la mesa interactiva.Diseño ModernoDiseño elegante y funcional que se integra perfectamente en cualquier espacio.",
        ],
      },
      {
        heading: "Experiencia Colaborativa",
        type: "list" as const,
        items: [
          "Múltiples usuarios interactuando simultáneamente con la mesa interactiva.",
        ],
      },
      {
        heading: "Diseño Moderno",
        type: "list" as const,
        items: [
          "Diseño elegante y funcional que se integra perfectamente en cualquier espacio.",
        ],
      },
    ],
  },
  {
    slug: "samsung-business-tv",
    title: "Samsung Business TV",
    description: "Televisor para personalizar el contenido de tu negocio con cartelería digital inteligente",
    category: "pantallas",
    images: ["/products/samsung-business-tv/01.png", "/products/samsung-business-tv/02.png", "/products/samsung-business-tv/03.jpg", "/products/samsung-business-tv/04.jpg", "/products/samsung-business-tv/05.jpg", "/products/samsung-business-tv/06.jpg", "/products/samsung-business-tv/07.jpg", "/products/samsung-business-tv/08.jpg", "/products/samsung-business-tv/09.jpg", "/products/samsung-business-tv/10.jpg"],
    features: [
      "Tamaño de pantalla: 55\"",
      "Resolución: 3.840 x 2.160 (4K UHD)",
      "Brillo: 350 cd/m² (nits)",
      "Contraste: 4.000:1",
      "Tipo de Pantalla: Crystal UHD",
      "Horas de operación: 16/7",
      "Video: HDR10+",
      "Procesador: 4K",
      "Garantía: 3 años",
      "Resolución UHD para comunicación atractiva",
      "Crystal Display con óptima expresión de color",
      "High Dynamic Range (HDR)",
      "Mejores niveles de brillo y nitidez",
      "Conexión a Internet",
      "App móvil Android/iOS",
      "Control remoto completo",
      "Sincronización segura",
      "Uso intensivo 16h/día",
      "Funcionamiento 7 días/semana",
      "Garantía extendida 3 años",
      "Diseño profesional",
    ],
    sections: [
      {
        heading: "¿Qué es Samsung Business TV?",
        type: "list" as const,
        items: [
          "La cartelería digital permite que las empresas creen, editen y actualicen de manera rápida, sencilla y a bajo costo sus mensajes para impactar de manera efectiva a su audiencia.",
          "En los últimos años la digitalización ha trascendido a distintos aspectos del mundo empresarial. Incluso, ha permeado la publicidad para que cada vez sea más dinámica y fluida; de manera que los mensajes sean más impactantes, pero a la vez ajustados a las dinámicas del mercado.",
          "Samsung Business TV es un televisor que ofrece a las empresas una solución efectiva a sus necesidades de comunicación. El contenido del dispositivo puede ser controlado, editado y actualizado mediante Samsung Business TV -a través de un Smartphone y no requiere de una infraestructura informática adicional.",
        ],
      },
      {
        heading: "Contenido Propio y Programación TV",
        type: "list" as const,
        items: [
          "Controla, edita y actualiza contenido mediante smartphone sin infraestructura informática adicional.",
        ],
      },
      {
        heading: "Instalación Ágil y Rápida",
        type: "list" as const,
        items: [
          "Solo conecta a la corriente y red de Internet. Guía de configuración fácil y amigable.",
        ],
      },
      {
        heading: "App Móvil Intuitiva",
        type: "list" as const,
        items: [
          "App para Android o iOS con plantillas personalizables y creación de diseños propios.",
        ],
      },
      {
        heading: "Funcionamiento Automático",
        type: "list" as const,
        items: [
          "Temporizador de encendido/apagado. Funciona automáticamente sin reprogramación diaria.",
        ],
      },
      {
        heading: "Seguridad Empresarial",
        type: "list" as const,
        items: [
          "Sincronización segura con código PIN. Bloqueo de botones y puerto USB.",
        ],
      },
      {
        heading: "Uso Intensivo",
        type: "list" as const,
        items: [
          "Diseñado para funcionar 16 horas al día, 7 días a la semana con garantía de 3 años.",
        ],
      },
      {
        heading: "Ahorro de Costos",
        type: "list" as const,
        items: [
          "Incrementa 30% la posibilidad de éxito de emprendimientos al ahorrar en costos y tiempos.",
        ],
      },
      {
        heading: "Procesos Optimizados",
        type: "list" as const,
        items: [
          "Simplifica procesos que antes eran engorrosos y representaban aumento en costos operativos.",
        ],
      },
      {
        heading: "Mejor Imagen",
        type: "list" as const,
        items: [
          "Brinda una mejor imagen a su público objetivo con contenido dinámico y atractivo.",
        ],
      },
      {
        heading: "Control Remoto",
        type: "list" as const,
        items: [
          "Controla completamente desde la aplicación móvil para Android o iOS.",
        ],
      },
      {
        heading: "Pantalla Compartida",
        type: "list" as const,
        items: [
          "Durante eventos deportivos, conecta al cable y proyecta partidos de fútbol mientras muestras ofertas y novedades.",
        ],
      },
      {
        heading: "Contenido Rápido y Variado",
        type: "list" as const,
        items: [
          "Edita y comparte contenido de forma rápida con plantillas prediseñadas editables para información visualmente llamativa.",
        ],
      },
      {
        heading: "Control Múltiple",
        type: "list" as const,
        items: [
          "Los televisores conectados se muestran en el dispositivo móvil, permitiendo compartir contenido en varios a la vez.",
        ],
      },
      {
        heading: "Especificaciones Técnicas",
        type: "list" as const,
        items: [
          "Monitor Profesional 55\"• Tamaño de pantalla: 55\"• Resolución: 3.840 x 2.160 (4K UHD)• Brillo: 350 cd/m² (nits)• Contraste: 4.000:1• Tipo de Pantalla: Crystal UHDRendimiento• Horas de operación: 16/7• Video: HDR10+• Procesador: 4K• Garantía: 3 años",
        ],
      },
      {
        heading: "Monitor Profesional 55\"",
        type: "list" as const,
        items: [
          "Tamaño de pantalla: 55\"",
          "Resolución: 3.840 x 2.160 (4K UHD)",
          "Brillo: 350 cd/m² (nits)",
          "Contraste: 4.000:1",
          "Tipo de Pantalla: Crystal UHD",
        ],
      },
      {
        heading: "Rendimiento",
        type: "list" as const,
        items: [
          "Horas de operación: 16/7",
          "Video: HDR10+",
          "Procesador: 4K",
          "Garantía: 3 años",
        ],
      },
      {
        heading: "Calidad Visual",
        type: "list" as const,
        items: [
          "Resolución UHD para comunicación atractiva",
          "Crystal Display con óptima expresión de color",
          "High Dynamic Range (HDR)",
          "Mejores niveles de brillo y nitidez",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "Conexión a Internet",
          "App móvil Android/iOS",
          "Control remoto completo",
          "Sincronización segura",
        ],
      },
      {
        heading: "Durabilidad",
        type: "list" as const,
        items: [
          "Uso intensivo 16h/día",
          "Funcionamiento 7 días/semana",
          "Garantía extendida 3 años",
          "Diseño profesional",
        ],
      },
      {
        heading: "En Uso Comercial",
        type: "list" as const,
        items: [
          "Perfecto para mostrar ofertas y promociones en tiempo real.",
        ],
      },
      {
        heading: "Fácil Instalación",
        type: "list" as const,
        items: [
          "Instalación sencilla con solo conectar a corriente e Internet.",
        ],
      },
      {
        heading: "Pantalla Compartida",
        type: "list" as const,
        items: [
          "Ideal para eventos deportivos y contenido simultáneo.",
        ],
      },
      {
        heading: "Control Móvil",
        type: "list" as const,
        items: [
          "Controla todo desde tu smartphone con la app Samsung Business TV.",
        ],
      },
      {
        heading: "Calidad 4K UHD",
        type: "list" as const,
        items: [
          "Resolución Ultra HD para contenido de máxima calidad.",
        ],
      },
      {
        heading: "Diseño Profesional",
        type: "list" as const,
        items: [
          "Diseño elegante que se integra perfectamente en cualquier espacio comercial.",
        ],
      },
    ],
  },
  {
    slug: "monitores-stand-alone",
    title: "Monitores Profesionales de Cartelería Digital",
    description: "Pantallas diseñadas específicamente para entornos comerciales con alto rendimiento y durabilidad",
    category: "pantallas",
    images: ["/products/monitores-stand-alone/01.png", "/products/monitores-stand-alone/02.jpg", "/products/monitores-stand-alone/03.png"],
    features: [
      "Múltiples entradas HDMI",
      "DisplayPort",
      "Conexiones USB",
      "Red Ethernet",
      "WiFi integrado",
      "Brillo: 400-3000 nits",
      "Contraste optimizado",
      "Funcionamiento 24/7",
      "Vida útil extendida",
      "Refrigeración eficiente",
      "Control remoto centralizado",
      "Actualizaciones OTA",
      "Programación de contenido",
      "Monitoreo de estado",
      "Alertas automáticas",
    ],
    sections: [
      {
        heading: "¿Qué son los Monitores Profesionales de Cartelería Digital?",
        type: "list" as const,
        items: [
          "Los monitores profesionales de Cartelería Digital son pantallas diseñadas específicamente para funcionar en entornos comerciales o públicos con requerimientos de alto rendimiento. Se diferencian de los televisores convencionales por varias características clave.",
          "En resumen, la cartelería digital y los monitores profesionales de Digital Signage representan una evolución en la comunicación visual, ofreciendo soluciones innovadoras y personalizables para mejorar la experiencia del usuario y optimizar la publicidad y la información en distintos entornos.",
        ],
      },
      {
        heading: "Durabilidad y Tiempo de Uso Prolongado",
        type: "list" as const,
        items: [
          "Diseñados para funcionar 24/7 o durante largas jornadas sin degradación de la calidad de imagen. Incorporan sistemas de refrigeración y disipación de calor más eficientes.",
        ],
      },
      {
        heading: "Brillo y Contraste Optimizados",
        type: "list" as const,
        items: [
          "Niveles de brillo superiores a los televisores domésticos (generalmente entre 400 y 3000 nits), lo que los hace legibles en ambientes con mucha iluminación o a plena luz del día.",
        ],
      },
      {
        heading: "Orientación Flexible",
        type: "list" as const,
        items: [
          "Permiten instalación en modo horizontal (landscape) o vertical (portrait), adaptándose a distintos tipos de comunicación visual.",
        ],
      },
      {
        heading: "Conectividad Avanzada",
        type: "list" as const,
        items: [
          "Múltiples entradas de video (HDMI, DisplayPort, USB, etc.) y capacidades de conexión en red para actualizaciones remotas del contenido.",
        ],
      },
      {
        heading: "Mayor Control y Gestión Remota",
        type: "list" as const,
        items: [
          "Se pueden administrar de manera centralizada mediante plataformas de software que permiten programar y actualizar contenido en múltiples pantallas.",
        ],
      },
      {
        heading: "Diseño sin Biseles o Ultrafinos",
        type: "list" as const,
        items: [
          "Algunos modelos permiten crear video walls, es decir, composiciones de varias pantallas unidas para generar un efecto visual impactante sin interrupciones entre ellas.",
        ],
      },
      {
        heading: "Ventajas Técnicas",
        type: "list" as const,
        items: [
          "⏰Funcionamiento 24/7Diseñados para operación continua sin degradación de rendimiento.☀️Alto BrilloHasta 3000 nits de brillo para visibilidad en exteriores.🔄Orientación FlexibleInstalación horizontal o vertical según necesidades.🌐Gestión RemotaControl centralizado de múltiples pantallas.",
        ],
      },
      {
        heading: "Funcionamiento 24/7",
        type: "list" as const,
        items: [
          "Diseñados para operación continua sin degradación de rendimiento.",
        ],
      },
      {
        heading: "Alto Brillo",
        type: "list" as const,
        items: [
          "Hasta 3000 nits de brillo para visibilidad en exteriores.",
        ],
      },
      {
        heading: "Orientación Flexible",
        type: "list" as const,
        items: [
          "Instalación horizontal o vertical según necesidades.",
        ],
      },
      {
        heading: "Gestión Remota",
        type: "list" as const,
        items: [
          "Control centralizado de múltiples pantallas.",
        ],
      },
      {
        heading: "Características Técnicas Detalladas",
        type: "list" as const,
        items: [
          "Conectividad• Múltiples entradas HDMI• DisplayPort• Conexiones USB• Red Ethernet• WiFi integradoRendimiento• Brillo: 400-3000 nits• Contraste optimizado• Funcionamiento 24/7• Vida útil extendida• Refrigeración eficienteGestión• Control remoto centralizado• Actualizaciones OTA• Programación de contenido• Monitoreo de estado• Alertas automáticas",
        ],
      },
      {
        heading: "Sistema on Chip (SoC)",
        type: "list" as const,
        items: [
          "Algunos modelos incluyen reproductores de medios integrados que permiten ejecutar contenido sin necesidad de hardware adicional.",
        ],
      },
      {
        heading: "Refrigeración Avanzada",
        type: "list" as const,
        items: [
          "Sistemas de refrigeración y disipación de calor más eficientes para funcionamiento prolongado.",
        ],
      },
      {
        heading: "Video Walls",
        type: "list" as const,
        items: [
          "Capacidad para crear composiciones de múltiples pantallas sin interrupciones visuales.",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "Múltiples entradas HDMI",
          "DisplayPort",
          "Conexiones USB",
          "Red Ethernet",
          "WiFi integrado",
        ],
      },
      {
        heading: "Rendimiento",
        type: "list" as const,
        items: [
          "Brillo: 400-3000 nits",
          "Contraste optimizado",
          "Funcionamiento 24/7",
          "Vida útil extendida",
          "Refrigeración eficiente",
        ],
      },
      {
        heading: "Gestión",
        type: "list" as const,
        items: [
          "Control remoto centralizado",
          "Actualizaciones OTA",
          "Programación de contenido",
          "Monitoreo de estado",
          "Alertas automáticas",
        ],
      },
    ],
  },
  {
    slug: "pantalla-dual-3000-1000-nits",
    title: "Pantalla Dual SAMSUNG 55''",
    description: "Pantalla doble, efecto doble. Este dispositivo ha sido creado para mejorar el espacio en el que se ubique y ofrecer una visibilidad completa, incluso en el lado que dé directamente al exterior y reciba luz del sol directa. Así, la información que desees transmitir llega de forma precisa a tus clientes y consigue atraer su atención.",
    category: "pantallas",
    images: ["/products/pantalla-dual-3000-1000-nits/01.jpg", "/products/pantalla-dual-3000-1000-nits/02.jpg", "/products/pantalla-dual-3000-1000-nits/03.jpg", "/products/pantalla-dual-3000-1000-nits/04.jpg", "/products/pantalla-dual-3000-1000-nits/05.jpg", "/products/pantalla-dual-3000-1000-nits/06.jpg", "/products/pantalla-dual-3000-1000-nits/07.jpg", "/products/pantalla-dual-3000-1000-nits/08.jpg", "/products/pantalla-dual-3000-1000-nits/09.jpg", "/products/pantalla-dual-3000-1000-nits/10.jpeg"],
    features: [
      "Tamaño de pantalla: 55\"",
      "Panel: VA",
      "Resolución: 1,920 x 1,080",
      "Tamaño de píxel (HxV): 0.63x0.63mm",
      "Brillo (Normal): Outdoor 3,000 / Indoor 1,000 nits",
      "Contraste: 6,000:1",
      "Ángulo de Visión (H/V): 178/178",
      "Tiempo de Respuesta: 6ms (Outdoor) / 8ms (Indoor)",
      "Gama de color: NTSC 72%",
      "Glass Haze: 0%",
      "Frecuencia H-Scanning: 15~135kHz(HDMI)",
      "Frecuencia máxima de píxel: 594MHz(HDMI)",
      "Frecuencia V-Scanning: 24~75Hz(HDMI)",
      "Ratio de contraste (Dinámico): Mega",
      "HDMI In: 2",
      "Version of HDMI: 2",
      "Version of HDCP: 2.2",
      "USB: 2",
      "IR In: Si",
      "HDBaseT Out: No",
      "Entrada Audio: No",
      "Power Out: No",
      "RS232 In: Si",
      "RJ45 In: Si",
    ],
    sections: [
      {
        heading: "Contenido claro y nítido en una pantalla dual",
        type: "list" as const,
        items: [
          "Pantalla doble, efecto doble. Este dispositivo ha sido creado para mejorar el espacio en el que se ubique y ofrecer una visibilidad completa, incluso en el lado que dé directamente al exterior y reciba luz del sol directa. Así, la información que desees transmitir llega de forma precisa a tus clientes y consigue atraer su atención.",
          "Visibilidad completa incluso con luz solar directa✔Contenido claro y nítido en ambas caras✔Ideal para vidrieras y espacios comerciales",
        ],
      },
      {
        heading: "Un diseño flexible que da un toque moderno al ambiente",
        type: "list" as const,
        items: [
          "Escoge la posición que más te guste: con múltiples opciones de instalación, esta versátil pantalla se adapta al entorno con un aspecto elegante.",
          "Múltiples opciones de instalación✔Se adapta a cualquier entorno✔Aspecto elegante y moderno",
        ],
      },
      {
        heading: "Máxima eficiencia",
        type: "list" as const,
        items: [
          "Esta pantalla de doble cara te permite mostrar contenido en ambos lados con una única conexión a la red eléctrica y un único cable LAN. Así, no hay desorden de cables y ganas en eficiencia energética.",
          "Una sola conexión eléctrica✔Un único cable LAN✔Sin desorden de cables✔Eficiencia energética optimizada",
        ],
      },
      {
        heading: "Rendimiento y durabilidad",
        type: "list" as const,
        items: [
          "Con protección ante el polvo IP5X y una funcionalidad de serie patentada que reduce el sobrecalentamiento, la serie OMN-DS proporciona una durabilidad increíble.",
          "Protección IP5X contra el polvo✔Funcionalidad patentada anti-sobrecalentamiento✔Durabilidad increíble",
        ],
      },
      {
        heading: "Los cables, siempre en orden",
        type: "list" as const,
        items: [
          "Su funda para cables mantiene todas las conexiones organizadas y con un aspecto ordenado. Su conectividad Wi-Fi incorporada permite realizar actualizaciones sin añadir cables ni desorden.",
          "Funda para cables incluida✔Conexiones organizadas✔Conectividad Wi-Fi incorporada✔Actualizaciones sin cables",
        ],
      },
      {
        heading: "Posición vertical, sostenida desde el techo o desde el piso",
        type: "list" as const,
        items: [
          "La pantalla dual puede ser sostenida con brazos agarrados a los laterales de la pantalla los cuales pueden ser colgados en el techo o pueden ser parados en el piso en forma de un Stand.✔Instalación desde el techo✔Instalación en piso con Stand✔Brazos laterales incluidos✔Flexibilidad total de montaje",
        ],
      },
      {
        heading: "Pantalla",
        type: "list" as const,
        items: [
          "Tamaño de pantalla: 55\"",
          "Panel: VA",
          "Resolución: 1,920 x 1,080",
          "Tamaño de píxel (HxV): 0.63x0.63mm",
          "Brillo (Normal): Outdoor 3,000 / Indoor 1,000 nits",
          "Contraste: 6,000:1",
          "Ángulo de Visión (H/V): 178/178",
          "Tiempo de Respuesta: 6ms (Outdoor) / 8ms (Indoor)",
          "Gama de color: NTSC 72%",
          "Glass Haze: 0%",
          "Frecuencia H-Scanning: 15~135kHz(HDMI)",
          "Frecuencia máxima de píxel: 594MHz(HDMI)",
          "Frecuencia V-Scanning: 24~75Hz(HDMI)",
          "Ratio de contraste (Dinámico): Mega",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "HDMI In: 2",
          "Version of HDMI: 2",
          "Version of HDCP: 2.2",
          "USB: 2",
          "IR In: Si",
          "HDBaseT Out: No",
          "Entrada Audio: No",
          "Power Out: No",
          "RS232 In: Si",
          "RJ45 In: Si",
          "WiFi: Si",
        ],
      },
      {
        heading: "Consumo de energía",
        type: "list" as const,
        items: [
          "Fuente de alimentación: AC100-240V 50/60Hz",
          "Consumo (Encendido): 500W",
          "Consumo (Reposo): 0.5W",
        ],
      },
      {
        heading: "Medidas",
        type: "list" as const,
        items: [
          "Dimensiones (ancho x alto x profundidad): 726.8 x 1299 x 69.5 mm",
        ],
      },
      {
        heading: "Peso",
        type: "list" as const,
        items: [
          "Peso del set: 42 kg",
        ],
      },
      {
        heading: "Operación",
        type: "list" as const,
        items: [
          "Temperatura: 0~40 ℃",
          "Humedad: 10 ~ 80%, non-condensing",
        ],
      },
      {
        heading: "Características mecánicas",
        type: "list" as const,
        items: [
          "Anchura de marco: 22.8mm",
        ],
      },
      {
        heading: "Características generales",
        type: "list" as const,
        items: [
          "External Memory Slot: No",
        ],
      },
      {
        heading: "Características opcionales",
        type: "list" as const,
        items: [
          "Cristal de protección: No",
        ],
      },
      {
        heading: "SoC",
        type: "list" as const,
        items: [
          "OS Version: Tizen 5.0",
          "Flash Memory Size: 8 GB",
        ],
      },
    ],
  },
  {
    slug: "kiosco-autogestion-samsung",
    title: "Samsung Kiosk LH24KMATBGC",
    description: "Diseñado para cada negocio brindando tranquilidad",
    category: "kioscos",
    images: ["/products/kiosco-autogestion-samsung/01.webp", "/products/kiosco-autogestion-samsung/02.webp", "/products/kiosco-autogestion-samsung/03.avif", "/products/kiosco-autogestion-samsung/04.webp", "/products/kiosco-autogestion-samsung/05.webp", "/products/kiosco-autogestion-samsung/06.webp", "/products/kiosco-autogestion-samsung/07.jpeg", "/products/kiosco-autogestion-samsung/08.webp", "/products/kiosco-autogestion-samsung/09.avif"],
    features: [
      "Tamaño diagonal: 24\"",
      "Tipo de panel: ADS",
      "Resolución: 1,920 x 1,080 px",
      "Pixel Pitch (HxV): 0.2745 x 0.2745 mm",
      "Brillo (Típico): 250 nits",
      "Ratio de contraste: 1000:1",
      "Ángulo de visión (HxV): 178/178",
      "Tiempo de respuesta: 14ms",
      "Gama de colores: 72%",
      "Opacidad del vidrio: 25 (w/o glass)",
      "Frecuencia de escaneo H: 48~75KHz",
      "Frecuencia máxima de pixel: 594MHz",
      "Frecuencia de escaneo V: 56~84.5Hz",
      "Contraste (Dinámico): Mega",
      "Tiempo de operación: 16/7",
      "Entrada HDMI: 1",
      "USB: 1",
      "Entrada RS232: Si",
      "Entrada RJ45: Si",
      "WiFi: Si",
      "Suministro de energía: AC100-240V 50/60Hz",
      "Consumo (modo encendido): 49.5 W",
      "Consumo (modo sleep): 0.5 W",
      "Dimensiones del equipo (Ancho x Alto x Profundidad): 547.9 x 334.4 x 48.8 mm",
    ],
    sections: [
      {
        heading: "Diseñado para cada negocio brindando tranquilidad",
        type: "list" as const,
        items: [
          "La última tecnología de Samsung ofrece un nuevo estándar de Kiosk, que ofrece un diseño compacto que ahorra espacio, seguridad avanzada provista por Knox y fácil administración y mantenimiento para un rendimiento confiable.",
          "Construido en base a la tecnología SoC (System on Chip) de Samsung, es la solución ideal para cualquier empresa.",
          "Diseño compacto que ahorra espacio✔Seguridad avanzada con Samsung Knox✔Fácil administración y mantenimiento✔Tecnología SoC de Samsung",
        ],
      },
      {
        heading: "Funcionalidad modular para admitir cualquier tipo de pago",
        type: "list" as const,
        items: [
          "Samsung Kiosk adopta un diseño modular que brinda una variedad de opciones de pago que incluyen tarjeta de crédito, código de barras, código QR y NFC, junto con una impresora integrada.",
          "Esto significa que no necesita periféricos adicionales para una solución avanzada todo en uno que también hace que el mantenimiento sea rápido y fácil.",
          "Tarjeta de crédito✔Código de barras✔Código QR✔NFC✔Impresora integrada",
        ],
      },
      {
        heading: "Diseño compacto y moderno",
        type: "list" as const,
        items: [
          "Samsung Kiosk se compone de una única parte de pantalla y caja de conexiones, junto con un soporte opcional. El diseño permite una gestión de cables limpia y cómoda, mientras que el color blanco grisáceo y el soporte sencillo hacen que se integre perfectamente en el interior de cualquier tienda con un aspecto elegante.",
          "Diseño compacto y unificado✔Gestión de cables limpia✔Color blanco grisáceo elegante✔Integración perfecta en cualquier tienda",
        ],
      },
      {
        heading: "Solución versátil para cualquier escenario",
        type: "list" as const,
        items: [
          "Para una mayor flexibilidad en cualquier entorno empresarial, el nuevo Kiosk de Samsung ofrece tres tipos de instalación: mostrador, soporte de piso y montaje en pared, junto con cableado oculto y zapatilla, sin necesidad de una PC externa para optimizar el ahorro de espacio.",
          "Instalación en mostrador✔Soporte de piso✔Montaje en pared✔Cableado oculto✔Sin necesidad de PC externa",
        ],
      },
      {
        heading: "Pantalla limpia en todo momento",
        type: "list" as const,
        items: [
          "Gracias al revestimiento antimicrobiano, Samsung Kiosk inhibe el crecimiento de microbios para ayudar a proteger contra ciertas bacterias. Esto permite a los clientes mantenerse enfocados en lo que está en la pantalla con tranquilidad.",
          "Revestimiento antimicrobiano✔Inhibe el crecimiento de microbios✔Certificación antibacteriana UL2282✔Efectividad superior al 99%",
        ],
      },
      {
        heading: "Protección anti-astillas",
        type: "list" as const,
        items: [
          "Entendemos que los accidentes ocurren. Para proteger a los estudiantes y educadores, la pantalla Samsung Kiosk está envuelta en una película inastillable patentada, lo que garantiza que la pantalla permanezca intacta en caso de rotura.",
          "Película inastillable patentada✔Pantalla permanece intacta en caso de rotura✔Protección para usuarios y educadores✔Diseño seguro y confiable",
        ],
      },
      {
        heading: "Display",
        type: "list" as const,
        items: [
          "Tamaño diagonal: 24\"",
          "Tipo de panel: ADS",
          "Resolución: 1,920 x 1,080 px",
          "Pixel Pitch (HxV): 0.2745 x 0.2745 mm",
          "Brillo (Típico): 250 nits",
          "Ratio de contraste: 1000:1",
          "Ángulo de visión (HxV): 178/178",
          "Tiempo de respuesta: 14ms",
          "Gama de colores: 72%",
          "Opacidad del vidrio: 25 (w/o glass)",
          "Frecuencia de escaneo H: 48~75KHz",
          "Frecuencia máxima de pixel: 594MHz",
          "Frecuencia de escaneo V: 56~84.5Hz",
          "Contraste (Dinámico): Mega",
          "Tiempo de operación: 16/7",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "Entrada HDMI: 1",
          "USB: 1",
          "Entrada RS232: Si",
          "Entrada RJ45: Si",
          "WiFi: Si",
        ],
      },
      {
        heading: "Alimentación",
        type: "list" as const,
        items: [
          "Suministro de energía: AC100-240V 50/60Hz",
          "Consumo (modo encendido): 49.5 W",
          "Consumo (modo sleep): 0.5 W",
        ],
      },
      {
        heading: "Dimensiones",
        type: "list" as const,
        items: [
          "Dimensiones del equipo (Ancho x Alto x Profundidad): 547.9 x 334.4 x 48.8 mm",
          "Dimensiones del empaque (Ancho x Alto x Profundidad): 620 x 419 x 122 mm",
        ],
      },
      {
        heading: "Peso",
        type: "list" as const,
        items: [
          "Peso del equipo: 4.4 kg",
          "Peso del paquete: 5.4 kg",
        ],
      },
      {
        heading: "Condiciones operativas",
        type: "list" as const,
        items: [
          "Temperatura: 0℃~40℃",
          "Humedad: 10 ~ 80%, non-condensing",
        ],
      },
      {
        heading: "Especificación mecánica",
        type: "list" as const,
        items: [
          "Ancho de marco: UD: 17.9 / LR: 9.4",
          "Material de marco: Non-Glossy",
        ],
      },
      {
        heading: "Táctil",
        type: "list" as const,
        items: [
          "Tecnología Touch: Capacitiva",
        ],
      },
    ],
  },
  {
    slug: "vidrieras-digitales",
    title: "VIDRIERA DIGITAL",
    description: "Transforma tu negocio con la tecnología de cartelería digital más avanzada",
    category: "pantallas",
    images: ["/products/vidrieras-digitales/01.jpg", "/products/vidrieras-digitales/02.jpg", "/products/vidrieras-digitales/03.jpg", "/products/vidrieras-digitales/04.jpg", "/products/vidrieras-digitales/05.jpg", "/products/vidrieras-digitales/06.png", "/products/vidrieras-digitales/07.jpg", "/products/vidrieras-digitales/08.jpg", "/products/vidrieras-digitales/09.jpg", "/products/vidrieras-digitales/10.png"],
    features: [

    ],
    sections: [
      {
        heading: "¿Por qué migrar a Digital?",
        type: "list" as const,
        items: [
          "A diferencia de los posters convencionales, la Cartelería Digital presenta imágenes nítidas y brillantes que harán que más clientes ingresen en tu tienda.",
        ],
      },
      {
        heading: "Impacto visual",
        type: "list" as const,
        items: [
          "Rápidamente capta la atención del público.",
        ],
      },
      {
        heading: "¿Es lo suficientemente brillante?",
        type: "list" as const,
        items: [
          "Los monitores profesionales Samsung de ALTO BRILLO logran captar la atención de potenciales clientes aún con luz solar directa sobre la pantalla.",
        ],
      },
      {
        heading: "Actualización de contenidos rápida e instantánea",
        type: "list" as const,
        items: [
          "Cambia tu contenido en tiempo real sin necesidad de imprimir nuevos materiales.",
        ],
      },
      {
        heading: "Bajo consumo eléctrico",
        type: "list" as const,
        items: [
          "Tecnología eficiente que optimiza el consumo energético.",
        ],
      },
      {
        heading: "Operación inteligente",
        type: "list" as const,
        items: [
          "Sensores automáticos y gestión remota para máxima eficiencia.",
        ],
      },
      {
        heading: "Beneficios de la Vidriera Digital",
        type: "list" as const,
        items: [
          "La vidriera digital provee a los comerciantes beneficios inmediatos que impactan directamente en un aumento de ventas.",
        ],
      },
      {
        heading: "Alto Brillo",
        type: "list" as const,
        items: [
          "De 2.500 a 4.000 nits para contrastar la luz solar directa y garantizar visibilidad óptima.",
        ],
      },
      {
        heading: "Sensor de Luminosidad",
        type: "list" as const,
        items: [
          "Modifica automáticamente su brillo según el momento del día para optimizar el consumo.",
        ],
      },
      {
        heading: "Pantalla Transflectiva",
        type: "list" as const,
        items: [
          "Legible con cualquier condición de luz, con luz directa del sol o fuentes muy intensas.",
        ],
      },
      {
        heading: "Alta Visibilidad",
        type: "list" as const,
        items: [
          "Garantía de visibilidad bajo luz solar directa en cualquier momento del día.",
        ],
      },
      {
        heading: "Amplio Ángulo de Visión",
        type: "list" as const,
        items: [
          "Mantiene la calidad de imagen desde cualquier ángulo de observación.",
        ],
      },
      {
        heading: "Gran Eficiencia",
        type: "list" as const,
        items: [
          "Preparada para quedar encendida 24x7 con máxima eficiencia energética.",
        ],
      },
      {
        heading: "Larga Vida Útil",
        type: "list" as const,
        items: [
          "Diseñada para funcionar continuamente durante años sin degradación de calidad.",
        ],
      },
      {
        heading: "Haga brillar su negocio",
        type: "list" as const,
        items: [
          "Deslumbre a sus clientes con la gran calidad visual de las pantallas de Alto Brillo. Estos displays digitales tienen un brillo de 2.500 nits y una razón de contraste 5.000:1 para garantizar la mejor visibilidad en cualquier entorno.",
          "Brillo de 2.500 nits✔Razón de contraste 5.000:1✔Mejor visibilidad en cualquier entorno✔Calidad visual excepcional",
        ],
      },
      {
        heading: "Calidad óptima y eficiencia en costes",
        type: "list" as const,
        items: [
          "Las pantallas de Alto Brillo garantizan un brillo inmejorable sin que ello repercuta en un mayor consumo, ya que tienen un sensor de brillo automático que optimiza su funcionamiento.",
          "Personalice el brillo que desee, en un rango entre 350 y 2.500 nits, y alargará la vida de su pantalla.",
          "Sensor de brillo automático✔Rango de brillo: 350 - 2.500 nits✔Optimización automática del consumo✔Mayor vida útil de la pantalla",
        ],
      },
      {
        heading: "Rendimiento continuo en cualquier entorno",
        type: "list" as const,
        items: [
          "Reproduzca ininterrumpidamente los contenidos que desee, incluso en exteriores y con luz directa. Los monitores de Alto Brillo de Samsung garantizan un rendimiento las 24 horas al día, todos los días.",
          "Estas pantallas han superado los test más exigentes con un panel que resiste temperaturas de hasta 110 ºC.",
          "Funcionamiento 24/7✔Resistencia a temperaturas hasta 110°C✔Test de resistencia superados✔Rendimiento en exteriores",
        ],
      },
      {
        heading: "Fomenta una presentación brillante para todos",
        type: "list" as const,
        items: [
          "Con un brillo de 2,500 nits y una proporción de contraste alta de 5,000:1, las pantallas permanecen brillantes y claras y ofrecen una imagen inigualable que atraerá la atención de posibles clientes, incluso bajo la luz directa del sol.",
          "Brillo de 2,500 nits✔Proporción de contraste 5,000:1✔Imagen inigualable✔Atrae la atención de clientes",
        ],
      },
      {
        heading: "Pantallas resistentes a todo tipo de clima",
        type: "list" as const,
        items: [
          "\"Las pantallas Samsung no solo brindan una imagen clara y nítida, sino que están diseñadas para mantener una calidad de imagen superior aun cuando queda expuesta a la luz solar directa. Son compatibles con cualquier diseño de ventana y pueden complementar el estilo de cualquier marca\".",
          "Resistencia a todo tipo de clima✔Calidad superior bajo luz solar directa✔Compatible con cualquier diseño✔Complementa el estilo de cualquier marca",
        ],
      },
      {
        heading: "Promociona contenido en la vidriera de cualquier tienda",
        type: "list" as const,
        items: [
          "El monitor Samsung fue diseñado con la mente en la pantalla de la vidriera de una tienda. Proyecta imágenes claras y brillantes que atraen y atrapan a las audiencias, lo que aumenta la probabilidad de que el público visite la tienda.",
          "Diseñado específicamente para vidrieras✔Imágenes claras y brillantes✔Atrae y atrapa audiencias✔Aumenta visitas a la tienda",
        ],
      },
      {
        heading: "Rendimiento duradero",
        type: "list" as const,
        items: [
          "Con la protección antipolvo validada por IP5X y un proceso propio de 3 pasos para evitar daños por sobrecalentamiento, las pantallas Samsung soportan la prueba del paso del tiempo.",
          "Protección antipolvo IP5X✔Proceso de 3 pasos anti-sobrecalentamiento✔Durabilidad comprobada✔Resistencia al paso del tiempo",
        ],
      },
    ],
  },
  {
    slug: "videowalls-samsung",
    title: "Videowalls",
    description: "Nueva y poderosa forma de impactar a la audiencia. Contenido de alto impacto en gran escala",
    category: "pantallas",
    images: ["/products/videowalls-samsung/01.png", "/products/videowalls-samsung/02.png", "/products/videowalls-samsung/03.jpg", "/products/videowalls-samsung/04.jpg", "/products/videowalls-samsung/05.png", "/products/videowalls-samsung/06.jpg", "/products/videowalls-samsung/07.jpg", "/products/videowalls-samsung/08.png", "/products/videowalls-samsung/09.png", "/products/videowalls-samsung/10.png", "/products/videowalls-samsung/11.png", "/products/videowalls-samsung/12.png", "/products/videowalls-samsung/13.png", "/products/videowalls-samsung/14.png", "/products/videowalls-samsung/15.png"],
    features: [

    ],
    sections: [
      {
        heading: "Serie de pantallas instaladas en forma conjunta",
        type: "list" as const,
        items: [
          "Los equipos de VIDEOWALL vienen en 46″ y 55″. Principalmente se utilizan para conectar varias pantallas juntas y formar una imagen de gran tamaño.",
          "Marcos ultradelgados (3.5mm/1.7mm/0.8mm)✔Poseen entre 500 y 700 nits de brillo✔Resolución Full HD, escalable a 4K UHD✔Imágenes más limpias y menos distractivas✔Tiempo de Operación: 16/24hs (según modelo)✔Garantía: 3 años",
        ],
      },
      {
        heading: "Marcos Ultradelgados",
        type: "list" as const,
        items: [
          "Diseño de bisel (marco) extremadamente estrecho maximiza la visibilidad incluso a distancias cortas.",
        ],
      },
      {
        heading: "Paneles Antideslumbrantes",
        type: "list" as const,
        items: [
          "Paneles antideslumbrantes que brindan imágenes claras con iluminación ambiental.",
        ],
      },
      {
        heading: "Diseño Compacto",
        type: "list" as const,
        items: [
          "Diseño compacto que permite una cómoda conexión en cadena sin necesidad de equipos externos.",
        ],
      },
      {
        heading: "Calibración Avanzada",
        type: "list" as const,
        items: [
          "Ajuste y calibración de fábrica avanzados que muestran el contenido con una uniformidad casi perfecta.",
        ],
      },
      {
        heading: "Cautiva audiencias a través de un bezel ultradelgado: hasta 0.8 mm",
        type: "list" as const,
        items: [
          "Los marcos ultradelgados de los videowalls Samsung crean una experiencia visual inmersiva sin interrupciones, permitiendo que el contenido fluya de manera natural entre pantallas.",
          "Bezel de hasta 0.8mm✔Experiencia visual inmersiva✔Contenido fluido entre pantallas✔Máxima visibilidad",
        ],
      },
      {
        heading: "Diseño esbelto adaptable: profundidad delgada",
        type: "list" as const,
        items: [
          "El diseño compacto de los videowalls Samsung permite una instalación elegante y profesional, adaptándose perfectamente a cualquier espacio sin ocupar exceso de profundidad.",
          "Profundidad delgada✔Instalación elegante✔Adaptable a cualquier espacio✔Diseño profesional",
        ],
      },
      {
        heading: "Mira el contenido desde cualquier ángulo",
        type: "list" as const,
        items: [
          "Los videowalls Samsung ofrecen un amplio ángulo de visión que garantiza una experiencia visual óptima desde cualquier posición, asegurando que todos los espectadores disfruten del contenido con la misma calidad.",
          "Amplio ángulo de visión✔Experiencia visual óptima✔Calidad consistente desde cualquier posición✔Ideal para audiencias grandes",
        ],
      },
      {
        heading: "Imágenes vibrantes con cualquier tipo de luz ambiente",
        type: "list" as const,
        items: [
          "La tecnología avanzada de los videowalls Samsung garantiza imágenes vibrantes y nítidas independientemente de las condiciones de iluminación, con mejoras de imagen y ecualizador de negros para una calidad visual excepcional.",
          "Imágenes vibrantes en cualquier luz✔Mejora de imagen avanzada✔Ecualizador de negros✔Calidad visual excepcional",
        ],
      },
      {
        heading: "Conveniente calibración móvil",
        type: "list" as const,
        items: [
          "La calibración móvil de los videowalls Samsung permite ajustes precisos y rápidos desde cualquier dispositivo, facilitando el mantenimiento y la optimización del rendimiento visual en tiempo real.",
          "Calibración desde dispositivos móviles✔Ajustes precisos y rápidos✔Mantenimiento simplificado✔Optimización en tiempo real",
        ],
      },
      {
        heading: "Showroom y eventos",
        type: "list" as const,
        items: [
          "Perfectos para exhibir productos y crear experiencias inmersivas en eventos y showrooms.",
        ],
      },
      {
        heading: "Auditorios",
        type: "list" as const,
        items: [
          "Ideal para presentaciones corporativas, conferencias y eventos de gran escala.",
        ],
      },
      {
        heading: "Lobby",
        type: "list" as const,
        items: [
          "Crear una impresión impactante en recepciones y áreas de espera corporativas.",
        ],
      },
      {
        heading: "Salas de reunión",
        type: "list" as const,
        items: [
          "Mejora la colaboración y presentaciones en espacios de trabajo corporativos.",
        ],
      },
      {
        heading: "Salas de control",
        type: "list" as const,
        items: [
          "Monitoreo centralizado y visualización de datos en tiempo real.",
        ],
      },
      {
        heading: "Museos",
        type: "list" as const,
        items: [
          "Exhibiciones interactivas y contenido educativo de alta calidad visual.",
        ],
      },
      {
        heading: "Transporte",
        type: "list" as const,
        items: [
          "Información en tiempo real y entretenimiento en estaciones y aeropuertos.",
        ],
      },
      {
        heading: "Retail",
        type: "list" as const,
        items: [
          "Atrae clientes y promociona productos con displays impactantes en tiendas.",
        ],
      },
    ],
  },
  {
    slug: "flip",
    title: "Pizarras Táctiles Interactivas",
    description: "Samsung Flip 2 WM55R-W: Pizarra digital interactiva con resolución de imagen UHD y control táctil mejorado",
    category: "pizarras",
    images: ["/products/flip/01.jpg", "/products/flip/02.jpg", "/products/flip/03.jpg", "/products/flip/04.jpg", "/products/flip/05.jpg", "/products/flip/06.jpg", "/products/flip/07.jpg", "/products/flip/08.jpg"],
    features: [

    ],
    sections: [
      {
        heading: "Samsung Flip 2",
        type: "list" as const,
        items: [
          "Samsung Flip 2 es una pantalla táctil interactiva que mejora cualquier sala de reuniones, sala de conferencias e incluso seminario u aula, haciendo la participación aún más fácil.",
          "La innovadora pantalla, al igual que el popular modelo de la primera generación de Samsung Flip, no sólo impresiona por su elegante diseño, sino que también incorpora funciones que ahora son adecuadas para todos los entornos de trabajo y aprendizaje.",
          "Conectividad inalámbrica mejorada✔Compatibilidad con servicios de Microsoft✔Navegador web integrado✔Función de tomar notas en tiempo real",
        ],
      },
      {
        heading: "Modo de pincel creativo - Pinta con un pincel de verdad",
        type: "list" as const,
        items: [
          "Samsung Flip 2 te permite pintar con un pincel de verdad. Cualquier pincel puede ser usado para creaciones artísticas impresionantes. Además de una gran paleta de colores, también hay dos estilos de pintura creativa: Pintura al óleo y acuarela.",
          "Los colores, que no sólo se encuentran entre sí como en una superficie de pintura real, sino que también pueden mezclarse entre sí, proporcionan la verdadera sensación de pintura.",
          "Pinceles reales para pintar✔Dos estilos: óleo y acuarela✔Mezcla de colores realista✔Herramienta perfecta para creativos",
        ],
      },
      {
        heading: "Modo pincel",
        type: "list" as const,
        items: [
          "Pintura con pincel real para creaciones artísticas impresionantes.",
        ],
      },
      {
        heading: "Navegador web integrado",
        type: "list" as const,
        items: [
          "Acceso fácil a todo el contenido de la web directamente desde la pantalla.",
        ],
      },
      {
        heading: "Compatibilidad Microsoft",
        type: "list" as const,
        items: [
          "Servicios de Microsoft y Office365 completamente integrados.",
        ],
      },
      {
        heading: "Anotación en tiempo real",
        type: "list" as const,
        items: [
          "Comentar y etiquetar cualquier contenido en tiempo real.",
        ],
      },
      {
        heading: "Operación táctil mejorada",
        type: "list" as const,
        items: [
          "Tecnología táctil InGlass para funcionamiento preciso.",
        ],
      },
      {
        heading: "Soporte multi-usuario",
        type: "list" as const,
        items: [
          "Hasta cuatro usuarios simultáneamente con soporte táctil.",
        ],
      },
      {
        heading: "Compartir pantalla",
        type: "list" as const,
        items: [
          "A través de WiFi o HDMI para máxima flexibilidad.",
        ],
      },
      {
        heading: "PC remoto",
        type: "list" as const,
        items: [
          "Control remoto desde cualquier ubicación.",
        ],
      },
      {
        heading: "Espejo de pantalla",
        type: "list" as const,
        items: [
          "Dispositivos Android y PCs/notebooks con Windows.",
        ],
      },
      {
        heading: "Tecnología táctil InGlass - funcionamiento preciso mediante el tacto",
        type: "list" as const,
        items: [
          "La tecnología táctil InGlass utilizada en el Samsung Flip 2 cumple con los más altos estándares de las modernas pantallas táctiles interactivas.",
          "Permite un funcionamiento preciso de la pantalla mediante el tacto del dedo, así como con el Samsung Flip Pen (bolígrafo) incluido.",
          "Tecnología InGlass de última generación✔Funcionamiento preciso con dedos✔Samsung Flip Pen incluido✔Estándares más altos de precisión",
        ],
      },
      {
        heading: "Función de nota - comentar y etiquetar el contenido en tiempo real",
        type: "list" as const,
        items: [
          "Samsung Flip 2 ofrece una práctica herramienta con la función de nota para poder etiquetar o comentar cualquier contenido en tiempo real en cualquier momento.",
          "Las imágenes, los gráficos y otros documentos pueden ser fácilmente anotados sin cambiar permanentemente el contenido real. Una maravillosa herramienta para reuniones productivas y procesos de generación de ideas.",
          "Anotación en tiempo real✔Etiquetado de contenido✔Sin modificar contenido original✔Ideal para reuniones productivas",
        ],
      },
      {
        heading: "Edición de imágenes simple e intuitiva - ensamblar creativamente el contenido",
        type: "list" as const,
        items: [
          "Con el Samsung Flip 2, el contenido puede ser seleccionado rápidamente, modificado y ensamblado rápidamente en nuevas composiciones creativas.",
          "No sólo es rápido y fácil, sino que también estimula el proceso creativo e invita a la experimentación.",
          "Selección rápida de contenido✔Modificación intuitiva✔Composiciones creativas✔Estimula la creatividad",
        ],
      },
      {
        heading: "Numerosas plantillas de formularios - plantillas para cada tarea",
        type: "list" as const,
        items: [
          "El equipo estándar del software Samsung Flip también incluye numerosas plantillas para diversas tareas.",
          "Puedes usar el Samsung Flip 2 específicamente como calendario, herramienta de planificación, tablero de notas o incluso como tablero de listas de control. Hay una plantilla adecuada para cada tarea.",
          "Plantillas para calendarios✔Herramientas de planificación✔Tableros de notas✔Listas de control",
        ],
      },
      {
        heading: "Compartir fácilmente cualquier contenido - a través de WLAN o HDMI",
        type: "list" as const,
        items: [
          "El contenido que se muestra en el Samsung Flip 2 se puede transferir fácilmente a otra pantalla habilitada para WLAN a través de la red WLAN disponible.",
          "Alternativamente, la salida HDMI del Samsung Flip 2 puede ser usada para este propósito. Esto trae aún más libertad a cualquier reunión o sesión de lluvia de ideas creativas.",
          "Transferencia por WLAN✔Conexión HDMI✔Máxima flexibilidad✔Ideal para colaboración",
        ],
      },
      {
        heading: "FLIP 2 – Bandeja de conectividad",
        type: "list" as const,
        items: [
          "La bandeja de conectividad para Samsung Flip 2 proporciona una solución elegante y organizada para conectar dispositivos externos, facilitando la integración con laptops, tablets y otros equipos de trabajo.",
          "Conexión organizada de dispositivos✔Integración con laptops y tablets✔Diseño elegante y funcional",
        ],
      },
      {
        heading: "FLIP 2 – Stand giratorio para 55''",
        type: "list" as const,
        items: [
          "El stand giratorio para Samsung Flip 2 de 55 pulgadas ofrece máxima flexibilidad de posicionamiento, permitiendo rotar la pantalla para adaptarse a diferentes configuraciones de sala y necesidades de presentación.",
          "Rotación completa de la pantalla✔Máxima flexibilidad de posicionamiento✔Adaptable a diferentes configuraciones",
        ],
      },
      {
        heading: "Conclusión - Pizarra digital que acelera los procesos creativos en los entornos laborales modernos",
        type: "list" as const,
        items: [
          "El Samsung Flip 2 combina el probado, muy alabado e increíblemente fácil manejo con diversas características prácticas, que han sido adaptadas en el más alto grado a los requisitos de los modernos entornos de trabajo y aprendizaje.",
          "Ya sea en salas de reuniones, salas de seminarios o incluso en aulas, el Samsung Flip 2 encaja perfectamente en cada sala y en cada situación de aplicación.",
        ],
      },
    ],
  },
  {
    slug: "pizarra-android-eboard-wad",
    title: "Pizarra Interactiva Android",
    description: "E-Board WAD - Posibilidades de aprendizaje ilimitadas",
    category: "pizarras",
    images: ["/products/pizarra-android-eboard-wad/01.jpeg", "/products/pizarra-android-eboard-wad/02.jpeg", "/products/pizarra-android-eboard-wad/03.jpeg", "/products/pizarra-android-eboard-wad/04.jpeg", "/products/pizarra-android-eboard-wad/05.avif", "/products/pizarra-android-eboard-wad/06.jpeg", "/products/pizarra-android-eboard-wad/07.png", "/products/pizarra-android-eboard-wad/08.avif", "/products/pizarra-android-eboard-wad/09.jpeg", "/products/pizarra-android-eboard-wad/10.avif", "/products/pizarra-android-eboard-wad/11.avif", "/products/pizarra-android-eboard-wad/12.webp", "/products/pizarra-android-eboard-wad/13.avif"],
    features: [
      "Tamaño diagonal: 65\" / 75\" / 86\"",
      "Tipo de panel: ADS",
      "Resolución: 3,840 x 2,160 px",
      "Pixel Pitch (HxV): 372(H) x 372(V)",
      "Brillo (Typ): 400 nits",
      "Ratio de contraste: 1,200:1",
      "Ángulo de visión (HxV): 178 / 178",
      "Tiempo de respuesta: 8 ms",
      "Gama de colores: 72%",
      "Opacidad del vidrio: 25%",
      "Frecuencia de escaneo H: 135 kHz",
      "Frecuencia máxima de píxel: 78 MHz",
      "Frecuencia de escaneo V: 60Hz",
      "Tiempo de operación: 12/7",
      "Entrada HDMI: 3",
      "Version of HDMI: 2",
      "Version of HDCP: 2.1",
      "USB: 5 (2.0 X1, 3.0X4)",
      "Entrada IR: Si",
      "Entrada de Audio: Stereo Mini Jack",
      "Salida de Audio: Stereo Mini Jack",
      "Salida de video: Si",
      "Entrada RS232: Si",
      "Salida RS232: Si",
    ],
    sections: [
      {
        heading: "Posibilidades de aprendizaje ilimitadas",
        type: "list" as const,
        items: [
          "Presentamos la serie Interactive Display WAD, para experiencias educativas interesantes. Basado en el sistema operativo Android, brinda una experiencia de usuario familiar e intuitiva.",
          "Descargue aplicaciones a través de Google Play y use aplicaciones preinstaladas como YouTube y Chrome para mantenerse productivo y abrir una nueva era de educación.",
          "Sistema operativo Android✔Experiencia de usuario familiar✔Acceso a Google Play✔Aplicaciones preinstaladas",
        ],
      },
      {
        heading: "Desarrollado por Android™",
        type: "list" as const,
        items: [
          "La serie WAD ofrece familiaridad a sus usuarios. Es compatible con otros dispositivos Android y proporciona una variedad de widgets y una pantalla de inicio fácilmente personalizable.",
          "Estas características crean más flexibilidad a la hora de crear un entorno que se adapte a diversas necesidades de aprendizaje.",
          "Compatibilidad con dispositivos Android✔Widgets personalizables✔Pantalla de inicio personalizable✔Flexibilidad para diferentes necesidades",
        ],
      },
      {
        heading: "Certificación EDLA",
        type: "list" as const,
        items: [
          "Con una certificación EDLA, la serie WAD es compatible con una variedad de servicios de Google como Google Play y YouTube.",
          "Este acceso a las principales aplicaciones educativas como GoogleClassroom conduce a aumentar la eficiencia y mejorar la comunicación con los estudiantes.",
          "Certificación EDLA✔Acceso a Google Play✔Integración con YouTube✔GoogleClassroom compatible",
        ],
      },
      {
        heading: "Fácil Multitarea",
        type: "list" as const,
        items: [
          "Varios modos de pantalla, incluida la pantalla dividida y la ventana múltiple, permiten a los profesores mostrar fácilmente información y realizar múltiples tareas al mismo tiempo en la serie WAD.",
          "Esta flexibilidad proporciona un acceso conveniente a todas las pantallas necesarias para crear entornos de aprendizaje atractivos.",
          "Pantalla dividida✔Ventana múltiple✔Multitarea simultánea✔Entornos de aprendizaje atractivos",
        ],
      },
      {
        heading: "Poderoso uso compartido de pantalla",
        type: "list" as const,
        items: [
          "La serie WAD admite la duplicación de pantalla para hasta nueve dispositivos, lo que aumenta la participación de los estudiantes.",
          "Esta característica garantiza que todos los estudiantes estén incluidos y participen, ya que el contenido se puede compartir tanto en la pantalla grande como en dispositivos individuales. Se puede utilizar en iOS, Mac, Windows, Android o Chrome OS.",
          "Hasta 9 dispositivos simultáneos✔Mayor participación estudiantil✔Compatibilidad multiplataforma✔iOS, Mac, Windows, Android, Chrome OS",
        ],
      },
      {
        heading: "Salida HDMI",
        type: "list" as const,
        items: [
          "Con la función HDMI Out, el contenido de la pantalla de la pizarra se puede compartir en un pantalla diferente y más grande en el aula.",
          "Esta característica garantiza que los profesores puedan ofrecer una experiencia interactiva en tiempo real a los estudiantes.",
          "Función HDMI Out✔Compartir en pantallas más grandes✔Experiencia interactiva en tiempo real✔Ideal para clases grandes",
        ],
      },
      {
        heading: "Toque multipunto",
        type: "list" as const,
        items: [
          "Varios usuarios pueden escribir en la pizarra al mismo tiempo con las capacidades multitáctiles avanzadas de la pantalla.",
          "Son posibles hasta 40 puntos táctiles simultáneos, lo que permite que grandes grupos de estudiantes y profesores colaboren y aprendan juntos de una manera divertida y natural.",
          "Hasta 40 puntos táctiles simultáneos✔Múltiples usuarios simultáneos✔Colaboración en tiempo real✔Experiencia natural y divertida",
        ],
      },
      {
        heading: "Puerto USB-C 3 en 1",
        type: "list" as const,
        items: [
          "La conectividad se mejora con el puerto USB-C 3 en 1, que permite duplicar pantalla, control táctil y carga de dispositivos externos (máx. 65W).",
          "Los profesores pueden simplemente conectarse al puerto USB tipo C, lo que les permite impartir lecciones interactivas y atractivas sin ningún problema.",
          "Puerto USB-C 3 en 1✔Duplicación de pantalla✔Control táctil✔Carga de dispositivos (máx. 65W)",
        ],
      },
      {
        heading: "Durabilidad superior",
        type: "list" as const,
        items: [
          "La serie WAD protege contra sobretensiones eléctricas mediante el uso de un fusible cerámico y un condensador de 500 V (CC) que absorbe picos instantáneos de voltaje.",
          "También es una herramienta valiosa para escuelas en climas lluviosos o de alta humedad con pegamento antihumedad aplicado en las áreas críticas del chipset.",
          "Protección contra sobretensiones✔Fusible cerámico✔Condensador de 500V (CC)✔Pegamento antihumedad",
        ],
      },
      {
        heading: "Display",
        type: "list" as const,
        items: [
          "Tamaño diagonal: 65\" / 75\" / 86\"",
          "Tipo de panel: ADS",
          "Resolución: 3,840 x 2,160 px",
          "Pixel Pitch (HxV): 372(H) x 372(V)",
          "Brillo (Typ): 400 nits",
          "Ratio de contraste: 1,200:1",
          "Ángulo de visión (HxV): 178 / 178",
          "Tiempo de respuesta: 8 ms",
          "Gama de colores: 72%",
          "Opacidad del vidrio: 25%",
          "Frecuencia de escaneo H: 135 kHz",
          "Frecuencia máxima de píxel: 78 MHz",
          "Frecuencia de escaneo V: 60Hz",
          "Tiempo de operación: 12/7",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "Entrada HDMI: 3",
          "Version of HDMI: 2",
          "Version of HDCP: 2.1",
          "USB: 5 (2.0 X1, 3.0X4)",
          "Entrada IR: Si",
          "Entrada de Audio: Stereo Mini Jack",
          "Salida de Audio: Stereo Mini Jack",
          "Salida de video: Si",
          "Entrada RS232: Si",
          "Salida RS232: Si",
          "Entrada RJ45: Si",
          "Salida RJ45: Si",
          "WiFi: Si",
          "Bluetooth: Si",
        ],
      },
      {
        heading: "Alimentación",
        type: "list" as const,
        items: [
          "Suministro de energía: AC100-240V 50/60Hz",
          "Consumo (modo encendido): 385W",
          "Consumo (modo sleep): 0.5 W",
        ],
      },
      {
        heading: "Dimensiones",
        type: "list" as const,
        items: [
          "Dimensiones del equipo (Ancho x Alto x Profundidad): 1488 x 897 x 88 mm",
          "Dimensiones del empaque (Ancho x Alto x Profundidad): 1628 x 1024 x 208 mm",
        ],
      },
      {
        heading: "Peso",
        type: "list" as const,
        items: [
          "Peso del equipo: 33.9 kg",
          "Peso del paquete: 42.9 kg",
        ],
      },
      {
        heading: "Condiciones operativas",
        type: "list" as const,
        items: [
          "Temperatura: 0℃~40℃",
          "Humedad: 10 ~ 90%",
        ],
      },
      {
        heading: "Especificaciones mecánicas",
        type: "list" as const,
        items: [
          "Montaje VESA: 600 x 400 mm",
          "Ancho de marco: 16.4mm(U), 16.4mm(L/R), 44.9mm(B)",
          "Color del Bezel: Gris espacial",
          "Material de marco: no brillante",
        ],
      },
      {
        heading: "SoC",
        type: "list" as const,
        items: [
          "OS Version: Android-13",
          "Flash Memory Size: 64GB",
        ],
      },
      {
        heading: "Táctil",
        type: "list" as const,
        items: [
          "Tecnología táctil: IR (infrarrojo)",
          "Puntos táctiles: Hasta 40 simultáneos",
        ],
      },
    ],
  },
  {
    slug: "pantallas-touch",
    title: "Monitor Profesional Táctil",
    description: "Los monitores profesionales táctiles Samsung QM43B-T y QMB55-T ofrecen una experiencia interactiva de alta calidad diseñada para entornos comerciales y educativos.",
    category: "pizarras",
    images: ["/products/pantallas-touch/01.jpg", "/products/pantallas-touch/02.webp", "/products/pantallas-touch/03.webp", "/products/pantallas-touch/04.jpeg", "/products/pantallas-touch/05.webp"],
    features: [
      "Tamaño diagonal: 43\" / 55\"",
      "Tipo de panel: New Edge, 60Hz",
      "Resolución: 3,840 x 2,160 (4K UHD)",
      "Pixel Pitch (HxV): 0.105 x 0.315 (mm)",
      "Brillo (Típico): 500 nits",
      "Ratio de contraste: 1200:1",
      "Horas de operación: 24/7",
      "Ángulo de visión (HxV): 178/178",
      "Gama de colores: 92% (DCI-P3, CIE 1976)",
      "Tecnología táctil: Capacitiva",
      "Puntos táctiles: Múltiples",
      "Precisión: Alta precisión",
      "Respuesta: Instantánea",
      "Gestión: Gestos naturales",
      "Durabilidad: Resistente al uso intensivo",
      "Diseño: Profesional",
      "Montaje: VESA compatible",
      "Conectividad: Múltiples opciones",
      "Certificaciones: Estándares comerciales",
      "Garantía: Extendida",
      "Soporte: Técnico especializado",
    ],
    sections: [
      {
        heading: "Monitores Profesionales Táctiles Samsung",
        type: "list" as const,
        items: [
          "Los monitores profesionales táctiles Samsung QM43B-T y QMB55-T ofrecen una experiencia interactiva de alta calidad diseñada para entornos comerciales y educativos.",
          "Con tecnología táctil capacitiva y resolución 4K UHD, estos monitores proporcionan una interfaz intuitiva y visualmente impresionante para cualquier aplicación profesional.",
          "Tecnología táctil capacitiva✔Resolución 4K UHD✔Operación 24/7✔Diseño profesional",
        ],
      },
      {
        heading: "Resolución 4K UHD",
        type: "list" as const,
        items: [
          "Resolución de 3,840 x 2,160 píxeles para una experiencia visual excepcional con detalles nítidos y colores vibrantes.",
        ],
      },
      {
        heading: "Tecnología Táctil Capacitiva",
        type: "list" as const,
        items: [
          "Interfaz táctil responsiva y precisa que permite interacción natural con gestos y comandos intuitivos.",
        ],
      },
      {
        heading: "Operación 24/7",
        type: "list" as const,
        items: [
          "Diseñado para funcionamiento continuo las 24 horas del día, ideal para aplicaciones comerciales y educativas.",
        ],
      },
      {
        heading: "Alto Brillo",
        type: "list" as const,
        items: [
          "Brillo típico de 500 nits que garantiza visibilidad óptima incluso en entornos con mucha iluminación.",
        ],
      },
      {
        heading: "Amplio Ángulo de Visión",
        type: "list" as const,
        items: [
          "Ángulo de visión de 178° tanto horizontal como vertical para una experiencia visual consistente desde cualquier posición.",
        ],
      },
      {
        heading: "Gama de Colores Extendida",
        type: "list" as const,
        items: [
          "92% de cobertura DCI-P3 para colores más ricos y precisos, ideal para aplicaciones profesionales.",
        ],
      },
      {
        heading: "Tecnología Avanzada",
        type: "list" as const,
        items: [
          "Los monitores Samsung QM43B-T y QMB55-T incorporan la última tecnología en paneles New Edge con frecuencia de 60Hz, proporcionando una experiencia visual fluida y responsiva.",
          "La tecnología táctil capacitiva permite interacciones precisas y naturales, mientras que el alto contraste de 1200:1 asegura imágenes nítidas y detalladas.",
          "Panel New Edge 60Hz✔Contraste 1200:1✔Pixel Pitch optimizado✔Tecnología Samsung",
        ],
      },
      {
        heading: "Oficinas Corporativas",
        type: "list" as const,
        items: [
          "Ideal para salas de reuniones, presentaciones y espacios de colaboración empresarial.",
        ],
      },
      {
        heading: "Instituciones Educativas",
        type: "list" as const,
        items: [
          "Perfecto para aulas interactivas, laboratorios y centros de aprendizaje modernos.",
        ],
      },
      {
        heading: "Retail y Comercio",
        type: "list" as const,
        items: [
          "Excelente para puntos de venta interactivos, quioscos y exhibiciones comerciales.",
        ],
      },
      {
        heading: "Sector Salud",
        type: "list" as const,
        items: [
          "Adecuado para consultorios médicos, salas de espera y sistemas de información hospitalaria.",
        ],
      },
      {
        heading: "Construido para ser confiable y eficiente",
        type: "list" as const,
        items: [
          "Los monitores profesionales táctiles Samsung están diseñados para ofrecer un rendimiento confiable y eficiente en entornos comerciales exigentes.",
          "Con operación 24/7 y tecnología avanzada, estos monitores garantizan una experiencia consistente y duradera para todas sus aplicaciones profesionales.",
          "Diseño robusto y duradero✔Rendimiento consistente✔Eficiencia energética✔Fácil mantenimiento",
        ],
      },
      {
        heading: "Display",
        type: "list" as const,
        items: [
          "Tamaño diagonal: 43\" / 55\"",
          "Tipo de panel: New Edge, 60Hz",
          "Resolución: 3,840 x 2,160 (4K UHD)",
          "Pixel Pitch (HxV): 0.105 x 0.315 (mm)",
          "Brillo (Típico): 500 nits",
          "Ratio de contraste: 1200:1",
          "Horas de operación: 24/7",
          "Ángulo de visión (HxV): 178/178",
          "Gama de colores: 92% (DCI-P3, CIE 1976)",
        ],
      },
      {
        heading: "Tecnología Táctil",
        type: "list" as const,
        items: [
          "Tecnología táctil: Capacitiva",
          "Puntos táctiles: Múltiples",
          "Precisión: Alta precisión",
          "Respuesta: Instantánea",
          "Gestión: Gestos naturales",
          "Durabilidad: Resistente al uso intensivo",
        ],
      },
      {
        heading: "Características Generales",
        type: "list" as const,
        items: [
          "Diseño: Profesional",
          "Montaje: VESA compatible",
          "Conectividad: Múltiples opciones",
          "Certificaciones: Estándares comerciales",
          "Garantía: Extendida",
          "Soporte: Técnico especializado",
        ],
      },
    ],
  },
  {
    slug: "pantalla-98-4k",
    title: "Pantalla de Gran Formato 98\" 4K",
    description: "Presentamos QE98C, la pantalla LCD de 98 pulgadas de gran tamaño que ofrece una perspectiva envolvente con el procesador Quantum 4K de Samsung.",
    category: "pizarras",
    images: ["/products/pantalla-98-4k/01.avif", "/products/pantalla-98-4k/02.avif", "/products/pantalla-98-4k/03.avif", "/products/pantalla-98-4k/04.avif", "/products/pantalla-98-4k/05.jpeg"],
    features: [
      "Tamaño diagonal: 98\"",
      "Tipo de panel: VA",
      "Resolución: 3,840 x 2,160 px",
      "Distancia entre píxeles (HxV): 0.5622 x 0.5622 (mm)",
      "Brightness (Typ): 450 nits",
      "Relación de contraste: 5000:1",
      "Ángulo de visión (H/V): 178/178",
      "Tiempo de respuesta: 8 ms",
      "Gama de colores: DCI 93% (típ.)",
      "Opacidad del vidrio: 2%",
      "Frecuencia de escaneo H: 30 ~ 81 kHz",
      "Frecuencia máxima de pixeles: 594 MHz",
      "Frecuencia de escaneo V: 48 ~ 75 Hz",
      "Contrast Ratio (Dynamic): Mega",
      "Tiempo de operación: 16/7",
      "HDMI In: 4",
      "Entrada DP: No",
      "Version of HDMI: 2",
      "Version of HDCP: 2.2",
      "USB: 2",
      "Entrada infrarroja: No",
      "Entrada de audio: No",
      "RS232 In: Sí",
      "RJ45 In: Sí",
    ],
    sections: [
      {
        heading: "Amplía tu potencial comercial",
        type: "list" as const,
        items: [
          "Presentamos QE98C, la pantalla LCD de 98 pulgadas de gran tamaño que ofrece una perspectiva envolvente con el procesador Quantum 4K de Samsung.",
          "Combinada con un diseño delgado, la QE98C es ideal para una variedad de entornos comerciales que mejoran el potencial.",
          "Pantalla de 98 pulgadas✔Procesador Quantum 4K✔Diseño delgado y elegante✔Ideal para entornos comerciales",
        ],
      },
      {
        heading: "Pantalla de gran tamaño",
        type: "list" as const,
        items: [
          "Descubre la gran experiencia de visualización de la QE98C a través de una pantalla de gran tamaño que atrae a los espectadores.",
          "La pantalla de 98 pulgadas incluye imágenes realistas y colores vibrantes que seguramente harán que tu contenido sea el punto focal de cualquier espacio.",
          "Experiencia de visualización envolvente✔Imágenes realistas y vibrantes✔Punto focal en cualquier espacio✔Atrae la atención de espectadores",
        ],
      },
      {
        heading: "Diseño delgado",
        type: "list" as const,
        items: [
          "La QE98C ofrece un diseño minimalista impresionante con su perfil delgado y aspecto elegante.",
          "Está diseñado para adaptarse a cualquier espacio de manera armoniosa y puede montarse perfectamente en una pared como si fuera una obra de arte.",
          "Diseño minimalista impresionante✔Perfil delgado y elegante✔Se adapta a cualquier espacio✔Montaje como obra de arte",
        ],
      },
      {
        heading: "Quantum Processor 4K",
        type: "list" as const,
        items: [
          "La tecnología de procesamiento de video líder en la industria de Samsung mejora cada contenido para mayor claridad y consistencia.",
          "La tecnología inteligente de ampliación de UHD, impulsada por el procesador Quantum 4K de Samsung, eleva el video de baja resolución a una calidad de nivel UHD, lo que proporciona una calidad de imagen profesional.",
          "Procesamiento de video líder✔Mayor claridad y consistencia✔Ampliación inteligente UHD✔Calidad de imagen profesional",
        ],
      },
      {
        heading: "Resolución 4K UHD",
        type: "list" as const,
        items: [
          "Resolución de 3,840 x 2,160 píxeles para una experiencia visual excepcional con detalles nítidos y colores vibrantes.",
        ],
      },
      {
        heading: "Procesador Quantum 4K",
        type: "list" as const,
        items: [
          "Tecnología de procesamiento de video líder que mejora cada contenido para mayor claridad y consistencia.",
        ],
      },
      {
        heading: "Diseño Delgado",
        type: "list" as const,
        items: [
          "Perfil delgado y elegante que se adapta perfectamente a cualquier espacio como una obra de arte.",
        ],
      },
      {
        heading: "Alto Contraste",
        type: "list" as const,
        items: [
          "Relación de contraste de 5000:1 para imágenes nítidas y detalladas con colores profundos.",
        ],
      },
      {
        heading: "Gama de Colores Extendida",
        type: "list" as const,
        items: [
          "93% de cobertura DCI para colores más ricos y precisos, ideal para aplicaciones profesionales.",
        ],
      },
      {
        heading: "Operación 16/7",
        type: "list" as const,
        items: [
          "Diseñado para funcionamiento continuo las 16 horas del día, ideal para aplicaciones comerciales.",
        ],
      },
      {
        heading: "Pantalla",
        type: "list" as const,
        items: [
          "Tamaño diagonal: 98\"",
          "Tipo de panel: VA",
          "Resolución: 3,840 x 2,160 px",
          "Distancia entre píxeles (HxV): 0.5622 x 0.5622 (mm)",
          "Brightness (Typ): 450 nits",
          "Relación de contraste: 5000:1",
          "Ángulo de visión (H/V): 178/178",
          "Tiempo de respuesta: 8 ms",
          "Gama de colores: DCI 93% (típ.)",
          "Opacidad del vidrio: 2%",
          "Frecuencia de escaneo H: 30 ~ 81 kHz",
          "Frecuencia máxima de pixeles: 594 MHz",
          "Frecuencia de escaneo V: 48 ~ 75 Hz",
          "Contrast Ratio (Dynamic): Mega",
          "Tiempo de operación: 16/7",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "HDMI In: 4",
          "Entrada DP: No",
          "Version of HDMI: 2",
          "Version of HDCP: 2.2",
          "USB: 2",
          "Entrada infrarroja: No",
          "Entrada de audio: No",
          "RS232 In: Sí",
          "RJ45 In: Sí",
          "WiFi: Sí",
          "Bluetooth: Sí",
        ],
      },
      {
        heading: "Alimentación",
        type: "list" as const,
        items: [
          "Fuente de alimentación: AC100-240 V 50/60 Hz",
          "Consumo de energía (modo encendido): 275 W",
          "Consumo de energía (modo de reposo): 0.5 W",
        ],
      },
      {
        heading: "Dimensiones",
        type: "list" as const,
        items: [
          "Dimensiones del equipo (ancho x alto x prof.): 2180.6 x 1243.9 x 48.4 mm",
          "Dimensiones del paquete (ancho x alto x prof.): 2379 x 1431 x 350 mm",
        ],
      },
      {
        heading: "Peso",
        type: "list" as const,
        items: [
          "Peso del equipo: 56.3 kg",
        ],
      },
      {
        heading: "Condiciones operativas",
        type: "list" as const,
        items: [
          "Temperatura: 0℃~ 40℃",
          "Humedad: 10 ~ 80%, sin condensación",
        ],
      },
      {
        heading: "Especificaciones mecánicas",
        type: "list" as const,
        items: [
          "Montaje VESA: 600 x 400 mm",
          "Ancho del bisel: Tres sin bisel",
          "Bezel Color: TITAN BLACK",
          "Material del marco: No brillante",
        ],
      },
      {
        heading: "SoC",
        type: "list" as const,
        items: [
          "OS Version: Tizen 6.5",
          "Flash Memory Size: 8GB",
        ],
      },
    ],
  },
  {
    slug: "pantalla-105-5k",
    title: "Pantalla de Gran Formato 105\" 5K",
    description: "QPDX-5K - Ampliá tu negocio con una pantalla supergrande",
    category: "pizarras",
    images: ["/products/pantalla-105-5k/01.avif", "/products/pantalla-105-5k/02.jpg", "/products/pantalla-105-5k/03.avif", "/products/pantalla-105-5k/04.avif", "/products/pantalla-105-5k/05.avif", "/products/pantalla-105-5k/06.webp", "/products/pantalla-105-5k/07.avif", "/products/pantalla-105-5k/08.avif", "/products/pantalla-105-5k/09.webp", "/products/pantalla-105-5k/10.webp", "/products/pantalla-105-5k/11.jpeg", "/products/pantalla-105-5k/12.avif", "/products/pantalla-105-5k/13.jpg"],
    features: [
      "Tamaño diagonal: 105\"",
      "Tipo de panel: VA(Direct)",
      "Resolución: 5,120 x 2,160",
      "Pixel Pitch (HxV): 0.1595 x 0.4785 mm",
      "Brightness (Typ): 500 nits",
      "Ratio de contraste: 4,000:1",
      "Ángulo de visión (HxV): 178/178",
      "Tiempo de respuesta: 6 ms (Typ.)",
      "Gama de colores: 72%(NTSC)",
      "Opacidad del vidrio: 25%",
      "Frecuencia de escaneo H: 30~81kHz",
      "Frecuencia máxima de pixel: 742.5MHz",
      "Frecuencia de escaneo V: 48~75Hz",
      "Contrast Ratio (Dynamic): Mega",
      "Tiempo de operación: 24/7",
      "Entrada HDMI: 3",
      "Entrada DP: 1",
      "Version of HDMI: 2.1",
      "Version of DP: 1.4",
      "Version of HDCP: 2.2",
      "USB: Type-A(2), Type-C(1)",
      "Entrada IR: Si",
      "Salida de Audio: Stereo Mini Jack",
      "Entrada RS232: Si",
    ],
    sections: [
      {
        heading: "Ampliá tu negocio con una pantalla supergrande",
        type: "list" as const,
        items: [
          "Llevá tus reuniones al siguiente nivel con la pantalla supergrande de 105 pulgadas. Su pantalla expansiva y ultraancha elimina la necesidad de disponer de varias pantallas, ofreciendo una visión perfecta e ininterrumpida sin los molestos bordes entre pantallas.",
          "Pantalla de 105 pulgadas✔Resolución 5K ultraancha✔Visión perfecta e ininterrumpida✔Sin bordes entre pantallas",
        ],
      },
      {
        heading: "Pantalla Ultra Ancha 21:9",
        type: "list" as const,
        items: [
          "La relación de aspecto 21:9 de la QPDX-5K está diseñada para los modernos espacios de reuniones de hoy en día y optimizada para el diseño de videoconferencias.",
          "Tanto si los asistentes están en persona como a distancia, la pantalla garantiza la misma participación, proporcionando un entorno de reunión realmente envolvente que fomenta la colaboración.",
          "Relación de aspecto 21:9✔Optimizada para videoconferencias✔Participación igualitaria✔Entorno de reunión envolvente",
        ],
      },
      {
        heading: "Profundidad delgada",
        type: "list" as const,
        items: [
          "Eleva tu espacio de trabajo con un diseño elegante que maximiza el rendimiento y el espacio. Con sólo 48,1 mm de profundidad, esta pantalla de 105 pulgadas es la más delgada de su clase.",
          "Los puertos orientados hacia el exterior permiten un montaje fácil y empotrado en la pared, por lo que es ideal para salas de reuniones que requieren elegancia y eficiencia.",
          "Solo 48,1 mm de profundidad✔La más delgada de su clase✔Puertos orientados hacia el exterior✔Montaje fácil y empotrado",
        ],
      },
      {
        heading: "Bisel liso",
        type: "list" as const,
        items: [
          "Los biseles uniformes en los cuatro lados de la pantalla preservan la calidad visual y la precisión entre los modos horizontal y vertical.",
          "Biseles uniformes en cuatro lados✔Preserva la calidad visual✔Precisión en ambos modos✔Diseño consistente",
        ],
      },
      {
        heading: "Resolución 5K",
        type: "list" as const,
        items: [
          "Disfrutá de una colaboración mejorada con una resolución 5K ultranítida, que ofrece imágenes más nítidas y detalles más precisos.",
          "El amplio ángulo de visión garantiza que todos los participantes disfruten de imágenes claras y nítidas, para que nadie se pierda detalle, independientemente de su posición.",
          "Resolución 5K ultranítida✔Imágenes más nítidas y precisas✔Amplio ángulo de visión✔Visibilidad desde cualquier posición",
        ],
      },
      {
        heading: "Antirreflejos",
        type: "list" as const,
        items: [
          "Los fiables paneles antirreflejos proporcionan una mejor visibilidad desde todos los ángulos, a cualquier hora del día.",
          "La pantalla antirreflejos permite a las empresas ofrecer información precisa en los lugares críticos.",
          "Paneles antirreflejos fiables✔Mejor visibilidad desde todos los ángulos✔Funciona a cualquier hora del día✔Información precisa en lugares críticos",
        ],
      },
      {
        heading: "SMARTVIEW+",
        type: "list" as const,
        items: [
          "Disfrutá de la pantalla compartida inalámbrica para una colaboración sin fisuras. Comenzá a compartir desde el principio de una reunión y cambiá de pantalla con un solo clic.",
          "La QPDX-5K admite hasta 10 pantallas a la vez.",
          "Pantalla compartida inalámbrica✔Colaboración sin fisuras✔Cambio de pantalla con un clic✔Hasta 10 pantallas simultáneas",
        ],
      },
      {
        heading: "USB Type-C",
        type: "list" as const,
        items: [
          "La conectividad se mejora con un puerto USB-C, que permite a los usuarios reflejar pantallas y cargar dispositivos al mismo tiempo.",
          "Una única conexión a través del puerto USB Type-C garantiza unas comunicaciones fluidas, cautivadoras e interactivas.",
          "Puerto USB-C integrado✔Reflejar pantallas y cargar dispositivos✔Una única conexión✔Comunicaciones fluidas e interactivas",
        ],
      },
      {
        heading: "Modos profesionales",
        type: "list" as const,
        items: [
          "Los modos profesionales integrados abren nuevas posibilidades para sectores especializados. El modo Director minimiza el postprocesado para preservar la intención original del director.",
          "El modo Simulación DICOM permite a los equipos médicos simular imágenes como radiografías, cumpliendo los estándares DICOM de escala de grises completa.",
          "Modos profesionales integrados✔Modo Director para postproducción✔Modo Simulación DICOM✔Estándares médicos completos",
        ],
      },
      {
        heading: "Samsung VXT",
        type: "list" as const,
        items: [
          "Samsung VXT, basado en la nube, reúne las funciones de gestión de contenidos y gestión remota de dispositivos.",
          "Te permite gestionar de forma remota la configuración del hardware y solucionar problemas al tiempo que crea y despliega contenidos sin esfuerzo y sin necesidad de formación previa.",
          "Basado en la nube✔Gestión de contenidos y dispositivos✔Configuración remota del hardware✔Sin necesidad de formación previa",
        ],
      },
      {
        heading: "Display",
        type: "list" as const,
        items: [
          "Tamaño diagonal: 105\"",
          "Tipo de panel: VA(Direct)",
          "Resolución: 5,120 x 2,160",
          "Pixel Pitch (HxV): 0.1595 x 0.4785 mm",
          "Brightness (Typ): 500 nits",
          "Ratio de contraste: 4,000:1",
          "Ángulo de visión (HxV): 178/178",
          "Tiempo de respuesta: 6 ms (Typ.)",
          "Gama de colores: 72%(NTSC)",
          "Opacidad del vidrio: 25%",
          "Frecuencia de escaneo H: 30~81kHz",
          "Frecuencia máxima de pixel: 742.5MHz",
          "Frecuencia de escaneo V: 48~75Hz",
          "Contrast Ratio (Dynamic): Mega",
          "Tiempo de operación: 24/7",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "Entrada HDMI: 3",
          "Entrada DP: 1",
          "Version of HDMI: 2.1",
          "Version of DP: 1.4",
          "Version of HDCP: 2.2",
          "USB: Type-A(2), Type-C(1)",
          "Entrada IR: Si",
          "Salida de Audio: Stereo Mini Jack",
          "Entrada RS232: Si",
          "Salida RS232: Si",
          "Entrada RJ45: Si",
          "WiFi: Si",
          "Bluetooth: Si",
        ],
      },
      {
        heading: "Alimentación",
        type: "list" as const,
        items: [
          "Suministro de energía: AC100-240V 50/60Hz",
          "Consumo (modo encendido): 550 W",
          "Consumo (modo sleep): 0.5 W",
        ],
      },
      {
        heading: "Dimensiones",
        type: "list" as const,
        items: [
          "Dimensiones del equipo (Ancho x Alto x Profundidad): 2484.3 x 1068.0 x 48.1 mm",
          "Dimensiones del empaque (Ancho x Alto x Profundidad): 2668.0 x 1190.0 x 275.0 mm",
        ],
      },
      {
        heading: "Peso",
        type: "list" as const,
        items: [
          "Peso del equipo: 55.6 kg",
        ],
      },
      {
        heading: "Condiciones operativas",
        type: "list" as const,
        items: [
          "Temperatura: 0 - 40 ℃",
          "Humedad: 10 ~ 80%, non-condensing",
        ],
      },
      {
        heading: "Especificaciones mecánicas",
        type: "list" as const,
        items: [
          "Montaje VESA: 1000 x 400 mm",
          "Ancho de marco: 14.8mm (Even)",
          "Color del bísel: Negro mate",
          "Material de marco: Metal no brillante",
        ],
      },
      {
        heading: "SoC",
        type: "list" as const,
        items: [
          "OS Version: Tizen 8.0",
          "Flash Memory Size: 16GB",
        ],
      },
    ],
  },
  {
    slug: "pantallas-led",
    title: "Pantallas de LED",
    description: "Tecnología de visualización de alta calidad para interiores y exteriores",
    category: "led",
    images: ["/products/pantallas-led/01.jpg", "/products/pantallas-led/02.avif", "/products/pantallas-led/03.jpg", "/products/pantallas-led/04.webp", "/products/pantallas-led/05.webp"],
    features: [
      "Menor brillo",
      "Resolución más alta (1.5mm o 2.5mm)",
      "Eventos y conferencias",
      "Shoppings y estudios de TV",
      "Brillo regulable",
      "Mayor brillo",
      "Resistentes a clima (IP65+)",
      "Mayor pitch (5mm, 10mm)",
      "Cartelería publicitaria",
      "Recitales y eventos",
      "Se ven desde ambos lados",
      "Vidrieras de vidrio",
      "Fachadas transparentes",
      "Efecto visual único",
      "Integración arquitectónica",
      "Superficies curvas",
      "Diseños creativos",
      "Adaptable a formas",
      "Instalaciones artísticas",
      "Máxima versatilidad",
      "P1.5 - P2.5: Interior, alta resolución",
      "P3 - P4: Interior/Exterior, resolución media",
      "P5 - P10: Exterior, gran distancia",
      "P15+: Exterior, muy gran distancia",
    ],
    sections: [
      {
        heading: "¿Qué son las Pantallas de LED?",
        type: "list" as const,
        items: [
          "Una pantalla de LED (Light Emitting Diode) es un tipo de dispositivo de visualización que utiliza diodos emisores de luz como píxeles para formar una imagen. Estas pantallas son muy brillantes, tienen un gran contraste y son visibles incluso en exteriores con luz solar directa.",
          "Brillo alto: ideales para exteriores✔Bajo consumo energético✔Modularidad: pantallas enormes✔Durabilidad: uso continuo✔Sin retroiluminación externa",
        ],
      },
      {
        heading: "Interior (Indoor)",
        type: "list" as const,
        items: [
          "Menor brillo",
          "Resolución más alta (1.5mm o 2.5mm)",
          "Eventos y conferencias",
          "Shoppings y estudios de TV",
          "Brillo regulable",
        ],
      },
      {
        heading: "Exterior (Outdoor)",
        type: "list" as const,
        items: [
          "Mayor brillo",
          "Resistentes a clima (IP65+)",
          "Mayor pitch (5mm, 10mm)",
          "Cartelería publicitaria",
          "Recitales y eventos",
        ],
      },
      {
        heading: "LED Transparente",
        type: "list" as const,
        items: [
          "Se ven desde ambos lados",
          "Vidrieras de vidrio",
          "Fachadas transparentes",
          "Efecto visual único",
          "Integración arquitectónica",
        ],
      },
      {
        heading: "LED Flexible",
        type: "list" as const,
        items: [
          "Superficies curvas",
          "Diseños creativos",
          "Adaptable a formas",
          "Instalaciones artísticas",
          "Máxima versatilidad",
        ],
      },
      {
        heading: "¿Qué es el pitch en una pantalla LED?",
        type: "list" as const,
        items: [
          "El pixel pitch es la distancia entre el centro de un píxel y el siguiente. Cuanto menor es, mayor la resolución (más nítida la imagen desde cerca).",
          "Ejemplos de Pixel Pitch:P1.5 - P2.5: Interior, alta resoluciónP3 - P4: Interior/Exterior, resolución mediaP5 - P10: Exterior, gran distanciaP15+: Exterior, muy gran distancia",
        ],
      },
      {
        heading: "Ejemplos de Pixel Pitch:",
        type: "list" as const,
        items: [
          "P1.5 - P2.5: Interior, alta resolución",
          "P3 - P4: Interior/Exterior, resolución media",
          "P5 - P10: Exterior, gran distancia",
          "P15+: Exterior, muy gran distancia",
        ],
      },
      {
        heading: "Tasa de Refresco (Refresh Rate)",
        type: "list" as const,
        items: [
          "La tasa de refresco mide cuántas veces por segundo se actualiza la imagen en pantalla. Se expresa en Hz (hertz). En pantallas LED profesionales, la tasa de refresco es de 3.840 Hz o más.",
          "Tasa baja (≤1.920 Hz):Al grabar pueden aparecer líneas negras, parpadeo o efecto moiréTasa alta (≥3.840 Hz):Imagen estable y sin interferencias visuales, incluso en cámara lenta",
          "Recomendación: Para streaming, TV o redes sociales, la tasa de refresco de 3.840 Hz es el mínimo profesional recomendado.",
        ],
      },
      {
        heading: "Brillo (en nits) y Comparación con Pantallas LCD",
        type: "list" as const,
        items: [
          "Tipo de pantallaBrillo típicoUso principalLED exterior5.000 a 10.000 nitsPublicidad en vía pública, recitalesLED interior800 a 2.500 nitsEscenarios, locales, centros comercialesLCD profesional (high brightness)500 a 3.000 nitsVidrieras, videowalls, tótemsMonitor LCD común250-400 nitsHogar u oficina",
          "🟢 LED ExteriorMayor brillo del mercado: superan fácilmente a las LCD, incluso a las de alto brillo.🟡 LED InteriorBrillo regulable para no encandilar en entornos cerrados.🔴 LCDAunque tengan alta calidad, no alcanzan el brillo de LED exterior para pleno sol.",
        ],
      },
      {
        heading: "🟢 LED Exterior",
        type: "list" as const,
        items: [
          "Mayor brillo del mercado: superan fácilmente a las LCD, incluso a las de alto brillo.",
        ],
      },
      {
        heading: "🟡 LED Interior",
        type: "list" as const,
        items: [
          "Brillo regulable para no encandilar en entornos cerrados.",
        ],
      },
      {
        heading: "🔴 LCD",
        type: "list" as const,
        items: [
          "Aunque tengan alta calidad, no alcanzan el brillo de LED exterior para pleno sol.",
        ],
      },
      {
        heading: "¿Qué es un módulo LED?",
        type: "list" as const,
        items: [
          "El módulo LED es la unidad más pequeña y básica de una pantalla LED. Contiene:",
          "Matriz de píxeles LED (ej: 64x64)",
          "Circuito impreso (PCB)",
          "Conectores para energía y datos",
          "Imanes o tornillos para montaje",
          "En términos simples: Módulo = Píxeles",
        ],
      },
      {
        heading: "¿Qué es un gabinete LED?",
        type: "list" as const,
        items: [
          "El gabinete es una estructura metálica que contiene varios módulos LED y los componentes que los alimentan y controlan. Incluye:",
          "Módulos LED (2, 4, 6 o más)",
          "Fuente de alimentación (AC a DC)",
          "Tarjeta receptora de señal",
          "Sistemas de ventilación",
          "Estructura metálica robusta",
          "En términos simples: Gabinete = Módulo + Electrónica + Estructura",
        ],
      },
      {
        heading: "Tamaños comunes de gabinetes:",
        type: "list" as const,
        items: [
          "500x500 mm",
          "640x480 mm",
          "960x960 mm",
          "Tamaños especiales y curvas",
        ],
      },
      {
        heading: "Ventajas de la estructura modular:",
        type: "list" as const,
        items: [
          "Escalabilidad: pantalla del tamaño que quieras",
          "Mantenimiento fácil: se cambia solo el módulo fallido",
          "Transporte rápido: ideal para eventos",
          "Flexibilidad: pantallas planas, curvas, transparentes",
        ],
      },
      {
        heading: "Tipos de Ensamblaje de Gabinetes",
        type: "list" as const,
        items: [
          "Tipo de gabineteUso comúnVentajaAluminio fundido (die-cast)Rental, eventosLigero, preciso, resistenteChapa metálicaFijo (outdoor o indoor)Más barato, robustoTransparente (vidrio/acrílico)Fachadas, vidrierasEstético, livianoFlexibleCurvas o columnasAdaptable, creativo",
        ],
      },
      {
        heading: "Tipos de Mantenimiento",
        type: "list" as const,
        items: [
          "FrontalLos módulos se pueden retirar desde adelante (típico en pantallas empotradas o con acceso limitado).TraseroSe retiran desde atrás (común en pantallas accesibles por detrás).",
        ],
      },
      {
        heading: "Resumen del Sistema",
        type: "list" as const,
        items: [
          "🔧Módulo LED = Píxeles sobre una placa📦Gabinete LED = Conjunto estructural con varios módulos + electrónica🖥️Pantalla LED completa = Mosaico de gabinetes conectados",
          "Este sistema modular hace que las pantallas LED sean escalables, reparables y adaptables a casi cualquier superficie o necesidad técnica.",
        ],
      },
    ],
  },
  {
    slug: "poster-led",
    title: "Poster LED",
    description: "Nuevos Poster Led que van a revolucionar el uso de los espacios",
    category: "led",
    images: ["/products/poster-led/01.png", "/products/poster-led/02.jpg", "/products/poster-led/03.jpg", "/products/poster-led/04.jpg", "/products/poster-led/05.jpg", "/products/poster-led/06.jpg", "/products/poster-led/07.webp", "/products/poster-led/08.jpg"],
    features: [
      "Material: Metal (cuerpo de Aluminio)",
      "Ultra delgado: 50 mm",
      "Peso ligero: 40 kgs aprox",
      "Gran contraste: 5000:1",
      "Escala de grises: 16 bits",
      "Alta tasa de refresco: 3.840 Hz",
      "Ángulo de visión: 160°H / 160°V",
      "Funcionamiento: 24/7",
      "Consumo energético: 170 W/m²",
      "Salida de audio: Sí",
      "Cable conexión: 220 V",
      "WiFi: Sí",
      "HDMI: Sí",
      "USB: Sí",
      "LAN: Sí",
      "Control remoto: App móvil",
      "Publicación rápida: Desde móvil/PC",
      "Rápido montaje",
      "Alto brillo ajustable",
      "Bajo consumo energético",
      "Funcionamiento estable 24/7",
      "Sin latencia en reproducción",
      "Una persona puede moverlo",
      "Listo para funcionar",
    ],
    sections: [
      {
        heading: "Descubre una nueva forma de aprovechar espacios",
        type: "list" as const,
        items: [
          "Descubre una nueva forma de aprovechar espacios para emitir contenido audiovisual con la nueva tecnología Poster LED. Un nuevo concepto para ofrecer una imagen modernista y de vanguardia para tu negocio.",
          "Sorprende a tus clientes con un poster led. Obtendrás un alto impacto en los consumidores, diferenciándote de tu competencia y captando el interés de tus potenciales clientes.",
          "Diseño minimalista y ultrafino✔Transportable por su bajo peso✔Listo para funcionar con software incluido✔Encastrables entre sí para pantallas grandes",
        ],
      },
      {
        heading: "ALTO IMPACTO VISUAL",
        type: "list" as const,
        items: [
          "Proporcionan una imagen nítida, brillante y clara con alto impacto visual. Ideales para eventos o publicidad de tu negocio.",
        ],
      },
      {
        heading: "ADAPTABLES A CUALQUIER ESPACIO",
        type: "list" as const,
        items: [
          "El sistema de paneles modulares permite crear pantallas únicas y experiencias visualmente impresionantes en cualquier lugar.",
        ],
      },
      {
        heading: "FÁCIL MONTAJE",
        type: "list" as const,
        items: [
          "Los Posters LED se ensamblan de manera cómoda y simple. No exigen maquinaria adicional, ni herramientas complejas.",
        ],
      },
      {
        heading: "Características Generales",
        type: "list" as const,
        items: [
          "Material: Metal (cuerpo de Aluminio)",
          "Ultra delgado: 50 mm",
          "Peso ligero: 40 kgs aprox",
          "Gran contraste: 5000:1",
          "Escala de grises: 16 bits",
          "Alta tasa de refresco: 3.840 Hz",
          "Ángulo de visión: 160°H / 160°V",
          "Funcionamiento: 24/7",
          "Consumo energético: 170 W/m²",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "Salida de audio: Sí",
          "Cable conexión: 220 V",
          "WiFi: Sí",
          "HDMI: Sí",
          "USB: Sí",
          "LAN: Sí",
          "Control remoto: App móvil",
          "Publicación rápida: Desde móvil/PC",
        ],
      },
      {
        heading: "Ventajas",
        type: "list" as const,
        items: [
          "Rápido montaje",
          "Alto brillo ajustable",
          "Bajo consumo energético",
          "Funcionamiento estable 24/7",
          "Sin latencia en reproducción",
          "Una persona puede moverlo",
          "Listo para funcionar",
          "Software y hardware incluido",
        ],
      },
      {
        heading: "Indoor",
        type: "list" as const,
        items: [
          "Pitch:3Brillo:1.200 nitsTamaño Display:576 x 1920 mmResolución:192 x 640 px",
          "Ideal para uso en interiores, eventos corporativos, centros comerciales y establecimientos cerrados.",
        ],
      },
      {
        heading: "Outdoor",
        type: "list" as const,
        items: [
          "Pitch:2.5Brillo:5.500 nitsTamaño Display:640 x 1920 mmResolución:256 x 768 pxCertificación:IP65",
          "Resistente al agua de lluvia y al polvo del ambiente. Perfecto para exteriores y eventos al aire libre.",
        ],
      },
      {
        heading: "Tecnología GOB (Glue On Board)",
        type: "list" as const,
        items: [
          "Tecnología de pegamento sobre placa: la superficie del LED está cubierta con pegamento que puede protegerlo del polvo, el agua (resistente al agua IP65) y otros ataques.",
          "Se solucionó el problema de caídas y daños del LED cuando el cartel LED se golpeaba.",
          "Protege los LED SMD✔Resistente al agua IP65✔Protección contra polvo✔Mayor durabilidad",
        ],
      },
      {
        heading: "Marco Ultrafino",
        type: "list" as const,
        items: [
          "El Poster LED posee un grosor de tan solo 50 mm: el más pequeño del mercado.",
          "Grosor de solo 50 mm✔El más delgado del mercado✔Diseño minimalista✔Fácil transporte",
        ],
      },
      {
        heading: "Controladora/Sender NOVASTAR",
        type: "list" as const,
        items: [
          "Software de gestión NOVASTAR: por Ethernet o Wifi. Con un reproductor de medios integrado y almacenamiento local, su soporte puede reproducir casi cualquier formato de imagen o video sin necesidad de dispositivos externos.",
          "Reproductor de medios integrado✔Almacenamiento local✔Múltiples formatos de video/imagen✔Sin dispositivos externos",
        ],
      },
      {
        heading: "Múltiples Interfaces",
        type: "list" as const,
        items: [
          "Carga el contenido simplemente con una memoria USB, en remoto por teléfonos celulares o computadoras con Wifi con la app móvil.",
          "HDMIConexión directaRJ45EthernetUSBMemoria externaWiFiControl remoto",
        ],
      },
      {
        heading: "Múltiples Aplicaciones",
        type: "list" as const,
        items: [
          "🎪EventosPresentaciones de productos, ferias empresariales, sociales o eventos de gobiernos🏢ComercialLocales, centros comerciales, hoteles, puntos de información🎓EducativoMuseos, universidades, escuelas, centros de formación✈️TransporteAeropuertos, estaciones, terminales de transporte",
        ],
      },
      {
        heading: "Eventos",
        type: "list" as const,
        items: [
          "Presentaciones de productos, ferias empresariales, sociales o eventos de gobiernos",
        ],
      },
      {
        heading: "Comercial",
        type: "list" as const,
        items: [
          "Locales, centros comerciales, hoteles, puntos de información",
        ],
      },
      {
        heading: "Educativo",
        type: "list" as const,
        items: [
          "Museos, universidades, escuelas, centros de formación",
        ],
      },
      {
        heading: "Transporte",
        type: "list" as const,
        items: [
          "Aeropuertos, estaciones, terminales de transporte",
        ],
      },
      {
        heading: "Diversas Formas de Instalación",
        type: "list" as const,
        items: [
          "Opciones de Montaje🏃De pie en el piso🛞Moverse con ruedas🔗Colgar en el techo📐Montar en la paredMúltiples Posters LED se pueden montar de muchas maneras diferentes reproduciendo un video sincronizado en todos ellos.",
        ],
      },
      {
        heading: "Opciones de Montaje",
        type: "list" as const,
        items: [
          "🏃De pie en el piso🛞Moverse con ruedas🔗Colgar en el techo📐Montar en la pared",
          "Múltiples Posters LED se pueden montar de muchas maneras diferentes reproduciendo un video sincronizado en todos ellos.",
        ],
      },
      {
        heading: "Múltiples Posters: Gran Pantalla",
        type: "list" as const,
        items: [
          "Posibilidad de conectar varios Posters LED entre sí para formar una única pantalla de gran formato. En la parte trasera se conectan los múltiples Posters Led logrando un empalme perfecto.",
          "6 posters forman pantalla 16:9✔Ampliable sin equipamiento externo✔Una persona puede completar el empalme✔Sincronización en tiempo real",
        ],
      },
      {
        heading: "Módulos Intercambiables",
        type: "list" as const,
        items: [
          "El display del Poster Led está formado de módulos súper delgados e intercambiables, de fácil mantenimiento.",
          "Mantenimiento posterior: Retirando fácilmente la tapa trasera permite que se puedan realizar rápidas tareas de mantenimiento y reemplazo de módulos de panel.",
          "Módulos súper delgados✔Fácil mantenimiento✔Reemplazo rápido✔Acceso trasero fácil",
        ],
      },
      {
        heading: "Ruedas Móviles",
        type: "list" as const,
        items: [
          "Con engranaje movible el Poster LED puede ser movido a donde se desee con poco esfuerzo. Cada rueda posee un freno para dejarlo inmóvil.",
          "Movimiento fácil•Frenos individuales•Posicionamiento preciso",
        ],
      },
      {
        heading: "Gran Disipación del Calor",
        type: "list" as const,
        items: [
          "Múltiples pequeños agujeros y ventiladores internos logran un correcto flujo de aire resultando en una eficiente refrigeración.",
          "Ventiladores internos•Cuerpo de aluminio•Refrigeración eficiente",
        ],
      },
      {
        heading: "Soporte de Pie Exclusivo",
        type: "list" as const,
        items: [
          "El soporte de pie permite que el póster LED se mantenga en pie sobre el suelo de forma estable. Ideal para su guardado y transporte.",
          "Base estable•Rueditas para deslizar•Fácil desmontaje",
        ],
      },
      {
        heading: "Transporte",
        type: "list" as const,
        items: [
          "Gracias a su estructura ligera pueden guardarse hasta 5 unidades en un anvil o caja y así poder trasladar varios posters fácilmente en menos espacio.",
          "Hasta 5 unidades por caja✔Estructura ligera✔Transporte eficiente✔Menos espacio requerido",
        ],
      },
    ],
  },
  {
    slug: "banner-led",
    title: "Banners LED",
    description: "Pantallas LED alargadas y verticales para contenido dinámico",
    category: "led",
    images: ["/products/banner-led/01.jpg", "/products/banner-led/02.jpg", "/products/banner-led/03.jpg"],
    features: [
      "Panel LED (con pixel pitch entre P1.8 y P4)",
      "Carcasa rígida de aluminio o materiales livianos como madera",
      "Base o Pie (a veces desmontable) para mantener el equipo parado",
      "Fuente de alimentación interna",
      "Sistema de control multimedia (USB, Wi-Fi o Android integrado)",
      "Pixel pitch: P1.8 – P3.9 mm",
      "Brillo: 1.000 – 3.500 nits",
      "Tasa de refresco: ≥3.840 Hz",
      "Resolución: Depende del tamaño y del pitch",
      "Duración de vida útil: ≥80.000 horas",
      "USB: Conexión directa",
      "HDMI: Entrada de video",
      "Wi-Fi: Control remoto",
      "4G: Conectividad móvil",
      "LAN: Red local",
      "Sistema operativo: Android o controladora externa",
      "Controladora: NovaStar",
      "Control: Celular o sistema remoto",
      "Contenido: Dinámico y programable",
      "Actualización: Instantánea",
      "Imágenes de alta resolución",
      "Videos y animaciones",
      "Integración con redes sociales",
      "Información en tiempo real (hora, clima)",
    ],
    sections: [
      {
        heading: "¿Qué son los banners LED?",
        type: "list" as const,
        items: [
          "Un banner LED es una pantalla LED alargada y vertical (tipo póster), diseñada para mostrar contenido dinámico como imágenes, texto, animaciones o video en tiempo real.",
          "En lugar de ser un gráfico impreso, el contenido se reproduce desde un sistema digital y puede cambiarse al instante reemplazando los banners impresos tradicionales.",
          "Contenido dinámico en tiempo real✔Cambio instantáneo de contenido✔Diseño alargado y vertical✔Reemplaza banners impresos tradicionales",
        ],
      },
      {
        heading: "Componentes principales:",
        type: "list" as const,
        items: [
          "Panel LED (con pixel pitch entre P1.8 y P4)",
          "Carcasa rígida de aluminio o materiales livianos como madera",
          "Base o Pie (a veces desmontable) para mantener el equipo parado",
          "Fuente de alimentación interna",
          "Sistema de control multimedia (USB, Wi-Fi o Android integrado)",
          "Diferencia con Posters LED: Los Banners LED no son tan delgados, son más robustos y son más anchos.",
        ],
      },
      {
        heading: "Pantalla",
        type: "list" as const,
        items: [
          "Pixel pitch: P1.8 – P3.9 mm",
          "Brillo: 1.000 – 3.500 nits",
          "Tasa de refresco: ≥3.840 Hz",
          "Resolución: Depende del tamaño y del pitch",
          "Duración de vida útil: ≥80.000 horas",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "USB: Conexión directa",
          "HDMI: Entrada de video",
          "Wi-Fi: Control remoto",
          "4G: Conectividad móvil",
          "LAN: Red local",
        ],
      },
      {
        heading: "Sistema",
        type: "list" as const,
        items: [
          "Sistema operativo: Android o controladora externa",
          "Controladora: NovaStar",
          "Control: Celular o sistema remoto",
          "Contenido: Dinámico y programable",
          "Actualización: Instantánea",
        ],
      },
      {
        heading: "Ventajas de los Banners LED",
        type: "list" as const,
        items: [
          "🎬Contenido DinámicoContenido dinámico y programable que se puede cambiar al instante🎯Alto Impacto VisualMayor impacto visual que un banner impreso tradicional📱Control FácilSe controla fácilmente desde un celular o sistema remoto🔄Múltiples CampañasPermite mostrar múltiples campañas o mensajes",
        ],
      },
      {
        heading: "Contenido Dinámico",
        type: "list" as const,
        items: [
          "Contenido dinámico y programable que se puede cambiar al instante",
        ],
      },
      {
        heading: "Alto Impacto Visual",
        type: "list" as const,
        items: [
          "Mayor impacto visual que un banner impreso tradicional",
        ],
      },
      {
        heading: "Control Fácil",
        type: "list" as const,
        items: [
          "Se controla fácilmente desde un celular o sistema remoto",
        ],
      },
      {
        heading: "Múltiples Campañas",
        type: "list" as const,
        items: [
          "Permite mostrar múltiples campañas o mensajes",
        ],
      },
      {
        heading: "Aplicaciones Comunes",
        type: "list" as const,
        items: [
          "🏪Tiendas y Centros ComercialesComo vidrieras dinámicas para atraer clientes🎪Stands de Ferias y EventosPara destacar en exposiciones y eventos🏢Hoteles, Cines, BancosEdificios institucionales y de servicios⚡Promociones de Último MinutoActualizaciones en tiempo real",
        ],
      },
      {
        heading: "Tiendas y Centros Comerciales",
        type: "list" as const,
        items: [
          "Como vidrieras dinámicas para atraer clientes",
        ],
      },
      {
        heading: "Stands de Ferias y Eventos",
        type: "list" as const,
        items: [
          "Para destacar en exposiciones y eventos",
        ],
      },
      {
        heading: "Hoteles, Cines, Bancos",
        type: "list" as const,
        items: [
          "Edificios institucionales y de servicios",
        ],
      },
      {
        heading: "Promociones de Último Minuto",
        type: "list" as const,
        items: [
          "Actualizaciones en tiempo real",
        ],
      },
      {
        heading: "Contenido Dinámico",
        type: "list" as const,
        items: [
          "Imágenes, videos, animaciones, redes sociales, hora y clima.",
          "Más atractivo y llamativo•Baja inversión en reposición•Solo cambian archivos digitales",
        ],
      },
      {
        heading: "Programación Avanzada",
        type: "list" as const,
        items: [
          "Posibilidad de programar contenidos, incluso segmentados por hora.",
          "Contenido segmentado por hora•Programación automática•Control remoto total",
        ],
      },
      {
        heading: "Durabilidad y Resistencia",
        type: "list" as const,
        items: [
          "Alta durabilidad (LED > 80.000 h) y resistencia a uso constante.",
          "Vida útil de 80.000+ horas•Resistencia a uso constante•Mantenimiento mínimo",
        ],
      },
      {
        heading: "Comparación con Banner Impreso Tradicional",
        type: "list" as const,
        items: [
          "AspectoBanner LEDBanner ImpresoContenidoDinámico, editableEstáticoActualizaciónInmediata, remotaRequiere reimpresiónLongevidadAlta (hasta 5–10 años)Media (se desgasta)Impacto visualAlto (movimiento, brillo)BajoCosto inicialMás altoBajoCosto de mantenimientoBajo (solo energía)Alto (impresión periódica)",
        ],
      },
      {
        heading: "🎨 Contenido Multimedia",
        type: "list" as const,
        items: [
          "Imágenes de alta resolución",
          "Videos y animaciones",
          "Integración con redes sociales",
          "Información en tiempo real (hora, clima)",
          "Contenido interactivo",
        ],
      },
      {
        heading: "⚙️ Control y Gestión",
        type: "list" as const,
        items: [
          "Control remoto desde móvil",
          "Programación automática",
          "Gestión centralizada",
          "Actualizaciones instantáneas",
          "Monitoreo en tiempo real",
        ],
      },
      {
        heading: "💡 Tecnología LED",
        type: "list" as const,
        items: [
          "Brillo ajustable (1.000-3.500 nits)",
          "Alta tasa de refresco (≥3.840 Hz)",
          "Pixel pitch fino (P1.8-P3.9)",
          "Vida útil extendida (80.000+ horas)",
          "Bajo consumo energético",
        ],
      },
      {
        heading: "🔧 Instalación y Mantenimiento",
        type: "list" as const,
        items: [
          "Instalación sencilla",
          "Base desmontable",
          "Mantenimiento mínimo",
          "Resistente al uso constante",
          "Fácil transporte",
        ],
      },
    ],
  },
  {
    slug: "totem-led-outdoor",
    title: "Tótem LED Outdoor",
    description: "Estructura vertical autoportante para publicidad digital exterior",
    category: "led",
    images: ["/products/totem-led-outdoor/01.jpg", "/products/totem-led-outdoor/02.webp", "/products/totem-led-outdoor/03.png", "/products/totem-led-outdoor/04.jpg"],
    features: [
      "Pixel pitch: P3–P6 mm",
      "Distancia de lectura: 2–10 m",
      "Brillo: 5.000 – 8.000 nits",
      "Frecuencia de refresco: ≥ 3.840 Hz",
      "Resolución: Variable según tamaño y Pitch",
      "Visibilidad: Bajo luz directa",
      "Certificación IP: IP65 o superior",
      "Resistencia al agua: Sí",
      "Resistencia al polvo: Sí",
      "Resistencia UV: Sí",
      "Vidrio templado: Antivandálico",
      "Refrigeración: Activa o pasiva",
      "Chasis: Acero o aluminio",
      "Robustez: Antivandálico",
      "Seguridad: Cerradura de seguridad",
      "Altura total: 1.5 m a 3 m o más",
      "Conectividad: Wi-Fi, LAN, 4G, USB",
      "Alimentación: 220V con protección",
      "Sensores de temperatura",
      "Conteo de personas",
      "Cámaras integradas",
      "Contenido contextual",
      "Monitoreo en tiempo real",
      "Chasis antivandálico",
    ],
    sections: [
      {
        heading: "¿Qué es un Tótem LED Outdoor?",
        type: "list" as const,
        items: [
          "Un tótem LED outdoor es una estructura vertical autoportante que incorpora una pantalla LED de alta luminosidad diseñada para funcionar en exteriores, resistiendo las condiciones climáticas adversas.",
          "Se utiliza principalmente para publicidad digital dinámica, señalización institucional, campañas informativas y branding de alto impacto en espacios públicos.",
          "Estructura vertical autoportante✔Alta luminosidad para exteriores✔Resistente a condiciones climáticas✔Ideal para espacios públicos",
        ],
      },
      {
        heading: "Pantalla LED",
        type: "list" as const,
        items: [
          "Pixel pitch: P3–P6 mm",
          "Distancia de lectura: 2–10 m",
          "Brillo: 5.000 – 8.000 nits",
          "Frecuencia de refresco: ≥ 3.840 Hz",
          "Resolución: Variable según tamaño y Pitch",
          "Visibilidad: Bajo luz directa",
        ],
      },
      {
        heading: "Protección Ambiental",
        type: "list" as const,
        items: [
          "Certificación IP: IP65 o superior",
          "Resistencia al agua: Sí",
          "Resistencia al polvo: Sí",
          "Resistencia UV: Sí",
          "Vidrio templado: Antivandálico",
          "Refrigeración: Activa o pasiva",
        ],
      },
      {
        heading: "Estructura y Seguridad",
        type: "list" as const,
        items: [
          "Chasis: Acero o aluminio",
          "Robustez: Antivandálico",
          "Seguridad: Cerradura de seguridad",
          "Altura total: 1.5 m a 3 m o más",
          "Conectividad: Wi-Fi, LAN, 4G, USB",
          "Alimentación: 220V con protección",
        ],
      },
      {
        heading: "Controlador Multimedia",
        type: "list" as const,
        items: [
          "Reproducción local (USB, memoria interna) o remota (Wi-Fi, LAN, 4G) para máxima flexibilidad en la gestión de contenidos.",
          "Reproducción local con USB✔Memoria interna integrada✔Control remoto vía Wi-Fi/LAN✔Conectividad 4G móvil",
        ],
      },
      {
        heading: "Software CMS",
        type: "list" as const,
        items: [
          "Permite agendar campañas, administrar múltiples tótems en red y generar estadísticas detalladas de rendimiento.",
          "Programación de campañas✔Gestión de múltiples tótems✔Estadísticas de rendimiento✔Compatibilidad con sensores",
        ],
      },
      {
        heading: "Usos Frecuentes",
        type: "list" as const,
        items: [
          "🚗Vía Pública (DOOH)Publicidad digital en calles y avenidas principales🏪Centros ComercialesAvenidas comerciales y espacios de compras⛽Estaciones de ServicioParadas de transporte y estaciones🎪Plazas y EventosFerias y eventos al aire libre🏢Edificios InstitucionalesFrentes gubernamentales o corporativos",
        ],
      },
      {
        heading: "Vía Pública (DOOH)",
        type: "list" as const,
        items: [
          "Publicidad digital en calles y avenidas principales",
        ],
      },
      {
        heading: "Centros Comerciales",
        type: "list" as const,
        items: [
          "Avenidas comerciales y espacios de compras",
        ],
      },
      {
        heading: "Estaciones de Servicio",
        type: "list" as const,
        items: [
          "Paradas de transporte y estaciones",
        ],
      },
      {
        heading: "Plazas y Eventos",
        type: "list" as const,
        items: [
          "Ferias y eventos al aire libre",
        ],
      },
      {
        heading: "Edificios Institucionales",
        type: "list" as const,
        items: [
          "Frentes gubernamentales o corporativos",
        ],
      },
      {
        heading: "Ventajas Clave",
        type: "list" as const,
        items: [
          "☀️Máxima Visibilidad 24/7Incluso bajo sol directo o lluvia, garantizando visibilidad constante🎯Impacto Visual SuperiorMayor impacto que el cartel tradicional con contenido dinámico📱Control RemotoContenido remoto y automatizable desde cualquier ubicación🔧Alta DurabilidadDiseñados para resistir entre 5 y 10 años de uso continuo",
        ],
      },
      {
        heading: "Máxima Visibilidad 24/7",
        type: "list" as const,
        items: [
          "Incluso bajo sol directo o lluvia, garantizando visibilidad constante",
        ],
      },
      {
        heading: "Impacto Visual Superior",
        type: "list" as const,
        items: [
          "Mayor impacto que el cartel tradicional con contenido dinámico",
        ],
      },
      {
        heading: "Control Remoto",
        type: "list" as const,
        items: [
          "Contenido remoto y automatizable desde cualquier ubicación",
        ],
      },
      {
        heading: "Alta Durabilidad",
        type: "list" as const,
        items: [
          "Diseñados para resistir entre 5 y 10 años de uso continuo",
        ],
      },
      {
        heading: "Monocaras Verticales",
        type: "list" as const,
        items: [
          "Pantalla por un solo lado•Base ancha o pedestal•Ideal para plazas•Centros comerciales•Áreas industriales",
        ],
      },
      {
        heading: "Dobles Caras",
        type: "list" as const,
        items: [
          "Visibles en ambos sentidos•Circulación bidireccional•Perfectos para veredas•Calles principales•Esquinas de alto tráfico",
        ],
      },
      {
        heading: "Estilo \"Flagtotem\"",
        type: "list" as const,
        items: [
          "Pantalla elevada sobre poste•Diseño delgado•Reloj o información adicional•Común en paradas•Estacionamientos",
        ],
      },
      {
        heading: "🌡️ Sensores y Monitoreo",
        type: "list" as const,
        items: [
          "Sensores de temperatura",
          "Conteo de personas",
          "Cámaras integradas",
          "Contenido contextual",
          "Monitoreo en tiempo real",
        ],
      },
      {
        heading: "🔒 Seguridad y Protección",
        type: "list" as const,
        items: [
          "Chasis antivandálico",
          "Cerradura de seguridad",
          "Vidrio templado resistente",
          "Protección contra sobretensión",
          "Controladores LED internos",
        ],
      },
      {
        heading: "🎨 Diseño y Estética",
        type: "list" as const,
        items: [
          "Diseño moderno y limpio",
          "Adaptable a estética urbana",
          "Estética corporativa",
          "Integración arquitectónica",
          "Personalización de colores",
        ],
      },
      {
        heading: "⚡ Rendimiento y Eficiencia",
        type: "list" as const,
        items: [
          "Sin parpadeos en filmaciones",
          "Refrigeración inteligente",
          "Sensores térmicos",
          "Bajo consumo energético",
          "Mantenimiento mínimo",
        ],
      },
    ],
  },
  {
    slug: "rotulos-letreros-led",
    title: "Rótulos y Letreros LED",
    description: "Evolución inteligente de la señalética tradicional",
    category: "led",
    images: ["/products/rotulos-letreros-led/01.jpg", "/products/rotulos-letreros-led/02.png", "/products/rotulos-letreros-led/03.jpg", "/products/rotulos-letreros-led/04.jpg", "/products/rotulos-letreros-led/05.jpg"],
    features: [
      "Pitch: P1.5 a P3 mm",
      "Brillo interior: 800 a 1.200 nits",
      "Brillo exterior: 5.000–6.000 nits",
      "Tasa de refresco: ≥ 3.840 Hz",
      "Tiempo de vida: ≥ 80.000 h",
      "Consumo: Bajo consumo energético",
      "Protección IP: IP65 para exterior",
      "Resistencia al polvo: Sí",
      "Resistencia a la lluvia: Sí",
      "Protección UV: Sí",
      "Marco protector: Contra golpes",
      "Vidrio opcional: Protección adicional",
      "USB: Conexión directa",
      "Wi-Fi: Control remoto",
      "Ethernet: Red local",
      "4G: Conectividad móvil",
      "Control remoto: Total",
      "Actualizaciones: Instantáneas",
      "Contenido dinámico y animado",
      "Cambio instantáneo de contenido",
      "Control remoto total",
      "Brillo ajustable",
      "Colores vivos y movimiento",
      "Fácil mantenimiento",
    ],
    sections: [
      {
        heading: "¿Qué son los Rótulos y Letreros LED?",
        type: "list" as const,
        items: [
          "Los rótulos o letreros fabricados con pantallas LED son una evolución inteligente de la señalética tradicional. A diferencia de un letrero estático, estas pantallas permiten mostrar contenido dinámico como animaciones, videos, texto o imágenes fijas, controlados de forma remota.",
          "Son, en esencia, una pantalla digital continua configurada en formato horizontal o vertical para exhibir imágenes, videos y animaciones, reemplazando los carteles estáticos tradicionales.",
          "Contenido dinámico y animado✔Control remoto total✔Formato horizontal o vertical✔Reemplaza carteles estáticos",
        ],
      },
      {
        heading: "Módulos LED SMD",
        type: "list" as const,
        items: [
          "La pantalla está compuesta por módulos (por ejemplo, P3 = 3 mm de pitch) que forman una matriz continua de píxeles.",
          "Matriz continua de píxeles•Tecnología SMD•Pixel pitch configurable",
        ],
      },
      {
        heading: "Gabinete Estructural",
        type: "list" as const,
        items: [
          "Estos módulos se integran sobre una estructura metálica (aluminio o acero), formando una superficie continua de visualización.",
          "Estructura metálica robusta•Marco de protección•Vidrio de protección opcional",
        ],
      },
      {
        heading: "Fuente de Alimentación",
        type: "list" as const,
        items: [
          "Incorporan una fuente switching de 220 V con conversor a 12/24 V para alimentación eficiente.",
          "Fuente switching 220V•Conversor 12/24V•Alimentación eficiente",
        ],
      },
      {
        heading: "Sistema de Control",
        type: "list" as const,
        items: [
          "Incluye controladora LED que permite cargar contenido por USB, Wi-Fi, Ethernet o 4G.",
          "Controladora LED integrada•Múltiples conexiones•Gestión de contenido",
        ],
      },
      {
        heading: "Pantalla",
        type: "list" as const,
        items: [
          "Pitch: P1.5 a P3 mm",
          "Brillo interior: 800 a 1.200 nits",
          "Brillo exterior: 5.000–6.000 nits",
          "Tasa de refresco: ≥ 3.840 Hz",
          "Tiempo de vida: ≥ 80.000 h",
          "Consumo: Bajo consumo energético",
        ],
      },
      {
        heading: "Protección",
        type: "list" as const,
        items: [
          "Protección IP: IP65 para exterior",
          "Resistencia al polvo: Sí",
          "Resistencia a la lluvia: Sí",
          "Protección UV: Sí",
          "Marco protector: Contra golpes",
          "Vidrio opcional: Protección adicional",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "USB: Conexión directa",
          "Wi-Fi: Control remoto",
          "Ethernet: Red local",
          "4G: Conectividad móvil",
          "Control remoto: Total",
          "Actualizaciones: Instantáneas",
        ],
      },
      {
        heading: "Versatilidad",
        type: "list" as const,
        items: [
          "Muestra cualquier tipo de contenido —imágenes, animaciones, videos— con cambio instantáneo",
        ],
      },
      {
        heading: "Mayor Visibilidad",
        type: "list" as const,
        items: [
          "Mayor visibilidad en interiores o fachadas gracias a brillo ajustable",
        ],
      },
      {
        heading: "Impacto Visual",
        type: "list" as const,
        items: [
          "Brillo regulable, colores vivos y movimiento atraen más atención que un cartel fijo",
        ],
      },
      {
        heading: "Cambio Instantáneo",
        type: "list" as const,
        items: [
          "Contenido llamativo que puede cambiarse en segundos: ideal para promociones momentáneas",
        ],
      },
      {
        heading: "Instalación Modular",
        type: "list" as const,
        items: [
          "Fácil de mantener, actualizar o redimensionar según necesidades",
        ],
      },
      {
        heading: "Automatización",
        type: "list" as const,
        items: [
          "Se pueden programar mensajes por hora, integrar la hora/fecha o conectarse a sensores",
        ],
      },
      {
        heading: "Fácil Mantenimiento",
        type: "list" as const,
        items: [
          "Se reprograman vía software sin necesidad de desmontar nada; en caso de fallas, se reemplazan módulos fácilmente",
        ],
      },
      {
        heading: "Diseño Moderno",
        type: "list" as const,
        items: [
          "Diseño moderno y profesional, con estética limpia y con pequeños bordes para protección",
        ],
      },
      {
        heading: "🏪 Vidrieras",
        type: "list" as const,
        items: [
          "Para marcas, promociones o branding digital. Muestran precios, promociones, productos.",
          "Branding digital•Promociones dinámicas•Precios actualizables",
        ],
      },
      {
        heading: "🏢 Frentes Comerciales",
        type: "list" as const,
        items: [
          "Branding con logo animado para destacar la identidad corporativa.",
          "Logo animado•Identidad corporativa•Impacto visual",
        ],
      },
      {
        heading: "🛒 Puntos de Venta",
        type: "list" as const,
        items: [
          "Integrados en exhibidores para llamar la atención en góndolas y puntos de venta.",
          "Exhibidores integrados•Atención en góndolas•Promociones destacadas",
        ],
      },
      {
        heading: "📋 Señalética Interna",
        type: "list" as const,
        items: [
          "En oficinas o locales informando horarios o menús de forma dinámica.",
          "Información de horarios•Menús dinámicos•Información corporativa",
        ],
      },
      {
        heading: "🏛️ Recepciones Corporativas",
        type: "list" as const,
        items: [
          "Como cartelería digital fija en showrooms y recepciones corporativas.",
          "Cartelería digital fija•Showrooms corporativos•Recepciones profesionales",
        ],
      },
      {
        heading: "🎪 Eventos y Ferias",
        type: "list" as const,
        items: [
          "Banners digitales con contenido llamativo para eventos o ferias.",
          "Banners digitales•Contenido llamativo•Pantallas verticales tipo póster",
        ],
      },
      {
        heading: "Rótulos LED vs Letreros Tradicionales",
        type: "list" as const,
        items: [
          "✅ Rótulos LED• Contenido dinámico y animado• Cambio instantáneo de contenido• Control remoto total• Brillo ajustable• Colores vivos y movimiento• Fácil mantenimiento• Actualizaciones por software",
        ],
      },
      {
        heading: "Características Técnicas Destacadas",
        type: "list" as const,
        items: [
          "🔧 Especificaciones Técnicas• Pitch: P1.5 a P3 mm• Brillo: 800-6.000 nits• Refresco: ≥ 3.840 Hz• Vida útil: ≥ 80.000 horas• Protección: IP65 exterior• Consumo: Bajo consumo energético",
        ],
      },
    ],
  },
  {
    slug: "carteles-redondos-led",
    title: "Carteles Redondos LED",
    description: "Pantallas digitales circulares para contenido visual dinámico",
    category: "led",
    images: ["/products/carteles-redondos-led/01.png", "/products/carteles-redondos-led/02.jpg", "/products/carteles-redondos-led/03.png", "/products/carteles-redondos-led/04.png", "/products/carteles-redondos-led/05.jpg", "/products/carteles-redondos-led/06.jpg"],
    features: [
      "Módulos LED curvos o en triángulos segmentados para lograr la forma circular",
      "Superficie de visualización continua, sin bordes visibles",
      "Controlador que permite subir contenido desde USB, Wi-Fi o software CMS",
      "Opción de una o dos caras (doble faz)",
      "Forma: Circular",
      "Diámetros comunes: 50 cm – 2 m",
      "Pixel pitch: P1.5, P1.875, P2, P2.5 mm",
      "Distancia de visibilidad: 1–3 m",
      "Resolución: Depende del pixel pitch y tamaño",
      "Brillo interior: 800–1.500 nits",
      "Brillo exterior: 2.000–5.000 nits",
      "Tasa de refresco: ≥ 3.840 Hz",
      "Fluidez: Sin parpadeo",
      "Filmación: Seguro para filmación",
      "Protección IP: IP65 exterior",
      "Estructura: Metálica resistente",
      "Vidrio: Templado antivandálico opcional",
      "USB: Conexión directa",
      "Wi-Fi/4G: Control remoto",
      "Ethernet: Red local",
      "App móvil: Control desde celular",
    ],
    sections: [
      {
        heading: "¿Qué son los Carteles Redondos LED?",
        type: "list" as const,
        items: [
          "Un cartel redondo LED es una pantalla digital con forma circular que utiliza tecnología LED para mostrar contenido visual dinámico como logos, animaciones, texto, videos o publicidad.",
          "Su formato lo hace llamativo, moderno y muy usado en fachadas comerciales, señalética urbana, retail y decoración digital.",
          "Forma circular distintiva✔Contenido visual dinámico✔Alta visibilidad✔Ideal para branding y señalética",
        ],
      },
      {
        heading: "Componentes Principales",
        type: "list" as const,
        items: [
          "Módulos LED curvos o en triángulos segmentados para lograr la forma circular",
          "Superficie de visualización continua, sin bordes visibles",
          "Controlador que permite subir contenido desde USB, Wi-Fi o software CMS",
          "Opción de una o dos caras (doble faz)",
        ],
      },
      {
        heading: "Usos Comunes",
        type: "list" as const,
        items: [
          "☕Logos de LocalesCafeterías, barberías, tiendas de moda, locales de todo tipo🚇Señalética UrbanaEstaciones de transporte, señalización urbana🎨Decoración VisualEspacios creativos y decorativos🎪Pantallas ArtísticasFerias tecnológicas y eventos artísticos🏢Fachadas EmpresarialesEmpresas y stands promocionales",
        ],
      },
      {
        heading: "Logos de Locales",
        type: "list" as const,
        items: [
          "Cafeterías, barberías, tiendas de moda, locales de todo tipo",
        ],
      },
      {
        heading: "Señalética Urbana",
        type: "list" as const,
        items: [
          "Estaciones de transporte, señalización urbana",
        ],
      },
      {
        heading: "Decoración Visual",
        type: "list" as const,
        items: [
          "Espacios creativos y decorativos",
        ],
      },
      {
        heading: "Pantallas Artísticas",
        type: "list" as const,
        items: [
          "Ferias tecnológicas y eventos artísticos",
        ],
      },
      {
        heading: "Fachadas Empresariales",
        type: "list" as const,
        items: [
          "Empresas y stands promocionales",
        ],
      },
      {
        heading: "Forma y Tamaño",
        type: "list" as const,
        items: [
          "Forma: Circular",
          "Diámetros comunes: 50 cm – 2 m",
          "Pixel pitch: P1.5, P1.875, P2, P2.5 mm",
          "Distancia de visibilidad: 1–3 m",
          "Resolución: Depende del pixel pitch y tamaño",
        ],
      },
      {
        heading: "Rendimiento",
        type: "list" as const,
        items: [
          "Brillo interior: 800–1.500 nits",
          "Brillo exterior: 2.000–5.000 nits",
          "Tasa de refresco: ≥ 3.840 Hz",
          "Fluidez: Sin parpadeo",
          "Filmación: Seguro para filmación",
        ],
      },
      {
        heading: "Protección y Conectividad",
        type: "list" as const,
        items: [
          "Protección IP: IP65 exterior",
          "Estructura: Metálica resistente",
          "Vidrio: Templado antivandálico opcional",
          "USB: Conexión directa",
          "Wi-Fi/4G: Control remoto",
          "Ethernet: Red local",
          "App móvil: Control desde celular",
        ],
      },
      {
        heading: "Forma Original",
        type: "list" as const,
        items: [
          "Destaca entre los carteles cuadrados o rectangulares",
        ],
      },
      {
        heading: "Contenido Dinámico",
        type: "list" as const,
        items: [
          "Permite cambiar mensajes o animaciones en segundos",
        ],
      },
      {
        heading: "Alta Visibilidad",
        type: "list" as const,
        items: [
          "Incluso a plena luz del día en modelos outdoor",
        ],
      },
      {
        heading: "Control Remoto",
        type: "list" as const,
        items: [
          "Desde celular, computadora o app",
        ],
      },
      {
        heading: "Durabilidad",
        type: "list" as const,
        items: [
          "Más duradero y moderno que un cartel impreso",
        ],
      },
      {
        heading: "Visión Uniforme",
        type: "list" as const,
        items: [
          "Visión uniforme desde todos los ángulos",
        ],
      },
      {
        heading: "Versatilidad",
        type: "list" as const,
        items: [
          "Instalación en pared, colgados, pilares o muebles",
        ],
      },
      {
        heading: "Diseño Estético",
        type: "list" as const,
        items: [
          "Diseño estético moderno para retail y hostelería",
        ],
      },
      {
        heading: "Características Únicas",
        type: "list" as const,
        items: [
          "🎯 Atractivo VisualPor su forma, ideal para destacar logos o contenido gráfico de manera única y llamativa.👁️ Visión UniformeVisión uniforme desde todos los ángulos, evitando distorsión y garantizando legibilidad.🔧 Versatilidad de InstalaciónEn pared, colgados, sobre pilares o muebles, adaptándose a cualquier espacio.",
        ],
      },
      {
        heading: "Aplicaciones Ideales",
        type: "list" as const,
        items: [
          "🏪 RetailPerfecto para tiendas, centros comerciales y espacios de venta al por menor.🍽️ HosteleríaIdeal para restaurantes, cafeterías, bares y establecimientos gastronómicos.🚦 Señalización UrbanaExcelente para señalética urbana, estaciones y espacios públicos.",
        ],
      },
      {
        heading: "Señal Redonda Fija",
        type: "list" as const,
        items: [
          "Diámetros:50 cm hasta 2 mPixel pitch:P1.5–P4 mmCaras:Un solo ladoUso:Logos en fachadas",
          "Ideal para logos en fachadas, cafeterías o locales comerciales.",
        ],
      },
      {
        heading: "Cartel Circular Doble Cara",
        type: "list" as const,
        items: [
          "Visibilidad:Ambos ladosInstalación:Pilares o fachadasUso:Circulación bidireccionalAplicación:Espacios de alto tráfico",
          "Sirve para colocar sobre pilares o fachadas, visible de ambos lados.",
        ],
      },
      {
        heading: "Pantalla LED Circular Grande",
        type: "list" as const,
        items: [
          "Diámetro:2 mUso:Centros comercialesInstalación:Colgados del techoAplicación:Eventos y espacios grandes",
          "Usados en centros comerciales o eventos, pueden colgarse del cielo raso.",
        ],
      },
      {
        heading: "Tipos Según Uso",
        type: "list" as const,
        items: [
          "UsoTamaño/TipoPixel PitchBrilloInstalaciónLogo interiorØ 50–80 cm, un ladoP1.5–P2.5600–1.500 nitsPared, colgado desde techoFachada exteriorØ 80–150 cm, doble caraP2–P42.000–4.500 nitsBrazo saliente, pilar, soporteEvento / artísticosØ 1–2 m, bordelessP2.5–P43.000–6.000 nitsTecho, estructuras colgantes",
        ],
      },
    ],
  },
  {
    slug: "carteles-salientes-led",
    title: "Carteles Salientes LED",
    description: "Banderolas LED para máxima visibilidad lateral",
    category: "led",
    images: ["/products/carteles-salientes-led/01.png", "/products/carteles-salientes-led/02.jpg", "/products/carteles-salientes-led/03.jpg", "/products/carteles-salientes-led/04.jpg"],
    features: [
      "Formato: Rectangular o circular",
      "Caras: Un lado o doble cara",
      "Orientación: Vertical u horizontal",
      "Perfil exterior: +6 cm destacado",
      "Diseño: Moderno y sin sobredimensionar",
      "Pixel pitch: P2 mm (pequeños) hasta P5 mm (grandes)",
      "Brillo interior: 800 nits",
      "Brillo exterior: 5.000–7.000 nits",
      "Frecuencia: ≥ 3.840 Hz",
      "Parpadeo: Evita parpadeos en teléfonos o cámaras",
      "Protección IP: IP54–IP65",
      "Resistencia: A la intemperie",
      "Cuerpo: Metálico resistente",
      "Wi-Fi: Conexión inalámbrica",
      "4G: Conectividad móvil",
      "USB: Conexión directa",
      "Ethernet: Red local",
      "Actualización: Remota de contenido",
    ],
    sections: [
      {
        heading: "¿Qué son los Carteles Salientes LED?",
        type: "list" as const,
        items: [
          "Un cartel saliente LED o banderola LED es un tipo de señal luminosa que sobresale perpendicularmente de una pared o fachada, permitiendo que el contenido sea visible desde ambos lados y a distancia.",
          "Ideal para captar la atención de peatones o automovilistas que circulan paralelamente al frente del local.",
          "Visibilidad desde ambos lados✔Capta atención a distancia✔Ideal para peatones y automovilistas✔Instalación perpendicular a la fachada",
        ],
      },
      {
        heading: "Formato",
        type: "list" as const,
        items: [
          "Doble faz (visible de ambos lados), orientación vertical u horizontal",
        ],
      },
      {
        heading: "Iluminación",
        type: "list" as const,
        items: [
          "Paneles LED RGB o monocromáticos, con animaciones, texto, imágenes o video",
        ],
      },
      {
        heading: "Material",
        type: "list" as const,
        items: [
          "Estructura metálica (aluminio/acero), resistente al exterior",
        ],
      },
      {
        heading: "Protección",
        type: "list" as const,
        items: [
          "Carcasa sellada con protección IP65 o superior para exteriores",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "Control por Wi-Fi, USB, 4G o Ethernet para programar contenidos",
        ],
      },
      {
        heading: "Contenido Dinámico",
        type: "list" as const,
        items: [
          "Múltiples mensajes rotativos, animaciones y videos, a diferencia de banderolas estáticas",
        ],
      },
      {
        heading: "¿Dónde se Utilizan?",
        type: "list" as const,
        items: [
          "Locales ComercialesLos carteles salientes LED son ideales para todo tipo de locales comerciales que necesitan destacar su ubicación y atraer clientes.✔Gastronomía, farmacias, heladerías✔Peluquerías, kioscos, todo tipo de local✔Captan atención desde ambos lados",
          "🏛️InstitucionesBancos, hospitales, colegios🏙️Espacios UrbanosCalles peatonales, galerías, ferias🚦Esquinas de Alto TránsitoPara captar atención bidireccional⛽Centros de ServicioEstaciones donde se necesita señalización clara",
        ],
      },
      {
        heading: "Locales Comerciales",
        type: "list" as const,
        items: [
          "Los carteles salientes LED son ideales para todo tipo de locales comerciales que necesitan destacar su ubicación y atraer clientes.",
          "Gastronomía, farmacias, heladerías✔Peluquerías, kioscos, todo tipo de local✔Captan atención desde ambos lados",
        ],
      },
      {
        heading: "Instituciones",
        type: "list" as const,
        items: [
          "Bancos, hospitales, colegios",
        ],
      },
      {
        heading: "Espacios Urbanos",
        type: "list" as const,
        items: [
          "Calles peatonales, galerías, ferias",
        ],
      },
      {
        heading: "Esquinas de Alto Tránsito",
        type: "list" as const,
        items: [
          "Para captar atención bidireccional",
        ],
      },
      {
        heading: "Centros de Servicio",
        type: "list" as const,
        items: [
          "Estaciones donde se necesita señalización clara",
        ],
      },
      {
        heading: "Formato y Diseño",
        type: "list" as const,
        items: [
          "Formato: Rectangular o circular",
          "Caras: Un lado o doble cara",
          "Orientación: Vertical u horizontal",
          "Perfil exterior: +6 cm destacado",
          "Diseño: Moderno y sin sobredimensionar",
        ],
      },
      {
        heading: "Especificaciones LED",
        type: "list" as const,
        items: [
          "Pixel pitch: P2 mm (pequeños) hasta P5 mm (grandes)",
          "Brillo interior: 800 nits",
          "Brillo exterior: 5.000–7.000 nits",
          "Frecuencia: ≥ 3.840 Hz",
          "Parpadeo: Evita parpadeos en teléfonos o cámaras",
        ],
      },
      {
        heading: "Protección y Conectividad",
        type: "list" as const,
        items: [
          "Protección IP: IP54–IP65",
          "Resistencia: A la intemperie",
          "Cuerpo: Metálico resistente",
          "Wi-Fi: Conexión inalámbrica",
          "4G: Conectividad móvil",
          "USB: Conexión directa",
          "Ethernet: Red local",
          "Actualización: Remota de contenido",
        ],
      },
      {
        heading: "Mayor Visibilidad Lateral",
        type: "list" as const,
        items: [
          "El cartel saliente capta la atención incluso desde lejos o en movimiento",
        ],
      },
      {
        heading: "Actualización de Mensajes",
        type: "list" as const,
        items: [
          "Se puede cambiar el contenido de forma remota sin reemplazar la estructura",
        ],
      },
      {
        heading: "Estética Moderna",
        type: "list" as const,
        items: [
          "Ideal para diferenciarse y reforzar marca con tecnología",
        ],
      },
      {
        heading: "Alta Luminosidad",
        type: "list" as const,
        items: [
          "Se ve incluso a plena luz del día",
        ],
      },
      {
        heading: "2-Caras Visibles",
        type: "list" as const,
        items: [
          "Aumenta la visibilidad lateral de tu negocio",
        ],
      },
      {
        heading: "Contenido Dinámico",
        type: "list" as const,
        items: [
          "Permite animaciones, mensajes rotativos, horarios o promos",
        ],
      },
      {
        heading: "Visibilidad 24/7",
        type: "list" as const,
        items: [
          "Alta visibilidad diurna-nocturna, ideal para fachadas y esquinas transitadas",
        ],
      },
      {
        heading: "Perfil Destacado",
        type: "list" as const,
        items: [
          "+6 cm, diseño moderno y sin sobredimensionar",
        ],
      },
    ],
  },
  {
    slug: "cubos-led",
    title: "Cubos LED",
    description: "Pantallas digitales tridimensionales para experiencias inmersivas",
    category: "led",
    images: ["/products/cubos-led/01.png", "/products/cubos-led/02.jpg", "/products/cubos-led/03.jpg", "/products/cubos-led/04.jpg", "/products/cubos-led/05.webp", "/products/cubos-led/06.webp", "/products/cubos-led/07.jpg", "/products/cubos-led/08.webp"],
    features: [
      "Efecto inmersivo y llamativo",
      "Diseños totalmente personalizables",
      "Equipos ideales si buscas destacarte con una propuesta visual moderna y envolvente",
      "Cuatro caras visibles (laterales), colgado del techo",
      "Se ve desde todas las direcciones",
      "Común en centros comerciales, gimnasios, aeropuertos o estadios",
      "Incluye base y parte superior",
      "Usado en ferias, stands y exposiciones interactivas",
      "Puede mostrar contenido envolvente o artístico",
      "Tamaño pequeño (20–40 cm de lado)",
      "Usos en decoración corporativa, regalos tecnológicos",
      "Para promociones específicas o exhibiciones interactivas",
      "Destacan en exposiciones, tiendas conceptuales, eventos, etc.",
      "P2.5: resolución fina, 5 caras, cada cara mide 320 × 320 mm",
      "P3.0: 4 caras o 5 caras, tamaño 384 × 384 mm, ideal para colgar",
    ],
    sections: [
      {
        heading: "¿Qué es un Cubo LED?",
        type: "list" as const,
        items: [
          "Un cubo LED es una estructura tridimensional (generalmente 4, 5 o 6 caras) donde cada cara es una pantalla LED activa y sincronizada, diseñada para mostrar animaciones, videos o imágenes envolventes que se ven desde todos los ángulos.",
          "Las caras del cubo pueden ir coordinados o diferentes en cada lado. Los cubos LED son una forma innovadora y tridimensional de pantalla LED, diseñados para mostrar contenido en varios lados simultáneamente.",
          "Son muy llamativos y se usan tanto en interiores como en exteriores para publicidad, decoración digital, arte interactivo o experiencias inmersivas.",
          "Los cubos LED son soluciones visuales únicas que combinan creatividad y tecnología:•Efecto inmersivo y llamativo•Diseños totalmente personalizables•Equipos ideales si buscas destacarte con una propuesta visual moderna y envolvente",
        ],
      },
      {
        heading: "Los cubos LED son soluciones visuales únicas que combinan creatividad y tecnología:",
        type: "list" as const,
        items: [
          "Efecto inmersivo y llamativo",
          "Diseños totalmente personalizables",
          "Equipos ideales si buscas destacarte con una propuesta visual moderna y envolvente",
        ],
      },
      {
        heading: "1. Cubo suspendido o de techo",
        type: "list" as const,
        items: [
          "Cuatro caras visibles (laterales), colgado del techo",
          "Se ve desde todas las direcciones",
          "Común en centros comerciales, gimnasios, aeropuertos o estadios",
        ],
      },
      {
        heading: "2. Cubo completo (6 caras)",
        type: "list" as const,
        items: [
          "Incluye base y parte superior",
          "Usado en ferias, stands y exposiciones interactivas",
          "Puede mostrar contenido envolvente o artístico",
        ],
      },
      {
        heading: "3. Mini cubos LED de escritorio o mostrador",
        type: "list" as const,
        items: [
          "Tamaño pequeño (20–40 cm de lado)",
          "Usos en decoración corporativa, regalos tecnológicos",
          "Para promociones específicas o exhibiciones interactivas",
        ],
      },
      {
        heading: "4. Cubos con pedestal giratorio o fijo",
        type: "list" as const,
        items: [
          "Destacan en exposiciones, tiendas conceptuales, eventos, etc.",
        ],
      },
      {
        heading: "Tamaños Típicos",
        type: "list" as const,
        items: [
          "UsoTamaño por caraPitch recomendadoPublicidad indoor0.5 × 0.5 m a 1 × 1 mP2.5 – P4Instalaciones artísticasPersonalizado (curvo)P1.5 – P3Uso promocional pequeño20 – 40 cm de ladoP1.25 – P2",
          "Ejemplo de un Cubo Multicaras•P2.5: resolución fina, 5 caras, cada cara mide 320 × 320 mm•P3.0: 4 caras o 5 caras, tamaño 384 × 384 mm, ideal para colgar",
        ],
      },
      {
        heading: "Ejemplo de un Cubo Multicaras",
        type: "list" as const,
        items: [
          "P2.5: resolución fina, 5 caras, cada cara mide 320 × 320 mm",
          "P3.0: 4 caras o 5 caras, tamaño 384 × 384 mm, ideal para colgar",
        ],
      },
      {
        heading: "Especificaciones Técnicas",
        type: "list" as const,
        items: [
          "CaracterísticaValor típicoPixel pitchP1.2 – P5 mm (según distancia)Brillo800 – 5.000 nits (indoor/outdoor)Tasa de refresco≥ 3.840 Hz (sin parpadeo)SincronizaciónControlador NovaStar o similarMantenimientoFrontal o trasero (según diseño)Material de gabineteAluminio o acero + módulos LEDÁngulos de visión160°–178° horizontales y verticales",
        ],
      },
      {
        heading: "Contenido Envolvente",
        type: "list" as const,
        items: [
          "Contenido envolvente y atractivo desde todos los ángulos",
        ],
      },
      {
        heading: "Visibilidad 360°",
        type: "list" as const,
        items: [
          "No importa desde qué ángulo se mire, el contenido es claro y uniforme",
        ],
      },
      {
        heading: "Recordación de Marca",
        type: "list" as const,
        items: [
          "Gran recordación de marca por su formato único",
        ],
      },
      {
        heading: "Impacto Visual",
        type: "list" as const,
        items: [
          "Impacto visual envolvente: multiplica la atención y memorabilidad del mensaje",
        ],
      },
      {
        heading: "Instalaciones Premium",
        type: "list" as const,
        items: [
          "Ideal para instalaciones premium donde el impacto visual es clave",
        ],
      },
      {
        heading: "Fácil Programación",
        type: "list" as const,
        items: [
          "Fácil de programar desde un CMS como cualquier pantalla LED",
        ],
      },
      {
        heading: "Sincronización",
        type: "list" as const,
        items: [
          "Se puede usar en sincronía con sonido, sensores o contenido interactivo",
        ],
      },
      {
        heading: "Modular y Personalizable",
        type: "list" as const,
        items: [
          "Se pueden combinar cuatro caras o más, tamaños variables y montaje colgado, pedestal o pared",
        ],
      },
      {
        heading: "Interactivo y Creativo",
        type: "list" as const,
        items: [
          "Ideal para campañas marketing, arte, señalización o exhibiciones únicas",
        ],
      },
      {
        heading: "Alta Durabilidad",
        type: "list" as const,
        items: [
          "Alta durabilidad",
        ],
      },
      {
        heading: "Fácil Instalación",
        type: "list" as const,
        items: [
          "Fácil instalación (montaje colgante o pedestal)",
        ],
      },
      {
        heading: "🏟️ Estadios y Gimnasios",
        type: "list" as const,
        items: [
          "Centro del estadio, instalaciones deportivas",
        ],
      },
      {
        heading: "🏬 Centros Comerciales",
        type: "list" as const,
        items: [
          "Colgados del techo, áreas comunes",
        ],
      },
      {
        heading: "🎨 Arte Digital Inmersivo",
        type: "list" as const,
        items: [
          "Instalaciones artísticas, museos",
        ],
      },
      {
        heading: "🛒 Puntos de Venta",
        type: "list" as const,
        items: [
          "Alto tráfico, retail",
        ],
      },
      {
        heading: "✈️ Aeropuertos",
        type: "list" as const,
        items: [
          "Señalética, ambientación",
        ],
      },
      {
        heading: "🏨 Hoteles",
        type: "list" as const,
        items: [
          "Centros de convenciones, lobbies",
        ],
      },
      {
        heading: "🎪 Eventos y Ferias",
        type: "list" as const,
        items: [
          "Stages, presentaciones de productos",
        ],
      },
      {
        heading: "💎 Retail de Alta Gama",
        type: "list" as const,
        items: [
          "Stands temáticos, arte inmersivo",
        ],
      },
    ],
  },
  {
    slug: "shelf-led",
    title: "Shelf LED",
    description: "Carteles LED para góndolas - Pantallas digitales para punto de venta",
    category: "led",
    images: ["/products/shelf-led/01.jpg", "/products/shelf-led/02.jpg", "/products/shelf-led/03.avif", "/products/shelf-led/04.jpeg"],
    features: [
      "Tiras de 60 mm de alto, disponibles en longitudes de 300, 600, 900 o 1200 mm, con conexión en cascada",
      "Combinan diseño ultradelgado y gabinete metálico resistente, con mantenimiento frontal, impermeabilidad y conectividad avanzada",
    ],
    sections: [
      {
        heading: "¿Qué es un Shelf LED?",
        type: "list" as const,
        items: [
          "Un Shelf LED (también llamado etiqueta digital de estantería o pantalla LED para góndola) es una pantalla LED delgada y alargada, diseñada para colocarse en los bordes de estanterías en supermercados, tiendas o locales comerciales.",
          "¿Qué función cumple?Comunica promociones, precios, códigos QR, videos cortos o mensajes dinámicos justo donde está el producto, para captar la atención del cliente en el punto de venta.",
        ],
      },
      {
        heading: "¿Qué función cumple?",
        type: "list" as const,
        items: [
          "Comunica promociones, precios, códigos QR, videos cortos o mensajes dinámicos justo donde está el producto, para captar la atención del cliente en el punto de venta.",
        ],
      },
      {
        heading: "¿Dónde se Usa un Shelf LED?",
        type: "list" as const,
        items: [
          "🛒 SupermercadosKioscos y tiendas de conveniencia💄 PerfumeríasFarmacias, electrónica🍭 Retail de Alta RotaciónGolosinas, bebidas, cosméticos🎪 FeriasExhibidores de producto",
        ],
      },
      {
        heading: "🛒 Supermercados",
        type: "list" as const,
        items: [
          "Kioscos y tiendas de conveniencia",
        ],
      },
      {
        heading: "💄 Perfumerías",
        type: "list" as const,
        items: [
          "Farmacias, electrónica",
        ],
      },
      {
        heading: "🍭 Retail de Alta Rotación",
        type: "list" as const,
        items: [
          "Golosinas, bebidas, cosméticos",
        ],
      },
      {
        heading: "🎪 Ferias",
        type: "list" as const,
        items: [
          "Exhibidores de producto",
        ],
      },
      {
        heading: "Dinámico y Atractivo",
        type: "list" as const,
        items: [
          "Ideal para promociones y contenidos multimedia. Atrae visualmente más que un cartel impreso. Mejora la imagen del negocio (más moderno y digital)",
        ],
      },
      {
        heading: "Modular y Escalable",
        type: "list" as const,
        items: [
          "Armás filas o secciones continuas con placas de 300 mm, 600 mm, etc.",
        ],
      },
      {
        heading: "Estética Limpia",
        type: "list" as const,
        items: [
          "Perfil delgado y diseño moderno que mejora la experiencia de compra",
        ],
      },
      {
        heading: "Actualización Remota",
        type: "list" as const,
        items: [
          "Controla precios y publicidad desde un CMS central o app. Permite cambiar los precios o promociones en segundos",
        ],
      },
      {
        heading: "Integración con Sistemas",
        type: "list" as const,
        items: [
          "Puede integrarse con el sistema de gestión (ERP o POS)",
        ],
      },
      {
        heading: "¿Es lo Mismo que una Etiqueta Electrónica (ESL)?",
        type: "list" as const,
        items: [
          "TérminoTecnologíaPantallaUsoESL (Electronic Shelf Label)E-paper o LCDBlanco y negro o colores limitadosMostrar precioShelf LEDLED SMD o COBA todo color, dinámicoMostrar publicidad + precio + video",
        ],
      },
      {
        heading: "Pixel Pitch",
        type: "list" as const,
        items: [
          "Típicamente P0.77–P1.25 mm, ideal para lectura cercana (≤ 1 m)",
        ],
      },
      {
        heading: "Brillo",
        type: "list" as const,
        items: [
          "Usualmente 600–800 nits, suficiente para interiores bien iluminados",
        ],
      },
      {
        heading: "Alta Tasa de Refresco",
        type: "list" as const,
        items: [
          "≥ 3.840 Hz, evitando parpadeo en filmaciones o escaneos de cámara",
        ],
      },
      {
        heading: "Diseño Modular y Ultrafino",
        type: "list" as const,
        items: [
          "20–25 mm de espesor, facilidades para instalación frontal o posterior",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "Wi-Fi, Ethernet, USB e integración con CMS para actualizaciones remotas",
        ],
      },
      {
        heading: "Casos de Uso Destacados",
        type: "list" as const,
        items: [
          "UsoPixel PitchBrilloVentaja PrincipalPrecio y promo en retailP1.25–P1.86≈700 nitsClaridad cercanaGóndolas en supermercadosP0.77–P1.25600–800 nitsAlta definiciónCarrito o headers de estanteP1.5600 nitsFlexibilidad de ubicación",
          "Ejemplos de Modelos Disponibles•Tiras de 60 mm de alto, disponibles en longitudes de 300, 600, 900 o 1200 mm, con conexión en cascada•Combinan diseño ultradelgado y gabinete metálico resistente, con mantenimiento frontal, impermeabilidad y conectividad avanzada",
        ],
      },
      {
        heading: "Ejemplos de Modelos Disponibles",
        type: "list" as const,
        items: [
          "Tiras de 60 mm de alto, disponibles en longitudes de 300, 600, 900 o 1200 mm, con conexión en cascada",
          "Combinan diseño ultradelgado y gabinete metálico resistente, con mantenimiento frontal, impermeabilidad y conectividad avanzada",
        ],
      },
    ],
  },
  {
    slug: "totem-led-outdoor-pedestal",
    title: "Tótem LED Outdoor con Pedestal",
    description: "Carteles LED DOOH para espacios urbanos con máxima visibilidad",
    category: "led",
    images: ["/products/totem-led-outdoor-pedestal/01.png", "/products/totem-led-outdoor-pedestal/02.jpg", "/products/totem-led-outdoor-pedestal/03.jpg", "/products/totem-led-outdoor-pedestal/04.png", "/products/totem-led-outdoor-pedestal/05.webp", "/products/totem-led-outdoor-pedestal/06.webp"],
    features: [
      "Pantalla:1,28 x 2.08 m",
      "Estructura:entre 4,5 y 5 m de altura",
      "Pedestal:entre 2 y 2,5 m de altura",
      "Profundidad:0.3 m",
      "Peso aprox.:125 kg",
      "Estructura metálica robusta con carcasa anti-impacto",
      "Dos opciones: Caja de aluminio o acero galvanizado con pintura en polvo",
      "Resistente y sin corrosión para exterior",
      "Base abulonada al piso con zapata de hormigón",
      "Diseñado para soportar vientos fuertes y choques",
      "Estructura a prueba de clima (IP56/IP65)",
      "Paneles LED SMD (P2.9, P3.9, P4.8, según modelo)",
      "Módulos LED con mantenimiento frontal",
      "Resolución variable según pixel pitch y dimensiones",
      "Brillo extremadamente alto: 5.000-7.500 nits",
      "Perfectamente visible bajo sol directo",
      "Contraste y legibilidad superiores bajo sol fuerte",
      "Brillo regulable automáticamente (baja a 700 nits en la noche)",
      "Ángulo de visión amplio: ≥160° horizontal y vertical",
      "Tasa de refresco: ≥3.840 Hz",
      "Ideal para evitar parpadeos en cámaras",
      "Wi-Fi, 4G, Ethernet",
      "HDMI, USB, RS232",
      "Ideal para contenido remoto",
    ],
    sections: [
      {
        heading: "¿Qué es un Tótem LED Outdoor con Pedestal?",
        type: "list" as const,
        items: [
          "Los carteles LED Outdoor con pedestal son tótems outdoor DOOH (Digital Out-of-Home) de nivel robusto que poseen un pie o pedestal para darle una mayor altura sobre el nivel del piso y que de esa forma pueda ser visto desde distancias más largas.",
          "Estos tótems de calle que utilizan tecnología de pantalla LED SMD o COB son ideales para publicidad urbana, señalización inteligente, estaciones o centros comerciales con presencia 24/7.",
          "Aplicación PrincipalEstán pensados para publicidad DOOH (Digital Out-Of-Home) en espacios urbanos: veredas, plazas, avenidas, etc. Su diseño modular con tecnología LED lo vuelve adecuado para publicidad de alto impacto en exteriores, incluso en condiciones de sol intenso y lluvia.",
        ],
      },
      {
        heading: "Aplicación Principal",
        type: "list" as const,
        items: [
          "Están pensados para publicidad DOOH (Digital Out-Of-Home) en espacios urbanos: veredas, plazas, avenidas, etc. Su diseño modular con tecnología LED lo vuelve adecuado para publicidad de alto impacto en exteriores, incluso en condiciones de sol intenso y lluvia.",
        ],
      },
      {
        heading: "Aplicaciones Típicas",
        type: "list" as const,
        items: [
          "🚌Publicidad en AvenidasParadas de colectivo, estaciones🏙️Señalética UrbanaTiempo, clima, ubicación🎪Promociones DinámicasMunicipios o eventos🏛️Smart CityMobiliario urbano digital",
        ],
      },
      {
        heading: "Publicidad en Avenidas",
        type: "list" as const,
        items: [
          "Paradas de colectivo, estaciones",
        ],
      },
      {
        heading: "Señalética Urbana",
        type: "list" as const,
        items: [
          "Tiempo, clima, ubicación",
        ],
      },
      {
        heading: "Promociones Dinámicas",
        type: "list" as const,
        items: [
          "Municipios o eventos",
        ],
      },
      {
        heading: "Smart City",
        type: "list" as const,
        items: [
          "Mobiliario urbano digital",
        ],
      },
      {
        heading: "Visibilidad Urbana",
        type: "list" as const,
        items: [
          "Ideal para visibilidad urbana en exterior bajo luz solar directa",
        ],
      },
      {
        heading: "Alta Calidad de Imagen",
        type: "list" as const,
        items: [
          "Alta calidad de imagen con control de brillo automático",
        ],
      },
      {
        heading: "Gestión Remota Profesional",
        type: "list" as const,
        items: [
          "Monitoreo en tiempo real y control de temperatura",
        ],
      },
      {
        heading: "Protección Robusta",
        type: "list" as const,
        items: [
          "Protección robusta frente a clima y vandalismo",
        ],
      },
      {
        heading: "Totalmente Personalizable",
        type: "list" as const,
        items: [
          "Caras, tamaño, color, formato",
        ],
      },
      {
        heading: "Dimensiones Estándar",
        type: "list" as const,
        items: [
          "Pantalla:1,28 x 2.08 mEstructura:entre 4,5 y 5 m de alturaPedestal:entre 2 y 2,5 m de alturaProfundidad:0.3 mPeso aprox.:125 kg",
          "Materiales y Construcción•Estructura metálica robusta con carcasa anti-impacto•Dos opciones: Caja de aluminio o acero galvanizado con pintura en polvo•Resistente y sin corrosión para exteriorInstalación y Anclaje•Base abulonada al piso con zapata de hormigón•Diseñado para soportar vientos fuertes y choques•Estructura a prueba de clima (IP56/IP65)",
        ],
      },
      {
        heading: "Tecnología LED",
        type: "list" as const,
        items: [
          "Paneles LED SMD (P2.9, P3.9, P4.8, según modelo)",
          "Módulos LED con mantenimiento frontal",
          "Resolución variable según pixel pitch y dimensiones",
        ],
      },
      {
        heading: "Rendimiento Visual",
        type: "list" as const,
        items: [
          "Brillo extremadamente alto: 5.000-7.500 nits",
          "Perfectamente visible bajo sol directo",
          "Contraste y legibilidad superiores bajo sol fuerte",
          "Brillo regulable automáticamente (baja a 700 nits en la noche)",
        ],
      },
      {
        heading: "Características Técnicas",
        type: "list" as const,
        items: [
          "Ángulo de visión amplio: ≥160° horizontal y vertical",
          "Tasa de refresco: ≥3.840 Hz",
          "Ideal para evitar parpadeos en cámaras",
        ],
      },
      {
        heading: "Sistemas y Conectividad",
        type: "list" as const,
        items: [
          "Controladora LED Novastar TaurusGestión y monitoreo avanzados con sistema NovastarConectividad Completa•Wi-Fi, 4G, Ethernet•HDMI, USB, RS232•Ideal para contenido remotoDMS (Device Monitoring & Control System)•Gestión remota avanzada•Monitoreo en tiempo real•Alarmas y programación de encendido/apagado",
        ],
      },
      {
        heading: "Controladora LED Novastar Taurus",
        type: "list" as const,
        items: [
          "Gestión y monitoreo avanzados con sistema Novastar",
        ],
      },
      {
        heading: "Conectividad Completa",
        type: "list" as const,
        items: [
          "Wi-Fi, 4G, Ethernet",
          "HDMI, USB, RS232",
          "Ideal para contenido remoto",
        ],
      },
      {
        heading: "DMS (Device Monitoring & Control System)",
        type: "list" as const,
        items: [
          "Gestión remota avanzada",
          "Monitoreo en tiempo real",
          "Alarmas y programación de encendido/apagado",
        ],
      },
      {
        heading: "Opcionales Disponibles",
        type: "list" as const,
        items: [
          "Reloj Digital LEDIntegrado en parte superior o inferior del gabineteInformación ExtraFecha, temperatura y humedadSensores Smart CityTemperatura, humedad y contaminaciónCámara IntegradaConteo de personas, tráfico o seguridadPanel SolarO batería como respaldoSistema de RefrigeraciónCoolers/ventiladores activos",
        ],
      },
      {
        heading: "Reloj Digital LED",
        type: "list" as const,
        items: [
          "Integrado en parte superior o inferior del gabinete",
        ],
      },
      {
        heading: "Información Extra",
        type: "list" as const,
        items: [
          "Fecha, temperatura y humedad",
        ],
      },
      {
        heading: "Sensores Smart City",
        type: "list" as const,
        items: [
          "Temperatura, humedad y contaminación",
        ],
      },
      {
        heading: "Cámara Integrada",
        type: "list" as const,
        items: [
          "Conteo de personas, tráfico o seguridad",
        ],
      },
      {
        heading: "Panel Solar",
        type: "list" as const,
        items: [
          "O batería como respaldo",
        ],
      },
      {
        heading: "Sistema de Refrigeración",
        type: "list" as const,
        items: [
          "Coolers/ventiladores activos",
        ],
      },
    ],
  },
  {
    slug: "software-carteleria-digital",
    title: "Software de Cartelería Digital",
    description: "Controla, programa y distribuye contenido multimedia en pantallas digitales",
    category: "software",
    images: ["/products/software-carteleria-digital/01.jpg", "/products/software-carteleria-digital/02.jpg", "/products/software-carteleria-digital/03.png"],
    features: [
      "Mayor velocidad de transferencia de contenidos",
      "Optimización del ancho de banda disponible",
      "Transferencia más eficiente entre servidor y media player",
    ],
    sections: [
      {
        heading: "¿Qué es el Software de Cartelería Digital?",
        type: "list" as const,
        items: [
          "El software de cartelería digital (también conocido como Digital Signage Software) es una herramienta que permite controlar, programar y distribuir contenido multimedia en pantallas ubicadas en diferentes lugares.",
          "Estas pantallas pueden estar en tiendas, shoppings, hospitales, aeropuertos, universidades, vidrieras, etc.",
          "Aplicaciones PrincipalesPerfecto para cualquier entorno que requiera comunicación visual dinámica y actualización de contenidos en tiempo real.",
        ],
      },
      {
        heading: "Aplicaciones Principales",
        type: "list" as const,
        items: [
          "Perfecto para cualquier entorno que requiera comunicación visual dinámica y actualización de contenidos en tiempo real.",
        ],
      },
      {
        heading: "Gestión de Contenido (CMS)",
        type: "list" as const,
        items: [
          "Subida, organización y edición de imágenes, videos, textos, presentaciones, etc.",
        ],
      },
      {
        heading: "Programación de Contenidos",
        type: "list" as const,
        items: [
          "Permite definir qué se muestra, en qué pantalla y en qué horario",
        ],
      },
      {
        heading: "Gestión Remota",
        type: "list" as const,
        items: [
          "Acceso desde una computadora o celular para actualizar el contenido en tiempo real",
        ],
      },
      {
        heading: "Zonificación de Pantalla",
        type: "list" as const,
        items: [
          "Dividir la pantalla en secciones (ej: clima, noticias, promociones)",
        ],
      },
      {
        heading: "Integraciones",
        type: "list" as const,
        items: [
          "Con sistemas externos como redes sociales, datos del clima, noticias RSS, dashboards empresariales",
        ],
      },
      {
        heading: "Reportes y Métricas",
        type: "list" as const,
        items: [
          "Analíticas sobre qué contenido se reprodujo, durante cuánto tiempo y en qué pantallas",
        ],
      },
      {
        heading: "Multiusuario y Permisos",
        type: "list" as const,
        items: [
          "Definición de roles para que distintos usuarios accedan con permisos limitados",
        ],
      },
      {
        heading: "Administrador de Contenidos",
        type: "list" as const,
        items: [
          "El software Administrador de Contenidos se instala en una notebook o PC de escritorio y desde allí a través de internet es posible administrar todos los contenidos que irán proyectados en el media player conectado a la pantalla.",
        ],
      },
      {
        heading: "Servidor en la Nube",
        type: "list" as const,
        items: [
          "El Administrador de contenidos subirá los mismos a un servidor en la Nube para que éstos luego sean descargados en el media player.",
        ],
      },
      {
        heading: "Media Player",
        type: "list" as const,
        items: [
          "Una mini PC tendrá el media player de este software instalado en la misma, el que recibirá los contenidos desde la Nube y serán proyectados en la pantalla.",
        ],
      },
      {
        heading: "Ventajas del Encoder",
        type: "list" as const,
        items: [
          "Mayor velocidad de transferencia de contenidos",
          "Optimización del ancho de banda disponible",
          "Transferencia más eficiente entre servidor y media player",
        ],
      },
      {
        heading: "Tipos de Contenido Soportados",
        type: "list" as const,
        items: [
          "🖼️ImágenesJPG, PNG, GIF, etc.🎥VideosMP4, AVI, MOV, etc.🌐URLsPáginas web, dashboards⚙️WidgetsElementos interactivos📱Redes SocialesInstagram, Facebook, Twitter📊DashboardsDatos en tiempo real📰Noticias RSSFeed de noticias🌤️Datos del ClimaInformación meteorológica",
        ],
      },
      {
        heading: "Imágenes",
        type: "list" as const,
        items: [
          "JPG, PNG, GIF, etc.",
        ],
      },
      {
        heading: "Videos",
        type: "list" as const,
        items: [
          "MP4, AVI, MOV, etc.",
        ],
      },
      {
        heading: "URLs",
        type: "list" as const,
        items: [
          "Páginas web, dashboards",
        ],
      },
      {
        heading: "Widgets",
        type: "list" as const,
        items: [
          "Elementos interactivos",
        ],
      },
      {
        heading: "Redes Sociales",
        type: "list" as const,
        items: [
          "Instagram, Facebook, Twitter",
        ],
      },
      {
        heading: "Dashboards",
        type: "list" as const,
        items: [
          "Datos en tiempo real",
        ],
      },
      {
        heading: "Noticias RSS",
        type: "list" as const,
        items: [
          "Feed de noticias",
        ],
      },
      {
        heading: "Datos del Clima",
        type: "list" as const,
        items: [
          "Información meteorológica",
        ],
      },
      {
        heading: "1. Publicación de Contenidos",
        type: "list" as const,
        items: [
          "El software permite la publicación de contenidos vía internet, en pantallas de plasma, LED, e incorpora la administración y actualización de contenidos.",
        ],
      },
      {
        heading: "2. Servidor Central",
        type: "list" as const,
        items: [
          "El contenido gráfico es almacenado, gestionado y programado en un servidor central vía Internet, que mantiene comunicación permanente con el sistema de pantallas y le envía automáticamente cualquier actualización que se realice.",
        ],
      },
      {
        heading: "3. Media Player",
        type: "list" as const,
        items: [
          "El Player que controla la pantalla recibe todo nuevo contenido desde el Servidor de Administración y lo almacena localmente en su memoria flash o disco duro para luego emitirlo.",
        ],
      },
      {
        heading: "4. Funcionamiento Offline",
        type: "list" as const,
        items: [
          "De esta manera, si el Player que controla el Sistema de pantallas LED perdiera conectividad con el Servidor de Administración, los contenidos continúan emitiéndose ininterrumpidamente.",
        ],
      },
      {
        heading: "Gestión Centralizada",
        type: "list" as const,
        items: [
          "Controla múltiples pantallas desde una sola plataforma",
        ],
      },
      {
        heading: "Actualización Remota",
        type: "list" as const,
        items: [
          "Cambia contenidos desde cualquier lugar con conexión a internet",
        ],
      },
      {
        heading: "Programación Flexible",
        type: "list" as const,
        items: [
          "Define horarios y secuencias de reproducción personalizadas",
        ],
      },
      {
        heading: "Funcionamiento Offline",
        type: "list" as const,
        items: [
          "Los contenidos continúan reproduciéndose aunque se pierda la conexión",
        ],
      },
      {
        heading: "Escalabilidad",
        type: "list" as const,
        items: [
          "Fácil expansión para agregar más pantallas al sistema",
        ],
      },
      {
        heading: "Ahorro de Costos",
        type: "list" as const,
        items: [
          "Elimina la necesidad de imprimir y reemplazar carteles físicos",
        ],
      },
    ],
  },
  {
    slug: "apps-juegos-interactivos",
    title: "Apps y Juegos Interactivos",
    description: "Para tótems y terminales con pantalla táctil",
    category: "software",
    images: ["/products/apps-juegos-interactivos/01.jpg", "/products/apps-juegos-interactivos/02.jpg", "/products/apps-juegos-interactivos/03.jpg", "/products/apps-juegos-interactivos/04.jpg", "/products/apps-juegos-interactivos/05.jpg", "/products/apps-juegos-interactivos/06.jpg", "/products/apps-juegos-interactivos/07.jpg", "/products/apps-juegos-interactivos/08.jpg"],
    features: [

    ],
    sections: [
      {
        heading: "¿Qué son las Apps Interactivas para Tótems?",
        type: "list" as const,
        items: [
          "Las apps interactivas para tótems con pantalla táctil permiten que los usuarios interactúen directamente con el contenido: navegar menús, buscar información, escanear códigos QR, ver productos, etc.",
          "Son muy comunes en shoppings, hoteles, supermercados, universidades, edificios públicos y locales comerciales.",
          "Aplicaciones PrincipalesPerfectas para cualquier entorno que requiera interacción directa con los usuarios y navegación intuitiva de contenidos.",
        ],
      },
      {
        heading: "Aplicaciones Principales",
        type: "list" as const,
        items: [
          "Perfectas para cualquier entorno que requiera interacción directa con los usuarios y navegación intuitiva de contenidos.",
        ],
      },
      {
        heading: "Zonificación Clara",
        type: "list" as const,
        items: [
          "Grandes botones para funciones principales (mapas, catálogos, encuestas)",
        ],
      },
      {
        heading: "UI Intuitiva",
        type: "list" as const,
        items: [
          "Evitar saturar la pantalla, utiliza íconos y texto legible",
        ],
      },
      {
        heading: "Feedback Visual/Sonoro",
        type: "list" as const,
        items: [
          "Indica que el touch fue registrado",
        ],
      },
      {
        heading: "Multiplataforma",
        type: "list" as const,
        items: [
          "Optimización para uso en Windows, Android o navegador (HTML5)",
        ],
      },
      {
        heading: "Accesibilidad",
        type: "list" as const,
        items: [
          "Contemplar opciones como contraste, idioma, zoom, audio, para usuarios diversos",
        ],
      },
      {
        heading: "Trivias de Preguntas y Respuestas",
        type: "list" as const,
        items: [
          "Preguntas rápidas con botones grandes en vertical: fácil de usar y acumular puntos o premios",
        ],
      },
      {
        heading: "Rompecabezas / Puzzles",
        type: "list" as const,
        items: [
          "La pantalla es ideal para armar piezas de gran tamaño",
        ],
      },
      {
        heading: "Memotest",
        type: "list" as const,
        items: [
          "Se debe buscar parejas de imágenes iguales",
        ],
      },
      {
        heading: "Ruleta Digital",
        type: "list" as const,
        items: [
          "Un tótem vertical puede servir como ruleta digital para participar de sorteos y descuentos, aumentando el engagement promocional",
        ],
      },
      {
        heading: "Jackpot",
        type: "list" as const,
        items: [
          "Al igual que la ruleta, el Jackpot sirve para hacer participar al público en sorteos",
        ],
      },
      {
        heading: "Logo Quiz",
        type: "list" as const,
        items: [
          "Completa los campos con letras formando el nombre del logo que muestra la imagen",
        ],
      },
      {
        heading: "Adivina la Imagen",
        type: "list" as const,
        items: [
          "Se muestra una imagen y se debe completar los campos con letras formando el nombre de la imagen mostrada",
        ],
      },
      {
        heading: "Juegos de Reflejos / Tapping",
        type: "list" as const,
        items: [
          "Aparecen objetivos que el usuario debe tocar rápidamente — ideal en eventos para marcar tiempos máximos",
        ],
      },
      {
        heading: "Nuestros Desarrollos de Juegos Interactivos",
        type: "list" as const,
        items: [
          "Desarrollo PersonalizadoDesarrollo y diseño de juegos para ser utilizados en una pantalla interactiva táctil.Adaptación a ClienteLos juegos estarán orientados y se adaptarán a los requerimientos específicos del cliente.",
        ],
      },
      {
        heading: "Desarrollo Personalizado",
        type: "list" as const,
        items: [
          "Desarrollo y diseño de juegos para ser utilizados en una pantalla interactiva táctil.",
        ],
      },
      {
        heading: "Adaptación a Cliente",
        type: "list" as const,
        items: [
          "Los juegos estarán orientados y se adaptarán a los requerimientos específicos del cliente.",
        ],
      },
      {
        heading: "Juegos Interactivos",
        type: "list" as const,
        items: [
          "Desarrollo de juegos con diferentes niveles de dificultad y temáticas relacionadas con lo que el cliente necesite",
        ],
      },
      {
        heading: "Interfaz Interactiva",
        type: "list" as const,
        items: [
          "Optimización para pantalla táctil con diseño responsive",
        ],
      },
      {
        heading: "Funcionalidades Adicionales",
        type: "list" as const,
        items: [
          "Temporizador para respuestas, retroalimentación en tiempo real, selección de dificultad, sistema de puntuación, y posibilidad de integrar gráficos y animaciones",
        ],
      },
      {
        heading: "Soporte y Mantenimiento",
        type: "list" as const,
        items: [
          "Mantenimiento integral incluyendo corrección de errores y ajustes menores",
        ],
      },
      {
        heading: "Branding de Marca",
        type: "list" as const,
        items: [
          "Personalización con imagen y logo de la empresa en cada pantalla",
        ],
      },
      {
        heading: "Sistema Operativo",
        type: "list" as const,
        items: [
          "Versiones para Windows o Android",
        ],
      },
      {
        heading: "Base de Datos (OPCIONAL)",
        type: "list" as const,
        items: [
          "Formulario de ingreso de datos personales (Nombre y Apellido, DNI y cuenta de Instagram). Esos datos serán guardados en un archivo Excel el cual se le entregará al cliente terminado el evento",
        ],
      },
    ],
  },
  {
    slug: "gestion-turnos",
    title: "Software de Gestión de Turnos",
    description: "Sistema completo para terminales interactivas y tótems digitales",
    category: "software",
    images: ["/products/gestion-turnos/01.jpg", "/products/gestion-turnos/02.png", "/products/gestion-turnos/03.png", "/products/gestion-turnos/04.png", "/products/gestion-turnos/05.png", "/products/gestion-turnos/06.png", "/products/gestion-turnos/07.jpg"],
    features: [
      "Centros médicos y hospitales",
      "Bancos y entidades públicas",
      "Farmacias",
      "Oficinas de atención al cliente",
      "Organismos gubernamentales (ANSES, AFIP, Registro Civil)",
      "Concesionarios, clínicas veterinarias, y más",
      "1.¿Dónde va a usar el sistema? (clínica, local, gobierno, etc.)",
      "2.¿Cuántos puestos de atención y cuántos tótems?",
      "3.¿Desea turnos online también o solo en el lugar?",
      "4.¿Desea tickets impresos o solo pantalla táctil?",
    ],
    sections: [
      {
        heading: "¿Qué es el Software de Gestión de Turnos?",
        type: "list" as const,
        items: [
          "Un software de gestión de turnos para terminales interactivas permite a los usuarios registrarse, sacar un número o solicitar un servicio mediante una pantalla táctil (tótem o kiosco digital), organizando la atención por orden, sector o prioridad.",
          "Este tipo de software es ideal para:•Centros médicos y hospitales•Bancos y entidades públicas•Farmacias•Oficinas de atención al cliente•Organismos gubernamentales (ANSES, AFIP, Registro Civil)•Concesionarios, clínicas veterinarias, y más",
        ],
      },
      {
        heading: "Este tipo de software es ideal para:",
        type: "list" as const,
        items: [
          "Centros médicos y hospitales",
          "Bancos y entidades públicas",
          "Farmacias",
          "Oficinas de atención al cliente",
          "Organismos gubernamentales (ANSES, AFIP, Registro Civil)",
          "Concesionarios, clínicas veterinarias, y más",
        ],
      },
      {
        heading: "Implementación",
        type: "list" as const,
        items: [
          "Preguntas para la Implementación1.¿Dónde va a usar el sistema? (clínica, local, gobierno, etc.)2.¿Cuántos puestos de atención y cuántos tótems?3.¿Desea turnos online también o solo en el lugar?4.¿Desea tickets impresos o solo pantalla táctil?",
        ],
      },
      {
        heading: "Preguntas para la Implementación",
        type: "list" as const,
        items: [
          "1.¿Dónde va a usar el sistema? (clínica, local, gobierno, etc.)",
          "2.¿Cuántos puestos de atención y cuántos tótems?",
          "3.¿Desea turnos online también o solo en el lugar?",
          "4.¿Desea tickets impresos o solo pantalla táctil?",
        ],
      },
      {
        heading: "Interfaz Intuitiva",
        type: "list" as const,
        items: [
          "Diseño simple y fácil de usar para usuarios de todas las edades",
        ],
      },
      {
        heading: "Configuración Flexible",
        type: "list" as const,
        items: [
          "Adaptable a diferentes tipos de negocios y necesidades específicas",
        ],
      },
      {
        heading: "Reportes en Tiempo Real",
        type: "list" as const,
        items: [
          "Estadísticas detalladas de uso y rendimiento del sistema",
        ],
      },
      {
        heading: "Integración LED",
        type: "list" as const,
        items: [
          "Compatible con pantallas LED para mostrar información en tiempo real",
        ],
      },
      {
        heading: "Soporte Técnico",
        type: "list" as const,
        items: [
          "Mantenimiento y soporte técnico especializado",
        ],
      },
      {
        heading: "Escalabilidad",
        type: "list" as const,
        items: [
          "Sistema escalable para crecer con las necesidades del negocio",
        ],
      },
      {
        heading: "Ventajas del Sistema",
        type: "list" as const,
        items: [
          "⏰Reducción de TiemposOptimiza la gestión de colas y reduce tiempos de espera📊Control TotalMonitoreo en tiempo real del flujo de atención😊Mejor ExperienciaCliente más satisfecho con un servicio organizado💼ProfesionalismoImagen moderna y profesional para tu negocio",
        ],
      },
      {
        heading: "Reducción de Tiempos",
        type: "list" as const,
        items: [
          "Optimiza la gestión de colas y reduce tiempos de espera",
        ],
      },
      {
        heading: "Control Total",
        type: "list" as const,
        items: [
          "Monitoreo en tiempo real del flujo de atención",
        ],
      },
      {
        heading: "Mejor Experiencia",
        type: "list" as const,
        items: [
          "Cliente más satisfecho con un servicio organizado",
        ],
      },
      {
        heading: "Profesionalismo",
        type: "list" as const,
        items: [
          "Imagen moderna y profesional para tu negocio",
        ],
      },
    ],
  },
  {
    slug: "gestion-filas",
    title: "Sistema de Filas: Fila Única",
    description: "Optimiza la gestión de colas y mejora la atención al cliente",
    category: "software",
    images: ["/products/gestion-filas/01.jpg", "/products/gestion-filas/02.jpg", "/products/gestion-filas/03.jpg", "/products/gestion-filas/04.jpg", "/products/gestion-filas/05.jpg", "/products/gestion-filas/06.jpg", "/products/gestion-filas/07.jpg", "/products/gestion-filas/08.jpg"],
    features: [
      "Backend (Lógica del sistema): Desarrollo de módulo para usuario administrador",
      "Integración con los terminales interactivos en la red LAN",
      "Frontend (Interfaz de usuario para los administradores)",
      "Personalización según la identidad de marca",
      "Diseño de Interfaz (UI/UX)",
      "Posibilidad de agregar Cartelería Digital",
      "Configuraciones iniciales de todos los usuarios",
      "Derecho de uso ilimitado del sistema",
      "Provisión de Hardware necesario",
      "Instalación, Configuración local y puesta en marcha",
      "Capacitación del Administrador",
      "Soporte técnico",
    ],
    sections: [
      {
        heading: "¿Qué es el Sistema de Fila Única?",
        type: "list" as const,
        items: [
          "Las colas de personas esperando son habituales en multitud de establecimientos comerciales, entidades bancarias, organismos públicos, centros de salud, etc. Muchos de estos lugares deciden estudiar cómo gestionar las colas que se producen en los mismos y aplicar soluciones para optimizar las colas y mejorar la atención a sus clientes.",
          "A nadie le gusta esperar y menos si es demasiado.",
          "Para lugares con mucha afluencia de personas en las que solo se presta un tipo de atención nuestro sistema de colas de Fila Única es la solución ideal.",
          "¿Cómo funciona?El sistema de fila única consiste en que se organiza a las personas que esperan en una sola línea de espera y los puestos de atención que se van quedando libres van llamando a la persona que se encuentra en primer lugar de esta línea.",
        ],
      },
      {
        heading: "¿Cómo funciona?",
        type: "list" as const,
        items: [
          "El sistema de fila única consiste en que se organiza a las personas que esperan en una sola línea de espera y los puestos de atención que se van quedando libres van llamando a la persona que se encuentra en primer lugar de esta línea.",
        ],
      },
      {
        heading: "La Solución de Fila Única",
        type: "list" as const,
        items: [
          "La solución de fila única, o cola única, le permite acelerar el proceso de pago y mejorar el servicio al cliente.",
          "El principio de este sistema es simple: se instala una sola fila al comienzo de la fila de pago. Tan pronto como una caja está libre, se llama al siguiente cliente a través del tótem digital (desde donde además se ejecuta un timbre como advertencia sonora).",
          "Identificar qué caja está libre es muy sencillo para sus clientes. Además, los clientes ya no tienen que preocuparse por qué caja se mueve más rápido.",
          "Incluso si los clientes tienen dudas sobre la velocidad del sistema, rápidamente se darán cuenta de que el proceso de pago es más rápido.",
        ],
      },
      {
        heading: "Minimiza los tiempos de espera",
        type: "list" as const,
        items: [
          "Pasar por las cajas de pago es hasta 3 veces más rápido, lo que se traduce en incrementos de productividad",
        ],
      },
      {
        heading: "Aumenta el número de clientes atendidos",
        type: "list" as const,
        items: [
          "Mayor eficiencia en la atención al cliente",
        ],
      },
      {
        heading: "Evita el estrés de la espera",
        type: "list" as const,
        items: [
          "Reduce el tiempo de espera percibido, aumentando la satisfacción del cliente",
        ],
      },
      {
        heading: "Optimiza la gestión de empleados",
        type: "list" as const,
        items: [
          "Permite adecuar el número de cajas abiertas según el tiempo de espera",
        ],
      },
      {
        heading: "Fomenta las compras impulsivas",
        type: "list" as const,
        items: [
          "Colocando productos a lo largo de la línea",
        ],
      },
      {
        heading: "Minimiza el riesgo de abandono",
        type: "list" as const,
        items: [
          "Los clientes tienen menos probabilidades de abandonar la fila",
        ],
      },
      {
        heading: "Es más justo para los clientes",
        type: "list" as const,
        items: [
          "Una fila no avanza más que otra",
        ],
      },
      {
        heading: "Mejores condiciones laborales",
        type: "list" as const,
        items: [
          "Menos estrés en el servicio al cliente para los empleados",
        ],
      },
      {
        heading: "Tiempos de espera más cortos",
        type: "list" as const,
        items: [
          "Puede parecer que una cola de una sola fila provoca una larga espera, pero en comparación con varias filas, la gente está en la fila única por un tiempo mucho más corto.",
        ],
      },
      {
        heading: "Reduce el jockey",
        type: "list" as const,
        items: [
          "La conmutación de líneas es frustrante tanto para los clientes como para las empresas. La cola única elimina esta necesidad de elegir.",
        ],
      },
      {
        heading: "Reduce el estrés",
        type: "list" as const,
        items: [
          "Elimina la necesidad de elegir la fila \"correcta\", aquella que irá más rápido.",
        ],
      },
      {
        heading: "Promueve la equidad",
        type: "list" as const,
        items: [
          "\"El primero que llega, el primero que será atendido\" es indiscutiblemente el camino más justo y democrático.",
        ],
      },
      {
        heading: "Reduce el sweethearting",
        type: "list" as const,
        items: [
          "El proceso de selección aleatoria reduce drásticamente el sweethearting, ya que no se puede elegir cajero.",
        ],
      },
      {
        heading: "Efecto disuasorio para el ladrón",
        type: "list" as const,
        items: [
          "Zona cerrada por barreras donde Seguridad puede observar, sin saber quién te va a atender.",
        ],
      },
      {
        heading: "Sin mantenimiento",
        type: "list" as const,
        items: [
          "No posee hardware extra como pulsadores ni llamadores externos",
        ],
      },
      {
        heading: "Escalable",
        type: "list" as const,
        items: [
          "Fácil ampliar y añadir nuevas cajas en cualquier momento",
        ],
      },
      {
        heading: "Sencillez",
        type: "list" as const,
        items: [
          "Instalación muy sencilla y aplicación fácil de usar",
        ],
      },
      {
        heading: "Igualdad",
        type: "list" as const,
        items: [
          "Todos los clientes son atendidos en igualdad de condiciones",
        ],
      },
      {
        heading: "Rapidez",
        type: "list" as const,
        items: [
          "El cliente percibe agilidad y rapidez en ser atendido",
        ],
      },
      {
        heading: "Personalización",
        type: "list" as const,
        items: [
          "Diseñado y desarrollado por nuestra empresa, lo adaptamos a sus necesidades",
        ],
      },
      {
        heading: "Servidor / Media Player",
        type: "list" as const,
        items: [
          "Se encarga de gestionar la lógica del sistema y de enviarle los datos al Monitor. Se encuentra instalado dentro del tótem.",
        ],
      },
      {
        heading: "Router",
        type: "list" as const,
        items: [
          "Facilita la comunicación entre las partes del sistema.",
        ],
      },
      {
        heading: "Software llamador",
        type: "list" as const,
        items: [
          "Sirve para llamar desde los puestos de atención (instalados en las PCs de las cajas). Licencias de uso de los llamadores web instalados en todas las PCs de las cajas (hasta 10 puestos de atención al público).",
        ],
      },
      {
        heading: "Tótem Digital o Monitor",
        type: "list" as const,
        items: [
          "Pantalla display de Cartelería Digital en el que los clientes verán los turnos desplegarse. Muestran a qué puesto de atención hay que acudir.",
        ],
      },
      {
        heading: "Sistema Flexible",
        type: "list" as const,
        items: [
          "Se trata de un sistema flexible que no necesita tickets y utiliza componentes estándar. Es fácil de instalar y fácil de configurar, con posibilidad de ser ampliado si se necesita.",
        ],
      },
      {
        heading: "Adaptable",
        type: "list" as const,
        items: [
          "El número de llamadores y visores de turno (tótems digitales o pantallas) es determinado con el cliente para adaptar el sistema a sus necesidades operativas.",
        ],
      },
      {
        heading: "Llamadores de Turnos",
        type: "list" as const,
        items: [
          "El sistema otorga la posibilidad de ser accedido a través de un navegador web que carga una URL (llamador web) desde cualquier tipo de dispositivo:Llamadores desde dispositivos móvilesTablets o CelularesLlamadores de escritorioPC de escritorio, mini PC o Notebook",
        ],
      },
      {
        heading: "Llamadores desde dispositivos móviles",
        type: "list" as const,
        items: [
          "Tablets o Celulares",
        ],
      },
      {
        heading: "Llamadores de escritorio",
        type: "list" as const,
        items: [
          "PC de escritorio, mini PC o Notebook",
        ],
      },
      {
        heading: "Requerimientos de Red",
        type: "list" as const,
        items: [
          "El único requerimiento del sistema es que las PCs de cada caja como también el tótem o monitor que compartan acceso a la misma red LAN (en forma cableada o wifi) y posean conexión a internet.",
          "Lo importante es que la conexión a internet sea estable, dado que el sistema funcionará a través de internet.",
        ],
      },
      {
        heading: "Requerimientos de Hardware",
        type: "list" as const,
        items: [
          "En cuanto a los requerimientos del Hardware de cada PC de las cajas realmente son muy básicos, dado que el sistema insume muy poco procesamiento y memoria.",
          "Por lo tanto, con PCs con especificaciones técnicas básicas el Sistema de Filas podrá ser ejecutado sin inconvenientes.",
        ],
      },
      {
        heading: "Nuestro Sistema Dispone de Gran Capacidad de Adaptación",
        type: "list" as const,
        items: [
          "📺Contenido PublicitarioMuestra imágenes y/o vídeos publicitarios o de comunicación institucional🎨Identidad CorporativaLos contenidos se adaptan a la identidad corporativa del cliente🏢Imagen de MarcaPermite diseñar el canal con la imagen de marca generando más branding",
        ],
      },
      {
        heading: "Contenido Publicitario",
        type: "list" as const,
        items: [
          "Muestra imágenes y/o vídeos publicitarios o de comunicación institucional",
        ],
      },
      {
        heading: "Identidad Corporativa",
        type: "list" as const,
        items: [
          "Los contenidos se adaptan a la identidad corporativa del cliente",
        ],
      },
      {
        heading: "Imagen de Marca",
        type: "list" as const,
        items: [
          "Permite diseñar el canal con la imagen de marca generando más branding",
        ],
      },
      {
        heading: "Desarrollo de Software de Gestión de Filas",
        type: "list" as const,
        items: [
          "Backend (Lógica del sistema): Desarrollo de módulo para usuario administrador",
          "Integración con los terminales interactivos en la red LAN",
          "Frontend (Interfaz de usuario para los administradores)",
        ],
      },
      {
        heading: "Creación de Canal",
        type: "list" as const,
        items: [
          "Personalización según la identidad de marca",
          "Diseño de Interfaz (UI/UX)",
          "Posibilidad de agregar Cartelería Digital",
        ],
      },
      {
        heading: "Servicios Incluidos",
        type: "list" as const,
        items: [
          "Configuraciones iniciales de todos los usuarios",
          "Derecho de uso ilimitado del sistema",
          "Provisión de Hardware necesario",
          "Instalación, Configuración local y puesta en marcha",
          "Capacitación del Administrador",
          "Soporte técnico",
        ],
      },
    ],
  },
  {
    slug: "c-control-videowalls",
    title: "C-Control",
    description: "El software C-Control es una solución profesional diseñada para visualizar contenidos y controlar videowalls permitiendo mostrar múltiples fuentes de video e información de forma centralizada. Diseñado para funcionar 24 x 7.",
    category: "software",
    images: ["/products/c-control-videowalls/01.png", "/products/c-control-videowalls/02.jpg", "/products/c-control-videowalls/03.png", "/products/c-control-videowalls/04.jpg"],
    features: [
      "Múltiples fuentes de información",
      "Trabajo colaborativo local o remoto",
      "Paneles de operación en tiempo real",
      "Operación 24/7 sin interrupciones",
    ],
    sections: [
      {
        heading: "¿Qué es C-Control?",
        type: "list" as const,
        items: [
          "El software C-Control es una solución profesional diseñada para visualizar contenidos y controlar videowalls permitiendo mostrar múltiples fuentes de video e información de forma centralizada. Diseñado para funcionar 24 x 7.",
          "Características Principales•Múltiples fuentes de información•Trabajo colaborativo local o remoto•Paneles de operación en tiempo real•Operación 24/7 sin interrupciones",
        ],
      },
      {
        heading: "Características Principales",
        type: "list" as const,
        items: [
          "Múltiples fuentes de información",
          "Trabajo colaborativo local o remoto",
          "Paneles de operación en tiempo real",
          "Operación 24/7 sin interrupciones",
        ],
      },
      {
        heading: "Múltiples Fuentes de Información",
        type: "list" as const,
        items: [
          "Envíe cualquier tipo de fuente a su videowall: cámaras IP, entradas HDMI, TV en directo, paneles de control, mapas GIS, páginas web, redes sociales o aplicaciones de escritorio.",
          "Fuentes de VideoCámaras IP, entradas HDMI, TV en directoFuentes de DatosPaneles de control, mapas GIS, páginas webFuentes DigitalesRedes sociales, aplicaciones de escritorio",
        ],
      },
      {
        heading: "Fuentes de Video",
        type: "list" as const,
        items: [
          "Cámaras IP, entradas HDMI, TV en directo",
        ],
      },
      {
        heading: "Fuentes de Datos",
        type: "list" as const,
        items: [
          "Paneles de control, mapas GIS, páginas web",
        ],
      },
      {
        heading: "Fuentes Digitales",
        type: "list" as const,
        items: [
          "Redes sociales, aplicaciones de escritorio",
        ],
      },
      {
        heading: "Trabajo Colaborativo Local o Remoto",
        type: "list" as const,
        items: [
          "Varios operadores pueden trabajar de manera colaborativa, asignándoles roles y permisos. Gestione el contenido incluso desde dispositivos móviles.",
          "Roles y PermisosAsignación de roles específicos para cada operadorAcceso MóvilGestión del contenido desde dispositivos móvilesTrabajo en EquipoColaboración simultánea de múltiples operadores",
        ],
      },
      {
        heading: "Roles y Permisos",
        type: "list" as const,
        items: [
          "Asignación de roles específicos para cada operador",
        ],
      },
      {
        heading: "Acceso Móvil",
        type: "list" as const,
        items: [
          "Gestión del contenido desde dispositivos móviles",
        ],
      },
      {
        heading: "Trabajo en Equipo",
        type: "list" as const,
        items: [
          "Colaboración simultánea de múltiples operadores",
        ],
      },
      {
        heading: "Paneles de Operación y Visualización en Tiempo Real",
        type: "list" as const,
        items: [
          "Divida la superficie del videowall en diferentes zonas y asigne el contenido que desea mostrar en cada uno de ellos.División en ZonasSuperficie del videowall dividida en áreas específicasAsignación de ContenidoContenido personalizado para cada zonaTiempo RealActualización instantánea de la información",
        ],
      },
      {
        heading: "División en Zonas",
        type: "list" as const,
        items: [
          "Superficie del videowall dividida en áreas específicas",
        ],
      },
      {
        heading: "Asignación de Contenido",
        type: "list" as const,
        items: [
          "Contenido personalizado para cada zona",
        ],
      },
      {
        heading: "Tiempo Real",
        type: "list" as const,
        items: [
          "Actualización instantánea de la información",
        ],
      },
      {
        heading: "Sitios de Implementación",
        type: "list" as const,
        items: [
          "🏢Centros de Control📺Salas de Monitoreo👥Salas de Reuniones🎓Salas de Formación🚨Salas de Crisis",
        ],
      },
      {
        heading: "Gestión Centralizada y Drag-&-Drop",
        type: "list" as const,
        items: [
          "Permite a los operadores arrastrar y soltar fuentes (video, cámaras, dashboards, entradas HDMI) directamente sobre el videowall desde una interfaz gráfica intuitiva.",
        ],
      },
      {
        heading: "Alta Compatibilidad de Hardware",
        type: "list" as const,
        items: [
          "Compatible con todo tipo de monitores y pantallas LED, operando 24/7 sin interrupciones.",
        ],
      },
      {
        heading: "Soporte para Múltiples Fuentes Simultáneas",
        type: "list" as const,
        items: [
          "Ideal para centros de monitoreo: capta y distribuye señales de plataformas como Milestone, Avigilon, cámaras IP, HDMI externas, etc.",
        ],
      },
      {
        heading: "Casos de Éxito a Nivel Regional",
        type: "list" as const,
        items: [
          "Implementado en proyectos como Toyota, Entel Chile, Gendarmería, Aduanas de Paraguay, y centros de seguridad en Argentina, con videowalls de 12 a 18 pantallas.",
        ],
      },
      {
        heading: "Operación Continua y Robusta",
        type: "list" as const,
        items: [
          "Diseñado para funcionamiento permanente sin fallos, con interfaz fácil de usar energizada para controladores profesionales.",
        ],
      },
      {
        heading: "Casos de Éxito Regionales",
        type: "list" as const,
        items: [
          "🚗ToyotaVideowall de 12-18 pantallas📡Entel ChileCentro de monitoreo👮GendarmeríaSistema de seguridad🏛️Aduanas de ParaguayControl fronterizo🇦🇷Centros de Seguridad ArgentinaMonitoreo nacional",
        ],
      },
      {
        heading: "Toyota",
        type: "list" as const,
        items: [
          "Videowall de 12-18 pantallas",
        ],
      },
      {
        heading: "Entel Chile",
        type: "list" as const,
        items: [
          "Centro de monitoreo",
        ],
      },
      {
        heading: "Gendarmería",
        type: "list" as const,
        items: [
          "Sistema de seguridad",
        ],
      },
      {
        heading: "Aduanas de Paraguay",
        type: "list" as const,
        items: [
          "Control fronterizo",
        ],
      },
      {
        heading: "Centros de Seguridad Argentina",
        type: "list" as const,
        items: [
          "Monitoreo nacional",
        ],
      },
      {
        heading: "Centros de Monitoreo",
        type: "list" as const,
        items: [
          "Capta y distribuye señales de plataformas como Milestone, Avigilon, cámaras IP, HDMI externas para vigilancia y seguridad.",
        ],
      },
      {
        heading: "Salas de Control",
        type: "list" as const,
        items: [
          "Gestión centralizada de múltiples fuentes de información para toma de decisiones en tiempo real.",
        ],
      },
      {
        heading: "Salas de Crisis",
        type: "list" as const,
        items: [
          "Visualización inmediata de información crítica para respuesta rápida en situaciones de emergencia.",
        ],
      },
      {
        heading: "Salas de Formación",
        type: "list" as const,
        items: [
          "Presentación de contenido educativo y capacitación con múltiples fuentes de información simultáneas.",
        ],
      },
    ],
  },
  {
    slug: "videoconferencias",
    title: "Salas de Videoconferencias",
    description: "Solución profesional para reuniones remotas de alta calidad",
    category: "software",
    images: ["/products/videoconferencias/01.jpg", "/products/videoconferencias/02.jpg"],
    features: [
      "Hardware especializado de alta calidad",
      "Software de colaboración avanzado",
      "Experiencia fluida y nítida",
      "Efectividad en reuniones remotas",
      "Mejor calidad de audio y video.",
      "Conexión más estable y segura.",
      "Experiencia sin fricciones para el usuario.",
      "Integración con calendarios y apps corporativas.",
      "Imagen profesional ante clientes y equipos remotos.",
    ],
    sections: [
      {
        heading: "¿Qué es una Sala de Videoconferencias Profesional?",
        type: "list" as const,
        items: [
          "Una sala de videoconferencias profesional requiere tanto hardware especializado como software de colaboración para garantizar una experiencia fluida, nítida y efectiva en reuniones remotas.",
          "Características Clave•Hardware especializado de alta calidad•Software de colaboración avanzado•Experiencia fluida y nítida•Efectividad en reuniones remotas",
        ],
      },
      {
        heading: "Características Clave",
        type: "list" as const,
        items: [
          "Hardware especializado de alta calidad",
          "Software de colaboración avanzado",
          "Experiencia fluida y nítida",
          "Efectividad en reuniones remotas",
        ],
      },
      {
        heading: "1. Cámara de videoconferencia (PTZ o fija)",
        type: "list" as const,
        items: [
          "PTZ: cámaras con movimiento pan-tilt-zoom (rotación, inclinación, zoom), controladas remotamente.Fijas gran angular: ideales para salas pequeñas o medianas.",
        ],
      },
      {
        heading: "2. Micrófonos y sistemas de audio",
        type: "list" as const,
        items: [
          "Micrófonos de mesa omnidireccionales, barras de sonido, o micrófonos de techo.Pueden tener cancelación de eco, supresión de ruido y detección de voz.",
        ],
      },
      {
        heading: "3. Pantallas / Monitores / Videowalls",
        type: "list" as const,
        items: [
          "Uno o más monitores grandes (LED, LCD o proyectores).En salas grandes: videowalls o pantallas duales (una para la videollamada y otra para compartir contenido).",
        ],
      },
      {
        heading: "4. PC o mini-PC de control / Codec de sala",
        type: "list" as const,
        items: [
          "Equipos que gestionan la llamada y el contenido compartido.Algunos sistemas usan un codec de hardware dedicado y otros funcionan con una PC con software. También existen sistemas \"todo en uno\".",
        ],
      },
      {
        heading: "5. Controlador / Panel táctil",
        type: "list" as const,
        items: [
          "Para iniciar o finalizar reuniones con un solo toque (ej: Logitech Tap).Permiten agendar, controlar volumen, compartir contenido y seleccionar fuente de video.",
        ],
      },
      {
        heading: "6. Red y conectividad",
        type: "list" as const,
        items: [
          "Conexión estable por Ethernet gigabit o Wi-Fi profesional.Algunas soluciones incorporan PoE (Power over Ethernet) para reducir cables.",
        ],
      },
      {
        heading: "Beneficios de una Sala Equipada Profesionalmente",
        type: "list" as const,
        items: [
          "Mejor calidad de audio y video.•Conexión más estable y segura.•Experiencia sin fricciones para el usuario.•Integración con calendarios y apps corporativas.•Imagen profesional ante clientes y equipos remotos.",
        ],
      },
      {
        heading: "Tipos de Salas de Videoconferencias",
        type: "list" as const,
        items: [
          "🏢Salas EjecutivasPara reuniones de alto nivel con clientes y directivos👥Salas de EquipoPara reuniones internas y colaboración diaria🎓Salas de CapacitaciónPara formaciones y presentaciones a grupos🏛️Salas de ConferenciasPara eventos y conferencias de gran escala",
        ],
      },
      {
        heading: "Salas Ejecutivas",
        type: "list" as const,
        items: [
          "Para reuniones de alto nivel con clientes y directivos",
        ],
      },
      {
        heading: "Salas de Equipo",
        type: "list" as const,
        items: [
          "Para reuniones internas y colaboración diaria",
        ],
      },
      {
        heading: "Salas de Capacitación",
        type: "list" as const,
        items: [
          "Para formaciones y presentaciones a grupos",
        ],
      },
      {
        heading: "Salas de Conferencias",
        type: "list" as const,
        items: [
          "Para eventos y conferencias de gran escala",
        ],
      },
      {
        heading: "Resolución de Video",
        type: "list" as const,
        items: [
          "Soporte para 4K UHD, Full HD 1080p y HD 720p según las necesidades",
        ],
      },
      {
        heading: "Audio de Alta Calidad",
        type: "list" as const,
        items: [
          "Cancelación de eco, supresión de ruido y detección automática de voz",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "Ethernet Gigabit, Wi-Fi 6, USB-C, HDMI y conectores estándar",
        ],
      },
      {
        heading: "Compatibilidad",
        type: "list" as const,
        items: [
          "Integración con Microsoft Teams, Zoom, Google Meet y otras plataformas",
        ],
      },
      {
        heading: "Control Intuitivo",
        type: "list" as const,
        items: [
          "Paneles táctiles y control remoto para gestión fácil de la sala",
        ],
      },
      {
        heading: "Escalabilidad",
        type: "list" as const,
        items: [
          "Solución modular que se adapta a diferentes tamaños de sala",
        ],
      },
      {
        heading: "Reuniones Ejecutivas",
        type: "list" as const,
        items: [
          "Presentaciones de alto nivel con clientes y socios estratégicos",
        ],
      },
      {
        heading: "Capacitación Corporativa",
        type: "list" as const,
        items: [
          "Formaciones y entrenamientos para equipos distribuidos",
        ],
      },
      {
        heading: "Colaboración de Equipos",
        type: "list" as const,
        items: [
          "Trabajo en equipo y reuniones de seguimiento de proyectos",
        ],
      },
      {
        heading: "Entrevistas Remotas",
        type: "list" as const,
        items: [
          "Procesos de selección y entrevistas con candidatos",
        ],
      },
      {
        heading: "Presentaciones de Productos",
        type: "list" as const,
        items: [
          "Lanzamientos y demostraciones de productos o servicios",
        ],
      },
      {
        heading: "Conferencias Técnicas",
        type: "list" as const,
        items: [
          "Sesiones técnicas y de soporte con equipos especializados",
        ],
      },
    ],
  },
  {
    slug: "totem-guardia-remoto",
    title: "Tótem de Guardia Remoto",
    description: "Sistema de vigilancia y control de acceso operado remotamente",
    category: "totems",
    images: ["/products/totem-guardia-remoto/01.jpg", "/products/totem-guardia-remoto/02.jpg", "/products/totem-guardia-remoto/03.jpg", "/products/totem-guardia-remoto/04.jpg"],
    features: [
      "Recibir visitantes o proveedores en un edificio",
      "Autorizar ingresos a un garaje o empresa",
      "Atender emergencias o pulsadores de pánico",
      "Vigilar accesos o zonas sensibles las 24 hs",
    ],
    sections: [
      {
        heading: "¿Qué es un Tótem de Guardia Remoto?",
        type: "list" as const,
        items: [
          "Un tótem de Guardia Remoto es un dispositivo interactivo con cámara, micrófono, altavoz y pantalla (o botones físicos) que permite comunicarse en tiempo real con un centro de monitoreo o vigilancia, sin necesidad de que haya un guardia físico en el lugar.",
        ],
      },
      {
        heading: "¿Para qué sirve?",
        type: "list" as const,
        items: [
          "El tótem cumple la función de un portero o guardia de seguridad, pero operado a distancia desde un centro de control:",
          "Recibir visitantes o proveedores en un edificio",
          "Autorizar ingresos a un garaje o empresa",
          "Atender emergencias o pulsadores de pánico",
          "Vigilar accesos o zonas sensibles las 24 hs",
        ],
      },
      {
        heading: "Descripción y Funcionalidades",
        type: "list" as const,
        items: [
          "Los tótems de Guardia Remoto permiten la vigilancia 24/7 desde un centro de monitoreo, combinando hardware y software especializado para mejorar la seguridad en edificios, parkings, consorcios y más:",
        ],
      },
      {
        heading: "Comunicación bidireccional",
        type: "list" as const,
        items: [
          "Incluyen cámara, micrófono y parlante para interactuar en vivo con un operario remoto.",
        ],
      },
      {
        heading: "Detección de intrusos y alertas",
        type: "list" as const,
        items: [
          "El software detecta actividad sospechosa y avisa al monitorista automáticamente.",
        ],
      },
      {
        heading: "Balanceo automático",
        type: "list" as const,
        items: [
          "Distribuye múltiples tótems entre guardias y permite monitoreo escalable sin necesidad de servidores adicionales.",
        ],
      },
      {
        heading: "Interacción directa y pulsadores",
        type: "list" as const,
        items: [
          "Botones de llamada o pánico están integrados para atención inmediata o silenciosa.",
        ],
      },
      {
        heading: "Conectividad robusta",
        type: "list" as const,
        items: [
          "Conexión por cable UTP/Gigabit o Wi-Fi para transmisión fluida sin caídas.",
        ],
      },
      {
        heading: "Gabinete y componentes",
        type: "list" as const,
        items: [
          "Mini-PC, cámara Full HD, refrigeración integrada y carcasa metálica o MDF con cerradura.",
        ],
      },
      {
        heading: "Casos de Uso Comunes",
        type: "list" as const,
        items: [
          "🏢Edificios Residenciales y ConsorciosComo alternativa al portero presencial, permitiendo control de acceso y emergencia.🚗Estacionamientos y ParkingsControl de ingreso/salida con monitoreo remoto de guardias.🏭Oficinas, Fábricas e InstitucionesVigilancia de puntos estratégicos sin presencia física.",
        ],
      },
      {
        heading: "Edificios Residenciales y Consorcios",
        type: "list" as const,
        items: [
          "Como alternativa al portero presencial, permitiendo control de acceso y emergencia.",
        ],
      },
      {
        heading: "Estacionamientos y Parkings",
        type: "list" as const,
        items: [
          "Control de ingreso/salida con monitoreo remoto de guardias.",
        ],
      },
      {
        heading: "Oficinas, Fábricas e Instituciones",
        type: "list" as const,
        items: [
          "Vigilancia de puntos estratégicos sin presencia física.",
        ],
      },
      {
        heading: "¿Necesitas un Tótem de Guardia Remoto?",
        type: "list" as const,
        items: [
          "Mejora la seguridad de tu edificio con nuestra solución de vigilancia remota",
          "Solicitar CotizaciónConocer Más",
        ],
      },
    ],
  },
  {
    slug: "totem-velocidad-lpr",
    title: "Tótem Medidor de Velocidad y LPR",
    description: "Control vehicular inteligente con medición de velocidad y reconocimiento de patentes",
    category: "totems",
    images: ["/products/totem-velocidad-lpr/01.jpg", "/products/totem-velocidad-lpr/02.jpg", "/products/totem-velocidad-lpr/03.jpg", "/products/totem-velocidad-lpr/04.jpg", "/products/totem-velocidad-lpr/05.jpg", "/products/totem-velocidad-lpr/06.jpg"],
    features: [
      "Utiliza sensores de radar doppler o láser para detectar la velocidad",
      "Muestra la velocidad en pantalla LED en tiempo real",
      "Indica si se superó el límite con mensajes de alerta",
      "Usa cámara HD o infrarroja para reconocimiento óptico de caracteres",
      "Detecta la patente del vehículo automáticamente",
      "Compara con base de datos para verificar autorización",
      "1El vehículo pasa frente al tótem",
      "2El sensor detecta la velocidad",
      "3La cámara captura la patente del auto",
      "4La información se almacena y/o se muestra en pantalla",
      "Alertar si hay exceso de velocidad",
      "Emitir mensajes personalizados",
      "Registrar eventos en base de datos",
      "Control de acceso automático",
      "Sistema que induce la autorregulación de velocidad",
      "Altamente disuasivo y gran visibilidad",
      "Cartel efectivo para reducir velocidad",
      "Totalmente autónomo",
      "Límite de velocidad ajustable",
      "Parpadea para anunciar exceso de velocidad",
      "Triple fila LED de alta luminosidad",
      "Panel numérico: números de 15 cm de ancho y 30 cm de alto",
      "Rango de detección: 35-45 m",
      "Rango de velocidades: 5-99 km/h",
    ],
    sections: [
      {
        heading: "¿Qué es un Tótem Medidor de Velocidad y Lector de Patentes?",
        type: "list" as const,
        items: [
          "Un tótem medidor de velocidad de vehículos y lector de patentes es un dispositivo electrónico instalado en la vía pública o en accesos vehiculares, que combina dos funciones principales:",
        ],
      },
      {
        heading: "1. Mide la velocidad de los vehículos",
        type: "list" as const,
        items: [
          "Utiliza sensores de radar doppler o láser para detectar la velocidad",
          "Muestra la velocidad en pantalla LED en tiempo real",
          "Indica si se superó el límite con mensajes de alerta",
        ],
      },
      {
        heading: "2. Lee y registra las patentes (ALPR/LPR)",
        type: "list" as const,
        items: [
          "Usa cámara HD o infrarroja para reconocimiento óptico de caracteres",
          "Detecta la patente del vehículo automáticamente",
          "Compara con base de datos para verificar autorización",
        ],
      },
      {
        heading: "¿Cómo Funciona?",
        type: "list" as const,
        items: [
          "Proceso de Detección1El vehículo pasa frente al tótem2El sensor detecta la velocidad3La cámara captura la patente del auto4La información se almacena y/o se muestra en pantallaCapacidades del Sistema• Alertar si hay exceso de velocidad• Emitir mensajes personalizados• Registrar eventos en base de datos• Control de acceso automático",
        ],
      },
      {
        heading: "Proceso de Detección",
        type: "list" as const,
        items: [
          "1El vehículo pasa frente al tótem",
          "2El sensor detecta la velocidad",
          "3La cámara captura la patente del auto",
          "4La información se almacena y/o se muestra en pantalla",
        ],
      },
      {
        heading: "Capacidades del Sistema",
        type: "list" as const,
        items: [
          "Alertar si hay exceso de velocidad",
          "Emitir mensajes personalizados",
          "Registrar eventos en base de datos",
          "Control de acceso automático",
        ],
      },
      {
        heading: "¿Dónde se Usa?",
        type: "list" as const,
        items: [
          "🏛️MunicipiosControl vehicular, prevención de accidentes y concientización vial🏘️Barrios CerradosControlar velocidad y registrar quién entra y sale🏭Parques IndustrialesGarantizar seguridad vehicular interna🏫EscuelasReducir velocidades cercanas a los peatones",
        ],
      },
      {
        heading: "Municipios",
        type: "list" as const,
        items: [
          "Control vehicular, prevención de accidentes y concientización vial",
        ],
      },
      {
        heading: "Barrios Cerrados",
        type: "list" as const,
        items: [
          "Controlar velocidad y registrar quién entra y sale",
        ],
      },
      {
        heading: "Parques Industriales",
        type: "list" as const,
        items: [
          "Garantizar seguridad vehicular interna",
        ],
      },
      {
        heading: "Escuelas",
        type: "list" as const,
        items: [
          "Reducir velocidades cercanas a los peatones",
        ],
      },
      {
        heading: "Beneficios",
        type: "list" as const,
        items: [
          "VentajaExplicaciónMejora la seguridad vialDisuade el exceso de velocidadControl preciso del tránsitoPermite analizar quién circula, a qué hora y a qué velocidadRegistro automatizadoIdeal para accesos, trazabilidad o denunciasDatos útilesPara estadísticas, análisis de tráfico y toma de decisiones públicas",
        ],
      },
      {
        heading: "Características Principales",
        type: "list" as const,
        items: [
          "Sistema que induce la autorregulación de velocidad",
          "Altamente disuasivo y gran visibilidad",
          "Cartel efectivo para reducir velocidad",
          "Totalmente autónomo",
          "Límite de velocidad ajustable",
          "Parpadea para anunciar exceso de velocidad",
        ],
      },
      {
        heading: "Especificaciones Técnicas",
        type: "list" as const,
        items: [
          "Triple fila LED de alta luminosidad",
          "Panel numérico: números de 15 cm de ancho y 30 cm de alto",
          "Rango de detección: 35-45 m",
          "Rango de velocidades: 5-99 km/h",
          "Resolución: 1 km/h",
        ],
      },
      {
        heading: "Funcionalidades LPR",
        type: "list" as const,
        items: [
          "Reconocimiento automático de patentes",
          "Comparación con base de datos en tiempo real",
          "Control de acceso automático",
          "Registro de vehículos autorizados/no autorizados",
          "Mensajes personalizados según el estado",
        ],
      },
      {
        heading: "Alimentación",
        type: "list" as const,
        items: [
          "Suministro permanente 220V",
          "Opción UPS para servicio ininterrumpido",
          "Suministro parcial de 220V (farolas nocturnas)",
          "Sistema de alimentación solar",
        ],
      },
      {
        heading: "Instalación",
        type: "list" as const,
        items: [
          "Diseñado para cumplir amplia variedad de demandas",
          "Firmware interno personalizable",
          "Fácil instalación",
        ],
      },
      {
        heading: "¿Necesitas un Tótem de Velocidad y LPR?",
        type: "list" as const,
        items: [
          "Mejora el control vehicular y la seguridad con nuestra solución inteligente",
          "Solicitar CotizaciónConocer Más",
        ],
      },
    ],
  },
  {
    slug: "totem-cargador-celulares",
    title: "Tótem Digital con Cargador de Celulares y Notebooks",
    description: "Solución dos en uno: cartelería digital y estación de carga para dispositivos móviles",
    category: "totems",
    images: ["/products/totem-cargador-celulares/01.jpg", "/products/totem-cargador-celulares/02.jpg", "/products/totem-cargador-celulares/03.jpg", "/products/totem-cargador-celulares/04.jpg", "/products/totem-cargador-celulares/05.jpg", "/products/totem-cargador-celulares/06.jpg", "/products/totem-cargador-celulares/07.jpg"],
    features: [
      "Muestra videos, imágenes, animaciones o mensajes informativos",
      "Se puede programar por horario o actualizar en tiempo real vía Wi-Fi o Ethernet",
      "Ideal para promocionar productos, servicios, eventos o dar indicaciones",
      "Incluye puertos USB, USB-C, tomas eléctricas o carga inalámbrica",
      "Algunos modelos tienen lockers o compartimentos seguros con clave o código QR",
      "Apto para celulares, notebooks, tablets y otros dispositivos móviles",
    ],
    sections: [
      {
        heading: "¿Qué es un Tótem de Cartelería Digital con Cargador?",
        type: "list" as const,
        items: [
          "Un Tótem de cartelería digital con cargador de celulares y notebooks es un tótem que combina pantalla publicitaria digital (Digital Signage) con puertos de carga para dispositivos electrónicos.",
          "Es una solución dos en uno que brinda información o publicidad mientras permite a los usuarios cargar sus celulares, tablets o notebooks de forma gratuita o segura.",
        ],
      },
      {
        heading: "¿Dónde se Usan?",
        type: "list" as const,
        items: [
          "🛍️Shoppings y Centros Comerciales✈️Aeropuertos, Estaciones y Terminales🎪Ferias, Congresos y Eventos Corporativos🎓Universidades, Hospitales y Gimnasios🏨Hoteles, Bares, Cafés o Coworkings🏛️Espacios Públicos (Gobierno, Plazas Tech, Smart Cities)",
        ],
      },
      {
        heading: "Ejemplo Real",
        type: "list" as const,
        items: [
          "Situación TípicaImaginá que estás en un aeropuerto y tu celular se queda sin batería. Te acercás a un tótem que tiene una pantalla con promociones de un restaurante local, y justo debajo tiene puertos USB donde podés cargar tu teléfono.Mientras esperás, ves un video institucional, una oferta o incluso el pronóstico del clima.",
        ],
      },
      {
        heading: "Situación Típica",
        type: "list" as const,
        items: [
          "Imaginá que estás en un aeropuerto y tu celular se queda sin batería. Te acercás a un tótem que tiene una pantalla con promociones de un restaurante local, y justo debajo tiene puertos USB donde podés cargar tu teléfono.",
          "Mientras esperás, ves un video institucional, una oferta o incluso el pronóstico del clima.",
        ],
      },
      {
        heading: "Pantalla y Sistema",
        type: "list" as const,
        items: [
          "Pantalla táctil o de información publicitaria (21″ a 55″), usualmente con sistema Android o Android/Windows.",
        ],
      },
      {
        heading: "Puertos de Carga",
        type: "list" as const,
        items: [
          "Múltiples puertos de carga: USB, USB-C, enchufes Schuko, e incluso carga inalámbrica integrada.",
        ],
      },
      {
        heading: "Seguridad",
        type: "list" as const,
        items: [
          "Compartimentos cerrados o cables retráctiles para evitar enredos y asegurar los dispositivos.",
        ],
      },
      {
        heading: "Diseño Robusto",
        type: "list" as const,
        items: [
          "Carcasa metálica/vidrio templado, cerraduras con PIN digital, para uso continuo 24/7.",
        ],
      },
      {
        heading: "Conectividad",
        type: "list" as const,
        items: [
          "Wi-Fi/Ethernet, actualizaciones remotas, agenda de encendido/apagado, división de pantalla para publicidad y carga.",
        ],
      },
      {
        heading: "Marketing",
        type: "list" as const,
        items: [
          "Superficie personalizable para branding y reproducción de videos o imágenes publicitarias mientras los dispositivos cargan.",
        ],
      },
      {
        heading: "Servicio Conveniente",
        type: "list" as const,
        items: [
          "Tus clientes pueden recargar sus dispositivos mientras consumen tu contenido publicitario",
        ],
      },
      {
        heading: "Mayor Tiempo de Atención",
        type: "list" as const,
        items: [
          "La necesidad de carga concentra la atención en la señalética visual",
        ],
      },
      {
        heading: "Generación de Datos",
        type: "list" as const,
        items: [
          "Permite incorporar campañas, promociones, encuestas o informes",
        ],
      },
      {
        heading: "Múltiples Entornos",
        type: "list" as const,
        items: [
          "Ideal para aeropuertos, conferencias, gimnasios, shoppings, coworking o eventos",
        ],
      },
      {
        heading: "¿Necesitas un Tótem con Cargador?",
        type: "list" as const,
        items: [
          "Combina publicidad digital con servicio de carga para maximizar el engagement",
          "Solicitar CotizaciónConocer Más",
        ],
      },
    ],
  },
  {
    slug: "lustrador-calzado",
    title: "Lustrador de Calzado Automático",
    description: "Cartelería Digital con un servicio extra para el público",
    category: "totems",
    images: ["/products/lustrador-calzado/01.jpg", "/products/lustrador-calzado/02.jpg", "/products/lustrador-calzado/03.jpg", "/products/lustrador-calzado/04.jpg", "/products/lustrador-calzado/05.jpg", "/products/lustrador-calzado/06.jpg"],
    features: [
      "Pantalla digital Android de 43\"",
      "Contenido dinámico y actualizable",
      "Publicidad interactiva",
      "Gestión remota de contenidos",
      "Placa fija con backlight: 890 x 590 mm",
      "Iluminación LED de alta calidad",
      "Diseño personalizable",
      "Bajo mantenimiento",
      "Sensor automático de detección",
      "Dosificación precisa de crema",
      "Resultado óptimo de lustrado",
      "Funcionamiento sin intervención manual",
    ],
    sections: [
      {
        heading: "Producto Innovador y Moderno",
        type: "list" as const,
        items: [
          "Un lustrador de calzado automático que combina cartelería digital con un servicio único y exclusivo para el público.",
          "Producto innovador, moderno y exclusivo•Servicio de lustrado de calzados formales y deportivos•Lustrado rápido, fácil e higiénico•Fácil manejo",
        ],
      },
      {
        heading: "Dos Versiones para Comunicar y Publicitar",
        type: "list" as const,
        items: [
          "📺Con Pantalla Digital Android• Pantalla digital Android de 43\"• Contenido dinámico y actualizable• Publicidad interactiva• Gestión remota de contenidos💡Con Placa Fija con Backlight• Placa fija con backlight: 890 x 590 mm• Iluminación LED de alta calidad• Diseño personalizable• Bajo mantenimiento",
        ],
      },
      {
        heading: "¿Dónde se Puede Ubicar?",
        type: "list" as const,
        items: [
          "Publicidad \"No tradicional\" que puede ubicarse en múltiples espacios de alto tráfico:•Lobbys de hoteles•Restaurantes y bares•Conferencias y eventos•Cines•Shoppings•Pasillos•Oficinas•Centros comerciales",
        ],
      },
      {
        heading: "Servicio Único de Lustrado",
        type: "list" as const,
        items: [
          "Servicio único de lustrado de calzado, formales o deportivos, a través de un novedoso sistema de cepillos que, en un primer paso limpian para luego dar brillo a los calzados a través de tintas especiales.",
          "1El usuario coloca el pie en la alfombra2Se activan automáticamente los rodillos3Los cepillos limpian el calzado4Se aplica crema especial para el brillo",
        ],
      },
      {
        heading: "Características Técnicas",
        type: "list" as const,
        items: [
          "Dimensiones720 x 300 x 1500 mmMaterialHierro cubierto con pintura bicapaColorPlateadoPeso55 kgConsumo170 WActivaciónSe activan una vez pisada la alfombra",
        ],
      },
      {
        heading: "Dimensiones",
        type: "list" as const,
        items: [
          "720 x 300 x 1500 mm",
        ],
      },
      {
        heading: "Material",
        type: "list" as const,
        items: [
          "Hierro cubierto con pintura bicapa",
        ],
      },
      {
        heading: "Activación",
        type: "list" as const,
        items: [
          "Se activan una vez pisada la alfombra",
        ],
      },
      {
        heading: "Dispenser Inteligente",
        type: "list" as const,
        items: [
          "Sistema Automático de CremaPosee un dispenser con sensor para un óptimo resultado de lustrado. El sistema detecta automáticamente cuando aplicar la crema especial para lograr el mejor brillo.• Sensor automático de detección• Dosificación precisa de crema• Resultado óptimo de lustrado• Funcionamiento sin intervención manual",
        ],
      },
      {
        heading: "Sistema Automático de Crema",
        type: "list" as const,
        items: [
          "Posee un dispenser con sensor para un óptimo resultado de lustrado. El sistema detecta automáticamente cuando aplicar la crema especial para lograr el mejor brillo.",
          "Sensor automático de detección",
          "Dosificación precisa de crema",
          "Resultado óptimo de lustrado",
          "Funcionamiento sin intervención manual",
        ],
      },
      {
        heading: "Beneficios Principales",
        type: "list" as const,
        items: [
          "⚡Rápido y FácilLustrado automático en segundos🧽HigiénicoSistema de limpieza automático📺Publicidad EfectivaCapta atención mientras se usa🎯Servicio ÚnicoDiferenciación en el mercado",
        ],
      },
      {
        heading: "Rápido y Fácil",
        type: "list" as const,
        items: [
          "Lustrado automático en segundos",
        ],
      },
      {
        heading: "Higiénico",
        type: "list" as const,
        items: [
          "Sistema de limpieza automático",
        ],
      },
      {
        heading: "Publicidad Efectiva",
        type: "list" as const,
        items: [
          "Capta atención mientras se usa",
        ],
      },
      {
        heading: "Servicio Único",
        type: "list" as const,
        items: [
          "Diferenciación en el mercado",
        ],
      },
      {
        heading: "¿Necesitas un Lustrador de Calzado Automático?",
        type: "list" as const,
        items: [
          "Combina publicidad digital con un servicio único para tu público",
          "Solicitar CotizaciónConocer Más",
        ],
      },
    ],
  },
];
