import React from "react";
import { Link } from "react-router-dom";
import LineChart from "../../charts/LineChart01";
import Icon from "../../images/icon-01.svg";
import EditMenu from "../EditMenu";
import COA_LOGO from "../../images/Orange_COA.png";
import ReactGA from "react-ga4";
import challenge from "../../images/challenge.png"

// Import utilities
import { tailwindConfig, hexToRGB, iconStyling } from "../../utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import colors from "tailwindcss/colors";
import {
  faCoffee,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";

export const Challenge = ({ type }) => {
  library.add(fab);

  return (
    <div className="flex flex-col col-span-full sm:col-span-12 xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5 ">
        <header className="flex xl:float-right lg:float-right mb-2">
          {/* Icon */}
          <div className="hidden  sm:block">
            <div className="flex items-start ">
              <div className="text-2xl font-bold text-slate-800 mr-2">
                DONATE OR JOIN TEAM CHRCC
              </div>
              <a
                href="https://kidneycoa.org"
                target="_blank"
                className="text-orange-400"
                rel="noreferrer"
                onClick={() => {
                  ReactGA.event({
                    category: 'External Links',
                    action: 'Clicked Nonprofit',
                    label: `Clicked on COA link}`
                  });
                }}
              >
                <FontAwesomeIcon icon={faSquareArrowUpRight} />
              </a>
            </div>
          </div>
        </header>
        <div className="flex flex-col lg:flex-row xl:flex-row">
          <div className="w-48 h-48 rounded-lg lg:mr-5 mb-5 ml-14 sm:ml-0">
            <img className="h-full w-full" src={challenge} alt="82K Challenge" />
          </div>
          <div className="flex w-full lg:w-3/4">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-slate-800 mb-2">
                Team Chromophobe
              </h2>
              <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
                82K Challenge
              </div>
              <div className="w-full">
                <p className="text-xs text-slate-600 mb-5">
                The 2024 82K Challenge kicks off in March during Kidney Cancer Awareness Month and wraps up on June 20th – World Kidney Cancer Day.
                </p>
                <p className="text-xs text-slate-600 mb-5">
                The 82K Challenge is for everyone! We want you to get creative and set a goal based on what you love. Ride your bike 8.2 miles, run for 82 minutes, spend 8.2 hours meditating – with a little imagination, there are no limits. No matter what you choose to do or how much money you raise, you’ll be joining a community of change-makers working to find a cure for kidney cancer.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start lg:hidden xl:hidden md:hidden sm:hidden 2xl:hidden mb-5">
            <div className="text-3xl font-bold text-slate-800 mr-2">
              DONATE OR JOIN TEAM CHROMOPHOBE
            </div>
            <a
              href="https://charity.pledgeit.org/t/ktzTNw5AXo"
              target="_blank"
              className="text-orange-400"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
