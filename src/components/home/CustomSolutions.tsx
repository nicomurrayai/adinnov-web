"use client";

import Image from "next/image";
import { useRef, useState, type TouchEvent } from "react";
import styles from "./CustomSolutions.module.css";

const projects = [
  { file: "img1.jpeg", width: 387, height: 495 },
  { file: "img2.jpg", width: 462, height: 491 },
  { file: "img3.png", width: 977, height: 771, label: "Pantalla a medida - Proyecto 3" },
  { file: "img4.jpg", width: 288, height: 461 },
  { file: "img5.jpg", width: 288, height: 461 },
  { file: "img6.png", width: 536, height: 345 },
  { file: "img7.jpg", width: 528, height: 752 },
  { file: "img8.jpg", width: 336, height: 624 },
  { file: "img9.jpg", width: 362, height: 477 },
  { file: "img10.png", width: 606, height: 625 },
] as const;

function relativePosition(index: number, active: number) {
  const distance = (index - active + projects.length) % projects.length;
  return distance > projects.length / 2 ? distance - projects.length : distance;
}

export function CustomSolutions() {
  const [active, setActive] = useState(2);
  const touchStart = useRef<number | null>(null);

  const move = (direction: number) => {
    setActive((current) => (current + direction + projects.length) % projects.length);
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 40) move(distance < 0 ? 1 : -1);
    touchStart.current = null;
  };

  return (
    <section id="medida" aria-labelledby="custom-solutions-heading" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.eyebrow}><span>SOLUCIONES A MEDIDA</span></div>
        <h2 id="custom-solutions-heading" className={styles.heading}>
          Fabricamos equipamiento según las necesidades específicas de nuestros clientes
        </h2>

        <div
          className={styles.carousel}
          role="region"
          aria-roledescription="carrusel"
          aria-label="Proyectos de soluciones a medida"
          onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
          onTouchEnd={onTouchEnd}
        >
          <div className={styles.slides}>
            {projects.map((project, index) => {
              const position = relativePosition(index, active);
              const visible = Math.abs(position) <= 2;
              return (
                <button
                  key={project.file}
                  type="button"
                  className={styles.card}
                  data-position={visible ? position : "hidden"}
                  style={{ width: position === 0 ? `${Math.round(project.width / project.height * 400)}px` : "400px" }}
                  aria-label={`Ver proyecto ${index + 1} de ${projects.length}`}
                  aria-hidden={!visible}
                  tabIndex={visible ? 0 : -1}
                  onClick={() => setActive(index)}
                >
                  <Image
                    src={`/original-home/a-medida/${project.file}`}
                    alt={`Solución a medida, proyecto ${index + 1}`}
                    fill
                    sizes="(max-width: 767px) 84vw, 520px"
                    className={styles.image}
                    unoptimized
                  />
                  <span className={styles.shade} />
                  {"label" in project && position === 0 && (
                    <span className={styles.caption}>{project.label}</span>
                  )}
                </button>
              );
            })}
          </div>

          <button type="button" className={`${styles.arrow} ${styles.previous}`} onClick={() => move(-1)} aria-label="Proyecto anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={() => move(1)} aria-label="Proyecto siguiente">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
          </button>

          <div className={styles.dots} aria-label="Elegir proyecto">
            {projects.map((project, index) => (
              <button
                key={project.file}
                type="button"
                className={styles.dot}
                aria-label={`Ir al proyecto ${index + 1}`}
                aria-current={index === active ? "true" : undefined}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
