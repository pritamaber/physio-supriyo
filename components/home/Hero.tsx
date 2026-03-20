import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-5 md:py-14">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Physio Supriyo
          </p>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
            <img src="/icons/google.svg" alt="Google" className="h-4 w-4" />
            <span>Best physiotherapist in Newtown - Kolkata - Rajarhat</span>
            <span>Trusted by 500+ patient</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
            Specialized physiotherapy care for pain relief, recovery, and better
            movement
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Physio Supriyo offers focused care through Spinal Manipulation
            Programs, sports physiotherapy, kinesiology taping, myofascial
            release techniques, autism rehabilitation support, and pain
            management through dry needling.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Specialist consultancy services for ortho and neuro diagnosis help
            ensure a more complete and practical treatment approach tailored to
            each patient’s condition and recovery needs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/919038296618?text=Hi%2C%20I%20want%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-teal-700 px-6 py-3 text-white hover:bg-teal-800"
            >
              Book Consultation
            </a>

            <Link
              href="/services"
              className="rounded-full border border-slate-300 px-6 py-3 text-slate-700 hover:border-teal-700 hover:text-teal-700"
            >
              View Services
            </Link>
          </div>

          {/* <div className="mt-6 space-y-1 text-sm text-slate-500">
            <p>📞 +91 903 829 6618</p>
            <p>✉️ supriyochatterjee787@gmail.com</p>
            <p>📍 Rajarhat, West Bengal 700135</p>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Also available on YouTube for physiotherapy-related content and
            awareness.
          </p> */}
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-100 via-white to-transparent blur-2xl opacity-60"></div>

            <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
              <Image
                src="/images/main/main-01.jpeg"
                alt="Physio Supriyo"
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
