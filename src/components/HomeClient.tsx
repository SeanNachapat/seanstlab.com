"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  projects,
  reels,
} from "@/data";
import type { BlogPostItem } from "@/lib/blogs";

const INITIAL_ITEMS = 5;

interface HomeClientProps {
  blogs: BlogPostItem[];
}

export default function HomeClient({ blogs }: HomeClientProps) {
  const [tldr, setTldr] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_ITEMS);
  const [visibleReels, setVisibleReels] = useState(INITIAL_ITEMS);

  return (
    <main className="min-h-screen flex flex-col p-8 font-mono">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="max-w-xl">
          <h1 className="font-pixel font-bold text-4xl sm:text-3xl tracking-tight text-foreground">
            @Seanst._
          </h1>

          {/* Biography */}
          <div className="flex flex-col gap-4 justify-between mt-4">
            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold text-foreground font-sans">Biography</p>
              <button
                type="button"
                onClick={() => setTldr((prev) => !prev)}
                className={`text-sm cursor-pointer select-none transition-all duration-200 ${
                  tldr
                    ? "text-muted hover:text-foreground underline underline-offset-4"
                    : "line-through text-muted/60 hover:text-foreground"
                }`}
                title="Toggle TL;DR summary"
              >
                TL;DR
              </button>
            </div>

            <hr />

            <div className="text-sm leading-relaxed text-foreground/90">
              {tldr ? (
                <div className="space-y-3 animate-fadeIn">
                  <p>
                    I'm Sean, a passionate developer, and a machine learning enthusiast. 
                    Currently, a 2nd year Computer Science student, researcher, and Teaching Assistance at KMITL.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  <p>
                    Hi, I&apos;m Nachapat (Sean). I&apos;m a computer science
                    enthusiast and software developer studying at{" "}
                    <a
                      href="https://www.science.kmitl.ac.th/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 text-foreground font-medium hover:text-muted transition-colors"
                    >
                      KMITL
                    </a>
                    , specializing in web architecture, systems, and creative media.
                  </p>

                  <div className="relative w-full h-48 rounded-lg overflow-hidden border border-border bg-card">
                    <Image
                      src="/Ducksy.png"
                      alt="Featured project preview"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <p>
                    Currently leading teaching initiatives, creating technical
                    content with{" "}
                    <a
                      href="https://gdgbangkok.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 text-foreground font-medium hover:text-muted transition-colors"
                    >
                      GDG Bangkok
                    </a>
                    , and open-sourcing projects on{" "}
                    <a
                      href="https://github.com/SeanNachapat"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 text-foreground font-medium hover:text-muted transition-colors"
                    >
                      GitHub
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Projects */}
          <div className="flex flex-col gap-3 justify-between mt-4">
            <p className="font-semibold text-foreground font-sans">Selected Works</p>
            <div className="text-sm leading-relaxed text-foreground/90">
              <div className="space-y-2 animate-fadeIn">
                {projects.slice(0, visibleProjects).map((project) => (
                  <div key={project.id} className="relative group">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group-hover:opacity-80 transition-opacity flex flex-row items-center justify-between"
                    >
                      <div className="">
                        <span className="text-foreground font-medium group-hover:underline underline-offset-2">
                          {project.title}
                        </span>
                        {(project.shortDescription || project.description) && (
                          <span className="text-muted">
                            {", "}
                            {project.shortDescription || project.description}
                          </span>
                        )}
                      </div>
                      {project.year && (
                        <span className="text-muted text-right">
                          {project.year}
                        </span>
                      )}
                    </a>
                  </div>
                ))}
                {visibleProjects < projects.length ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => setVisibleProjects((prev) => prev + 5)}
                      className="text-xs text-muted hover:text-foreground transition-colors cursor-pointer select-none inline-block pt-1"
                    >
                      more..
                    </button>
                  </div>
                ) : projects.length > INITIAL_ITEMS ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => setVisibleProjects(INITIAL_ITEMS)}
                      className="text-xs text-muted hover:text-foreground transition-colors cursor-pointer select-none inline-block pt-1"
                    >
                      less..
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Reels */}
          <div className="flex flex-col gap-3 justify-between mt-4">
            <p className="font-semibold text-foreground font-sans">Reels</p>
            <div className="text-sm leading-relaxed text-foreground/90">
              <div className="space-y-2 animate-fadeIn">
                {reels.slice(0, visibleReels).map((reel) => (
                  <div key={reel.id} className="relative group">
                    <a
                      href={reel.link || (reel.videoId ? `https://youtu.be/${reel.videoId}` : "#")}
                      target="_blank"
                      rel="noreferrer"
                      className="group-hover:opacity-80 transition-opacity flex flex-row items-center justify-between"
                    >
                      <div>
                        <span className="text-foreground font-medium group-hover:underline underline-offset-2">
                          {reel.title}
                        </span>
                        {reel.description && (
                          <span className="text-muted">
                            {", "}
                            {reel.description}
                          </span>
                        )}
                      </div>
                      {reel.year && (
                        <span className="text-muted">
                          {reel.year}
                        </span>
                      )}
                    </a>
                  </div>
                ))}
                {visibleReels < reels.length ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => setVisibleReels((prev) => prev + 5)}
                      className="text-xs text-muted hover:text-foreground transition-colors cursor-pointer select-none inline-block pt-1"
                    >
                      more..
                    </button>
                  </div>
                ) : reels.length > INITIAL_ITEMS ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => setVisibleReels(INITIAL_ITEMS)}
                      className="text-xs text-muted hover:text-foreground transition-colors cursor-pointer select-none inline-block pt-1"
                    >
                      less..
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          
          {/* Blogs */}
          <div className="flex flex-col gap-3 justify-between mt-4">
            <p className="font-semibold text-foreground font-sans">Blog</p>
            <div className="text-sm leading-relaxed text-foreground/90">
              <div className="space-y-2 animate-fadeIn">
                {blogs.slice(0, 5).map((blog) => (
                  <div key={blog.id} className="relative group">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="group-hover:opacity-80 transition-opacity flex flex-row items-center justify-between"
                    >
                      <span className="text-foreground font-medium group-hover:underline underline-offset-2">
                        {blog.title}
                      </span>
                      {(blog.year || blog.date) && (
                        <span className="text-muted text-right">
                          {blog.year || blog.date.slice(0, 4)}
                        </span>
                      )}
                    </Link>
                  </div>
                ))}
                {blogs.length > 5 && (
                  <div>
                    <Link
                      href="/blogs"
                      className="text-xs text-muted hover:text-foreground transition-colors inline-block pt-1"
                    >
                      more..
                    </Link>
                  </div>
                )}
                {blogs.length <= 5 && blogs.length > 0 && (
                  <div>
                    <Link
                      href="/blogs"
                      className="text-xs text-muted hover:text-foreground transition-colors inline-block pt-1"
                    >
                      more..
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer & Socials */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
