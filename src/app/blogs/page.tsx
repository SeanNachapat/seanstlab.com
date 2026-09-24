import Link from "next/link";
import Footer from "@/components/Footer";
import { getAllBlogPosts } from "@/lib/blogs";

export const metadata = {
  title: "Blog | Seanstlab",
  description: "Writings, engineering essays, and thoughts by Nachapat I.",
};

export default function BlogCollectionPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen flex flex-col p-8 font-mono items-center bg-white">
      <div className="max-w-3xl w-full lg:mt-20 mt-10">
        <div className="mb-8">
          <Link
            href="/"
            className="text-xs text-muted hover:text-foreground transition-colors inline-flex items-center gap-1 mb-4"
          >
            ← back
          </Link>
          <h1 className="font-pixel font-bold text-4xl sm:text-3xl tracking-tight text-foreground">
            Blog &amp; Writings
          </h1>
          <p className="text-xs text-muted mt-1">
            Thoughts on software engineering, teaching, minimalist interfaces, and technology.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="p-0.5 hover:border-foreground/30 transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 ">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="font-semibold text-foreground text-base group-hover:underline underline-offset-2 flex items-center gap-1.5 hover:bg-card/40 rounded-lg"
                >
                  {post.title}
                </Link>
                <div className="flex items-center gap-2 text-xs text-muted whitespace-nowrap">
                  {post.readTime && <span>{post.readTime}</span>}
                  {post.readTime && post.date && <span>·</span>}
                  {post.date && <span>{post.date}</span>}
                </div>
              </div>

              {post.description && (
                <p className="text-sm text-foreground/80 mt-2 leading-relaxed">
                  {post.description}
                </p>
              )}

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
          {posts.length === 0 && (
            <p className="text-sm text-muted">No blog posts found in content/blogs.</p>
          )}
        </div>

        <Footer />
      </div>
    </main>
  );
}

