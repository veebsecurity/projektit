import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getTopic, getCategory, getTopicsForCategory } from "@/data/content";

export const Route = createFileRoute("/teemad/$slug")({
  component: TopicPage,
  loader: ({ params }) => {
    const topic = getTopic(params.slug);
    if (!topic) throw notFound();
    return { topic };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.topic.title} — VeebSecurity` },
          { name: "description", content: loaderData.topic.intro },
          { property: "og:title", content: `${loaderData.topic.title} — VeebSecurity` },
          { property: "og:description", content: loaderData.topic.intro },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl font-semibold">Teemat ei leitud</h1>
        <p className="mt-4 text-muted-foreground">
          Otsitud teemat ei eksisteeri või on see eemaldatud.
        </p>
        <Link
          to="/teemad"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 mono text-sm font-semibold text-primary-foreground"
        >
          Tagasi teemade juurde →
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function TopicPage() {
  const { topic } = Route.useLoaderData();
  const category = getCategory(topic.category);
  const related = getTopicsForCategory(topic.category)
    .filter((t) => t.slug !== topic.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <nav className="mono mb-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <Link to="/teemad" className="transition-colors hover:text-primary">
            Teemad
          </Link>
          <span aria-hidden>/</span>
          {category && (
            <>
              <Link
                to="/kategooriad/$slug"
                params={{ slug: category.slug }}
                className="transition-colors hover:text-primary"
              >
                {category.title}
              </Link>
              <span aria-hidden>/</span>
            </>
          )}
          <span className="text-foreground/60">{topic.title}</span>
        </nav>

        <header className="border-b border-border/60 pb-10">
          <div className="flex items-center gap-3">
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-primary">
              {category?.title ?? topic.category}
            </span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {topic.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{topic.intro}</p>
        </header>

        <div className="mt-12 space-y-12">
          {topic.sections.map((section, i) => (
            <section key={i} className="float-up" style={{ animationDelay: `${i * 60}ms` }}>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                {section.title}
              </h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-foreground/85">
                {section.content}
              </p>
              {section.list && (
                <ul className="mt-5 space-y-2.5 border-l-2 border-primary/40 pl-5">
                  {section.list.map((item, j) => (
                    <li key={j} className="text-[15px] leading-relaxed text-foreground/85">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {related.length > 0 && (
          <aside className="mt-20 border-t border-border/60 pt-10">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              Sama teemaga seotud
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/teemad/$slug"
                  params={{ slug: r.slug }}
                  className="group surface-card p-5 transition-colors hover:border-primary/50"
                >
                  <h4 className="font-display text-base font-semibold transition-colors group-hover:text-primary">
                    {r.title}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{r.intro}</p>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </article>

      <SiteFooter />
    </div>
  );
}
