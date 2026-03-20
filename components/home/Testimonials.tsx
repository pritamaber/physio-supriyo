import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Patient Feedback",
    issue: "Back Pain Recovery",
    review:
      "I had been struggling with back pain for months. The treatment plan was clear, the sessions were comfortable, and I started feeling much better within a short time.",
  },
  {
    name: "Patient Feedback",
    issue: "Neck & Posture Improvement",
    review:
      "Very supportive and professional experience. I got relief from neck stiffness and also learned exercises that helped improve my posture in daily life.",
  },
  {
    name: "Patient Feedback",
    issue: "Knee Pain Rehabilitation",
    review:
      "The approach was patient-friendly and practical. I felt guided at every step, and my knee pain improved steadily with the recommended therapy and exercises.",
  },
  {
    name: "Patient Feedback",
    issue: "Shoulder Pain Relief",
    review:
      "I was having difficulty lifting my arm because of shoulder pain. The therapy sessions were effective and I noticed steady improvement in mobility and comfort.",
  },
  {
    name: "Patient Feedback",
    issue: "Sciatica Management",
    review:
      "The treatment helped reduce my radiating leg pain and stiffness. I also received simple exercises that made daily movement much easier.",
  },
  {
    name: "Patient Feedback",
    issue: "Sports Injury Recovery",
    review:
      "After a sports-related muscle injury, the recovery plan helped me regain strength and confidence. The sessions were structured and easy to follow.",
  },
];

const loopTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Patient Feedback
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Trusted by patients for caring support and real recovery
            </h2>

            <p className="mt-4 text-slate-600">
              A good physiotherapy experience is not only about pain relief, but
              also about feeling heard, guided, and supported throughout
              recovery.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm leading-6 text-slate-600">
                Feedback reflects comfort, recovery progress, guided treatment,
                and the confidence patients feel during their physiotherapy
                journey.
              </p>
            </div>
          </div>

          <div className="relative h-[620px] overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-slate-50 to-transparent" />

            <div className="testimonial-scroll space-y-6">
              {loopTestimonials.map((item, index) => (
                <div
                  key={`${item.issue}-${index}`}
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
        </div>
      </div>
    </section>
  );
}
