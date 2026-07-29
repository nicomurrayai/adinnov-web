import { site } from "@content/site";
import { Container } from "../ui/Container";

export function ProofBar() {
  return (
    <section id="credenciales" aria-label="Cómo trabaja Adinnov" className="border-b border-border bg-paper">
      <Container>
        <div className="grid md:grid-cols-3">
          {site.proofs.map((proof, index) => (
            <article
              key={proof.title}
              className={`py-8 md:px-7 md:py-10 ${index > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}
            >
              <div className="flex items-start gap-4">
                <span className="font-mono mt-0.5 text-[0.64rem] text-signal">0{index + 1}</span>
                <div>
                  <h2 className="font-display text-xl font-medium tracking-[-0.025em] text-navy">
                    {proof.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted">{proof.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
