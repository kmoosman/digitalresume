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

export const Memoir = ({ type }) => {
  const data = {
    labels: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
    ],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: tailwindConfig().theme.colors.blue[900],
        borderColor: tailwindConfig().theme.colors.blue[900],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
        {/*  Site header */}
        <Header />

        <main>
          <WelcomeBanner type={type} />
          <div className="w-full grid grid-cols-6 self-center p-5 justify-center bg-slate-800 ">
            {/* Cards */}
            <div className="text-white text-left ml-20 text-3xl col-span-4">
              Sample Chapter
            </div>
            <div className="flex justify-center w-full col-span-2">
              <a
                className="h-full self-center p-2 text-indigo-200"
                href="https://youtu.be/wPZhLBkHhwY?si=gLmwE2NAlkv5RcUV"
                target="_blank"
              >
                YouTube Reading of First Chapter{" "}
                <span className="text-xs">(pre-edit)</span>
                <FontAwesomeIcon icon={faSquareArrowUpRight} className="ml-3" />
              </a>
            </div>
          </div>
          <div className="my-10 md:px-20 p-4 md:p-0 mx-auto">
            <div className="text-3xl font-bold text-slate-800 mt-5">
              About <i>TOO YOUNG FOR CANCER </i>
            </div>
            <div className="mt-4">
              <p className="text-sm">
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
            <div className="grid grid-cols-12 gap-6 mb-6 mt-4">
              {purchaseMemoir.map((link) => (
                <PodcastCard
                  title={link.name}
                  blurb={link.description}
                  type="link"
                  link={link.link}
                  key={link.id}
                  image={link.image}
                />
              ))}
            </div>
            <div className="text-3xl font-bold text-slate-800 mt-10 bg">
              Why Pre-Order?
            </div>

            <div className="grid grid-cols-4 mt-4">
              <p className="text-sm col-span-3">
                Pre-orders can be hugely impactful for new titles. They help to
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

              <VideoPopup />
            </div>
            <div className="w-1/2">
              <BarChart01 data={data} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Memoir;
