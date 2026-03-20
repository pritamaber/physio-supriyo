import Link from "next/link";
import { BadgeCheck, HeartHandshake, ShieldCheck } from "lucide-react";

const highlights = [
  {
    title: "Personalized Care",
    desc: "Treatment plans are tailored to each patient’s pain points, movement goals, and recovery needs.",
    icon: HeartHandshake,
  },
  {
    title: "Trusted Approach",
    desc: "A patient-first approach focused on comfort, clarity, and long-term improvement.",
    icon: ShieldCheck,
  },
  {
    title: "Professional Guidance",
    desc: "Clear assessment, practical advice, and hands-on support for confident recovery.",
    icon: BadgeCheck,
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-slate-50 py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              About Physio Supriyo
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Caring physiotherapy support focused on recovery, movement, and
              long-term relief
            </h2>

            <p className="mt-5 text-slate-600">
              Physio Supriyo is built around a simple goal: helping people
              reduce pain, recover faster, and return to daily life with greater
              comfort and confidence.
            </p>

            <p className="mt-4 text-slate-600">
              With a patient-friendly and results-focused approach, every
              treatment plan is designed to support better mobility, improved
              function, and lasting recovery.
            </p>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex rounded-full bg-teal-700 px-6 py-3 text-white transition hover:bg-teal-800"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
