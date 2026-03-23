import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function AboutSection({
  onLearnMore,
}: { onLearnMore: () => void }) {
  const ref = useIntersectionObserver();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-reveal bg-festival-cream py-20 px-4"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 50%, oklch(0.93 0.02 80) 0%, oklch(0.97 0.012 85) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-festival">
            <img
              src="/assets/generated/about-carpet-heritage.dim_800x600.jpg"
              alt="Heritage carpet weaving of Bhadohi"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-festival-gold/20 border border-festival-gold/40 -z-10" />
          <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-festival-maroon/10 border border-festival-maroon/20 -z-10" />
        </div>

        {/* Text */}
        <div>
          <div className="ornamental-divider mb-4">
            <span className="font-cinzel text-xs tracking-[0.3em] text-festival-gold uppercase">
              About
            </span>
          </div>
          <h2 className="font-cinzel text-3xl lg:text-4xl font-bold text-festival-maroon uppercase tracking-wide mb-6 leading-tight">
            The Heritage of Bhadohi
          </h2>
          <p className="font-lato text-foreground/80 text-base leading-relaxed mb-4">
            Bhadohi, nestled in the heart of Uttar Pradesh, is celebrated
            globally as the{" "}
            <strong className="text-festival-maroon">
              Carpet Capital of India
            </strong>
            . For over 400 years, master artisans have been crafting exquisite
            hand-knotted carpets that adorn palaces, embassies, and homes across
            the world.
          </p>
          <p className="font-lato text-foreground/70 text-sm leading-relaxed mb-8">
            Bhadohi Mahotsav 2026 brings together this rich weaving heritage
            with a grand celebration of Indian culture — featuring classical
            performances, folk arts, culinary traditions, and the country's
            largest carpet trade exposition.
          </p>
          <button
            type="button"
            data-ocid="about.discover.button"
            onClick={onLearnMore}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-festival-maroon text-white font-cinzel text-sm tracking-widest uppercase hover:brightness-110 transition-all duration-200 shadow-festival"
          >
            Discover More <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
