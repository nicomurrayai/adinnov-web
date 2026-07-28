"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@content/site";
import { categories } from "@content/categories";
import { Container } from "../ui/Container";

export function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-transparent pt-3 md:pt-4">
      <Container>
        <div className="pointer-events-auto overflow-hidden rounded-2xl border border-border/60 bg-white/70 shadow-lg shadow-navy/5 backdrop-blur-xl">
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

            <nav className="hidden items-center gap-8 lg:flex">
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href="/productos"
                  className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
                >
                  Productos
                </Link>
                {productsOpen ? (
                  <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-4">
                    <div className="grid grid-cols-2 gap-1 rounded-xl border border-border/60 bg-white/90 p-4 shadow-lg shadow-navy/5 backdrop-blur-xl">
                      {categories.map((c) => (
                        <Link
                          key={c.id}
                          href={c.href}
                          className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-surface"
                        >
                          <span className="block text-sm font-medium text-navy">
                            {c.name}
                          </span>
                          <span className="mt-0.5 line-clamp-1 text-xs text-muted">
                            {c.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
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
                  >
                    {item.label}
                  </Link>
                ))}
              <Link
                href="/contacto"
                className="rounded-lg bg-[#1538d4] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1230b8]"
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

          {open ? (
            <div className="border-t border-border/60 lg:hidden">
              <div className="flex flex-col gap-1 px-4 py-4">
                {site.nav
                  .filter(
                    (item) =>
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
