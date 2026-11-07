import { CalendarCheckIcon, HomeHeartIcon, SeasonsIcon, SparkleIcon } from "@/components/Icons";

const points = [
  {
    Icon: HomeHeartIcon,
    title: "Family owned, 30+ years",
    body: "Three decades of hands-on experience, and the same family standing behind every job.",
  },
  {
    Icon: CalendarCheckIcon,
    title: "Sharp, consistent weekly care",
    body: "Crisp edges, clean stripes, and tidy beds, held to the same high standard every visit.",
  },
  {
    Icon: SparkleIcon,
    title: "Full cleanup, every time",
    body: "Clippings blown off, debris hauled away. We leave the property better than we found it.",
  },
  {
    Icon: SeasonsIcon,
    title: "One local team, year-round",
    body: "From spring cleanups to snow removal, one call covers your property in every season.",
  },
];

export function WhyDelatorre() {
  return (
    <section className="section-pad bg-forest">
      <div className="container-lux">
        <div className="max-w-2xl">
          <p className="eyebrow">Why Delatorre</p>
          <h2 className="heading-serif mt-4 text-4xl text-cream sm:text-5xl">
            The details are the difference.
          </h2>
        </div>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-surface-line bg-surface-line sm:grid-cols-2 lg:grid-cols-4" role="list">
          {points.map(({ Icon, title, body }) => (
            <li key={title} className="bg-forest p-7 sm:p-8">
              <Icon className="h-9 w-9 text-gold" />
              <h3 className="heading-serif mt-6 text-2xl text-cream">{title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-body">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
