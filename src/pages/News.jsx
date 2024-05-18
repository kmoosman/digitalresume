import React, { useState } from "react";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";

import PhotoTitleLinkTable, {
  DynamicTable,
} from "../partials/dashboard/DynamicTable";
import { articles, podcasts, socialData } from "../utils/Data";

export const News = ({ type }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-800">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />

        <main>
          <WelcomeBanner type={type} />
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
