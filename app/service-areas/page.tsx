import { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { serviceAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "Areas we serve in Dutchess County and surrounding communities.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHeader eyebrow="Where We Work" title="Service Areas">
        We serve Dutchess County and surrounding communities.
      </PageHeader>
      <section className="section-pad bg-forest">
        <div className="container-lux">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {serviceAreas.map((city) => (
              <li
                key={city}
                className="flex items-center gap-4 rounded-lg border border-surface-line bg-surface px-6 py-5"
              >
                <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden />
                <span className="heading-serif text-2xl text-cream">{city}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
