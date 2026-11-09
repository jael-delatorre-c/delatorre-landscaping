import { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { serviceAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "Areas we serve in Dutchess County and surrounding communities.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
            Service Areas
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            We serve Dutchess County and surrounding communities.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {serviceAreas.map((city) => (
              <li
                key={city}
                className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
