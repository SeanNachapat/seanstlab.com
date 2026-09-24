export interface Reel {
    id: string;
    title: string;
    description?: string;
    year?: string;
    link?: string;
    videoId?: string;
    platform?: 'youtube' | 'tiktok' | 'instagram' | 'vimeo' | 'other';
    thumbnail?: string;
    tags?: string[];
    role?: string;
    duration?: string;
}

export const reels: Reel[] = [
    {
        id: "I4fYo43WfH0",
        title: "The Doll Shop",
        description: "Short mystery drama film",
        year: "2024",
        videoId: "I4fYo43WfH0",
        link: "https://youtu.be/I4fYo43WfH0",
        platform: "youtube",
    },
    {
        id: "mvSw0ZGY4fI",
        title: "ROTC",
        description: "Military training documentary & vlog",
        year: "2024",
        videoId: "mvSw0ZGY4fI",
        link: "https://youtu.be/mvSw0ZGY4fI",
        platform: "youtube",
    },
    {
        id: "gEP2xrddRsg",
        title: "In the blink of an eye",
        description: "Cinematic short story project",
        year: "2024",
        videoId: "gEP2xrddRsg",
        link: "https://youtu.be/gEP2xrddRsg",
        platform: "youtube",
    },
    {
        id: "rF4MBhAa3tw",
        title: "Ratchaburi Field Trip",
        description: "Student study tour highlight video",
        year: "2023",
        videoId: "rF4MBhAa3tw",
        link: "https://youtu.be/rF4MBhAa3tw",
        platform: "youtube",
    },
    {
        id: "owEMcK41SIc",
        title: "USA Vlog",
        description: "Travel & study abroad experience",
        year: "2023",
        videoId: "owEMcK41SIc",
        link: "https://youtu.be/owEMcK41SIc",
        platform: "youtube",
    },
    {
        id: "Uqcmcz8hZVw",
        title: "Farewell for Wakayama University students",
        description: "International exchange ceremony recap",
        year: "2023",
        videoId: "Uqcmcz8hZVw",
        link: "https://youtu.be/Uqcmcz8hZVw",
        platform: "youtube",
    },
];
