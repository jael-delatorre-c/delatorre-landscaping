import { Metadata } from "next";
import Image from "next/image";
import { galleryItems } from "@/lib/data";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of our landscaping work across Dutchess County.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
            Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            A selection of our work with dates and short descriptions.
          </p>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {galleryItems.map((item, i) => (
              <li key={i}>
                <div className="aspect-video relative overflow-hidden rounded-lg bg-neutral-200">
                  <Image
                    src={item.image}
                    alt={item.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-500">{item.date}</p>
                <p className="mt-0.5 text-neutral-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
