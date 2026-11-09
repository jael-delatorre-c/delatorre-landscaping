import Image from "next/image";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { GallerySection } from "@/components/GallerySection";
import { CTASection } from "@/components/CTASection";
import { ScrollGradient } from "@/components/ScrollGradient";
import { ScrollFadeSection } from "@/components/ScrollFadeSection";
import Link from "next/link";
import {
  services,
  portfolioPreviewItems,
  galleryItems,
} from "@/lib/data";
import { HERO_IMAGE, SERVICES_IMAGE } from "@/lib/images";

export default function HomePage() {
  return (
    <ScrollGradient>
      <Hero
        headline="Premium Landscaping. Clean Lines. Lasting Result."
        subline="High-quality installs, sharp weekly maintenance, and outdoor upgrades that stay looking new."
        ctaText="Get a Quote"
        ctaHref="/contact"
        heroImageSrc={HERO_IMAGE}
      />
      <ScrollFadeSection>
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl text-neutral-600">
              From weekly maintenance to seasonal cleanups and stormwork, we keep your property looking sharp.
            </p>
            <div className="mt-10 aspect-[21/9] max-w-4xl relative rounded-lg overflow-hidden bg-neutral-200">
              <Image
                src={SERVICES_IMAGE}
                alt="Weekly lawn striping and grounds maintenance"
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
            <div className="mt-10">
              <ServicesGrid services={services} />
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 rounded"
              >
                View all services
              </Link>
            </div>
          </div>
        </section>
      </ScrollFadeSection>
      <ScrollFadeSection>
        <PortfolioPreview items={portfolioPreviewItems} />
      </ScrollFadeSection>
      <ScrollFadeSection>
        <GallerySection items={galleryItems} />
      </ScrollFadeSection>
      <ScrollFadeSection>
        <CTASection />
      </ScrollFadeSection>
    </ScrollGradient>
  );
}
