import React from "react";
import graph from "../assets/graph.png";
import wallet from "../assets/wallet.png";
import tools from "../assets/Tools.png";
import FutureTech from "../assets/FutureTech.png";
import bgvideo from "../assets/bg-video.mp4";

const About = () => {
  return (
    <div className="w-full h-[756px] flex items-center justify-center flex-col gap-4">
      <div className="text w-[744px] text-center  ">
        <h1 className="text-[22px] font-[500] text-[#FFFFFF]">About EthAi</h1>
        <p className="text-[16px] font-[400] text-[#B0FAFFB2]">
          At EthAi, we’re all about making crypto trading easier and more
          intuitive. We provide tools that help traders keep up with all new
          market trends, track top traders’ movements.
        </p>
        <button className="px-[20px] py-[10px] bg-[#CDFCFF] rounded-[12px] mt-4">
          Read more
        </button>
      </div>
      <video
        src={bgvideo}
        autoPlay
        muted
        loop
        className="z-0 absolute top-0 right-0 rotate-180 h-[304px]"
      ></video>
      <div className="relative flex w-[744px] h-[400px] bg-[#0C2B2FB2] rounded-[16px] gap-[40px] items-center justify-center">
        <div className=" z-30 flex w-[617px] h-[304px] flex-col gap-[40px]">
          <div className="flex gap-[36px]">
            <div className="flex flex-col gap-[12px] w-[290.5px] h-[120px]">
              <img src={graph} alt="" className="h-[24px] w-[24px]" />
              <div className="text h-[84px] w-full">
                <h1 className="text-[22px] font-[500] text-[#FFFFFF]">
                  Stay Ahead
                </h1>
                <p className="text-[16px] font-[400] text-[#B0FAFFB2]">
                  No more guesswork—get clear, trustable insights.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] w-[290.5px] h-[120px]">
              <img src={wallet} alt="" className="h-[24px] w-[24px]" />
              <div className="text h-[84px] w-full">
                <h1 className="text-[22px] font-[500] text-[#FFFFFF]">
                  Know Your Assets
                </h1>
                <p className="text-[16px] font-[400] text-[#B0FAFFB2]">
                  Always stay on top of how your investments are performing.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-[36px]">
            <div className="flex flex-col gap-[12px] w-[290.5px] h-[120px]">
              <img src={tools} alt="" className="h-[24px] w-[24px]" />
              <div className="text h-[84px] w-full">
                <h1 className="text-[22px] font-[500] text-[#FFFFFF]">
                  Simple, Not Overwhelming
                </h1>
                <p className="text-[16px] font-[400] text-[#B0FAFFB2]">
                  Our tools are designed to make complex market analysis easy to
                  understand and act on.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] w-[290.5px] h-[120px]">
              <img src={FutureTech} alt="" className="h-[24px] w-[24px]" />
              <div className="text h-[84px] w-full">
                <h1 className="text-[22px] font-[500] text-[#FFFFFF]">
                  Future-Proof
                </h1>
                <p className="text-[16px] font-[400] text-[#B0FAFFB2]">
                  We’re constantly improving, adding new features to help you
                  make the most informed decisions possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <video
        src={bgvideo}
        autoPlay
        muted
        loop
        className="z-0 absolute top-0 right-0 rotate-180 h-[304px]"
      ></video>
    </div>
  );
};

export default About;
