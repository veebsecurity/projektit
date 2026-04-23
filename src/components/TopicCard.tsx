import { Link } from "@tanstack/react-router";
import type { Topic } from "@/data/content";

export function TopicCard({ topic, index = 0 }: { topic: Topic; index?: number }) {
  return (
    <Link
      to="/teemad/$slug"
      params={{ slug: topic.slug }}
      className="group surface-card relative flex flex-col gap-3 p-6 transition-all hover:border-primary/50 hover:-translate-y-0.5 float-up"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <span className="text-xs font-medium text-primary/80">
        {topic.category}
      </span>
      <h3 className="font-display text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
        {topic.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">{topic.intro}</p>
      <div className="mt-2 flex items-center gap-2 text-xs text-primary/80 transition-colors group-hover:text-primary">
        <span>Loe edasi</span>
        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}
