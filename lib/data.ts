import type { ServiceItem } from "@/components/ServicesGrid";
import type { PortfolioItem } from "@/components/PortfolioPreview";
import { PORTFOLIO_IMAGES } from "@/lib/images";
import type { FAQItem } from "@/components/FAQAccordion";

export interface GalleryItem {
  image: string;
  date: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    slug: "weekly-grounds-maintenance",
    name: "Weekly Grounds Maintenance",
    description:
      "Routine mowing, edging, trimming, and detail work to keep your property crisp, consistent, and professionally maintained all season.",
  },
  {
    slug: "garden-planting-care",
    name: "Garden & Planting Care",
    description:
      "Bed maintenance, weeding, pruning, mulch refreshes, and seasonal planting to keep your landscape healthy, clean, and intentionally designed.",
  },
  {
    slug: "property-clearing-brush-management",
    name: "Property Clearing & Brush Management",
    description:
      "Overgrowth removal, brush clearing, light hauling, and site cleanouts to restore clean lines and open up your property.",
  },
  {
    slug: "seasonal-cleanups",
    name: "Seasonal Cleanups",
    description:
      "Spring and fall cleanups including leaf removal, bed cleanouts, cutbacks, and debris hauling—so your property looks \"reset\" for the season.",
  },
  {
    slug: "snow-ice-management",
    name: "Snow & Ice Management",
    description:
      "Reliable plowing and clearing for driveways and access areas, with optional salting/de-icing for safer, worry-free winter service.",
  },
  {
    slug: "tree-stormwork-removal",
    name: "Tree & Stormwork Removal",
    description:
      "Removal of downed trees, hazardous limbs, and storm debris with safe handling and full cleanup (including haul-away).",
  },
];

export const portfolioPreviewItems: PortfolioItem[] = [
  { slug: "garden-planting-beds", title: "Garden & Planting Beds", location: "Dutchess County", image: PORTFOLIO_IMAGES[0] },
  { slug: "weekly-lawn-striping", title: "Weekly Lawn Striping", location: "Dutchess County", image: PORTFOLIO_IMAGES[1] },
  { slug: "poolside-grounds", title: "Poolside Grounds Maintenance", location: "Dutchess County", image: PORTFOLIO_IMAGES[2] },
  { slug: "pool-patio-stonework", title: "Pool Patio & Stonework", location: "Dutchess County", image: PORTFOLIO_IMAGES[3] },
  { slug: "vine-installation-maintenance", title: "Vine Installation & Maintenance", location: "Dutchess County", image: PORTFOLIO_IMAGES[4] },
  { slug: "bush-trimming", title: "Bush Trimming", location: "Dutchess County", image: PORTFOLIO_IMAGES[5] },
];

export const galleryItems: GalleryItem[] = [
  { image: PORTFOLIO_IMAGES[0], date: "2021", description: "Garden and planting beds in front of barn." },
  { image: PORTFOLIO_IMAGES[1], date: "2021", description: "Weekly lawn striping and grounds maintenance." },
  { image: PORTFOLIO_IMAGES[2], date: "2020", description: "Poolside grounds and evergreen care." },
  { image: PORTFOLIO_IMAGES[3], date: "2026", description: "Pool patio and stonework." },
  { image: "/portfolio/20230717_182210.jpg", date: "July 2023", description: "Property grounds and landscaping." },
  { image: "/portfolio/IMG_20230603_144136.jpg", date: "June 2023", description: "Garden and landscape detail." },
  { image: "/portfolio/20230603_151727.jpg", date: "June 2023", description: "Vine installation and maintenance." },
  { image: "/portfolio/20190823_114033.jpg", date: "August 2019", description: "Stone house and manicured grounds." },
  { image: "/portfolio/IMG_20170811_172934203.jpg", date: "August 2017", description: "Bush trimming and shrub care." },
  { image: "/portfolio/IMG_20210616_112129.jpg", date: "June 2021", description: "Striped lawn and property maintenance." },
  { image: "/portfolio/20230717_182226.jpg", date: "July 2023", description: "Landscape and grounds care." },
  { image: "/portfolio/20250620_094855.jpg", date: "June 2025", description: "Garden beds and planting." },
];

export const faqItems: FAQItem[] = [
  { question: "[FAQ question?]", answer: "[FAQ answer placeholder.]" },
  { question: "[FAQ question?]", answer: "[FAQ answer placeholder.]" },
];

export const serviceAreas: string[] = ["Dutchess County", "Poughkeepsie", "Surrounding areas"];

export const contact = {
  phone: "845-453-1985",
  email: "delatorrelandscaping@outlook.com",
  address: "Poughkeepsie, New York 12603",
};
