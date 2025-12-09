import React, { useEffect, useState } from "react";
import { showreels } from "../../../data/showreel";
import Reelcard from "./Reelcard";

const Reels = () => {
  const [randomReels] = useState(() => [...showreels].sort(() => 0.5 - Math.random()));

  useEffect(() => {
    document.title = "Seanstlab";
  }, []);

  return (
    <body className="text-white font-JetBrain bg-night">
      <div className="flex flex-col min-w-screen min-h-screen mx-auto pt-7 items-center">
        <h1 className="text-4xl font-bold p-10">SHOWREEL</h1>
        <div className="flex flex-wrap justify-center gap-2 max-w-[100vw]">
          {randomReels.map((showreel) => (
            <Reelcard key={showreel.id} showreel={showreel} />
          ))}
        </div>
      </div>
    </body>
  );
};

export default Reels;