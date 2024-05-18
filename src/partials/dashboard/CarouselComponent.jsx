import React from "react";
import Slider from "react-slick";
import bookCover from "../../images/book-cover.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  const cards = [
    { title: "Memoir", description: "Too Young for Cancer" },
    { title: "Card 2", description: "This is the description for card 2" },
    { title: "Card 3", description: "This is the description for card 3" },
    { title: "Card 4", description: "This is the description for card 4" },
    { title: "Card 5", description: "This is the description for card 5" },
  ];

  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-4">
            <div className="bg-background-image bg-cover bg-center p-6 rounded-lg shadow-lg">
              <img className="h-40 w-40" src={bookCover} alt="cover" />
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
