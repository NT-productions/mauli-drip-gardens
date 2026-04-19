import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Sprout, Building2, Trees, Flag } from "lucide-react";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Applications — Mauli Drip Irrigation Systems" },
      { name: "description", content: "Mauli Drip systems serve a wide variety of crops, gardens, resorts, golf courses and government projects." },
      { property: "og:title", content: "Where Mauli Drip is used" },
      { property: "og:description", content: "Crops, landscapes, resorts, public projects." },
    ],
  }),
  component: ApplicationsPage,
});

const crops = [
  "Coconut", "Arecanut", "Grapes", "Mango", "Sapota", "Guava", "Orange",
  "Banana", "Lime", "Ber", "Pomegranate", "Betel vine", "Roses",
  "Floriculture", "Sugarcane", "Cotton", "Mulberry", "Vegetables",
];

function ApplicationsPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Applications</span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">From farms to fairways</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our irrigation systems are trusted across orchards, plantations, gardens, resorts and
            public landscape projects.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="font-display text-2xl font-bold">Suitable for a wide variety of crops</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {crops.map((c) => (
            <span key={c} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-card transition-smooth hover:border-primary hover:text-primary">
              🌱 {c}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sprout, t: "Residential Gardens", d: "Beautiful, healthy gardens with minimal water use." },
            { icon: Building2, t: "Industrial Landscapes", d: "Reliable irrigation for corporate campuses." },
            { icon: Trees, t: "Hotels & Resorts", d: "Lush green resorts, year round." },
            { icon: Flag, t: "Public & Govt Projects", d: "Golf courses, racecourses, civic spaces." },
          ].map((a) => (
            <div key={a.t} className="rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-glow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-water text-water-foreground">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{a.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
