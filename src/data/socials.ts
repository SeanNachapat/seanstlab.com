import { Github, Linkedin, Mail, Twitter, Youtube, Video, type LucideIcon } from "lucide-react";

export interface SocialLink {
    name: string;
    href: string;
    icon: LucideIcon;
}

export const socials: SocialLink[] = [
    { name: "GITHUB", href: "https://github.com/SeanNachapat", icon: Github },
    {
        name: "LINKEDIN",
        href: "https://www.linkedin.com/in/nachapat-iamphuang/",
        icon: Linkedin,
    },
    {
        name: "INSTAGRAM",
        href: "https://www.instagram.com/seanst._",
        icon: Twitter,
    },
    {
        name: "TIKTOK",
        href: "https://www.tiktok.com/@seanst._",
        icon: Video,
    },
    {
        name: "YOUTUBE",
        href: "https://www.youtube.com/@seanst",
        icon: Youtube,
    },
    { name: "EMAIL", href: "mailto:your-email@example.com", icon: Mail },
];
