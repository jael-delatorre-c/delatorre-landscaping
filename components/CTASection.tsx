import Link from "next/link";
import { contact } from "@/lib/data";
import { PhoneIcon } from "@/components/Icons";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({
  title = "Ready to transform your outdoor space?",
  description = "Get in touch for a free estimate. Call, text, email, or use the contact form.",
  buttonText = "Get a Free Estimate",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-surface-line bg-surface">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.12),transparent_60%)]"
        aria-hidden
      />
      <div className="container-lux relative section-pad text-center">
        <span className="gold-rule mx-auto" aria-hidden />
        <h2 className="heading-serif mx-auto mt-8 max-w-3xl text-4xl text-cream sm:text-5xl lg:text-6xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-body">{description}</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Link href={buttonHref} className="btn btn-primary">
            {buttonText}
          </Link>
          <a href={`tel:${contact.phoneHref}`} className="btn btn-secondary">
            <PhoneIcon className="h-4 w-4" />
            Call or Text {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
