import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HomeShowroom() {
  return (
    <section id="showroom" aria-labelledby="home-showroom-heading" className="bg-navy py-16 text-white md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow text-signal-pale">Nuestro espacio en Buenos Aires</p>
          <h2 id="home-showroom-heading" className="font-display mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">Conocé el showroom Adinnov</h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">Explorá pantallas, tótems y experiencias interactivas en funcionamiento. Te esperamos en Membrillar 74, Ciudad de Buenos Aires.</p>
          <Button href="/contacto" className="mt-8">Coordiná tu visita</Button>
        </div>
        <div className="aspect-video overflow-hidden rounded-xl border border-white/15 bg-black shadow-[var(--shadow-float)]">
          <iframe
            src="https://www.youtube-nocookie.com/embed/UYga87M7N7U"
            title="Video del showroom de Adinnov"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </Container>
    </section>
  );
}
