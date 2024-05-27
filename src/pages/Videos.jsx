import React, { useEffect, useState } from "react";
import Header from "../partials/Header";

import TopBanner from "../partials/dashboard/TopBanner";
import CarouselComponent from "../partials/dashboard/CarouselComponent";

import PodcastCard from "../partials/dashboard/PodcastCard";
import { tikTokVideos, youtubeVideos } from "../utils/Data";
import VideoCard from "../partials/dashboard/VideoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBullhorn,
  faCloudRain,
  faCloudSunRain,
  faCode,
  faHandHoldingHeart,
  faHospital,
  faImage,
  faPen,
  faCalendarDay,
  faHeart,
  faLaugh,
  faSun,
  faVideoSlash,
  faFaceGrinTears,
} from "@fortawesome/free-solid-svg-icons";

export const Videos = ({ banner, header }) => {
  const list = [...youtubeVideos, ...tikTokVideos];
  const [showCategory, setShowCategory] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState();
  const [filteredVideos, setFilteredVideos] = useState(list);
  const [highlitedVideos, setHighlightedVideos] = useState([]);

  const videoCategories = [
    { name: "Scans", id: 1, value: "scans", icon: faImage },
    {
      name: "Encouragement",
      id: 2,
      value: "encouragement",
      icon: faHandHoldingHeart,
    },
    { name: "Advocacy", id: 3, value: "advocacy", icon: faBullhorn },
    {
      name: "Treatment / Recovery",
      id: 4,
      value: "treatment",
      icon: faHospital,
    },
    { name: "Humor", id: 5, value: "humor", icon: faFaceGrinTears },
    { name: "Mental Health", id: 6, value: "mental_health", icon: faHeart },
    { name: "Uplifting", id: 7, value: "uplifting", icon: faSun },
    { name: "Grief", id: 8, value: "grief", icon: faCloudSunRain },
    { name: "Programming", id: 9, value: "programming", icon: faCode },
    { name: "Writing", id: 10, value: "writing", icon: faPen },
    {
      name: "Day in the Life",
      id: 11,
      value: "day_in_the_life",
      icon: faCalendarDay,
    },
    { name: "All", id: 9, value: "all" },
  ];

  useEffect(() => {
    const highlightedVideos = list.filter((video) => video.highlighted);
    setHighlightedVideos(highlightedVideos);
  }, [filteredVideos]);
  const onCategorySelect = (category) => {
    const filteredSelection = list
      .filter(
        (video) =>
          category.value === "all" ||
          video?.categories?.includes(category.value)
      )
      .sort((a, b) => b.date - a.date);

    setFilteredVideos(filteredSelection);
    setSelectedCategory(category.value);
    setShowCategory(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-800">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />

        <main>
          <TopBanner banner={banner} />
          <div className="my-10 md:px-20 p-4 pl-6 pr-6 md:p-0 mx-auto">
            <div className="text-3xl font-bold text-white mt-5 mb-7 md:px-20 animate-fade-in">
              Highlighted {header}
            </div>
            <CarouselComponent cards={highlitedVideos} />
          </div>

          {showCategory ? (
            <>
              <div className="flex mx-20 mt-12 pb-3">
                <button className="bg-slate-800 text-white md:text-left text-center w-full rounded-md font-semibold text-3xl animate-fade-in">
                  Categories
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 px-20 mt-7 mb-20">
                {videoCategories?.map((category) => (
                  <div
                    className="bg-background-image bg-cover bg-center shadow-lg flex flex-col rounded-sm border border-slate-200 text-slate-800 text-center p-4 justify-center items-center"
                    onClick={() => onCategorySelect(category)}
                  >
                    <div className="mb-2 text-xl font-semibold animate-fade-in-down">
                      {category.name}
                    </div>
                    <FontAwesomeIcon
                      icon={category.icon}
                      className="w-32 h-32 text-gray-500 animate-fade-in"
                    />
                  </div>
                ))}
              </div>
            </>
          ) : null}

          {selectedCategory && (
            <div className="md:px-20">
              <div className="text-3xl text-center md:text-left font-bold text-white mt-12 mb-7">
                {banner.title}{" "}
                <button
                  onClick={() => setShowCategory(true)}
                  className="text-md underline text-indigo-300"
                >
                  (show all categories)
                </button>
              </div>

              {filteredVideos.length === 0 && (
                <div className="text-center text-2xl text-slate-400 mt-5 flex flex-col gap-4 p-4 w-1/4 border border-slate-400 rounded mx-auto mb-10">
                  <FontAwesomeIcon
                    icon={faVideoSlash}
                    className="text-4xl text-slate-400"
                  />
                  <div>No videos available</div>
                </div>
              )}

              <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4">
                {filteredVideos.map((video) => (
                  <VideoCard card={video} />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Videos;
