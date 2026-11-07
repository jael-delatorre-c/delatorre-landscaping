const items = ["30+ Years Experience", "Family Owned", "Se Habla Español", "Free Estimates"];

export function TrustStrip() {
  return (
    <section aria-label="Why homeowners choose us" className="border-y border-surface-line bg-surface">
      <ul className="container-lux grid grid-cols-2 gap-x-4 gap-y-4 py-6 sm:gap-y-5 lg:flex lg:items-center lg:justify-center lg:gap-0 lg:py-5">
        {items.map((item, i) => (
          <li key={item} className="flex items-center justify-center text-center lg:justify-start">
            {i > 0 && <span className="mx-8 hidden h-1.5 w-1.5 rotate-45 bg-gold lg:block xl:mx-11" aria-hidden />}
            <span className="text-[0.8rem] font-medium uppercase tracking-[0.16em] text-cream">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
