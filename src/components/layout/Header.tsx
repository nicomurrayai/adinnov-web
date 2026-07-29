"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { productFamilies, site } from "@content/site";
import { Container } from "../ui/Container";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 14 14"
      fill="none"
      className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path d="m3 5 4 4 4-4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block h-4 w-5">
      <span
        className={`absolute left-0 top-1 block h-px w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
      />
      <span
        className={`absolute bottom-1 left-0 block h-px w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
      />
    </span>
  );
}

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const productButtonRef = useRef<HTMLButtonElement>(null);
  const productsPanelRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setProductsOpen(false);
        setMobileOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      if (mobileOpen) {
        setMobileOpen(false);
        mobileButtonRef.current?.focus();
        return;
      }

      if (productsOpen) {
        setProductsOpen(false);
        productButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen, productsOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeMobileMenu = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) setMobileOpen(false);
    };
    closeMobileMenu(desktop);
    desktop.addEventListener("change", closeMobileMenu);
    return () => desktop.removeEventListener("change", closeMobileMenu);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = mobilePanelRef.current;
    const panelFocusables = Array.from(
      panel?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) ?? [],
    );
    const focusables = [mobileButtonRef.current, ...panelFocusables].filter(
      (element): element is HTMLElement => Boolean(element),
    );

    function trapFocus(event: KeyboardEvent) {
      if (event.key !== "Tab" || !focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    const focusScope = headerRef.current;
    focusScope?.addEventListener("keydown", trapFocus);
    return () => {
      document.body.style.overflow = previousOverflow;
      focusScope?.removeEventListener("keydown", trapFocus);
    };
  }, [mobileOpen]);

  function focusFirstProduct() {
    const firstLink = productsPanelRef.current?.querySelector<HTMLAnchorElement>("a[href]");
    firstLink?.focus();
  }

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-border bg-paper/95 backdrop-blur-xl">
        <Container>
          <div className="relative flex h-[4.75rem] items-center justify-between">
            <Link
              href="/"
              aria-label="Adinnov, ir al inicio"
              className="relative z-10 flex shrink-0 items-center"
              onClick={() => {
                setProductsOpen(false);
                setMobileOpen(false);
              }}
            >
              <Image
                src="/brand/logo.svg"
                alt="Adinnov"
                width={192}
                height={70}
                loading="eager"
                fetchPriority="high"
                className="h-[4.25rem] w-auto"
              />
            </Link>

            <nav aria-label="Navegación principal" className="hidden h-full items-center xl:flex">
              {site.nav.map((item) => {
                if (item.href === "/productos") {
                  return (
                    <div key={item.href} className="static flex h-full items-center">
                      <button
                        ref={productButtonRef}
                        type="button"
                        className={`flex h-full items-center gap-1.5 border-b-2 px-3 text-[0.76rem] font-semibold uppercase tracking-[0.08em] transition-colors ${
                          pathname.startsWith("/productos") || productsOpen
                            ? "border-signal text-navy"
                            : "border-transparent text-navy/66 hover:text-navy"
                        }`}
                        aria-expanded={productsOpen}
                        aria-controls="familias-productos"
                        aria-current={pathname.startsWith("/productos") ? "page" : undefined}
                        onClick={() => setProductsOpen((value) => !value)}
                        onKeyDown={(event) => {
                          if (event.key === "ArrowDown") {
                            event.preventDefault();
                            setProductsOpen(true);
                            requestAnimationFrame(focusFirstProduct);
                          }
                        }}
                      >
                        Productos
                        <Chevron open={productsOpen} />
                      </button>

                      {productsOpen ? (
                        <div
                          ref={productsPanelRef}
                          id="familias-productos"
                          className="absolute inset-x-0 top-full border border-t-0 border-border bg-paper shadow-[var(--shadow-float)]"
                        >
                          <div className="grid grid-cols-12 gap-x-8 p-8">
                            <div className="col-span-3 flex flex-col justify-between border-r border-border pr-8">
                              <div>
                                <p className="eyebrow text-signal">Catálogo</p>
                                <p className="font-display mt-4 text-3xl font-medium leading-none tracking-[-0.035em] text-navy">
                                  Seis familias.
                                  <br />Una solución.
                                </p>
                              </div>
                              <Link
                                href="/productos"
                                prefetch={false}
                                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy underline decoration-signal decoration-2 underline-offset-4"
                                onClick={() => setProductsOpen(false)}
                              >
                                Ver catálogo completo
                                <span aria-hidden="true">↗</span>
                              </Link>
                            </div>
                            <div className="col-span-9 grid grid-cols-3 gap-px bg-border">
                              {productFamilies.map((family) => (
                                <Link
                                  key={family.id}
                                  href={family.href}
                                  prefetch={false}
                                  className="group bg-paper p-5 transition-colors hover:bg-ivory focus-visible:relative"
                                  onClick={() => setProductsOpen(false)}
                                >
                                  <span className="font-mono text-[0.65rem] text-signal">{family.index}</span>
                                  <span className="font-display mt-3 block text-lg font-medium leading-tight tracking-[-0.025em] text-navy">
                                    {family.title}
                                  </span>
                                  <span className="mt-3 block text-sm leading-5 text-muted">
                                    {family.description}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                    className={`flex h-full items-center border-b-2 px-3 text-[0.76rem] font-semibold uppercase tracking-[0.08em] transition-colors ${
                      isCurrent(pathname, item.href)
                        ? "border-signal text-navy"
                        : "border-transparent text-navy/66 hover:text-navy"
                    }`}
                    onClick={() => setProductsOpen(false)}
                    onFocus={() => setProductsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden xl:block">
              <Link
                href="/contacto"
                aria-current={isCurrent(pathname, "/contacto") ? "page" : undefined}
                className="inline-flex min-h-11 items-center rounded-[var(--radius-sm)] bg-signal px-5 text-[0.73rem] font-semibold uppercase tracking-[0.09em] text-white transition-colors hover:bg-signal-dark"
                onClick={() => setProductsOpen(false)}
              >
                Cotizar proyecto
              </Link>
            </div>

            <button
              ref={mobileButtonRef}
              type="button"
              className="relative z-10 flex h-11 items-center gap-3 rounded-[var(--radius-sm)] border border-border px-3 text-xs font-semibold uppercase tracking-[0.09em] text-navy xl:hidden"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              aria-controls="navegacion-movil"
              onClick={() => setMobileOpen((value) => !value)}
            >
              <span>{mobileOpen ? "Cerrar" : "Menú"}</span>
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </Container>
      </div>

      {mobileOpen ? (
        <div
          ref={mobilePanelRef}
          id="navegacion-movil"
          className="h-[calc(100dvh-4.75rem)] overflow-y-auto bg-navy text-white xl:hidden"
        >
          <Container className="py-8">
            <nav aria-label="Navegación móvil">
              <div className="grid gap-px bg-white/15 sm:grid-cols-2">
                <Link
                  href="/productos"
                  prefetch={false}
                  aria-current={isCurrent(pathname, "/productos") ? "page" : undefined}
                  className="bg-navy p-5 font-display text-2xl font-medium tracking-[-0.03em] hover:bg-navy-mid"
                  onClick={() => setMobileOpen(false)}
                >
                  Todos los productos
                </Link>
                <Link
                  href="/soluciones"
                  aria-current={isCurrent(pathname, "/soluciones") ? "page" : undefined}
                  className="bg-navy p-5 font-display text-2xl font-medium tracking-[-0.03em] hover:bg-navy-mid"
                  onClick={() => setMobileOpen(false)}
                >
                  Soluciones
                </Link>
              </div>

              <p className="eyebrow mb-4 mt-8 text-white/60">Familias de producto</p>
              <div className="grid gap-px bg-white/15 sm:grid-cols-2">
                {productFamilies.map((family) => (
                  <Link
                    key={family.id}
                    href={family.href}
                    prefetch={false}
                    className="group flex items-start gap-4 bg-navy p-4 hover:bg-navy-mid"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="font-mono mt-1 text-[0.64rem] text-white/60">{family.index}</span>
                    <span className="font-display text-lg font-medium leading-tight">{family.title}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-8 grid gap-px bg-white/15 sm:grid-cols-2">
                {site.nav
                  .filter((item) => item.href !== "/productos" && item.href !== "/soluciones")
                  .map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                      className="bg-navy p-4 text-sm font-semibold uppercase tracking-[0.08em] text-white/76 hover:bg-navy-mid hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
              </div>

              <Link
                href="/contacto"
                className="mt-6 flex min-h-14 items-center justify-between rounded-[var(--radius-sm)] bg-signal px-5 text-sm font-semibold uppercase tracking-[0.09em] text-white"
                onClick={() => setMobileOpen(false)}
              >
                Cotizar proyecto
                <span aria-hidden="true">→</span>
              </Link>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
