import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="section-padding">
      <div className="container flex min-h-[60vh] max-w-xl flex-col items-center justify-center text-center">
        <SearchX className="h-16 w-16 text-primary" aria-hidden="true" />
        <h1 className="mt-6 font-mono text-3xl font-bold text-foreground">
          404 - page_not_found
        </h1>
        <p className="mt-4 text-muted">
          The page you are looking for does not exist or was moved. Recon failed
          on this route.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-md border border-primary/40 bg-primary/10 px-6 py-3 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
        >
          back_to_home
        </Link>
      </div>
    </div>
  );
}