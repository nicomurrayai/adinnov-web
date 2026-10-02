import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Reveal } from "../../components/ui/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conocé al equipo de Adinnov. Diseñamos, fabricamos e integramos cartelería digital, tótems, pantallas y experiencias interactivas desde Buenos Aires.",
  alternates: { canonical: "/nosotros" },
};

function Photo({ src, alt, sizes, position, priority = false }: {
  src: string; alt: string; sizes: string; position?: string; priority?: boolean;
}) {
  return (
    <Image src={src} alt={alt} fill sizes={sizes} priority={priority}
      quality={75} className={styles.photo} style={{ objectPosition: position }} />
  );
}

export default function NosotrosPage() {
  return (
    <>
      <section className={`${styles.hero} paper-grid`} aria-labelledby="nosotros-titulo">
        <Container>
          <div className={styles.topline}>
            <p className="eyebrow text-signal">Nosotros / Adinnov</p>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.13em] text-muted">Buenos Aires · Argentina</p>
          </div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className="eyebrow text-muted">Personas, ideas y tecnología</p>
              <h1 id="nosotros-titulo" className={styles.heroTitle}>Detrás de cada pantalla, <span>hay un equipo.</span></h1>
              <p className={styles.heroLead}>Somos Adinnov. Diseñamos, fabricamos e integramos soluciones digitales que cobran sentido cuando llegan a los espacios y a las personas.</p>
              <a className={styles.textLink} href="#como-trabajamos">Conocé cómo trabajamos <span aria-hidden="true">↘</span></a>
            </div>
            <div className={styles.heroVisual} aria-label="El equipo y los proyectos de Adinnov">
              <Reveal className={styles.heroMain} delay={0.08} y={22}>
                <figure className={styles.frame}>
                  <Photo src="/nosotros/equipo.webp" alt="Integrantes del equipo Adinnov reunidos en su espacio de trabajo" sizes="(max-width: 700px) 78vw, (max-width: 1100px) 48vw, 39vw" position="center 39%" priority />
                  <figcaption className={styles.photoLabel}>Equipo Adinnov</figcaption>
                </figure>
              </Reveal>
              <Reveal className={styles.heroSmallLeft} delay={0.18} y={30}>
                <figure className={styles.frame}>
                  <Photo src="/nosotros/reunion.webp" alt="Tres integrantes del equipo trabajando juntos alrededor de una mesa" sizes="(max-width: 700px) 42vw, 24vw" position="center 48%" />
                </figure>
              </Reveal>
              <Reveal className={styles.heroSmallRight} delay={0.26} y={36}>
                <figure className={styles.frame}>
                  <Photo src="/nosotros/proyecto.webp" alt="Pantallas y soluciones interactivas de Adinnov en el showroom" sizes="(max-width: 700px) 44vw, 24vw" />
                </figure>
              </Reveal>
              <span className={styles.visualIndex} aria-hidden="true">01 / 03</span>
            </div>
          </div>
          <div className={styles.facts}>
            <div><strong>+10</strong><span>Años de experiencia</span></div>
            <p>Diseño propio <span aria-hidden="true">/</span> fabricación <span aria-hidden="true">/</span> integración</p>
          </div>
        </Container>
      </section>

      <section className={styles.madeSection} aria-labelledby="hacemos-titulo">
        <Container>
          <div className={styles.sectionIntro}>
            <Reveal>
              <p className="eyebrow text-signal">Lo que hacemos</p>
              <h2 id="hacemos-titulo" className={styles.sectionTitle}>De la primera idea <em>al último detalle.</em></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={styles.sectionLead}>Escuchamos qué necesita cada espacio y elegimos la tecnología que mejor lo resuelve. Diseñamos el equipo, desarrollamos la experiencia e integramos cada pieza para que todo funcione en conjunto.</p>
            </Reveal>
          </div>
          <div className={styles.productLayout}>
            <div className={styles.productMosaic}>
              <Reveal className={styles.productMain}>
                <figure className={styles.frame}>
                  <Photo src="/nosotros/totems.webp" alt="Tótems digitales e interactivos desarrollados por Adinnov" sizes="(max-width: 700px) 88vw, 46vw" />
                  <figcaption className={styles.photoLabel}>Tótems Adinnov</figcaption>
                </figure>
              </Reveal>
              <Reveal className={styles.productDetail} delay={0.1} y={32}>
                <figure className={styles.frame}>
                  <Photo src="/nosotros/detalle.webp" alt="Detalle de una terminal interactiva Adinnov" sizes="(max-width: 700px) 36vw, 20vw" />
                </figure>
              </Reveal>
              <Reveal className={styles.productTouch} delay={0.18} y={28}>
                <figure className={styles.frame}>
                  <Photo src="/nosotros/interaccion.webp" alt="Una persona usando una aplicación en un tótem táctil" sizes="(max-width: 700px) 52vw, 25vw" />
                </figure>
              </Reveal>
            </div>
            <Reveal className={styles.productCopy} delay={0.12}>
              <div className={styles.sideRule} />
              <p className="eyebrow text-signal">Fabricación e integración</p>
              <h3>Una solución completa toma muchas formas.</h3>
              <p>Fabricamos tótems digitales, kioscos, terminales y atriles. Sumamos pantallas profesionales, LED y software desarrollado por nuestro equipo para que cada proyecto tenga una respuesta a medida.</p>
              <p>Uno de nuestros modelos de tótem fue diseñado por Adinnov y cuenta con patente del INPI.</p>
              <span className={styles.microLabel}>Pensado, hecho y acompañado por Adinnov.</span>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="como-trabajamos" className={styles.processSection} aria-labelledby="proceso-titulo">
        <Container>
          <div className={styles.processHeading}>
            <Reveal>
              <p className="eyebrow text-signal-pale">Nuestra forma de trabajar</p>
              <h2 id="proceso-titulo" className={styles.sectionTitle}>Estamos en cada paso. <em>Hasta que funciona.</em></h2>
            </Reveal>
            <p>En venta o alquiler, conectamos la idea con la logística, la instalación, la configuración y la puesta en marcha.</p>
          </div>
          <div className={styles.processGrid}>
            <div className={styles.processList}>
              {[
                ["Entendemos el contexto.", "Escuchamos el objetivo, el lugar y las personas que van a usar la solución."],
                ["Diseñamos e integramos.", "Combinamos equipamiento, contenido e interacción en una propuesta concreta."],
                ["Lo ponemos a funcionar.", "Coordinamos la entrega, instalación y configuración para llevarlo al espacio real."],
              ].map(([title, description], index) => (
                <Reveal key={title} delay={index * 0.08}>
                  <article>
                    <span>0{index + 1}</span>
                    <div><h3>{title}</h3><p>{description}</p></div>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className={styles.processPhotos}>
              <Reveal className={styles.processPhotoMain}>
                <figure className={styles.frame}>
                  <Photo src="/nosotros/pantalla.webp" alt="Integrante del equipo probando una pantalla interactiva" sizes="(max-width: 700px) 78vw, 35vw" />
                </figure>
              </Reveal>
              <Reveal className={styles.processPhotoSmall} delay={0.12} y={30}>
                <figure className={styles.frame}>
                  <Photo src="/nosotros/instalacion.webp" alt="Integrantes de Adinnov junto a tótems digitales en el showroom" sizes="(max-width: 700px) 48vw, 23vw" />
                </figure>
              </Reveal>
              <span className={styles.processMark} aria-hidden="true">AD / 02</span>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.closingSection} aria-labelledby="cierre-titulo">
        <Container className={styles.closingGrid}>
          <Reveal className={styles.closingPhoto}>
            <figure className={styles.frame}>
              <Photo src="/nosotros/colaboracion.webp" alt="El equipo de Adinnov revisando un proyecto alrededor de una pantalla" sizes="(max-width: 900px) 90vw, 44vw" />
            </figure>
          </Reveal>
          <Reveal className={styles.closingCopy} delay={0.1}>
            <p className="eyebrow text-signal">Lo que nos mueve</p>
            <h2 id="cierre-titulo" className={styles.sectionTitle}>Nos gusta ver las ideas <em>en uso.</em></h2>
            <p>Trabajamos con emprendimientos, PyMEs, grandes empresas e instituciones. En cada escala nos importa lo mismo: que la tecnología sea útil, cercana y esté bien resuelta.</p>
            <Button href="/contacto">Hablemos de tu proyecto</Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
