import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import AboutSection from "./components/AboutSection";
import BookStallModal from "./components/BookStallModal";
import EventsSection from "./components/EventsSection";
import ExhibitorShowcase from "./components/ExhibitorShowcase";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HighlightsGrid from "./components/HighlightsGrid";
import ImmersiveSection from "./components/ImmersiveSection";
import Navbar from "./components/Navbar";
import RegisterModal from "./components/RegisterModal";
import SocialProof from "./components/SocialProof";
import TrustStrip from "./components/TrustStrip";

export default function App() {
  const [bookStallOpen, setBookStallOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-festival-cream">
      <Navbar onRegister={() => setRegisterOpen(true)} />

      <main>
        <HeroSection
          onExplore={() => scrollToSection("#events")}
          onBookStall={() => setBookStallOpen(true)}
        />
        <TrustStrip />
        <AboutSection onLearnMore={() => scrollToSection("#highlights")} />
        <HighlightsGrid />
        <EventsSection />
        <ExhibitorShowcase onBecomeExhibitor={() => setRegisterOpen(true)} />
        <ImmersiveSection />
        <SocialProof />
        <FinalCTA
          onRegister={() => setRegisterOpen(true)}
          onBookStall={() => setBookStallOpen(true)}
        />
      </main>

      <Footer />

      <BookStallModal
        open={bookStallOpen}
        onClose={() => setBookStallOpen(false)}
      />
      <RegisterModal
        open={registerOpen}
        onClose={() => setRegisterOpen(false)}
      />

      <Toaster />
    </div>
  );
}
