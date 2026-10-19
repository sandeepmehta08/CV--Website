import SafeImage from "./SafeImage";
import TagPill from "./TagPill";
import Rich from "@/lib/rich";

type Props = {
  title: string;
  url: string;
  thumbnail: string;
  date?: string;
  bullets: string[];
  tags: string[];
};

export default function ProjectCard({ title, url, thumbnail, date, bullets, tags }: Props) {
  return (
    <article className="flex gap-4 rounded-xl border border-line p-5 transition hover:border-accent/50 hover:bg-fg/[0.02]">
      {thumbnail && (
        <SafeImage
          src={thumbnail}
          alt={title}
          className="mt-0.5 h-10 w-10 shrink-0 rounded-md border border-line object-contain"
        />
      )}
      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 className="font-medium">
            <a href={url} target="_blank" rel="noreferrer"
               className="text-accent underline-offset-4 hover:underline">
              {title}
            </a>
          </h3>
          {date && <span className="shrink-0 text-xs text-muted">{date}</span>}
        </div>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted/60" />
              <span><Rich text={b} /></span>
            </li>
          ))}
        </ul>
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => <TagPill key={t}>{t}</TagPill>)}
          </div>
        )}
      </div>
    </article>
  );
}
