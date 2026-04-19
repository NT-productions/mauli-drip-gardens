import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ShieldCheck, Check } from "lucide-react";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality Policy — Mauli Drip Irrigation" },
      { name: "description", content: "Our commitment to quality manufacturing, continuous improvement and 100% customer satisfaction." },
      { property: "og:title", content: "Quality Policy & Objectives" },
      { property: "og:description", content: "Mauli Drip's commitment to quality." },
    ],
  }),
  component: QualityPage,
});

function QualityPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <ShieldCheck className="mx-auto h-12 w-12 opacity-90" />
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">Quality is our promise</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base opacity-90">
            Mauli Drip Irrigation & Systems is committed to manufacturing and supplying high-quality
            micro irrigation equipment and water conveying systems as per standards.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <h2 className="font-display text-2xl font-bold">Quality Policy</h2>
            <ul className="mt-5 space-y-3">
              {[
                "Meeting all applicable requirements",
                "Maintaining high quality standards",
                "Continuous improvement in our systems",
                "Use of virgin, non-corrosive materials only",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <h2 className="font-display text-2xl font-bold">Quality Objectives</h2>
            <ul className="mt-5 space-y-3">
              {[
                "Improvement in productivity",
                "Product and process enhancement",
                "Achieving 100% customer satisfaction",
                "Training staff, dealers and end users",
                "Expanding into new markets every year",
                "Supporting sustainable development",
                "Regular review of risks and opportunities",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
