---
title: "Cum se repară vulnerabilități IDOR și XSS (ghid practic)"
date: "2026-10-22"
excerpt: "Pași concreți pentru a remedia IDOR (Broken Object Level Authorization) și XSS după un pentest: cauze, fix-uri și cum verifici că riscul e închis."
tags: ["IDOR","XSS","Remediere","Application Security"]
readTime: "9 min read"
cover: "/images/blog/reparare-vulnerabilitati-idor-xss.png"
---

După un test de penetrare, cele mai frecvente finding-uri pe aplicații web din România rămân **IDOR** (acces la obiectele altui user) și **XSS** (execuție de script în browserul victimei). Mai jos: cum le repari fără teatru, din perspectiva unui pentester.

Sunt **Petre Radu Cătălin**, penetration tester din Brașov. Am văzut aceleași clase de bug-uri pe SaaS, portaluri B2B și magazine online.

## IDOR / BOLA: problema e autorizarea, nu „ID-ul urât”

### Ce înseamnă

Poți citi sau modifica resursa `/orders/12345` deși comanda aparține altui cont. ID-ul poate fi numeric, UUID sau slug. Problema nu e predictibilitatea; e lipsa verificării „userul curent are dreptul pe acest obiect?”.

### Cum repari

1. **Autorizează pe server, pe fiecare request.** Nu te baza pe ascunderea ID-ului în UI.
2. **Leagă obiectul de tenant / owner** în query (ex: `WHERE id = ? AND org_id = ?`).
3. **Centralizează check-ul** (policy middleware / service), ca să nu ratezi un endpoint.
4. **Testează cu două conturi** pe fiecare resursă sensibilă (comenzi, facturi, documente, admin actions).
5. **Loghează denied access** pe resurse critice.

### Cum verifici închiderea

Creează două useri. Cu tokenul lui A, încearcă obiectele lui B. Trebuie 403/404 consistent, pe REST și pe GraphQL.

Pentru un engagement dedicat pe API, vezi [verificare vulnerabilități API](/ro/verificare-vulnerabilitati-api/).

## XSS: tratează output-ul ca pe date, nu ca pe HTML

### Tipuri pe care le văd des

- **Reflected**: parametru din URL greșit ecouat
- **Stored**: comentarii, nume fișiere, câmpuri profil
- **DOM**: `innerHTML` / sink-uri din JS pe date nesigure

### Cum repari

1. **Escape pe context** (HTML body, attribute, JS, URL). Framework-urile moderne ajută dacă nu ocolești cu `dangerouslySetInnerHTML` / `v-html` fără sanitizare.
2. **Sanitize HTML** doar dacă trebuie rich text; folosește o bibliotecă menținută și allowlist de tag-uri.
3. **CSP** ca strat de apărare, nu ca singurul control.
4. **Cookie-uri de sesiune** cu `HttpOnly`, `Secure`, `SameSite` potrivit.
5. **Nu încredere în „am filtrat `<script>`”** cu regex; atacatorii ocolesc filtre naive.

### Cum verifici

Re-testează payload-urile din raportul de pentest. Adaugă teste automate pe sink-urile cunoscute. Cere **re-test** pe critice.

## Ordinea de remediere pe care o recomand

1. AuthZ pe obiecte (IDOR) pe date financiare / PII
2. Stored XSS pe zone văzute de admin / alți useri
3. Reflected XSS pe fluxuri autentificate
4. Hardening (headers, CSP, cookie flags)

## Vrei validare independentă?

Dacă ai nevoie de [testare securitate aplicație web](/ro/testare-securitate-aplicatie-web/) sau de un re-test după fixuri, scrie la **hello@petreraducatalin.com**.
