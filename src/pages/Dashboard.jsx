import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardCard from "../partials/dashboard/DashboardCard";
import { youtubeVideos, podcasts, socialData, highlights } from "../utils/Data";
import { NavLink } from "react-router-dom";
import PreOrder from "../partials/Pre-Order";
import CarouselComponent from "../partials/dashboard/CarouselComponent";
import { HighlightCards } from "../partials/dashboard/HighlightCard";

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

          <main className="">
            <div className="w-full ">
              <div className="h-3/4 bg-background-image bg-cover bg-center">
                {/* Welcome banner */}
                <WelcomeBanner type={type} />
              </div>
              <div className="w-full grid grid-cols-6 self-center justify-center bg-slate-800 p-10">
                {/* Cards */}
                <div className="text-white text-left pl-10 text-4xl col-span-4 ">
                  Social Media
                </div>
                <div className="flex justify-center w-full col-span-2">
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
                  Book / Nonprofit / Work
                </h2>
                <div className="ml-10 mr-10">
                  {highlights
                    .sort((a, b) => a.id - b.id)
                    .map((highlight) => (
                      <HighlightCards
                        key={highlight.id}
                        highlight={highlight}
                      />
                    ))}
                </div>
                <div className="w-full bg-slate-800 self-center justify-center pb-10">
                  <h2 className="text-white font-medium pt-10 mt-10 text-left ml-20 text-4xl mb-5">
                    Podcasts{" "}
                  </h2>
                  <CarouselComponent cards={podcasts} />
                </div>
              </div>
              {/* <Videos /> */}
              <div>
                <div className="bg-background-image bg-cover bg-center">
                  <h2 className="text-slate-800 font-medium pt-10  text-left ml-20 text-4xl">
                    Videos
                  </h2>
                  <CarouselComponent cards={youtubeVideos} />
                </div>
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
