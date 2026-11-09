import { Metadata } from "next";
import Image from "next/image";
import { portfolioPreviewItems } from "@/lib/data";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Featured landscaping projects across Dutchess County — lawns, gardens, and property care.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
            Our Work
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            A selection of properties we maintain and transform across Dutchess County.
          </p>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {portfolioPreviewItems.map((item) => (
              <li key={item.slug}>
                {item.image ? (
                  <div className="aspect-video relative rounded-lg overflow-hidden bg-neutral-200">
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
                <h2 className="mt-3 text-xl font-semibold text-neutral-900">
                  {item.title}
                </h2>
                {item.location && (
                  <p className="text-sm text-neutral-600">{item.location}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
