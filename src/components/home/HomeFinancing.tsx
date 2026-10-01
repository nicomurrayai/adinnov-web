import Link from "next/link";
import styles from "./HomeFinancing.module.css";

const options = [
  {
    title: "Leasing tecnológico",
    description:
      "Usá el equipamiento con pagos mensuales flexibles y opción de compra al finalizar.",
    icon: "leasing",
    tone: "blue",
  },
  {
    title: "Pago diferido BNA",
    description:
      "Hasta 12 cuotas con pago diferido a través de Banco Nación.",
    icon: "calendar",
    tone: "mint",
  },
  {
    title: "Financiamiento BNA",
    description:
      "Créditos del Banco Nación con condiciones preferenciales y planes de 18, 24 o 36 cuotas.",
    icon: "bank",
    tone: "aqua",
  },
  {
    title: "Cheques hasta 120 días",
    description:
      "Flexibilidad de pago con cheques hasta 120 días, sujeta a aprobación crediticia.",
    icon: "cheque",
    tone: "slate",
  },
] as const;

function Icon({ kind }: { kind: (typeof options)[number]["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className={styles.icon} {...common}>
      {kind === "leasing" && (
        <>
          <rect x="4.5" y="8" width="23" height="16" rx="2.5" />
          <path d="M4.5 13h23M9 19h5" />
        </>
      )}
      {kind === "calendar" && (
        <>
          <rect x="6" y="6.5" width="20" height="20" rx="2.5" />
          <path d="M6 12.5h20M11 4.5v4M21 4.5v4M11 17h3M18 17h3M11 22h3M18 22h3" />
        </>
      )}
      {kind === "bank" && (
        <>
          <path d="m4 12 12-7 12 7M6 14h20M8 25V15M14 25V15M20 25V15M26 25V15M4 27h24" />
        </>
      )}
      {kind === "cheque" && (
        <>
          <rect x="4.5" y="8" width="23" height="16" rx="2.5" />
          <path d="m9 16 4 3 10-7M9 22h7" />
        </>
      )}
    </svg>
  );
}

export function HomeFinancing() {
  return (
    <section id="financiamiento" aria-labelledby="financing-heading" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>FINANCIAMIENTO</p>
          <h2 id="financing-heading" className={styles.heading}>
            Tu próximo tótem, con más formas de hacerlo posible.
          </h2>
          <p className={styles.lead}>
            Elegí la alternativa de pago que mejor acompañe tu proyecto y equipá tu espacio con tecnología Adinnov.
          </p>
        </div>

        <div className={styles.bankBanner}>
          <div className={styles.bankIdentity}>
            <span className={styles.bankMark} aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3.5 12 12.5-7 12.5 7M5.5 14h21M8 24V15M13.5 24V15M19 24V15M24.5 24V15M4 26h24" />
              </svg>
            </span>
            <div>
              <strong>Banco Nación</strong>
              <span>Financiamiento preferencial para tecnología</span>
            </div>
          </div>
          <div className={styles.bankHelp}>
            <span>¿Todavía no tenés cuenta?</span>
            <strong>Te ayudamos a abrirla.</strong>
          </div>
        </div>

        <ul className={styles.options}>
          {options.map((option, index) => (
            <li key={option.title} className={styles.option} data-tone={option.tone}>
              <div className={styles.optionTop}>
                <span className={styles.iconFrame}><Icon kind={option.icon} /></span>
                <span className={styles.optionNumber}>0{index + 1}</span>
              </div>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </li>
          ))}
        </ul>

        <div className={styles.benefits}>
          <div className={styles.benefitHeading}>
            <p className={styles.benefitEyebrow}>PENSADO PARA TU NEGOCIO</p>
            <h3>¿Por qué elegir financiamiento?</h3>
          </div>
          <ul className={styles.benefitList}>
            <li><span aria-hidden="true">01</span><strong>Escalabilidad total</strong><small>Incorporá tecnología a medida que crece tu proyecto.</small></li>
            <li><span aria-hidden="true">02</span><strong>Tecnología actualizada</strong><small>Equipá hoy tus espacios con soluciones actuales.</small></li>
            <li><span aria-hidden="true">03</span><strong>Pagos flexibles</strong><small>Elegí un esquema que acompañe tu inversión.</small></li>
          </ul>
          <div className={styles.benefitFooter}>
            <p>Opciones sujetas a evaluación crediticia, disponibilidad y condiciones vigentes.</p>
            <Link href="/contacto?intent=venta" className={styles.cta}>
              Consultá por financiación <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
