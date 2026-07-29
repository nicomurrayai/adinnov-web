import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  prefetch?: boolean;
};

const variants = {
  primary:
    "border-signal bg-signal text-white hover:border-signal-dark hover:bg-signal-dark focus-visible:outline-signal",
  secondary:
    "border-border bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-white focus-visible:outline-navy",
  ghost:
    "border-transparent bg-transparent text-navy hover:border-border hover:bg-surface focus-visible:outline-navy",
};

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 18"
      fill="none"
      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
    >
      <path d="M3 9h11M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  prefetch,
}: ButtonProps) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-3 rounded-[var(--radius-sm)] border px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.09em] transition-[background-color,border-color,color,transform] duration-300 hover:-translate-y-0.5 motion-reduce:transform-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <Arrow />
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} prefetch={prefetch}>
      {content}
    </Link>
  );
}
