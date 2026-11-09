export interface TestimonialItem {
  quote: string;
  author?: string;
  location?: string;
}

interface TestimonialStripProps {
  title?: string;
  testimonials: TestimonialItem[];
}

export function TestimonialStrip({
  title = "[What Our Clients Say]",
  testimonials,
}: TestimonialStripProps) {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">{title}</h2>
        <ul className="mt-10 space-y-10 sm:space-y-12" role="list">
          {testimonials.map((t, i) => (
            <li key={i} className="border-l-4 border-neutral-900 pl-6">
              <blockquote className="text-lg text-neutral-700">&ldquo;{t.quote}&rdquo;</blockquote>
              {(t.author || t.location) && (
                <footer className="mt-3 text-sm text-neutral-600">
                  {t.author}
                  {t.location && ` — ${t.location}`}
                </footer>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
