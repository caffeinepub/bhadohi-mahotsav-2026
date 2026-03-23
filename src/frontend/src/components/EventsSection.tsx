import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useGetEvents } from "../hooks/useQueries";

const fallbackEvents = [
  {
    id: 1n,
    title: "Grand Opening Ceremony",
    date: 1739462400000n,
    description:
      "A spectacular inauguration with traditional processionals, classical dance, and the lighting of the ceremonial lamp.",
    imageUrl: "/assets/generated/event-opening-ceremony.dim_600x400.jpg",
    category: "Ceremony",
  },
  {
    id: 2n,
    title: "International Carpet Trade Expo",
    date: 1739548800000n,
    description:
      "Meet exporters, importers, and master weavers from across the globe in this premier carpet trade symposium.",
    imageUrl: "/assets/generated/event-carpet-trade.dim_600x400.jpg",
    category: "Trade",
  },
  {
    id: 3n,
    title: "Folk Dance & Music Night",
    date: 1739635200000n,
    description:
      "An enchanting evening of folk performances from Uttar Pradesh and neighboring states under the open sky.",
    imageUrl: "/assets/generated/event-folk-dance.dim_600x400.jpg",
    category: "Cultural",
  },
];

function formatDate(ts: bigint) {
  const d = new Date(Number(ts));
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function EventsSection() {
  const { data: backendEvents } = useGetEvents();
  const events =
    backendEvents && backendEvents.length > 0 ? backendEvents : fallbackEvents;
  const [idx, setIdx] = useState(0);
  const ref = useIntersectionObserver();

  const visible = 3;
  const canPrev = idx > 0;
  const canNext = idx + visible < events.length;

  const shownEvents = events.slice(idx, idx + visible);

  return (
    <section
      id="events"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-reveal bg-festival-cream py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="ornamental-divider mb-4">
            <span className="font-cinzel text-xs tracking-[0.3em] text-festival-gold uppercase">
              Programme
            </span>
          </div>
          <h2 className="font-cinzel text-3xl lg:text-4xl font-bold text-festival-maroon uppercase tracking-wide">
            Featured Events
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shownEvents.map((event, i) => (
              <div
                key={String(event.id)}
                data-ocid={`events.item.${idx + i + 1}`}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover-scale group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={
                      event.imageUrl ||
                      "/assets/generated/event-opening-ceremony.dim_600x400.jpg"
                    }
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 right-3 bg-festival-maroon text-festival-gold font-cinzel text-xs px-3 py-1 rounded-full tracking-wider">
                    {event.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-cinzel text-festival-maroon font-bold text-base uppercase tracking-wide mb-2 leading-tight">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={14} className="text-festival-gold" />
                    <span className="font-lato text-xs text-foreground/60">
                      {formatDate(event.date)}
                    </span>
                  </div>
                  <p className="font-lato text-foreground/70 text-xs leading-relaxed line-clamp-2 mb-4">
                    {event.description}
                  </p>
                  <button
                    type="button"
                    data-ocid={`events.view_details.button.${idx + i + 1}`}
                    className="w-full py-2 rounded-lg border border-festival-maroon text-festival-maroon font-cinzel text-xs tracking-widest uppercase hover:bg-festival-maroon hover:text-white transition-all duration-200"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {events.length > visible && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                type="button"
                data-ocid="events.pagination_prev"
                onClick={() => setIdx((v) => Math.max(0, v - 1))}
                disabled={!canPrev}
                className="w-10 h-10 rounded-full border border-festival-maroon flex items-center justify-center text-festival-maroon disabled:opacity-30 hover:bg-festival-maroon hover:text-white transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                data-ocid="events.pagination_next"
                onClick={() =>
                  setIdx((v) => Math.min(events.length - visible, v + 1))
                }
                disabled={!canNext}
                className="w-10 h-10 rounded-full border border-festival-maroon flex items-center justify-center text-festival-maroon disabled:opacity-30 hover:bg-festival-maroon hover:text-white transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
