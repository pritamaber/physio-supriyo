export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      {/* HEADER */}
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Contact
        </p>

        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Book your consultation and start your recovery
        </h1>

        <p className="mt-4 text-slate-600">
          Have questions or dealing with pain? Reach out directly via call or
          WhatsApp for quick assistance, or send a message using the form below.
        </p>
      </div>

      {/* CONTACT OPTIONS */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* CALL */}
        <a
          href="tel:+918282859551"
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <p className="text-sm text-slate-500">Call</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">
            +91 82828 59551
          </p>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/918282859551"
          target="_blank"
          className="rounded-2xl border border-teal-200 bg-teal-50 p-5 shadow-sm transition hover:shadow-md"
        >
          <p className="text-sm text-teal-700">WhatsApp</p>
          <p className="mt-1 text-lg font-semibold text-teal-900">
            Chat for Quick Response
          </p>
        </a>

        {/* LOCATION */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Service Area</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">
            Newtown & Rajarhat
          </p>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* FORM */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Send a message
          </h2>

          <form className="mt-5 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-700"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-700"
            />

            <textarea
              placeholder="Describe your problem"
              rows={4}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-700"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-teal-700 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-teal-800"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* SIDE INFO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-slate-900">
            Why reach out?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• Quick guidance on your condition</li>
            <li>• Personalized treatment suggestions</li>
            <li>• Help deciding if physiotherapy is right for you</li>
            <li>• Friendly and professional support</li>
          </ul>

          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-500">
            Response time is usually quick on WhatsApp.
          </div>
        </div>
      </div>
    </main>
  );
}
