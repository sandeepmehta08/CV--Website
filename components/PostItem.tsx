type Props = { emoji: string; title: string; url: string; date: string };

export default function PostItem({ emoji, title, url, date }: Props) {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="flex items-baseline justify-between gap-4 px-5 py-4 transition hover:bg-fg/[0.02]"
      >
        <span className="text-sm">
          <span className="mr-2">{emoji}</span>
          <span>{title}</span>
        </span>
        <span className="shrink-0 text-xs text-muted">{date}</span>
      </a>
    </li>
  );
}
