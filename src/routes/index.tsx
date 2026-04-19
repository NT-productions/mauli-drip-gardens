import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Sprout, ShieldCheck, Factory, Leaf, TrendingUp } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero-irrigation.jpg";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mauli Drip Irrigation & Systems — Creating a Better World" },
      {
        name: "description",
        content:
          "Manufacturer of premium drip & sprinkler irrigation systems, HDPE pipes, emitters, valves and fittings. Engineered in India for healthier crops & higher yields.",
      },
      { property: "og:title", content: "Mauli Drip Irrigation & Systems" },
      { property: "og:description", content: "Premium drip & sprinkler irrigation manufacturer." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Drip irrigation across green crop field" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        </div>
        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-4 py-20 md:px-6">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Droplets className="h-3.5 w-3.5" /> Drip · Sprinkler · HDPE
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Every drop counts. <br />
              <span className="bg-gradient-leaf bg-clip-text text-transparent">We make every drop work.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Mauli Drip Irrigation & Systems manufactures world-class micro irrigation equipment —
              built from virgin, non-corrosive materials and quality-tested for years of trouble-free
              service in your fields.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-leaf px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-[1.02]"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-smooth hover:bg-muted"
              >
                Talk to an Expert
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 sm:max-w-lg">
              {[
                { v: "20+", l: "Years Experience" },
                { v: "100%", l: "Virgin Material" },
                { v: "1000+", l: "Happy Farmers" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-background/80 p-4 text-center backdrop-blur shadow-card">
                  <div className="font-display text-2xl font-bold text-primary md:text-3xl">{s.v}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Why Mauli Drip</span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Engineered for healthier crops & higher yields</h2>
          <p className="mt-4 text-muted-foreground">
            Each system is custom-designed for your crop, soil, climate and water source.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sprout, t: "Healthy Plant Growth", d: "Roots receive water & nutrients exactly where needed." },
            { icon: TrendingUp, t: "Increased Yields", d: "Optimised irrigation = early maturity & higher harvests." },
            { icon: ShieldCheck, t: "Quality Tested", d: "Every component QC tested before dispatch." },
            { icon: Leaf, t: "Save Water & Cost", d: "Reduce input cost while protecting precious water." },
          ].map((f) => (
            <div key={f.t} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-glow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-leaf text-primary-foreground transition-smooth group-hover:scale-110">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our Production</span>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Featured Products</h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                A glimpse of the precision-engineered components manufactured at our facility.
              </p>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-smooth">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((p) => (
              <Link
                key={p.id}
                to="/products"
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-primary">{p.category}</div>
                  <div className="mt-1 font-display text-sm font-semibold leading-snug">{p.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CAPACITY STRIP */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-hero py-20 text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6">
            <div>
              <Factory className="h-10 w-10 opacity-80" />
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Modern manufacturing capacity</h2>
              <p className="mt-4 max-w-xl opacity-90">
                Our facility produces a complete range of micro-irrigation equipment and water
                conveying systems — from 12 mm laterals to 200 mm HDPE pipes.
              </p>
              <Link to="/products" className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-primary transition-smooth hover:scale-105">
                See full range <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Irrigation laterals 12–32 mm",
                "NPC & PC Emitters",
                "Drip pipes — flat & cylindrical",
                "Micro sprinklers & misters",
                "Sprinkler systems 63/75/90 mm",
                "HDPE pipes 20–200 mm",
                "V-Rain & Lay Flat pipes",
                "All system accessories",
              ].map((c) => (
                <li key={c} className="flex items-start gap-2 rounded-xl bg-primary-foreground/10 px-4 py-3 text-sm backdrop-blur">
                  <Droplets className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-card md:p-14">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold md:text-4xl">
            Let's design your custom irrigation system
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Share your crop, soil and water details. Our engineers will design the perfect system for you.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-leaf px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105">
            Request a Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
