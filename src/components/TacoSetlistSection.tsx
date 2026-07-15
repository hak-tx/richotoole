"use client";

import { useEffect, useRef, useState } from "react";

export default function TacoSetlistSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Animation starts when top edge is 80% down the viewport,
      // completes when top edge reaches 5% from top — long range
      // so bottom elements reveal as user actually sees them.
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.05;
      const raw = 1 - (rect.top - end) / (start - end);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth ease-out for natural deceleration
  const ease = (t: number) => 1 - Math.pow(1 - t, 3);

  // Staggered progress for each element — spread across the full scroll range
  const p = (start: number, end: number) => {
    const raw = (progress - start) / (end - start);
    return ease(Math.max(0, Math.min(1, raw)));
  };

  const borderP = p(0, 0.5);
  const iconP = p(0.05, 0.35);
  const titleP = p(0.15, 0.45);
  const taglineP = p(0.25, 0.5);
  const descP = p(0.4, 0.65);
  const buttonsP = p(0.6, 0.85);

  return (
    <section className="bg-black py-8 sm:py-10 px-4" ref={sectionRef}>
      <div
        className="max-w-3xl mx-auto rounded-lg p-8 sm:p-12 text-center relative overflow-hidden"
        style={{
          // Single smooth border that fades in with increasing opacity
          border: `1px solid rgba(249, 115, 22, ${borderP * 0.5})`,
        }}
      >
        {/* Animated glow that intensifies */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 30%, rgba(249,115,22,${iconP * 0.12}) 0%, transparent 70%)`,
          }}
        />

        <div className="relative">
          {/* App icon - starts large, scales down with rotation */}
          <div className="flex justify-center mb-6">
            <div
              style={{
                transform: `scale(${1.8 - 0.8 * iconP}) rotate(${(1 - iconP) * -8}deg)`,
                opacity: iconP,
                filter: `blur(${(1 - iconP) * 8}px)`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/taco-setlist-icon.webp"
                alt="Taco Setlist"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-[28px] sm:rounded-[32px]"
                style={{
                  boxShadow: `0 0 ${iconP * 60}px ${iconP * 20}px rgba(249,115,22,${iconP * 0.3})`,
                }}
              />
            </div>
          </div>

          {/* Eyebrow - clip reveal from center */}
          <div
            style={{
              opacity: titleP,
              clipPath: `inset(0 ${(1 - titleP) * 50}% 0 ${(1 - titleP) * 50}%)`,
            }}
          >
            <p className="text-orange-400 uppercase tracking-[0.3em] text-xs sm:text-sm mb-3">
              Where Texas Country Music Meets Tacos
            </p>
          </div>

          {/* Title - scales up from small with letter spacing */}
          <div
            style={{
              transform: `scale(${0.6 + 0.4 * titleP})`,
              opacity: titleP,
              letterSpacing: `${(1 - titleP) * 20}px`,
              filter: `blur(${(1 - titleP) * 4}px)`,
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 leading-tight">
              Taco Setlist
            </h2>
          </div>

          {/* Tagline */}
          <div
            style={{
              transform: `translateY(${(1 - taglineP) * 20}px)`,
              opacity: taglineP,
            }}
          >
            <p className="text-orange-300/80 text-base sm:text-lg italic mb-4">
              Tacos. Live Music. Anywhere.
            </p>
          </div>

          {/* Description */}
          <div
            style={{
              transform: `translateY(${(1 - descP) * 25}px)`,
              opacity: descP,
              filter: `blur(${(1 - descP) * 3}px)`,
            }}
          >
            <p className="text-gray-300 text-base leading-relaxed mb-4 max-w-xl mx-auto">
              The taco map built for Texas Country fans on tour. Find the best
              taco spots near every show, search the Top 50 touring artists&apos;
              schedules, and plan your roadtrip — all in one app.
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
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
            style={{
              transform: `translateY(${(1 - buttonsP) * 20}px)`,
              opacity: buttonsP,
            }}
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

          {/* Feature tags - pop in one at a time */}
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Taco Reviews",
              "Top 50 Tour Dates",
              "Live Music Map",
              "Roadtrip Planner",
            ].map((feature, i) => {
              const tagP = p(0.65 + i * 0.06, 0.85 + i * 0.06);
              return (
                <span
                  key={feature}
                  className="bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs px-3 py-1.5 rounded-full"
                  style={{
                    transform: `scale(${tagP}) translateY(${(1 - tagP) * 10}px)`,
                    opacity: tagP,
                  }}
                >
                  {feature}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
