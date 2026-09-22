import {
  projects,
  experiences,
  skillCategories,
  socials,
  libraryItems,
  servers,
} from "@/data";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center font-mono">
      <div className="max-w-2xl space-y-6">
        <h1 className="font-pixel text-6xl sm:text-8xl tracking-tight text-foreground">
          SEANSTLAB
        </h1>
        <p className="text-muted text-sm sm:text-base">
          Release v2.0 · Blankspace canvas
        </p>

        <div className="p-6 rounded-xl border border-dashed border-border bg-card text-left space-y-3 text-xs text-muted">
          <p className="text-foreground font-semibold uppercase tracking-wider">
            Available Data (Ready to fetch & design):
          </p>
          <ul className="space-y-1.5 font-mono">
            <li>
              • <code className="text-foreground font-bold">projects</code>:{" "}
              {projects.length} projects
            </li>
            <li>
              • <code className="text-foreground font-bold">experiences</code>:{" "}
              {experiences.length} experiences
            </li>
            <li>
              • <code className="text-foreground font-bold">skillCategories</code>:{" "}
              {skillCategories.length} categories
            </li>
            <li>
              • <code className="text-foreground font-bold">socials</code>:{" "}
              {socials.length} social links
            </li>
            <li>
              • <code className="text-foreground font-bold">libraryItems</code>:{" "}
              {libraryItems.length} gear & tools
            </li>
            <li>
              • <code className="text-foreground font-bold">servers</code>:{" "}
              {servers.length} servers
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
