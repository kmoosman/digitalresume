import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

import OrangeBackground from "../images/orange_background.png";

import COA from "../partials/dashboard/COA";
import { advocacy, advocacy2 } from "../utils/Data";

import headshot from "../images/profile_headshot (1).png";
import bookcover3 from "../images/bookcover3.png";
import VideoCard from "../partials/dashboard/VideoCard";
import Videos from "./Videos";
import AdvocacyCard from "../partials/dashboard/AdvocacyCard";
import { iconStyling } from "../utils/Utils";
import Challenge from "../images/challenge.png";

export const Advocacy = () => {
  return (
    <div className="h-screen relative">
      <div
        className="absolute inset-0 flex h-screen overflow-hidden"
        
      >
        <div
          className="relative flex flex-col flex-1 overflow-y-auto bg-slate-100 b overflow-x-hidden"
        >
          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              <div className="w-full">
                <div className="flex justify-center w-full mb-10">
                  <div className="justify-center">
                    <div className="justify-center flex flex-row lg:text-6xl text-3xl font-bold text-orange-400 lg:mt-20 center-text w-full rounded">
                      #OrangeUp
                    </div>
                    <p className="flex justify-center w-full text-center lg:text-2xl mt-2 font-semibold text-orange-400">
                      For Kidney Cancer Awareness Month
                    </p>
                  </div>
                </div>
                <div className="mb-10">
                  <p className="flex mx-auto justify-center lg:w-1/2 mt-10 sm:text-left lg:text-center font-semibold text-slate-800 ">
                    Join us as we #OrangeUp in support of those who are affected by kidney cancer while we shop local businesses, advocate for rare kidney cancers, and donate to research.
                  </p>
                  <p className="flex mx-auto justify-center lg:w-3/4 sm:text-left lg:text-center text-sm font-semibold text-orange-400 lg:text-xl lg:mt-5">
                    COA will be hosting an egg hunt where you can find prizes in eggs hidden inside local businesses who have donated. 
                  </p>
                  <p className="flex mx-auto justify-center lg:w-3/4 sm:text-left text-sm lg:text-center font-semibold lg:text-orange-400  text-slate-800 lg:text-xl lg:mt-5">
We'll have orange balloons outside the stores participating on March 30th. </p>
                </div>
                <p className="flex mx-auto justify-center lg:w-1/2  sm:text-left lg:text-center font-semibold text-slate-800  text-l mt-[-40px] mb-10">
So keep your eyes peeled, #OrangeUp in your favorite orange attire and let's shop! </p>
                <hr />
              </div>

              <div>
                <div className="text-3xl font-bold text-orange-400 md:mt-12 mt-5 mb-7">
                  How do advocacy campaigns make an impact?
                </div>
                <div className="grid grid-cols-12 gap-6 mb-6 ">
                  {advocacy.map((advocacy) => (
                    <AdvocacyCard
                      title={advocacy.title}
                      blurb={advocacy.description}
                      link={advocacy.link}
                      key={advocacy.id}
                      icon={advocacy.icon}
                    />
                  ))}
                </div>
              </div>
              <div className="text-3xl font-bold text-orange-400 mt-10 mb-7">
                Donate
              </div>
              <div className="grid grid-cols-12 gap-6 mt-10">
                <COA type="query" />
              </div>

              <div className="grid grid-cols-12 gap-6 mt-10">
                <Challenge />
              </div>

              <div className="text-3xl font-bold text-orange-400 mt-10 mb-7">
                Meet a local survivor
              </div>

              {/*Author Bio*/}
              <div>
                <div className="flex flex-col col-span-full sm:col-span-12 xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
                  <div className="p-5">
                    <div className="flex flex-col lg:flex-row xl:flex-row">
                      <div className="mr-5 mb-5 rounded self-center">
                        <img
                          className="h-48 w-48 rounded"
                          src={headshot}
                          alt="headshot"
                        />
                      </div>
                      <div className="flex w-full ">
                        <a
                          href="https://katiekickscancer.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="flex flex-col bm-">
                            <div className=" font-semibold text-slate-700 uppercase mb-1">
                              Local stage IV kidney cancer survivor donates all
                              proceeds from social media to research.
                            </div>
                            <div className="text-sm">
                              <p className="p-1">
                                {" "}
                                My name is Katie, I'm a stage IV kidney cancer
                                survivor and patient advocate. I was diagnosed
                                with a rare stage IV kidney cancer at 29 years
                                old and due to the rarity and extent of my
                                disease (15+ tumors) my options were limited and
                                my prognosis was bleak. However, due to advocacy
                                efforts of others I was able a very intensive
                                and life saving surgery about 6 months into my
                                diagnosis.
                              </p>

                              <p className="p-1">
                                That surgery changed everything and is the
                                reason I'm still here today. I'm using that gift
                                to pay it forward to others by raising awareness
                                and funding research because more patients
                                deserve outcomes like I've had.
                              </p>

                              <p className="p-1">
                                I've started a non-profit which funds research
                                for a rare kidney cancer. I also advocate online
                                and donate all proceeds from social media to
                                research.
                              </p>
                              <p className="p-1">
                                I have a memoir coming out in Nov 2024 and all proceeds will be donated to research as well, which can be pre-ordered <a href="https://www.amazon.com/Too-Young-Cancer-Diagnosis-Fighting-ebook/dp/B0CW1HKPWJ/ref=sr_1_1?crid=C1QQ3FZLJOZ2&dib=eyJ2IjoiMSJ9.86WEKCmVExWphXE6fnD2hA.C6tU4YMPD58Hyq95PwDK8iSixRxUMOgjL0tnheXL238&dib_tag=se&keywords=9781639109449&qid=1709230552&sprefix=9781639109449%2Caps%2C68&sr=8-1" target="_blank" className="text-indigo-600"> here.</a>
                                </p>
                                <div className="grid grid-cols-1 lg:w-full mt-2 gap-5">
                                <div className="">
                                <a

                                  href="https://www.amazon.com/Too-Young-Cancer-Diagnosis-Fighting-ebook/dp/B0CW1HKPWJ/ref=sr_1_1?crid=C1QQ3FZLJOZ2&dib=eyJ2IjoiMSJ9.86WEKCmVExWphXE6fnD2hA.C6tU4YMPD58Hyq95PwDK8iSixRxUMOgjL0tnheXL238&dib_tag=se&keywords=9781639109449&qid=1709230552&sprefix=9781639109449%2Caps%2C68&sr=8-1"
                                className="mt-4 mb-2 text-white bg-orange-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-orange-400 dark:hover:bg-orange-600 dark:focus:ring-orange-600"
                              >
                                Pre-Order Too Young For Cancer
                              </a>
                              </div>
                              <div>
                              <a
                                href="https://katiekickscancer.com"
                                className="mt-2 mb-2 text-white bg-orange-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-orange-400 dark:hover:bg-orange-600 dark:focus:ring-orange-600"
                              >
                                Socials / More Info
                              </a>
                              </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-orange-400 mt-12 mb-7">
                  How can you help?
                </div>
                <div className="grid grid-cols-12 gap-6 mb-6 ">
                  {advocacy2.map((advocacy) => (
                    <AdvocacyCard
                      title={advocacy.title}
                      blurb={advocacy.description}
                      link={advocacy.link}
                      key={advocacy.id}
                      icon={advocacy.icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
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
            Having an extremely rare cancer (single digit case reports,
            worldwide, in history)
          </li>
          <li className="p-1">
            Being diagnosed just two months after getting married, at 29 years
            old
          </li>
          <li className="p-1">
            The dramatic shift in prognosis (from terminal to no evidence of
            disease) I had after perservering through many obstacles and
            learning to advocate for myself
          </li>
          <li className="p-1">
            I donate everything I make from social media to research and will be
            donating everything from this book as well
          </li>
          <li className="p-1">Battling cancer through a pandemic</li>
          <li className="p-1">
            Perspective from someone who has been afraid of everything my entire
            life, I don't paint myself as a "strong" fighter. I share the
            realness of my story as the poster child for "if you can't beat
            fear, do it scared"
          </li>
          <li className="p-1">
            Offering a new definition of strength: "strength isn't the absense
            of fear but instead a product of perservering through it"
          </li>
          <li className="p-1">
            Overcoming medical complications, a blood shortage and almost losing
            my one chance at surgery as my team tried to prepare resources for a
            "catastrophic bleed"
          </li>
          <li className="p-1">
            The dedication of my life after surgery to giving back and helping
            others. Changing careers and building an app for patients
          </li>
          <li className="p-1">
            Sharing a evolutionary journey from being too scared to talk to
            strangers to sharing my life as an open book online with millions
          </li>
          <li className="p-1">
            Focus on gratitude and tangible advice on what helped me reframe my
            thinking and how I learned to live in the moment
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Advocacy;
