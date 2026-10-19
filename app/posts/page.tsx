import type { Metadata } from "next";
import Section from "@/components/Section";
import PostItem from "@/components/PostItem";
import { posts } from "@/data/content";

export const metadata: Metadata = { title: "posts — sandeep mehta" };

export default function PostsPage() {
  return (
    <Section title="posts">
      <ul className="divide-y divide-line rounded-xl border border-line">
        {posts.map((p) => <PostItem key={p.url} {...p} />)}
      </ul>
    </Section>
  );
}
