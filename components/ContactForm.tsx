"use client";

export function ContactForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
          placeholder="[Your name]"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
          placeholder="[Your email]"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
          placeholder="[Your message]"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 transition-colors sm:w-auto"
      >
        [Send Message]
      </button>
    </form>
  );
}
