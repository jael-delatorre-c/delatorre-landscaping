export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title?: string;
  steps: ProcessStep[];
}

export function ProcessSteps({
  title = "[How We Work]",
  steps,
}: ProcessStepsProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">{title}</h2>
        <ol className="mt-10 space-y-10 sm:space-y-12" role="list">
          {steps.map((step) => (
            <li key={step.number} className="flex gap-6">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white"
                aria-hidden
              >
                {step.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">{step.title}</h3>
                <p className="mt-2 text-neutral-600">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
