import Link from "next/link";

export interface ServiceItem {
  slug: string;
  name: string;
  description: string;
}

interface ServicesGridProps {
  services: ServiceItem[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
      {services.map((service) => (
        <li key={service.slug}>
          <Link
            href={`/services/${service.slug}`}
            className="group block rounded-lg border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
          >
            <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-neutral-700">
              {service.name}
            </h3>
            <p className="mt-2 text-sm text-neutral-600">{service.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
