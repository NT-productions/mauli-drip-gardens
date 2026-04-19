import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const PHONE = "9850840703";
const EMAIL = "Maulidripirrigationandsystems@gmail.com";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mauli Drip Irrigation & Systems" },
      { name: "description", content: "Reach Mauli Drip Irrigation: phone, WhatsApp, email and our offices in Lasalgaon and Nashik." },
      { property: "og:title", content: "Contact Mauli Drip Irrigation" },
      { property: "og:description", content: "Phone, WhatsApp, email and office addresses." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Get in touch</span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">Let's grow together</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Reach out for product enquiries, custom irrigation system design, or dealer opportunities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-4 md:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          <a href={`tel:+91${PHONE}`} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-glow">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-leaf text-primary-foreground">
              <Phone className="h-5 w-5" />
            </div>
            <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Call</div>
            <div className="mt-1 font-display text-lg font-bold text-foreground">+91 98508 40703</div>
          </a>

          <a href={`https://wa.me/91${PHONE}`} target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-glow">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(0.7_0.18_145)] text-primary-foreground">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">WhatsApp</div>
            <div className="mt-1 font-display text-lg font-bold text-foreground">Chat with us</div>
          </a>

          <a href={`mailto:${EMAIL}`} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-glow">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-water text-water-foreground">
              <Mail className="h-5 w-5" />
            </div>
            <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</div>
            <div className="mt-1 break-all font-display text-sm font-bold text-foreground">{EMAIL}</div>
          </a>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-widest">Main Office</span>
            </div>
            <h3 className="mt-3 font-display text-lg font-bold">Lasalgaon</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Station Road, Radhanagar,<br /> Narayani House, Lasalgaon
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-widest">Branch Office</span>
            </div>
            <h3 className="mt-3 font-display text-lg font-bold">Nashik</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Dwarka, Nashik — Service Road,<br /> Near Godavari Hotel
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const body = encodeURIComponent(`Name: ${f.get("name")}\nPhone: ${f.get("phone")}\n\n${f.get("message")}`);
            window.location.href = `mailto:${EMAIL}?subject=Enquiry from website&body=${body}`;
          }}
          className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-card md:p-10"
        >
          <h3 className="font-display text-2xl font-bold">Send us an enquiry</h3>
          <p className="mt-1 text-sm text-muted-foreground">We typically reply within one business day.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input name="name" required placeholder="Your name" className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20" />
            <input name="phone" required placeholder="Phone / WhatsApp" className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </div>
          <textarea name="message" required rows={5} placeholder="Tell us about your crop, area & water source…" className="mt-4 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20" />
          <button type="submit" className="mt-5 rounded-full bg-gradient-leaf px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-glow">
            Send Enquiry
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}
