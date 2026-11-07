import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { contact } from "@/lib/data";
import "./globals.css";

// next/font self-hosts Google Fonts at build time (no extra network round-trip)
// and only ships the weights we use.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://delatorrelandscaping.com"),
  title: { default: "Delatorre Landscaping | Premium Landscaping in Dutchess County", template: "%s | Delatorre Landscaping" },
  description: "High-quality landscaping in Dutchess County, NY. Weekly maintenance, seasonal cleanups, and outdoor upgrades. Free estimates.",
  openGraph: {
    title: "Delatorre Landscaping | Premium Landscaping in Dutchess County",
    description: "High-quality landscaping in Dutchess County, NY. Free estimates.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0F1F17",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://delatorrelandscaping.com/#business",
  name: "Delatorre Landscaping",
  description:
    "Premium landscaping in Dutchess County, NY. Weekly maintenance, seasonal cleanups, snow and ice management, and outdoor upgrades.",
  url: "https://delatorrelandscaping.com",
  logo: "https://delatorrelandscaping.com/logo.png",
  image: "https://delatorrelandscaping.com/logo.png",
  telephone: `+1-${contact.phone}`,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Poughkeepsie",
    addressRegion: "NY",
    postalCode: "12603",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Dutchess County, NY",
  },
  knowsLanguage: ["en", "es"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-forest text-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-forest"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
