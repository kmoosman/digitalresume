import React from "react";

// Import utilities
import { tailwindConfig, hexToRGB, iconStyling } from "../../utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import colors from "tailwindcss/colors";
import {
  faSquareArrowUpRight,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import ReactGA from "react-ga4";

export const PodcastCard = ({ title, link, blurb, type, image }) => {
  library.add(fab);

  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col col-span-full sm:col-span-4 xl:col-span-4 bg-background-image bg-cover bg-center shadow-lg rounded-sm border border-slate-200"
      onClick={() => {
        ReactGA.event({
          category: "External Links",
          action: `Podcast ${title} Clicked}`,
          label: `Clicked ${title}}`,
        });
      }}
    >
      <div>
        <div className="px-5 pt-5">
          <header className="flex justify-between items-start mb-2">
            {/* Icon */}
            <div className="">
              <div className=" flex items-center justify-between z-10">
                <div
                  className={`flex items-center justify-center w-20 h-20 rounded-lg  ${
                    image
                      ? ""
                      : "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-200 to-blue-700 opacity-50 shadow-md"
                  }`}
                >
                  {" "}
                  {image && image === "video" ? (
                    <FontAwesomeIcon
                      icon={faVideo}
                      className="text-5xl text-slate-700"
                    />
                  ) : (
                    <img
                      src={image}
                      alt="accelerators"
                      className={`${image ? "rounded w-20" : "hidden"}`}
                    />
                  )}
                </div>
              </div>
            </div>
            <a href={link} target="_blank" className="text-slate-700">
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </a>
          </header>
          <h2 className="text-2xl font-semibold text-slate-800 mb-2 mt-4">
            {title}
          </h2>
          <hr className="mb-4" />
          <div className={`${type !== "media" ? `hidden` : ""}`}>
            <div className="flex items-start">
              {/*<div className="text-3xl font-bold text-slate-800 mr-2">info</div>*/}
            </div>
          </div>
          <div className="self-center">
            <p className="text-sm text-slate-600 mb-5">{blurb}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PodcastCard;
