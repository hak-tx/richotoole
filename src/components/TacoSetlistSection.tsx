"use client";

import { useEffect, useRef } from "react";

export default function TacoSetlistSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay || "0";
            setTimeout(() => {
              el.classList.add("revealed");
            }, parseInt(delay));
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black py-8 sm:py-10 px-4" ref={sectionRef}>
      <div className="max-w-3xl mx-auto border border-orange-500/50 rounded-lg p-8 sm:p-12 text-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/15 via-transparent to-red-900/10 pointer-events-none" />

        <div className="relative">
          {/* App icon */}
          <div
            className="flex justify-center mb-6 reveal-scale"
            data-reveal
            data-reveal-delay="0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/taco-setlist-icon.webp"
              alt="Taco Setlist"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-[28px] sm:rounded-[32px] shadow-2xl shadow-orange-500/30"
            />
          </div>

          {/* Content */}
          <div data-reveal data-reveal-delay="200" className="reveal-up">
            <p className="text-orange-400 uppercase tracking-[0.3em] text-xs sm:text-sm mb-3">
              1st Taco Review App in Texas
            </p>
          </div>

          <div data-reveal data-reveal-delay="350" className="reveal-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 leading-tight">
              Taco Setlist
            </h2>
          </div>

          <div data-reveal data-reveal-delay="500" className="reveal-up">
            <p className="text-orange-300/80 text-base sm:text-lg italic mb-4">
              Where Texas Music meets Texas Tacos.
            </p>
          </div>

          <div data-reveal data-reveal-delay="650" className="reveal-fade">
            <p className="text-gray-300 text-base leading-relaxed mb-4 max-w-xl mx-auto">
              Rate &amp; review tacos everywhere you go. Discover the best
              tacos in every city — plus get Rich O&apos;Toole&apos;s latest tour
              dates, stream his music, and shop exclusive merch, all in one app.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Available on iPhone &bull; Use{" "}
              <a
                href="https://tacosetlist.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
              >
                tacosetlist.com
              </a>{" "}
              on any device
            </p>
          </div>

          {/* Buttons */}
          <div
            data-reveal
            data-reveal-delay="800"
            className="reveal-up flex flex-col sm:flex-row gap-4 justify-center mb-6"
          >
            <a
              href="https://apps.apple.com/us/app/taco-setlist/id6760601913"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-black rounded-xl px-6 py-3 hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg viewBox="0 0 24 24" fill="black" width="26" height="26">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-tight opacity-70">
                  Download on the
                </div>
                <div className="text-lg font-semibold leading-tight">
                  App Store
                </div>
              </div>
            </a>
            <div className="flex flex-col items-center gap-1">
              <a
                href="https://tacosetlist.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white rounded-xl px-6 py-3 hover:bg-white/5 hover:border-white/40 transition-colors text-sm uppercase tracking-widest"
              >
                Visit Website
              </a>
              <span className="text-gray-500 text-xs">
                On Android? Use the web app
              </span>
            </div>
          </div>

          {/* Feature tags */}
          <div
            data-reveal
            data-reveal-delay="950"
            className="reveal-fade flex flex-wrap gap-3 justify-center"
          >
            {[
              "Rate & Review Tacos",
              "Tour Dates",
              "Stream Music",
              "Shop Merch",
            ].map((feature) => (
              <span
                key={feature}
                className="bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs px-3 py-1.5 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
