import { useEffect, useRef } from "react";

export default function HeroSection({
  onExplore,
  onBookStall,
}: {
  onExplore: () => void;
  onBookStall: () => void;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      headingRef.current?.classList.add("visible");
      setTimeout(() => subRef.current?.classList.add("visible"), 300);
      setTimeout(() => btnRef.current?.classList.add("visible"), 600);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/generated/hero-bhadohi-festival.dim_1920x1080.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-festival-maroon/60 via-transparent to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-festival-gold font-cinzel text-xs tracking-[0.3em] uppercase mb-4 opacity-90">
          ✦ Uttar Pradesh, India — February 2026 ✦
        </p>

        <h1
          ref={headingRef}
          className="section-reveal font-cinzel text-white font-black uppercase tracking-wider leading-none mb-4"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
        >
          Bhadohi
          <span className="block text-festival-gold">Mahotsav 2026</span>
        </h1>

        <p
          ref={subRef}
          className="section-reveal font-cinzel text-festival-gold font-semibold mb-4"
          style={{ fontSize: "clamp(1.1rem, 3vw, 1.75rem)" }}
        >
          Where Culture Meets Commerce
        </p>

        <p className="text-white/80 font-lato text-sm tracking-widest mb-2">
          India's Premier Carpet & Cultural Festival
        </p>
        <p className="text-white/60 font-lato text-xs tracking-wider mb-10">
          📅 February 14–23, 2026 &nbsp;|&nbsp; 📍 Bhadohi, Uttar Pradesh
        </p>

        <div
          ref={btnRef}
          className="section-reveal flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            type="button"
            data-ocid="hero.explore.button"
            onClick={onExplore}
            className="px-8 py-3 rounded-lg bg-festival-gold text-festival-maroon font-cinzel font-bold text-sm tracking-widest uppercase shadow-gold hover:brightness-105 hover:shadow-xl transition-all duration-200"
            style={{ minWidth: 200 }}
          >
            Explore Events
          </button>
          <button
            type="button"
            data-ocid="hero.book_stall.button"
            onClick={onBookStall}
            className="px-8 py-3 rounded-lg border-2 border-festival-gold text-festival-gold font-cinzel font-bold text-sm tracking-widest uppercase hover:bg-festival-gold hover:text-festival-maroon transition-all duration-200"
            style={{ minWidth: 200 }}
          >
            Book a Stall
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="font-lato text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
