"use client";

import { useState } from "react";

import { motion } from "framer-motion";

export default function ReelPage() {
  const videos = [
    { id: "I4fYo43WfH0", title: "The Doll Shop" },
    { id: "mvSw0ZGY4fI", title: "ROTC" },
    { id: "gEP2xrddRsg", title: "In the blink of an eye" },
    { id: "rF4MBhAa3tw", title: "Ratchaburi Field Trip" },
    { id: "owEMcK41SIc", title: "USA Vlog"},
    { id: "Uqcmcz8hZVw", title: "Farewell for Wakayama University students"}
  ];

  return (
    <main className="min-h-screen max-w-screen mx-auto px-6 lg:px-20 pt-32 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-pixel text-4xl lg:text-6xl mb-12 text-black dark:text-white text-center"
        >
          SHOWREEL
        </motion.h1>
        <motion.div className="grid gap-8">
          <VideoCard key="54MyIO-UOB8" id="54MyIO-UOB8" index={0} />
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {videos.map((video, index) => (
              <VideoCard key={video.id} id={video.id} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

function VideoCard({ id, index }: { id: string; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className="aspect-video bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden relative group shadow-2xl"
    >
      {!isPlaying ? (
        <div 
          className="absolute inset-0 cursor-pointer" 
          onClick={() => setIsPlaying(true)}
        >
          <img 
            src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} 
            alt="Video thumbnail"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center pl-1 shadow-lg">
                <span className="material-symbols-outlined text-3xl mr-1.25">play_arrow</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          className="w-full h-full"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </motion.div>
  );
}
