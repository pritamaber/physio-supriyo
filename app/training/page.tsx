import Link from "next/link";
import Image from "next/image";

const trainingAreas = [
  {
    title: "Clinical Understanding",
    desc: "Helping students connect theory with practical physiotherapy assessment, reasoning, and treatment planning.",
  },
  {
    title: "Hands-on Guidance",
    desc: "Support in understanding patient handling, movement assessment, exercise prescription, and therapeutic approach.",
  },
  {
    title: "Mentorship for Students",
    desc: "Encouraging confidence, clarity, and professional growth for physiotherapy students preparing for real-world practice.",
  },
  {
    title: "Practical Learning Support",
    desc: "Focused guidance to strengthen fundamentals, improve observation skills, and develop a patient-first mindset.",
  },
];

const highlights = [
  "Patient-focused clinical reasoning",
  "Practical physiotherapy learning",
  "Movement assessment and recovery planning",
  "Mentorship for future physiotherapists",
];

export default function TrainingPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Training & Mentorship
        </p>

        <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
          Physiotherapy training, mentorship, and practical guidance for
          students
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          Alongside patient care, Physio Supriyo is also involved in teaching
          and mentoring physiotherapy students. The focus is on building strong
          clinical understanding, practical confidence, and a deeper approach to
          patient-centered physiotherapy practice.
        </p>
      </div>

      <section className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
        {/* LEFT IMAGE */}
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-xs">
            {/* soft glow */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-teal-100 blur-xl opacity-25"></div>

            {/* image */}
            <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-100 shadow-md">
              <Image
                src="/images/training-02.jpeg"
                alt="Physio Supriyo teaching session"
                width={320}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl font-semibold text-slate-900">
            Learning beyond theory
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Good physiotherapy education goes beyond textbooks. It requires
            understanding how to assess movement, identify problems, think
            clinically, and guide recovery in a way that is safe, effective, and
            practical for real patients.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            Through training and mentorship, students are encouraged to develop
            both technical knowledge and the confidence needed to apply that
            knowledge in clinical settings.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">
              Core focus areas
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold text-slate-900">
          A clinician’s perspective in teaching
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          Mentorship becomes more valuable when it is shaped by real patient
          care. By combining clinical experience with student guidance, the
          learning process becomes more relevant, practical, and connected to
          real rehabilitation outcomes.
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          This dual role as practitioner and mentor helps build trust among both
          patients and students, reflecting a strong commitment to physiotherapy
          as both a profession and a discipline of lifelong learning.
        </p>
      </section>

      <section className="mt-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Looking for guidance in physiotherapy learning?
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Whether you are a student seeking mentorship or someone looking to
            learn from a clinically grounded approach, training support can help
            strengthen both knowledge and confidence.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+918282859551"
              className="rounded-full bg-teal-700 px-5 py-3 text-sm font-medium text-white hover:bg-teal-800"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918282859551"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:border-teal-700 hover:text-teal-700"
            >
              WhatsApp
            </a>

            <Link
              href="/contact"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:border-teal-700 hover:text-teal-700"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
