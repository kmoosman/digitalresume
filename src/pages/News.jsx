import React, { useState } from "react";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";

import PhotoTitleLinkTable, {
  DynamicTable,
} from "../partials/dashboard/DynamicTable";
import { articles, podcasts, socialData } from "../utils/Data";
import TopBanner from "../partials/dashboard/TopBanner";

export const News = ({ type }) => {
  const banner = {
    title: "News / Blogs / Articles",
    description:
      "Interview requests can be directed to katiekickscancer@gmail.com",
    blurb: "A list of news articles and blogs.",
    link: "https:www.amazon.com/Too-Young-Cancer-Diagnosis-Fighting-ebook/dp/B0CW1HKPWJ/ref=sr_1_1?crid=C1QQ3FZLJOZ2&dib=eyJ2IjoiMSJ9.86WEKCmVExWphXE6fnD2hA.C6tU4YMPD58Hyq95PwDK8iSixRxUMOgjL0tnheXL238&dib_tag=se&keywords=9781639109449&qid=1709230552&sprefix=9781639109449%2Caps%2C68&sr=8-1",
    buttonText: "PRE-ORDER 📚",
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-800">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />

        <main>
          <TopBanner banner={banner} />
          <div className="my-10 md:px-20 p-4 md:p-0 mx-auto">
            <div className="text-3xl font-bold text-white mb-7">
              News and Articles
            </div>
            <DynamicTable
              data={articles}
              tableTitle={"News/Articles"}
              size="large"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default News;
