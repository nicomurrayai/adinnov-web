import styles from "./HomeFinancing.module.css";

const options = [
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
            Tu próximo proyecto, con más formas de hacerlo posible.
          </h2>
          <p className={styles.lead}>
            Elegí la alternativa de pago que mejor acompañe tu proyecto y equipá tu espacio con tecnología Adinnov.
          </p>
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
      </div>
    </section>
  );
}
