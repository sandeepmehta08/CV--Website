export default function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-line bg-fg/[0.03] px-3 py-1 text-xs font-normal text-muted transition hover:border-accent/40 hover:text-fg">
      {children}
    </span>
  );
}
