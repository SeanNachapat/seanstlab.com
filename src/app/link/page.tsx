"use client";

import Link from "next/link";
import { socialContacts } from "@/data/socials";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  ArrowUpRight,
  ArrowRight,
  Globe,
} from "lucide-react";

function SocialIcon({ id }: { id: string }) {
  const iconClass = "w-4 h-4 text-foreground shrink-0";
  switch (id) {
    case "github":
      return <Github className={iconClass} />;
    case "linkedin":
      return <Linkedin className={iconClass} />;
    case "instagram":
      return <Instagram className={iconClass} />;
    case "twitter":
      return <Twitter className={iconClass} />;
    case "youtube":
      return <Youtube className={iconClass} />;
    case "email":
      return <Mail className={iconClass} />;
    default:
      return null;
  }
}

export default function LinksPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6 sm:p-8 font-mono text-foreground">
      <div className="flex flex-col gap-4 min-w-[200px]">
        {/* Enter Website */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-foreground hover:opacity-75 transition-opacity pb-2.5 mb-1 border-b border-border/60"
        >
          <Globe className="w-4 h-4 text-foreground shrink-0" />
          <span className="text-sm font-medium group-hover:underline underline-offset-2">
            Enter Website
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-foreground transition-transform group-hover:translate-x-0.5 ml-auto" />
        </Link>

        {/* Socials */}
        {socialContacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.url}
            target={contact.url.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className="group flex items-center gap-3 text-foreground hover:opacity-75 transition-opacity"
          >
            <SocialIcon id={contact.id} />
            <span className="text-sm font-medium group-hover:underline underline-offset-2">
              {contact.name}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-auto" />
          </a>
        ))}
      </div>
    </main>
  );
}
