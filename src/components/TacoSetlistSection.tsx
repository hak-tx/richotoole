"use client";

export default function TacoSetlistSection() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-black to-red-900/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-8 py-10 sm:py-14">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* App icon - large and prominent */}
          <div className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/taco-setlist-icon.webp"
              alt="Taco Setlist"
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-[32px] sm:rounded-[40px] shadow-2xl shadow-orange-500/30"
            />
          </div>

          {/* Content */}
          <div className="text-center md:text-left flex-1">
            <p className="text-orange-400 uppercase tracking-[0.3em] text-xs sm:text-sm mb-3">
              1st Taco Review App in Texas
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-white mb-3 leading-tight">
              Taco Setlist
            </h2>
            <p className="text-orange-300/80 text-base sm:text-lg italic mb-4">
              Where Texas Music meets Texas Tacos.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 max-w-2xl">
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

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <a
                href="https://apps.apple.com/us/app/taco-setlist/id6760601913"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black rounded-xl px-7 py-4 hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg viewBox="0 0 24 24" fill="black" width="30" height="30">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight opacity-70">Download on the</div>
                  <div className="text-xl font-semibold leading-tight">App Store</div>
                </div>
              </a>
              <a
                href="https://tacosetlist.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white rounded-xl px-7 py-4 hover:bg-white/5 hover:border-white/40 transition-colors text-sm uppercase tracking-widest"
              >
                Visit Website
              </a>
            </div>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                "Rate & Review Tacos",
                "Tour Dates",
                "Stream Music",
                "Shop Merch",
              ].map((feature) => (
                <span
                  key={feature}
                  className="bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs sm:text-sm px-4 py-2 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
