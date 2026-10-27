import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getAllPosts } from "@/lib/posts";
import { collaborators } from "@/data/collaborators";
import { allServicePages } from "@/data/services";
import { keywordLandings } from "@/data/seo-pages";
import { allServedCities, servedCountries } from "@/data/locations";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/services/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.98,
    },
    {
      url: `${siteConfig.url}/for-ai/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/locations/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.94,
    },
    {
      url: `${siteConfig.url}/about/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/projects/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/blog/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = allServicePages.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.96,
  }));

  const keywordRoutes: MetadataRoute.Sitemap = keywordLandings.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.97,
  }));

  const locationRoutes: MetadataRoute.Sitemap = [
    ...servedCountries.map((country) => ({
      url: `${siteConfig.url}${country.path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.93,
    })),
    ...allServedCities.map((city) => ({
      url: `${siteConfig.url}${city.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}/`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const collaboratorRoutes: MetadataRoute.Sitemap = collaborators.map(
    (collab) => ({
      url: `${siteConfig.url}/collaborator/${collab.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })
  );

  return [
    ...staticRoutes,
    ...keywordRoutes,
    ...locationRoutes,
    ...serviceRoutes,
    ...blogRoutes,
    ...collaboratorRoutes,
  ];
}
