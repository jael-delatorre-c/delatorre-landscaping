import Link from "next/link";
import Image from "next/image";
import type { GalleryItem } from "@/lib/data";

interface GallerySectionProps {
  title?: string;
  items: GalleryItem[];
  viewAllHref?: string;
}

export function GallerySection({
  title = "Gallery",
  items,
  viewAllHref = "/gallery",
}: GallerySectionProps) {
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
          {items.map((item, i) => (
            <li key={i} className="group">
              <div className="aspect-video relative overflow-hidden rounded-lg bg-neutral-200">
                <Image
                  src={item.image}
                  alt={item.description}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-neutral-500">{item.date}</p>
              <p className="mt-0.5 text-sm text-neutral-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
