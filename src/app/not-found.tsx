import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center space-y-6 bg-background text-foreground transition-colors">
      <div className="space-y-2">
        <span className="font-mono text-xs text-muted uppercase tracking-widest block">
          ERROR 404
        </span>
        <h1 className="text-7xl sm:text-9xl font-pixel font-bold tracking-tight">
          Σ(OДOᵕ)
        </h1>
        <p className="font-mono text-base text-muted max-w-md pt-2">
          The requested page or resource could not be found in this realm.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs pt-4">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-md bg-foreground text-background font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <Home size={14} />
          <span>RETURN HOME</span>
        </Link>
        <Link
          href="/projects"
          className="px-5 py-2.5 rounded-md border border-border bg-card hover:bg-border/40 transition-colors"
        >
          <span>BROWSE WORKS</span>
        </Link>
      </div>
    </main>
  );
}
