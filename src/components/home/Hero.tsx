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

      <Container className="relative flex h-full max-w-7xl flex-col justify-center pb-16 pt-28 md:pb-20 md:pt-24">
        <h1 className="animate-fade-up max-w-3xl font-[family-name:var(--font-outfit)] text-3xl font-medium leading-[1.12] tracking-tight text-white/95 md:text-4xl lg:text-5xl">
          Tecnología que transforma espacios y conecta experiencias
        </h1>
        <p className="animate-fade-up delay-1 mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          Diseñamos y fabricamos{" "}
          <strong className="font-semibold text-white/90">
            tótems interactivos, pantallas LED, kioscos digitales y soluciones
            de software a medida
          </strong>
          . Ofrecemos venta, alquiler e instalación para empresas e instituciones
          en toda la Argentina.
        </p>
      </Container>
    </section>
  );
}
