import type { Product, ProductSection } from "@content/types";

function SectionBlock({ section }: { section: ProductSection }) {
  return (
    <div className="border-t border-border py-10">
      <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-medium tracking-tight text-navy">
        {section.heading}
      </h2>
      {section.type === "list" ? (
        <ul className="mt-5 space-y-2.5">
          {section.items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy/40" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-sm">
            <tbody>
              {section.rows.map((row, i) => (
                <tr
                  key={i}
                  className={i === 0 ? "border-b border-navy/20" : "border-b border-border"}
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-3 py-3 ${
                        i === 0 ? "font-medium text-navy" : "text-muted"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="mt-4">
      {product.sections.map((section) => (
        <SectionBlock key={section.heading + section.type} section={section} />
      ))}

      {product.features.length > 0 ? (
        <div className="border-t border-border py-10">
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-medium tracking-tight text-navy">
            Características destacadas
          </h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {product.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy/40" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {product.images.length > 1 ? (
        <div className="border-t border-border py-10">
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-medium tracking-tight text-navy">
            Galería
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.images.slice(1).map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt=""
                className="aspect-[4/3] w-full object-cover bg-surface"
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
