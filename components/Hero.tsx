import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  headline?: string;
  subline?: string;
  ctaText?: string;
  ctaHref?: string;
  heroImageSrc?: string;
}

export function Hero({
  headline = "[Hero Headline]",
  subline = "[Hero subline or supporting copy.]",
  ctaText = "Get a Quote",
  ctaHref = "/contact",
  heroImageSrc,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width hero image with overlay and text on top */}
      {heroImageSrc ? (
        <div className="relative w-screen left-1/2 -translate-x-1/2 h-[70vh] min-h-[420px] max-h-[900px] bg-neutral-200">
          <Image
            src={heroImageSrc}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark gradient overlay for text readability */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30"
            aria-hidden
          />
          {/* Headline and CTA over image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
                {headline}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/95 drop-shadow-md">
                {subline}
              </p>
              <div className="mt-10">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 transition-colors shadow-lg"
                >
                  {ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-screen left-1/2 -translate-x-1/2 h-[70vh] min-h-[420px] max-h-[900px] photo-placeholder">
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                {headline}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">{subline}</p>
              <div className="mt-10">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-base font-medium text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 transition-colors"
                >
                  {ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
