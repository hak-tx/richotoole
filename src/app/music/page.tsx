import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music | Rich O'Toole",
  description: "Listen to Rich O'Toole's music on Spotify, Apple Music, and more.",
};

const streamingLinks = [
  { name: "Spotify", url: "https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0", color: "bg-[#1DB954] hover:bg-[#1aa34a]" },
  { name: "Apple Music", url: "https://music.apple.com/us/artist/rich-otoole/191054733", color: "bg-[#fc3c44] hover:bg-[#e0353c]" },
  { name: "Amazon Music", url: "https://music.amazon.com/artists/B001GC6N3K/rich-o-toole", color: "bg-[#00A8E1] hover:bg-[#0095c8]" },
  { name: "YouTube Music", url: "https://www.youtube.com/richotoole", color: "bg-[#FF0000] hover:bg-[#cc0000]" },
  { name: "SoundCloud", url: "https://soundcloud.com/richotoole17", color: "bg-[#FF5500] hover:bg-[#e04a00]" },
];

export default function MusicPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center uppercase tracking-wider mb-4">
          Music
        </h1>
        <div className="w-16 h-0.5 bg-accent mx-auto mb-12" />

        {/* Spotify Artist Embed */}
        <div className="max-w-3xl mx-auto mb-16">
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

        {/* Streaming Links */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold uppercase tracking-wider mb-8">
            Listen Everywhere
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {streamingLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block ${link.color} text-white font-bold uppercase tracking-widest px-8 py-3 text-sm transition-colors`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Latest Album Embed */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold uppercase tracking-wider mb-8 text-center">
            Latest Release
          </h2>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/2t6FHAUXxi9eiatP2Mavh0?utm_source=generator&theme=0"
            width="100%"
            height="380"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Rich O'Toole Latest"
          />
        </div>
      </div>
    </div>
  );
}
