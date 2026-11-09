import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { ABOUT_IMAGE } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description: "Delatorre Landscaping — a higher standard of landscaping in Dutchess County, NY. Locally owned, 25+ years experience.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
            About Delatorre Landscaping
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            A higher standard of landscaping in Dutchess County
          </p>
          <p className="mt-6 max-w-2xl text-lg text-neutral-600">
            Delatorre Landscaping is a locally owned landscaping company serving Dutchess County, NY. While the company officially launched in 2022, our experience goes back 25+ years—built through hands-on work, learning what lasts, and understanding what homeowners and businesses actually need to keep a property looking sharp.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            We handle both residential and commercial landscaping, and we take pride in work that looks clean, intentional, and professionally finished.
          </p>
          <div className="mt-12 aspect-video max-w-3xl relative rounded-lg overflow-hidden bg-neutral-200">
            <Image
              src={ABOUT_IMAGE}
              alt="Garden and planting beds in front of barn"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
          <h2 className="mt-14 text-2xl font-bold text-neutral-900">
            Why we started Delatorre Landscaping
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-600">
            After years in the industry, we started Delatorre Landscaping with a simple goal: deliver dependable landscaping with clean results, fair pricing, and real experience behind the work. We wanted to build a company where the details matter—straight edges, neat beds, and a property that looks better every time we leave.
          </p>
          <h2 className="mt-10 text-2xl font-bold text-neutral-900">
            What we&apos;re known for
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Clean lines. Consistent results. No shortcuts. We work efficiently, but we don&apos;t rush. Our pace is fast enough to stay on schedule—and careful enough to avoid mistakes. Whether it&apos;s weekly maintenance or a one-time project, we focus on doing it right the first time.
          </p>
          <h2 className="mt-10 text-2xl font-bold text-neutral-900">
            Core services include
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 max-w-2xl text-neutral-600">
            <li>Weekly Grounds Maintenance (mowing, edging, trimming, clean finish)</li>
            <li>Garden & Bed Care (weeding, pruning, mulch refresh, seasonal touch-ups)</li>
            <li>Property Clearing & Brush Management (overgrowth removal, cleanup, haul-away)</li>
          </ul>
          <p className="mt-4 max-w-2xl text-neutral-600">
            We also offer seasonal work and larger projects depending on the property and the job.
          </p>
          <h2 className="mt-10 text-2xl font-bold text-neutral-900">
            Flexible pricing that fits the job
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-600">
            We keep pricing straightforward and fair. Depending on the service, we offer:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 max-w-2xl text-neutral-600">
            <li>Hourly work for smaller tasks and cleanups</li>
            <li>Project-based quotes for bigger jobs</li>
            <li>Weekly maintenance plans for consistent care all season</li>
          </ul>
          <h2 className="mt-10 text-2xl font-bold text-neutral-900">
            Professional, prepared, and licensed
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-600">
            We show up ready to work with professional equipment, and we document results with before-and-after photos when helpful. We&apos;re also licensed, and we treat every property with respect—clean worksite, clean finish.
          </p>
          <h2 className="mt-10 text-2xl font-bold text-neutral-900">
            Free estimates
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-600">
            We offer free estimates and make it easy to get started. Reach out however you prefer—call, text, email, or the contact form—and we&apos;ll take it from there.
          </p>
          <h2 className="mt-10 text-2xl font-bold text-neutral-900">
            Serving all of Dutchess County, NY
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Poughkeepsie and the surrounding areas. Get in touch for a free estimate.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-base font-medium text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 transition-colors"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
