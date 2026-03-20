"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-[100] border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl"
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
              href={siteConfig.whatsapp || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-800"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteConfig.phone ? `tel:${siteConfig.phone}` : "#"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700"
              aria-label="Call now"
            >
              <Phone size={18} />
            </a>

            <a
              href={siteConfig.whatsapp || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 text-white"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={18} />
            </a>

            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col gap-1">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-teal-700"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 grid gap-3">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="inline-flex items-center justify-center rounded-full bg-teal-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-800"
              >
                Book Now
              </Link>

              <a
                href={siteConfig.phone ? `tel:${siteConfig.phone}` : "#"}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700"
              >
                <Phone size={16} />
                Call Now
              </a>

              <a
                href={siteConfig.whatsapp || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-5 py-3 text-sm font-medium text-teal-700"
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
