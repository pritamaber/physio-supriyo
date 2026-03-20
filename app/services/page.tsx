import Link from "next/link";
import {
  Activity,
  HeartPulse,
  Dumbbell,
  Accessibility,
  Bone,
  Stethoscope,
  CheckCircle2,
  ArrowRight,
  Icon,
} from "lucide-react";
const services = [
  {
    title: "Spinal Manipulation Therapy",
    desc: "Targeted spinal care programs designed to reduce pain, improve alignment, and restore functional movement.",
    icon: HeartPulse,
  },
  {
    title: "Sports Physiotherapy",
    desc: "Injury prevention, recovery, and performance-focused physiotherapy support for athletes and active individuals.",
    icon: Activity,
  },
  {
    title: "Kinesiology Taping",
    desc: "Supportive taping techniques to reduce strain, improve muscle function, and aid recovery.",
    icon: Dumbbell,
  },
  {
    title: "Myofascial Release Therapy",
    desc: "Hands-on techniques to relieve muscle tightness, improve flexibility, and reduce chronic pain.",
    icon: Accessibility,
  },
  {
    title: "Dry Needling Therapy",
    desc: "Advanced pain management technique targeting trigger points to reduce muscle pain and tension.",
    icon: Bone,
  },
  {
    title: "Autism Rehabilitation Support",
    desc: "Specialized physiotherapy care aimed at improving motor skills, coordination, and functional movement.",
    icon: Stethoscope,
  },
  {
    title: "Ortho & Neuro Consultation",
    desc: "Specialist consultation support for orthopedic and neurological conditions with guided treatment planning.",
    icon: Activity,
  },
];

const benefits = [
  "Personalized treatment planning",
  "Patient-friendly guided recovery",
  "Support for pain, posture, and movement",
  "Practical home-care recommendations",
  "Focused rehabilitation sessions",
  "Long-term recovery approach",
];

export default function ServicesPage() {
  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Our Services
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Physiotherapy services focused on pain relief, recovery, and
              better movement
            </h1>

            <p className="mt-5 text-slate-600">
              Each service is designed to support recovery through practical,
              patient-friendly physiotherapy care that addresses pain, mobility
              limitations, posture concerns, and rehabilitation needs.
            </p>

            <p className="mt-4 text-slate-600">
              Whether the goal is reducing discomfort, restoring movement,
              improving strength, or supporting long-term recovery, the approach
              remains centered on clear guidance, consistent care, and
              personalized treatment support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919038296618?text=Hi%2C%20I%20want%20to%20book%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-teal-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-teal-800"
              >
                Book Consultation
              </a>

              <Link
                href="/contact"
                className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-6 py-3 text-sm font-medium text-teal-700 transition hover:bg-teal-100"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                      <Icon size={22} />
                    </div>

                    <h2 className="text-base font-semibold text-slate-900">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                    Why Choose This Care
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    Supportive treatment with a practical recovery-focused
                    approach
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    The service approach focuses on assessment, guided
                    treatment, rehabilitation, and practical care strategies
                    that help patients feel more confident throughout recovery.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                        <CheckCircle2 size={16} />
                      </div>

                      <div>
                        <p className="text-sm font-medium leading-6 text-slate-800">
                          {item}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-teal-50 p-5">
                <h4 className="text-base font-semibold text-slate-900">
                  Need help choosing the right service?
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  A quick consultation can help identify the most suitable
                  physiotherapy support based on pain points, mobility concerns,
                  and recovery goals.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/919038296618?text=Hi%2C%20I%20want%20to%20book%20a%20consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-800"
                  >
                    Book on WhatsApp
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 transition hover:text-teal-800"
                  >
                    Contact Page
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
