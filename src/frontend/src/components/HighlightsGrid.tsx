import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const highlights = [
  {
    num: "01",
    title: "Cultural Nights",
    subtitle: "Dance & Performance",
    image: "/assets/generated/highlight-cultural-nights.dim_600x400.jpg",
  },
  {
    num: "02",
    title: "Carpet Expo",
    subtitle: "Handcrafted Masterpieces",
    image: "/assets/generated/highlight-carpet-expo.dim_600x400.jpg",
  },
  {
    num: "03",
    title: "Food Festival",
    subtitle: "Culinary Traditions",
    image: "/assets/generated/highlight-food-festival.dim_600x400.jpg",
  },
  {
    num: "04",
    title: "Live Concerts",
    subtitle: "Music Extravaganza",
    image: "/assets/generated/highlight-live-concerts.dim_600x400.jpg",
  },
];

export default function HighlightsGrid() {
  const ref = useIntersectionObserver();

  return (
    <section
      id="highlights"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-reveal py-20 px-4"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.93 0.03 75) 0%, oklch(0.88 0.04 78) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="ornamental-divider mb-4">
            <span className="font-cinzel text-xs tracking-[0.3em] text-festival-maroon uppercase">
              Festival Programme
            </span>
          </div>
          <h2 className="font-cinzel text-3xl lg:text-4xl font-bold text-festival-maroon uppercase tracking-wide">
            Festival Highlights
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.num}
              data-ocid={`highlights.item.${item.num}`}
              className="hover-scale rounded-xl overflow-hidden shadow-md cursor-pointer group relative"
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <span className="absolute top-3 left-4 font-cinzel text-festival-gold/70 text-xs tracking-wider">
                  {item.num}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-cinzel text-white font-bold text-lg uppercase tracking-wide leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-lato text-festival-gold text-xs tracking-wider mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
