/**
 * Page-specific angle blocks for the keyword landings.
 *
 * Every landing shares the same process, deliverables, and FAQ structure, so
 * each one gets a short block that answers the question implied by its own
 * search phrasing. Written for the reader, not about the page: no "this page
 * targets ..." copy, because visitors are the audience and search engines read
 * the same text.
 */
export type LandingAngle = {
  heading: string;
  text: string;
  points: string[];
};

export const landingAngles: Record<string, LandingAngle> = {
  "pentester-brasov": {
    heading: "A named tester, not a platform",
    text: "Most people searching for a pentester in Brașov want a person they can name in a questionnaire and speak to directly. That is what this is: Petre Radu Cătălin, Brașov-based, running the engagement end to end.",
    points: [
      "The person who tests is the person you talk to",
      "Manual validation before any finding is reported",
      "Optional on-site kickoff in Brașov",
      "Clear split from Kiwi Defence company engagements",
    ],
  },
  "penetration-tester-brasov": {
    heading: "Built for procurement and security reviews",
    text: "A formal penetration test comes with written authorization, evidence, and a remediation order your team can follow. This is the engagement shape that procurement and customer security questionnaires expect.",
    points: [
      "Written authorization before any testing starts",
      "Executive summary plus engineering detail",
      "Web, API, Active Directory, and cloud scope",
      "Re-test path for critical fixes",
    ],
  },
  "ethical-hacker-brasov": {
    heading: "Authorized testing, whatever the search term",
    text: "“Ethical hacker” is how many local businesses still describe the work. The standard is the same as any professional penetration test: agreed scope, legal cover, evidence, and fix guidance.",
    points: [
      "Only targets you have authorized in writing",
      "Attacker mindset, business-impact language",
      "Written for non-technical decision makers too",
      "Stakeholder conversations in English or Romanian",
    ],
  },
  "pentester-romania": {
    heading: "Nationwide delivery, Brașov home base",
    text: "Most Romania-wide engagements run remote, from București and Cluj-Napoca to Timișoara and Iași, with Brașov as the operating base and on-site days when the scope calls for them.",
    points: [
      "Romanian timezone collaboration",
      "Bilingual reporting when needed",
      "Same methodology in every city",
      "Separate from the Brașov-only engagement page",
    ],
  },
  "penetration-tester-romania": {
    heading: "A scoped proposal for Romanian organizations",
    text: "For buyers who need a formal penetration test proposal for a Romanian entity: defined scope, timeline, deliverables, and the authorization paperwork that goes with it.",
    points: [
      "Evidence suitable for partner and customer reviews",
      "Focus on exploitable risk, not scanner noise",
      "Remote delivery across the EU",
      "Complements the city pages rather than repeating them",
    ],
  },
  "red-team-brasov": {
    heading: "Adversary-style testing for Brașov teams",
    text: "A red team engagement goes past a single-application checklist: it follows paths between systems, identities, and trust relationships the way an attacker would.",
    points: [
      "Path thinking toward the assets that matter",
      "Identity and lateral movement when in scope",
      "Detection conversation after the findings",
      "Different from a web-only penetration test",
    ],
  },
  "red-team-romania": {
    heading: "Red team work across Romania",
    text: "Country-level red team engagements for security and engineering leads who already know that scanner output is not the whole picture.",
    points: [
      "Nationwide remote delivery",
      "Scoped intensity and safety limits",
      "Useful after a first pentest cycle",
      "Pairs with a continuous programme when needed",
    ],
  },
  "offensive-security-brasov": {
    heading: "One operator across the offensive disciplines",
    text: "Penetration testing, ethical hacking, and red team style work under one professional identity based in Brașov, so context from one engagement carries into the next.",
    points: [
      "One named operator, start to finish",
      "Web, API, identity, network, and cloud coverage",
      "Remediation guidance engineers can act on",
      "Local presence with EU-wide remote reach",
    ],
  },
  "security-testing-brasov": {
    heading: "Proof, not a dashboard screenshot",
    text: "Security testing here means hands-on penetration testing with reproduction steps. Every finding arrives with the request, the evidence, and the fix.",
    points: [
      "Application and API depth",
      "Optional network and identity expansion",
      "A report engineers can run with",
      "Written for Brașov teams and Romanian organizations",
    ],
  },
  "ethical-hacking-romania": {
    heading: "Authorized offensive testing nationwide",
    text: "Ethical hacking is the public phrase for authorized offensive assessments. The work behind it is a scoped penetration test with legal cover and evidence.",
    points: [
      "Legal, scoped, and evidenced",
      "Works for mixed English and Romanian stakeholders",
      "Remote by default, on-site in Romania when useful",
      "Clear routing between personal and Kiwi Defence engagements",
    ],
  },
  "testare-securitate-brasov": {
    heading: "Testare de securitate cu dovezi, nu alerte",
    text: "Test de penetrare pentru echipe din Brașov: scope agreat, exploatare validată și un raport cu pași de remediere, în limba în care lucrează echipa ta.",
    points: [
      "Comunicare în română sau engleză",
      "Findings validate cu PoC, nu doar alerte",
      "Potrivit pentru IMM-uri și echipe de produs",
      "Legături către paginile echivalente în engleză",
    ],
  },
  "ethical-hacking-brasov-ro": {
    heading: "Hacking etic, în limite legale clare",
    text: "Simulare ofensivă autorizată pentru organizații din Brașov, cu scope scris înainte de orice testare și un raport orientat pe impactul de business.",
    points: [
      "Scope scris, obligatoriu, înainte de start",
      "Exploatare demonstrată, nu presupuneri",
      "Raport pe care echipa îl poate pune în practică",
      "Același expert ca pe paginile în engleză",
    ],
  },
  "pentester-romania-ro": {
    heading: "Acoperire națională, bază în Brașov",
    text: "Livrare remote pentru București, Cluj-Napoca, Timișoara și restul țării, cu deplasări la fața locului când scope-ul o cere.",
    points: [
      "Raport în română sau engleză",
      "Focus pe exploatare reală",
      "Colaborare în fusul orar românesc",
      "Contact direct pe email, fără intermediari",
    ],
  },
  "penetration-testing-brasov": {
    heading: "How a Brașov engagement runs",
    text: "Scoping call, written authorization, testing window, then a report with evidence and a remediation order. On-site kickoff is available locally; the rest runs remote.",
    points: [
      "Fixed scope, timeline, and deliverables before kickoff",
      "Written for local SMEs and product teams",
      "FAQ covering the usual procurement questions",
      "Optional re-test once fixes are in",
    ],
  },
  "penetration-testing-romania": {
    heading: "Romania-wide engagements, same process",
    text: "The country-level service page: identical methodology and deliverables, delivered remote to organizations anywhere in Romania, with bilingual stakeholder support.",
    points: [
      "National delivery in the Romanian timezone",
      "Bilingual reporting and calls",
      "Same process and FAQ as the Brașov engagement",
      "Links to the city and country location pages",
    ],
  },
  "pentesting-brasov": {
    heading: "Cum se desfășoară un test de penetrare",
    text: "Discuție de scope, autorizare scrisă, fereastră de testare, apoi raport cu dovezi și ordinea remedierilor. La final știi exact ce s-a testat, cât a durat și ce ai de făcut.",
    points: [
      "Limbaj de business, nu jargon",
      "Proces clar, în patru pași",
      "FAQ pe întrebările reale de dinainte de achiziție",
      "Fără termeni reglementați folosiți greșit",
    ],
  },
};
