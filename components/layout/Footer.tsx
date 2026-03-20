import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* BRAND */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {siteConfig.name}
            </h3>
            <p className="mt-4 text-sm text-slate-600">
              Personalized physiotherapy care focused on pain relief, recovery,
              and better movement for everyday life.
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
              <MapPin size={16} />
              {siteConfig.address || "Newtown & Rajarhat, Kolkata"}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Quick Links
            </h4>

            <div className="mt-4 flex flex-col gap-2">
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
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Contact
            </h4>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-teal-700"
              >
                <Phone size={16} />
                {siteConfig.phone || "+91 XXXXXXXXXX"}
              </a>

              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-teal-700"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          {/* DEVELOPER CREDIT */}
          <div className="mt-2 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
            <p>
              Built by{" "}
              <a
                href="https://rebadigitalsolutions.com"
                target="_blank"
                className="font-medium text-teal-700 hover:underline"
              >
                Reba Digital Solutions
              </a>
            </p>

            <a
              href="https://wa.me/918282859551"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 hover:bg-teal-100"
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
