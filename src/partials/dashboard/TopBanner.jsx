import React from "react";
import headshot from "../../images/photo-background-removed.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopBanner({ banner }) {
  return (
    <div
      className={`relative rounded-sm overflow-hidden bg-background-image bg-cover bg-center`}
    >
      <div
        className="absolute right-0 top-0  mr-16 pointer-events-none hidden xl:block"
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div
        className={`grid grid-cols-5 md:grid-cols-6 self-center ${
          banner.image ? "" : "mb-10"
        }`}
      >
        <div className="h-full md:align-left w-full col-span-6 lg:col-span-4 p-5 lg:px-20 lg:mt-12">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <h1 className="text-3xl md:text-3xl  font-bold animate-fade-in-down">
                {banner.title}
              </h1>
              <h1 className="text-3xl md:text-3xl font-bold">
                {banner.subtitle}
              </h1>
              <p className="italic mt-1 animate-fade-in">{banner.blurb}</p>
              <p className="mt-1 text-xs animate-fade-in">
                {banner.description}
              </p>
            </div>
            <div className="z-0 mr-0 justify-center flex col-span-1 opacity-95 lg:hidden">
              <img
                className="aspect-fit justify-center rounded-full shadow-lg animate-scale-up"
                src={banner.image}
                alt={banner.title}
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:mx-40 flex  justify-end items-center p-5">
          {banner.image ? (
            <div className="z-0 justify-center mr-0 col-span-2 mx-auto opacity-95 hidden lg:flex">
              <img
                onClick={() => {
                  window.open(
                    banner.link ??
                      "https://www.amazon.com/Too-Young-Cancer-Diagnosis-Fighting-ebook/dp/B0CW1HKPWJ/ref=sr_1_1?crid=C1QQ3FZLJOZ2&dib=eyJ2IjoiMSJ9.86WEKCmVExWphXE6fnD2hA.C6tU4YMPD58Hyq95PwDK8iSixRxUMOgjL0tnheXL238&dib_tag=se&keywords=9781639109449&qid=1709230552&sprefix=9781639109449%2Caps%2C68&sr=8-1",
                    "_blank"
                  );
                }}
                src={banner.image}
                alt="User 01"
              />
            </div>
          ) : (
            <button
              onClick={() => {
                window.open(
                  banner.link ??
                    "https://www.amazon.com/Too-Young-Cancer-Diagnosis-Fighting-ebook/dp/B0CW1HKPWJ/ref=sr_1_1?crid=C1QQ3FZLJOZ2&dib=eyJ2IjoiMSJ9.86WEKCmVExWphXE6fnD2hA.C6tU4YMPD58Hyq95PwDK8iSixRxUMOgjL0tnheXL238&dib_tag=se&keywords=9781639109449&qid=1709230552&sprefix=9781639109449%2Caps%2C68&sr=8-1",
                  "_blank"
                );
              }}
              className="bg-slate-800 text-white h-12 md:text-lg font-semibold rounded p-2 mt-10 text-sm animate-fade-in"
            >
              {banner.buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
