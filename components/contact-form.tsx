"use client";

import { useId, useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const labelClass =
  "font-mono text-[11px] uppercase leading-none tracking-[0.16em] text-muted";

const inputClass =
  "flex h-11 w-full rounded-none border-0 border-b border-input bg-transparent px-0 py-2 text-base text-ink ring-offset-background transition-colors placeholder:text-muted/60 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50";

const textareaClass =
  "flex min-h-[140px] w-full resize-y rounded-none border-0 border-b border-input bg-transparent px-0 py-2 text-base text-ink ring-offset-background transition-colors placeholder:text-muted/60 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50";

/**
 * Contact form.
 *
 * Validation is native (`required`, `type="email"`, `minLength`) and the form
 * has a working `mailto:` action, so it degrades gracefully without JS. The
 * submit handler only builds a nicer pre-filled message; nothing is sent or
 * stored by the site.
 *
 * This deliberately avoids react-hook-form/zod: the form is four fields and a
 * mailto handoff, and the library cost more JS than the whole rest of the page.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const id = useId();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const subject = encodeURIComponent(
      `[Portfolio] ${String(data.get("subject") ?? "")}`
    );
    const body = encodeURIComponent(
      `Name: ${String(data.get("name") ?? "")}\nEmail: ${String(
        data.get("email") ?? ""
      )}\n\n${String(data.get("message") ?? "")}`
    );

    window.location.assign(
      `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    );
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex min-h-[360px] flex-col items-center justify-center gap-4 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent" aria-hidden="true" />
        <h3 className="font-serif text-2xl text-ink">Request prepared</h3>
        <p className="max-w-sm text-sm leading-relaxed text-body">
          Your email client should open with the message pre-filled. If it did
          not, write to me directly at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-accent underline underline-offset-4"
          >
            {siteConfig.email}
          </a>
          .
        </p>
        <Button variant="outline" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      action={`mailto:${siteConfig.email}`}
      method="post"
      encType="text/plain"
      onSubmit={onSubmit}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor={`${id}-name`} className={labelClass}>
            Name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            required
            minLength={2}
            autoComplete="name"
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor={`${id}-subject`} className={labelClass}>
          Subject
        </label>
        <input
          id={`${id}-subject`}
          name="subject"
          required
          minLength={3}
          placeholder="Penetration test for our SaaS platform"
          className={inputClass}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor={`${id}-message`} className={labelClass}>
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          minLength={10}
          placeholder="Tell me about your engagement — scope, timeline, and what you're protecting."
          className={textareaClass}
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        <Send className="h-4 w-4" aria-hidden="true" />
        Send message
      </Button>

      <p className="text-center font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
        Requests open your email client — no data is stored on this site.
      </p>
    </form>
  );
}
