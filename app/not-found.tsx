import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-forest px-5 py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="heading-serif mt-4 text-5xl text-cream">Page not found</h1>
      <p className="mt-4 text-body">The page you&rsquo;re looking for doesn&rsquo;t exist.</p>
      <Link href="/" className="btn btn-primary mt-9">
        Go home
      </Link>
    </section>
  );
}
