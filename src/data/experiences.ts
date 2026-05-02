
export interface Experience {
    role: string;
    period: string;
    organization: string;
    link: string;
    details: string[];
    type: 'developer' | 'other';
}

export const experiences: Experience[] = [
    {
        role: "Content Creator & Event Coordinator",
        period: "May 2026 - Present",
        organization: "Google Developer Group Bangkok, GDG",
        link: "https://gdg.community.dev/gdg-bangkok/",
        details: [
            "Content creation: Creating engaging content for GDG Bangkok's social media platforms.",
            "Event coordination: Planning and executing events for GDG Bangkok.",
            "Community building: Fostering a vibrant community of AI enthusiasts and developers using Google's suite of tools.",
        ],
        type: 'other',
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
    },
    {
        role: "Teaching Assistant",
        period: "August 2025",
        organization: "Department of Computer Science, KMITL",
        link: "https://cscamp.net/",
        details: [
            "Volunteered as a lecturer to lead a 5-day lecture for 30 highschool students, about object-oriented programming (OOP) and fundamental Java programming.",
        ],
        type: 'developer',
    },
];
