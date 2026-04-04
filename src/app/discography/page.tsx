import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discography | Rich O'Toole",
  description:
    "Complete discography of Rich O'Toole - all albums.",
};

const CDN = "https://richotoole.com/cdn/shop/files";

const albums = [
  {
    title: "God is a Gentleman",
    image: `${CDN}/God_is_a_Gentleman_Album_Cover.jpg`,
    buyLink: "https://itunes.apple.com/us/album/god-is-a-gentleman/1846851468?app=itunes&ls=1",
  },
  {
    title: "Ghost",
    image: `${CDN}/GHOST-3000x3000-FINAL.jpg`,
    buyLink: "https://itunes.apple.com/us/album/ghost/1747221673?app=itunes&ls=1",
  },
  {
    title: "New York",
    image: `${CDN}/RT_New_York.webp`,
    buyLink: "https://music.apple.com/us/album/new-york/1508714327?app=itunes",
  },
  {
    title: "American Kid",
    image: `${CDN}/RT_American_Kid.webp`,
    buyLink: "https://music.apple.com/us/album/american-kid/1198717567?app=itunes",
  },
  {
    title: "Jaded",
    image: `${CDN}/RT_Jaded.webp`,
    buyLink: "https://music.apple.com/us/album/jaded/883297855?app=itunes",
  },
  {
    title: "In a Minute or 2",
    image: `${CDN}/RT_In_a_minute_or_2.webp`,
    buyLink: "https://itunes.apple.com/us/album/675377522?app=itunes&ls=1",
  },
];

export default function DiscographyPage() {
  return (
    <div className="bg-black min-h-screen">
      {albums.map((album) => (
        <section key={album.title} className="py-9 px-4">
          <div className="max-w-[1600px] mx-auto grid md:grid-cols-[1fr_2fr] gap-8 items-start">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={album.image}
                alt={album.title}
                className="w-full"
              />
            </div>
            <div className="pt-0 md:pt-4">
              <h2 className="text-3xl sm:text-4xl text-white mb-6">
                {album.title}
              </h2>
              <a
                href={album.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary uppercase tracking-widest text-sm"
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
