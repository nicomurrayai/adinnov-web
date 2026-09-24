"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef, useState, type KeyboardEvent, type TouchEvent } from "react";
import shared from "./Partners.module.css";
import styles from "./HomeRentals.module.css";

const rentals = [
  {
    title: "Tótem interactivo",
    description: "Tótem interactivo con pantallas táctiles IR de 32' a 75' (Full HD/4K), estructura ultradelgada (10-12cm) y múltiples opciones de integración para aplicaciones interactivas y cartelería digital.",
    href: "/productos/totem-interactivo",
    images: ["1-img.jpg", "01.jpg", "02.jpg", "03.png", "04.png", "05.png", "06.png", "07.jpg", "09.jpg"],
  },
  {
    title: "Tótem digital",
    description: "Tótem digital modular con pantallas Samsung/Philips de 32' a 75' (Full HD/4K), diseño ultradelgado (10-12cm) y estructura de madera/aluminio para cartelería digital indoor.",
    href: "/productos/totem-digital",
    images: ["2-img.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"],
  },
  {
    title: "Poster LED",
    description: "Nuevos Poster Led que van a revolucionar el uso de los espacios. Descubre una nueva forma de aprovechar espacios para emitir contenido audiovisual con la nueva tecnología Poster LED.",
    href: "/productos/poster-led",
    images: ["3-img.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"],
  },
  {
    title: "TV con Soporte",
    description: "Samsung Flip 2 WM55R-W - Pizarra digital interactiva UHD de 55' con tecnología táctil InGlass, modo pincel real y colaboración multipunto para entornos educativos y corporativos.",
    href: "/productos/samsung-business-tv",
    images: ["4-img.jpg", "01.jpg", "02.png", "03.jpg", "04.jpeg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.png", "10.jpg", "11.jpg"],
  },
  {
    title: "Terminales interactivas",
    description: "Terminales táctiles personalizables con múltiples configuraciones de hardware y software para autoservicio en diversos sectores.",
    href: "/productos/terminales-interactivas-pantallas-grandes",
    images: ["5-img.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"],
  },
  {
    title: "Pantallas Touch",
    description: "Monitor táctil profesional de 43' o 55' con pantalla 4K UHD, tecnología capacitiva multitáctil y diseño para operación 24/7, ideal para entornos comerciales e interactivos.",
    href: "/productos/pantallas-touch",
    images: ["6-img.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"],
  },
  {
    title: "Pantallas de LED",
    description: "Una pantalla de LED (Light Emitting Diode) es un tipo de dispositivo de visualización que utiliza diodos emisores de luz como píxeles para formar una imagen. Estas pantallas son muy brillantes, tienen un gran contraste y son visibles incluso en exteriores con luz solar directa.",
    href: "/productos/pantallas-led",
    images: ["7-img.jpg", "01.jpeg", "02.jpg", "03.png", "04.jpg", "05.jpg", "06.jpg"],
  },
  {
    title: "Atril Digital",
    description: "Es un dispositivo interactivo con forma de atril que incluye una pantalla embebida, normalmente táctil, donde el orador puede controlar presentaciones, acceder a notas y gestionar contenido multimedia.",
    href: "/productos/atril-digital",
    images: ["8-img.jpg", "01.jpg", "02.jpg", "03.jpeg", "04.jpg", "05.jpg", "06.jpg", "08.jpg", "09.jpg"],
  },
] as const;

export function HomeRentals() {
  const id = useId();
  const [active, setActive] = useState(0);
  const [slide, setSlide] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchStart = useRef<number | null>(null);
  const rental = rentals[active];

  const activate = (index: number) => {
    setActive(index);
    setSlide(0);
  };
  const focusTab = (index: number) => {
    const next = (index + rentals.length) % rentals.length;
    activate(next);
    tabRefs.current[next]?.focus();
  };
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const focused = tabRefs.current.findIndex((tab) => tab === event.target);
    if (focused < 0) return;
    const keys: Record<string, number> = {
      ArrowRight: focused + 1,
      ArrowLeft: focused - 1,
      Home: 0,
      End: rentals.length - 1,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    focusTab(keys[event.key]);
  };
  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 40) {
      setSlide((current) => (current + (distance < 0 ? 1 : -1) + rental.images.length) % rental.images.length);
    }
    touchStart.current = null;
  };

  return (
    <section id="alquileres" aria-labelledby={`${id}-heading`} className={styles.section}>
      <div className={shared.container}>
        <h2 id={`${id}-heading`} className={shared.heading}><span>ALQUILERES</span></h2>
        <p className={styles.lead}>
          Alquilamos equipamiento para todo tipo de eventos:<br className={styles.desktopBreak} /> corporativos y sociales, ferias, exposiciones, conferencias y congresos.
        </p>
        <div role="tablist" aria-label="Equipos disponibles para alquiler" onKeyDown={onKeyDown} className={styles.tabs}>
          {rentals.map((item, index) => (
            <button
              key={item.title}
              ref={(node) => { tabRefs.current[index] = node; }}
              type="button"
              role="tab"
              id={`${id}-tab-${index}`}
              aria-controls={`${id}-panel`}
              aria-selected={index === active}
              tabIndex={index === active ? 0 : -1}
              onClick={() => activate(index)}
              className={styles.tab}
            >{item.title}</button>
          ))}
        </div>
        <div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active}`} className={styles.panel}>
          <div className={styles.copy}>
            <h3>{rental.title}</h3>
            <p>{rental.description}</p>
            <Link href={rental.href} prefetch={false} className={styles.cta}>VER PANTALLA</Link>
          </div>
          <div className={styles.gallery}>
            <div
              className={styles.imageFrame}
              onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
              onTouchEnd={onTouchEnd}
            >
              <Image
                key={`${active}-${slide}`}
                src={`/original-home/alquileres/${String(active + 1).padStart(2, "0")}/${rental.images[slide]}`}
                alt={`${rental.title}, imagen ${slide + 1} de ${rental.images.length}`}
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className={styles.image}
              />
            </div>
            <div className={styles.dots} aria-label={`Galería de ${rental.title}`}>
              {rental.images.map((file, index) => (
                <button
                  key={file}
                  type="button"
                  aria-label={`Ver imagen ${index + 1} de ${rental.images.length}`}
                  aria-current={index === slide ? "true" : undefined}
                  onClick={() => setSlide(index)}
                  className={styles.dot}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
