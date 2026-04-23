import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md border border-primary/40 bg-primary/10 mono text-xs font-semibold text-primary">
              VS
            </span>
            <span className="font-display text-base font-semibold">VeebSecurity</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Lihtne juhend digiturvalisusest. Tehtud projektitööna —
            kõik soovitused on informatiivsed.
          </p>
        </div>

        <div>
          <h4 className="mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Sait
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/teemad" className="text-foreground/80 transition-colors hover:text-primary">
                Teemad
              </Link>
            </li>
            <li>
              <Link to="/kkk" className="text-foreground/80 transition-colors hover:text-primary">
                KKK
              </Link>
            </li>
            <li>
              <Link to="/tooriistad" className="text-foreground/80 transition-colors hover:text-primary">
                Tööriistad
              </Link>
            </li>
            <li>
              <Link to="/teave" className="text-foreground/80 transition-colors hover:text-primary">
                Teave
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Välised
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href="https://ria.ee"
                target="_blank"
                rel="noreferrer"
                className="text-foreground/80 transition-colors hover:text-primary"
              >
                RIA — Eesti
              </a>
            </li>
            <li>
              <a
                href="https://haveibeenpwned.com"
                target="_blank"
                rel="noreferrer"
                className="text-foreground/80 transition-colors hover:text-primary"
              >
                Have I Been Pwned
              </a>
            </li>
            <li>
              <a
                href="https://www.cisa.gov"
                target="_blank"
                rel="noreferrer"
                className="text-foreground/80 transition-colors hover:text-primary"
              >
                CISA — USA
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <p className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            © {new Date().getFullYear()} VeebSecurity
            Projektitöö
          </p>
        </div>
      </div>
    </footer>
  );
}
