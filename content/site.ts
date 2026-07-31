export const productFamilies = [
  {
    id: "totems-terminales",
    index: "01",
    title: "Tótems y terminales",
    shortTitle: "Tótems",
    description:
      "Equipos digitales e interactivos de fabricación propia para comunicar, orientar y activar experiencias.",
    href: "/productos?familia=totems-terminales",
    image: "/navigation/product-families/totems-terminales.webp",
    homeImage: "/home/product-families/totems-terminales.webp",
  },
  {
    id: "pantallas-profesionales",
    index: "02",
    title: "Pantallas profesionales",
    shortTitle: "Pantallas",
    description:
      "Displays profesionales, videowalls y formatos especiales para espacios corporativos y comerciales.",
    href: "/productos?familia=pantallas-profesionales",
    image: "/navigation/product-families/pantallas-profesionales.webp",
    homeImage: "/home/product-families/pantallas-profesionales.webp",
  },
  {
    id: "led",
    index: "03",
    title: "LED",
    shortTitle: "LED",
    description:
      "Pantallas, posters y piezas LED indoor u outdoor configuradas para cada escala y entorno.",
    href: "/productos?familia=led",
    image: "/navigation/product-families/led.webp",
    homeImage: "/home/product-families/led.webp",
  },
  {
    id: "pizarras-interaccion",
    index: "04",
    title: "Pizarras e interacción",
    shortTitle: "Interacción",
    description:
      "Superficies táctiles para presentar, colaborar y trabajar con contenido en tiempo real.",
    href: "/productos?familia=pizarras-interaccion",
    image: "/navigation/product-families/pizarras-interaccion.webp",
    homeImage: "/home/product-families/pizarras-interaccion.webp",
  },
  {
    id: "kioscos-autogestion",
    index: "05",
    title: "Kioscos y autogestión",
    shortTitle: "Autogestión",
    description:
      "Terminales para pedidos, pagos, turnos y atención autónoma en puntos de alto tránsito.",
    href: "/productos?familia=kioscos-autogestion",
    image: "/navigation/product-families/kioscos-autogestion.webp",
    homeImage: "/home/product-families/kioscos-autogestion.webp",
  },
  {
    id: "software-servicios",
    index: "06",
    title: "Software y servicios",
    shortTitle: "Software",
    description:
      "Gestión de contenidos, aplicaciones interactivas e integración para que cada equipo cumpla su objetivo.",
    href: "/productos?familia=software-servicios",
    image: "/navigation/product-families/software-servicios.webp",
    homeImage: "/home/product-families/software-servicios.webp",
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Entender el espacio",
    description:
      "Relevamos el entorno, la audiencia y el objetivo de comunicación antes de definir un equipo.",
  },
  {
    index: "02",
    title: "Diseñar la solución",
    description:
      "Combinamos hardware, estructura, software y contenidos en una propuesta adaptada al proyecto.",
  },
  {
    index: "03",
    title: "Implementar",
    description:
      "Coordinamos fabricación, logística, instalación y puesta en marcha para dejar la solución operativa.",
  },
] as const;

export const site = {
  name: "Adinnov",
  tagline: "Cartelería digital",
  description:
    "Soluciones de cartelería digital, interacción y autogestión para empresas e instituciones. Venta, alquiler, fabricación e instalación en Argentina.",
  url: "https://adinnov.com.ar",
  email: "info@adinnov.com.ar",
  address: "Membrillar 74, Ciudad de Buenos Aires",
  phones: [
    {
      label: "Móvil",
      href: "tel:+541154789803",
      display: "11 5478-9803",
    },
    {
      label: "Línea secundaria",
      href: "tel:+541141906432",
      display: "11 4190-6432",
    },
  ],
  whatsapp: [
    {
      label: "WhatsApp",
      href: "https://wa.me/5491154789803",
      number: "5491154789803",
      display: "11 5478-9803",
    },
    {
      label: "WhatsApp alternativo",
      href: "https://wa.me/541141906432",
      number: "541141906432",
      display: "11 4190-6432",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/adinnovcarteleriadigital",
    linkedin: "https://www.linkedin.com/company/adinnov-digital-signage/",
    instagram: "https://www.instagram.com/adinnov.soluciones/",
    youtube: "https://www.youtube.com/@adinnovcarteleriadigital4786",
  },
  partners: [
    { name: "Samsung", image: "/partners/samsung.png" },
    { name: "LG Business Solutions", image: "/partners/lg-business-solutions.png" },
    { name: "i3-Technologies", image: "/partners/i3-technologies.png" },
    { name: "NovaStar", image: "/partners/novastar.png" },
    { name: "Mean Well", image: "/partners/meanwell.png" },
    { name: "Philips", image: "/partners/philips.png" },
    { name: "ViewSonic", image: "/partners/viewsonic.png" },
    { name: "Logitech", image: "/partners/logitech.png" },
    { name: "Elo", image: "/partners/elo.jpg" },
    { name: "Dahua", image: "/partners/dahua.png" },
    { name: "Hikvision", image: "/partners/hikvision.png" },
    { name: "Intel", image: "/partners/intel.png" },
  ],
  home: {
    eyebrow: "Cartelería digital · Buenos Aires",
    headline: "Tecnología que convierte espacios en experiencias.",
    supporting:
      "Fabricamos, alquilamos y vendemos tótems, pantallas LED, kioscos, sistemas interactivos y software para proyectos corporativos en toda la Argentina.",
    ctaPrimary: { label: "Cotizar un proyecto", href: "/contacto?intent=venta" },
    ctaSecondary: { label: "Explorar Productos", href: "/productos" },
  },
  about: {
    title: "Tecnología aplicada a espacios reales",
    lead:
      "Somos una empresa de la Ciudad de Buenos Aires especializada en cartelería digital para instituciones y empresas de distintas escalas.",
    paragraphs: [
      "Desde hace más de diez años desarrollamos soluciones para comunicar, informar y crear experiencias interactivas. Nos especializamos en la fabricación de tótems digitales e interactivos, terminales, kioscos, atriles y formatos a medida.",
      "También integramos pantallas profesionales y tecnología LED indoor y outdoor para empresas, locales comerciales, instituciones y vía pública.",
      "La fabricación propia nos permite trabajar tanto en venta como en alquiler. Para eventos coordinamos la logística, la instalación y la puesta en marcha de los equipos.",
      "Nuestro equipo de software desarrolla aplicaciones, juegos interactivos y sistemas de gestión de contenidos para acompañar el hardware con una experiencia completa.",
    ],
    capabilities: [
      "Fabricación de equipamiento",
      "Integración audiovisual",
      "Desarrollo de software",
      "Alquiler para eventos",
      "Instalación y puesta en marcha",
      "Soluciones personalizadas",
    ],
  },
  customWork: {
    title: "Cuando el producto estándar no alcanza",
    description:
      "Diseñamos y fabricamos equipamiento a medida según las necesidades físicas, técnicas y visuales de cada proyecto.",
  },
  contact: {
    title: "Contacto",
    subtitle: "¿En qué podemos ayudarte?",
    distributor: "Sé nuestro distribuidor",
    catalogCta: "Solicitar catálogo",
  },
  nav: [
    { label: "Productos", href: "/productos" },
    { label: "Alquileres", href: "/alquileres" },
    { label: "Casos de éxito", href: "/trabajos" },
    { label: "Clientes", href: "/clientes" },
    { label: "Nosotros", href: "/nosotros" },
  ],
} as const;
