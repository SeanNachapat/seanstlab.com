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
        title: "Dummio | Virtual IoT Device Simulator & Python Service",
        description:
            "An open-source virtual IoT device simulation engine and Python package designed for ML pipelines, IoT streaming, and anomaly detection testing. Features Wind Turbine, Commercial HVAC, and Industrial Motor presets with real-time MQTT integration, ground truth anomaly logging, and a premium Streamlit visualization dashboard.",
        tags: ["Python", "FastAPI", "WebSockets", "MQTT", "Streamlit", "Poetry"],
        link: "https://github.com/SeanNachapat/dummio",
        image: "https://raw.githubusercontent.com/SeanNachapat/Dummio/main/imgs/dummio.png",
        flagship: true,
    },
    {
        title: "Stacked | Digital Sticker Bomb for developers",
        description:
            "specialized platform for developers to aggregate and showcase their verified technical achievements. By centralizing badges, certifications, and hackathon wins into a single, authenticated profile, StackedLabs moves beyond the traditional resume to provide a high-trust, visual representation of a developer’s true skill set and growth.",
        tags: ["MongoDB", "React", "NEXT.js", "Puppeteer", "Typescript"],
        link: "https://stacked.seanstlab.com/",
        image: "/stacked.png",
        flagship: true,
    },
    {
        title: "Ducksy | AI Productivity Companion",
        description:
            "Ducksy is an intelligent desktop companion powered by Gemini 3 that lives on your screen to help you navigate complex tasks, summarize meetings, and provide real-time assistance.",
        tags: ["Electron", "React", "Gemini 3", "Framer Motion", "Javascript"],
        link: "https://ducksy-gemini-3-hackathon-2026-duck.vercel.app/",
        image: "/Ducksy.png"
    },
    {
        title: "Go-Shrimp | Smart Farm Management System",
        description:
            "Web Application for Shrimp Farmers integrated with MongoDB database, image classification and disease prediction. Includes real-time water quality monitoring, inventory tracking, and data visualization for pond cycles.",
        tags: ["React", "NEXT.js", "MongoDB", "GeminiAPI"],
        link: "https://github.com/SeanNachapat/go-shrimp",
        image: "/GoShrimp.png",
    },
    {
        title: "What's The Word",
        description:
            "What's The Word? is a web application game for Thai students to practice their knowledge of English vocabulary, categorized by the Common European Framework of Reference for Languages(CEFR).",
        tags: ["React", "Vercel", "NEXT.js", "GeminiAPI"],
        link: "https://github.com/SeanNachapat/whatstheword",
        image:
            "/WTW.png",
    },
];
