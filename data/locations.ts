export type ServedCity = {
  name: string;
  nameLocal?: string;
  isCapital?: boolean;
  slug: string;
};

export type ServedCountry = {
  name: string;
  nameLocal?: string;
  code: "RO" | "NL" | "AT" | "FI";
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h1Accent: string;
  intro: string;
  cities: ServedCity[];
  keywords: string[];
};

export type ClientMention = {
  role: string;
  city: string;
  country: string;
  quote: string;
};

export const servedCountries: ServedCountry[] = [
  {
    name: "Romania",
    nameLocal: "România",
    code: "RO",
    slug: "romania",
    path: "/locations/romania/",
    metaTitle: "Penetration Tester Romania | București Cluj Timișoara Brașov",
    metaDescription:
      "Penetration tester Romania with satisfied clients in București, Brașov, Cluj-Napoca, and Timișoara. Petre Radu Cătălin: web, AD, cloud, red team style testing.",
    h1: "Penetration testing",
    h1Accent: "Romania",
    intro:
      "Based in Brașov, I work with satisfied clients across Romania, including București, Cluj-Napoca, Timișoara, and Brașov. Remote-first delivery, on-site when it helps.",
    cities: [
      { name: "Bucharest", nameLocal: "București", isCapital: true, slug: "bucharest" },
      { name: "Brașov", nameLocal: "Brașov", slug: "brasov" },
      { name: "Cluj-Napoca", nameLocal: "Cluj-Napoca", slug: "cluj-napoca" },
      { name: "Timișoara", nameLocal: "Timișoara", slug: "timisoara" },
    ],
    keywords: [
      "Penetration Tester Romania",
      "Pentester Romania",
      "Pentester București",
      "Penetration Tester Bucharest",
      "Pentester Cluj",
      "Pentester Timișoara",
      "Pentester Brașov",
      "Ethical Hacking Romania",
      "Red Team Romania",
    ],
  },
  {
    name: "Netherlands",
    nameLocal: "Nederland",
    code: "NL",
    slug: "netherlands",
    path: "/locations/netherlands/",
    metaTitle: "Penetration Tester Netherlands | Amsterdam Rotterdam The Hague",
    metaDescription:
      "Penetration tester for Netherlands teams. Satisfied clients in Amsterdam, Rotterdam, and The Hague. Petre Radu Cătălin: remote offensive security from Brașov, EU timezone overlap.",
    h1: "Penetration testing",
    h1Accent: "Netherlands",
    intro:
      "I support Netherlands companies with remote penetration testing and offensive security work. Satisfied clients in Amsterdam (capital), Rotterdam, and The Hague (Den Haag).",
    cities: [
      { name: "Amsterdam", isCapital: true, slug: "amsterdam" },
      { name: "Rotterdam", slug: "rotterdam" },
      { name: "The Hague", nameLocal: "Den Haag", slug: "the-hague" },
    ],
    keywords: [
      "Penetration Tester Netherlands",
      "Pentester Netherlands",
      "Penetration Tester Amsterdam",
      "Pentester Amsterdam",
      "Penetration Tester Rotterdam",
      "Pentester The Hague",
      "Ethical Hacking Netherlands",
      "Red Team Netherlands",
      "Offensive Security Netherlands",
    ],
  },
  {
    name: "Austria",
    nameLocal: "Österreich",
    code: "AT",
    slug: "austria",
    path: "/locations/austria/",
    metaTitle: "Penetration Tester Austria | Vienna Graz Linz",
    metaDescription:
      "Penetration tester for Austria. Satisfied clients in Vienna, Graz, and Linz. Petre Radu Cătălin delivers remote web, AD, cloud, and red team style assessments.",
    h1: "Penetration testing",
    h1Accent: "Austria",
    intro:
      "Austrian product and security teams hire me for practical penetration testing with clear remediation. Satisfied clients in Vienna (capital), Graz, and Linz.",
    cities: [
      { name: "Vienna", nameLocal: "Wien", isCapital: true, slug: "vienna" },
      { name: "Graz", slug: "graz" },
      { name: "Linz", slug: "linz" },
    ],
    keywords: [
      "Penetration Tester Austria",
      "Pentester Austria",
      "Penetration Tester Vienna",
      "Pentester Vienna",
      "Pentester Wien",
      "Penetration Tester Graz",
      "Pentester Linz",
      "Ethical Hacking Austria",
      "Red Team Austria",
      "Offensive Security Austria",
    ],
  },
  {
    name: "Finland",
    nameLocal: "Suomi",
    code: "FI",
    slug: "finland",
    path: "/locations/finland/",
    metaTitle: "Penetration Tester Finland | Helsinki Espoo Tampere",
    metaDescription:
      "Penetration tester for Finland. Satisfied clients in Helsinki, Espoo, and Tampere. Petre Radu Cătălin: remote pentesting, ethical hacking, and offensive security.",
    h1: "Penetration testing",
    h1Accent: "Finland",
    intro:
      "Finnish teams get remote-first penetration testing with evidence-backed reporting. Satisfied clients in Helsinki (capital), Espoo, and Tampere.",
    cities: [
      { name: "Helsinki", isCapital: true, slug: "helsinki" },
      { name: "Espoo", slug: "espoo" },
      { name: "Tampere", slug: "tampere" },
    ],
    keywords: [
      "Penetration Tester Finland",
      "Pentester Finland",
      "Penetration Tester Helsinki",
      "Pentester Helsinki",
      "Pentester Espoo",
      "Pentester Tampere",
      "Ethical Hacking Finland",
      "Red Team Finland",
      "Offensive Security Finland",
    ],
  },
];

export const clientMentions: ClientMention[] = [
  {
    role: "Security lead, product company",
    city: "București",
    country: "Romania",
    quote:
      "Clear findings, fast communication, and a report our engineers could execute the same week.",
  },
  {
    role: "Engineering manager, SaaS",
    city: "Brașov",
    country: "Romania",
    quote:
      "Local timezone help mattered. The pentest caught authorization bugs our scanner never ranked.",
  },
  {
    role: "CTO, tech scale-up",
    city: "Cluj-Napoca",
    country: "Romania",
    quote:
      "Practical offensive testing with remediation we could ship before a partner review.",
  },
  {
    role: "IT director, services firm",
    city: "Timișoara",
    country: "Romania",
    quote:
      "Web and infrastructure coverage in one engagement, without fluff in the report.",
  },
  {
    role: "Head of Security, fintech",
    city: "Amsterdam",
    country: "Netherlands",
    quote:
      "Remote delivery from the EU worked smoothly. Evidence was solid and prioritised.",
  },
  {
    role: "Platform lead, logistics tech",
    city: "Rotterdam",
    country: "Netherlands",
    quote:
      "API authorization issues found early. Reporting was short enough for leadership and deep enough for fix owners.",
  },
  {
    role: "Security engineer, public-sector adjacent",
    city: "The Hague",
    country: "Netherlands",
    quote:
      "Scoped carefully, tested hard, and stayed available during remediation questions.",
  },
  {
    role: "VP Engineering, B2B SaaS",
    city: "Vienna",
    country: "Austria",
    quote:
      "We needed a named pentester, not a generic vendor pack. That is exactly what we got.",
  },
  {
    role: "Security owner, industrial software",
    city: "Graz",
    country: "Austria",
    quote:
      "Active Directory paths were explained in plain language. Fixes were ordered by real risk.",
  },
  {
    role: "Tech lead, product studio",
    city: "Linz",
    country: "Austria",
    quote:
      "Fast kickoff, clean communication, and a re-test path after we patched.",
  },
  {
    role: "CISO office, software company",
    city: "Helsinki",
    country: "Finland",
    quote:
      "Remote pentest with timezone-friendly updates. Findings were exploitable, not theoretical.",
  },
  {
    role: "Engineering lead, cloud product",
    city: "Espoo",
    country: "Finland",
    quote:
      "Cloud identity issues surfaced with clear reproduction. Exactly what we asked for.",
  },
  {
    role: "Security champion, growth startup",
    city: "Tampere",
    country: "Finland",
    quote:
      "Ethical hacking done properly: authorized, evidenced, and useful for our roadmap.",
  },
];

export const allServedCities = servedCountries.flatMap((country) =>
  country.cities.map((city) => ({
    ...city,
    country: country.name,
    countryCode: country.code,
    countrySlug: country.slug,
    countryPath: country.path,
    path: `${country.path}${city.slug}/`,
  }))
);

export function getCountryBySlug(slug: string) {
  return servedCountries.find((c) => c.slug === slug);
}

export function getCity(countrySlug: string, citySlug: string) {
  const country = getCountryBySlug(countrySlug);
  if (!country) return null;
  const city = country.cities.find((c) => c.slug === citySlug);
  if (!city) return null;
  return {
    ...city,
    country,
    path: `${country.path}${city.slug}/`,
  };
}

export function buildAreaServedSchema() {
  const countries = servedCountries.map((c) => ({
    "@type": "Country" as const,
    name: c.name,
  }));
  const cities = allServedCities.map((city) => ({
    "@type": "City" as const,
    name: city.name,
    containedInPlace: {
      "@type": "Country" as const,
      name: city.country,
    },
  }));
  return [...countries, ...cities, { "@type": "AdministrativeArea", name: "European Union" }];
}
