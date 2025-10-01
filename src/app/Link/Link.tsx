import React from "react";
import { useEffect } from "react";

const Link = () => {
  useEffect(() => {
    document.title = "Links";
  }, []);
  return (
    <div className="fixed bg-night text-white font-JetBrain w-screen h-screen">
      <div className=" flex flex-col max-w-[400px] min-h-screen mx-auto justify-center ">
        <h2 className="text-center text-2xl  font-bold pt-5">Links</h2>
        <div className="flex flex-wrap gap-5 items-center text-center justify-center p-5">
          <a
            href="https://github.com/SeanNachapat"
            target="_blank"
            className="flex outline outline-white rounded-full p-2 hover:scale-105 transition-all"
          >
            Github
          </a>
          <a
            href="https://www.instagram.com/seanst._/"
            target="_blank"
            className="flex outline outline-white rounded-full p-2 hover:scale-105 transition-all"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@Seanst"
            target="_blank"
            className="flex outline outline-white rounded-full p-2 hover:scale-105 transition-all"
          >
            Youtube
          </a>
          <a
            href="https://www.tiktok.com/@seanst._"
            target="_blank"
            className="flex outline outline-white rounded-full p-2 hover:scale-105 transition-all"
          >
            TikTok
          </a>
          <a
            href="/"
            className="flex outline outline-white rounded-full p-2 hover:scale-105 transition-all"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Link;
