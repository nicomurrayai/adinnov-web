export const site = {
  name: "Adinnov",
  tagline: "Cartelería digital",
  description:
    "Integramos tecnología para estar a la vanguardia digital. Fabricamos tótems, pantallas LED, kioscos y software para instituciones y empresas.",
  url: "https://adinnov.com.ar",
  email: "info@adinnov.com.ar",
  phones: [
    { label: "15-5478-9803", href: "tel:+541154789803", display: "11 5478-9803" },
    { label: "11 4190-6432", href: "tel:+541141906432", display: "11 4190-6432" },
  ],
  whatsapp: [
    {
      label: "WhatsApp",
      href: "https://wa.me/541154789803",
      number: "541154789803",
    },
    {
      label: "WhatsApp alt.",
      href: "https://wa.me/541141906432",
      number: "541141906432",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/adinnovcarteleriadigital",
    linkedin: "https://www.linkedin.com/company/adinnov-digital-signage/",
    instagram: "https://www.instagram.com/adinnov.soluciones/",
    youtube: "https://www.youtube.com/@adinnovcarteleriadigital4786",
  },
  partners: [
    { name: "AVIXA", href: "https://www.avixa.org/es", image: "/brand/avixa.png" },
    { name: "IoT Innov", href: "https://iotinnov.com.ar/", image: "/brand/iot-innov.png" },
    { name: "Tech Innov", href: "https://techinnov.com.ar/", image: "/brand/tech-innov.png" },
  ],
  home: {
    eyebrow: "Nuestras soluciones",
    headline: "Integramos tecnología para estar a la vanguardia digital",
    supporting:
      "Fabricación propia de tótems, pantallas LED, kioscos y software. Venta, alquiler e instalación para empresas e instituciones en toda Argentina.",
    ctaPrimary: { label: "Ver productos", href: "/productos" },
    ctaSecondary: { label: "Contactar", href: "/contacto" },
  },
  about: {
    title: "Nosotros",
    paragraphs: [
      "Somos una empresa con base en la Ciudad de Buenos Aires con más de 10 años de experiencia brindando productos y servicios de Cartelería Digital en instituciones y empresas de todo tipo y tamaño.",
      "Nos especializamos en la fabricación de Tótems Digitales e Interactivos (con pantalla táctil), teniendo un modelo único en el mercado diseñado por nosotros mismos el cual posee patente del INPI. También fabricamos Terminales y kioscos Interactivos, POS All-in-one, Atriles Digitales y mini Tótems Digitales.",
      "En los últimos años hemos incorporado todo tipo de productos LED desde pantallas de gran formato, tanto Outdoor para vía pública como también Indoor para empresas, locales comerciales e instituciones.",
      "Dado que somos fabricantes nuestros productos están destinados tanto a la venta como también al alquiler para eventos de todo tipo. Participamos de exposiciones, conferencias y eventos corporativos en los que damos una solución integral, desde la logística y entrega de los equipos, instalación y puesta en marcha dejando los productos funcionando.",
      "Nuestros clientes son muy variados y de todo tipo de tamaños: pequeños emprendedores, medianas empresas y grandes multinacionales. También somos proveedores de organismos del Estado como Ministerios y Municipios.",
      "Contamos con un equipo de desarrollo de software destinado a satisfacer las necesidades de nuestros clientes. En especial nos especializamos en desarrollar apps y juegos interactivos para los tótems y terminales.",
      "Tal como nuestro nombre muestra poseemos una profunda vocación de innovar en nuevos productos y soluciones al servicio del marketing, la publicidad y la comunicación.",
    ],
  },
  customWork: {
    title: "Soluciones a medida",
    description:
      "Fabricamos equipamiento según las necesidades específicas de nuestros clientes.",
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
    { label: "Soluciones", href: "/#verticales" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Trabajos", href: "/trabajos" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;
