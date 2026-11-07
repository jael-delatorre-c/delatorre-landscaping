import Link from "next/link";
import Image from "next/image";
import { contact } from "@/lib/data";
import { PhoneIcon } from "@/components/Icons";

interface HeroProps {
  eyebrow?: string;
  headline: string;
  subline: string;
  ctaText?: string;
  ctaHref?: string;
  heroImageSrc: string;
  heroImageAlt: string;
}

export function Hero({
  eyebrow = "Dutchess County, NY",
  headline,
  subline,
  ctaText = "Get a Free Estimate",
  ctaHref = "/contact",
  heroImageSrc,
  heroImageAlt,
}: HeroProps) {
  return (
    <section className="relative isolate flex min-h-[72svh] items-end overflow-hidden bg-forest md:min-h-[70vh] md:items-center lg:min-h-[85vh]">
      <Image
        src={heroImageSrc}
        alt={heroImageAlt}
        fill
        preload
        quality={75}
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Forest gradient — strongest bottom-left where the copy sits */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,#0f1f17_0%,rgba(15,31,23,0.9)_40%,rgba(15,31,23,0.62)_75%,rgba(15,31,23,0.45)_100%)] md:bg-[linear-gradient(to_right,rgba(15,31,23,0.92)_0%,rgba(15,31,23,0.7)_40%,rgba(15,31,23,0.15)_80%),linear-gradient(to_top,#0f1f17_0%,rgba(15,31,23,0)_45%)]"
        aria-hidden
      />

      <div className="container-lux pb-14 pt-28 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3">
            <span className="gold-rule w-8" aria-hidden />
            {eyebrow}
          </p>
          <h1 className="heading-serif mt-5 text-[2.6rem] text-cream sm:text-6xl lg:text-7xl">{headline}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/90">{subline}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href={ctaHref} className="btn btn-primary">
              {ctaText}
            </Link>
            <a href={`tel:${contact.phoneHref}`} className="btn btn-secondary">
              <PhoneIcon className="h-4 w-4" />
              Call {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
