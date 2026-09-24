import Image from "next/image";
import Link from "next/link";
import shared from "./Partners.module.css";
import styles from "./HomeClients.module.css";

const clients = [
  { name: "Atos", file: "ATOS.png", width: 166 },
  { name: "Coca-Cola", file: "Coca-Cola.png", width: 191 },
  { name: "Fila", file: "FILA.png", width: 175 },
  { name: "GSK", file: "GSK.png", width: 69 },
  { name: "Hipódromo de Palermo", file: "Hipódromo-de-Palermo.png", width: 226 },
  { name: "Hospital Italiano", file: "Hospital_Italiano.png", width: 370 },
  { name: "Miro", file: "Miro.jpg", width: 164 },
  { name: "Hotel Sheraton", file: "Hotel-Sheraton.png", width: 306 },
  { name: "Kinderland", file: "Kinderland.jpeg", width: 598 },
  { name: "Lacoste", file: "Lacoste.jpg", width: 377 },
  { name: "Mercado Libre", file: "mercadolibre.png", width: 244 },
  { name: "Netflix", file: "Netflix.png", width: 207 },
  { name: "Neverland", file: "Neverland.jpg", width: 303 },
  { name: "OSDE", file: "osde.png", width: 161 },
  { name: "Pampa Films", file: "Pampa-Films.png", width: 256 },
  { name: "REMAX", file: "REMAX.png", width: 305 },
  { name: "Renault", file: "Renault.jpg", width: 165 },
  { name: "Roche", file: "Roche.png", width: 115 },
  { name: "Sarkany", file: "Sarkany.jpg", width: 548 },
  { name: "SportClub", file: "Sport-Club.png", width: 325 },
  { name: "Techint", file: "Techint.png", width: 337 },
  { name: "YouTube", file: "Youtube.jpg", width: 266 },
  { name: "YPF", file: "YPF.jpg", width: 247 },
  { name: "Zurich", file: "Zurich.png", width: 262 },
] as const;

export function HomeClients() {
  return (
    <section id="nuestros-clientes" aria-labelledby="home-clients-heading" className={styles.section}>
      <div className={shared.container}>
        <h2 id="home-clients-heading" className={shared.heading}><span>NUESTROS CLIENTES</span></h2>
        <div className={`${shared.marquee} ${styles.marquee}`} tabIndex={0} role="group" aria-label="Marcas de nuestros clientes. El desplazamiento se pausa al enfocar o pasar el cursor.">
          {[false, true].map((duplicate) => (
            <ul key={String(duplicate)} className={shared.group} aria-hidden={duplicate || undefined}>
              {clients.map((client) => (
                <li key={client.name} className={shared.partner}>
                  <Image
                    src={`/original-home/clientes/${client.file}`}
                    alt={duplicate ? "" : client.name}
                    width={client.width}
                    height={60}
                    className={shared.logo}
                    unoptimized
                  />
                </li>
              ))}
            </ul>
          ))}
          <Link href="/clientes" className={styles.overlayLink} aria-label="Ver todos nuestros clientes" />
        </div>
      </div>
    </section>
  );
}
