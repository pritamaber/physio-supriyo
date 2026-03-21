import Image from "next/image";
import Link from "next/link";
import { MapPin, Users, Presentation } from "lucide-react";

const events = [
  {
    name: "Siddha Galaxy",
    desc: "Physiotherapy awareness and posture correction workshop conducted for residents focusing on daily movement, pain prevention, and exercise habits.",
    image: "/images/training/training-02.jpeg",
  },
  {
    name: "Orchid Flat",
    desc: "Community session on joint pain management, mobility improvement, and simple home-based physiotherapy exercises.",
    image: "/images/training/training-02.jpeg",
  },
  {
    name: "Siddha Pines",
    desc: "Interactive workshop on posture care, back pain relief strategies, and guided rehabilitation awareness for residents.",
    image: "/images/training/training-02.jpeg",
  },
  {
    name: "Magnolia Oxygen",
    desc: "Health awareness session focused on movement correction, lifestyle habits, and preventive physiotherapy care.",
    image: "/images/training/training-02.jpeg",
  },
  {
    name: "Green Heights Residency",
    desc: "Workshop covering pain management techniques, mobility exercises, and physiotherapy guidance for daily living.",
    image: "/images/training/training-02.jpeg",
  },
];

export default function EventsPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Workshops & Events
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Physiotherapy workshops conducted across gated communities
          </h1>

          <p className="mt-5 text-slate-600">
            Regular physiotherapy workshops and awareness sessions are conducted
            in residential communities to help people understand posture care,
            pain management, rehabilitation, and better movement in everyday
            life.
          </p>

          <p className="mt-4 text-slate-600">
            These sessions focus on practical guidance, easy-to-follow
            exercises, and awareness that helps individuals manage discomfort
            and improve their overall physical well-being.
          </p>
        </div>

        {/* Events Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.name}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-teal-700">
                  <MapPin size={16} />
                  <span className="font-medium">{event.name}</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-12 md:pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Community Engagement
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
              Looking to organize a physiotherapy workshop in your community?
            </h2>

            <p className="mt-4 text-slate-600">
              Workshops can be arranged for gated communities, residential
              complexes, and organizations focusing on posture awareness, pain
              management, rehabilitation, and movement education.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+919038296618"
              className="inline-flex rounded-full bg-teal-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-800"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919038296618"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-teal-700 hover:text-teal-700"
            >
              WhatsApp
            </a>

            <Link
              href="/contact"
              className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-teal-700 hover:text-teal-700"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
