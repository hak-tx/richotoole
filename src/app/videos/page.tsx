import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos | Rich O'Toole",
  description: "Watch Rich O'Toole's latest music videos, live performances, and more.",
};

const videos = [
  {
    title: "Rich O'Toole - Latest Video",
    embedId: "videoseries?list=UU2t6FHAUXxi9eiatP2Mavh0",
  },
];

export default function VideosPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center uppercase tracking-wider mb-4">
          Videos
        </h1>
        <div className="w-16 h-0.5 bg-accent mx-auto mb-12" />

        <div className="space-y-12">
          {videos.map((video, i) => (
            <div key={i} className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-lg font-bold mt-4 text-center">{video.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://www.youtube.com/richotoole"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF0000] hover:bg-[#cc0000] text-white font-bold uppercase tracking-widest px-8 py-3 text-sm transition-colors"
          >
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
