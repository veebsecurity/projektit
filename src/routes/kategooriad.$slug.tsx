import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TopicCard } from "@/components/TopicCard";
import { getCategory, getTopicsForCategory } from "@/data/content";

export const Route = createFileRoute("/kategooriad/$slug")({
  component: CategoryPage,
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, topics: getTopicsForCategory(category.slug) };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.category.title} — VeebSecurity` },
          { name: "description", content: loaderData.category.description },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl font-semibold">Kategooriat ei leitud</h1>
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

function CategoryPage() {
  const { category, topics } = Route.useLoaderData();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <nav className="mono mb-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <Link to="/teemad" className="transition-colors hover:text-primary">
              Teemad
            </Link>
            <span aria-hidden>/</span>
            <span className="text-foreground/60">{category.title}</span>
          </nav>
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {category.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {category.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((t, i) => (
            <TopicCard key={t.slug} topic={t} index={i} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
