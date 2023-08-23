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
import {
  faSquareArrowUpRight,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PhotoTitleLinkTable, {
  DynamicTable,
} from "../partials/dashboard/DynamicTable";
import COA from "../partials/dashboard/COA";
import { articles, podcasts, socialData } from "../utils/Data";
import VideoCard from "../partials/dashboard/VideoCard";
import Videos from "./Videos";
import Subscribe from "../partials/Subscribe";
import { NavLink } from "react-router-dom";

export const Dashboard = ({ rates, demographics, type }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden ">
        {/* Sidebar */}
        {/*<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />*/}

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-full">
          {/*  Site header */}
          <Header />
          <Subscribe />

          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              
              {/* Welcome banner */}
              <WelcomeBanner type={type} />

              <div className="text-3xl font-bold text-slate-800 mt-12 mb-7">
                {type === "media" ? "Media " : null} Dashboard
              </div>
              
              <div className="font-md text-slate-800 mt-2 mb-7 p-4 bg-blue-100 rounded flex flex-row justify-between">   
                <div>
                <div className="font-semibold flex flex-row"> <FontAwesomeIcon icon={faBullhorn}  className="pt-1" /> <div className="pl-2">A sample chapter of my memoir has been released, listen here.</div>
                </div>
                <div className="text-xs font-md pl-6">My portion of the proceeds from this book will be donated to research.
                </div>
                </div>
                <a href={'https://youtu.be/wPZhLBkHhwY'} target="_blank" className="text-indigo-800 flex flex-row ">
                  <div className="h-full self-center p-2">
                    <FontAwesomeIcon icon={faSquareArrowUpRight} />
                  </div>
            </a>
                {/* <div className="mr-6 h-full self-center text-indigo-900 font-bold">Listen Here  </div> */}
                
              </div>
              {/* Cards */}
              <div className="ml-5 text-3xl mb-4 font-medium">Socials</div>
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
                    {rates ? (
                      <TopChannels size="small" />
                    ) : (
                      <TopChannels size="large" />
                    )}
                    {rates ? (
                      <Customers size="small" />
                    ) : (
                      <Customers size="large" />
                    )}
                  </>
                ) : null}

                {rates ? <Rates /> : null}

                <DynamicTable
                  data={podcasts(type)}
                  tableTitle={"Podcasts"}
                  size={demographics ? "small" : "large"}
                />
                {demographics ? (
                  <Demographics className="md:block hidden" />
                ) : null}
                <COA type={type} />

                {type === "media" ? (
                  <DynamicTable
                    data={articles}
                    tableTitle={"News/Articles"}
                    size="large"
                  />
                ) : null}

                {/*<PhotoTitleLinkTable*/}
                {/* Card (Recent Activity) */}
                {/*<DashboardCard12 />*/}
              </div>
              <hr className="w-full mt-10" />
              <div >
              <Videos /></div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="bottom-20 left-0 w-full p-4">
      <div className="container mx-auto text-left text-sm">
        <NavLink to="/privacy" className="text-gray-500">
          Privacy Policy
        </NavLink>
      </div>
    </footer>
  );
};

export default Dashboard;
