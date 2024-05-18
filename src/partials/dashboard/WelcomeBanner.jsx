import React from "react";
import headshot from "../../images/photo-background-removed.png";

function WelcomeBanner({ email, type }) {
  return (
    <div
      className={`relative rounded-sm overflow-hidden bg-background-image bg-cover bg-center`}
    >
      <div
        className="absolute right-0 top-0  mr-16 pointer-events-none hidden xl:block"
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="grid grid-cols-5 md:grid-cols-6 self-center h-full">
        <div className="h-full md:align-left w-full col-span-5 lg:col-span-4 p-5 lg:px-20">
          <div className="grid grid-cols-3">
            <div className="col-span-2 ">
              <h1 className="text-3xl md:text-3xl mt-10 font-bold lg:mt-20">
                Hi! 👋
              </h1>
              <h1 className="text-3xl md:text-3xl font-bold">
                I'm Katie Coleman
              </h1>
              <p className=" italic mt-1">
                Strength isn't the absense of fear, it's a product of
                perservering through it.
              </p>
            </div>
            <div className="z-0 mr-0 justify-center flex col-span-1 opacity-95 lg:hidden">
              <img
                className="aspect-fit  justify-center"
                src={headshot}
                alt="User 01"
              />
            </div>
          </div>

          <div className="lg:mt-10 mt-5 w-full md:w-3/4 flex flex-col ">
            <p className="mt-1">
              I'm a cancer survivor, advocate, podcaster, software developer and
              author of{" "}
              <a
                href="https://www.amazon.com/Too-Young-Cancer-Diagnosis-Fighting-ebook/dp/B0CW1HKPWJ/ref=sr_1_1?crid=C1QQ3FZLJOZ2&dib=eyJ2IjoiMSJ9.86WEKCmVExWphXE6fnD2hA.C6tU4YMPD58Hyq95PwDK8iSixRxUMOgjL0tnheXL238&dib_tag=se&keywords=9781639109449&qid=1709230552&sprefix=9781639109449%2Caps%2C68&sr=8-1"
                className="text-slate-900"
              >
                <span className="font-semibold">TOO YOUNG FOR CANCER. </span>
                Here to share my story to hopefully make things a little easier
                for those who may come behind me.
              </a>{" "}
              📚
            </p>
          </div>
          <p className="w-full flex justify-center md:justify-start italic mt-1 md:mt-12 text-sm ">
            <button
              onClick={() => {
                window.open(
                  "https://www.amazon.com/Too-Young-Cancer-Diagnosis-Fighting-ebook/dp/B0CW1HKPWJ/ref=sr_1_1?crid=C1QQ3FZLJOZ2&dib=eyJ2IjoiMSJ9.86WEKCmVExWphXE6fnD2hA.C6tU4YMPD58Hyq95PwDK8iSixRxUMOgjL0tnheXL238&dib_tag=se&keywords=9781639109449&qid=1709230552&sprefix=9781639109449%2Caps%2C68&sr=8-1",
                  "_blank"
                );
              }}
              className="bg-slate-800 text-white md:text-lg mt-2 mb-2 font-semibold rounded p-2 text-sm"
            >
              PRE-ORDER 📚
            </button>
          </p>
          <p className="text-center italic mt-1 text-sm  md:text-left">
            Inquiries, contact and collaborations{" "}
            <a href="mailto:katiekickscancer@gmail.com">
              katiekickscancer@gmail.com
            </a>
            <p>
              <a href="/" className="text-indigo-500">
                Subscribe to newsletter / book release updates
              </a>
            </p>
          </p>
          {/*<p className="text-sm italic">*/}
          {/*  <a href="mailto:katie.coleman.ut@gmail.com" className="text-blue-700 hover:text-blue-200">Email</a>*/}
          {/*</p>*/}
        </div>
        <div className="z-0 justify-center mr-0 col-span-2 mx-auto opacity-95 hidden lg:flex">
          <img className="aspect-fit w-1/2" src={headshot} alt="User 01" />
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
