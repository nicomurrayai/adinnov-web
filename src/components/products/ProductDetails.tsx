import type { EnrichedProduct } from "@content/types";

export function ProductDetails({ product }: { product: EnrichedProduct }) {
  return (
    <div className="min-w-0 divide-y divide-border">
      {product.specGroups.length > 0 ? (
        <section className="pb-14" aria-labelledby="technical-specifications">
          <SectionIntro
            id="technical-specifications"
            index="01"
            eyebrow="Información técnica"
            title="Especificaciones"
            description="Configuraciones y prestaciones del equipo. La selección final se ajusta a cada implementación."
          />

          <div className="mt-9 border-t border-navy">
            {product.specGroups.map((group) => (
              <div
                key={group.title}
                className="grid gap-4 border-b border-border py-6 md:grid-cols-[minmax(10rem,0.38fr)_minmax(0,0.62fr)] md:gap-10"
              >
                <h3 className="font-[family-name:var(--font-outfit)] text-lg font-medium text-navy">
                  {group.title}
                </h3>
                <dl className="divide-y divide-border/80">
                  {group.specs.map((spec, index) => (
                    <div
                      key={`${spec.label}-${index}`}
                      className="grid gap-1 py-3 first:pt-0 last:pb-0 sm:grid-cols-[minmax(8rem,0.42fr)_minmax(0,0.58fr)] sm:gap-5"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                        {spec.label}
                      </dt>
                      <dd className="text-sm font-medium leading-relaxed text-navy">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {product.variants.length > 0 ? (
        <section className="py-14" aria-labelledby="product-variants">
          <SectionIntro
            id="product-variants"
            index="02"
            eyebrow="Configuraciones"
            title="Variantes disponibles"
            description="Opciones para adaptar formato, prestaciones e integración al contexto del proyecto."
          />
          <div className="mt-9 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {product.variants.map((variant, index) => (
              <article key={`${variant.name}-${index}`} className="bg-white p-6 md:p-7">
                <span className="font-mono text-[10px] tracking-[0.14em] text-accent">
                  V{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-outfit)] text-xl font-medium text-navy">
                  {variant.name}
                </h3>
                {variant.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted">{variant.description}</p>
                ) : null}
                {variant.specs && variant.specs.length > 0 ? (
                  <dl className="mt-5 divide-y divide-border border-t border-border">
                    {variant.specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between gap-5 py-2.5 text-xs">
                        <dt className="text-muted">{spec.label}</dt>
                        <dd className="text-right font-medium text-navy">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {product.useCases.length > 0 || product.includedServices.length > 0 ? (
        <section className="grid gap-12 py-14 md:grid-cols-2 md:gap-16" aria-label="Aplicaciones y servicios">
          {product.useCases.length > 0 ? (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">03 · Aplicaciones</p>
              <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-medium tracking-tight text-navy">
                Dónde aporta valor
              </h2>
              <ul className="mt-7 border-t border-navy">
                {product.useCases.map((useCase, index) => (
                  <li key={`${useCase}-${index}`} className="flex items-start gap-4 border-b border-border py-4 text-sm leading-relaxed text-navy">
                    <span className="mt-0.5 font-mono text-[10px] text-muted" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {product.includedServices.length > 0 ? (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">04 · Acompañamiento</p>
              <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-medium tracking-tight text-navy">
                Servicios incluidos
              </h2>
              <ul className="mt-7 space-y-3">
                {product.includedServices.map((service, index) => (
                  <li
                    key={`${service}-${index}`}
                    className="flex items-start gap-3 rounded-sm border border-border bg-surface px-4 py-3.5 text-sm leading-relaxed text-navy"
                  >
                    <CheckIcon />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ) : null}

      {product.faqs.length > 0 ? (
        <section className="py-14" aria-labelledby="product-faq">
          <SectionIntro
            id="product-faq"
            index="05"
            eyebrow="Preguntas frecuentes"
            title="Antes de cotizar"
          />
          <div className="mt-8 border-t border-navy">
            {product.faqs.map((faq, index) => (
              <details key={`${faq.question}-${index}`} className="group border-b border-border">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left font-[family-name:var(--font-outfit)] text-lg font-medium text-navy transition-colors hover:text-accent focus-visible:text-accent [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span className="relative mt-1 h-5 w-5 shrink-0" aria-hidden="true">
                    <span className="absolute left-0 top-1/2 h-px w-full bg-current" />
                    <span className="absolute left-1/2 top-0 h-full w-px bg-current transition-transform group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function SectionIntro({
  id,
  index,
  eyebrow,
  title,
  description,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-[minmax(10rem,0.38fr)_minmax(0,0.62fr)] md:gap-10">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
        {index} · {eyebrow}
      </p>
      <div>
        <h2 id={id} className="font-[family-name:var(--font-outfit)] text-3xl font-medium tracking-tight text-navy md:text-4xl">
          {title}
        </h2>
        {description ? <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{description}</p> : null}
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true">
      <path d="m4 10 3.5 3.5L16 5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
