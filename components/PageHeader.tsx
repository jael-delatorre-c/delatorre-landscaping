import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}

/** Shared intro band for inner pages. */
export function PageHeader({ eyebrow, title, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-surface-line bg-forest">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(201,168,106,0.10),transparent_55%)]"
        aria-hidden
      />
      <div className="container-lux relative pb-14 pt-16 md:pb-20 md:pt-24">
        <p className="eyebrow flex items-center gap-3">
          <span className="gold-rule w-8" aria-hidden />
          {eyebrow}
        </p>
        <h1 className="heading-serif mt-5 max-w-3xl text-5xl text-cream sm:text-6xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-body">{children}</div>}
      </div>
    </section>
  );
}
