import { Play } from "lucide-react";
import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function ImmersiveSection() {
  const [playing, setPlaying] = useState(false);
  const ref = useIntersectionObserver();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-reveal bg-festival-maroon py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="ornamental-divider mb-4">
            <span className="font-cinzel text-xs tracking-[0.3em] text-festival-gold/70 uppercase">
              Experience
            </span>
          </div>
          <h2 className="font-cinzel text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide mb-3">
            Feel the Energy of Bhadohi
          </h2>
          <p className="font-lato text-white/60 text-sm">
            An immersive journey through India's most celebrated craft & culture
            festival
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black">
          {playing ? (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/BFiJNe-HqrI?autoplay=1&rel=0"
              title="Bhadohi Mahotsav Festival Experience"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full">
              <img
                src="/assets/generated/hero-bhadohi-festival.dim_1920x1080.jpg"
                alt="Festival video thumbnail"
                className="w-full h-full object-cover brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  data-ocid="immersive.play.button"
                  onClick={() => setPlaying(true)}
                  className="w-20 h-20 rounded-full bg-festival-gold/90 flex items-center justify-center shadow-gold hover:scale-110 transition-transform duration-200"
                  aria-label="Play video"
                >
                  <Play
                    size={32}
                    fill="oklch(0.23 0.10 15)"
                    className="text-festival-maroon ml-1"
                  />
                </button>
              </div>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="font-cinzel text-white/70 text-sm tracking-widest uppercase">
                  Click to Watch the Festival Experience
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
