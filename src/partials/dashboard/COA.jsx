import React from "react";
import { Link } from "react-router-dom";
import LineChart from "../../charts/LineChart01";
import Icon from "../../images/icon-01.svg";
import EditMenu from "../EditMenu";
import COA_LOGO from "../../images/Orange_COA.png";
import ReactGA from "react-ga4";

// Import utilities
import { tailwindConfig, hexToRGB, iconStyling } from "../../utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import colors from "tailwindcss/colors";
import {
  faCoffee,
  faSquareArrowUpRight,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

export const COA = ({ type }) => {
  library.add(fab);

  return (
    <div className="flex flex-col col-span-full sm:col-span-12 xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex xl:float-right lg:float-right mb-2">
          {/* Icon */}
          <div className="hidden  sm:block">
            <div className="flex items-start ">
              <div className="text-3xl font-bold text-slate-800 mr-2">
                {type === "query" || type === "media" ? "" : "Donate"}
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
          <div className="w-48 h-48 rounded-lg mr-5 mb-5 sm:ml-0 ml-14">
            <img className="h-full w-full" src={COA_LOGO} alt="COA" />
          </div>
          <div className="flex lg:w-3/4 w-full">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-slate-800 mb-2">
                Non-Profit 
              </h2>
              <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
                Chromophobe and Oncocytic Tumor Alliance
              </div>
              <div className="w-full">
                <p className="text-xs text-slate-600 mb-5">
                  The Chromophobe and Oncocytic Tumor Alliance (COA) is a
                  non-profit I founded with a mission to bring together and
                  support a community of patients, organizations and researchers
                  dedicated to advancing the understanding, research and
                  treatment of Chromophobe Renal Cell Carcinoma and other
                  oncocytic tumors. We aim to foster collaboration, promote
                  education and awareness, and to fund research to further these
                  efforts.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <div className="self-center bg-orange-300 p-2 rounded">
                   <FontAwesomeIcon icon={faVideo} className="text-white" />
              </div>
                <a className="text-orange-400 underline self-center text-sm" href="https://www.tiktok.com/@katiekickscancer/video/7344262029500321067?is_from_webapp=1&sender_device=pc&web_id=7341956517037278766" target="_blank" >
                  Checkout a recap of what we've accomplished with your help and what funds donated in 2023 are being used for.
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-start lg:hidden xl:hidden md:hidden sm:hidden 2xl:hidden mb-5">
            <div className="text-3xl font-bold text-slate-800 mr-2">
              {type === "query" || type === "media" ? "" : "Donate"}
            </div>
            <a
              href="https://kidneycoa.org"
              target="_blank"
              className="text-orange-400"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </a>
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      {/*<div className="grow">*/}
      {/*  /!* Change the height attribute to adjust the chart height *!/*/}
      {/*  <LineChart data={chartData} width={389} height={128} />*/}
      {/*</div>*/}
    </div>
  );
};

export default COA;
