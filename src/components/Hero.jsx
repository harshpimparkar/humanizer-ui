import React from "react";


export default function Hero() {
  return (
    <div className="container">
      <div className="Hero-text">
        <div className="Hero">
          <h1>Better writing, Better results</h1>
        </div>
        <div className="Sub-hero">
          <h4>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            cupiditate ad similique.
          </h4>
        </div>
      </div>
      <div className="Hero-img">
        <video
          class="video-player_video__UngAL"
          autoplay=""
          playsinline=""
          poster="https://static-web.grammarly.com/1e6ajr2k4140/2piKAof8UlxD7OY70joWli/75e4884c0099c22f86237b665b10a566/parallax-slide-3.png"
        >
          {" "}
          <source
            src="public\122124_Section_3_Animation_2x.mp4"
            type="video/mp4"
          />
          Sorry, your browser doesn't support embedded videos
        </video>
        {/* <img src="public\pexels-belle-co-402028.jpg" alt="IMG" height="200" width="300"/> */}
      </div>
    </div>
  );
}
