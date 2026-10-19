import SafeImage from "./SafeImage";
import TagPill from "./TagPill";
import Rich from "@/lib/rich";

type Props = {
  title: string;
  url: string;
  thumbnail: string;
  bullets: string[];
  tags: string[];
};

export default function ProjectCard({ title, url, thumbnail, bullets, tags }: Props) {
  return (
    <article className="overflow-hidden rounded-xl border border-line transition hover:border-accent/50 hover:bg-fg/[0.02]">
      <SafeImage
        src={thumbnail}
        alt={title}
        className="aspect-[16/7] w-full border-b border-line object-cover"
      />
      <div className="p-5">
        <h3 className="font-medium">
          <a href={url} target="_blank" rel="noreferrer"
             className="text-accent underline-offset-4 hover:underline">
            {title}
          </a>
        </h3>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted/60" />
              <span><Rich text={b} /></span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => <TagPill key={t}>{t}</TagPill>)}
        </div>
      </div>
    </article>
  );
}
