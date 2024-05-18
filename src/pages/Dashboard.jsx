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
import ReactGA from "react-ga4";

import PhotoTitleLinkTable, {
  DynamicTable,
} from "../partials/dashboard/DynamicTable";
import COA from "../partials/dashboard/COA";
import { articles, podcasts, socialData } from "../utils/Data";
import VideoCard from "../partials/dashboard/VideoCard";
import Videos from "./Videos";
import Subscribe from "../partials/Subscribe";
import { NavLink } from "react-router-dom";
import PreOrder from "../partials/Pre-Order";
import Memoir from "../partials/dashboard/Memoir";
import CarouselComponent from "../partials/dashboard/CarouselComponent";

export const Dashboard = ({ rates, demographics, type }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        {/*<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />*/}

        {/* Content area */}
        <div className="relative flex flex-col  overflow-y-auto overflow-x-hidden w-full">
          {/*  Site header */}
          <Header />
          <PreOrder />

          <main className="bg-slate-800">
            <div className="w-full mx-auto">
              <div className="h-[600px]">
                {/* Welcome banner */}
                <WelcomeBanner type={type} />
              </div>
              <div className="w-full grid grid-cols-3 self-center justify-center">
                {/* Cards */}
                <div className="text-white text-left ml-20 text-4xl col-span-1">
                  Social Media
                </div>
                <div className="flex justify-end w-full  col-span-2 pr-20">
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
              </div>
              <div className="gap-6 bg-background-image bg-cover bg-center">
                <h2 className="text-slate-800 font-medium pt-10 mt-10 text-left ml-20 text-4xl">
                  Book / NonProfit
                </h2>
                <div className="ml-10 mr-10">
                  <Memoir />
                  <COA type={type} />
                </div>
                <div className="w-full bg-slate-800 self-center justify-center mb-10">
                  <h2 className="text-white font-medium pt-10 mt-10 text-left ml-20 text-4xl mb-5">
                    Podcasts{" "}
                  </h2>
                  <CarouselComponent />
                </div>
              </div>

              <div>
                <div className="bg-background-image bg-cover bg-center">
                  <h2 className="text-slate-800 font-medium pt-10  text-left ml-20 text-4xl">
                    Videos
                  </h2>
                  <CarouselComponent />
                </div>
                {/* <Videos /> */}
              </div>
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
