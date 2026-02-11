export interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: string;
    flagship?: boolean;
}

export const projects: Project[] = [
    {
        title: "Ducksy | AI Productivity Companion",
        description:
            "Ducksy is an intelligent desktop companion powered by Gemini 3 that lives on your screen to help you navigate complex tasks, summarize meetings, and provide real-time assistance.",
        tags: ["Electron", "React", "Gemini 3", "Framer Motion", "Javascript"],
        link: "https://ducksy-gemini-3-hackathon-2026-duck.vercel.app/",
        image: "/Ducksy.png",
        flagship: true,
    },
    {
        title: "Go-Shrimp | Smart Farm Management System",
        description:
            "Web Application for Shrimp Farmers integrated with MongoDB database, image classification and disease prediction. Includes real-time water quality monitoring, inventory tracking, and data visualization for pond cycles.",
        tags: ["React", "NEXT.js", "MongoDB", "GeminiAPI"],
        link: "https://github.com/SeanNachapat/go-shrimp",
        image: "/Goshrimp.png",
    },
    {
        title: "What's The Word",
        description:
            "What's The Word? is a web application game for Thai students to practice their knowledge of English vocabulary, categorized by the Common European Framework of Reference for Languages(CEFR).",
        tags: ["React", "Vercel", "NEXT.js", "GeminiAPI"],
        link: "https://github.com/SeanNachapat/whatstheword",
        image:
            "https://github.com/SeanNachapat/whatstheword/blob/main/wtw.png?raw=true",
    },
];
