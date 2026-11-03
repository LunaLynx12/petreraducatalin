import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] max-w-2xl flex-col items-start justify-center pb-20 pt-32 md:pt-40">
      <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
        <SearchX className="h-3.5 w-3.5" aria-hidden="true" />
        Error 404 · route not found
      </p>
      <h1 className="mt-5 font-serif text-[clamp(2.75rem,7vw,4.5rem)] leading-[0.98] tracking-[-0.03em] text-ink">
        Recon failed on this route.
      </h1>
      <p className="mt-6 max-w-[52ch] text-pretty text-lg leading-relaxed text-body">
        The page you are looking for does not exist or was moved. Head back to
        the homepage, or start with the services and case studies.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-6">
        <Button asChild size="lg">
          <Link href="/">
            <ArrowLeft aria-hidden="true" />
            Back to home
          </Link>
        </Button>
        <Link
          href="/services/"
          className="link-underline font-mono text-[10px] uppercase tracking-[0.16em] text-accent"
        >
          Services
        </Link>
        <Link
          href="/projects/"
          className="link-underline font-mono text-[10px] uppercase tracking-[0.16em] text-muted"
        >
          Case studies
        </Link>
      </div>
    </div>
  );
}
