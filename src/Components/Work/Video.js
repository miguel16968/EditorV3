import React from "react";
import VideoPlayer from "./videojs";

function Video() {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: "http://media.w3.org/2010/05/video/movie_300.mp4",
        type: "video/mp4"
      }
    ]
  };

  return (
    <div className="Video">
      <VideoPlayer {...videoJsOptions} />
    </div>
  );
}

export default Video;
