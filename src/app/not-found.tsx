import Link from "next/link";
import GenerativeCascade from "@/components/GenerativeCascade";
import Footer from "@/components/Footer";

export const metadata = {
  title: "404 - Not Found | Seanstlab",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col p-8 font-mono justify-between overflow-x-clip">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        <div className="max-w-xl relative z-10 flex flex-col justify-center space-y-6 pt-10 md:pt-20">
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
        <div className="fixed bottom-0 right-0 z-0 pointer-events-none opacity-15 w-72 sm:w-96 rotate-180 flex flex-col items-end justify-end md:sticky md:top-0 md:bottom-auto md:right-auto md:z-auto md:pointer-events-auto md:opacity-100 md:w-full md:rotate-0 md:items-center md:justify-start md:-mt-8 h-fit">
          <GenerativeCascade
            columns={9}
            rows={15}
            cellSize={100}
            className="w-full md:w-2/3"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto mt-12">
        <Footer />
      </div>
    </main>
  );
}
