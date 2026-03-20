import { Phone, MessageCircle, MapPin, CalendarDays } from "lucide-react";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-teal-700 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 rounded-3xl bg-teal-800/40 p-8 backdrop-blur sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-100">
              Book a Consultation
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Take the first step toward less pain, better movement, and faster
              recovery
            </h2>

            <p className="mt-5 text-base leading-7 text-teal-50/90">
              Whether you are dealing with back pain, neck stiffness, joint
              discomfort, posture issues, or injury recovery, personalized
              physiotherapy care can help you feel better and move with more
              confidence.
            </p>

            <p className="mt-4 text-base leading-7 text-teal-50/90">
              Reach out today to discuss your condition, ask questions, or
              schedule a consultation.
            </p>
          </div>

          <div className="grid gap-4">
            <a
              href={siteConfig.phone ? `tel:${siteConfig.phone}` : "#"}
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-slate-900 transition hover:scale-[1.01]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <Phone size={18} />
              </span>
              <span>
                <span className="block text-sm text-slate-500">Call Now</span>
                <span className="block font-semibold">
                  {siteConfig.phone || "+91 XXXXXXXXXX"}
                </span>
              </span>
            </a>

            <a
              href={siteConfig.whatsapp || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-slate-900 transition hover:scale-[1.01]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <MessageCircle size={18} />
              </span>
              <span>
                <span className="block text-sm text-slate-500">WhatsApp</span>
                <span className="block font-semibold">
                  Chat for Quick Response
                </span>
              </span>
            </a>

            <div className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-slate-900">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <MapPin size={18} />
              </span>
              <span>
                <span className="block text-sm text-slate-500">
                  Service Area
                </span>
                <span className="block font-semibold">
                  {siteConfig.address || "Newtown & Rajarhat, Kolkata"}
                </span>
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/15"
            >
              <CalendarDays size={18} />
              Go to Contact Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
