import { Star, Users } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const socialStats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Expected Visitors",
    key: "visitors",
  },
  { icon: Star, value: "400+", label: "Years of Heritage", key: "heritage" },
  { icon: Users, value: "1,000+", label: "Artisan Families", key: "artisans" },
];

export default function SocialProof() {
  const ref = useIntersectionObserver();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-reveal bg-festival-cream py-20 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="ornamental-divider mb-4">
          <span className="font-cinzel text-xs tracking-[0.3em] text-festival-gold uppercase">
            By the Numbers
          </span>
        </div>
        <h2 className="font-cinzel text-3xl lg:text-4xl font-bold text-festival-maroon uppercase tracking-wide mb-12">
          The Scale of Bhadohi Mahotsav
        </h2>

        <div className="mb-12">
          <p
            className="font-cinzel text-festival-gold font-black leading-none mb-2"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            50,000+
          </p>
          <p className="font-cinzel text-festival-maroon text-lg uppercase tracking-widest">
            Expected Visitors in 2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {socialStats.map((s) => (
            <div key={s.key} className="flex flex-col items-center gap-2">
              <s.icon
                size={28}
                className="text-festival-gold"
                strokeWidth={1.5}
              />
              <span className="font-cinzel text-festival-maroon text-3xl font-black">
                {s.value}
              </span>
              <span className="font-lato text-foreground/60 text-sm uppercase tracking-wider">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-festival-gold/20 pt-10">
          <p className="font-lato text-foreground/40 text-xs uppercase tracking-widest mb-6">
            Featured in
          </p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {[
              "Times of India",
              "The Hindu",
              "Dainik Jagran",
              "NDTV",
              "DD National",
            ].map((m) => (
              <span
                key={m}
                className="font-cinzel text-festival-maroon/40 text-sm tracking-wider uppercase"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
