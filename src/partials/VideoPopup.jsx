import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const VideoPopup = () => {
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

  return (
    <div>
      <div
        className="col-span-1 justify-end flex = bg-slate-100 cursor-pointer p-4"
        onClick={openPopup}
      >
        <FontAwesomeIcon
          icon={faVideo}
          className="bg-slate-700 text-white text-2xl border p-4 rounded-lg"
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
              src="https://www.tiktok.com/embed/7341189876420840746"
              className="h-[550px] w-[400px] rounded-lg"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPopup;
