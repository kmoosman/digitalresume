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
import { articles, podcasts, socialData } from "../utils/Data";

export const Dashboard = ({rates, demographics, type}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      {/*<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />*/}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner type={type} />

            <div className="text-3xl font-bold text-slate-800 mt-12 mb-7">
              {type === "media" ? "Media " : null} Dashboard
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6 mb-6 ">
              {socialData(type).map((social) => (
                <DashboardCard
                  key={social.id}
                  title={social.title}
                  total={social.total}
                  countType={social.countType}
                  link={social.link}
                  blurb={social.blurb}
                  type={type}
                />
              ))}
            </div>
            <div className="grid grid-cols-12 gap-6">
              {type === "media" || type === "query" ? (
                <>
                  {rates ? <TopChannels size="small" /> : <TopChannels size="large" />}
                  {rates ? <Customers size="small" /> : <Customers size="large" />}
                </>
              ) : null}


              {rates ? <Rates /> : null}

              <DynamicTable
                data={podcasts(type)}
                tableTitle={"Podcasts"}
                size={demographics ? "small" : "large"}

              />
              {demographics ? <Demographics /> : null }
              <DynamicTable
                data={articles}
                tableTitle={"News/Articles"}
                size="large"
              />

              <COA />

              {/*<PhotoTitleLinkTable*/}
              {/* Card (Recent Activity) */}
              {/*<DashboardCard12 />*/}
            </div>
          </div>
        </main>

        <Banner />
      </div>
    </div>
  );
};

export default Dashboard;
