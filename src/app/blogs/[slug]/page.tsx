import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blogs";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    return {
      title: "Post Not Found | Seanstlab",
    };
  }

  return {
    title: `${post.title} | Seanstlab`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col p-8 font-mono items-center bg-white text-foreground">
      <article className="max-w-3xl w-full lg:mt-20 mt-10">
        <div className="mb-8">
          <Link
            href="/blogs"
            className="text-xs text-muted hover:text-foreground transition-colors inline-flex items-center gap-1 mb-4"
          >
            ← all blogs
          </Link>
          
          <h1 className="font-pixel font-bold text-3xl sm:text-4xl tracking-tight text-foreground mt-2">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-xs text-muted mt-3">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            {post.tags && post.tags.length > 0 && (
              <>
                <span>·</span>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded border border-border text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <hr className="border-border mb-8" />

        {/* Rendered Markdown Body */}
        <div
          className="prose prose-neutral max-w-none space-y-4 text-sm sm:text-base leading-relaxed text-foreground/90
            [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mt-8 [&_h1]:mb-4
            [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-6 [&_h2]:mb-3
            [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2
            [&_p]:mb-4 [&_p]:leading-relaxed
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ul]:mb-4
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1.5 [&_ol]:mb-4
            [&_a]:underline [&_a]:underline-offset-2 [&_a]:text-foreground [&_a]:font-medium hover:[&_a]:text-muted
            [&_blockquote]:border-l-2 [&_blockquote]:border-foreground/40 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted
            [&_code]:bg-muted/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono
            [&_pre]:bg-card [&_pre]:border [&_pre]:border-border [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:mb-6
            [&_pre_code]:bg-transparent [&_pre_code]:p-0
            [&_img]:rounded-lg [&_img]:border [&_img]:border-border [&_img]:my-6 [&_img]:w-full"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
        />

        <div className="mt-12 pt-6 border-t border-border flex justify-between items-center text-xs text-muted mb-8">
          <Link href="/blogs" className="hover:text-foreground transition-colors">
            ← back to writings
          </Link>
          <a
            href="https://github.com/SeanNachapat"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Nachapat I.
          </a>
        </div>

        <Footer />
      </article>
    </main>
  );
}
