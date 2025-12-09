import React from "react";
import { showreels } from "../../../data/showreel";
import type { Showreel } from "../../../data/showreel";

interface ReelCardProps {
  showreel: Showreel;
}

const ReelCard: React.FC<ReelCardProps> = ({ showreel }) => {
  return (
    <div>
      <div>
        <a href={"https://www.youtube.com/watch?v=" + showreel.url}>
        {showreel.type === "video" ? (
          <img
            src={"https://img.youtube.com/vi/" + showreel.url + "/hqdefault.jpg"}
            className="w-[230px] h-[130px] object-cover"
            alt={showreel.title}
          ></img>
        ) : showreel.type === "short" ? (
          <img
            src={"https://img.youtube.com/vi/" + showreel.url + "/hqdefault.jpg"}
            className="w-[75px] h-[130px] object-cover"
            alt={showreel.title}
          ></img>
        ) : (
          <img
            src={"https://img.youtube.com/vi/" + showreel.url + "/hqdefault.jpg"}
            className="w-[75px] h-[130px] object-cover"
            alt={showreel.title}
          ></img>
        )}</a>
      </div>
    </div>
  );
};
export default ReelCard;
