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
          <PreOrder />

          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              
              {/* Welcome banner */}
              <WelcomeBanner type={type} />

              <div className="text-3xl font-bold text-slate-800 mt-12 mb-7">
                {type === "media" ? "Media " : null} Dashboard
              </div>
              <a href={'https://youtu.be/wPZhLBkHhwY'} 
              target="_blank"  
              onClick={() => {
                ReactGA.event({
                  category: 'External Links',
                  action: 'Clicked Sample Chapter Link',
                  label: 'Too Young for Cancer - https://youtu.be/wPZhLBkHhwY'
                });
              }} >
              <div className="font-md text-slate-800 mt-2 mb-7 p-4 bg-yellow-100 rounded flex flex-row justify-between">   
                <div>
                <div className="font-semibold flex flex-row"> <FontAwesomeIcon icon={faBullhorn}  className="pt-1" /> <div className="pl-2">Pre-orders now available for my memoir, Too Young For Cancer 📚</div>
                </div>
                <div className="text-xs font-md pl-6">My portion of the proceeds from this book are donated to research, including speaking engagements and other related efforts. 
                </div>
                <div className="text-xs font-md pl-6">Pre-orders typically count towards the first week of sales, and can help the book be successful and reach the people who need it most. </div>
                <div className="text-xs font-md pl-6">So pre-orders make a big impact and mean the world to me, let's make an impact- together!</div>
                </div>
                
                  <div className="h-full self-center p-2 text-indigo-800">
                    <FontAwesomeIcon icon={faSquareArrowUpRight} />
                    </div>
              </div>
              {/* Work */}
              <div className="font-md text-slate-800 mt-2 mb-7 p-4 bg-blue-100 rounded flex flex-row justify-between">   
                <div>
                <div className="font-semibold flex flex-row"> <FontAwesomeIcon icon={faBullhorn}  className="pt-1" /> <div className="pl-2">Race Cancer Research Foundation / Tumor Tissue Donation</div>
                </div>
                <div className="text-xs font-md pl-6">After my prognosis changed, I promised myself I'd use the time I was given to make things better for others who may come behind me some day. This since has led me to joining the <a href="https://rarecancer.org/initiatives" className="text-indigo-600">Rare Cancer Research Foundation.</a>
                </div>
                <div className="text-xs font-md pl-6">You can hear more about the initiatives we're working on including tissue donation for rare cancers <a href="https://youtu.be/K97HebR7JPI" className="text-indigo-600" >here.</a> </div>
                </div>
                
                  <div className="h-full self-center p-2 text-indigo-800">
                    <FontAwesomeIcon icon={faSquareArrowUpRight} />
                    </div>
              </div>
              </a>
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
