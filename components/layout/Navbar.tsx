"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle, CalendarDays } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-lg font-bold tracking-tight text-slate-900 sm:text-xl"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-teal-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phone ? `tel:${siteConfig.phone}` : "#"}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-700 hover:text-teal-700"
          >
            <Phone size={16} />
            Call
          </a>

          <a
            href={siteConfig.whatsapp ? siteConfig.whatsapp : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 transition hover:bg-teal-100"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-800"
          >
            <CalendarDays size={16} />
            Book Now
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={siteConfig.phone ? `tel:${siteConfig.phone}` : "#"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-teal-700 hover:text-teal-700"
            aria-label="Call now"
          >
            <Phone size={18} />
          </a>

          <a
            href={siteConfig.whatsapp ? siteConfig.whatsapp : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 text-white transition hover:bg-teal-800"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={18} />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-teal-700 hover:text-teal-700"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            <nav className="flex flex-col">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-teal-700"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-800"
              >
                <CalendarDays size={16} />
                Book Now
              </Link>

              <a
                href={siteConfig.phone ? `tel:${siteConfig.phone}` : "#"}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-teal-700 hover:text-teal-700"
              >
                <Phone size={16} />
                Call Now
              </a>

              <a
                href={siteConfig.whatsapp ? siteConfig.whatsapp : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-5 py-3 text-sm font-medium text-teal-700 transition hover:bg-teal-100"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
