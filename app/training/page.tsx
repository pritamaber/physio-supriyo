import Link from "next/link";
import {
  GraduationCap,
  Hand,
  Brain,
  Users,
  CheckCircle2,
  ArrowRight,
  Presentation,
  BadgeCheck,
} from "lucide-react";

const trainingAreas = [
  {
    title: "Clinical Understanding",
    desc: "Helping students connect theory with practical physiotherapy assessment, clinical reasoning, and treatment planning.",
    icon: Brain,
  },
  {
    title: "Hands-on Guidance",
    desc: "Support in understanding patient handling, movement assessment, exercise prescription, and therapeutic approach.",
    icon: Hand,
  },
  {
    title: "Mentorship for Students",
    desc: "Encouraging confidence, clarity, and professional growth for physiotherapy students preparing for real-world practice.",
    icon: Users,
  },
  {
    title: "Practical Learning Support",
    desc: "Focused guidance to strengthen fundamentals, improve observation skills, and develop a patient-first mindset.",
    icon: GraduationCap,
  },
];

const benefits = [
  "Patient-focused clinical reasoning",
  "Practical physiotherapy learning",
  "Movement assessment and recovery planning",
  "Mentorship for future physiotherapists",
  "Confidence-building academic support",
  "Real-world clinical perspective",
];

const credentials = [
  "Fellow: Spinal Manipulation Program, MTFI Mangalore",
  "Physiotherapist, Fitness Trainer & Sports Physio",
  "Kinesiology Taping, Myofascial Release & Dry Needling",
  "Regd. Rehab Professional, Rehabilitation Council of India",
];

export default function TrainingPage() {
  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Training & Mentorship
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Physiotherapy training for students focused on practical learning,
              mentorship, and clinical understanding
            </h1>

            <p className="mt-5 text-slate-600">
              Alongside patient care, Physio Supriyo supports physiotherapy
              students through practical learning, stronger clinical
              understanding, and mentorship that connects academic knowledge
              with real-world application.
            </p>

            <p className="mt-4 text-slate-600">
              Through association with Global Technical Institute, the training
              approach emphasizes hands-on guidance, clinical observation,
              patient-centered thinking, and practical experience that helps
              students grow beyond textbook learning.
            </p>

            <p className="mt-4 text-slate-600">
              The goal is to help learners build confidence in assessment,
              movement analysis, treatment planning, and rehabilitation support
              through clear instruction, real clinical perspective, and guided
              practical exposure.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                Professional Background
              </p>

              <ul className="mt-4 space-y-3">
                {credentials.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-700" />
                    <span className="text-sm leading-6 text-slate-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+919038296618"
                className="inline-flex rounded-full bg-teal-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-teal-800"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919038296618"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-6 py-3 text-sm font-medium text-teal-700 transition hover:bg-teal-100"
              >
                WhatsApp
              </a>

              <Link
                href="/contact"
                className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-6 py-3 text-sm font-medium text-teal-700 transition hover:bg-teal-100"
              >
                Contact Page
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
              {trainingAreas.map((item) => {
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
                    Why Choose This Training
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    Practical mentorship with a clinically guided learning
                    approach
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    The training approach focuses on clinical reasoning,
                    practical observation, guided learning, and supportive
                    mentorship that helps students grow with greater clarity and
                    confidence.
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

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-teal-700">
                    <BadgeCheck size={20} />
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-slate-900">
                      New batch starting March 2026
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      A new training batch is scheduled to begin in March 2026
                      at Global Technical Institute, with a focus on practical
                      exposure, real patient-based understanding, and guided
                      physiotherapy learning.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Location: Rajarhat, West Bengal 700135
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-teal-50 p-5">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-teal-700">
                    <Presentation size={20} />
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-slate-900">
                      Workshops and student guidance sessions
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Regular workshops and mentorship sessions are designed to
                      improve clinical understanding, practical physiotherapy
                      learning, rehabilitation awareness, and movement-focused
                      thinking for students.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href="https://wa.me/919038296618"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-800"
                      >
                        Join via WhatsApp
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
        </div>
      </div>
    </section>
  );
}
