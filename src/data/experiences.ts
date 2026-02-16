
export interface Experience {
    role: string;
    period: string;
    organization: string;
    link: string;
    details: string[];
}

export const experiences: Experience[] = [
    {
        role: "Google Student Ambassador",
        period: "February 2026 - Present",
        organization: "Google",
        link: "/experiences/gsa",
        details: [
            "Lead, Innovate, Inspire: Representing Google technology and fostering innovation on campus.",
            "Building a vibrant community of AI enthusiasts and developers using Google's suite of tools.",
            "Leading workshops and initiatives to empower students with cutting-edge technology.",
        ],
    },
    {
        role: "Video Editor & Content Creator",
        period: "June 2024 - Present",
        organization: "Micrubik",
        link: "https://www.youtube.com/@micrubik",
        details: [
            "Delivered script-written and edited 50+ short-form video contents for clients and Micrubik.",
        ],
    },
    {
        role: "Lecturer",
        period: "October 2025",
        organization: "Department of Computer Science, KMITL",
        link: "#",
        details: [
            "Conducted a free fundamental Java programming course for high school students about the importance of computer programming, data structures, if-else conditions, and loops.",
        ],
    },
    {
        role: "Teaching Assistant",
        period: "August 2025",
        organization: "Department of Computer Science, KMITL",
        link: "https://cscamp.net/",
        details: [
            "Volunteered as a lecturer to lead a 5-day lecture for 30 highschool students, about object-oriented programming (OOP) and fundamental Java programming.",
        ],
    },
];
