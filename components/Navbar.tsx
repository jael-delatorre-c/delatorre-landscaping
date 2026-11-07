"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LOGO_PATH } from "@/lib/images";
import { contact } from "@/lib/data";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/Icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(href + "/"));
}

export function Navbar() {
  const pathname = usePathname() ?? "";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-forest/95 backdrop-blur supports-[backdrop-filter]:bg-forest/85 transition-[box-shadow,border-color] duration-300 border-b ${
        scrolled || menuOpen
          ? "border-surface-line shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]"
          : "border-transparent"
      }`}
    >
      <nav
        className="container-lux flex h-[72px] items-center justify-between gap-4 lg:h-20"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="shrink-0 rounded-md bg-cream px-2.5 py-1.5 transition-opacity hover:opacity-90"
          aria-label="Delatorre Landscaping home"
        >
          <Image
            src={LOGO_PATH}
            alt="Delatorre Landscaping"
            width={140}
            height={53}
            className="h-9 w-auto object-contain lg:h-10"
            preload
          />
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map(({ href, label }) => {
            const active = isActivePath(pathname, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded px-3 py-2 text-[0.9rem] font-medium transition-colors duration-200 ${
                    active ? "text-gold" : "text-cream hover:text-gold"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-px bg-gold transition-opacity duration-200 ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={`tel:${contact.phoneHref}`}
            className="hidden items-center gap-2 text-sm font-medium text-cream transition-colors hover:text-gold lg:inline-flex"
          >
            <PhoneIcon className="h-4 w-4 text-gold" />
            Call {contact.phone}
          </a>
          <Link href="/contact" onClick={closeMenu} className="btn btn-primary btn-sm hidden sm:inline-flex">
            Get a Quote
          </Link>
          {/* Mobile tap-to-call */}
          <a
            href={`tel:${contact.phoneHref}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-gold/60 text-gold transition-colors hover:bg-gold hover:text-forest lg:hidden"
            aria-label={`Call ${contact.phone}`}
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-cream transition-colors hover:text-gold xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-surface-line bg-forest xl:hidden">
          <ul className="container-lux flex flex-col py-4">
            {navLinks.map(({ href, label }) => {
              const active = isActivePath(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    className={`block border-b border-surface-line/60 py-3.5 font-serif text-2xl transition-colors ${
                      active ? "text-gold" : "text-cream hover:text-gold"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="container-lux flex flex-col gap-3 pb-6 sm:flex-row">
            <Link href="/contact" onClick={closeMenu} className="btn btn-primary w-full sm:w-auto">
              Get a Free Estimate
            </Link>
            <a href={`tel:${contact.phoneHref}`} className="btn btn-secondary w-full sm:w-auto">
              <PhoneIcon className="h-4 w-4" />
              Call {contact.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
