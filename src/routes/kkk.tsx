import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { faqs } from "@/data/content";

export const Route = createFileRoute("/kkk")({
  component: KKKPage,
  head: () => ({
    meta: [
      { title: "KKK — VeebSecurity" },
      {
        name: "description",
        content:
          "Korduma kippuvad küsimused küberturvalisuse kohta. VPN, viirusetõrje, 2FA, varukoopiad ja palju muud.",
      },
    ],
  }),
});

function KKKPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="mono text-[11px] uppercase tracking-[0.22em] text-primary">
            Tugi
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Korduma kippuvad küsimused
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Lühikesed, otsekohesed vastused kõige sagedamini esitatud küsimustele.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="divide-y divide-border/60 border-y border-border/60">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group py-6 transition-colors [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-4">
                <div className="flex items-baseline gap-4">
                  <span className="mono text-[11px] uppercase tracking-[0.22em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
                    {f.question}
                  </h3>
                </div>
                <span
                  aria-hidden
                  className="mono mt-1 text-lg text-primary transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 pl-12 text-[15px] leading-[1.75] text-muted-foreground">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
