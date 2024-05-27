import React from "react";
import book from "../../images/book-cover.png";

function MemoirBanner() {
  return (
    <div className="relative rounded-sm overflow-hidden bg-background-image bg-cover bg-center">
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 grid grid-cols-5 md:grid-cols-7 self-center h-full">
        <div className="h-full md:align-left w-full col-span-5 lg:col-span-5 p-5 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="col-span-4">
              <div className="z-0 mr-0 justify-center col-span-1 opacity-95 md:hidden">
                <img
                  className="aspect-fit justify-center rounded-md shadow-lg animate-scale-up"
                  src={book}
                  alt="User 01"
                />
              </div>
              <h1 className="text-4xl md:text-5xl text-center md:text-left mt-10 font-bold lg:mt-10 text-slate-700 animate-fade-in-down">
                Too Young For Cancer
              </h1>
              <p className="italic mt-2 text-lg text-slate-700 animate-fade-in text-center md:text-left ">
                One woman's battle for a diagnosis and a fighting chance.
              </p>
              <p className="italic mt-2 text-sm text-slate-700 animate-fade-in text-center md:text-left ">
                My portion of the proceeds from this book will be donated to
                support cancer research. Bulk buys, speaking engagements, and
                other inquiries for the book can be directed to
                katiekickscancer@gmail.com
              </p>
            </div>
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
              PRE-ORDER 📚
            </button>
          </div>
        </div>
        <div className="z-0 justify-center mr-0 col-span-1 self-center mx-auto opacity-95 hidden lg:flex animate-fade-in">
          <img
            className="aspect-fit h-1/2 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            src={book}
            alt="User 01"
          />
        </div>
      </div>
    </div>
  );
}

export default MemoirBanner;
