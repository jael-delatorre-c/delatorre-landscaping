import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data";
import { CTASection } from "@/components/CTASection";
import { SnowflakeIcon, TreeIcon } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service" };
  return {
    title: service.name,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon === "snow" ? SnowflakeIcon : TreeIcon;

  return (
    <>
      <section className="section-pad bg-forest">
        <div className="container-lux">
          <Link href="/services" className="text-sm font-medium text-gold transition-colors hover:text-gold-hover">
            ← Back to Services
          </Link>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">{service.seasonal ? "Seasonal Service" : "Service"}</p>
              <h1 className="heading-serif mt-4 text-5xl text-cream sm:text-6xl">{service.name}</h1>
              <p className="mt-6 text-lg leading-relaxed text-body">{service.description}</p>
              <Link href="/contact" className="btn btn-primary mt-9">
                Get a Quote
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-surface-line bg-surface">
              {service.image ? (
                <Image
                  src={service.image}
                  alt={service.imageAlt ?? service.name}
                  fill
                  preload
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_30%_20%,#2a4234_0%,#16291f_55%,#0f1f17_100%)]"
                  role="img"
                  aria-label={`${service.name} illustration`}
                >
                  <Icon className="h-24 w-24 text-gold/80" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <CTASection title="Get a quote for this service" />
    </>
  );
}
