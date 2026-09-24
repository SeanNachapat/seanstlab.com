"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import GenerativeCascade from "@/components/GenerativeCascade";
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
                    I&apos;m Sean, a passionate developer, and a machine learning enthusiast. 
                    Currently, a 2nd year Computer Science student, researcher, and Teaching Assistance at KMITL.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  <p>
                    The internet, and a messy desk full of loose wires, taught me I could build anything.
                  </p>

                  <p>
                    Long before I wrote my first line of Python, I spent my childhood obsessed with what was happening on the creative side of the screen. In high school, I wasn&apos;t just gaming; I was editing highlight videos for my friends and losing sleep over keyframes. I loved visual rhythm, precise sound design, and the raw energy of fast-paced storytelling.
                  </p>

                  <p>
                    At the time, my backup plan was completely creative: if I didn&apos;t get accepted into Computer Science, I was going all in on media. I dreamed of becoming a graphic designer, making custom vector art in Illustrator, editing commercial videos, or even directing movies.
                  </p>

                  <div className="flex justify-center items-center gap-3">
                    <img
                      src="/randomChild.jpg"
                      alt="Early creative and tinkering days"
                      className="hover:scale-105 transition-transform duration-300 rounded-lg border border-border bg-card object-cover w-1/2 aspect-square"
                    />
                    <img
                      src="/portrait.png"
                      alt="Graphic portrait illustration"
                      className="hover:scale-105 transition-transform duration-300 rounded-lg border border-border bg-card object-contain h-1/4 w-1/4"
                    />
                  </div>

                  <p>
                    Fortunately, my first choice worked out. I was accepted to study Computer Science at the School of Science at{" "}
                    <a
                      href="https://www.kmitl.ac.th/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 text-foreground font-medium hover:text-muted transition-colors"
                    >
                      King Mongkut&apos;s Institute of Technology Ladkrabang
                    </a>{" "}
                    (KMITL).
                  </p>

                  <p>
                    University gave me the formal foundation: Java, Python, algorithms, and systems design. But I quickly realized that true learning happens outside the lecture hall, through the same self-taught curiosity that drove my editing days.
                  </p>

                  <p>
                    During my freshman year, I got my hands on a secondhand Lenovo ThinkCentre mini PC and turned my room into a tiny server rack. I set up Ubuntu Server, Proxmox, Docker containers, and Cloudflare tunnels to host my own internal services. From there, I branched into physical computing: ESP32 microcontrollers, Raspberry Pis, and Waveshare E-ink displays.
                  </p>

                  <p>
                    I loved the tactility of hardware. Watching a low-power E-ink screen update with live data over MQTT because of code running on my little ThinkCentre was pure magic to me.
                  </p>

                  <p>
                    Right around the time I felt comfortable building full-stack web apps with Next.js and React, software engineering hit a massive turning point: modern Artificial Intelligence.
                  </p>

                  <p>
                    Suddenly, computers weren&apos;t just executing rigid, deterministic logic. They could interpret messy, unstructured context. They could reason through intent.
                  </p>

                  <p>
                    I didn&apos;t want to just play with web chatbots or wrap an API call in a shiny landing page. I wanted to understand how models route tasks, how context windows are structured, and how agentic systems actually operate in production.
                  </p>

                  <p>
                    During the Gemini 3 Hackathon, I channeled this curiosity into building{" "}
                    <a
                      href="https://ducksy-gemini-3-hackathon-2026-duck.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 text-foreground font-medium hover:text-muted transition-colors"
                    >
                      Ducksy
                    </a>
                    , an AI desktop companion built with Electron, Next.js, and the{" "}
                    <a
                      href="https://modelcontextprotocol.io/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 text-foreground font-medium hover:text-muted transition-colors"
                    >
                      Model Context Protocol
                    </a>{" "}
                    (MCP). Ducksy was designed to understand what you were working on, summarize live meetings, and proactively help without being prompted every five seconds. That project proved something crucial to me: the real value of machine intelligence isn&apos;t an isolated chat box; it&apos;s ambient context embedded directly into existing workflows.
                  </p>

                  <div className="relative w-full h-48 rounded-lg overflow-hidden border border-border bg-card">
                    <Image
                      src="/Ducksy.png"
                      alt="Ducksy AI Companion preview"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <p>
                    Soon after, I wanted to push models out of the cloud and directly onto resource-constrained hardware. At the Microsoft x AIAT AI Engineering Hackathon, our team built an Edge AI care system for elderly monitoring. We had to squeeze computer vision models onto edge devices, balancing strict privacy, minimal power draw, and low latency.
                  </p>

                  <p>
                    Seeing an inference model run locally to detect emergencies in real time showed me that AI isn&apos;t just a hype cycle. It is practical, high-leverage infrastructure that solves physical-world problems.
                  </p>

                  <div className="flex flex-row justify-center items-center gap-3">
                    <img
                      src="/aiat.jpg"
                      alt="Microsoft x AIAT AI Engineering Hackathon"
                      className="hover:scale-105 transition-transform duration-300 rounded-lg border border-border bg-card object-contain h-1/3 w-1/3"
                    />
                    <img
                      src="/aiatpt.jpg"
                      alt="Edge AI Elderly Care System"
                      className="hover:scale-105 transition-transform duration-300 rounded-lg border border-border bg-card object-contain h-1/3 w-1/3"
                    />
                  </div>

                  <p>
                    Building things is only half the fun for me. The other half is taking everything apart and showing others how it works. That&apos;s where my high school creative roots circle back.
                  </p>

                  <p>
                    Because I spent years learning editing, pacing, and visual communication, sharing tech came naturally. I began creating developer content with{" "}
                    <a
                      href="https://gdgbangkok.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 text-foreground font-medium hover:text-muted transition-colors"
                    >
                      Google Developer Group Bangkok
                    </a>
                    , deconstructing multi-model routing, developer tooling, and agentic workflows into digestible videos. At KMITL, I took on the role of Lead Teaching Assistant for our Computer Science Pre-Degree program, helping high school students wrap their heads around OOP and coding fundamentals.
                  </p>

                  <div className="flex flex-row justify-center items-center gap-3">
                    <img
                      src="/gdg.jpg"
                      alt="Presenting at Google Developer Group Bangkok"
                      className="hover:scale-105 transition-transform duration-300 rounded-lg border border-border bg-card object-contain h-2/3 w-2/3"
                    />
                  </div>

                  <p>
                    I&apos;ve learned to code by shipping projects, breaking home servers, reading documentation late at night, and learning from strangers on the internet who posted open-source repositories and detailed tutorials.
                  </p>

                  <p>
                    Today, my focus is locked on where AI meets real-world software engineering: multi-agent orchestration, multimodal reasoning, and pragmatic edge deployment.
                  </p>

                  <p>
                    I&apos;m excited to keep building, breaking things, and sharing the process out in the open.
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

        {/* Generative Modular Identity Cascade */}
        <div className="flex flex-col items-end md:items-center justify-end md:justify-start relative md:sticky md:top-0 -mt-32 sm:-mt-40 md:-mt-8 -mb-4 md:mb-0 h-fit rotate-180 md:rotate-0 w-20 sm:w-28 md:w-full ml-auto md:ml-0">
          <GenerativeCascade
            columns={9}
            rows={15}
            cellSize={100}
            className="w-2/3"
          />
        </div>
      </div>
    </main>
  );
}
