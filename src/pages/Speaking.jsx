import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import TopBanner from "../partials/dashboard/TopBanner";

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

import { articles, podcasts, socialData, speaking } from "../utils/Data";
import PodcastCard from "../partials/dashboard/PodcastCard";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

export const Speaking = () => {
  const banner = {
    title: "Speaking Engagements",
    description:
      "To request or book a speaking engagement, please contact me at katiekickscancer@gmail.com",
    blurb: "A list of past speaking engagements.",
    link: "https:www.amazon.com/Too-Young-Cancer-Diagnosis-Fighting-ebook/dp/B0CW1HKPWJ/ref=sr_1_1?crid=C1QQ3FZLJOZ2&dib=eyJ2IjoiMSJ9.86WEKCmVExWphXE6fnD2hA.C6tU4YMPD58Hyq95PwDK8iSixRxUMOgjL0tnheXL238&dib_tag=se&keywords=9781639109449&qid=1709230552&sprefix=9781639109449%2Caps%2C68&sr=8-1",
    buttonText: "PRE-ORDER 📚",
    icon: faCalendarDay,
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-800">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />

        <main>
          <TopBanner banner={banner} />
          <div className="my-10 md:px-20 p-4 md:p-0 mx-auto">
            <div className="text-3xl font-bold text-white mt-5 mb-7">
              Past and Upcoming
            </div>

            <div className="grid grid-cols-12 gap-6 mb-6 ">
              {speaking
                .sort((a, b) => b.id - a.id)
                .map((podcast) => (
                  <PodcastCard
                    title={podcast.title}
                    blurb={podcast.description}
                    type="speaking"
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

export default Speaking;
