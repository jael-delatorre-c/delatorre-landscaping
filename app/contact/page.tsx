import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get a free estimate from Delatorre Landscaping. Call, text, or email — serving Dutchess County, NY.",
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Get a free estimate. Reach out by phone, text, email, or the form below—we&apos;ll get back to you soon.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
          <div className="mt-12 border-t border-neutral-200 pt-8">
            <h2 className="text-lg font-semibold text-neutral-900">Reach Us</h2>
            <p className="mt-2 font-medium text-neutral-900">Genaro Delatorre</p>
            <p className="mt-1 text-neutral-600">
              <a href={`tel:${contact.phone.replace(/\D/g, "")}`} className="hover:text-neutral-900 transition-colors">
                {contact.phone}
              </a>
            </p>
            <p className="text-neutral-600">
              <a href={`mailto:${contact.email}`} className="hover:text-neutral-900 transition-colors">
                {contact.email}
              </a>
            </p>
            <p className="text-neutral-600">{contact.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
