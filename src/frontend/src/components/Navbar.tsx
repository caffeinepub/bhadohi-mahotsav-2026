import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "CULTURAL FEST", href: "#highlights" },
  { label: "CARPET EXPO", href: "#events" },
  { label: "EXHIBITORS", href: "#exhibitors" },
  { label: "EVENTS", href: "#events" },
  { label: "CONTACT", href: "#footer" },
];

export default function Navbar({ onRegister }: { onRegister: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-festival-maroon shadow-festival"
          : "bg-festival-maroon/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-festival-gold flex items-center justify-center">
            <span className="text-festival-maroon font-cinzel font-black text-xs">
              BM
            </span>
          </div>
          <div>
            <span className="font-cinzel text-festival-gold text-sm font-semibold tracking-widest uppercase block leading-tight">
              Bhadohi Mahotsav
            </span>
            <span className="text-white/70 text-xs tracking-widest">2026</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              data-ocid={`nav.${link.label.toLowerCase().replace(/\s+/g, "_")}.link`}
              onClick={() => handleNavClick(link.href)}
              className="text-white/80 hover:text-festival-gold font-lato text-xs tracking-widest uppercase transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Register CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            data-ocid="nav.register.button"
            onClick={onRegister}
            className="px-5 py-2 rounded-full border border-festival-gold text-festival-gold font-cinzel text-xs tracking-widest uppercase hover:bg-festival-gold hover:text-festival-maroon transition-all duration-200 font-semibold"
          >
            Register Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          data-ocid="nav.menu.toggle"
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-festival-maroon-dark border-t border-festival-gold/20 px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left py-3 text-white/80 hover:text-festival-gold font-lato text-xs tracking-widest uppercase border-b border-white/10 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              onRegister();
            }}
            className="mt-3 w-full py-2 rounded-full border border-festival-gold text-festival-gold font-cinzel text-xs tracking-widest uppercase hover:bg-festival-gold hover:text-festival-maroon transition-all"
          >
            Register Now
          </button>
        </div>
      )}
    </nav>
  );
}
