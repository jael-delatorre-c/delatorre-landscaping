import { Metadata } from "next";
import Image from "next/image";
import { galleryItems } from "@/lib/data";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of our landscaping work across Dutchess County.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="Gallery" title="Gallery">
        A selection of our work with dates and short descriptions.
      </PageHeader>
      <section className="section-pad bg-forest">
        <div className="container-lux">
          <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {galleryItems.map((item) => (
              <li key={item.image} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-surface-line bg-surface">
                  <Image
                    src={item.image}
                    alt={item.description}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  />
                </div>
                <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold">{item.date}</p>
                <p className="mt-1.5 text-body">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
