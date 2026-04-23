import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-primary/40 bg-primary/10 text-sm font-semibold text-primary transition-colors group-hover:bg-primary/20">
            VS
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-[15px] font-semibold tracking-tight">
              VeebSecurity
            </span>
            <span className="text-[11px] text-muted-foreground">
              Eestikeelne digiturvalisuse juhend
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/miks">Miks</NavLink>
          <NavLink to="/teemad">Teemad</NavLink>
          <NavLink to="/tooriistad">Tööriistad</NavLink>
          <NavLink to="/kkk">KKK</NavLink>
          <NavLink to="/teave">Teave</NavLink>
        </nav>

        <Link
          to="/teemad"
          className="hidden md:inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          Alusta
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      activeProps={{ className: "text-foreground bg-secondary" }}
    >
      {children}
    </Link>
  );
}
