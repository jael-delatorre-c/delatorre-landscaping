import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { PhoneIcon } from "@/components/Icons";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get a free estimate from Delatorre Landscaping. Call, text, or email — serving Dutchess County, NY.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Free Estimates" title="Contact Us">
        Get a free estimate. Reach out by phone, text, email, or the form below—we&apos;ll get back to you soon.
      </PageHeader>
      <section className="section-pad bg-forest">
        <div className="container-lux grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="rounded-lg border border-surface-line bg-surface p-6 sm:p-10">
            <h2 className="heading-serif text-3xl text-cream">Send us a message</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:pt-4">
            <p className="eyebrow">Reach Us</p>
            <p className="heading-serif mt-4 text-3xl text-cream">Genaro Delatorre</p>
            <p className="mt-1 text-sm text-body-muted">Se habla español</p>
            <span className="gold-rule mt-6" aria-hidden />
            <ul className="mt-6 space-y-4 text-body">
              <li>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="inline-flex items-center gap-3 text-lg text-cream transition-colors hover:text-gold"
                >
                  <PhoneIcon className="h-5 w-5 text-gold" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`sms:${contact.phoneHref}`} className="transition-colors hover:text-gold">
                  Text us
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-gold">
                  {contact.email}
                </a>
              </li>
              <li>{contact.address}</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
