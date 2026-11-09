import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { contact } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Delatorre Landscaping",
    description: "Premium landscaping in Dutchess County, NY. Weekly maintenance, seasonal cleanups, and outdoor upgrades.",
    url: "https://delatorrelandscaping.com",
    telephone: contact.phone,
    email: contact.email,
    address: { "@type": "PostalAddress", addressLocality: contact.address },
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-neutral-900 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
