import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

export const HighlightCards = ({ highlight }) => {
  library.add(fab);

  return (
    <div className="flex flex-col col-span-full ml-2 mr-2 md:ml-10 md:mr-10 sm:col-span-12 xl:col-span-12  bg-center shadow-lg rounded-sm">
      <div className="px-5 pt-20 pb-20 ">
        <div className="flex flex-col lg:flex-row xl:flex-row gap-10">
          <div className="w-52 h-52 rounded-lg mr-5 mb-5 sm:ml-0 lg:ml-8 mx-auto">
            <img
              className="h-full w-full rounded "
              src={highlight.image}
              alt={highlight.title}
            />
          </div>
          <div className="flex lg:w-3/4 w-full">
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                {highlight.category}
              </h2>
              <div className="text-lg font-semibold text-slate-400 uppercase mb-1">
                {highlight.title}
              </div>
              <div className="w-full">
                <p className="text-sm text-slate-600 mb-5">
                  {highlight.description}
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                  <div
                    className={`self-center bg-${
                      highlight.color ? highlight.color : "slate-700"
                    } p-2 rounded`}
                  >
                    <FontAwesomeIcon icon={faVideo} className="text-white" />
                  </div>
                  <a
                    className={`self-center text-${
                      highlight.color ? highlight.color : "slate-700"
                    } underline self-center text-sm`}
                    href={highlight.videoLink}
                    target="_blank"
                  >
                    {highlight.linkText}
                  </a>
                </div>
                <a
                  href={highlight.link}
                  target="_blank"
                  className="bg-slate-700 hidden sm:block text-white w-32 p-2 rounded font-medium text-center ml-4"
                >
                  {highlight.buttonText}
                </a>
              </div>
            </div>
          </div>
          <a
            href={highlight.link}
            target="_blank"
            className="bg-slate-700 w-full sm:hidden text-white p-2 rounded font-medium text-center"
          >
            {highlight.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HighlightCards;
