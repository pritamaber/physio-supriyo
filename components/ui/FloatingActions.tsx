"use client";

import { useState } from "react";
import {
  Plus,
  X,
  Phone,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react";

const actions = [
  {
    href: "https://wa.me/918282859551",
    label: "WhatsApp",
    icon: MessageCircle,
    className: "bg-green-500 hover:bg-green-600 text-white",
  },
  {
    href: "tel:+918282859551",
    label: "Call",
    icon: Phone,
    className: "bg-teal-700 hover:bg-teal-800 text-white",
  },
  {
    href: "https://www.facebook.com/supryo.chatterjee",
    label: "Facebook",
    icon: Facebook,
    className: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  {
    href: "#",
    label: "Instagram",
    icon: Instagram,
    className:
      "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white",
  },
];

export default function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      <div className="flex flex-col items-end gap-3">
        {open &&
          actions.map((action, index) => {
            const Icon = action.icon;

            return (
              <a
                key={action.label}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  action.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`group flex items-center gap-3 rounded-full pl-3 pr-4 py-3 shadow-lg transition hover:scale-[1.03] ${action.className}`}
                style={{
                  animation: `fadeUp 0.25s ease ${index * 0.05}s both`,
                }}
                aria-label={action.label}
              >
                <span className="hidden text-sm font-medium sm:inline">
                  {action.label}
                </span>
                <span className="inline-flex h-5 w-5 items-center justify-center">
                  <Icon size={18} />
                </span>
              </a>
            );
          })}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close quick actions" : "Open quick actions"}
          aria-expanded={open}
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl transition hover:scale-105"
        >
          {open ? <X size={22} /> : <Plus size={22} />}
        </button>
      </div>
    </div>
  );
}
