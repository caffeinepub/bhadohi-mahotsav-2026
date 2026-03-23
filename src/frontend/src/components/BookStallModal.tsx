import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitStallBooking } from "../hooks/useQueries";

const stallTypes = [
  "Small Stall (3×3m)",
  "Standard Stall (4×4m)",
  "Large Stall (6×4m)",
  "Premium Corner Stall",
  "Food Court Stall",
];

export default function BookStallModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { mutate: submit, isPending } = useSubmitStallBooking();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    stallType: stallTypes[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(
      {
        id: 0n,
        name: form.name,
        company: form.company,
        email: form.email,
        stallType: form.stallType,
        message: form.message,
      },
      {
        onSuccess: () => {
          toast.success("Stall booking submitted! We'll contact you shortly.");
          onClose();
          setForm({
            name: "",
            company: "",
            email: "",
            stallType: stallTypes[0],
            message: "",
          });
        },
        onError: () => toast.error("Submission failed. Please try again."),
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
        data-ocid="book_stall.dialog"
        className="max-w-lg bg-festival-cream"
      >
        <DialogHeader>
          <div className="ornamental-divider mb-2">
            <span className="font-cinzel text-xs tracking-[0.3em] text-festival-gold uppercase">
              Register
            </span>
          </div>
          <DialogTitle className="font-cinzel text-festival-maroon text-xl uppercase tracking-wide text-center">
            Book a Stall
          </DialogTitle>
          <p className="font-lato text-foreground/60 text-xs text-center">
            Reserve your space at Bhadohi Mahotsav 2026
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="stall-name"
                className="font-cinzel text-festival-maroon text-xs tracking-wider uppercase block mb-1"
              >
                Name *
              </label>
              <input
                id="stall-name"
                data-ocid="book_stall.name.input"
                required
                value={form.name}
                onChange={set("name")}
                className="w-full px-3 py-2 rounded-lg border border-festival-gold/30 bg-white text-foreground font-lato text-sm focus:outline-none focus:border-festival-gold"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label
                htmlFor="stall-company"
                className="font-cinzel text-festival-maroon text-xs tracking-wider uppercase block mb-1"
              >
                Company
              </label>
              <input
                id="stall-company"
                data-ocid="book_stall.company.input"
                value={form.company}
                onChange={set("company")}
                className="w-full px-3 py-2 rounded-lg border border-festival-gold/30 bg-white text-foreground font-lato text-sm focus:outline-none focus:border-festival-gold"
                placeholder="Company name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="stall-email"
              className="font-cinzel text-festival-maroon text-xs tracking-wider uppercase block mb-1"
            >
              Email *
            </label>
            <input
              id="stall-email"
              data-ocid="book_stall.email.input"
              required
              type="email"
              value={form.email}
              onChange={set("email")}
              className="w-full px-3 py-2 rounded-lg border border-festival-gold/30 bg-white text-foreground font-lato text-sm focus:outline-none focus:border-festival-gold"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="stall-type"
              className="font-cinzel text-festival-maroon text-xs tracking-wider uppercase block mb-1"
            >
              Stall Type
            </label>
            <select
              id="stall-type"
              data-ocid="book_stall.stall_type.select"
              value={form.stallType}
              onChange={set("stallType")}
              className="w-full px-3 py-2 rounded-lg border border-festival-gold/30 bg-white text-foreground font-lato text-sm focus:outline-none focus:border-festival-gold"
            >
              {stallTypes.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="stall-message"
              className="font-cinzel text-festival-maroon text-xs tracking-wider uppercase block mb-1"
            >
              Message
            </label>
            <textarea
              id="stall-message"
              data-ocid="book_stall.message.textarea"
              value={form.message}
              onChange={set("message")}
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-festival-gold/30 bg-white text-foreground font-lato text-sm focus:outline-none focus:border-festival-gold resize-none"
              placeholder="Any special requirements or queries..."
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              data-ocid="book_stall.cancel.button"
              onClick={onClose}
              className="flex-1 py-2 rounded-lg border border-festival-maroon/30 text-festival-maroon font-cinzel text-xs tracking-widest uppercase hover:bg-festival-maroon hover:text-white transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              data-ocid="book_stall.submit.button"
              disabled={isPending}
              className="flex-1 py-2 rounded-lg bg-festival-gold text-festival-maroon font-cinzel font-bold text-xs tracking-widest uppercase hover:brightness-105 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {isPending && <Loader2 size={14} className="animate-spin" />}
              {isPending ? "Submitting..." : "Submit Booking"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
