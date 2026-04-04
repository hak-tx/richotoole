import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Dates | Rich O'Toole",
  description: "Upcoming tour dates and shows for Rich O'Toole.",
};

const tourDates: { date: string; venue: string; city: string; ticketUrl: string }[] = [
  // Add upcoming tour dates here as they're announced
  // { date: "Apr 12, 2025", venue: "Billy Bob's Texas", city: "Fort Worth, TX", ticketUrl: "#" },
];

export default function TourPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center uppercase tracking-wider mb-4">
          Tour Dates
        </h1>
        <div className="w-16 h-0.5 bg-accent mx-auto mb-12" />

        {tourDates.length > 0 ? (
          <div className="space-y-4">
            {tourDates.map((show, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-card-bg border border-card-border hover:border-accent/30 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                  <span className="text-accent font-bold text-lg min-w-[140px]">
                    {show.date}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg">{show.venue}</h3>
                    <p className="text-muted text-sm">{show.city}</p>
                  </div>
                </div>
                <a
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent hover:bg-accent-dark text-black font-bold uppercase tracking-widest px-6 py-2 text-sm transition-colors text-center"
                >
                  Tickets
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg mb-6">
              No upcoming shows currently announced. Check back soon!
            </p>
            <p className="text-gray-500">
              For booking inquiries, contact{" "}
              <a
                href="mailto:jimmy@countdowntalent.com"
                className="text-accent hover:text-accent-dark transition-colors"
              >
                jimmy@countdowntalent.com
              </a>
            </p>
          </div>
        )}

        {/* Bandsintown Widget */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Tour dates powered by Bandsintown
          </p>
          <a
            href="https://www.bandsintown.com/a/1609-rich-o-toole"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/30 hover:border-accent text-white hover:text-accent font-bold uppercase tracking-widest px-8 py-3 text-sm transition-colors"
          >
            View on Bandsintown
          </a>
        </div>
      </div>
    </div>
  );
}
