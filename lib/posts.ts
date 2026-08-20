import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  cover: string;
  contentHtml: string;
}

const blogsDirectory = path.join(process.cwd(), "blogs");

function getSlugs(): string[] {
  if (!fs.existsSync(blogsDirectory)) return [];
  return fs
    .readdirSync(blogsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function parsePost(slug: string): Post | null {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const result = remark().use(html).processSync(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    tags: (data.tags as string[]) ?? [],
    readTime: data.readTime ?? "",
    cover: data.cover ?? "",
    contentHtml: result.toString(),
  };
}

const posts: Post[] = getSlugs()
  .map((slug) => parsePost(slug))
  .filter((post): post is Post => post !== null);

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  return posts.find((post) => post.slug === slug) ?? null;
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const post of posts) {
    post.tags.forEach((tag) => tags.add(tag));
  }
  return Array.from(tags).sort();
}