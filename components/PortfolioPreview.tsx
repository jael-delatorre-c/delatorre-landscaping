import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/Icons";

export interface PortfolioItem {
  slug: string;
  title: string;
  location?: string;
  image?: string;
  /** Descriptive alt text; falls back to the title. */
  imageAlt?: string;
}

interface PortfolioPreviewProps {
  eyebrow?: string;
  title?: string;
  items: PortfolioItem[];
  viewAllHref?: string;
}

/**
 * Editorial grid on a cream band: one large feature + five supporting images.
 * lg: feature spans 7 cols × 2 rows, two stacked at right, then a row of three.
 */
const layout = [
  "sm:col-span-2 lg:col-span-7 lg:row-span-2",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "sm:col-span-2 lg:col-span-4",
];

const aspect = [
  "aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[520px]",
  "aspect-[16/10]",
  "aspect-[16/10]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[16/9] lg:aspect-[4/3]",
];

export function PortfolioPreview({
  eyebrow = "Selected Work",
  title = "Featured Projects",
  items,
  viewAllHref = "/portfolio",
}: PortfolioPreviewProps) {
  return (
    <section className="section-pad bg-cream text-ink">
      <div className="container-lux">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow eyebrow-on-light">{eyebrow}</p>
            <h2 className="heading-serif mt-4 text-4xl text-ink sm:text-5xl">{title}</h2>
          </div>
          <Link
            href={viewAllHref}
            className="group inline-flex items-center gap-2 border-b border-gold-deep/40 pb-1 text-sm font-semibold text-gold-deep transition-colors hover:border-gold-deep"
          >
            View all
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-y-8" role="list">
          {items.slice(0, 6).map((item, i) => (
            <li key={item.slug} className={`flex flex-col ${layout[i] ?? "lg:col-span-4"}`}>
              <Link href={`${viewAllHref}#${item.slug}`} className="group flex h-full flex-col">
                <div
                  className={`relative overflow-hidden rounded-md bg-cream-line ${aspect[i] ?? "aspect-[4/3]"} ${
                    i === 0 ? "lg:flex-1" : ""
                  }`}
                >
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes={
                        i === 0
                          ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 700px"
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                      }
                    />
                  )}
                </div>
                <div className="mt-4">
                  {item.location && (
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                      {item.location}
                    </p>
                  )}
                  <h3
                    className={`heading-serif mt-1.5 text-ink transition-colors group-hover:text-gold-deep ${
                      i === 0 ? "text-3xl sm:text-[2.1rem]" : "text-2xl"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
