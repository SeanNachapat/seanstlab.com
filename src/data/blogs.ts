export interface BlogPost {
    id: string;
    title: string;
    description: string;
    date: string;
    readTime?: string;
    link?: string;
    tags?: string[];
}

export const blogPosts: BlogPost[] = [
    
];

export const blogs = blogPosts;

