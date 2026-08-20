/**
 * Generates public/rss.xml from the markdown posts in blogs/.
 * Runs automatically before `next build` (see package.json "prebuild").
 * New posts only need to be dropped into blogs/ with frontmatter.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogsDir = path.join(__dirname, "..", "blogs");
const outFile = path.join(__dirname, "..", "public", "rss.xml");

const SITE_URL = "https://petreraducatalin.com";
const SITE_NAME = "Petre Radu Cătălin";
const SITE_DESCRIPTION =
  "Insights from Petre Radu Cătălin - technical write-ups on offensive security, penetration testing, cloud threats, and AI security.";

if (!fs.existsSync(blogsDir)) {
  console.warn("No blogs/ directory found; skipping RSS generation.");
  process.exit(0);
}

const posts = fs
  .readdirSync(blogsDir)
  .filter((file) => file.endsWith(".md"))
  .map((file) => {
    const { data } = matter(fs.readFileSync(path.join(blogsDir, file), "utf8"));
    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title ?? file,
      date: data.date ?? new Date().toISOString().slice(0, 10),
      excerpt: data.excerpt ?? "",
      tags: data.tags ?? [],
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

const items = posts
  .map((post) => {
    const url = `${SITE_URL}/blog/${post.slug}/`;
    const iso = new Date(post.date).toUTCString();
    const categories = post.tags
      .map((tag) => `      <category>${escapeXml(tag)}</category>`)
      .join("\n");
    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${iso}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
${categories}
      <author>${SITE_NAME}</author>
    </item>`;
  })
  .join("\n");

const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME} - Blog</title>
    <link>${SITE_URL}/blog/</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

fs.writeFileSync(outFile, rss, "utf8");
console.log(`Generated rss.xml with ${posts.length} posts.`);

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}