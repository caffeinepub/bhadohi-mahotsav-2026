import { Quote } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const exhibitorLogos = [
  "Kashi Carpets",
  "Mirzapur Looms",
  "Royal Weaves",
  "Heritage Rugs",
  "Silk Route Co.",
  "Bhadohi Exports",
  "Craftsmen Guild",
  "Artisan House",
  "Persian Touch",
  "Golden Thread",
  "Weavers' Den",
  "Carpet Kingdom",
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Carpet Exporter, Varanasi",
    quote:
      "Bhadohi Mahotsav gave our business unprecedented global exposure. We signed contracts with buyers from 8 countries at a single event.",
  },
  {
    name: "Priya Sharma",
    role: "Artisan & Folk Performer",
    quote:
      "This festival is the soul of our region. It celebrates our heritage and gives local artists a platform they truly deserve.",
  },
  {
    name: "Ahmed Al-Rashid",
    role: "International Carpet Buyer, Dubai",
    quote:
      "I travel from Dubai every year for this expo. The quality, variety, and authenticity of Bhadohi carpets is unmatched anywhere in the world.",
  },
];

export default function ExhibitorShowcase({
  onBecomeExhibitor,
}: {
  onBecomeExhibitor: () => void;
}) {
  const ref = useIntersectionObserver();

  return (
    <section
      id="exhibitors"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-reveal bg-festival-cream-dark py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="ornamental-divider mb-4">
            <span className="font-cinzel text-xs tracking-[0.3em] text-festival-gold uppercase">
              Partners & Voices
            </span>
          </div>
          <h2 className="font-cinzel text-3xl lg:text-4xl font-bold text-festival-maroon uppercase tracking-wide">
            Exhibitor Showcase
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Exhibitor logos */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="font-cinzel text-festival-maroon font-bold text-sm uppercase tracking-widest mb-6 text-center">
              Our Exhibitors
            </h3>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {exhibitorLogos.map((name) => (
                <div
                  key={name}
                  className="bg-festival-cream rounded-lg p-3 flex items-center justify-center text-center border border-festival-gold/20 hover:border-festival-gold/60 hover:bg-festival-gold/5 transition-colors"
                >
                  <span className="font-lato text-festival-maroon text-xs font-medium leading-tight">
                    {name}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                type="button"
                data-ocid="exhibitors.become_exhibitor.button"
                onClick={onBecomeExhibitor}
                className="px-8 py-3 rounded-lg bg-festival-gold text-festival-maroon font-cinzel font-bold text-xs tracking-widest uppercase hover:brightness-105 transition-all shadow-gold"
              >
                Become an Exhibitor
              </button>
            </div>
          </div>

          {/* Testimonials */}
          <div className="flex flex-col gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-festival-gold/20"
              >
                <Quote size={20} className="text-festival-gold mb-3" />
                <p className="font-lato text-foreground/80 text-sm leading-relaxed italic mb-4">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-cinzel text-festival-maroon text-xs font-bold uppercase tracking-wide">
                    {t.name}
                  </p>
                  <p className="font-lato text-foreground/50 text-xs">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
