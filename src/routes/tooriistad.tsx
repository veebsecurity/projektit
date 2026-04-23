import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { tools, toolCategories } from "@/data/content";

export const Route = createFileRoute("/tooriistad")({
  component: ToolsPage,
  head: () => ({
    meta: [
      { title: "Tööriistad — VeebSecurity" },
      {
        name: "description",
        content:
          "Käsivalitud kogum tööriistu digiturvalisuseks: paroolihaldurid, 2FA, VPN, krüpteeritud sõnumid, varukoopiad ja palju muud.",
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
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Kasulikud tööriistad
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Käsivalitud kogum tööriistu, mida ise kasutan ja soovitan. Enamik
            tasuta, kõik usaldusväärsed. Vali kategooria ja vaata sobivat.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {toolCategories.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="rounded-md border border-border-strong bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-20">
          {toolCategories.map((cat) => {
            const catTools = tools.filter((t) => t.category === cat.slug);
            if (catTools.length === 0) return null;
            return (
              <section key={cat.slug} id={cat.slug} className="scroll-mt-24">
                <div className="border-b border-border/60 pb-5">
                  <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    {cat.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
                  {catTools.map((tool, i) => (
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
                        <div className="flex items-center gap-2">
                          {tool.free && (
                            <span className="rounded-sm border border-primary/40 bg-primary/10 px-1.5 py-0.5 mono text-[10px] uppercase tracking-[0.16em] text-primary">
                              Tasuta
                            </span>
                          )}
                          <span className="mono text-[11px] text-primary/70 transition-colors group-hover:text-primary">
                            Ava ↗
                          </span>
                        </div>
                      </div>
                      <h3 className="mt-4 font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                        {tool.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {tool.description}
                      </p>
                      <div className="mt-4 mono text-[11px] text-muted-foreground/70">
                        {new URL(tool.url).hostname.replace(/^www\./, "")}
                      </div>
                    </a>
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
