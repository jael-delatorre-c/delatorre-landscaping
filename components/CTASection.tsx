import Link from "next/link";

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
    <section className="bg-neutral-900 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 min-h-screen flex flex-col justify-center">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-300">{description}</p>
        <div className="mt-8">
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
