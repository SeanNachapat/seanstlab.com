import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export interface BlogPostItem {
    id: string;
    slug: string;
    fileName: string;
    title: string;
    description: string;
    date: string;
    year: string;
    readTime: string;
    tags: string[];
    contentHtml?: string;
    coverImage?: string;
}

const BLOGS_DIR = path.join(process.cwd(), "content", "blogs");

// Configure marked renderer for clean typography and relative image mapping
const renderer = new marked.Renderer();

function parseFrontmatterAndContent(raw: string) {
    let text = raw.trim();
    if (!text.startsWith("---") && text.includes("---")) {
        const firstDashIndex = text.indexOf("---");
        const headerCandidate = text.slice(0, firstDashIndex);
        if (headerCandidate.includes("title:") || headerCandidate.includes("description:") || headerCandidate.includes("date:")) {
            text = `---\n${text}`;
        }
    }
    return matter(text);
}

export function getAllBlogPosts(): BlogPostItem[] {
    if (!fs.existsSync(BLOGS_DIR)) {
        return [];
    }

    const fileNames = fs
        .readdirSync(BLOGS_DIR)
        .filter((file) => file.endsWith(".md") && !file.toLowerCase().startsWith("readme") && !file.startsWith("_") && !file.startsWith("."));

    const posts: BlogPostItem[] = fileNames
        .map((fileName) => {
            const fullPath = path.join(BLOGS_DIR, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = parseFrontmatterAndContent(fileContents);

            // Parse YYYY-MM-DD-title.md pattern
            const nameWithoutExt = fileName.replace(/\.md$/, "");
            const dateMatch = nameWithoutExt.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);

            const fileDate = dateMatch ? dateMatch[1] : "";
            const slug = nameWithoutExt;

            const date = (data.date as string) || fileDate || new Date().toISOString().slice(0, 10);
            const year = date.slice(0, 4);

            // Derive title: frontmatter -> first markdown heading -> formatted slug
            let title = data.title as string | undefined;
            if (!title) {
                const headingMatch = content.match(/^#\s+(.+)$/m);
                title = headingMatch ? headingMatch[1] : (dateMatch ? dateMatch[2].replace(/-/g, " ") : nameWithoutExt);
            }

            // Derive description: frontmatter -> first paragraph
            let description = data.description as string | undefined;
            if (!description) {
                const cleanContent = content.replace(/^#+.*$/gm, "").trim();
                description = cleanContent.slice(0, 140) + (cleanContent.length > 140 ? "..." : "");
            }

            // Calculate estimated reading time (~200 words / min)
            const wordCount = content.trim().split(/\s+/).length;
            const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

            return {
                id: slug,
                slug: slug,
                fileName,
                title,
                description,
                date,
                year,
                readTime,
                tags: (data.tags as string[]) || [],
                coverImage: data.coverImage as string | undefined,
            };
        })
        .sort((a, b) => (new Date(b.date).getTime() || 0) - (new Date(a.date).getTime() || 0));

    return posts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostItem | null> {
    if (!fs.existsSync(BLOGS_DIR)) {
        return null;
    }

    const fileNames = fs.readdirSync(BLOGS_DIR).filter((file) => file.endsWith(".md"));

    // Match either exact filename (e.g. 2026-02-16-title) or short slug (title)
    const targetFile = fileNames.find((f) => {
        const base = f.replace(/\.md$/, "");
        if (base === slug) return true;
        const shortSlug = base.replace(/^\d{4}-\d{2}-\d{2}-/, "");
        return shortSlug === slug;
    });

    if (!targetFile) {
        return null;
    }

    const fullPath = path.join(BLOGS_DIR, targetFile);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = parseFrontmatterAndContent(fileContents);

    const nameWithoutExt = targetFile.replace(/\.md$/, "");
    const dateMatch = nameWithoutExt.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);
    const fileDate = dateMatch ? dateMatch[1] : "";
    const date = (data.date as string) || fileDate || new Date().toISOString().slice(0, 10);
    const year = date.slice(0, 4);

    let title = data.title as string | undefined;
    if (!title) {
        const headingMatch = content.match(/^#\s+(.+)$/m);
        title = headingMatch ? headingMatch[1] : nameWithoutExt;
    }

    let description = data.description as string | undefined;
    if (!description) {
        const cleanContent = content.replace(/^#+.*$/gm, "").trim();
        description = cleanContent.slice(0, 140) + (cleanContent.length > 140 ? "..." : "");
    }

    const wordCount = content.trim().split(/\s+/).length;
    const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

    // Process markdown to HTML
    // Automatically map relative image paths like "./image.png" to "/media/blogs/[folder-name]/image.png"
    const mediaFolder = nameWithoutExt;
    const processedContent = content.replace(
        /!\[(.*?)\]\((\.\/|media\/|images\/)?(.*?)\)/g,
        (match, alt, prefix, imgPath) => {
            if (imgPath.startsWith("http://") || imgPath.startsWith("https://") || imgPath.startsWith("/")) {
                return `![${alt}](${imgPath})`;
            }
            return `![${alt}](/media/blogs/${mediaFolder}/${imgPath})`;
        }
    );

    const contentHtml = await marked.parse(processedContent, { renderer });

    return {
        id: nameWithoutExt,
        slug: nameWithoutExt,
        fileName: targetFile,
        title,
        description,
        date,
        year,
        readTime,
        tags: (data.tags as string[]) || [],
        coverImage: data.coverImage as string | undefined,
        contentHtml,
    };
}
