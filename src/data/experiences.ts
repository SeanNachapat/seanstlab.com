export interface ExperiencePreviewConfig {
    type: 'youtube' | 'terminal' | 'google' | 'community' | 'code' | 'iframe' | 'website' | 'slides' | 'canva';
    youtubeId?: string;
    terminalSystem?: string;
    terminalCmd?: string;
    terminalLines?: string[];
    title?: string;
    subtitle?: string;
    description?: string;
    accentColor?: string;
    codeLanguage?: string;
    codeSnippet?: string;
    iframeUrl?: string;
    canvaUrl?: string;
    slides?: Array<{
        title: string;
        bullets?: string[];
        codeSnippet?: string;
        visualElement?: 'diagram-oop' | 'diagram-ds' | 'diagram-methods' | 'bullet-list';
    }>;
    websiteMockup?: {
        heroTitle: string;
        heroSubtitle: string;
        stats?: Array<{ label: string; value: string }>;
        accentColor?: string;
        theme?: 'dark' | 'light' | 'retro' | 'google';
    };
}

export interface Experience {
    role: string;
    period: string;
    organization: string;
    link: string;
    details: string[];
    type: 'developer' | 'other';
    preview?: ExperiencePreviewConfig;
}

export const experiences: Experience[] = [
    {
        role: "Head of Media Team",
        period: "June 2026 - Present",
        organization: "Department of Computer Science, KMITL",
        link: "https://www.science.kmitl.ac.th/",
        details: [
            "Lead a team of content creators to produce engaging content and promotional materials for the department's social media platforms.",
            "Managed content pipelines and delegated tasks effectively among team members to meet tight deadlines for academic and promotional events.",
        ],
        type: 'other',
        preview: {
            type: 'iframe',
            iframeUrl: "https://www.science.kmitl.ac.th/"
        }
    },
    {
        role: "Content Creator",
        period: "May 2026 - Present",
        organization: "Google Developer Group Bangkok, GDG",
        link: "https://gdgbangkok.dev/",
        details: [
            "Creating engaging content and promotional materials for GDG Bangkok's social media platforms.",
            "Fostering a vibrant community of AI enthusiasts and developers.",
        ],
        type: 'other',
        preview: {
            type: 'iframe',
            iframeUrl: "https://gdgbangkok.dev/"
        }
    },
    {
        role: "Teaching Assistant",
        period: "April 2026",
        organization: "Department of Computer Science, KMITL",
        link: "https://cscamp.net/",
        details: [
            "Designed and delivered an intensive 5-day Java programming boot camp for 100 high-potential high school students selected nationwide.",
            "Structured and lectured key programming paradigms, with a primary focus on Java methods (functions, parameters, return types, and scope), control structures, and arrays.",
            "Coordinated a team of student helpers to facilitate hands-on coding labs, ensuring personalized support and successful project completion for all attendees.",
        ],
        type: 'developer',
        preview: {
            type: 'canva',
            canvaUrl: "https://www.canva.com/design/DAHHaczKPnw/5KojmuYyIVf9Cxqg2SEVlg/view",
        }
    },
    {
        role: "Google Student Ambassador",
        period: "February 2026 - June 2026",
        organization: "Google",
        link: "/experiences/gsa",
        details: [
            "Lead, Innovate, Inspire: Representing Google technology and fostering innovation on campus.",
            "Building a vibrant community of AI enthusiasts and developers using Google's suite of tools.",
            "Leading workshops and initiatives to empower students with cutting-edge technology.",
        ],
        type: 'developer',
        preview: {
            type: 'iframe',
            iframeUrl: "/experiences/gsa"
        }
    },
    {
        role: "Editor & Content Creator",
        period: "June 2024 - March 2026",
        organization: "Micrubik",
        link: "https://www.youtube.com/@micrubik",
        details: [
            "Delivered script-written and edited 50+ short-form video contents for clients and Micrubik.",
        ],
        type: 'other',
        preview: {
            type: 'youtube',
            youtubeId: "UZKNBpM7-aU",
        }
    },
    {
        role: "Lecturer",
        period: "October 2025",
        organization: "Department of Computer Science, KMITL",
        link: "#",
        details: [
            "Conducted a free fundamental Java programming course for high school students about the importance of computer programming, data structures, if-else conditions, and loops.",
        ],
        type: 'developer',
        preview: {
            type: 'canva',
            canvaUrl: "https://www.canva.com/design/DAHKpIF0xlI/44JKg9HBCaGOANDaZ6RzPA/view",
        }
    },
    {
        role: "Teaching Assistant",
        period: "August 2025",
        organization: "Department of Computer Science, KMITL",
        link: "https://cscamp.net/",
        details: [
            "Volunteered as a lead lecturer to conduct a 5-day deep dive into Object-Oriented Programming (OOP) concepts and Java fundamentals for 30 selected students.",
            "Created custom learning materials, interactive slides, and live coding demonstrations explaining classes, objects, inheritance, polymorphism, and encapsulation.",
            "Guided students through daily coding challenges and final project design, reinforcing logical thinking and core software engineering best practices.",
        ],
        type: 'developer',
        preview: {
            type: 'canva',
            canvaUrl: "https://www.canva.com/design/DAG0d9bHp2Y/DMEy5QtsHTe3UtHCFCv1lA/view",
        }
    },
];
