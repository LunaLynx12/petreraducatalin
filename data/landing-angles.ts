/** Unique angle blocks so SEO landings are not thin duplicates. */
export type LandingAngle = {
  heading: string;
  text: string;
  points: string[];
};

export const landingAngles: Record<string, LandingAngle> = {
  "pentester-brasov": {
    heading: "Why this page is for the word pentester",
    text: "Buyers who type pentester Brașov usually want a person they can name on a questionnaire, not a platform brochure. This page is the person entity: Petre Radu Cătălin, Brașov-based, engagement-ready.",
    points: [
      "Named tester as primary contact",
      "Manual validation before any finding is reported",
      "Optional on-site kickoff in Brașov",
      "Clear split from Kiwi Defence company services",
    ],
  },
  "penetration-tester-brasov": {
    heading: "Penetration tester search intent",
    text: "Penetration tester Brașov is the formal hiring phrase. Expect scoped Rules of Engagement, evidence, and remediation order. This page targets procurement-style searches.",
    points: [
      "Written authorization before testing",
      "Executive summary plus engineering detail",
      "Web, API, AD, and cloud options",
      "Re-test path for critical fixes",
    ],
  },
  "ethical-hacker-brasov": {
    heading: "Ethical hacker is still how many locals search",
    text: "Ethical hacker Brașov maps to authorized offensive testing. Same professional standards as a pentest: scope, legality, evidence, and fix guidance.",
    points: [
      "Only authorized targets",
      "Attacker mindset with business impact language",
      "Useful for non-technical owners who use this phrase",
      "English or Romanian stakeholder conversations",
    ],
  },
  "pentester-romania": {
    heading: "Nationwide pentester, Brașov home base",
    text: "Pentester Romania queries are country-wide. Delivery is remote-first across București, Cluj-Napoca, Timișoara, and beyond, with Brașov as the operating base.",
    points: [
      "Romanian timezone collaboration",
      "Bilingual reporting when needed",
      "Same methodology for every city",
      "Country page distinct from Brașov-only intent",
    ],
  },
  "penetration-tester-romania": {
    heading: "Formal Romania hiring page",
    text: "Use this page when the search is penetration tester Romania and the buyer needs a scoped proposal for Romanian organizations.",
    points: [
      "Evidence for partner and customer reviews",
      "Focus on exploitable risk, not scanner noise",
      "Remote EU-ready from Romania",
      "Complements city pages without replacing them",
    ],
  },
  "red-team-brasov": {
    heading: "Red Team angle for Brașov",
    text: "Red Team Brașov is for teams that want chaining and adversary-style pressure, not only a single-app checklist. ATT&CK-mapped narrative where it helps defenders.",
    points: [
      "Path thinking toward crown jewels",
      "Identity and lateral movement focus when scoped",
      "Detection conversation after findings",
      "Different from a basic web-only pentest",
    ],
  },
  "red-team-romania": {
    heading: "Red Team Romania coverage",
    text: "Country-level red team style work for Romanian security and engineering leads who already know scanner output is not enough.",
    points: [
      "Nationwide remote delivery",
      "Scoped intensity and safety limits",
      "Useful after a first pentest cycle",
      "Pairs with continuous programmes at Kiwi when needed",
    ],
  },
  "offensive-security-brasov": {
    heading: "Offensive security as the umbrella term",
    text: "Offensive Security Brașov covers pentesting, ethical hacking, and red team style work under one professional identity based in Brașov.",
    points: [
      "One named operator",
      "Multi-discipline offensive coverage",
      "Practical remediation bias",
      "Local presence with EU remote reach",
    ],
  },
  "security-testing-brasov": {
    heading: "Security testing without vague buzzwords",
    text: "Security testing Brașov means hands-on penetration testing with reproduction steps. If you searched this phrase, you want proof, not a dashboard screenshot.",
    points: [
      "Application and API depth",
      "Optional network and identity expansion",
      "Report engineers can run with",
      "Mapped to Brașov buyers and Romanian teams",
    ],
  },
  "ethical-hacking-romania": {
    heading: "Ethical hacking across Romania",
    text: "Ethical hacking Romania is the public phrase for authorized offensive assessments nationwide. Same rigor as formal penetration testing.",
    points: [
      "Legal, scoped, evidenced",
      "Good fit for mixed EN/RO stakeholders",
      "Remote standard, on-site in Romania when useful",
      "Clear person vs company routing to Kiwi",
    ],
  },
  "testare-securitate-brasov": {
    heading: "Testare de securitate, nu scaner gol",
    text: "Pagina RO pentru testare de securitate în Brașov. Accent pe test de penetrare cu dovezi, PoC și remediere, în limba pe care o folosesc echipele locale.",
    points: [
      "Comunicare în română sau engleză",
      "Findings validate, nu doar alerte",
      "Potrivit pentru IMM și product teams",
      "Legături clare către paginile EN echivalente",
    ],
  },
  "ethical-hacking-brasov-ro": {
    heading: "Ethical hacking în Brașov (RO)",
    text: "Varianta română pentru căutările ethical hacking Brașov. Explică serviciul ofensiv autorizat fără confuzie cu alte tipuri de evaluări reglementate.",
    points: [
      "Scope scris obligatoriu",
      "Simulare ofensivă cu impact de business",
      "Raport acționabil",
      "Același expert ca pe paginile EN",
    ],
  },
  "pentester-romania-ro": {
    heading: "Pentester România (intent național)",
    text: "Pentru căutări pentester România. Acoperire națională, bază în Brașov, livrare remote pentru București, Cluj, Timișoara și restul țării.",
    points: [
      "Raport RO/EN",
      "Focus pe exploatare reală",
      "Diferențiere față de brandul Kiwi",
      "CTA direct pe email personal",
    ],
  },
  "penetration-testing-brasov": {
    heading: "Service landing: pentesting Brașov",
    text: "Commercial service URL for teams comparing vendors. Emphasizes process, deliverables, and local Brașov context.",
    points: [
      "Full engagement process listed",
      "Who-for bullets for local SMEs and product teams",
      "FAQ for hiring friction",
      "Internal links to exact-match keyword URLs",
    ],
  },
  "penetration-testing-romania": {
    heading: "Service landing: Romania pentesting",
    text: "Country service page for Romania-wide commercial intent, separate from Brașov-only keyword URLs.",
    points: [
      "National delivery story",
      "Bilingual stakeholder support",
      "Process and FAQ for Romania buyers",
      "Links out to city/country location pages",
    ],
  },
  "pentesting-brasov": {
    heading: "Test de penetrare Brașov (RO principal)",
    text: "Pagina română principală pentru test de penetrare. Scrisă pentru cumpărători locali, nu ca traducere mecanică a homepage-ului EN.",
    points: [
      "Limbaj de business local",
      "Proces clar în 4 pași",
      "FAQ pe intenție de cumpărare",
      "Fără termeni interziși de tip audit",
    ],
  },
};
