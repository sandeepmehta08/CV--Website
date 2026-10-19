import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";
import TagPill from "@/components/TagPill";
import { experience, skills, education, excites, connect, links } from "@/data/content";

export default function Home() {
  return (
    <>
      <Hero />

      <Section title="what i do">
        {experience.map((e) => <ExperienceCard key={e.role + e.date} {...e} />)}
      </Section>

      <Section title="skills i have">
        <div className="flex flex-wrap gap-2.5">
          {skills.map((s) => (
            <TagPill key={s}>{s}</TagPill>
          ))}
        </div>
      </Section>

      <Section title="education">
        {education.map((e) => <ExperienceCard key={e.title} {...e} />)}
      </Section>

      <Section title="what excites me">
        <p className="leading-relaxed text-muted">{excites}</p>
      </Section>

      <Section title="let's connect">
        <p className="leading-relaxed text-muted">{connect}</p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer"
                 className="text-accent underline-offset-4 hover:underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
