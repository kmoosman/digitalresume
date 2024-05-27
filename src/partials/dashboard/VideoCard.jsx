import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/additional-styles/custom-carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { iconStyling } from "../../utils/Utils";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

const VideoCard = ({ card, autoscroll = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoType, setVideoType] = useState("youtube");
  library.add(fab);

  const openPopup = (url, size) => {
    setVideoUrl(url);
    setVideoType(size);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setVideoUrl("");
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  const getTitle = (description) => {
    if (!description.includes("#")) {
      return description;
    }
    const title = description.split("#")[0];
    return title;
  };

  const isDesktop = () => {
    return window.innerWidth >= 768; // Tailwind's md breakpoint is 768px
  };

  return (
    <div className="container mx-auto">
      {/* is cards is an empty array show an empty state */}

      <div key={card.id} className="p-4">
        <div
          className="bg-background-image bg-cover bg-center p-6 rounded-lg shadow-lg h-80 cursor-pointer"
          onClick={() => {
            if (card.type === "video" && isDesktop()) {
              openPopup(card.link, card.size);
            } else {
              window.open(card.link, "_blank");
            }
          }}
        >
          {card.size === "tiktok" && card.image === "tiktok" ? (
            <div className="flex justify-center items-center mb-5 text-white justify-center w-20 h-20 rounded-lg bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-indigo-400 to-violet-900 shadow-md">
              {<FontAwesomeIcon icon={iconStyling["TikTok"]} />}
            </div>
          ) : (
            <img
              className="max-h-40 mx-auto rounded-lg mb-3"
              src={card.image}
              alt="cover"
            />
          )}
          <h2 className="text-xl font-bold mb-2 line-clamp-2">
            {getTitle(card?.description) ?? card.name}
          </h2>
          <div className="overflow-y-auto overflow-scroll h-12">
            <p className="text-gray-700 h-20 overflow-scroll">
              {card.description}
            </p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={handleBackgroundClick}
        >
          <div className="relative bg-white p-4 rounded-lg">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-black"
            >
              &times;
            </button>
            <iframe
              src={videoUrl}
              className={`rounded-lg ${
                videoType === "tiktok"
                  ? "lg:h-[515px] lg:w-[760px"
                  : "lg:h-[515px] lg:w-[760px]"
              }`}
              allow="encrypted-media"
              title="Video"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
