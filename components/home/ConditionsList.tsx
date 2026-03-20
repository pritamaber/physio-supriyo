import {
  Activity,
  Bone,
  Move,
  HeartPulse,
  StretchHorizontal,
} from "lucide-react";

const conditions = [
  {
    title: "Spinal Issues",
    desc: "Care for back pain, spinal stiffness, posture-related discomfort, and mobility limitations.",
    icon: Activity,
  },
  {
    title: "Neck & Cervical Pain",
    desc: "Treatment for cervical strain, neck stiffness, and pain caused by posture or prolonged screen use.",
    icon: Move,
  },
  {
    title: "Shoulder & Joint Problems",
    desc: "Support for frozen shoulder, joint pain, reduced mobility, and movement-related discomfort.",
    icon: StretchHorizontal,
  },
  {
    title: "Knee & Orthopaedic Conditions",
    desc: "Rehabilitation support for knee pain, ligament issues, joint weakness, and orthopaedic concerns.",
    icon: Bone,
  },
  {
    title: "Muscle Pain & Trigger Points",
    desc: "Pain management through techniques like myofascial release and dry needling for muscle tightness.",
    icon: HeartPulse,
  },
  {
    title: "Sports Injury & Recovery",
    desc: "Physiotherapy support for sports injuries, muscle strain, recovery, and performance rehabilitation.",
    icon: Activity,
  },
];
export default function ConditionsList() {
  return (
    <section className="bg-slate-50 py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Conditions We Treat
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Conditions treated with focused physiotherapy care
            </h2>

            <p className="mt-4 text-slate-600">
              From spinal care and joint pain to sports injuries and
              muscle-related conditions, treatment is designed to reduce pain,
              improve movement, and support long-term recovery through guided
              physiotherapy techniques.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Need help identifying the right treatment?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Book a consultation to understand the cause of pain and the most
                suitable physiotherapy approach for recovery.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919038296618?text=Hi%2C%20I%20want%20to%20book%20a%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-800"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="grid gap-6 sm:grid-cols-2">
            {conditions.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
      </div>
    </section>
  );
}
