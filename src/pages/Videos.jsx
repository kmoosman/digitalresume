import React, { useState } from "react";

import { youtubeVideos } from "../utils/Data";
import PodcastCard from "../partials/dashboard/PodcastCard";
import VideoCard from "../partials/dashboard/VideoCard";

export const Videos = ({ type }) => {
  return (
    <div className="">
      <div className="text-3xl  text-slate-500 font-medium mt-10 mb-4 ml-5">
        {type !== "query" ? "YouTube" : "YouTube"}
      </div>
      {/*youtube video*/}
      <div className="mb-6 grid grid-cols-4 gap-4">
        {youtubeVideos().map((video) => (
          <VideoCard
            title={video.title}
            link={video.link}
            key={video.id}
            viewCount={video.viewCount}
            size={"medium"}
          />
        ))}
      </div>
    </div>
  );
};

export default Videos;
