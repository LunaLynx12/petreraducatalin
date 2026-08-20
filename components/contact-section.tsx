"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Globe, MapPin, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/site";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name (min 2 characters)."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Please add a short subject."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactValues = z.infer<typeof contactSchema>;

const contactChannels = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/petreradu", href: siteConfig.social.linkedin },
  { icon: Github, label: "GitHub", value: "LunaLynx12", href: siteConfig.social.github },
  { icon: Globe, label: "kiwidefence.com", value: "Security research & services", href: siteConfig.social.site },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(values: ContactValues) {
    const subject = encodeURIComponent(`[Portfolio] ${values.subject}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`
    );
    window.location.assign(
      `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    );
    setSent(true);
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-padding border-t border-border">
      <div className="container">
        <SectionHeading
          eyebrow="connect"
          id="contact-heading"
          title="Work with Petre Radu Cătălin"
          description="Available for remote and on-site engagements. Based in Brașov, Romania."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.3fr]">
          <Reveal>
            <div className="space-y-4">
              {contactChannels.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-xl border border-border bg-surface/70 p-4 transition-colors hover:border-primary/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
                    <p className="truncate font-mono text-sm text-foreground">{value}</p>
                  </div>
                </a>
              ))}
              <p className="flex items-center gap-2 rounded-xl border border-border bg-surface/70 p-4 font-mono text-sm text-muted">
                <MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />
                Brașov, Romania - CET (UTC+2)
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-border bg-surface/70 p-6">
              {sent ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 text-center">
                  <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
                  <h3 className="font-mono text-lg font-semibold text-primary">
                    Request prepared
                  </h3>
                  <p className="max-w-sm text-sm text-muted">
                    Your email client should open with the message pre-filled. If it
                    did not, write to me directly at{" "}
                    <a href={`mailto:${siteConfig.email}`} className="text-primary underline">
                      {siteConfig.email}
                    </a>
                    .
                  </p>
                  <Button variant="outline" onClick={() => setSent(false)}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Smith" autoComplete="name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="jane@company.com"
                                autoComplete="email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Penetration test for our SaaS platform" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your engagement - scope, timeline, and what you're protecting."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full font-mono">
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Send Message
                    </Button>
                    <p className="text-center font-mono text-[11px] text-muted">
                      Requests open the email client - no data is stored on this site.
                    </p>
                  </form>
                </Form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}