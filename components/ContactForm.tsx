"use client";

const labelClass = "block text-sm font-medium text-cream";

export function ContactForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          className="field mt-2"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          className="field mt-2"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className="field mt-2 resize-y"
          placeholder="Tell us about your property and what you need"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Send Message
      </button>
    </form>
  );
}
