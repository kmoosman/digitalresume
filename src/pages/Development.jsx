import React, { useState } from "react";
import Header from "../partials/Header";

import TopBanner from "../partials/dashboard/TopBanner";
import CarouselComponent from "../partials/dashboard/CarouselComponent";

import PodcastCard from "../partials/dashboard/PodcastCard";
import { applications, tikTokVideos, youtubeVideos } from "../utils/Data";

export const Development = ({ banner, header }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-800">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />

        <main>
          <TopBanner banner={banner} />
          <div className="my-10 md:px-20 p-4 pl-6 pr-6 md:p-0 mx-auto">
            <div className="text-3xl font-bold text-white mt-5 mb-7 md:px-20">
              {header}
            </div>
            <CarouselComponent
              cards={applications.filter((a) => a.state === "deployed")}
            />
          </div>

          <div className="md:px-20 pb-10 p-4 pl-6 pr-6 md:p-0 mx-auto">
            <div className="text-3xl font-bold text-white md:mt-12 mb-7">
              In Development{" "}
              <span className="text-sm">(in beta or alpha testing)</span>
            </div>

            <div className="grid grid-cols-12 gap-6 mb-6 ">
              {applications
                .filter((a) => a.state !== "deployed")
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

export default Development;
