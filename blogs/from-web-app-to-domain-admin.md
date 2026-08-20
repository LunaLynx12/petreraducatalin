---
title: "From Web App to Domain Admin: A Red Team Playbook"
date: "2026-05-18"
excerpt: "A practical, phase-by-phase breakdown of how a single web application flaw can be chained into full Active Directory compromise - and the detection gaps that let it happen."
tags: ["Penetration Testing","Red Team","Active Directory","CTF Writeups"]
readTime: "9 min read"
cover: "/images/blog/domain-admin.svg"
---

Every red team engagement I run starts the same way: pick the softest edge, earn a foothold, then crawl toward the domain. As **Petre Radu Cătălin**, a penetration tester at NTT DATA, I have spent the last two years turning that crawl into a repeatable, documented discipline. In this write-up I break down the exact playbook I use to go from a single web application finding to full domain compromise, along with the detection gaps that let attackers execute it undetected.

## The Mindset: Assume Everything Is A Chain

The most dangerous mistake a defender can make is treating vulnerabilities as isolated events. A stored XSS in a support portal and a weak service account password look unrelated on a scan report. To an operator, they are two links in one chain. Red teaming is the discipline of assembling those links in an order that a blue team did not predict.

Before writing a single exploit, I map the environment into three logical layers:

1. **The Edge** - public-facing applications, VPNs, and mail systems.
2. **The Identity Plane** - Active Directory, sync services, and identity providers.
3. **The Crown Jewels** - domain controllers, backup systems, and privileged accounts.

The playbook below moves through each layer, and I describe the control failures that make each step possible.

## Phase 1 - Foothold: Turning A Web Flaw Into Code Execution

### The Initial Entry

For this scenario, the engagement starts with a classic finding: an unauthenticated arbitrary file upload in a legacy customer portal. The upload page validates file extensions but does not validate content. In a modern stack, I upload a small PHP or JSP payload that executes a blind command - nothing more. I run *whoami*, enumerate the machine, and immediately dump the process list for credential material.

The key discipline here is restraint. I never deploy a full beacon on the first command. Loud actions in the first ten minutes of an engagement are how operators get caught. I land, verify command execution, and then go quiet for a full enumeration pass.

### Privilege Escalation At The Edge

On the compromised host I hunt for the usual suspects: scheduled tasks, writable service binaries, plaintext credentials in config files, and vulnerable local services. In this case the win comes quickly - a scheduled task runs with SYSTEM privileges and points to a script in a world-writable directory. I stage a payload, wait for the next scheduled run, and now hold SYSTEM on an edge server.

## Phase 2 - Pivoting: The Identity Plane

### BloodHound Is A Defender's Mirror

A SYSTEM shell on an edge server is a foothold, not a goal. The goal lives in Active Directory. I load BloodHound's collector and harvest LDAP data: users, groups, sessions, ACLs, and SPNs. BloodHound matters less as a tool and more as a *model* - it reveals the attack graph that week-to-week administration creates by accident.

The critical find appears quickly: a service account used by a legacy integration holds `GenericAll` over the `Domain Admins` group. This is a textbook misconfiguration born from an administrator granting "temporary" permissions years ago that nobody audited.

### The Golden Ticket Path

With `GenericAll` over a security group, I can modify the group's membership. I first test against a sacrificial group to confirm the operation is not filtered by an EDR policy change, then I add a low-privilege account I control into `Domain Admins`. The change replicates to the domain controller within seconds.

Alternatively - and more stealthily - I abuse Kerberos itself. Kerberoasting extracts service account hashes from SPNs and cracks them offline. Microsoft's MitM-style attacks, where I relay NTLM authentication from a compromised host to LDAP, require no password at all. The right technique depends on the environment's defensive posture.

## Phase 3 - Dominance: Full Chain Compromise

### DCSync And The Endgame

With membership in the privileged group, I execute a DCSync attack to replicate credentials from the domain controller. This is the moment of maximum risk and maximum reward. Every command from here on is logged, so I move deliberately: extract the krbtgt hash, forge a golden ticket, and establish persistence that survives a complete sweep.

### The Real Lesson: Kerberoast, Relay, And Everything In Between

The full chain from web app to domain admin in this engagement used only three root causes:

1. **Weak upload validation** on a legacy portal.
2. **An over-privileged service account** with a cascade of inherited rights.
3. **No alerting on privileged group membership changes.**

None of these are exotic zero-days. All three are common in medium-to-large organizations.

## What The Blue Team Could Have Caught

I write remediation guidance after every engagement, and this one contains the same five recommendations I ship most often:

- **Segment the edge from the identity plane.** The portal server should never reach LDAP directly.
- **Enforce tiered administration.** Service accounts must have the minimum privilege for exactly one task, reviewed quarterly.
- **Alert on high-risk changes.** Membership changes to privileged groups are a mandatory log source, not optional.
- **Require phishing-resistant MFA for Tier-0 accounts.** It stops the relay and pass-the-hash paths cold.
- **Test your own chains.** Run the same chaining methodology internally once per quarter and measure detection time.

## The Operator's Checklist (Reference Card)

For teammates and students I condense the playbook into a short checklist:

1. Land, verify execution, go quiet.
2. Enumerate the host before touching anything privileged.
3. Dump local credentials and service configs early.
4. Map Active Directory with BloodHound.
5. Compress the chain: target the group, not the DC.
6. Test permissions against sacrificial objects first.
7. Move to the DC only when persistence is staged.
8. Document every action with timestamps for the final report.

## Final Thoughts

A web-to-domain-admin compromise is rarely the product of a single clever exploit. I will say it plainly, because it shapes how I work: it is the product of a reliable process, patient enumeration, and control failures that existed long before the engagement started. Understanding the full chain is what separates a vulnerability scanner from an offensive security professional - and it is the muscle every defender should build too. If you are building a red team playbook of your own, start with this chain, practice it against a lab (the HTB and TryHackMe Active Directory boxes are excellent), and then apply the same discipline to your own defences before an attacker applies it to your network.
