import { site } from "@content/site";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function HomeCta() {
  return (
    <section className="relative overflow-hidden bg-signal py-20 text-white md:py-28">
      <div className="absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-white/16 md:h-[32rem] md:w-[32rem]" />
      <div className="absolute -right-5 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-white/16 md:h-80 md:w-80" />
      <Container className="relative">
        <Reveal>
          <p className="eyebrow text-white">Próximo proyecto</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="font-display max-w-5xl text-balance text-[clamp(3.1rem,7vw,7.6rem)] font-medium leading-[0.85] tracking-[-0.055em] lg:col-span-9">
              Hagamos que el espacio trabaje mejor.
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-3 lg:flex-col">
              <Button href="/contacto" className="!border-white !bg-white !text-signal hover:!border-navy hover:!bg-navy hover:!text-white">
                Cotizar proyecto
              </Button>
              <Button
                href={site.whatsapp[0].href}
                external
                variant="secondary"
                className="border-white/50 text-white hover:border-white hover:bg-white hover:!text-signal"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
