import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";

const quickLinks = ["Home", "About", "Events", "Cultural Fest"];
const exploreLinks = ["Carpet Expo", "Exhibitors", "Food Festival", "Concerts"];
const helpLinks = ["Contact Us", "FAQs", "Media Gallery", "Press Kit"];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer id="footer" className="bg-festival-maroon-dark pt-16 pb-6 px-4">
      <div className="border-t-2 border-festival-gold/30 mb-12" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-festival-gold flex items-center justify-center">
                <span className="text-festival-maroon font-cinzel font-black text-sm">
                  BM
                </span>
              </div>
              <div>
                <span className="font-cinzel text-festival-gold text-sm font-semibold tracking-wider block">
                  Bhadohi Mahotsav
                </span>
                <span className="text-white/50 text-xs tracking-wider">
                  2026
                </span>
              </div>
            </div>
            <p className="font-lato text-white/60 text-xs leading-relaxed mb-4">
              India's premier carpet & cultural festival, celebrating the
              artisan heritage of Bhadohi, Uttar Pradesh.
            </p>
            <p className="font-lato text-white/50 text-xs">
              📍 Bhadohi, Uttar Pradesh, India
            </p>
            <p className="font-lato text-white/50 text-xs mt-1">
              📅 February 14–23, 2026
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-festival-gold text-xs tracking-widest uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l}>
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .querySelector("#home")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="font-lato text-white/60 text-xs hover:text-festival-gold transition-colors"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-cinzel text-festival-gold text-xs tracking-widest uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {exploreLinks.map((l) => (
                <li key={l}>
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .querySelector("#highlights")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="font-lato text-white/60 text-xs hover:text-festival-gold transition-colors"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Help + Social */}
          <div>
            <h4 className="font-cinzel text-festival-gold text-xs tracking-widest uppercase mb-4">
              Help
            </h4>
            <ul className="space-y-2 mb-6">
              {helpLinks.map((l) => (
                <li key={l}>
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .querySelector("#footer")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="font-lato text-white/60 text-xs hover:text-festival-gold transition-colors"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
            <h4 className="font-cinzel text-festival-gold text-xs tracking-widest uppercase mb-3">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[
                { Icon: SiInstagram, label: "Instagram" },
                { Icon: SiFacebook, label: "Facebook" },
                { Icon: SiX, label: "Twitter/X" },
                { Icon: SiYoutube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-festival-gold hover:text-festival-gold transition-all"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-lato text-white/40 text-xs">
            © {year} Bhadohi Mahotsav. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-lato text-white/30 text-xs hover:text-white/50 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
