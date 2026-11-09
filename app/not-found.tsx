import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
      <h1 className="text-4xl font-bold text-neutral-900">[Page not found]</h1>
      <p className="mt-4 text-neutral-600">[The page you’re looking for doesn’t exist.]</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-white hover:bg-neutral-800"
      >
        Go home
      </Link>
    </section>
  );
}
