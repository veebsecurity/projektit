import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { tools } from "@/data/content";

export const Route = createFileRoute("/tooriistad")({
  component: ToolsPage,
  head: () => ({
    meta: [
      { title: "Tööriistad ja ressursid — VeebSecurity" },
      {
        name: "description",
        content:
          "Soovitatud tööriistad ja ressursid küberturvalisuse parandamiseks: paroolihaldurid, viirusetõrjed, andmelekete kontroll.",
      },
    ],
  }),
});

function ToolsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="mono text-[11px] uppercase tracking-[0.22em] text-primary">
            Ressursid
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Tööriistad ja lingid
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Käsivalitud kogum vahendeid, mida igapäevaselt soovitada. Kõik on
            usaldusväärsed, hästi auditeeritud ja enamjaolt tasuta.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {tools.map((tool, i) => (
            <a
              key={tool.url}
              href={tool.url}
              target="_blank"
              rel="noreferrer"
              className="group bg-card p-7 transition-colors hover:bg-surface-elevated"
            >
              <div className="flex items-center justify-between">
                <span className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mono text-[11px] text-primary/70 transition-colors group-hover:text-primary">
                  Ava ↗
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                {tool.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tool.description}
              </p>
              <div className="mt-4 mono text-[11px] text-muted-foreground/70">
                {new URL(tool.url).hostname}
              </div>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
