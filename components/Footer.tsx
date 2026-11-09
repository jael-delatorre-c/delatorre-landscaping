import Link from "next/link";
import Image from "next/image";
import { contact, serviceAreas } from "@/lib/data";
import { LOGO_PATH } from "@/lib/images";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block" aria-label="Delatorre Landscaping home">
              <Image
                src={LOGO_PATH}
                alt="Delatorre Landscaping"
                width={140}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-2 text-sm text-neutral-600">
              A higher standard of landscaping in Dutchess County.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 rounded transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Contact</h3>
            <p className="mt-4 text-sm text-neutral-600">
              <a href={`tel:${contact.phone.replace(/\D/g, "")}`} className="hover:text-neutral-900 transition-colors">
                {contact.phone}
              </a>
            </p>
            <p className="text-sm text-neutral-600">
              <a href={`mailto:${contact.email}`} className="hover:text-neutral-900 transition-colors">
                {contact.email}
              </a>
            </p>
            <p className="text-sm text-neutral-600">{contact.address}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Service Areas</h3>
            <p className="mt-4 text-sm text-neutral-600">{serviceAreas.join(", ")}</p>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Delatorre Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
