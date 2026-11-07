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

const linkClass = "text-sm text-body transition-colors hover:text-gold";

export function Footer() {
  return (
    <footer className="border-t border-surface-line bg-forest">
      <div className="container-lux py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-block rounded-md bg-cream px-3 py-2 transition-opacity hover:opacity-90"
              aria-label="Delatorre Landscaping home"
            >
              <Image
                src={LOGO_PATH}
                alt="Delatorre Landscaping"
                width={150}
                height={57}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-xs font-serif text-xl leading-snug text-cream">
              A higher standard of landscaping in Dutchess County.
            </p>
            <p className="mt-3 text-sm text-body-muted">Family owned · Se habla español</p>
          </div>

          <div>
            <h2 className="eyebrow">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow">Contact</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`tel:${contact.phoneHref}`} className={linkClass}>
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className={`${linkClass} break-all`}>
                  {contact.email}
                </a>
              </li>
              <li className="text-sm text-body">{contact.address}</li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow">Service Areas</h2>
            <ul className="mt-5 space-y-3">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-body">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-surface-line pt-8 text-sm text-body-muted sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Delatorre Landscaping. All rights reserved.</p>
          <p>Poughkeepsie · Dutchess County, NY</p>
        </div>
      </div>
    </footer>
  );
}
