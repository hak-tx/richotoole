import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Discography | Rich O'Toole",
  description:
    "Complete discography of Rich O'Toole - all albums from Seventeen to God Is a Gentleman.",
};

const CDN = "https://cdn.shopify.com/s/files/1/0754/4255/3057/files";

const albums = [
  {
    title: "God is a Gentleman",
    image: `${CDN}/God_is_a_Gentleman_Album_Cover.jpg`,
    buyLink:
      "https://itunes.apple.com/us/album/god-is-a-gentleman/1846851468?app=itunes&ls=1",
  },
  {
    title: "Ghost",
    image: `${CDN}/GHOST-3000x3000-FINAL.jpg`,
    buyLink:
      "https://itunes.apple.com/us/album/ghost/1747221673?app=itunes&ls=1",
  },
  {
    title: "New York",
    image: `${CDN}/RT_New_York.webp`,
    buyLink:
      "https://music.apple.com/us/album/new-york/1508714327?app=itunes",
  },
  {
    title: "American Kid",
    image: `${CDN}/RT_American_Kid.webp`,
    buyLink:
      "https://music.apple.com/us/album/american-kid/1198717567?app=itunes",
  },
  {
    title: "Jaded",
    image: `${CDN}/RT_Jaded.webp`,
    buyLink:
      "https://music.apple.com/us/album/jaded/883297855?app=itunes",
  },
  {
    title: "In a Minute or 2",
    image: `${CDN}/RT_In_a_minute_or_2.webp`,
    buyLink:
      "https://itunes.apple.com/us/album/675377522?app=itunes&ls=1",
  },
];

export default function DiscographyPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {albums.map((album) => (
        <section
          key={album.title}
          className="py-9 px-4"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-0 items-start">
            <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
              <Image
                src={album.image}
                alt={album.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-8 md:pt-4 md:pl-12">
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-6">
                {album.title}
              </h2>
              <a
                href={album.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white text-white uppercase tracking-widest px-8 py-3 text-sm hover:bg-white/10 transition-colors"
              >
                Buy Album
              </a>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
