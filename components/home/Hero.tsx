import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Physio Supriyo
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Personalized physiotherapy care for pain relief, mobility, and
            recovery.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A modern physiotherapy website focused on trust, education, and a
            smooth consultation journey.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-teal-700 px-6 py-3 text-white hover:bg-teal-800">
              Book Consultation
            </button>

            <button className="rounded-full border border-slate-300 px-6 py-3 text-slate-700 hover:border-teal-700 hover:text-teal-700">
              View Services
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* gradient background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-100 via-white to-transparent blur-2xl opacity-60"></div>

            {/* image */}
            <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
              <Image
                src="/images/main-01.jpeg"
                alt="Physiotherapist greeting"
                width={420}
                height={520}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
