import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TopicCard } from "@/components/TopicCard";
import { categories, getTopicsForCategory } from "@/data/content";

export const Route = createFileRoute("/teemad/")({
  component: TeemadIndex,
  head: () => ({
    meta: [
      { title: "Kõik teemad — VeebSecurity" },
      {
        name: "description",
        content:
          "Sirvi kõiki küberturvalisuse teemasid kategooriate kaupa: paroolid, phishing, VPN, pahavara ja palju muud.",
      },
    ],
  }),
});

function TeemadIndex() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="mono text-[11px] uppercase tracking-[0.22em] text-primary">
            Indeks
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Kõik teemad
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Sirvi kõiki teemasid kategooriate kaupa. Iga teema on lühike, struktureeritud
            ja praktilise sammuga.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-20">
          {categories.map((cat, ci) => {
            const catTopics = getTopicsForCategory(cat.slug);
            return (
              <section key={cat.slug}>
                <div className="flex items-end justify-between gap-6 border-b border-border/60 pb-5">
                  <div>
                    <span className="mono text-[11px] uppercase tracking-[0.22em] text-primary">
                      {String(ci + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                      {cat.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>
                  <Link
                    to="/kategooriad/$slug"
                    params={{ slug: cat.slug }}
                    className="hidden md:inline-flex items-center gap-2 mono text-xs text-primary hover:underline"
                  >
                    Kategooria <span aria-hidden>→</span>
                  </Link>
                </div>
                <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {catTopics.map((t, i) => (
                    <TopicCard key={t.slug} topic={t} index={i} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
