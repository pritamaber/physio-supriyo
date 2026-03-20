import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Hand,
  Brain,
  Users,
  CheckCircle2,
  Presentation,
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

const highlights = [
  "Patient-focused clinical reasoning",
  "Practical physiotherapy learning",
  "Movement assessment and recovery planning",
  "Mentorship for future physiotherapists",
];

const trainingGallery = [
  "/images/training/training-02.jpeg",
  "/images/training/training-02.jpeg",
  "/images/training/training-02.jpeg",
  "/images/training/training-02.jpeg",
];

export default function TrainingPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Training & Mentorship
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Physiotherapy training, mentorship, and practical guidance for
              students
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-slate-600">
              Alongside patient care, Physio Supriyo is actively involved in
              teaching and mentoring physiotherapy students, with a focus on
              practical learning, stronger clinical understanding, and confident
              patient-centered practice.
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              The goal is to help learners move beyond theory and develop the
              skills needed to assess movement, understand dysfunction, think
              clinically, and guide recovery with clarity and care.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+919038296618"
                className="rounded-full bg-teal-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-teal-800"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919038296618"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-teal-700 hover:text-teal-700"
              >
                WhatsApp
              </a>

              <Link
                href="/contact"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-teal-700 hover:text-teal-700"
              >
                Contact Page
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[480px] lg:mx-0">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="grid grid-cols-2 gap-4">
                {trainingGallery.map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
                  >
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src={src}
                        alt={`Training session ${index + 1}`}
                        fill
                        className="object-cover object-center transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-teal-50 p-5">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-teal-700">
                    <Presentation size={20} />
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      Regular workshops and awareness sessions
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Workshops are conducted at regular intervals to support
                      physiotherapy education, practical skill development,
                      posture awareness, rehabilitation understanding, and
                      better movement-focused learning.
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Learning beyond theory
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
              Practical physiotherapy education shaped by clinical perspective
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Good physiotherapy education goes beyond textbooks. It requires
              learning how to assess movement, identify patterns, think
              clinically, and guide recovery in ways that are safe, effective,
              and relevant to real patients.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Through training and mentorship, students are encouraged to build
              both technical understanding and the confidence needed to apply
              that knowledge in practical and clinical settings.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trainingAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-100 text-teal-700">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Core focus areas
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              What students gain through mentorship
            </h2>

            <ul className="mt-6 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-teal-700"
                  />
                  <span className="text-sm leading-6 text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              A clinician’s perspective in teaching
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Mentorship grounded in real patient care
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Mentorship becomes more valuable when it is shaped by real
              clinical experience. By combining patient care with student
              guidance, the learning process becomes more practical, relevant,
              and connected to real rehabilitation outcomes.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              This dual role as practitioner and mentor helps students develop
              confidence, improve decision-making, and build a stronger
              understanding of physiotherapy as both a profession and a lifelong
              discipline of learning.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Training support may also include academic participation, workshop
              involvement, practical discussion, and continued encouragement for
              learners preparing for clinical environments.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 md:pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Get in touch
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
              Looking for guidance in physiotherapy learning?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Whether you are a student seeking mentorship, practical exposure,
              or clinically grounded learning support, this training-focused
              approach can help strengthen both knowledge and confidence.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+919038296618"
              className="rounded-full bg-teal-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-800"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919038296618"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-teal-700 hover:text-teal-700"
            >
              WhatsApp
            </a>

            <Link
              href="/contact"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-teal-700 hover:text-teal-700"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
