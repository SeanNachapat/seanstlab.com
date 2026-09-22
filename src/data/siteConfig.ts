export interface SiteConfig {
    name: string;
    title: string;
    description: string;
    url: string;
    ogImage: string;
    author: {
        name: string;
        twitter?: string;
        github?: string;
    };
    keywords: string[];
    locale: string;
}

export const siteConfig: SiteConfig = {
    name: "Nachapat Iamphuang (Sean)",
    title: "Seanstlab | Nachapat I.",
    description: "Portfolio of Nachapat Iamphuang — Developer, creator, and student at KMITL specializing in web architecture, creative tools, and media.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://seanstlab.com",
    ogImage: "/profile.jpg", 
    author: {
        name: "Nachapat Iamphuang",
        twitter: "@seanst._",
        github: "https://github.com/SeanNachapat",
    },
    keywords: [
        "Nachapat Iamphuang",
        "Sean",
        "Seanstlab",
        "Developer Portfolio",
        "Computer Science",
        "KMITL",
        "Web Developer",
        "Frontend",
        "Fullstack",
    ],
    locale: "en_US",
};
