"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { productFamilies } from "@content/site";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 14 14"
      fill="none"
      className={`h-3 w-3 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
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

const headerNav = [
  { label: "Productos", href: "/productos" },
  { label: "Casos de éxito", href: "/trabajos" },
] as const;

type ProductFamilyId = (typeof productFamilies)[number]["id"];
const DEFAULT_FAMILY_ID: ProductFamilyId = "totems-terminales";

export function Header() {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFamilyId, setActiveFamilyId] = useState<ProductFamilyId>(DEFAULT_FAMILY_ID);
  const headerRef = useRef<HTMLElement>(null);
  const productButtonRef = useRef<HTMLButtonElement>(null);
  const productsPanelRef = useRef<HTMLDivElement>(null);
  const productsCloseTimerRef = useRef<number | null>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  function clearProductsCloseTimer() {
    if (productsCloseTimerRef.current !== null) {
      window.clearTimeout(productsCloseTimerRef.current);
      productsCloseTimerRef.current = null;
    }
  }

  function openProductsMenu() {
    clearProductsCloseTimer();
    setProductsOpen(true);
  }

  function scheduleCloseProductsMenu() {
    clearProductsCloseTimer();
    productsCloseTimerRef.current = window.setTimeout(() => {
      setProductsOpen(false);
      productsCloseTimerRef.current = null;
    }, 140);
  }

  const activeFamily =
    productFamilies.find((family) => family.id === activeFamilyId) ?? productFamilies[0]!;

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
    setProductsOpen(false);
    setMobileOpen(false);
    setActiveFamilyId(DEFAULT_FAMILY_ID);
    clearProductsCloseTimer();
  }, [pathname]);

  useEffect(() => {
    if (!productsOpen) {
      setActiveFamilyId(DEFAULT_FAMILY_ID);
    }
  }, [productsOpen]);

  useEffect(() => {
    return () => clearProductsCloseTimer();
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

  const navIdle = "border-transparent text-navy/66 hover:text-navy";
  const navActive = "border-signal text-navy";
  const navItemClass = (active: boolean) =>
    `inline-flex h-full items-center border-b-2 border-solid px-3 font-sans text-[0.76rem] font-semibold uppercase leading-none tracking-[0.08em] transition-colors ${
      active ? navActive : navIdle
    }`;
  const shellClass =
    "border-border/80 bg-white text-navy shadow-[var(--shadow-card)]";

  return (
    <header ref={headerRef} className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto mx-auto w-full max-w-[90rem] px-3 pt-3 sm:px-5 lg:px-8 xl:px-10">
        <div
          className={`relative rounded-[1.35rem] border transition-[background-color,border-color,box-shadow,color] duration-300 ${shellClass}`}
        >
          <div className="relative flex h-[4.5rem] items-center justify-between gap-3 px-3 sm:h-[5rem] sm:px-5">
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
                width={240}
                height={88}
                loading="eager"
                fetchPriority="high"
                className="h-[4.1rem] w-auto sm:h-[4.7rem]"
              />
            </Link>

            <div className="hidden h-full items-center gap-1 xl:flex">
              <nav aria-label="Navegación principal" className="flex h-full items-center">
                {headerNav.map((item) => {
                  if (item.href === "/productos") {
                    return (
                      <div
                        key={item.href}
                        className="static flex h-full items-center"
                        onMouseEnter={openProductsMenu}
                        onMouseLeave={scheduleCloseProductsMenu}
                      >
                        <button
                          ref={productButtonRef}
                          type="button"
                          className={`${navItemClass(
                            pathname.startsWith("/productos") || productsOpen,
                          )} gap-1`}
                          aria-expanded={productsOpen}
                          aria-haspopup="true"
                          aria-controls="familias-productos"
                          aria-current={pathname.startsWith("/productos") ? "page" : undefined}
                          onClick={() => setProductsOpen((value) => !value)}
                          onFocus={openProductsMenu}
                          onKeyDown={(event) => {
                            if (event.key === "ArrowDown") {
                              event.preventDefault();
                              openProductsMenu();
                              requestAnimationFrame(focusFirstProduct);
                            }
                          }}
                        >
                          {item.label}
                          <Chevron open={productsOpen} />
                        </button>

                        {productsOpen ? (
                          <div
                            ref={productsPanelRef}
                            id="familias-productos"
                            className="absolute inset-x-0 top-full pt-2"
                            onMouseEnter={openProductsMenu}
                            onMouseLeave={scheduleCloseProductsMenu}
                          >
                            <div className="overflow-hidden rounded-[1.25rem] border border-border bg-paper text-navy shadow-[var(--shadow-float)]">
                              <div className="grid grid-cols-12 gap-x-8 p-8">
                                <div className="col-span-3 flex flex-col border-r border-border pr-8">
                                  <div className="relative min-h-[22rem] flex-1 overflow-hidden bg-aluminum-light">
                                    {productFamilies.map((family) => (
                                      <Image
                                        key={family.id}
                                        src={family.image}
                                        alt=""
                                        fill
                                        sizes="280px"
                                        className={`object-cover transition-opacity duration-300 ${
                                          family.id === activeFamilyId
                                            ? "opacity-100"
                                            : "opacity-0"
                                        }`}
                                        aria-hidden={family.id !== activeFamilyId}
                                      />
                                    ))}
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-4 pb-4 pt-16">
                                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/70">
                                        {activeFamily.index}
                                      </p>
                                      <p className="font-display mt-1 text-lg font-medium leading-tight tracking-[-0.025em] text-white">
                                        {activeFamily.title}
                                      </p>
                                    </div>
                                  </div>
                                  <Link
                                    href="/productos"
                                    prefetch={false}
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy underline decoration-signal decoration-2 underline-offset-4"
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
                                      className={`group p-5 transition-colors focus-visible:relative ${
                                        family.id === activeFamilyId
                                          ? "bg-ivory"
                                          : "bg-paper hover:bg-ivory"
                                      }`}
                                      onClick={() => setProductsOpen(false)}
                                      onFocus={() => setActiveFamilyId(family.id)}
                                      onMouseEnter={() => setActiveFamilyId(family.id)}
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
                      className={navItemClass(isCurrent(pathname, item.href))}
                      onClick={() => setProductsOpen(false)}
                      onFocus={() => setProductsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <Link
                href="/contacto"
                aria-current={isCurrent(pathname, "/contacto") ? "page" : undefined}
                className="ml-2 inline-flex min-h-11 items-center rounded-full bg-signal px-5 text-[0.73rem] font-semibold uppercase tracking-[0.09em] text-white transition-colors hover:bg-signal-dark"
                onClick={() => setProductsOpen(false)}
              >
                Cotizar
              </Link>
            </div>

            <button
              ref={mobileButtonRef}
              type="button"
              className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border text-navy xl:hidden"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              aria-controls="navegacion-movil"
              onClick={() => setMobileOpen((value) => !value)}
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>

          {mobileOpen ? (
            <div
              ref={mobilePanelRef}
              id="navegacion-movil"
              className="max-h-[min(70dvh,36rem)] overflow-y-auto border-t border-border px-3 pb-4 pt-2 text-white sm:px-5 xl:hidden"
            >
              <nav aria-label="Navegación móvil">
                <div className="grid gap-px overflow-hidden rounded-2xl bg-white/15">
                  <Link
                    href="/productos"
                    prefetch={false}
                    aria-current={isCurrent(pathname, "/productos") ? "page" : undefined}
                    className="bg-navy/90 p-5 font-display text-2xl font-medium tracking-[-0.03em] hover:bg-navy-mid"
                    onClick={() => setMobileOpen(false)}
                  >
                    Productos
                  </Link>
                </div>

                <p className="eyebrow mb-4 mt-8 text-navy/50">Familias de producto</p>
                <div className="grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2">
                  {productFamilies.map((family) => (
                    <Link
                      key={family.id}
                      href={family.href}
                      prefetch={false}
                      className="group flex items-start gap-4 bg-navy/90 p-4 hover:bg-navy-mid"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="font-mono mt-1 text-[0.64rem] text-white/60">{family.index}</span>
                      <span className="font-display text-lg font-medium leading-tight">{family.title}</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-white/15">
                  {headerNav
                    .filter((item) => item.href !== "/productos")
                    .map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                        className="bg-navy/90 p-4 text-sm font-semibold uppercase tracking-[0.08em] text-white/76 hover:bg-navy-mid hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                </div>

                <Link
                  href="/contacto"
                  className="mt-6 flex min-h-14 items-center justify-between rounded-full bg-signal px-5 text-sm font-semibold uppercase tracking-[0.09em] text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Cotizar
                  <span aria-hidden="true">→</span>
                </Link>
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
