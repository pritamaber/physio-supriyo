import Link from "next/link";

const conditions = [
  {
    title: "Back Pain & Low Back Pain",
    desc: "Support for chronic back pain, stiffness, posture-related discomfort, and movement limitations affecting daily life.",
  },
  {
    title: "Neck Pain & Cervical Stiffness",
    desc: "Treatment-focused care for neck pain, reduced mobility, and strain related to posture or prolonged sitting.",
  },
  {
    title: "Knee Pain",
    desc: "Guided physiotherapy for knee pain, weakness, reduced joint movement, and recovery support for better daily function.",
  },
  {
    title: "Shoulder Pain",
    desc: "Care for long-standing shoulder discomfort, restricted movement, and functional difficulty in routine activities.",
  },
  {
    title: "Neurological Rehabilitation",
    desc: "Physiotherapy support for neurological conditions including facial weakness, mobility challenges, and guided recovery.",
  },
  {
    title: "Dizziness & Balance Issues",
    desc: "Targeted physiotherapy support for patients struggling with dizziness, instability, and confidence in movement.",
  },
];

const reviewSnippets = [
  {
    name: "Sikha Choudhury",
    text: "I was suffering from severe low back pain for the past few months and benefited after physiotherapy sessions.",
  },
  {
    name: "Sumita Sadhukhan",
    text: "My mother was suffering from knee pain and improved significantly after guided sessions.",
  },
  {
    name: "Bandana Das",
    text: "I had a shoulder problem for a long time. The exercises and guidance helped me feel much better.",
  },
  {
    name: "Sunit Kamila",
    text: "After 21 days of physiotherapy for Bell’s palsy, I improved a lot and regained movement.",
  },
  {
    name: "Satarupa Mondal",
    text: "I had been suffering from dizziness for a long time and benefited considerably from the sessions.",
  },
];

export default function ConditionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Conditions Treated
        </p>

        <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
          Physiotherapy support for pain relief, mobility, recovery, and
          rehabilitation
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          Physio Supriyo provides personalized physiotherapy care for a wide
          range of musculoskeletal and neurological conditions in Rajarhat and
          Newtown. Treatment is designed to reduce pain, improve movement, and
          support long-term recovery through guided therapy and structured
          rehabilitation.
        </p>
      </div>

      <section className="mt-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold text-slate-900">
          A patient-focused approach for every condition
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          Every patient experiences pain and recovery differently. That is why
          treatment is guided by assessment, condition-specific planning,
          hands-on support, and exercises tailored to the patient’s needs. The
          goal is not only temporary relief, but better function, improved
          confidence, and long-term improvement.
        </p>
      </section>

      <section className="mt-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Patient Experiences
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">
            Real feedback from patients across Rajarhat and Newtown
          </h2>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {reviewSnippets.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <p className="text-sm leading-7 text-slate-600">
                “{review.text}”
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Looking for a physiotherapist in Rajarhat or Newtown?
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Whether you are dealing with back pain, knee pain, shoulder issues,
            neurological recovery, or dizziness-related problems, personalized
            physiotherapy care can help you recover with confidence.
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
