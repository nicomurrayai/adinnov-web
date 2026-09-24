import Image from "next/image";
import styles from "./Partners.module.css";

// Original artwork and order from https://adinnov.com.ar/.
const partners = [
  { name: "Samsung", file: "SAMSUNG.png", width: 405 },
  { name: "LG Business Solutions", file: "lg.png", width: 260 },
  { name: "i3CONNECT", file: "i3connect.png", width: 344 },
  { name: "NovaStar", file: "NovaStar.png", width: 322 },
  { name: "Mean Well", file: "meanwell.png", width: 101 },
  { name: "Philips", file: "Philips.png", width: 357 },
  { name: "ViewSonic", file: "Viewsonic.jpg", width: 384 },
  { name: "Logitech", file: "logitech.png", width: 196 },
  { name: "Elo", file: "Elo.jpg", width: 106 },
  { name: "Dahua", file: "Dahua.png", width: 185 },
  { name: "Hikvision", file: "Hikvision.png", width: 439 },
  { name: "Intel", file: "intel.png", width: 90 },
  { name: "3nStar", file: "3nStar.png", width: 158 },
] as const;

export function Partners() {
  return (
    <section id="partners" aria-labelledby="partners-heading" className={styles.section}>
      <div className={styles.container}>
        <h2 id="partners-heading" className={styles.heading}>
          <span>PARTNERS</span>
        </h2>
        <div
          className={styles.marquee}
          tabIndex={0}
          role="group"
          aria-label="Marcas asociadas. El desplazamiento se pausa al enfocar o pasar el cursor."
        >
          {[false, true].map((duplicate) => (
            <ul
              key={String(duplicate)}
              className={styles.group}
              aria-hidden={duplicate || undefined}
            >
              {partners.map((partner) => (
                <li key={partner.name} className={styles.partner}>
                  <Image
                    src={`/partners/home/${partner.file}`}
                    alt={duplicate ? "" : partner.name}
                    width={partner.width}
                    height={60}
                    className={styles.logo}
                    unoptimized
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
