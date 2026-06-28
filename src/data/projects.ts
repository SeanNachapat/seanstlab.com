export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: string;
    year: string;
    photos: string[];
    flagship?: boolean;
}

export const projects: Project[] = [
    {
        id: "pinata",
        title: "Piñata | Virtual IoT Device Simulator & Python Service",
        description:
            "An open-source virtual IoT device simulation engine and Python package designed for ML pipelines, IoT streaming, and anomaly detection testing. Features Wind Turbine, Commercial HVAC, and Industrial Motor presets with real-time MQTT integration, ground truth anomaly logging, and a premium Streamlit visualization dashboard.",
        tags: ["Python", "FastAPI", "WebSockets", "MQTT", "Streamlit", "Poetry"],
        link: "https://github.com/SeanNachapat/Pinata",
        image: "https://raw.githubusercontent.com/SeanNachapat/Pinata/main/Pinata.png",
        year: "2026",
        photos: [
            "https://raw.githubusercontent.com/SeanNachapat/Pinata/main/Pinata.png",
        ],
        flagship: true,
    },
    {
        id: "stacked",
        title: "Stacked | Digital Sticker Bomb for developers",
        description:
            "specialized platform for developers to aggregate and showcase their verified technical achievements. By centralizing badges, certifications, and hackathon wins into a single, authenticated profile, StackedLabs moves beyond the traditional resume to provide a high-trust, visual representation of a developer’s true skill set and growth.",
        tags: ["MongoDB", "React", "NEXT.js", "Puppeteer", "Typescript"],
        link: "https://stacked.seanstlab.com/",
        image: "/stacked.png",
        year: "2026",
        photos: [
            "/stacked.png",
        ],
        flagship: true,
    },
    {
        id: "ducksy",
        title: "Ducksy | AI Productivity Companion",
        description:
            "Ducksy is an intelligent desktop companion powered by Gemini 3 that lives on your screen to help you navigate complex tasks, summarize meetings, and provide real-time assistance.",
        tags: ["Electron", "React", "Gemini 3", "Framer Motion", "Javascript"],
        link: "https://ducksy-gemini-3-hackathon-2026-duck.vercel.app/",
        image: "/Ducksy.png",
        year: "2026",
        photos: [
            "/Ducksy.png",
        ]
    },
    {
        id: "go-shrimp",
        title: "Go-Shrimp | Smart Farm Management System",
        description:
            "Web Application for Shrimp Farmers integrated with MongoDB database, image classification and disease prediction. Includes real-time water quality monitoring, inventory tracking, and data visualization for pond cycles.",
        tags: ["React", "NEXT.js", "MongoDB", "GeminiAPI"],
        link: "https://github.com/SeanNachapat/go-shrimp",
        image: "/GoShrimp.png",
        year: "2025",
        photos: [
            "/GoShrimp.png",
        ],
    },
    {
        id: "whatstheword",
        title: "What's The Word",
        description:
            "What's The Word? is a web application game for Thai students to practice their knowledge of English vocabulary, categorized by the Common European Framework of Reference for Languages(CEFR).",
        tags: ["React", "Vercel", "NEXT.js", "GeminiAPI"],
        link: "https://github.com/SeanNachapat/whatstheword",
        image: "/WTW.png",
        year: "2025",
        photos: [
            "/WTW.png",
        ],
    },
];
