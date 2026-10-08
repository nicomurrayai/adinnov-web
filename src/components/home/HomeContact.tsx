import { site } from "@content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HomeContact() {
  return (
    <section aria-labelledby="home-contact-heading" className="bg-paper py-16 md:py-24">
      <Container className="grid gap-10 border-t border-border pt-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <p className="eyebrow text-signal">Hablemos</p>
          <h2 id="home-contact-heading" className="font-display mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] text-navy md:text-5xl">Tecnología pensada para tu espacio.</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">Venta, alquiler e integración de cartelería digital para empresas, instituciones y eventos.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Button href={site.whatsapp[0].href} external className="min-h-14 justify-between rounded-full px-7 text-base normal-case tracking-normal">Escribinos por WhatsApp</Button>
          <Button href="/contacto" variant="secondary" className="min-h-14 justify-between rounded-full px-7">Ir al formulario de contacto</Button>
        </div>
      </Container>
    </section>
  );
}
