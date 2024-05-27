import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import { resources } from "../utils/Data";
import TopBanner from "../partials/dashboard/TopBanner";
import CarouselComponent from "../partials/dashboard/CarouselComponent";

import PhotoTitleLinkTable, {
  DynamicTable,
} from "../partials/dashboard/DynamicTable";

import { articles, podcasts, socialData } from "../utils/Data";
import PodcastCard from "../partials/dashboard/PodcastCard";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

export const Resources = ({ banner, list, header }) => {
  const [highlighted, setHighlighted] = useState([]);
  useEffect(() => {
    setHighlighted(list.filter((item) => item.highlighted));
  }, [list]);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-800">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />

        <main>
          <TopBanner banner={banner} />
          <div className="my-10 md:px-20 p-4 pl-6 pr-6 md:p-0 mx-auto">
            <div className="text-3xl font-bold text-white mt-5 mb-7">
              Highlighted {header}
            </div>
            <CarouselComponent cards={highlighted} />

            <div className="text-3xl font-bold text-white mt-12 mb-7 ">
              All {banner.title}
            </div>

            <div className="grid grid-cols-12 gap-6 mb-6 ">
              {list
                .sort((a, b) => b.id - a.id)
                .map((podcast) => (
                  <PodcastCard
                    title={podcast.name}
                    blurb={podcast.description}
                    type="podcast"
                    link={podcast.link}
                    key={podcast.id}
                    image={podcast.image}
                  />
                ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Resources;
