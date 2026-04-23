import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TopicCard } from "@/components/TopicCard";
import { categories, topics } from "@/data/content";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VeebSecurity — küberturvalisuse juhend" },
      {
        name: "description",
        content:
          "Lihtne eestikeelne juhend igapäevaseks digiturvalisuseks. Paroolid, phishing, VPN, krüpteerimine, varundus ja kasulikud tööriistad.",
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
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-20 md:pt-28 md:pb-24">
          <h1 className="max-w-4xl font-display text-4xl leading-[1.1] tracking-tight md:text-6xl">
            Iga inimene jätab netis jälgi.
            <br className="hidden md:block" />{" "}
            <span className="text-muted-foreground">
              Selle saidi mõte on aidata sul aru saada, milliseid ja miks see
              oluline on.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80">
            See ei ole hirmutamine. Suur osa rünnakutest ei vali ohvreid käsitsi —
            need on automaatsed ja proovivad lihtsalt kõike, mis liigub. Hea
            uudis: paar lihtsat harjumust katavad enamiku riske ära.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/miks"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Miks see oluline on
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/teemad"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Vaata teemasid
            </Link>
          </div>
        </div>
      </section>

      {/* WHY YOU MATTER */}
      <section className="border-b border-border/60 bg-surface/30">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {"„Mul pole midagi varjata” on müüt"}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80">
              See lause kõlab loogiliselt, aga vaatame seda lähemalt. Sa lukustad
              kodus vannitoa ukse, paned kardinad ette ja ei pane oma SMS-e
              tänavakuulutusele. Mitte sellepärast, et midagi varjata, vaid
              sellepärast, et privaatsus on inimeseks olemise osa. Veebis kehtib
              täpselt sama loogika.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            <ReasonCard
              title={"Sa oled sihtmärk, isegi kui sa pole keegi „tähtis”"}
              body="Suur osa rünnakutest on automaatsed. Robotid proovivad miljoneid kontosid päevas — kui sa kasutad sama parooli mitmes kohas, oled juba ohus. See pole isiklik, see on lihtsalt mass."
            />
            <ReasonCard
              title="Sinu konto on väärtuslik"
              body="Pangakonto on selge, aga ka su Instagram, e-post või Steami konto on raha väärt. Varastatud kontosid müüakse, kasutatakse pettusteks su sõprade vastu või tühjendatakse virtuaalsetest esemetest."
            />
            <ReasonCard
              title="Sinu andmed mõjutavad ka teisi"
              body="Kui sinu e-post on lekkinud, saadetakse phishing-kirju ka su perele. Kui sinu Facebook on häkitud, kasutatakse seda sõprade petmiseks. Privaatsus on ka kollektiivne asi."
            />
          </div>

          <div className="mt-8">
            <Link
              to="/miks"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Loe pikemalt, miks see kõik oluline on{" "}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex items-end justify-between gap-6 border-b border-border/60 pb-5">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Vali teema
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Kõik on jaotatud lühikesteks osadeks — võta üks korraga.
            </p>
          </div>
          <Link
            to="/teemad"
            className="hidden md:inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            Kõik teemad <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to="/kategooriad/$slug"
              params={{ slug: cat.slug }}
              className="group relative flex flex-col gap-3 bg-card p-6 transition-colors hover:bg-surface-elevated"
            >
              <h3 className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                {cat.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED TOPICS */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="border-b border-border/60 pb-5">
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Hea koht alustada
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((topic, i) => (
            <TopicCard key={topic.slug} topic={topic} index={i} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ReasonCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-card p-7">
      <h3 className="font-display text-base font-semibold leading-snug tracking-tight">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {body}
      </p>
    </div>
  );
}
