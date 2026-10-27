import { siteConfig } from "@/data/site";

/** Canonical EN <-> RO pairs for consistent hreflang. */
export const hreflangPairs: Record<
  string,
  { en: string; ro: string }
> = {
  "/pentester-brasov/": {
    en: "/pentester-brasov/",
    ro: "/ro/pentesting-brasov/",
  },
  "/penetration-tester-brasov/": {
    en: "/penetration-tester-brasov/",
    ro: "/ro/pentesting-brasov/",
  },
  "/ethical-hacker-brasov/": {
    en: "/ethical-hacker-brasov/",
    ro: "/ro/ethical-hacking-brasov/",
  },
  "/security-testing-brasov/": {
    en: "/security-testing-brasov/",
    ro: "/ro/testare-securitate-brasov/",
  },
  "/offensive-security-brasov/": {
    en: "/offensive-security-brasov/",
    ro: "/ro/testare-securitate-brasov/",
  },
  "/pentester-romania/": {
    en: "/pentester-romania/",
    ro: "/ro/pentester-romania/",
  },
  "/penetration-tester-romania/": {
    en: "/penetration-tester-romania/",
    ro: "/ro/pentester-romania/",
  },
  "/ethical-hacking-romania/": {
    en: "/ethical-hacking-romania/",
    ro: "/ro/pentester-romania/",
  },
  "/services/penetration-testing-brasov/": {
    en: "/services/penetration-testing-brasov/",
    ro: "/ro/pentesting-brasov/",
  },
  "/services/penetration-testing-romania/": {
    en: "/services/penetration-testing-romania/",
    ro: "/ro/pentester-romania/",
  },
  "/ro/pentesting-brasov/": {
    en: "/pentester-brasov/",
    ro: "/ro/pentesting-brasov/",
  },
  "/ro/ethical-hacking-brasov/": {
    en: "/ethical-hacker-brasov/",
    ro: "/ro/ethical-hacking-brasov/",
  },
  "/ro/testare-securitate-brasov/": {
    en: "/security-testing-brasov/",
    ro: "/ro/testare-securitate-brasov/",
  },
  "/ro/pentester-romania/": {
    en: "/pentester-romania/",
    ro: "/ro/pentester-romania/",
  },
};

export function languagesForPath(path: string): { en: string; ro: string } {
  const pair = hreflangPairs[path];
  if (pair) {
    return {
      en: `${siteConfig.url}${pair.en}`,
      ro: `${siteConfig.url}${pair.ro}`,
    };
  }
  return {
    en: `${siteConfig.url}${path}`,
    ro: `${siteConfig.url}/ro/pentesting-brasov/`,
  };
}
