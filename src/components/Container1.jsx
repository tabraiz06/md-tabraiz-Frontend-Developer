import React from "react";
import v from '../assets/mainVideo.mp4'
const Container1 = () => {
  return (
    <div className="container1 flex flex-col items-center justify-center relative">
      <video src={v} autoPlay muted loop id="myVideo" className="h-full"></video>
      <div className="h-[300px] w-full flex flex-col items-center justify-center gap-4 z-10">
        <div className="headings">
          <h1>When Innovation</h1>
          <h2 >
            Meets <span>Investment</span>
          </h2>
        </div>
        <div className="paras">
          <p>Empowering Trading Through Advanced Technology </p>
        </div>
        <button>Open dApp</button>
      </div>
    </div>
  );
};

export default Container1;
