import Image from "next/image";
import Link from "next/link";
import { MapPin, Presentation, Users } from "lucide-react";

const events = [
  {
    title: "Siddha Galaxy",
    desc: "Physiotherapy awareness workshop focused on posture care, pain management, and better everyday movement for residents.",
    icon: Presentation,
    image: "/images/training/training-02.jpeg",
  },
  {
    title: "Orchid Flat",
    desc: "A guided community session on mobility, simple recovery exercises, and practical physiotherapy support for daily life.",
    icon: Users,
    image: "/images/training/training-02.jpeg",
  },
  {
    title: "Siddha Pines",
    desc: "Resident wellness workshop covering back pain awareness, movement correction, and rehabilitation-focused guidance.",
    icon: MapPin,
    image: "/images/training/training-02.jpeg",
  },
  {
    title: "Magnolia Oxygen",
    desc: "Interactive awareness session designed to help residents understand posture, movement habits, and preventive physiotherapy care.",
    icon: Presentation,
    image: "/images/training/training-02.jpeg",
  },
];

export default function EventsPreview() {
  return (
    <section className="bg-slate-50 py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Workshops & Events
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Community physiotherapy workshops focused on awareness, movement,
              and better daily care
            </h2>

            <p className="mt-4 text-slate-600">
              Regular workshops and awareness sessions are conducted in gated
              communities and residential complexes to help people understand
              posture care, pain management, rehabilitation, and healthy
              movement habits.
            </p>

            <p className="mt-4 text-slate-600">
              These events are designed to make physiotherapy guidance more
              practical, accessible, and useful in everyday life for residents
              of all age groups.
            </p>

            <div className="mt-6">
              <Link
                href="/events"
                className="inline-flex rounded-full bg-teal-700 px-6 py-3 text-white transition hover:bg-teal-800"
              >
                Explore All Events
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {events.map((event) => {
              const Icon = event.icon;

              return (
                <div
                  key={event.title}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900">
                      {event.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {event.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
