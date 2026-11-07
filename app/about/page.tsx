import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { CTASection } from "@/components/CTASection";
import { ABOUT_IMAGE } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description: "Delatorre Landscaping — a higher standard of landscaping in Dutchess County, NY. Locally owned, 25+ years experience.",
};

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-t border-cream-line pt-8">
      <h2 className="heading-serif text-3xl text-ink">{title}</h2>
      <div className="mt-4 space-y-4 text-[1.0625rem] leading-relaxed text-ink-muted">{children}</div>
    </div>
  );
}

function GoldList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-deep" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="section-pad bg-forest">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow flex items-center gap-3">
              <span className="gold-rule w-8" aria-hidden />
              Our Story
            </p>
            <h1 className="heading-serif mt-5 text-5xl text-cream sm:text-6xl">About Delatorre Landscaping</h1>
            <p className="mt-6 font-serif text-2xl text-cream/90">
              A higher standard of landscaping in Dutchess County
            </p>
            <p className="mt-6 text-lg leading-relaxed text-body">
              Delatorre Landscaping is a locally owned landscaping company serving Dutchess County, NY. While the company officially launched in 2022, our experience goes back 25+ years—built through hands-on work, learning what lasts, and understanding what homeowners and businesses actually need to keep a property looking sharp.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-body">
              We handle both residential and commercial landscaping, and we take pride in work that looks clean, intentional, and professionally finished.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-surface-line bg-surface sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src={ABOUT_IMAGE}
              alt="Garden and planting beds in front of barn"
              fill
              preload
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream text-ink">
        <div className="container-lux grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
          <Block title="Why we started Delatorre Landscaping">
            <p>
              After years in the industry, we started Delatorre Landscaping with a simple goal: deliver dependable landscaping with clean results, fair pricing, and real experience behind the work. We wanted to build a company where the details matter—straight edges, neat beds, and a property that looks better every time we leave.
            </p>
          </Block>
          <Block title="What we’re known for">
            <p>
              Clean lines. Consistent results. No shortcuts. We work efficiently, but we don&apos;t rush. Our pace is fast enough to stay on schedule—and careful enough to avoid mistakes. Whether it&apos;s weekly maintenance or a one-time project, we focus on doing it right the first time.
            </p>
          </Block>
          <Block title="Core services include">
            <GoldList
              items={[
                "Weekly Grounds Maintenance (mowing, edging, trimming, clean finish)",
                "Garden & Bed Care (weeding, pruning, mulch refresh, seasonal touch-ups)",
                "Property Clearing & Brush Management (overgrowth removal, cleanup, haul-away)",
              ]}
            />
            <p>We also offer seasonal work and larger projects depending on the property and the job.</p>
          </Block>
          <Block title="Flexible pricing that fits the job">
            <p>We keep pricing straightforward and fair. Depending on the service, we offer:</p>
            <GoldList
              items={[
                "Hourly work for smaller tasks and cleanups",
                "Project-based quotes for bigger jobs",
                "Weekly maintenance plans for consistent care all season",
              ]}
            />
          </Block>
          <Block title="Professional, prepared, and licensed">
            <p>
              We show up ready to work with professional equipment, and we document results with before-and-after photos when helpful. We&apos;re also licensed, and we treat every property with respect—clean worksite, clean finish.
            </p>
          </Block>
          <Block title="Free estimates">
            <p>
              We offer free estimates and make it easy to get started. Reach out however you prefer—call, text, email, or the contact form—and we&apos;ll take it from there.
            </p>
          </Block>
          <div className="md:col-span-2">
            <Block title="Serving all of Dutchess County, NY">
              <p>Poughkeepsie and the surrounding areas. Get in touch for a free estimate.</p>
              <Link href="/contact" className="btn btn-primary mt-4">
                Get a Free Estimate
              </Link>
            </Block>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
