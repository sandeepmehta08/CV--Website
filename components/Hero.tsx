import SafeImage from "./SafeImage";
import FadeIn from "./FadeIn";
import { site, hero } from "@/data/content";

export default function Hero() {
  return (
    <FadeIn>
      <div className="flex flex-col items-start gap-6 pt-6">
        <SafeImage
          src={hero.photo}
          alt={site.name}
          className="h-28 w-28 rounded-full border border-line object-cover"
        />
        <div>
          <h1 className="text-3xl font-semibold lowercase tracking-tight sm:text-4xl">{site.name}</h1>
          <p className="mt-2 text-lg text-accent">{hero.tagline}</p>
        </div>
        <p className="max-w-2xl leading-relaxed text-muted">{hero.intro}</p>
      </div>
    </FadeIn>
  );
}
