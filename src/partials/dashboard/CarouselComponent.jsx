import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/additional-styles/custom-carousel.css";

const CarouselComponent = ({ cards, autoscroll = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoType, setVideoType] = useState("youtube");

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: autoscroll,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

  const isDesktop = () => {
    return window.innerWidth >= 768; // Tailwind's md breakpoint is 768px
  };

  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {cards
          ?.sort((a, b) => b.id - a.id)
          .map((card, index) => (
            <div key={index} className="p-4">
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
                <img
                  className="max-h-40 mx-auto rounded-lg mb-7"
                  src={card.image}
                  alt="cover"
                />

                <h2 className="text-xl font-bold mb-2">{card.name}</h2>
                <div className="h-30 overflow-scroll">
                  <p className="text-gray-700">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
      </Slider>

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
                videoType === "tikTok"
                  ? "lg:h-[515px] lg:w-[760px"
                  : "lg:h-[515px] lg:w-[760px]"
              }`}
              // Example dimensions for YouTube
              allow="encrypted-media"
              title="Video"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselComponent;
