"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const treatments = [
  {
    image: "/images/treatment/treatment1.jpeg",
    caption: "Posture correction session",
  },
  {
    image: "/images/treatment/treatment2.jpeg",
    caption: "Manual therapy for pain relief",
  },
  {
    image: "/images/treatment/treatment3.jpeg",
    caption: "Mobility work for better movement",
  },
  {
    image: "/images/treatment/treatment4.jpeg",
    caption: "Rehabilitation after injury",
  },
  {
    image: "/images/treatment/treatment5.jpeg",
    caption: "Neck and shoulder pain treatment",
  },
  {
    image: "/images/treatment/treatment6.jpeg",
    caption: "Guided stretching and recovery",
  },
  {
    image: "/images/treatment/treatment7.jpeg",
    caption: "Back pain physiotherapy care",
  },
  {
    image: "/images/treatment/treatment8.jpeg",
    caption: "Strengthening for joint support",
  },
];

export default function PreviousTreatments() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Previous Treatments
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Real sessions, real recovery journeys
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              A glimpse into past physiotherapy sessions focused on pain relief,
              mobility improvement, rehabilitation, and better daily movement.
            </p>
          </div>

          <div className="hidden gap-3 md:flex">
            <button
              onClick={scrollLeft}
              className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:bg-slate-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollRight}
              className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:bg-slate-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {treatments.map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-[280px] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
            >
              <div className="relative h-[340px] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover object-center transition duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4">
                <p className="text-sm font-medium text-slate-700">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-3 md:hidden">
          <button
            onClick={scrollLeft}
            className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:bg-slate-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollRight}
            className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:bg-slate-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
