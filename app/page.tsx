import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ServicesGrid } from "@/components/ServicesGrid";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { WhyDelatorre } from "@/components/WhyDelatorre";
import { CTASection } from "@/components/CTASection";
import { ScrollFadeSection } from "@/components/ScrollFadeSection";
import { ArrowRightIcon } from "@/components/Icons";
import { services, portfolioPreviewItems } from "@/lib/data";
import { HERO_IMAGE, HERO_IMAGE_ALT } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Dutchess County, NY"
        headline="Premium Landscaping. Clean Lines. Lasting Results."
        subline="High-quality installs, sharp weekly maintenance, and outdoor upgrades that stay looking new."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        heroImageSrc={HERO_IMAGE}
        heroImageAlt={HERO_IMAGE_ALT}
      />
      <TrustStrip />

      <section className="section-pad bg-forest">
        <div className="container-lux">
          <ScrollFadeSection>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="eyebrow">Our Services</p>
                <h2 className="heading-serif mt-4 text-4xl text-cream sm:text-5xl">
                  Year-round care for properties that stand out.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-body">
                  From weekly maintenance to seasonal cleanups and stormwork, we keep your property looking sharp.
                </p>
              </div>
              <Link
                href="/services"
                className="group inline-flex shrink-0 items-center gap-2 border-b border-gold/40 pb-1 text-sm font-semibold text-gold transition-colors hover:border-gold"
              >
                View all services
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollFadeSection>
          <ScrollFadeSection className="mt-12">
            <ServicesGrid services={services} linkHref={() => "/services"} />
          </ScrollFadeSection>
        </div>
      </section>

      <ScrollFadeSection>
        <PortfolioPreview items={portfolioPreviewItems} />
      </ScrollFadeSection>
      <ScrollFadeSection>
        <WhyDelatorre />
      </ScrollFadeSection>
      <CTASection />
    </>
  );
}
