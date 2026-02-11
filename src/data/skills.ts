export interface Skill {
    name: string;
    icon: string;
}

export interface SkillCategory {
    label: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        label: "LANGUAGES",
        skills: [
            { name: "TypeScript", icon: "typescript" },
            { name: "JavaScript", icon: "javascript" },
            { name: "Java", icon: "java" },
            { name: "Python", icon: "python" },
            { name: "C++", icon: "cpp" },
        ],
    },
    {
        label: "TOOLS & DEVOPS",
        skills: [
            { name: "Docker", icon: "docker" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "NodeJS", icon: "nodejs" },
            { name: "Postman", icon: "postman" },
            { name: "Git", icon: "git" },
        ],
    },
    {
        label: "IDEs",
        skills: [
            { name: "VSCode", icon: "vscode" },
            { name: "PyCharm", icon: "pycharm" },
            { name: "Arduino", icon: "arduino" },
        ],
    },
    {
        label: "SOFTWARE",
        skills: [
            { name: "Audition", icon: "au" },
            { name: "Premiere Pro", icon: "pr" },
            { name: "Photoshop", icon: "ps" },
        ],
    },
];
