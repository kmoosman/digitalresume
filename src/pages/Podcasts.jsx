import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";

import Banner from "../partials/Banner";
import { Rates } from "../partials/dashboard/Rates";

import CBS from "../images/cbs.png";
import NBC from "../images/nbc.png";
import TODAY from "../images/Today_logo.svg.png";
import INSIDE_EDITION from "../images/inside-edition.png";
import INSIDE from "../images/insider.png";
import KAISER from "../images/kaiser.png";
import SEVEN_NEWS from "../images/7news.png";
import YAHOO from "../images/yahoo.jpeg";
import NIH from "../images/NIH.png";
import MSN from "../images/msn.png";
import KCCURE from "../images/kccure.png";

import PhotoTitleLinkTable, {
  DynamicTable,
} from "../partials/dashboard/DynamicTable";

import { articles, podcasts, socialData } from "../utils/Data";
import PodcastCard from "../partials/dashboard/PodcastCard";

export const Podcasts = ({ type }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-800">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />

        <main>
          <WelcomeBanner type={type} />
          <div className="my-10 md:px-20 p-4 md:p-0 mx-auto">
            <div className="text-3xl font-bold text-white mt-5 mb-7">
              Podcast Episodes
            </div>

            <div className="grid grid-cols-12 gap-6 mb-6 ">
              {podcasts
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

export default Podcasts;
