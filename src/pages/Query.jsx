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

import Docs from "../images/docs.png";

import PhotoTitleLinkTable, {
  DynamicTable,
} from "../partials/dashboard/DynamicTable";
import COA from "../partials/dashboard/COA";
import {
  articles,
  comparables,
  podcasts,
  socialData,
  tikTokVideos,
  youtubeVideos,
} from "../utils/Data";
import ComparablesCard from "../partials/dashboard/ComparablesCard";
import PodcastCard from "../partials/dashboard/PodcastCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookBookmark,
  faBookJournalWhills,
  faBookMedical,
  faBookOpen,
  faBookmark,
  faContactBook,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import austin from "../images/austin.jpg";
import medium from "../images/medium.png";
import headshot from "../images/profile_headshot (1).png";
import bookcover3 from "../images/bookcover3.png";
import VideoCard from "../partials/dashboard/VideoCard";
import Videos from "./Videos";

export const Query = ({ rates, demographics, type }) => {
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
            {/*<WelcomeBanner type={type} />*/}

            <div className="w-full">
              <div className="flex justify-center w-full mb-16">
                <div className="justify-center">
                <div className="w-48 h-48 rounded-full flex items-center justify-center mx-auto bg-indigo-300 p-2 shadow-md  shadow-slate-700">
                      <FontAwesomeIcon icon={faBookOpen} className="w-32 h-32 text-gray-200"/>
                </div>

                  <div className="justify-center flex flex-row text-5xl font-bold text-slate-800 mt-5 w-full center-text w-full rounded">
                    Life Refocused 
                  </div>
                  <p className="flex justify-center w-full text-2xl font-semibold">
                    Memoir of a life shaped by cancer
                  </p>
                  <p className="flex justify-center w-full text-md font-base">
                    (104,323 words)
                  </p>
                  {/*<div className="w-full w-40 h-40 mx-auto ">*/}
                  {/*  <img*/}
                  {/*    className="mx-auto h-full w-full rounded"*/}
                  {/*    src={bookcover}*/}
                  {/*    width="100"*/}
                  {/*    height="100"*/}
                  {/*    alt="headshot"*/}
                  {/*  />*/}
                  {/*</div>*/}
                </div>
              </div>
              <hr />

              {/*About the book*/}
              <div>
                <div className="text-3xl font-bold text-slate-800 mt-5 mb-4">
                  Summary
                </div>
                <div className="text-sm p-4 flex flex-col col-span-full sm:col-span-12 xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
                  <p className="block p-1">
                New Year's Eve, 2020 was supposed to be a turning point to better days. 
                Instead, Katie, a 29-year-old newlywed, found herself in the ER processing the earth-shattering news of a stage IV cancer diagnosis. 
                One that'd come after years of being assured she was "too young for cancer". 
                Over the next two years, this shy, timid, and frightened young woman would be 
                forced to face her own mortality and learn to advocate for herself. The ultra 
                rare cancer they'd find in her kidney and over 15 tumors in her liver, 
                would render her inoperable and without much hope. 
                But with the help of social media and a few serendipitous events, 
                she'd find herself at the top institutions pleading her case for a 
                radical and high-risk surgery that would change her life forever. 
                A journey that would highlight the absolute best and worst in 
                healthcare and uncover the silver linings and beauty of humanity filling the space in between.
                  </p>
                </div>
              </div>

              {/*Notable Events*/}
              <StandOut />
              {/*Audience*/}
              <div>
                <div className="text-3xl font-bold text-slate-800 mt-12 mb-4">
                  Audience
                </div>
                <div className="flex flex-col col-span-full sm:col-span-4 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
                  <ul className="list-disc text-sm ml-4 p-4">
                    <li className="p-1">
                      <b>Cancer survivors and their families:</b> My story is
                      relatable for those who have gone through a
                      similar experience.{" "}
                    </li>
                    <li className="p-1">
                      <b>Personal development readers:</b> My story of
                      overcoming the odds and finding purpose in life will
                      resonate with readers who are interested in personal
                      growth and self-improvement.
                    </li>
                    <li className="p-1">
                      <b>Health and wellness readers:</b> My book will appeal to
                      readers who are interested in health, wellness, and
                      overcoming adversity. I have a large following of medical 
                      professionals on Twitter who generously support and are interested in the cause.
                    </li>
                    <li className="p-1">
                      <b>Social media followers:</b> I have a following on
                      social media, which could translate into a built-in
                      audience for my book. Some of my videos with the most
                      views are me narrating my story (500k).
                    </li>
                    <li className="p-1">
                      <b>National media readers:</b> National articles have been
                      written about my case, so it is likely to have gained some
                      attention which may lead to readership.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/*Author Bio*/}
            <div>
              <div className="text-3xl font-bold text-slate-800 mt-12 mb-4">
                About the Author
              </div>
              <div className="flex flex-col col-span-full sm:col-span-12 xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
                <div className="p-5">
                  <div className="flex flex-col lg:flex-row xl:flex-row">
                    <div className="w-48 h-48 rounded-lg mr-5 mb-5 self-center ">
                      <img
                        className="h-full w-full rounded"
                        src={headshot}
                        alt="headshot"
                      />
                    </div>
                    <div className="flex w-full">
                        <div className="flex flex-col">
                          <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
                            Katie Coleman •Stage IV Cancer Survivor • Software
                            Engineer • Content Creator • Writer (Memoir) •
                            Non-Profit Founder •
                            Podcaster
                          </div>
                          <div className="text-sm">
                            <p className="p-1">
                              {" "}
                              A little about me – I'm a software engineer, non-profit founder,
                                podcaster, wife, dog/cat mom, and cancer survivor LIVING in Austin,
                                Texas. 
                                I've been sharing and documenting my diagnosis for the past 2.5 years
                                on social media in hopes others who found themselves in my shoes one day,
                                they may feel a little less alone. Those efforts have led to a platform of over 70,000
                                followers across channels that I continue to share with daily. 
                            </p>

                            <p className="p-1">
                            I realize just how truly fortunate I am to still be here
                            and I use that time to give back to others in any way I can.
                            Which is what I spend most of my time doing these days. 
                            Since my diagnosis, I've founded a non-profit, started a podcast,
                            built a strong following in the medical community, been featured by 
                            national outlets including NBC, Today and the CBS National Evening 
                            News and I regularly use my voice and platform to give back. 
                            Due to the reach of my story (last viral post seen by 11 million)
                            has led to a beautiful community of support, that's enabled me to donate everything 
                            I make from social media to research. They've also supported me in building an 
                            email list awaiting my book's release over 500. 
                            </p>
                          </div>
                        </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Writing Examples*/}
            <div>
              <div className="flex  text-3xl font-bold text-slate-800 mt-12 mb-4">
                Blog Articles{" "}
                <span className="pl-2 text-lg self-center text-slate-600 h-full font-medium mb-0 ">
                  (Writing Example)
                </span>
              </div>
              <div className="flex flex-col col-span-full sm:col-span-12 xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
                <div className="p-4">
                  <header className="flex xl:float-right lg:float-right mb-2">
                    {/* Icon */}
                    <div className="hidden  sm:block">
                      <div className="flex items-start ">
                        <div className="text-3xl font-bold text-slate-800 mr-2">
                          {type === "query" ? "" : "Donate"}
                        </div>
                        <a
                          href="https://medium.com/@katie.coleman.ut/having-cancer-made-me-better-at-my-job-5fef3406b4db"
                          target="_blank"
                          className="text-blue-500"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faSquareArrowUpRight} />
                        </a>
                      </div>
                    </div>
                  </header>
                  <div className="flex flex-col lg:flex-row xl:flex-row">
                    {/*image*/}
                    <div className="relative w-40 h-40 aspect-square w-full mx-auto mb-2 sm:mb-2 md:mb-2 lg:mb-0 xl:mb-0 2xl:mb-0 ">
                      <div
                        className={`${
                          false
                            ? "flex items-center justify-center w-40 h-40 rounded-lg bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-indigo-200 to-violet-700 opacity-50 shadow-m"
                            : "hidden"
                        }`}
                      ></div>
                      <img
                        src={medium}
                        alt="blog"
                        className={`${true ? "rounded w-40 h-40" : "hidden"}`}
                      />
                    </div>
                    {/*text section*/}
                    <div className="flex w-full ml-3">
                      <a
                        href="https://medium.com/@katie.coleman.ut/having-cancer-made-me-better-at-my-job-5fef3406b4db"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-col">
                          <h2 className="text-lg font-semibold text-slate-800 mb-2">
                            Having Cancer Made Me Better At My Job
                          </h2>
                          <div className="text-sm">
                            <p className="p-1">
                              {" "}
                              It’s been a long journey of treatment, surgery and
                              procedures but I’ll spare you the details to
                              prevent this from turning into a three part novel.
                              It’s been a wild ride so far and while cancer has
                              become my greatest & most fierce enemy, it has
                              also become my greatest strength. Which is how
                              I’ve found myself here, writing a blog, about how
                              cancer has made me not only a better person but a
                              better employee. So, let’s talk about it by
                              breaking down a few qualities crucial to success
                              in almost any role.
                            </p>
                            <p className="p-1">
                              {" "}
                              So, let’s talk about it by breaking down a few
                              qualities crucial to success in almost any role.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold text-slate-800 mt-12 mb-7">
                Comparables
              </div>
              <div className="grid grid-cols-12 gap-6 mb-6 ">
                {comparables.map((comparable) => (
                  <ComparablesCard
                    title={comparable.name}
                    blurb={comparable.description}
                    type="books"
                    link={comparable.link}
                    key={comparable.id}
                    image={comparable.image}
                    pages={comparable.pages}
                    author={comparable.author}
                  />
                ))}
              </div>
            </div>

            <div className="text-3xl font-bold text-slate-800 mt-20 mb-7">
              Existing Platform
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
              <TopChannels size="large" />
              <Customers size="large" />

              {rates ? <Rates /> : null}

              <DynamicTable
                data={podcasts(type)}
                tableTitle={"Podcasts"}
                size={demographics ? "small" : "large"}
              />
              {/*{demographics ? <Demographics /> : null}*/}
              <DynamicTable
                data={articles}
                tableTitle={"News/Articles"}
                size="large"
              />

              <COA type="query" />
            </div>

            {/* <hr className="w-full mt-6" />
            <div className="text-3xl font-bold text-slate-800 mt-12 mb-7">
              Sample - Life Refocused
            </div>
            <div className="flex flex-col col-span-full sm:col-span-15 xl:col-span-15 bg-white shadow-lg rounded-sm border border-slate-200">
              <div className="px-5 pt-5">
                <header className="flex xl:float-right lg:float-right mb-2">
                  {/* Icon */}
                  {/* <div className="">
                    <div className="flex items-start ">
                      <div className="text-3xl font-bold text-slate-800 mr-2">
                        {type === "query" ? "" : "Donate"}
                      </div>
                      <a
                        href="https://docs.google.com/document/d/1e-EKszKP4nbMNtuQ1PyJ2xKC5ljR2zlSsU8jXF4DO0M/edit?usp=sharing"
                        target="_blank"
                        className="text-indigo-700"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faSquareArrowUpRight} />
                      </a>
                    </div>
                  </div>
                </header>
                <div className="flex flex-col lg:flex-row xl:flex-row">
                  <div className="w-48 h-48 rounded-lg mr-5 mb-5">
                    <img
                      className="h-full w-full"
                      src={Docs}
                      width="100"
                      height="100"
                      alt="GOOGLE"
                    />
                  </div>
                  <div className="flex w-3/4">
                    <a
                      href="https://docs.google.com/document/d/1lgIVsf36_a33npvomi1URrBW74ruT-9DmFG7vb0ZfFM/edit?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex flex-col">
                        <h2 className="text-lg font-semibold text-slate-800 mb-2">
                          Sample (first 5 pages)
                        </h2>
                        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
                          Life Refocused: Memoir of a life shaped by cancer
                        </div>
                        <div className="w-full">
                          <p className="text-xs text-slate-600 mb-5">
                            When I look back on the twenty-nine year old newly
                            wed, with tear stained cheeks, receiving a stage IV
                            cancer diagnosis in the ER that cold December night
                            - I see a familiar face but a woman almost
                            unrecognizable to me now. Over the next two years,
                            whether I liked it or not, cancer would soon shift
                            and reshape every aspect of my life. It would test
                            and prove my marriage. It’d reach deep into the
                            depths of my greatest fears and bring with it great
                            sorrow and despair. But over time it’d also bring
                            hope, love and gratitude. It would require me to
                            speak up, learn to advocate for myself and force me
                            to find my voice. As the once shy, quiet girl in the
                            back of the room, I’d soon bring my life to the
                            center stage.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>  */}

            <hr className="w-full mt-12" />
            <Videos type={"query"} />
          </div>
        </main>
      </div>
    </div>
  );
};

export const StandOut = () => {
  return (
    <div>
      <div className="text-3xl font-bold text-slate-800 mt-5 mb-4">
        What makes my story stand out
      </div>
      <div className="text-sm p-4 flex flex-col col-span-full sm:col-span-12 xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
        <ul className="list-disc text-sm ml-4 p-4">
          <li className="p-1">
            Overcoming the odds, with a dramatic shift in prognosis (from terminal to no evidence of disease)
          </li>
          <li className="p-1">
            The 1.5 years it took me to be diagnosis after having symptoms brushed off as anxiety
          </li>
          
          <li className="p-1">Battling cancer through a pandemic</li>
          <li className="p-1">
            Perspective from someone who has been afraid of everything their entire
            life. A journey from the perspectice of, "if you can't beat
            fear, do it scared"
          </li>
          <li className="p-1">
            Overcoming medical complications, a blood shortage and almost losing
            my one chance at surgery as my team tried to prepare resources for a
            "catastrophic bleed"
          </li>
          <li className="p-1">
            I donate everything I make from social media to research and will be
            donating everything from this book as well
          </li>
          <li className="p-1">
            The dedication of my life after surgery to giving back and helping
            others. Changing careers and building an app for patients
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Query;
