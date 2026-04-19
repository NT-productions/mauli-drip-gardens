import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Target, Eye, Award, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mauli Drip Irrigation & Systems" },
      { name: "description", content: "Learn about Mauli Drip Irrigation — manufacturer of micro irrigation equipment built from virgin materials & rigorously quality tested." },
      { property: "og:title", content: "About Mauli Drip Irrigation" },
      { property: "og:description", content: "Manufacturer of drip & sprinkler irrigation systems." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">About Us</span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">Creating a Better World, one drop at a time</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Mauli Drip Irrigation & Systems is a manufacturer of drip & sprinkler irrigation
            equipment, including pipes, fittings, and engineering plastic injection-moulded
            components.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <Eye className="h-9 w-9 text-primary" />
            <h2 className="mt-4 font-display text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 text-muted-foreground">
              To empower every farmer with smart, efficient irrigation that conserves water,
              improves yields and supports sustainable agriculture.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <Target className="h-9 w-9 text-primary" />
            <h2 className="mt-4 font-display text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 text-muted-foreground">
              Manufacture and deliver quality micro irrigation systems — custom-engineered to crop,
              soil, water and climate — with uncompromising quality control.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-8 md:p-10">
          <h3 className="font-display text-2xl font-bold">Why our systems work year after year</h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            All components are made from <strong className="text-foreground">non-corrosive virgin materials</strong>.
            Every component undergoes extensive quality control testing before supply, ensuring
            trouble-free operation. Each system is specially designed based on:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Crop type & geometry", "Soil type", "Water quality & availability", "Climatic conditions"].map((c) => (
              <li key={c} className="rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium">
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, t: "Quality First", d: "ISO-grade processes & rigorous QC at every stage." },
            { icon: Users, t: "Customer Focus", d: "100% satisfaction is the goal we measure." },
            { icon: Target, t: "Innovation", d: "Continuous product & process improvement." },
            { icon: Eye, t: "Sustainability", d: "Save water, save soil, support life." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <v.icon className="h-7 w-7 text-primary" />
              <div className="mt-3 font-display font-semibold">{v.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
