import Link from "next/link";
import GenerativeCascade from "@/components/GenerativeCascade";
import Footer from "@/components/Footer";

export const metadata = {
  title: "404 - Not Found | Seanstlab",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col p-8 font-mono justify-between">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        <div className="max-w-xl flex flex-col justify-center space-y-6 pt-10 md:pt-20">
          <div>
            <Link
              href="/"
              className="text-xs text-muted hover:text-foreground transition-colors inline-flex items-center gap-1 mb-6"
            >
              ← return home
            </Link>
            <h1 className="font-pixel font-bold text-5xl sm:text-6xl tracking-tight text-foreground">
              404
            </h1>
            <p className="font-semibold text-foreground font-sans mt-2 text-lg">
              Page Not Found
            </p>
          </div>

          <hr />

          <p className="text-sm leading-relaxed text-foreground/80">
            The page or resource you are looking for does not exist or has been relocated.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-xs pt-2">
            <Link
              href="/"
              className="text-foreground font-medium underline underline-offset-4 hover:text-muted transition-colors"
            >
              Home →
            </Link>
            <Link
              href="/blogs"
              className="text-muted hover:text-foreground transition-colors"
            >
              Blog &amp; Essays →
            </Link>
            <Link
              href="/link"
              className="text-muted hover:text-foreground transition-colors"
            >
              Socials &amp; Contacts →
            </Link>
          </div>
        </div>

        {/* Generative Modular Identity Cascade */}
        <div className="flex flex-col items-end md:items-center justify-end md:justify-start relative md:sticky md:top-0 -mt-20 md:-mt-8 h-fit rotate-180 md:rotate-0 w-24 sm:w-32 md:w-full ml-auto md:ml-0">
          <GenerativeCascade
            columns={9}
            rows={15}
            cellSize={100}
            className="w-2/3"
          />
        </div>
      </div>

      <div className="max-w-5xl w-full mx-auto mt-12">
        <Footer />
      </div>
    </main>
  );
}
