import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import {
  faSquareArrowUpRight,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PodcastCard from "../partials/dashboard/PodcastCard";
import { purchaseMemoir } from "../utils/Data";
import VideoPopup from "../partials/VideoPopup";
import BarChart01 from "../charts/BarChart01";
import { tailwindConfig } from "../utils/Utils";
import TopBanner from "../partials/dashboard/TopBanner";
import Book from "../images/book-cover.png";
import MemoirBanner from "../partials/dashboard/MemoirBanner";
import CarouselComponent from "../partials/dashboard/CarouselComponent";

export const Memoir = ({ type }) => {
  const data = {
    labels: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10",
      "Week 11",
      "Week 12",
      "Week 13",
    ],
    datasets: [
      {
        label: "Sales",
        data: [40, 51, 84, 93, 97, 100, 106, 184, 187, 199, 202, 205, 208],
        backgroundColor: tailwindConfig().theme.colors.blue[900],
        borderColor: tailwindConfig().theme.colors.blue[900],
        borderWidth: 1,
      },
    ],
  };

  const banner = {
    image: Book,
    title: "Too Young For Cancer",
    description:
      "My portion of the proceeds from this book will be donated to support cancer research. Bulk buys, speaking engagements, and other inquiries for the book can be directed to katiekickscancer@gmail.com",
    blurb: "One woman's battle for a diagnosis and a fighting chance.",
    link: "https:www.amazon.com/Too-Young-Cancer-Diagnosis-Fighting-ebook/dp/B0CW1HKPWJ/ref=sr_1_1?crid=C1QQ3FZLJOZ2&dib=eyJ2IjoiMSJ9.86WEKCmVExWphXE6fnD2hA.C6tU4YMPD58Hyq95PwDK8iSixRxUMOgjL0tnheXL238&dib_tag=se&keywords=9781639109449&qid=1709230552&sprefix=9781639109449%2Caps%2C68&sr=8-1",
    buttonText: "PRE-ORDER 📚",
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background-image bg-cover bg-center shadow-lg">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">
        {/*  Site header */}
        <Header />

        <main>
          <MemoirBanner />
          <div className="w-full grid grid-cols-7 self-center p-7 justify-center bg-slate-800 ">
            {/* Cards */}
            <div className="text-white text-left ml-2 md:ml-16 font-medium text-3xl self-center col-span-4">
              Sample Chapter
            </div>
            <div className="flex justify-center w-full col-span-3">
              <a
                className="h-full self-center p-2 text-purple-200"
                href="https://youtu.be/wPZhLBkHhwY?si=gLmwE2NAlkv5RcUV"
                target="_blank"
              >
                Reading of First Chapter on YouTube{" "}
                <span className="text-xs">(pre-edit)</span>
                <FontAwesomeIcon icon={faSquareArrowUpRight} className="ml-3" />
              </a>
            </div>
          </div>
          <div className="lg:my-10 md:px-20 p-4 md:p-0 mx-auto text-slate-800 animate-fade-in">
            <div className="text-4xl font-bold mt-5">
              About <i>TOO YOUNG FOR CANCER </i>
            </div>
            <div className="mt-4">
              <p className="text-sm text-center md:text-left ">
                The inspiring story of a stage IV cancer survivor’s journey
                through a complex and biased medical system to get a diagnosis
                and the treatment that would save her life, and how she found
                her life’s purpose through community and advocacy. New Year’s
                Eve 2020 was supposed to be a turning point to better days for
                29-year-old Katie Coleman. Instead, she found herself in the ER
                processing the earth-shattering news of a stage IV cancer
                diagnosis, one that had come after years of being assured she
                was “too young for cancer” and a repeated misdiagnosis of
                anxiety. Too Young for Cancer tells the story of Katie’s journey
                from diagnosis with an ultra-rare cancer through treatment,
                recovery and a life-altering shift in perspective. Katie starts
                her journey shy, timid, and frightened of an intimidating
                medical world, but as she learns how to advocate for herself,
                she faces her own mortality with bravery and finds herself at
                top cancer institutions arguing her case for a radical and
                high-risk surgery that could change her life forever. With
                support from her husband; innovative doctors; and a diverse
                community of cancer survivors and fighters, Katie finds her
                life’s purpose to advocate not only for herself but also for
                others who are fighting just as hard for their lives. Too Young
                for Cancer highlights the absolute best and worst in healthcare
                and uncovers the silver linings and beauty of humanity filling
                the space in between.
              </p>
            </div>

            <div className="text-3xl font-bold text-slate-800 mt-10">
              Where to Pre-Order
            </div>
            <div className="mt-4">
              <CarouselComponent cards={purchaseMemoir} color="slate-700" />
            </div>

            <div className="text-3xl font-bold text-slate-800 mt-10 bg text-center md:text-left ">
              Why Pre-Order?
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 mt-4 ">
              <p className="text-sm col-span-3">
                Pre-orders can be very impactful for new titles. They help to
                build buzz around the book and show publishers that there is
                interest in the book so retailers and store can stock it. This
                can help to increase the number of copies printed and can help
                to get the book on bestseller lists. The more pre-orders, the
                more likely the book is to be a success.{" "}
                <span className="font-semibold">
                  But on a personal level, pre-orders and support for this book
                  mean the world to me personally as I am donating my portion of
                  the proceeds from it back to research because more patients
                  deserve outcomes like I've had so far.{" "}
                </span>
              </p>

              <VideoPopup
                videoType="tikTok"
                videoSrc={"https://www.tiktok.com/embed/7341189876420840746"}
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mt-5">Pre-Orders by Week</h2>
              <p className="text-sm">
                Just like I did with my diagnosis, I'm sharing my pre-order
                sales each week to make the info more accessable for others.
                Let's make an impact together.
              </p>
            </div>
            <h1 className="w-full text-center text-3xl mt-5 font-semibold">
              Total Pre-Orders: 208
            </h1>
            <div className="w-3/4 mx-auto">
              <BarChart01 data={data} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Memoir;
