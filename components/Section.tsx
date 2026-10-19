import FadeIn from "./FadeIn";

export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-16 first:mt-0">
      <FadeIn>
        <h2 className="mb-5 text-sm font-medium lowercase tracking-wide text-muted">{title}</h2>
        <div className="space-y-4">{children}</div>
      </FadeIn>
    </section>
  );
}
