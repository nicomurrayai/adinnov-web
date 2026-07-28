"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@content/site";
import { megaMenuColumns } from "@content/megaMenu";
import { Container } from "../ui/Container";

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2.5 4.5L6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-transparent pt-3 md:pt-4">
      <Container className="max-w-7xl">
        <div
          className="pointer-events-auto overflow-hidden rounded-2xl border border-border/60 bg-white/75 shadow-lg shadow-navy/5 backdrop-blur-xl"
          onMouseLeave={() => setProductsOpen(false)}
        >
          <div className="flex h-14 items-center justify-between px-4 md:h-16 md:px-6">
            <Link href="/" className="relative z-10 flex items-center gap-3">
              <Image
                src="/brand/logo.png"
                alt="Adinnov"
                width={140}
                height={40}
                className="h-8 w-auto md:h-9"
                priority
              />
            </Link>

            <nav className="hidden items-center gap-7 xl:gap-8 lg:flex">
              <Link
                href="/productos"
                className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  productsOpen ? "text-navy" : "text-navy/80 hover:text-navy"
                }`}
                onMouseEnter={() => setProductsOpen(true)}
                aria-expanded={productsOpen}
                aria-controls="productos-megamenu"
              >
                Productos
                <ChevronDown open={productsOpen} />
              </Link>
              {site.nav
                .filter(
                  (item) =>
                    item.href !== "/productos" &&
                    item.href !== "/contacto" &&
                    item.href !== "/#verticales",
                )
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
                    onMouseEnter={() => setProductsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              <Link
                href="/contacto"
                className="rounded-lg bg-[#1538d4] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1230b8]"
                onMouseEnter={() => setProductsOpen(false)}
              >
                Contacto
              </Link>
            </nav>

            <button
              type="button"
              className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menú</span>
              <div className="flex w-5 flex-col gap-1.5">
                <span
                  className={`h-px w-full bg-navy transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
                />
                <span
                  className={`h-px w-full bg-navy transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>

          {productsOpen ? (
            <div
              id="productos-megamenu"
              className="hidden animate-fade-in border-t border-border/50 bg-gradient-to-b from-white/90 to-surface/80 lg:block"
              onMouseEnter={() => setProductsOpen(true)}
            >
              <div className="grid max-h-[min(70vh,560px)] grid-cols-5 gap-0 overflow-y-auto px-3 py-5 xl:px-5">
                {megaMenuColumns.map((column, index) => (
                  <div
                    key={column.title}
                    className={`px-3 xl:px-4 ${
                      index > 0 ? "border-l border-border/50" : ""
                    }`}
                  >
                    {column.href ? (
                      <Link
                        href={column.href}
                        className="group mb-3.5 flex items-center gap-2"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-[#1538d4]" />
                        <span className="font-[family-name:var(--font-outfit)] text-[13px] font-semibold tracking-wide text-navy transition-colors group-hover:text-[#1538d4]">
                          {column.title}
                        </span>
                      </Link>
                    ) : (
                      <div className="mb-3.5 flex items-center gap-2">
                        <span className="h-4 w-0.5 rounded-full bg-[#1538d4]" />
                        <span className="font-[family-name:var(--font-outfit)] text-[13px] font-semibold tracking-wide text-navy">
                          {column.title}
                        </span>
                      </div>
                    )}
                    <ul className="space-y-0.5">
                      {column.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="-mx-1.5 block rounded-md px-1.5 py-1.5 text-[12.5px] leading-snug text-navy/70 transition-colors hover:bg-white hover:text-navy"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-border/50 bg-white/70 px-6 py-3.5">
                <p className="text-xs text-muted">
                  Fabricación, venta, alquiler e instalación en toda la Argentina
                </p>
                <Link
                  href="/productos"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#1538d4] transition-colors hover:text-[#1230b8]"
                >
                  Ver catálogo completo
                  <ArrowRight />
                </Link>
              </div>
            </div>
          ) : null}

          {open ? (
            <div className="border-t border-border/60 lg:hidden">
              <div className="flex max-h-[75vh] flex-col gap-1 overflow-y-auto px-4 py-4">
                <button
                  type="button"
                  className="flex items-center justify-between rounded-lg px-2 py-3 text-left text-base font-medium text-navy"
                  onClick={() => setMobileProductsOpen((v) => !v)}
                  aria-expanded={mobileProductsOpen}
                >
                  Productos
                  <ChevronDown open={mobileProductsOpen} />
                </button>

                {mobileProductsOpen ? (
                  <div className="mb-2 space-y-4 rounded-xl bg-surface/80 px-3 py-4">
                    {megaMenuColumns.map((column) => (
                      <div key={column.title}>
                        <div className="mb-1.5 flex items-center gap-2 px-1">
                          <span className="h-3.5 w-0.5 rounded-full bg-[#1538d4]" />
                          <p className="text-sm font-semibold text-navy">
                            {column.title}
                          </p>
                        </div>
                        <div className="flex flex-col">
                          {column.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="rounded-lg px-2 py-2 text-sm text-navy/70"
                              onClick={() => setOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link
                      href="/productos"
                      className="group inline-flex items-center gap-2 px-2 pt-1 text-sm font-medium text-[#1538d4]"
                      onClick={() => setOpen(false)}
                    >
                      Ver catálogo completo
                      <ArrowRight />
                    </Link>
                  </div>
                ) : null}

                {site.nav
                  .filter(
                    (item) =>
                      item.href !== "/productos" &&
                      item.href !== "/contacto" &&
                      item.href !== "/#verticales",
                  )
                  .map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-lg px-2 py-3 text-base font-medium text-navy"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                <Link
                  href="/contacto"
                  className="mt-2 rounded-lg bg-[#1538d4] px-3 py-3 text-center text-base font-medium text-white transition-colors hover:bg-[#1230b8]"
                  onClick={() => setOpen(false)}
                >
                  Contacto
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
