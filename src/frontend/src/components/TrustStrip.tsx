import { Calendar, Gem, Globe, Store } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const stats = [
  {
    icon: Gem,
    stat: "Carpet Capital",
    label: "Of India",
    desc: "World-renowned handmade rugs",
    key: "carpet",
  },
  {
    icon: Calendar,
    stat: "100+",
    label: "Cultural Events",
    desc: "Dance, music, craft & more",
    key: "events",
  },
  {
    icon: Globe,
    stat: "Global",
    label: "Visitors",
    desc: "From 40+ countries worldwide",
    key: "visitors",
  },
  {
    icon: Store,
    stat: "200+",
    label: "Exhibitors",
    desc: "Artisans & businesses",
    key: "exhibitors",
  },
];

export default function TrustStrip() {
  const ref = useIntersectionObserver();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-reveal bg-festival-maroon py-10 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.key}
              className="flex flex-col items-center text-center gap-2 p-4"
            >
              <item.icon
                size={32}
                className="text-festival-gold mb-1"
                strokeWidth={1.5}
              />
              <span className="font-cinzel text-festival-gold text-2xl font-bold">
                {item.stat}
              </span>
              <span className="font-cinzel text-white text-xs tracking-widest uppercase">
                {item.label}
              </span>
              <span className="font-lato text-white/60 text-xs">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
