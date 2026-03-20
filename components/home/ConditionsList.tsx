import {
  Activity,
  Bone,
  Move,
  HeartPulse,
  StretchHorizontal,
} from "lucide-react";

const conditions = [
  {
    title: "Back Pain",
    desc: "Relief from lower back pain, stiffness, and posture-related discomfort.",
    icon: Activity,
  },
  {
    title: "Neck Pain",
    desc: "Treatment for neck stiffness, cervical issues, and screen-related strain.",
    icon: Move,
  },
  {
    title: "Shoulder Pain",
    desc: "Recovery from frozen shoulder, rotator cuff issues, and mobility loss.",
    icon: StretchHorizontal,
  },
  {
    title: "Knee Pain",
    desc: "Support for knee pain, ligament issues, and joint weakness.",
    icon: Bone,
  },
  {
    title: "Sciatica",
    desc: "Targeted therapy for nerve pain, radiating leg pain, and discomfort.",
    icon: HeartPulse,
  },
  {
    title: "Sports Injury",
    desc: "Rehabilitation for muscle strains, ligament injuries, and recovery.",
    icon: Activity,
  },
];

export default function ConditionsList() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Conditions We Treat
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Find relief from common pain and mobility problems
          </h2>

          <p className="mt-4 text-slate-600">
            Whether it's chronic pain, injury, or posture-related discomfort, we
            provide personalized physiotherapy care to help you recover faster
            and move better.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <Icon size={20} />
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
  );
}
