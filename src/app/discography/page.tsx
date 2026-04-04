import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Discography | Rich O'Toole",
  description: "Complete discography of Rich O'Toole - all albums from Seventeen to God Is a Gentleman.",
};

const albums = [
  {
    title: "God Is a Gentleman",
    year: "2024",
    label: "PTO Records",
    image: "/images/god-is-a-gentleman.svg",
    spotify: "https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0",
    apple: "https://music.apple.com/us/artist/rich-otoole/191054733",
    description: "The 9th studio album from Rich O'Toole.",
  },
  {
    title: "Ghost",
    year: "2024",
    label: "PTO Records",
    image: "/images/ghost.svg",
    spotify: "https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0",
    apple: "https://music.apple.com/us/artist/rich-otoole/191054733",
    description: "Reached #5 on the iTunes charts nationwide. Country Music France called it one of the best written records of 2024.",
  },
  {
    title: "New York",
    year: "2020",
    label: "Buffalo Roam Records / Average Joes Entertainment",
    image: "/images/new-york.svg",
    spotify: "https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0",
    apple: "https://music.apple.com/us/artist/rich-otoole/191054733",
    description: "Released on Buffalo Roam Records through Average Joes Entertainment.",
  },
  {
    title: "American Kid",
    year: "2017",
    label: "PTO Records",
    image: "/images/american-kid.svg",
    spotify: "https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0",
    apple: "https://music.apple.com/us/artist/rich-otoole/191054733",
    description: "Debuted at #5 on the Country Music iTunes Chart and #43 on the National Billboard Chart.",
  },
  {
    title: "Jaded",
    year: "2014",
    label: "PTO Records",
    image: "/images/jaded.svg",
    spotify: "https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0",
    apple: "https://music.apple.com/us/artist/rich-otoole/191054733",
    description: "Debuted at #10 on the Country Music iTunes Chart.",
  },
  {
    title: "Brightwork",
    year: "2013",
    label: "PTO Records",
    image: "/images/brightwork.svg",
    spotify: "https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0",
    apple: "https://music.apple.com/us/artist/rich-otoole/191054733",
    description: "The debut release on Rich's own PTO Records label.",
  },
  {
    title: "Kiss of a Liar",
    year: "2010",
    label: "",
    image: "/images/kiss-of-a-liar.svg",
    spotify: "https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0",
    apple: "https://music.apple.com/us/artist/rich-otoole/191054733",
    description: "Featured cameos from Josh Abbott and Pat Green. Peaked at #73 on Billboard's country chart.",
  },
  {
    title: "In a Minute or 2",
    year: "2008",
    label: "",
    image: "/images/in-a-minute-or-2.svg",
    spotify: "https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0",
    apple: "https://music.apple.com/us/artist/rich-otoole/191054733",
    description: "Rich O'Toole's sophomore album.",
  },
  {
    title: "Seventeen",
    year: "2006",
    label: "",
    image: "/images/seventeen.svg",
    spotify: "https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0",
    apple: "https://music.apple.com/us/artist/rich-otoole/191054733",
    description: "Rich's debut album, named 'Best Album of 2006 That No One Told You About' by Americana Music Times.",
  },
];

export default function DiscographyPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center uppercase tracking-wider mb-4">
          Discography
        </h1>
        <div className="w-16 h-0.5 bg-accent mx-auto mb-12" />

        <div className="space-y-16">
          {albums.map((album) => (
            <div
              key={album.title}
              className="grid md:grid-cols-[300px_1fr] gap-8 items-start"
            >
              <div className="relative aspect-square max-w-[300px] mx-auto w-full">
                <Image
                  src={album.image}
                  alt={album.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-accent uppercase tracking-widest text-sm mb-1">
                  {album.year} {album.label && `\u2022 ${album.label}`}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  {album.title}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed max-w-xl">
                  {album.description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href={album.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#1DB954] hover:bg-[#1aa34a] text-white font-bold uppercase tracking-widest px-6 py-2 text-xs transition-colors"
                  >
                    Spotify
                  </a>
                  <a
                    href={album.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#fc3c44] hover:bg-[#e0353c] text-white font-bold uppercase tracking-widest px-6 py-2 text-xs transition-colors"
                  >
                    Apple Music
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
