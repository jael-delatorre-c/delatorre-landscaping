import { Metadata } from "next";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Weekly grounds maintenance, garden care, property clearing, seasonal cleanups, snow removal, and tree work in Dutchess County, NY.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="What We Do" title="Our Services">
        From weekly maintenance to seasonal cleanups and stormwork, we keep your property looking sharp. Free estimates.
      </PageHeader>
      <section className="section-pad bg-forest">
        <div className="container-lux">
          <ServicesGrid services={services} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
