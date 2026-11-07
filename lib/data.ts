import type { ServiceItem } from "@/components/ServicesGrid";
import type { PortfolioItem } from "@/components/PortfolioPreview";
import { PORTFOLIO_IMAGES, SERVICE_IMAGES } from "@/lib/images";
import type { FAQItem } from "@/components/FAQAccordion";

export interface GalleryItem {
  image: string;
  date: string;
  description: string;
}

/** Ordered for the current season: snow work is featured first in winter. */
export const services: ServiceItem[] = [
  {
    slug: "snow-ice-management",
    name: "Snow & Ice Management",
    description:
      "Reliable plowing and clearing for driveways and access areas, with optional salting/de-icing for safer, worry-free winter service.",
    icon: "snow",
    seasonal: true,
  },
  {
    slug: "weekly-grounds-maintenance",
    name: "Weekly Grounds Maintenance",
    description:
      "Routine mowing, edging, trimming, and detail work to keep your property crisp, consistent, and professionally maintained all season.",
    image: SERVICE_IMAGES.weekly,
    imageAlt: "Freshly striped lawn with crisp mowing lines beside a landscaped property",
  },
  {
    slug: "garden-planting-care",
    name: "Garden & Planting Care",
    description:
      "Bed maintenance, weeding, pruning, mulch refreshes, and seasonal planting to keep your landscape healthy, clean, and intentionally designed.",
    image: SERVICE_IMAGES.garden,
    imageAlt: "Freshly mulched planting bed with snapdragons and marigolds behind a fieldstone wall",
  },
  {
    slug: "property-clearing-brush-management",
    name: "Property Clearing & Brush Management",
    description:
      "Overgrowth removal, brush clearing, light hauling, and site cleanouts to restore clean lines and open up your property.",
    image: SERVICE_IMAGES.clearing,
    imageAlt: "Tall privacy hedge trimmed into a clean, flat wall behind a backyard patio",
  },
  {
    slug: "seasonal-cleanups",
    name: "Seasonal Cleanups",
    description:
      "Spring and fall cleanups including leaf removal, bed cleanouts, cutbacks, and debris hauling—so your property looks \"reset\" for the season.",
    image: SERVICE_IMAGES.seasonal,
    imageAlt: "Open, clean lawn under a weeping willow with a stone wall at the tree line",
  },
  {
    slug: "tree-stormwork-removal",
    name: "Tree & Stormwork Removal",
    description:
      "Removal of downed trees, hazardous limbs, and storm debris with safe handling and full cleanup (including haul-away).",
    icon: "tree",
  },
];

export const portfolioPreviewItems: PortfolioItem[] = [
  { slug: "garden-planting-beds", title: "Garden & Planting Beds", location: "Dutchess County", image: PORTFOLIO_IMAGES[0], imageAlt: "Lush garden and planting beds in front of a barn" },
  { slug: "weekly-lawn-striping", title: "Weekly Lawn Striping", location: "Dutchess County", image: PORTFOLIO_IMAGES[1], imageAlt: "Large residential lawn with clean, even mowing stripes" },
  { slug: "poolside-grounds", title: "Poolside Grounds Maintenance", location: "Dutchess County", image: PORTFOLIO_IMAGES[2], imageAlt: "Manicured lawn and evergreens surrounding a backyard pool" },
  { slug: "pool-patio-stonework", title: "Pool Patio & Stonework", location: "Dutchess County", image: PORTFOLIO_IMAGES[3], imageAlt: "Backyard pool with a stone patio and landscaped beds" },
  { slug: "vine-installation-maintenance", title: "Vine Installation & Maintenance", location: "Dutchess County", image: PORTFOLIO_IMAGES[4], imageAlt: "Climbing vines installed and trained on a residential property" },
  { slug: "bush-trimming", title: "Bush Trimming", location: "Dutchess County", image: PORTFOLIO_IMAGES[5], imageAlt: "Formal gravel garden with neatly clipped boxwoods and hydrangeas" },
];

export const galleryItems: GalleryItem[] = [
  { image: PORTFOLIO_IMAGES[0], date: "2021", description: "Garden and planting beds in front of barn." },
  { image: PORTFOLIO_IMAGES[1], date: "2021", description: "Weekly lawn striping and grounds maintenance." },
  { image: PORTFOLIO_IMAGES[2], date: "2020", description: "Poolside grounds and evergreen care." },
  { image: PORTFOLIO_IMAGES[3], date: "2026", description: "Pool patio and stonework." },
  { image: "/portfolio/20230717_182210.jpg", date: "July 2023", description: "Rounded yew hedges framing a gravel garden path." },
  { image: "/portfolio/IMG_20230603_144136.jpg", date: "June 2023", description: "Freshly mulched planting bed with annuals along a stone wall." },
  { image: "/portfolio/20230603_151727.jpg", date: "June 2023", description: "Vine installation and maintenance." },
  { image: "/portfolio/20190823_114033.jpg", date: "August 2019", description: "Perennial flower garden with phlox and coneflowers around a fieldstone wall." },
  { image: "/portfolio/IMG_20170811_172934203.jpg", date: "August 2017", description: "Formal gravel garden with clipped boxwoods and hydrangeas." },
  { image: "/portfolio/IMG_20210616_112129.jpg", date: "June 2021", description: "Striped lawn beneath a weeping willow." },
  { image: "/portfolio/20230717_182226.jpg", date: "July 2023", description: "Landscape and grounds care." },
  { image: "/portfolio/20250620_094855.jpg", date: "June 2025", description: "Privacy hedge trimmed flat behind a backyard patio." },
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
  /** Digits-only form for tel: and sms: links. */
  phoneHref: "8454531985",
};
