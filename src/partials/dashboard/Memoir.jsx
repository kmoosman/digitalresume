import React from "react";
import { Link } from "react-router-dom";
import LineChart from "../../charts/LineChart01";
import Icon from "../../images/icon-01.svg";
import EditMenu from "../EditMenu";
import bookCover from "../../images/book-cover.png";
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

export const Memoir = () => {
  library.add(fab);

  return (
    <div className="flex flex-col col-span-full ml-2 mr-2 md:ml-10 md:mr-10 sm:col-span-12 xl:col-span-12  bg-center shadow-lg rounded-sm mt-10">
      <div className="px-5 pt-5">
        <header className="flex xl:float-right lg:float-right mb-2">
          {/* Icon */}
        </header>
        <div className="flex flex-col lg:flex-row xl:flex-row">
          <div className="w-60 h-60 rounded-lg mr-5 mb-5 sm:ml-0 justify-center self-center">
            <img className="h-full w-full" src={bookCover} alt="book" />
          </div>
          <div className="flex lg:w-3/4 w-full">
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                Memoir
              </h2>
              <div className="text-lg font-semibold text-slate-400 uppercase mb-1">
                Too Young For Cancer
              </div>
              <div className="w-full">
                <p className="text-sm text-slate-600 mb-2">
                  I donate my portion of the proceeds from, Too Young For Cacner
                  back to support cancer research. Let's make an impact,
                  together!
                </p>
                <p className="text-sm text-slate-600 mb-2">
                  About Too Young For Cancer: The inspiring story of a stage IV
                  cancer survivor’s journey through a complex and biased medical
                  system to get a diagnosis and the treatment that would save
                  her life, and how she found her life’s purpose through
                  community and advocacy. New Year’s Eve 2020 was supposed to be
                  a turning point to better days for 29-year-old Katie Coleman.
                  Instead, she found herself in the ER processing the
                  earth-shattering news of a stage IV cancer diagnosis, one that
                  had come after years of being assured she was “too young for
                  cancer” and a repeated misdiagnosis of anxiety. Too Young for
                  Cancer tells the story of Katie’s journey from diagnosis with
                  an ultra-rare cancer through treatment, recovery and a
                  life-altering shift in perspective. Too Young for Cancer
                  highlights the absolute best and worst in healthcare and
                  uncovers the silver linings and beauty of humanity filling the
                  space in between.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memoir;
