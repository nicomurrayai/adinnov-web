export type MegaMenuItem = {
  label: string;
  href: string;
};

export type MegaMenuColumn = {
  title: string;
  href?: string;
  items: MegaMenuItem[];
};

export const megaMenuColumns: MegaMenuColumn[] = [
  {
    title: "Productos",
    href: "/productos",
    items: [
      { label: "Totem Digital", href: "/productos/totem-digital" },
      { label: "Totem Interactivo", href: "/productos/totem-interactivo" },
      {
        label: "Pantallas y pizarras interactivas",
        href: "/productos/pantallas-y-pizarras-interactivas",
      },
      {
        label: "Pizarra interactiva i3Touch E-One",
        href: "/productos/pizarra-interactiva-i3touch-e-one",
      },
      {
        label: "Pizarra interactiva i3Touch Ultra 105",
        href: "/productos/pizarra-interactiva-i3touch-ultra-105",
      },
      {
        label: "Terminales interactivas (pantallas pequeñas)",
        href: "/productos/terminales-interactivas-pantallas-pequenas",
      },
      {
        label: "Terminales interactivas (pantallas grandes)",
        href: "/productos/terminales-interactivas-pantallas-grandes",
      },
      {
        label: 'Pantalla Dual SOLUM 49" - 55"',
        href: "/productos/pantalla-dual-solum-49-55",
      },
      {
        label: "BAR Display - Pantallas Stretch SOLUM",
        href: "/productos/bar-display-pantallas-stretch-solum",
      },
      {
        label: "Kiosco de autogestión 3NStar",
        href: "/productos/kiosco-autogestion-3nstar",
      },
      {
        label: "Kiosco de autogestión para Gastronomía",
        href: "/productos/kiosco-autogestion-gastronomia",
      },
      { label: "Mini Tótem Digital", href: "/productos/mini-totem-digital" },
      { label: "Video Walls", href: "/productos/video-walls" },
      { label: "Atril Digital", href: "/productos/atril-digital" },
      {
        label: "Terminal Interactiva para Sillas de Ruedas",
        href: "/productos/terminal-interactiva-sillas-ruedas",
      },
      { label: "Mesa interactiva", href: "/productos/mesa-interactiva" },
    ],
  },
  {
    title: "Samsung",
    href: "/productos?categoria=pantallas",
    items: [
      {
        label: "Samsung Business TV",
        href: "/productos/samsung-business-tv",
      },
      {
        label: "Monitores profesionales Stand alone",
        href: "/productos/monitores-stand-alone",
      },
      {
        label: "Pantalla Dual (3000-1000 nits)",
        href: "/productos/pantalla-dual-3000-1000-nits",
      },
      {
        label: "Kiosco de autogestión",
        href: "/productos/kiosco-autogestion-samsung",
      },
      {
        label: "Vidrieras digitales - Semi outdoor",
        href: "/productos/vidrieras-digitales",
      },
      { label: "Videowalls", href: "/productos/videowalls-samsung" },
      { label: "FLIP", href: "/productos/flip" },
      {
        label: "Pizarra Interactiva Android E-Board WAD",
        href: "/productos/pizarra-android-eboard-wad",
      },
      { label: "Pantallas Touch", href: "/productos/pantallas-touch" },
      {
        label: 'Pantalla Gran formato 98" 4K',
        href: "/productos/pantalla-98-4k",
      },
      {
        label: 'Pantalla Gran formato 105" 5K',
        href: "/productos/pantalla-105-5k",
      },
    ],
  },
  {
    title: "Soluciones LED",
    href: "/productos?categoria=led",
    items: [
      { label: "Pantallas de LED", href: "/productos/pantallas-led" },
      { label: "POSTER LED", href: "/productos/poster-led" },
      { label: "BANNER LED", href: "/productos/banner-led" },
      { label: "Tótem LED Outdoor", href: "/productos/totem-led-outdoor" },
      {
        label: "Rótulos y Letreros LED",
        href: "/productos/rotulos-letreros-led",
      },
      {
        label: "Carteles redondos LED",
        href: "/productos/carteles-redondos-led",
      },
      {
        label: "Carteles salientes LED",
        href: "/productos/carteles-salientes-led",
      },
      { label: "Cubos LED", href: "/productos/cubos-led" },
      { label: "SHELF LED", href: "/productos/shelf-led" },
      {
        label: "Tótem LED Outdoor con pedestal",
        href: "/productos/totem-led-outdoor-pedestal",
      },
    ],
  },
  {
    title: "Software",
    href: "/productos?categoria=software",
    items: [
      {
        label: "Software de CARTELERIA DIGITAL",
        href: "/productos/software-carteleria-digital",
      },
      {
        label: "Apps y juegos interactivos",
        href: "/productos/apps-juegos-interactivos",
      },
      { label: "Gestión de turnos", href: "/productos/gestion-turnos" },
      {
        label: "Gestión de colas: Fila única",
        href: "/productos/gestion-filas",
      },
      {
        label: "C-Control Gestión de Videowalls",
        href: "/productos/c-control-videowalls",
      },
    ],
  },
  {
    title: "Otras soluciones",
    href: "/productos",
    items: [
      {
        label: "Videoconferencias",
        href: "/productos/videoconferencias",
      },
      {
        label: "Tótem de Guardia Remoto",
        href: "/productos/totem-guardia-remoto",
      },
      {
        label: "Tótem medidor de velocidad y LPR",
        href: "/productos/totem-velocidad-lpr",
      },
      {
        label: "Tótem Cargador de celulares",
        href: "/productos/totem-cargador-celulares",
      },
      {
        label: "Lustrador automático de calzado",
        href: "/productos/lustrador-calzado",
      },
    ],
  },
];
