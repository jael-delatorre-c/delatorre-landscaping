import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/data";

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

  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
          >
            ← Back to Services
          </Link>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900">
            {service.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            {service.description}
          </p>
          <div className="mt-10 aspect-video max-w-4xl rounded-lg photo-placeholder" aria-hidden>
            [Photo]
          </div>
          <p className="mt-8 text-neutral-600">
            [Additional service detail copy placeholder. Expand with [Service Name] specifics.]
          </p>
        </div>
      </section>
      <section className="border-t border-neutral-200 bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900">Get a quote for this service</h2>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-base font-medium text-white hover:bg-neutral-800"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
