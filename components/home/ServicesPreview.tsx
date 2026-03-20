import { Dumbbell, Activity, HeartHandshake, Waves } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Pain Relief Therapy",
    desc: "Targeted physiotherapy support to reduce pain, stiffness, and day-to-day discomfort with safe, personalized treatment.",
    icon: Waves,
  },
  {
    title: "Manual Therapy",
    desc: "Hands-on techniques to improve joint movement, release tightness, and support faster physical recovery.",
    icon: HeartHandshake,
  },
  {
    title: "Exercise Rehabilitation",
    desc: "Guided exercise programs designed to improve strength, flexibility, balance, and long-term recovery outcomes.",
    icon: Dumbbell,
  },
  {
    title: "Posture & Mobility Correction",
    desc: "Treatment and movement guidance to improve posture, body mechanics, and ease of movement in daily life.",
    icon: Activity,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Services
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Personalized physiotherapy services for pain relief and better
              movement
            </h2>

            <p className="mt-4 text-slate-600">
              Every patient has a different body, lifestyle, and recovery goal.
              Our treatment approach focuses on identifying the root issue and
              creating the right therapy plan for effective and lasting results.
            </p>

            <div className="mt-6">
              <Link
                href="/services"
                className="inline-flex rounded-full bg-teal-700 px-6 py-3 text-white transition hover:bg-teal-800"
              >
                Explore All Services
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.desc}
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
