import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[100svh] overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/videos/hero-adinnov.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/35 to-navy/25" />
      </div>

      <Container className="relative flex h-full flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-32">
        <h1 className="animate-fade-up max-w-3xl font-[family-name:var(--font-outfit)] text-3xl font-medium leading-[1.12] tracking-tight text-white/95 md:text-4xl lg:text-5xl">
          Tecnología que transforma espacios y conecta experiencias
        </h1>
        <p className="animate-fade-up delay-1 mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          Diseñamos y fabricamos tótems interactivos, pantallas LED, kioscos
          digitales y soluciones de software a medida. Ofrecemos venta, alquiler
          e instalación para empresas e instituciones en toda la Argentina.
        </p>
        <div className="animate-fade-up delay-2 mt-10">
          <Button
            href="/contacto"
            className="bg-[#1c49ff] text-white hover:bg-[#163dcc]"
          >
            Solicitar presupuesto
          </Button>
        </div>
      </Container>
    </section>
  );
}
