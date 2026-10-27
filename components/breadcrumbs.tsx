import Link from "next/link";
import { JsonLd } from "@/components/seo";
import { siteConfig } from "@/data/site";

export type Crumb = {
  name: string;
  href?: string;
};

export function buildBreadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href
        ? { item: `${siteConfig.url}${item.href.startsWith("/") ? item.href : `/${item.href}`}` }
        : {}),
    })),
  };
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const crumbs: Crumb[] = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd(crumbs)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
          {crumbs.map((crumb, i) => {
            const last = i === crumbs.length - 1;
            return (
              <li key={`${crumb.name}-${i}`} className="inline-flex items-center gap-2">
                {i > 0 ? <span aria-hidden="true">/</span> : null}
                {last || !crumb.href ? (
                  <span className="text-foreground/80" aria-current={last ? "page" : undefined}>
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-primary"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
