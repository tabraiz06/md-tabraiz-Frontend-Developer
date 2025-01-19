import React from 'react'
import bgvideo from '../assets/bg-video.mp4'
import hImage from '../assets/h-img.png'
const container2 = () => {
  return (
    <div className="h-[832px] relative flex items-center justify-center py-4 mt-4">
      <video
        src={bgvideo}
        autoPlay
        muted
        loop
        className="z-0 absolute top-0 right-0 w-1/2 rotate-180 h-full"
      ></video>
      <div className="containts  z-20 flex flex-col gap-4">
        <div className=" top-0 flex h-[504px] w-[1200px] gap-4">
          <div className="h-[540px] w-[280px] justify-center containt1 flex flex-col items-center bg-[#0C2B2FB2]">
            <div className="h-[100px] w-[100px] bg-[#15B6C9] flex items-center justify-center border-[6px] border-solid rounded-[16px] border-[#0E8B9A] ">
              <div className="w-[60px] h-[60px] border-[1px] border-solid border-[#FFFFFF] rounded-[8px]"></div>
            </div>
            <div className="h-[203px] w-[232px] p-4 text-center">
              <h1 className="text-[22px] font-[500] text-[#FFFFFF]">
                Trade Optimizer
              </h1>
              <p className="text-[16px] font-[400] text-[#B0FAFFB2]">
                Find the right moments to buy or sell, with personalized trade
                suggestions designed to help you make the most of every
                opportunity.
              </p>
            </div>
          </div>
          <div className="h-[504px] w-[608px] flex flex-col gap-4 ">
            <div className=" h-[198px] w-[608px] flex bg-[#0C2B2FB2] rounded-[16px]">
              <div className=" h-[134px] w-[360px] p-4">
                <h1 className="text-[22px] font-[500] text-[#FFFFFF]">
                  Market Insight{" "}
                </h1>
                <p className="text-[16px] font-[400] text-[#B0FAFFB2]">
                  Stay ahead of the market. Get real-time updates on market
                  trends, track top traders' movements, and spot signals from
                  key influencers.
                </p>
              </div>
              <div className="texts-c2   w-[250px]"></div>
            </div>
            <div className=" h-[290px] w-[608px] flex bg-[#0C2B2FB2] rounded-[16px] text-center items-center justify-center">
              <h1 className="text-[40px] font-[500] text-[#FFFFFF]">
                Our Features
              </h1>
            </div>
          </div>
          <div className="h-[504px] w-[280px] bg-[#0C2B2FB2] rounded-[16px] p-4 flex flex-col gap-4 ">
            <div>
              <img src={hImage} alt="" />
            </div>
            <div className=" h-[181px] p-[9px]">
              <h1 className="text-center text-[22px] font-[500] text-[#FFFFFF]">
                Risk Guard{" "}
              </h1>
              <p className="text-center text-[16px] font-[400] text-[#B0FAFFB2]">
                Get alerts on market swings and potential risks before they
                impact your portfolio. This agent helps you navigate volatility
                and stay prepared for anything.
              </p>
            </div>
          </div>
        </div>
        <div className=" top-0 flex h-[240px] w-[1200px] gap-4">
          <div className="w-[446px] h-[240px] bg-[#0C2B2FB2] rounded1 flex items-center justify-center">
            <div className="text w-[254px] h-[134px] ">
              <h1 className="text-center text-[22px] font-[500] text-[#FFFFFF]">
                Portfolio Sync{" "}
              </h1>
              <p className="text-center text-[16px] font-[400] text-[#B0FAFFB2]">
                Easily manage your portfolio. You'll always know what you own,
                how it's performing, and where it’s headed.
              </p>
            </div>
          </div>
          <div className="w-[738px] h-[240px] bg-[#0C2B2FB2] rounded2 flex items-center p-4 b-img">
            <div className="w-[299px] h-[158px]">
              <h1 className="text-center text-[22px] font-[500] text-[#FFFFFF]">
                Opportunity Scout{" "}
              </h1>
              <p className="text-center text-[16px] font-[400] text-[#B0FAFFB2]">
                Find exciting new projects, events and tokens that others might
                be missing. Identifying promising opportunities early, so you
                never miss out on the next big thing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <video
        src={bgvideo}
        autoPlay
        muted
        loop
        className="z-0 absolute top-0 left-0 w-1/2 h-full "
      ></video>
    </div>
  );
}

export default container2
