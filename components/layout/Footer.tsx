import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  Facebook,
  Clock3,
  Star,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          {/* BRAND */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
              <Star size={14} className="fill-current" />
              5-Star Rated Care in Newtown & Rajarhat
            </div>

            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              {siteConfig.name}
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Personalized physiotherapy care focused on pain relief, mobility,
              rehabilitation, and long-term recovery with a patient-first
              approach.
            </p>

            <div className="mt-5 flex items-start gap-2 text-sm text-slate-600">
              <MapPin size={16} className="mt-[2px] shrink-0" />
              <span>{siteConfig.address || "Newtown & Rajarhat, Kolkata"}</span>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=JC9Q%2BCC%20Kolkata%2C%20West%20Bengal"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-teal-700 transition hover:border-teal-200 hover:bg-teal-50"
            >
              <MapPin size={15} />
              Get Directions
            </a>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              Quick Links
            </h4>

            <div className="mt-4 flex flex-col gap-2.5">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-600 transition hover:text-teal-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              Contact
            </h4>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-teal-700"
              >
                <Phone size={16} />
                {siteConfig.phone || "+91 XXXXXXXXXX"}
              </a>

              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-teal-700"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>

              <a
                href="https://www.facebook.com/supryo.chatterjee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-teal-700"
              >
                <Facebook size={16} />
                Facebook Profile
              </a>
            </div>
          </div>

          {/* HOURS + TRUST */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              Availability
            </h4>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start gap-2">
                <Clock3 size={16} className="mt-[2px] text-teal-700" />
                <div className="text-sm text-slate-600">
                  <p className="font-medium text-slate-900">
                    Consultation Hours
                  </p>
                  <p className="mt-1">Mon - Sat</p>
                  <p>9:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="mt-4 border-t border-slate-100 pt-4">
                <p className="text-sm font-medium text-slate-900">
                  Trusted by patients
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Friendly care, guided recovery, and strong local patient
                  trust.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <div className="mt-2 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
            <p>
              Built by{" "}
              <a
                href="https://rebadigitalsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-700 hover:underline"
              >
                Reba Digital Solutions
              </a>
            </p>

            <a
              href="https://wa.me/919038296618"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 transition hover:bg-teal-100"
            >
              <MessageCircle size={14} />
              Developer WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
