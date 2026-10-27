---
title: "Ghid practic: securitate AWS și Azure înainte de un pentest"
date: "2026-10-24"
excerpt: "Checklist ofensiv pentru AWS și Azure: IAM, storage public, secrete, logging. Ce să repari înainte să angajezi un pentester."
tags: ["AWS","Azure","Cloud Security","Ghid"]
readTime: "10 min read"
cover: "/images/blog/ghid-securitate-aws-azure.png"
---

Căutările de tip **ghid implementare securitate AWS Azure** vin de la echipe care vor să reducă zgomotul înainte de un cloud pentest. Mai jos: controalele pe care le verific primul pe engagement-uri, din Brașov, pe medii reale.

Sunt **Petre Radu Cătălin**, penetration tester. Nu e un ghid de certificare. E lista scurtă care previne finding-urile „ieftine” și lasă timpul de test pe probleme grele.

## Principiul comun AWS + Azure

Cloud-ul securizează platforma. Tu securizezi **identitatea, datele și expunerea**. Cele mai multe compromiteri pe care le reproduc nu sparg hypervisorul; abuzează de IAM și de storage lăsat public.

## AWS: ce repari înainte de pentest

1. **S3 / storage**
   - fără `PublicAccess` nedorit
   - Block Public Access la nivel de cont unde e posibil
   - politici care neagă anonim pe bucket-uri sensibile
2. **IAM**
   - fără `AdministratorAccess` pe roluri de instanță / Lambda „temporare”
   - fără access keys pe useri umani (preferă SSO / roles)
   - trust policies stricte pe roluri cross-account
3. **Secrete**
   - fără chei în repo, user-data, imagini AMI
   - Secrets Manager / SSM, rotație
4. **Security groups**
   - 0.0.0.0/0 doar unde e necesar (ideal în spatele WAF / ALB)
5. **Logging**
   - CloudTrail activ, loguri imutabile pe un cont dedicat

## Azure: echivalentele pe care le ratează echipele

1. **Blob / Storage Account**
   - containere private by default
   - SAS tokens cu TTL scurt și permisiuni minime
2. **Entra ID / IAM**
   - roluri Privileged cât mai puține
   - Managed Identity în loc de secrete în App Settings
   - Conditional Access pe conturi admin
3. **Key Vault**
   - acces pe RBAC, nu pe chei împrăștiate în pipelines
4. **NSG / expunere**
   - management ports închise din internet
5. **Activity Log / Defender**
   - semnale pe schimbări IAM și pe storage public

## Ce testez eu ulterior (validare ofensivă)

- enumerație de storage public și artefacte cu secrete
- escalate din roluri over-permissive
- SSRF către metadata endpoints unde aplicația permite
- abuz de CI/CD tokens găsite în pipeline logs

Un checklist CIS fără exploatare nu înlocuiește asta. Pentru engagement, vezi [services / Romania](/services/penetration-testing-romania/) sau contactează-mă direct.

## Mini-checklist înainte să mă suni

- [ ] storage public inventariat
- [ ] access keys vechi rotate / șterse
- [ ] roluri admin pe workload-uri eliminate
- [ ] logging pornit
- [ ] staging asemănător producției pentru test

## Contact

**hello@petreraducatalin.com** — menționează AWS, Azure sau ambele, și dacă vrei doar config review cu validare sau și aplicația care rulează pe cloud.
