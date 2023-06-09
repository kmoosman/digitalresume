import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardCard from "../partials/dashboard/DashboardCard";
import Demographics from "../partials/dashboard/Demographics";
import TopChannels from "../partials/dashboard/TopChannels";
import Customers from "../partials/dashboard/Customers";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";
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
import COA from "../partials/dashboard/COA";
import {
  articles,
  podcasts,
  socialData,
  tikTokVideos,
  youtubeVideos,
} from "../utils/Data";
import PodcastCard from "../partials/dashboard/PodcastCard";
import VideoCard from "../partials/dashboard/VideoCard";

export const Videos = ({ type }) => {
  return (
    <div className="">
      <div className="text-3xl  text-slate-500 font-medium mt-10 mb-4 ml-5">
        {type !== "query" ? "YouTube" : "YouTube"}
      </div>
      {/*youtube video*/}
      <div className="mb-6 grid grid-cols-4 gap-4">
        {youtubeVideos().map((video) => (
          <VideoCard
            title={video.title}
            link={video.link}
            key={video.id}
            viewCount={video.viewCount}
            size={"medium"}
          />
        ))}
      </div>

    
    </div>
  );
};

export default Videos;
