import { useState } from "react";

export interface HoverProps {
  text?: string;
  link?: string;
  embededLink?: string;
}

const HoverPopUp: React.FC<HoverProps> = ({
  text = "default",
  link = "#",
  embededLink = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="relative inline-block">
        {embededLink ? (
          isHovered && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-raisinBlack text-white rounded-lg shadow-lg overflow-hidden w-[300px] h-[200px]">
              <iframe
                className="w-[600px] h-[400px] border-0 scale-[0.5] origin-top-left"
                src={embededLink}
              ></iframe>
            </div>
          )
        ) : (
          <span></span>
        )}

        <a
          href={link}
          target="_blank"
          className="font-bold text-white cursor-pointer hover:underline"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {text}
        </a>
      </div>
    </>
  );
};

export default HoverPopUp;
