import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-navy text-white hover:bg-navy-mid focus-visible:outline-navy",
  secondary:
    "bg-white text-navy border border-border hover:border-navy/40 hover:bg-surface focus-visible:outline-navy",
  ghost:
    "bg-transparent text-navy hover:bg-surface focus-visible:outline-navy",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
