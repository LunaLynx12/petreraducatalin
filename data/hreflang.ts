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
  "/ro/pret-test-de-penetrare/": {
    en: "/services/penetration-testing-romania/",
    ro: "/ro/pret-test-de-penetrare/",
  },
  "/ro/firme-pentesting-romania/": {
    en: "/pentester-romania/",
    ro: "/ro/firme-pentesting-romania/",
  },
  "/ro/nis2-testare-securitate-brasov/": {
    en: "/nis2-security-testing-romania/",
    ro: "/ro/nis2-testare-securitate-brasov/",
  },
  "/nis2-security-testing-romania/": {
    en: "/nis2-security-testing-romania/",
    ro: "/ro/nis2-testare-securitate-brasov/",
  },
  "/ro/pentest-magazin-online/": {
    en: "/ecommerce-penetration-testing/",
    ro: "/ro/pentest-magazin-online/",
  },
  "/ecommerce-penetration-testing/": {
    en: "/ecommerce-penetration-testing/",
    ro: "/ro/pentest-magazin-online/",
  },
  "/ro/testare-securitate-aplicatie-web/": {
    en: "/security-testing-brasov/",
    ro: "/ro/testare-securitate-aplicatie-web/",
  },
  "/ro/verificare-vulnerabilitati-api/": {
    en: "/api-penetration-testing/",
    ro: "/ro/verificare-vulnerabilitati-api/",
  },
  "/api-penetration-testing/": {
    en: "/api-penetration-testing/",
    ro: "/ro/verificare-vulnerabilitati-api/",
  },
  "/ro/testare-securitate-retea-interna/": {
    en: "/internal-network-penetration-testing/",
    ro: "/ro/testare-securitate-retea-interna/",
  },
  "/internal-network-penetration-testing/": {
    en: "/internal-network-penetration-testing/",
    ro: "/ro/testare-securitate-retea-interna/",
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
