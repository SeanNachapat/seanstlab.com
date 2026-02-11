import { Github, Linkedin, Mail, Twitter, type LucideIcon } from "lucide-react";

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
    { name: "EMAIL", href: "mailto:[EMAIL_ADDRESS]", icon: Mail },
];
