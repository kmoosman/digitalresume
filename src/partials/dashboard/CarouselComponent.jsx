import React from "react";
import Slider from "react-slick";
import bookCover from "../../images/book-cover.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = ({ cards, autoscroll = true }) => {
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

  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {cards
          ?.sort((a, b) => b.id - a.id)
          .map((card, index) => (
            <div key={index} className="p-4">
              <div className="bg-background-image bg-cover bg-center p-6 rounded-lg shadow-lg h-80">
                <img
                  className=" w-40 mx-auto rounded-lg mb-7"
                  src={card.image}
                  alt="cover"
                />
                <h2 className="text-xl font-bold mb-2">{card.name}</h2>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
