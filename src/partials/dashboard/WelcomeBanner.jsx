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
      <div className="grid grid-cols-3 self-center h-full ">
        <div className="h-full md:align-left w-full col-span-2 ml-32">
          <h1 className="text-3xl md:text-3xl mt-4 font-bold mt-20">Hi! 👋</h1>
          <h1 className="text-3xl md:text-3xl font-bold">I'm Katie Coleman</h1>
          <p className=" italic mt-1">
            Strength isn't the absense of fear, it's a product of perservering
            through it.
          </p>

          <div className="mt-10 w-3/4">
            <p className="mt-1">
              I'm a cancer survivor, advocate, podcaster, software developer and
              author of{" "}
              <a
                href="https://www.amazon.com/Too-Young-Cancer-Diagnosis-Fighting-ebook/dp/B0CW1HKPWJ/ref=sr_1_1?crid=C1QQ3FZLJOZ2&dib=eyJ2IjoiMSJ9.86WEKCmVExWphXE6fnD2hA.C6tU4YMPD58Hyq95PwDK8iSixRxUMOgjL0tnheXL238&dib_tag=se&keywords=9781639109449&qid=1709230552&sprefix=9781639109449%2Caps%2C68&sr=8-1"
                className="text-slate-900"
              >
                <span className="font-semibold">TOO YOUNG FOR CANCER</span>
              </a>{" "}
              📚
            </p>
            <p>
              {" "}
              Here to share my story to hopefully make things a little easier
              for those who may come behind me.
            </p>
          </div>
          <p className=" italic mt-1 md:mt-12 text-sm ">
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
          <p className=" italic mt-1 text-sm">
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
        <div className="relative z-0 w-1/2 h-1/2 mr-0 md:mr-52 col-span-1 mx-auto opacity-95">
          <img className="aspect-fit" src={headshot} alt="User 01" />
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
