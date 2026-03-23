import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useRegisterExhibitor } from "../hooks/useQueries";

const categories = [
  "Handmade Carpets",
  "Silk Rugs",
  "Woollen Textiles",
  "Home Furnishings",
  "Handicrafts & Decor",
  "Food & Beverages",
  "Cultural Merchandise",
  "Other",
];

export default function RegisterModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { mutate: register, isPending } = useRegisterExhibitor();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    productCategory: categories[0],
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(
      {
        id: 0n,
        name: form.name,
        company: form.company,
        email: form.email,
        productCategory: form.productCategory,
        description: form.description,
      },
      {
        onSuccess: () => {
          toast.success("Registration submitted! We'll be in touch soon.");
          onClose();
          setForm({
            name: "",
            company: "",
            email: "",
            productCategory: categories[0],
            description: "",
          });
        },
        onError: () => toast.error("Registration failed. Please try again."),
      },
    );
  };

  const set =
    (k: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        data-ocid="register.dialog"
        className="max-w-lg bg-festival-cream"
      >
        <DialogHeader>
          <div className="ornamental-divider mb-2">
            <span className="font-cinzel text-xs tracking-[0.3em] text-festival-gold uppercase">
              Exhibitor
            </span>
          </div>
          <DialogTitle className="font-cinzel text-festival-maroon text-xl uppercase tracking-wide text-center">
            Register as Exhibitor
          </DialogTitle>
          <p className="font-lato text-foreground/60 text-xs text-center">
            Join 200+ exhibitors at Bhadohi Mahotsav 2026
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="reg-name"
                className="font-cinzel text-festival-maroon text-xs tracking-wider uppercase block mb-1"
              >
                Name *
              </label>
              <input
                id="reg-name"
                data-ocid="register.name.input"
                required
                value={form.name}
                onChange={set("name")}
                className="w-full px-3 py-2 rounded-lg border border-festival-gold/30 bg-white text-foreground font-lato text-sm focus:outline-none focus:border-festival-gold"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label
                htmlFor="reg-company"
                className="font-cinzel text-festival-maroon text-xs tracking-wider uppercase block mb-1"
              >
                Company *
              </label>
              <input
                id="reg-company"
                data-ocid="register.company.input"
                required
                value={form.company}
                onChange={set("company")}
                className="w-full px-3 py-2 rounded-lg border border-festival-gold/30 bg-white text-foreground font-lato text-sm focus:outline-none focus:border-festival-gold"
                placeholder="Business name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="reg-email"
              className="font-cinzel text-festival-maroon text-xs tracking-wider uppercase block mb-1"
            >
              Email *
            </label>
            <input
              id="reg-email"
              data-ocid="register.email.input"
              required
              type="email"
              value={form.email}
              onChange={set("email")}
              className="w-full px-3 py-2 rounded-lg border border-festival-gold/30 bg-white text-foreground font-lato text-sm focus:outline-none focus:border-festival-gold"
              placeholder="your@business.com"
            />
          </div>
          <div>
            <label
              htmlFor="reg-category"
              className="font-cinzel text-festival-maroon text-xs tracking-wider uppercase block mb-1"
            >
              Product Category
            </label>
            <select
              id="reg-category"
              data-ocid="register.category.select"
              value={form.productCategory}
              onChange={set("productCategory")}
              className="w-full px-3 py-2 rounded-lg border border-festival-gold/30 bg-white text-foreground font-lato text-sm focus:outline-none focus:border-festival-gold"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="reg-desc"
              className="font-cinzel text-festival-maroon text-xs tracking-wider uppercase block mb-1"
            >
              Description
            </label>
            <textarea
              id="reg-desc"
              data-ocid="register.description.textarea"
              value={form.description}
              onChange={set("description")}
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-festival-gold/30 bg-white text-foreground font-lato text-sm focus:outline-none focus:border-festival-gold resize-none"
              placeholder="Tell us about your products or services..."
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              data-ocid="register.cancel.button"
              onClick={onClose}
              className="flex-1 py-2 rounded-lg border border-festival-maroon/30 text-festival-maroon font-cinzel text-xs tracking-widest uppercase hover:bg-festival-maroon hover:text-white transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              data-ocid="register.submit.button"
              disabled={isPending}
              className="flex-1 py-2 rounded-lg bg-festival-gold text-festival-maroon font-cinzel font-bold text-xs tracking-widest uppercase hover:brightness-105 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {isPending && <Loader2 size={14} className="animate-spin" />}
              {isPending ? "Registering..." : "Register Now"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
