import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useNewsletterSignup } from "../hooks/useQueries";

export default function FinalCTA({
  onRegister,
  onBookStall,
}: {
  onRegister: () => void;
  onBookStall: () => void;
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { mutate: signup, isPending } = useNewsletterSignup();
  const ref = useIntersectionObserver();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    signup(email, {
      onSuccess: () => {
        toast.success("You're subscribed! We'll keep you updated.");
        setEmail("");
        setName("");
      },
      onError: () => toast.error("Something went wrong. Please try again."),
    });
  };

  return (
    <section
      id="cta"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-reveal py-0"
    >
      <div className="grid md:grid-cols-2">
        {/* Image half */}
        <div className="relative min-h-96">
          <img
            src="/assets/generated/cta-festival-panorama.dim_800x600.jpg"
            alt="Festival panorama"
            className="w-full h-full object-cover"
            style={{ minHeight: 400 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-festival-maroon/40" />
        </div>

        {/* Maroon panel */}
        <div className="bg-festival-maroon px-10 py-16 flex flex-col justify-center">
          <div
            className="ornamental-divider mb-6"
            style={{ justifyContent: "flex-start" }}
          >
            <span className="font-cinzel text-xs tracking-[0.3em] text-festival-gold/70 uppercase">
              Join Us
            </span>
          </div>
          <h2
            className="font-cinzel text-white font-bold uppercase tracking-wide leading-tight mb-8"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
          >
            Be Part of India's Fastest Growing Cultural & Trade Festival
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              type="button"
              data-ocid="cta.register.button"
              onClick={onRegister}
              className="flex-1 py-3 rounded-lg bg-festival-gold text-festival-maroon font-cinzel font-bold text-xs tracking-widest uppercase hover:brightness-105 transition-all shadow-gold"
            >
              Register Now
            </button>
            <button
              type="button"
              data-ocid="cta.book_stall.button"
              onClick={onBookStall}
              className="flex-1 py-3 rounded-lg border-2 border-white/60 text-white font-cinzel font-bold text-xs tracking-widest uppercase hover:border-festival-gold hover:text-festival-gold transition-all"
            >
              Book Stall
            </button>
          </div>

          {/* Newsletter */}
          <div className="border-t border-white/20 pt-8">
            <p className="font-cinzel text-festival-gold text-xs tracking-widest uppercase mb-4">
              Stay Updated — Subscribe to Our Newsletter
            </p>
            <form onSubmit={handleNewsletter} className="flex flex-col gap-3">
              <input
                id="newsletter-name"
                data-ocid="newsletter.name.input"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 font-lato text-sm focus:outline-none focus:border-festival-gold transition-colors"
              />
              <input
                id="newsletter-email"
                data-ocid="newsletter.email.input"
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 font-lato text-sm focus:outline-none focus:border-festival-gold transition-colors"
              />
              <button
                data-ocid="newsletter.submit.button"
                type="submit"
                disabled={isPending}
                className="w-full py-2 rounded-lg bg-festival-gold/90 text-festival-maroon font-cinzel font-bold text-xs tracking-widest uppercase hover:brightness-105 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isPending && <Loader2 size={14} className="animate-spin" />}
                {isPending ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
