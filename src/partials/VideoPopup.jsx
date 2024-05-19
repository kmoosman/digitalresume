import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const VideoPopup = ({ videoType = "tiktok", videoSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  // Determine dimensions based on video type
  const videoDimensions =
    videoType === "youtube"
      ? { height: "315px", width: "560px" }
      : { height: "550px", width: "400px" };

  return (
    <div>
      <div
        className="col-span-1 justify-end flex cursor-pointer p-4"
        onClick={openPopup}
      >
        <FontAwesomeIcon
          icon={faVideo}
          className="bg-slate-700 text-slate-100 text-2xl border p-4 rounded-lg"
        />
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
              src={videoSrc}
              className="rounded-lg"
              style={{
                height: videoDimensions.height,
                width: videoDimensions.width,
              }}
              allow="encrypted-media"
              title="Video"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPopup;
