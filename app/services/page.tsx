import { Metadata } from "next";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTASection } from "@/components/CTASection";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Weekly grounds maintenance, garden care, property clearing, seasonal cleanups, snow removal, and tree work in Dutchess County, NY.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            From weekly maintenance to seasonal cleanups and stormwork, we keep your property looking sharp. Free estimates.
          </p>
          <div className="mt-12">
            <ServicesGrid services={services} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
