"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Film, Play } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  description?: string;
  highlight?: boolean;
}

const reelVideos: VideoItem[] = [
  {
    id: "54MyIO-UOB8",
    title: "Cinematic Highlight Reel",
    description: "Featured showreel demonstrating camera direction, color grading, and editing.",
    highlight: true,
  },
  { id: "I4fYo43WfH0", title: "The Doll Shop" },
  { id: "mvSw0ZGY4fI", title: "ROTC" },
  { id: "gEP2xrddRsg", title: "In the Blink of an Eye" },
  { id: "rF4MBhAa3tw", title: "Ratchaburi Field Trip" },
  { id: "owEMcK41SIc", title: "USA Vlog" },
  { id: "Uqcmcz8hZVw", title: "Farewell for Wakayama University Students" },
];

export default function ReelPage() {
  const highlightVideo = reelVideos.find((v) => v.highlight) || reelVideos[0];
  const otherVideos = reelVideos.filter((v) => v.id !== highlightVideo.id);

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 space-y-16">
      {/* ========================================================================= */}
      {/* SECTION 1: HEADER & INTRO                                                 */}
      {/* ========================================================================= */}
      <section className="space-y-6 border-b border-border pb-12">
        <div>
          <span className="font-mono text-xs text-muted uppercase tracking-widest flex items-center gap-1.5 mb-2">
            <Film size={14} />
            FILMMAKING & MEDIA / V2.0
          </span>
          <h1 className="font-pixel text-5xl sm:text-6xl lg:text-7xl text-foreground">
            SHOWREEL
          </h1>
        </div>
        <p className="font-mono text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
          A selection of short films, documentary vlogs, university exchanges, and client video projects
          written, shot, and edited by Sean.
        </p>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: FEATURED VIDEO SPOTLIGHT                                       */}
      {/* ========================================================================= */}
      <section className="space-y-4">
        <div className="flex justify-between items-center border-b border-border/60 pb-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted font-bold">
            MAIN SHOWREEL
          </span>
          <span className="font-mono text-xs text-muted">{highlightVideo.title}</span>
        </div>
        <div className="w-full">
          <VideoCard video={highlightVideo} index={0} isLarge />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: VIDEO ARCHIVE GRID                                             */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted font-bold border-b border-border/60 pb-2">
          FILM ARCHIVE & SHORTS ({otherVideos.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherVideos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index + 1} />
          ))}
        </div>
      </section>
    </main>
  );
}

function VideoCard({
  video,
  index,
  isLarge = false,
}: {
  video: VideoItem;
  index: number;
  isLarge?: boolean;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 * index }}
      className={`rounded-2xl border border-border bg-card overflow-hidden flex flex-col justify-between group ${
        isLarge ? "shadow-2xl" : ""
      }`}
    >
      <div className={`w-full aspect-video bg-neutral-950 relative ${isLarge ? "max-h-[580px]" : ""}`}>
        {!isPlaying ? (
          <div
            className="absolute inset-0 cursor-pointer group"
            onClick={() => setIsPlaying(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setIsPlaying(true)}
            aria-label={`Play ${video.title}`}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center pl-0.5 shadow-lg">
                  <Play size={18} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            className="w-full h-full border-0"
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      <div className="p-4 flex items-center justify-between border-t border-border font-mono text-xs">
        <span className="text-foreground font-semibold truncate pr-2">{video.title}</span>
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground shrink-0 uppercase tracking-widest text-[10px]"
        >
          YouTube ↗
        </a>
      </div>
    </motion.div>
  );
}
