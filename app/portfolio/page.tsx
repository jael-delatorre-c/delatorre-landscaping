import { Metadata } from "next";
import Image from "next/image";
import { portfolioPreviewItems } from "@/lib/data";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Featured landscaping projects across Dutchess County — lawns, gardens, and property care.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Our Work">
        A selection of properties we maintain and transform across Dutchess County.
      </PageHeader>
      <section className="section-pad bg-cream text-ink">
        <div className="container-lux">
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {portfolioPreviewItems.map((item) => (
              <li key={item.slug} id={item.slug} className="scroll-mt-28">
                {item.image && (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-cream-line">
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    />
                  </div>
                )}
                {item.location && (
                  <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                    {item.location}
                  </p>
                )}
                <h2 className="heading-serif mt-1.5 text-2xl text-ink">{item.title}</h2>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
