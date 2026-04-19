import { Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

const PHONE = "9850840703";
const EMAIL = "Maulidripirrigationandsystems@gmail.com";
const WA_MSG = encodeURIComponent("Hello Mauli Drip Irrigation, I'd like to know more about your products.");

export function FloatingContact() {
  const [open, setOpen] = useState(true);

  const items = [
    {
      label: "WhatsApp",
      href: `https://wa.me/91${PHONE}?text=${WA_MSG}`,
      icon: MessageCircle,
      bg: "bg-[oklch(0.7_0.18_145)]",
    },
    {
      label: "Call",
      href: `tel:+91${PHONE}`,
      icon: Phone,
      bg: "bg-gradient-leaf",
    },
    {
      label: "Email",
      href: `mailto:${EMAIL}`,
      icon: Mail,
      bg: "bg-gradient-water",
    },
  ];

  return (
    <div className="fixed right-4 top-1/2 z-50 -translate-y-1/2 flex flex-col items-end gap-3">
      {open &&
        items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target={it.label === "WhatsApp" ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={it.label}
            className={`group relative flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground shadow-glow transition-smooth hover:scale-110 ${it.bg}`}
          >
            <it.icon className="h-5 w-5" />
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-xs font-medium text-background opacity-0 transition-smooth group-hover:opacity-100">
              {it.label}
            </span>
          </a>
        ))}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle contact"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background shadow-soft transition-smooth hover:scale-110"
      >
        <span className="text-xs font-bold">{open ? "×" : "☎"}</span>
      </button>
    </div>
  );
}
