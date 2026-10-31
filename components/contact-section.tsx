"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SectionHeader } from "@/components/section-header";
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
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/petreradu",
    href: siteConfig.social.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "LunaLynx12",
    href: siteConfig.social.github,
  },
  {
    icon: Globe,
    label: "Website",
    value: "petreraducatalin.com",
    href: siteConfig.social.site,
  },
  {
    icon: Globe,
    label: "Company",
    value: "kiwidefence.com",
    href: siteConfig.social.kiwi,
  },
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
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-night text-night-text"
    >
      <div className="container py-[clamp(80px,10vw,144px)]">
        <SectionHeader
          index="10"
          eyebrow="Contact"
          id="contact-heading"
          tone="dark"
          title="Work with Petre Radu Cătălin"
          description="Available for remote EU engagements and on-site work in Romania. Based in Brașov, with clients across Romania, the Netherlands, Austria, and Finland."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-night-muted">
                Direct line
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 block break-all font-serif text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight text-night-text transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
            </Reveal>

            <Reveal delay={0.08} className="mt-10">
              <div className="border-t border-night-line">
                {contactChannels.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={href}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center justify-between gap-4 border-b border-night-line py-4"
                  >
                    <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-night-muted">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {label}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-right text-sm text-night-text transition-colors group-hover:text-white">
                      {value}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-night-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12} className="mt-8">
              <p className="flex items-start gap-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-night-muted">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                Brașov, Romania · CET (UTC+2) · RO / NL / AT / FI
              </p>
              <p className="mt-6 border border-night-line p-4 text-sm leading-relaxed text-night-muted">
                <span className="font-medium text-night-text">
                  Engagement type:
                </span>{" "}
                solo or team-led assessment. I can lead the engagement directly
                or coordinate with trusted specialists for broader coverage.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="bg-canvas p-6 text-ink md:p-8">
                {sent ? (
                  <div className="flex min-h-[360px] flex-col items-center justify-center gap-4 text-center">
                    <CheckCircle2
                      className="h-10 w-10 text-accent"
                      aria-hidden="true"
                    />
                    <h3 className="font-serif text-2xl text-ink">
                      Request prepared
                    </h3>
                    <p className="max-w-sm text-sm leading-relaxed text-body">
                      Your email client should open with the message pre-filled.
                      If it did not, write to me directly at{" "}
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
                ) : (
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                      noValidate
                    >
                      <div className="grid gap-6 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Jane Smith"
                                  autoComplete="name"
                                  {...field}
                                />
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
                              <Input
                                placeholder="Penetration test for our SaaS platform"
                                {...field}
                              />
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
                                placeholder="Tell me about your engagement — scope, timeline, and what you're protecting."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Send message
                      </Button>

                      <p className="text-center font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                        Requests open your email client — no data is stored on
                        this site.
                      </p>
                    </form>
                  </Form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
