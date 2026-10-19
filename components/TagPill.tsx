export default function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">{children}</span>
  );
}
