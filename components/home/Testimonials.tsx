import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Patient Name",
    issue: "Back Pain Recovery",
    review:
      "I had been struggling with back pain for months. The treatment plan was clear, the sessions were comfortable, and I started feeling much better within a short time.",
  },
  {
    name: "Patient Name",
    issue: "Neck & Posture Improvement",
    review:
      "Very supportive and professional experience. I got relief from neck stiffness and also learned exercises that helped improve my posture in daily life.",
  },
  {
    name: "Patient Name",
    issue: "Knee Pain Rehabilitation",
    review:
      "The approach was patient-friendly and practical. I felt guided at every step, and my knee pain improved steadily with the recommended therapy and exercises.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Patient Feedback
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Trusted by patients for caring support and real recovery
          </h2>

          <p className="mt-4 text-slate-600">
            A good physiotherapy experience is not only about pain relief, but
            also about feeling heard, guided, and supported throughout recovery.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-sm leading-7 text-slate-600">
                “{item.review}”
              </p>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="text-base font-semibold text-slate-900">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-slate-500">{item.issue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
