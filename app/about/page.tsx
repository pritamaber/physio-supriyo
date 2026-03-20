import Link from "next/link";
import Image from "next/image";
import {
  BadgeCheck,
  HeartHandshake,
  ShieldCheck,
  GraduationCap,
  Presentation,
  Award,
} from "lucide-react";

const highlights = [
  {
    title: "Personalized Care",
    desc: "Treatment plans are tailored to each patient’s condition, pain points, movement goals, and recovery needs.",
    icon: HeartHandshake,
  },
  {
    title: "Trusted Approach",
    desc: "A patient-first approach focused on comfort, clear guidance, and long-term improvement.",
    icon: ShieldCheck,
  },
  {
    title: "Professional Guidance",
    desc: "Clear assessment, practical advice, and hands-on physiotherapy support for confident recovery.",
    icon: BadgeCheck,
  },
  {
    title: "Academic & College Association",
    desc: "Associated with various national colleges through professional engagement, academic contribution, and physiotherapy-related participation.",
    icon: GraduationCap,
  },
  {
    title: "Regular Workshops",
    desc: "Physiotherapy workshops and awareness sessions are conducted at regular intervals to promote better movement, pain management, and preventive care.",
    icon: Presentation,
  },
  {
    title: "Certified Practice",
    desc: "Professional development is supported through certificates, workshop participation, and continued learning across relevant areas of physiotherapy care.",
    icon: Award,
  },
];

const certificates = [
  "/images/certificates/certificate01.jpg",
  "/images/certificates/certificate02.jpg",
  "/images/certificates/certificate03.jpg",
  "/images/certificates/certificate04.jpg",
  "/images/certificates/certificate05.jpg",
  "/images/certificates/certificate06.jpg",
];

export default function AboutPreview() {
  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              About Physio Supriyo
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Caring physiotherapy support focused on recovery, movement, and
              long-term relief
            </h2>

            <p className="mt-5 text-slate-600">
              Physio Supriyo is built around a simple goal: helping people
              reduce pain, recover better, and return to daily life with greater
              comfort, stability, and confidence.
            </p>

            <p className="mt-4 text-slate-600">
              With a patient-friendly and results-focused approach, every
              treatment plan is designed to improve mobility, restore function,
              and support lasting recovery through guided physiotherapy care.
            </p>

            <p className="mt-4 text-slate-600">
              Professional involvement also extends beyond routine treatment,
              with engagement across various national colleges, continuous
              learning, and regular workshop activity that helps spread
              awareness about pain care, posture, rehabilitation, and healthy
              movement.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex rounded-full bg-teal-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-teal-800"
              >
                Learn More About Us
              </Link>

              <Link
                href="/contact"
                className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-6 py-3 text-sm font-medium text-teal-700 transition hover:bg-teal-100"
              >
                Subscribe to Know More
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-base font-semibold text-slate-900">
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

          <div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                    Certificates & Recognition
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    Training, workshops, and professional participation
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    A glimpse of certificates reflecting continued learning,
                    workshop participation, academic engagement, and
                    physiotherapy-related professional development.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {certificates.map((src, index) => (
                  <div
                    key={src}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={src}
                        alt={`Certificate ${index + 1}`}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-teal-50 p-5">
                <h4 className="text-base font-semibold text-slate-900">
                  Workshops conducted regularly
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Regular workshops and awareness sessions are conducted to help
                  people understand posture care, exercise habits, pain
                  management, rehabilitation, and better movement in everyday
                  life.
                </p>

                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-800"
                  >
                    Subscribe to Know More
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
