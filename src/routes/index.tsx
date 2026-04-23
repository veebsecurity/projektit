import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TopicCard } from "@/components/TopicCard";
import { categories, topics } from "@/data/content";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VeebSecurity — Praktiline küberturvalisuse juhend" },
      {
        name: "description",
        content:
          "Eestikeelne praktiline juhend digitaalseks turvalisuseks. Paroolid, phishing, VPN, krüpteerimine ja küberhügieen ühes kohas.",
      },
    ],
  }),
});

function Index() {
  const featured = topics.slice(0, 6);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
        <div className="absolute inset-0 scanlines opacity-[0.35]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_currentColor]" />
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Eesti küberturvalisuse juhend · v1.0
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Digitaalne turvalisus,{" "}
            <span className="text-gradient">mis töötab</span>{" "}
            <br className="hidden md:block" />
            päriselus
            <span className="blink" aria-hidden />
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Lihtne juhend igapäevaseks digiturvalisuseks. Paroolid, phishing, VPN,
            krüpteerimine ja kasulikud tööriistad — kõik ühes kohas, lihtsas keeles.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/teemad"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 mono text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-[0_0_30px_-5px_var(--primary)]"
            >
              Vaata kõiki teemasid
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/kkk"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-5 py-3 mono text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Korduma kippuvad küsimused
            </Link>
          </div>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between gap-6 border-b border-border/60 pb-6">
          <div>
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-primary">
              01 · Sisukord
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Vali teema ja sukeldu sisse
            </h2>
          </div>
          <Link
            to="/teemad"
            className="hidden md:inline-flex items-center gap-2 mono text-xs text-primary hover:underline"
          >
            Kõik teemad <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              to="/kategooriad/$slug"
              params={{ slug: cat.slug }}
              className="group relative flex flex-col gap-3 bg-card p-7 transition-colors hover:bg-surface-elevated"
            >
              <div className="flex items-center justify-between">
                <span className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mono text-[11px] text-primary/70">
                  {cat.topics.length} teemat
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                {cat.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
              <div className="mt-auto pt-4 mono text-xs text-primary/70 transition-colors group-hover:text-primary">
                Sisene →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED TOPICS */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="border-b border-border/60 pb-6">
          <span className="mono text-[11px] uppercase tracking-[0.22em] text-primary">
            02 · Soovitatud
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Alusta nendest
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((topic, i) => (
            <TopicCard key={topic.slug} topic={topic} index={i} />
          ))}
        </div>
      </section>

      {/* CALL OUT */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="surface-card relative overflow-hidden p-10 md:p-14">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <span className="mono text-[11px] uppercase tracking-[0.22em] text-primary">
            03 · Põhimõte
          </span>
          <h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight tracking-tight md:text-4xl">
            Turvalisus ei ole toode — see on väike harjumus iga päev.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Ükski tööriist ei kaitse sind, kui sa ei tea, mida ja miks kaitsta.
            See juhend annab vajaliku põhja, et teha targemaid valikuid netis.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/teemad"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 mono text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Alusta esimesest teemast →
            </Link>
            <Link
              to="/tooriistad"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-background/50 px-5 py-3 mono text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Vaata tööriistu
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

