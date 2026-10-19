import type { Metadata } from "next";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/content";

export const metadata: Metadata = { title: "projects — sandeep mehta" };

export default function ProjectsPage() {
  return (
    <Section title="projects">
      {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
    </Section>
  );
}
