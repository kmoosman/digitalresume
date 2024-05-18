import React from "react";
import { Link } from "react-router-dom";
import LineChart from "../../charts/LineChart01";
import Icon from "../../images/icon-01.svg";
import EditMenu from "../EditMenu";
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
} from "@fortawesome/free-solid-svg-icons";

export const DashboardCard = ({
  title,
  countType,
  total,
  link,
  blurb,
  type,
}) => {
  library.add(fab);
  return (
    <a
      href={link}
      target="_blank"
      className="flex shadow-lg rounded-sm "
      onClick={() => {
        ReactGA.event({
          category: "External Links",
          action: `${title} Clicked`,
          label: `Clicked social ${title}}`,
        });
      }}
    >
      <div className="text-white">
        <div className="px-5  text-white">
          {/* Icon */}
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-indigo-400 to-violet-900 shadow-md">
            <FontAwesomeIcon icon={iconStyling[title]} className="text-white" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default DashboardCard;
