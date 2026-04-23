import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/teave")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Teave — VeebSecurity" },
      {
        name: "description",
        content:
          "VeebSecurity on eestikeelne praktiline juhend digitaalseks turvalisuseks igale kasutajale.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Mida ja miks
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            See sait on koolitööna tehtud lihtne juhend digiturvalisuseks. Mõte
            on anda tavalisele inimesele põhiteadmised — mis ohud üldse on,
            kuidas neid ära tunda ja milliste tööriistadega end kaitsta.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-10">
          <Block title="Põhimõtted">
            <p>
              Sisu on kokku pandud avalike ja usaldusväärsete allikate põhjal —
              RIA, CISA, OWASP. Soovitused on praktilised, mitte teoreetilised.
              Kui mõni nõuanne siin puudub, siis enamasti seetõttu, et see
              tavakasutaja jaoks oluline pole.
            </p>
          </Block>

          <Block title="Allikad">
            <ul className="space-y-3">
              <li>
                <a
                  href="https://ria.ee"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  Riigi Infosüsteemi Amet (RIA)
                </a>{" "}
                — Eesti küberturvalisuse meeskond
              </li>
              <li>
                <a
                  href="https://www.cisa.gov"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  CISA
                </a>{" "}
                — USA küberturvalisuse agentuur
              </li>
              <li>
                <a
                  href="https://owasp.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  OWASP
                </a>{" "}
                — Veebirakenduste turvalisuse ressurss
              </li>
            </ul>
          </Block>

          <Block title="Vastutus">
            <p>
              Sisu on informatiivne, mitte juriidiline ega professionaalne nõuanne.
              Tõsiste turvaintsidentide korral pöördu spetsialisti poole või teata
              juhtumist RIA-le.
            </p>
          </Block>
        </div>

        <div className="mt-16 surface-card flex items-center justify-between gap-6 p-6">
          <p className="text-sm text-muted-foreground">
            Valmis alustama? Vaata kõiki teemasid ühes kohas.
          </p>
          <Link
            to="/teemad"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-4 py-2.5 mono text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Teemade juurde →
          </Link>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 text-[15px] leading-[1.75] text-foreground/85">{children}</div>
    </section>
  );
}
