"use client";

export default function TacoSetlistSection() {
  return (
    <section className="bg-gradient-to-b from-[#1a0a00] to-black py-16 px-4">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: App info */}
          <div className="text-center md:text-left">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-2">
              New App
            </p>
            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              Taco Setlist
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Rate &amp; review tacos everywhere you go. Discover the best tacos
              in every city — plus get Rich O&apos;Toole&apos;s latest tour dates,
              stream his music, and shop exclusive merch, all in one app.
            </p>
            <p className="text-gray-400 text-sm mb-8">
              Available on iPhone. Use{" "}
              <a
                href="https://tacosetlist.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
              >
                tacosetlist.com
              </a>{" "}
              on any device for full functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://apps.apple.com/us/app/taco-setlist/id6760601913"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black rounded-xl px-6 py-3 hover:bg-gray-200 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="black" width="28" height="28">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight">Download on the</div>
                  <div className="text-lg font-semibold leading-tight">App Store</div>
                </div>
              </a>
              <a
                href="https://tacosetlist.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm inline-flex items-center justify-center gap-2"
              >
                <span>🌐</span> Visit Website
              </a>
            </div>
          </div>

          {/* Right: App screenshots / icon showcase */}
          <div className="flex justify-center items-center gap-6">
            {/* App icon */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[28px] overflow-hidden shadow-2xl shadow-orange-900/30 flex-shrink-0 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/taco-setlist-icon.webp"
                alt="Taco Setlist App Icon"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>

            {/* Phone mockup / screenshot area */}
            <div className="hidden sm:block w-48 sm:w-56 rounded-[24px] overflow-hidden border-2 border-white/10 shadow-2xl shadow-orange-900/20 bg-gradient-to-b from-[#1a0a00] to-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/taco-setlist-screenshot.webp"
                alt="Taco Setlist App Screenshot"
                className="w-full"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  el.parentElement!.style.padding = "40px 20px";
                  el.parentElement!.style.textAlign = "center";
                  el.parentElement!.innerHTML = `
                    <div style="font-size:48px;margin-bottom:16px;">🌮</div>
                    <div style="color:#f97316;font-size:18px;font-weight:bold;margin-bottom:8px;">Taco Setlist</div>
                    <div style="color:#999;font-size:12px;line-height:1.8;">Rate Tacos<br/>Find Shows<br/>Get Merch<br/>Stream Music</div>
                  `;
                }}
              />
            </div>
          </div>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {["🌮 Rate Tacos", "🎵 Stream Music", "🎤 Tour Dates", "👕 Shop Merch"].map(
            (feature) => (
              <span
                key={feature}
                className="bg-white/5 border border-white/10 text-gray-300 text-sm px-4 py-2 rounded-full"
              >
                {feature}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
