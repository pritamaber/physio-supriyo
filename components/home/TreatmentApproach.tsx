import { ClipboardCheck, Stethoscope, HandHeart, Activity } from "lucide-react";

const steps = [
  {
    title: "Detailed Assessment",
    desc: "Understand your pain, lifestyle, posture, and movement limitations to identify the root cause.",
    icon: ClipboardCheck,
  },
  {
    title: "Personalized Treatment Plan",
    desc: "A tailored physiotherapy plan designed specifically for your condition and recovery goals.",
    icon: Stethoscope,
  },
  {
    title: "Hands-on Therapy & Guidance",
    desc: "Expert manual therapy combined with guided exercises to reduce pain and improve mobility.",
    icon: HandHeart,
  },
  {
    title: "Recovery & Prevention",
    desc: "Focus on long-term results with strengthening, posture correction, and relapse prevention.",
    icon: Activity,
  },
];

export default function TreatmentApproach() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Our Approach
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            A structured path to pain relief and long-term recovery
          </h2>

          <p className="mt-4 text-slate-600">
            Every treatment follows a clear, step-by-step approach to ensure
            effective recovery, improved movement, and lasting results.
          </p>
        </div>

        {/* STEPS */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Step Number */}
                <div className="absolute right-4 top-4 text-xs font-semibold text-slate-400">
                  {`0${index + 1}`}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
