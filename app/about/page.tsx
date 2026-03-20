export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      {/* HERO */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          About
        </p>

        <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
          Helping people move better, recover faster, and live pain-free
        </h1>

        <p className="mt-4 text-slate-600">
          Physio Supriyo is dedicated to providing personalized physiotherapy
          care focused on real recovery, improved mobility, and long-term
          results. Every treatment is guided by clinical understanding, patient
          comfort, and a commitment to helping individuals regain confidence in
          movement.
        </p>
      </div>

      {/* BIO + CREDIBILITY */}
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Professional Background
          </h2>

          <p className="mt-4 text-slate-600 leading-7">
            With hands-on clinical experience in treating a wide range of
            musculoskeletal conditions, Physio Supriyo focuses on identifying
            the root cause of pain rather than just temporary relief. Treatment
            plans are carefully designed to suit each individual’s condition,
            lifestyle, and recovery goals.
          </p>

          <p className="mt-4 text-slate-600 leading-7">
            In addition to clinical practice, Physio Supriyo is also actively
            involved in teaching and mentoring physiotherapy students as a
            faculty member at a reputed physiotherapy college. This continuous
            engagement with academic learning ensures that treatment approaches
            remain updated, evidence-based, and aligned with modern practices.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Areas of Focus
          </h2>

          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• Back pain and spine-related conditions</li>
            <li>• Neck pain and posture correction</li>
            <li>• Joint pain and mobility issues</li>
            <li>• Sports injury rehabilitation</li>
            <li>• Strengthening and recovery programs</li>
          </ul>
        </div>
      </div>

      {/* APPROACH */}
      <div className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-slate-900">
          Treatment Philosophy
        </h2>

        <p className="mt-4 text-slate-600 leading-7">
          Effective physiotherapy is not just about reducing pain—it is about
          restoring movement, improving strength, and preventing future issues.
          Every session is designed to ensure patients understand their
          condition and actively participate in their recovery process.
        </p>

        <p className="mt-4 text-slate-600 leading-7">
          The focus is always on long-term results, combining hands-on therapy,
          guided exercises, and practical lifestyle corrections that fit into
          everyday life.
        </p>
      </div>

      {/* LOCATION + TRUST */}
      <div className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-slate-900">
          Serving Newtown & Rajarhat
        </h2>

        <p className="mt-4 text-slate-600 leading-7">
          Trusted by patients across Newtown and Rajarhat, Physio Supriyo is
          known for a patient-friendly approach, clear communication, and
          consistent results. The goal is to create a comfortable and supportive
          environment where every individual feels heard and guided.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <h3 className="text-xl font-semibold text-slate-900">
            Start your recovery journey today
          </h3>

          <p className="mt-3 text-slate-600">
            Whether you're dealing with pain, stiffness, or recovering from an
            injury, personalized physiotherapy care can help you feel better and
            move confidently again.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="tel:+918282859551"
              className="rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-800"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918282859551"
              target="_blank"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-teal-700 hover:text-teal-700"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
