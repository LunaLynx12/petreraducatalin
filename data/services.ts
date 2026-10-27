export type ServiceFaq = { question: string; answer: string };

export type ServicePageContent = {
  slug: string;
  path: string;
  lang: "en" | "ro";
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h1Accent: string;
  intro: string;
  whoForHeading: string;
  whoFor: string[];
  whatHeading: string;
  whatItems: { title: string; text: string }[];
  processHeading: string;
  processSteps: { title: string; text: string }[];
  methodologyHeading?: string;
  methodologyText?: string;
  methodologyPoints?: string[];
  pricingHeading?: string;
  pricingText?: string;
  localHeading: string;
  localText: string;
  faqHeading: string;
  faqs: ServiceFaq[];
  ctaHeading: string;
  ctaText: string;
  ctaLabel: string;
  relatedLabel: string;
  related: { label: string; href: string }[];
};

export const brasovService: ServicePageContent = {
  slug: "penetration-testing-brasov",
  path: "/services/penetration-testing-brasov/",
  lang: "en",
  title: "Penetration Testing Brașov",
  metaTitle: "Penetration Tester Brașov | Pentester Brașov | Petre Radu",
  metaDescription:
    "Hire a penetration tester in Brașov. Petre Radu Cătălin delivers web, API, network, Active Directory, and cloud pentesting for companies in Brașov and across Romania.",
  h1: "Penetration Tester",
  h1Accent: "Brașov",
  intro:
    "Looking for a pentester in Brașov? I am Petre Radu Cătălin, a penetration tester based in Brașov, Romania. I run practical offensive assessments on web apps, APIs, networks, Active Directory, and cloud environments, then turn findings into clear remediation steps your team can ship.",
  whoForHeading: "Who this is for",
  whoFor: [
    "Product and engineering teams in Brașov that need a real penetration test, not a scanner dump",
    "SMEs preparing for customer security questionnaires, partner reviews, or NIS2 readiness themes",
    "Startups that want a named penetration tester Brașov clients can trust for web and API work",
    "IT leaders who need on-site or remote pentesting with Romanian and English reporting",
  ],
  whatHeading: "What I test",
  whatItems: [
    {
      title: "Web & API penetration testing",
      text: "OWASP-aligned testing for authentication, authorization, injection, business logic, and API abuse paths that scanners miss.",
    },
    {
      title: "Network & infrastructure",
      text: "External and internal network reviews focused on exploitable services, weak configurations, and paths to sensitive systems.",
    },
    {
      title: "Active Directory",
      text: "Identity-focused assessments covering privilege escalation, lateral movement, and realistic domain compromise chains.",
    },
    {
      title: "Cloud & AI security",
      text: "AWS, Azure, and GCP misconfiguration hunting, plus offensive evaluation of LLM-backed applications where relevant.",
    },
  ],
  processHeading: "Engagement process",
  processSteps: [
    {
      title: "Scope & rules of engagement",
      text: "We agree targets, intensity, out-of-scope systems, and communication channels before any testing starts.",
    },
    {
      title: "Hands-on assessment",
      text: "Manual testing first, automation where it helps. Every finding is validated for real exploitability.",
    },
    {
      title: "Clear reporting",
      text: "Executive summary for leadership, technical detail for engineers, severity rationale, and reproduction steps.",
    },
    {
      title: "Remediation support",
      text: "I stay available to clarify fixes and can re-test after patches so risk can be closed properly.",
    },
  ],
  methodologyHeading: "Methodology and delivery standard",
  methodologyText:
    "Engagements follow recognized offensive-security practice, not a scanner export. Scope is written first. Testing is manual-first, with automation for coverage. Findings are validated for exploitability before they enter the report.",
  methodologyPoints: [
    "OWASP Top 10 / WSTG for web and API surfaces",
    "PTES-aligned phases: scoping, recon, exploitation, post-exploitation, reporting",
    "MITRE ATT&CK mapping when identity or red-team style paths matter",
    "Deliverables: executive summary, technical evidence, remediation order, optional re-test",
  ],
  pricingHeading: "Pricing signals (orientation, not a public rate card)",
  pricingText:
    "Price follows attack surface and depth: focused web/API assessments cost less than combined web + Active Directory or red-team style work. Romanian and EU remote delivery is standard. Ask for a scoped quote with assets and timeline. Searches like pret test de penetrare or firme pentesting Romania usually need that scoped proposal, not a fixed homepage number.",
  localHeading: "Why a Brașov-based pentester",
  localText:
    "I live and work in Brașov. That means timezone overlap with Romanian teams, optional on-site kickoffs, and context for local business and university ecosystems around Universitatea Transilvania din Brașov. Remote engagements across Romania and the EU are available too. If you searched for pentesting Brașov, penetration tester Brașov, or pentester Brașov, this page is the direct offer.",
  faqHeading: "FAQ: pentesting in Brașov",
  faqs: [
    {
      question: "Who is a penetration tester in Brașov?",
      answer:
        "Petre Radu Cătălin is a penetration tester based in Brașov, Romania. He works as a Penetration Tester at NTT DATA and offers solo or team-led assessments for web, infrastructure, Active Directory, cloud, and AI systems.",
    },
    {
      question: "Do you work only with companies in Brașov?",
      answer:
        "No. Brașov is the home base. Engagements run for clients across Romania and remotely for EU teams. On-site work in Brașov and nearby cities is available when it helps.",
    },
    {
      question: "What should I prepare before a pentest?",
      answer:
        "A short list of in-scope assets, test accounts if needed, a technical contact, and written authorization. I help you shape that scope so the engagement stays focused.",
    },
    {
      question: "How is this different from a vulnerability scan?",
      answer:
        "Scanners list potential issues. A penetration test validates what an attacker can actually exploit, chains weaknesses together, and explains business risk with evidence.",
    },
  ],
  ctaHeading: "Book a pentest in Brașov",
  ctaText:
    "Tell me about your application or network and I will reply with a scoped recommendation. Available for remote and on-site work from Brașov, Romania.",
  ctaLabel: "Contact Petre Radu",
  relatedLabel: "Related pages",
  related: [
    {
      label: "Penetration Tester Romania",
      href: "/services/penetration-testing-romania/",
    },
    { label: "Test de penetrare Brașov (RO)", href: "/ro/pentesting-brasov/" },
    { label: "About Petre Radu Cătălin", href: "/about/" },
  ],
};

export const romaniaService: ServicePageContent = {
  slug: "penetration-testing-romania",
  path: "/services/penetration-testing-romania/",
  lang: "en",
  title: "Penetration Testing Romania",
  metaTitle: "Pentester Romania | Penetration Tester Romania | Petre Radu",
  metaDescription:
    "Pentester Romania: Petre Radu Cătălin delivers penetration testing for Romanian companies. Web, API, AD, cloud, and red team assessments with clear remediation.",
  h1: "Pentester",
  h1Accent: "Romania",
  intro:
    "Need a penetration tester in Romania? I am Petre Radu Cătălin, an offensive security professional based in Brașov who works with teams nationwide. I focus on exploitable findings, practical reporting, and remediation support for Romanian product, IT, and security teams.",
  whoForHeading: "Built for Romanian teams",
  whoFor: [
    "Companies in Romania that need an independent penetration tester for web, API, or infrastructure",
    "Organizations preparing evidence for customers, partners, or regulatory expectations including NIS2 themes",
    "Security and engineering leads who want Romanian timezone collaboration and bilingual communication",
    "Teams that prefer a named expert rather than an anonymous scanner report",
  ],
  whatHeading: "Services across Romania",
  whatItems: [
    {
      title: "Application security assessments",
      text: "Deep web and API penetration testing aligned to how modern Romanian products actually ship and authenticate users.",
    },
    {
      title: "Infrastructure & AD testing",
      text: "External perimeter, internal network, and Active Directory assessments that show realistic attack paths.",
    },
    {
      title: "Cloud security reviews",
      text: "Hands-on review of AWS, Azure, and GCP configurations that create real exposure in production.",
    },
    {
      title: "Reporting leadership can use",
      text: "Findings written for both executives and engineers, with severity that reflects exploitability, not noise.",
    },
  ],
  processHeading: "How Romanian engagements run",
  processSteps: [
    {
      title: "Discovery call",
      text: "We map business risk, technical surface, and deadlines so the test matches what matters.",
    },
    {
      title: "Authorized testing",
      text: "Written scope, controlled intensity, and continuous updates if critical issues appear mid-engagement.",
    },
    {
      title: "Evidence-backed report",
      text: "Reproduction steps, impact narrative, and prioritized fixes your developers can action.",
    },
    {
      title: "Optional re-test",
      text: "After remediation, I verify closures so your risk register stays honest.",
    },
  ],
  methodologyHeading: "How Romania engagements are run",
  methodologyText:
    "Same standard as Brașov work: written scope, manual-first testing, validated findings, bilingual reporting when stakeholders need it.",
  methodologyPoints: [
    "OWASP-aligned application testing",
    "Infrastructure and Active Directory paths when scoped",
    "Clear severity tied to exploitability",
    "Optional re-test after remediation",
  ],
  pricingHeading: "What drives pret test de penetrare in Romania",
  pricingText:
    "Commercial searches for firme pentesting Romania or pret test de penetrare depend on surface size, environments, identity scope, and report language. I quote after a short discovery call so you compare apples to apples against other Romanian providers.",
  localHeading: "A Romania-based penetration tester",
  localText:
    "Romania has strong engineering talent and growing regulatory pressure. Buyers searching for pentester Romania or penetration tester Romania usually want someone who understands local delivery culture, can work in English or Romanian, and can explain risk without theatre. That is the offer here: practical offensive testing from Brașov, available remotely across the country.",
  faqHeading: "FAQ: penetration tester Romania",
  faqs: [
    {
      question: "Are you available for clients outside Brașov?",
      answer:
        "Yes. Most Romania-wide work is remote. On-site kickoffs or workshops can be arranged when useful.",
    },
    {
      question: "Can reports be delivered in Romanian?",
      answer:
        "Yes. Engagements can run in English or Romanian depending on your stakeholders. Mixed reporting is common for international product teams in Romania.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "Software product companies, IT services, and organizations that need evidence-based security testing before enterprise sales, partner reviews, or major releases.",
    },
    {
      question: "How do I hire a pentester in Romania?",
      answer:
        "Share your assets, timeline, and goals. I return a scoped proposal with approach, duration, and deliverables. Start from the contact form on this site.",
    },
  ],
  ctaHeading: "Talk to a pentester in Romania",
  ctaText:
    "Describe your environment and timeline. I will come back with a focused penetration testing plan for your Romanian team.",
  ctaLabel: "Start the conversation",
  relatedLabel: "Related pages",
  related: [
    {
      label: "Penetration Tester Brașov",
      href: "/services/penetration-testing-brasov/",
    },
    { label: "Test de penetrare Brașov (RO)", href: "/ro/pentesting-brasov/" },
    { label: "Blog", href: "/blog/" },
  ],
};

export const brasovServiceRo: ServicePageContent = {
  slug: "pentesting-brasov",
  path: "/ro/pentesting-brasov/",
  lang: "ro",
  title: "Test de penetrare Brașov",
  metaTitle:
    "Test de penetrare Brașov | Pentester Brașov | Petre Radu Cătălin",
    metaDescription:
      "Cauți pentester în Brașov? Petre Radu Cătălin oferă test de penetrare, testare de securitate pe web, rețea, Active Directory și cloud pentru companii din Brașov și România.",
  h1: "Test de penetrare",
  h1Accent: "Brașov",
  intro:
    "Cauți un pentester în Brașov sau testare de securitate pentru aplicația ta? Sunt Petre Radu Cătălin, specialist în testare ofensivă din Brașov, România. Fac teste de penetrare pe web, API, rețea, Active Directory și cloud, apoi livrez un raport clar, cu pași concreți de remediere.",
  whoForHeading: "Pentru cine este serviciul",
  whoFor: [
    "Companii din Brașov care au nevoie de un test de penetrare real, nu doar un scan automat",
    "Echipe de produs care pregătesc chestionare de securitate, review-uri de parteneri sau teme tip NIS2",
    "Startup-uri și IMM-uri care vor un pentester din Brașov cu comunicare clară în română sau engleză",
    "Responsabili IT care compară firme de pentesting din România și vor un expert nominalizat",
  ],
  whatHeading: "Ce include evaluarea",
  whatItems: [
    {
      title: "Testare aplicații web și API",
      text: "Acoperire OWASP, autentificare, autorizare, injectări, logică de business și abuzuri pe API pe care scanerele le ratează.",
    },
    {
      title: "Rețea și infrastructură",
      text: "Evaluare perimetru extern și mediu intern, cu focus pe servicii exploatabile și configurații slabe.",
    },
    {
      title: "Active Directory",
      text: "Analiză pe identitate, escaladare de privilegii, mișcare laterală și lanțuri realiste de compromitere.",
    },
    {
      title: "Cloud și securitate AI",
      text: "Căutare de misconfigurări AWS, Azure, GCP și evaluări ofensive pentru aplicații bazate pe LLM, acolo unde e cazul.",
    },
  ],
  processHeading: "Cum decurge colaborarea",
  processSteps: [
    {
      title: "Definirea scopului",
      text: "Stabilim țintele, limitele, intensitatea și canalele de comunicare înainte de orice test.",
    },
    {
      title: "Testare practică",
      text: "Prioritizez testarea manuală. Automatizarea ajută la acoperire, dar fiecare finding este validat.",
    },
    {
      title: "Raport acționabil",
      text: "Sumar pentru management, detalii tehnice pentru ingineri, severitate justificată și pași de reproducere.",
    },
    {
      title: "Suport la remediere",
      text: "Rămân disponibil pentru clarificări și pot re-testa după fixuri, ca riscul să fie închis corect.",
    },
  ],
  methodologyHeading: "Metodologie și standarde de livrare",
  methodologyText:
    "Lucrez după practici recunoscute de securitate ofensivă. Nu livrezi un export de scaner. Fiecare finding trece prin validare de exploatare înainte să apară în raport.",
  methodologyPoints: [
    "OWASP Top 10 / WSTG pentru web și API",
    "Faze aliniate PTES: scope, recon, exploatare, post-exploatare, raportare",
    "Mapare MITRE ATT&CK când apar căi pe identitate sau red team",
    "Livrabile: sumar executiv, dovezi tehnice, ordine de remediere, re-test opțional",
  ],
  pricingHeading: "Orientare de preț pentru test de penetrare",
  pricingText:
    "Prețul depinde de suprafața de atac și de adâncime. Un test web/API concentrat costă mai puțin decât o combinație web + Active Directory sau un engagement tip red team. Pentru căutări precum pret test de penetrare sau firme pentesting România, trimit o ofertă pe scope după o discuție scurtă. Nu public un preț fix pe site, ca să nu compari greșit cu oferte incomplete.",
  localHeading: "De ce un pentester din Brașov",
  localText:
    "Lucrez din Brașov. Asta înseamnă același fus orar cu echipele din România, posibilitate de întâlniri on-site și context local pentru mediul de business și academic din jurul Universității Transilvania din Brașov. Dacă ai căutat test de penetrare Brașov, testare de securitate Brașov, ethical hacking Brașov sau pentester Brașov, aici găsești oferta directă.",
  faqHeading: "Întrebări frecvente",
  faqs: [
    {
      question: "Cine oferă test de penetrare în Brașov?",
      answer:
        "Petre Radu Cătălin este specialist în testare ofensivă din Brașov, România. Lucrează ca Penetration Tester la NTT DATA și oferă evaluări solo sau împreună cu specialiști de încredere pentru web, infrastructură, Active Directory, cloud și AI.",
    },
    {
      question: "Lucrezi doar cu firme din Brașov?",
      answer:
        "Nu. Brașovul este baza. Colaborez cu clienți din toată România și remote în UE. Pentru Brașov pot lucra și on-site când ajută.",
    },
    {
      question: "Cum se stabilește prețul unui test de penetrare?",
      answer:
        "În funcție de numărul de aplicații, medii, conturi, includerea Active Directory/cloud și limba raportului. Primești o ofertă pe scope, nu un preț generic.",
    },
    {
      question: "Cu ce diferă de un scan de vulnerabilități?",
      answer:
        "Scanul listează posibile probleme. Testul de penetrare arată ce poate exploata un atacator, leagă vulnerabilitățile în lanțuri și explică riscul de business cu dovezi.",
    },
  ],
  ctaHeading: "Solicită un test de penetrare în Brașov",
  ctaText:
    "Spune-mi pe scurt despre aplicație sau rețea și revin cu o recomandare de scope. Disponibil remote și on-site din Brașov, România.",
  ctaLabel: "Contactează-mă",
  relatedLabel: "Pagini conexe",
  related: [
    {
      label: "Testare de securitate Brașov",
      href: "/ro/testare-securitate-brasov/",
    },
    {
      label: "Pentester România",
      href: "/ro/pentester-romania/",
    },
    {
      label: "Versiune EN",
      href: "/services/penetration-testing-brasov/",
    },
  ],
};

export const allServicePages = [
  brasovService,
  romaniaService,
  brasovServiceRo,
] as const;
