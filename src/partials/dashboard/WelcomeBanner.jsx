import React from "react";
import headshot from "../../images/photo-background-removed.png";
import profile from "../../images/profile_headshot.png";

function WelcomeBanner() {
  return (
    <div className="relative rounded-sm overflow-hidden bg-background-image bg-cover bg-center">
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 grid grid-cols-5 md:grid-cols-6 self-center h-full">
        <div className="h-full md:align-left w-full col-span-5 lg:col-span-4 p-5 lg:px-20">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <h1 className="text-4xl md:text-5xl mt-10 font-bold lg:mt-20 text-slate-700 animate-fade-in-down">
                Hi! 👋
              </h1>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-700 animate-fade-in-down">
                I'm Katie Coleman
              </h1>
              <p className="italic mt-2 text-lg text-slate-700 animate-fade-in">
                Strength isn't the absence of fear, it's a product of
                persevering through it.
              </p>
            </div>
            <div className="z-0 mr-0 justify-center flex col-span-1 opacity-95 lg:hidden">
              <img
                className="aspect-fit justify-center rounded-md md:shadow-lg animate-fade-in h-50"
                src={headshot}
                alt="User 01"
              />
            </div>
          </div>

          <div className="lg:mt-10 mt-5 w-full md:w-3/4 flex flex-col animate-fade-in">
            <p className="mt-2 text-slate-700 md:text-lg text-md">
              I was diagnosed with an{" "}
              <a
                href="https://www.youtube.com/embed/q3yUlZ016Yo"
                target="_blank"
                className="text-indigo-700 font-semibold"
              >
                ultra-rare stage IV kidney cancer in 2020.{" "}
              </a>
              About six months in, when my prognosis had a chance to
              significantly change, I promised myself I'd dedicate the time I
              was given to making things better for other patients who may come
              behind me one day. Which is what I have dedicated my life to ever
              since. I donate everything from my book, social media and speaking
              engagements back to research.
            </p>
            <p className="mt-2 text-sm">Let's make an impact together.</p>
          </div>
          <div className="w-full flex justify-center md:justify-start mt-4 md:mt-12 animate-fade-in">
            <button
              onClick={() => {
                window.open(
                  "https://www.amazon.com/Too-Young-Cancer-Diagnosis-Fighting-ebook/dp/B0CW1HKPWJ/ref=sr_1_1?crid=C1QQ3FZLJOZ2&dib=eyJ2IjoiMSJ9.86WEKCmVExWphXE6fnD2hA.C6tU4YMPD58Hyq95PwDK8iSixRxUMOgjL0tnheXL238&dib_tag=se&keywords=9781639109449&qid=1709230552&sprefix=9781639109449%2Caps%2C68&sr=8-1",
                  "_blank"
                );
              }}
              className="bg-indigo-700 text-white md:text-lg font-semibold rounded py-2 px-6 shadow-lg hover:bg-indigo-600 transition duration-300"
            >
              PRE-ORDER TOO YOUNG FOR CANCER
            </button>
          </div>
          <p className="text-center italic mt-4 text-sm md:text-left text-slate-700 animate-fade-in">
            Inquiries, contact and collaborations{" "}
            <a className="text-slate-700">katiekickscancer@gmail.com</a>
          </p>
          {/* <p className="text-center md:text-left animate-fade-in">
            <a href="/" className="text-indigo-700">
              Subscribe to newsletter / book release updates
            </a>
          </p> */}
        </div>
        <div className="z-0 justify-center col-span-2 mr-32 mx-auto opacity-95 hidden lg:flex animate-fade-in">
          <img
            className="h-[550px] rounded-lg shadow-md hover:shadow-xl transition duration-300"
            src={headshot}
            alt="User 01"
          />
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
