"use client";

import Image from "next/image";
import { useState } from "react";
import shared from "./Partners.module.css";
import styles from "./Verticals.module.css";

const verticals = [
  { name: "Eventos y Showrooms", image: "eventos.png" },
  { name: "Edificios Corporativos y Oficinas", image: "oficinas.jpg" },
  { name: "Gastronomía", image: "gastronomico.png" },
  { name: "Hotelería", image: "hotelero.jpg" },
  { name: "Retail", image: "retail.jpg" },
  { name: "Centros de Monitoreo", image: "monitoreo.jpg" },
  { name: "Aeropuertos y Terminales", image: "aeropuerto.jpg" },
  { name: "Gobierno", image: "gobierno.jpg" },
  { name: "Salas de reunión", image: "sala-reuniones.png" },
  { name: "Museos", image: "museo.jpg" },
] as const;

export function Verticals() {
  const [active, setActive] = useState(0);

  return (
    <section id="verticales" aria-labelledby="verticales-heading" className={styles.section}>
      <div className={shared.container}>
        <h2 id="verticales-heading" className={styles.heading}>VERTICALES</h2>
        <div className={styles.grid}>
          <div className={styles.options} aria-label="Verticales de aplicación">
            {verticals.map((vertical, index) => (
              <button
                key={vertical.name}
                type="button"
                aria-pressed={index === active}
                onClick={() => setActive(index)}
                className={styles.option}
              >{index + 1}. {vertical.name}</button>
            ))}
          </div>
          <div className={styles.visual}>
            <Image
              key={verticals[active].image}
              src={`/original-home/verticales/${verticals[active].image}`}
              alt={`Solución digital para ${verticals[active].name.toLowerCase()}`}
              fill
              sizes="(max-width: 767px) 90vw, 50vw"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
