import Link from "next/link";
import Image from "next/image";

export interface PortfolioItem {
  slug: string;
  title: string;
  location?: string;
  image?: string;
}

interface PortfolioPreviewProps {
  title?: string;
  items: PortfolioItem[];
  viewAllHref?: string;
}

export function PortfolioPreview({
  title = "[Featured Projects]",
  items,
  viewAllHref = "/portfolio",
}: PortfolioPreviewProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">{title}</h2>
          <Link
            href={viewAllHref}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 rounded transition-colors"
          >
            View all
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/portfolio#${item.slug}`}
                className="group block focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 rounded-lg overflow-hidden"
              >
                {item.image ? (
                  <div className="aspect-video relative overflow-hidden rounded-lg bg-neutral-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="aspect-video rounded-lg photo-placeholder" aria-hidden>[Photo]</div>
                )}
                <div className="mt-3">
                  <h3 className="font-semibold text-neutral-900 group-hover:text-neutral-700">
                    {item.title}
                  </h3>
                  {item.location && (
                    <p className="text-sm text-neutral-600">{item.location}</p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
