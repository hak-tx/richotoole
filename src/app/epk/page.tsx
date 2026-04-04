import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "EPK | Rich O'Toole",
  description: "Electronic Press Kit for Rich O'Toole - Texas Country Music Artist.",
};

const pressQuotes = [
  {
    quote: "One of the best written records of 2024.",
    source: "Country Music France",
    about: "Ghost",
  },
  {
    quote: "Best Album of 2006 That No One Told You About.",
    source: "Americana Music Times",
    about: "Seventeen",
  },
];

const stats = [
  { label: "Streams", value: "75M+" },
  { label: "Albums Sold", value: "500K+" },
  { label: "Studio Albums", value: "9" },
  { label: "Years Active", value: "18+" },
];

export default function EPKPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center uppercase tracking-wider mb-4">
          Electronic Press Kit
        </h1>
        <div className="w-16 h-0.5 bg-accent mx-auto mb-12" />

        {/* Photo + Quick Bio */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div className="relative aspect-[3/4] max-w-md mx-auto w-full">
            <Image
              src="/images/rich-portrait.svg"
              alt="Rich O'Toole"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Rich O&apos;Toole</h2>
            <p className="text-accent uppercase tracking-widest text-sm mb-6">
              Texas Country Music Artist
            </p>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Rich O&apos;Toole is a household name in the Texas Country genre.
                With 75 Million streams and half a million albums sold, he is
                just getting started.
              </p>
              <p>
                A Red Dirt country singer with a flair for gleaming arena rock,
                Rich has released nine studio albums including his latest,{" "}
                <em>God Is a Gentleman</em>, on PTO Records.
              </p>
              <p>
                In 2020, O&apos;Toole signed with Average Joe&apos;s Entertainment
                and launched Buffalo Roam Records.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card-bg border border-card-border"
            >
              <p className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Press Quotes */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold uppercase tracking-wider mb-8 text-center">
            Press
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {pressQuotes.map((quote, i) => (
              <blockquote
                key={i}
                className="border-l-2 border-accent pl-6 py-2"
              >
                <p className="text-xl italic text-gray-300 mb-2">
                  &ldquo;{quote.quote}&rdquo;
                </p>
                <footer className="text-sm text-muted">
                  &mdash; {quote.source}
                  {quote.about && (
                    <span className="text-accent"> on {quote.about}</span>
                  )}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-card-bg border border-card-border p-8 sm:p-12 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-wider mb-6">
            Contact
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
            <div>
              <h3 className="text-accent uppercase tracking-widest text-sm mb-2">
                Booking
              </h3>
              <p className="text-gray-300">Jimmy</p>
              <a
                href="mailto:jimmy@countdowntalent.com"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                jimmy@countdowntalent.com
              </a>
            </div>
            <div>
              <h3 className="text-accent uppercase tracking-widest text-sm mb-2">
                Label
              </h3>
              <p className="text-gray-300">PTO Records / Buffalo Roam Records</p>
              <a
                href="https://averagejoesent.com/artist/rich-otoole/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Average Joes Entertainment
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-card-border">
            <h3 className="text-accent uppercase tracking-widest text-sm mb-4">
              Social Media
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="https://www.facebook.com/RichOTooleMusic/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">Facebook</a>
              <a href="https://www.instagram.com/richotoole/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">Instagram</a>
              <a href="https://www.tiktok.com/@therichotoole" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">TikTok</a>
              <a href="https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">Spotify</a>
              <a href="https://www.youtube.com/richotoole" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">YouTube</a>
              <a href="https://music.apple.com/us/artist/rich-otoole/191054733" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">Apple Music</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
