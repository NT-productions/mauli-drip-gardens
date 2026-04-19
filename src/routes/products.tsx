import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { products } from "@/data/products";
import { Check } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Mauli Drip Irrigation Equipment" },
      { name: "description", content: "Explore our range of drippers, emitters, valves, fittings and HDPE pipes — manufactured at Mauli Drip Irrigation & Systems." },
      { property: "og:title", content: "Mauli Drip Irrigation — Products" },
      { property: "og:description", content: "Drippers, emitters, valves, fittings, HDPE pipes." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map((p) => p.category)))], []);
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <SiteLayout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Production Range</span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">Our Products</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Precision-engineered components manufactured in-house from virgin polymers — designed
            for years of trouble-free service in real field conditions.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-smooth ${
                  active === c
                    ? "border-primary bg-primary text-primary-foreground shadow-soft"
                    : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-primary">{p.category}</div>
                <h3 className="mt-1 font-display text-lg font-bold leading-snug">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-xs text-foreground/80">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
