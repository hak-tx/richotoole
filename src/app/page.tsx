import Link from "next/link";
import Image from "next/image";

const albums = [
  { title: "God Is a Gentleman", year: "2024", image: "/images/god-is-a-gentleman.svg" },
  { title: "Ghost", year: "2024", image: "/images/ghost.svg" },
  { title: "New York", year: "2020", image: "/images/new-york.svg" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.svg"
            alt="Rich O'Toole"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="hero-gradient absolute inset-0" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-wider uppercase mb-4">
            Rich O&apos;Toole
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Texas Country Music Artist
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/music"
              className="inline-block bg-accent hover:bg-accent-dark text-black font-bold uppercase tracking-widest px-8 py-3 text-sm transition-colors"
            >
              Listen Now
            </Link>
            <Link
              href="/tour"
              className="inline-block border border-white/30 hover:border-accent text-white hover:text-accent font-bold uppercase tracking-widest px-8 py-3 text-sm transition-colors"
            >
              Tour Dates
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center uppercase tracking-wider mb-4">
            Available Now
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-12" />
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative aspect-square max-w-md mx-auto w-full">
              <Image
                src="/images/god-is-a-gentleman.svg"
                alt="God Is a Gentleman"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-accent uppercase tracking-widest text-sm mb-2">
                9th Studio Album
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                God Is a Gentleman
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The latest album from Rich O&apos;Toole, released on PTO Records.
                A powerful collection of songs that showcases the depth and
                versatility that has made Rich a household name in Texas Country music.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent hover:bg-accent-dark text-black font-bold uppercase tracking-widest px-8 py-3 text-sm transition-colors text-center"
                >
                  Stream Now
                </a>
                <a
                  href="https://music.apple.com/us/album/god-is-a-gentleman/1846851468"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-white/30 hover:border-accent text-white hover:text-accent font-bold uppercase tracking-widest px-8 py-3 text-sm transition-colors text-center"
                >
                  Apple Music
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-20 sm:py-28 px-4 bg-card-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center uppercase tracking-wider mb-4">
            Music
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-12" />

          {/* Spotify Embed */}
          <div className="max-w-3xl mx-auto mb-12">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/2t6FHAUXxi9eiatP2Mavh0?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Rich O'Toole on Spotify"
            />
          </div>

          {/* Recent Albums Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {albums.map((album) => (
              <div key={album.title} className="group text-center">
                <div className="relative aspect-square mb-4 overflow-hidden">
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-bold text-lg">{album.title}</h3>
                <p className="text-muted text-sm">{album.year}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/discography"
              className="inline-block border border-white/30 hover:border-accent text-white hover:text-accent font-bold uppercase tracking-widest px-8 py-3 text-sm transition-colors"
            >
              View Full Discography
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center uppercase tracking-wider mb-4">
            Watch
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-12" />
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed?listType=user_uploads&list=richotoole"
                title="Rich O'Toole Videos"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/videos"
              className="inline-block border border-white/30 hover:border-accent text-white hover:text-accent font-bold uppercase tracking-widest px-8 py-3 text-sm transition-colors"
            >
              More Videos
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 sm:py-28 px-4 bg-card-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative aspect-[3/4] max-w-md mx-auto w-full">
              <Image
                src="/images/rich-portrait.svg"
                alt="Rich O'Toole"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider mb-4">
                About Rich
              </h2>
              <div className="w-16 h-0.5 bg-accent mb-8" />
              <p className="text-gray-400 leading-relaxed mb-6">
                Rich O&apos;Toole is a household name in the Texas Country genre. With
                75 Million streams and half a million albums sold, he is just getting started.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                A Red Dirt country singer with a flair for gleaming arena rock, Rich built
                a regional following in his native Texas during the late 2000s and early
                2010s that has since grown into a national fanbase.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Check out one of Rich&apos;s high energy full band shows or an intimate
                acoustic evening with Rich.
              </p>
              <Link
                href="/about"
                className="inline-block bg-accent hover:bg-accent-dark text-black font-bold uppercase tracking-widest px-8 py-3 text-sm transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider mb-4">
            Stay Connected
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />
          <p className="text-gray-400 mb-8">
            Follow Rich O&apos;Toole on social media for the latest updates, tour announcements, and new music.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.facebook.com/RichOTooleMusic/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-sm uppercase tracking-widest">Facebook</a>
            <a href="https://www.instagram.com/richotoole/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-sm uppercase tracking-widest">Instagram</a>
            <a href="https://x.com/RichOToole" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-sm uppercase tracking-widest">X</a>
            <a href="https://www.tiktok.com/@therichotoole" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-sm uppercase tracking-widest">TikTok</a>
            <a href="https://www.youtube.com/richotoole" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-sm uppercase tracking-widest">YouTube</a>
          </div>
        </div>
      </section>
    </>
  );
}
