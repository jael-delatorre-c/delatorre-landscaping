import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, SnowflakeIcon, TreeIcon } from "@/components/Icons";

export interface ServiceItem {
  slug: string;
  name: string;
  description: string;
  /** Photo for the top of the card. */
  image?: string;
  imageAlt?: string;
  /** Used when there's no fitting photo: gradient panel with a line icon. */
  icon?: "snow" | "tree";
  /** Shows a small gold "Seasonal" tag. */
  seasonal?: boolean;
}

interface ServicesGridProps {
  services: ServiceItem[];
  /** Where "Learn more" goes. Defaults to each service's detail page. */
  linkHref?: (service: ServiceItem) => string;
}

const icons = { snow: SnowflakeIcon, tree: TreeIcon };

function CardMedia({ service }: { service: ServiceItem }) {
  if (service.image) {
    return (
      <Image
        src={service.image}
        alt={service.imageAlt ?? service.name}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
      />
    );
  }
  const Icon = icons[service.icon ?? "tree"];
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_30%_20%,#2a4234_0%,#16291f_55%,#0f1f17_100%)] transition-transform duration-700 ease-out group-hover:scale-105"
      role="img"
      aria-label={`${service.name} illustration`}
    >
      <Icon className="h-16 w-16 text-gold/80" />
      <span className="absolute inset-x-10 bottom-8 h-px bg-gold/25" aria-hidden />
    </div>
  );
}

export function ServicesGrid({ services, linkHref = (s) => `/services/${s.slug}` }: ServicesGridProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
      {services.map((service) => (
        <li key={service.slug} className="flex">
          <Link
            href={linkHref(service)}
            className="group flex w-full flex-col overflow-hidden rounded-lg border border-surface-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-forest">
              <CardMedia service={service} />
              {service.seasonal && (
                <span className="absolute left-4 top-4 rounded-sm bg-gold px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-forest">
                  Seasonal
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <h3 className="heading-serif text-2xl text-cream">{service.name}</h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-body">{service.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">
                Learn more
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
