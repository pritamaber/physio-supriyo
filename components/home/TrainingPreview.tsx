import Link from "next/link";
import { GraduationCap, BookOpen, HandHelping, Users } from "lucide-react";

const trainingPoints = [
  {
    title: "Clinical Learning",
    desc: "Practical guidance to help students better understand physiotherapy concepts and patient care approaches.",
    icon: GraduationCap,
  },
  {
    title: "Hands-on Understanding",
    desc: "Support in connecting theory with real clinical thinking, assessment, and treatment planning.",
    icon: HandHelping,
  },
  {
    title: "Mentorship & Guidance",
    desc: "A supportive learning environment for students looking to build confidence and professional skills.",
    icon: Users,
  },
  {
    title: "Structured Knowledge",
    desc: "Focused teaching to strengthen fundamentals, improve clarity, and prepare for real-world practice.",
    icon: BookOpen,
  },
];

export default function TrainingPreview() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              For Students
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Training, mentorship, and practical learning support for future
              physiotherapists
            </h2>

            <p className="mt-5 text-slate-600">
              Beyond patient care, Physio Supriyo also supports students through
              guided learning, clinical understanding, and mentorship designed
              to build confidence in physiotherapy practice.
            </p>

            <p className="mt-4 text-slate-600">
              This section helps position the brand not only as a trusted
              clinic, but also as a respected learning and guidance resource for
              students.
            </p>

            <div className="mt-8">
              <Link
                href="/training"
                className="inline-flex rounded-full bg-teal-700 px-6 py-3 text-white transition hover:bg-teal-800"
              >
                Explore Training
              </Link>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {trainingPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
