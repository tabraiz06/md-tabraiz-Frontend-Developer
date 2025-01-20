import React from 'react'
import bgtec from '../assets/bg-tec.mov'
import Donut from '../assets/Donut.png'
const Tokenomics = () => {
  return (
    <div className="bg-[#00161d40] Tokenomics h-[802px] z-30 w-full  mt-8 relative items-center justify-center flex  ">
      <video
        src={bgtec}
        autoPlay
        muted
        loop
        className="z-0 absolute top-0"
      ></video>
      <div className="relative flex w-full h-[694px]  flex-col gap-[80px] text-center z-40 ">
        <div className="header">
          <h1 className="text-[22px] font-[500] text-[#FFFFFF]">Tokenomics</h1>
        </div>
        <div className="flex p-[80px] gap-[40px]">
          <div className="w-[671px]">
            <img src={Donut} alt="" className="h-[522px]" />
          </div>
          <div className="w-[538px] flex flex-col gap-[14px] ">
            <div className="h-[324px] py-[12px] px-[56px] rounded-[20px] bg-[#0C2B2FB2]">
              <div className="flex flex-col spans">
                <div className="w-[426px] h-[50px] flex gap-[16px] p-[12px] ">
                  <span className="w-[192.5px]">Name</span>:<span>EthAi</span>
                </div>
                <div className="w-[426px] h-[50px] flex gap-[16px] p-[12px] ">
                  <span className="w-[192.5px]">Token Name</span>:
                  <span>$EthAi</span>
                </div>
                <div className="w-[426px] h-[50px] flex gap-[16px] p-[12px] ">
                  <span className="w-[192.5px]">Token standard</span>:
                  <span>ERC20</span>
                </div>
                <div className="w-[426px] h-[50px] flex gap-[16px] p-[12px] ">
                  <span className="w-[192.5px]">Blockchain</span>:
                  <span>Ethereum</span>
                </div>
                <div className="w-[426px] h-[50px] flex gap-[16px] p-[12px] ">
                  <span className="w-[192.5px]">Total Supply</span>:
                  <span>100 Million</span>
                </div>
                <div className="w-[426px] h-[50px] flex gap-[16px] p-[12px] ">
                  <span className="w-[192.5px]">Tax</span>:<span>5%/5%</span>
                </div>
              </div>
            </div>
            <div className="bg-[#0C2B2FB2] h-[174px] py-[12px] px-[56px] rounded-[20px]">
              <div className="flex flex-col spans">
                <div className="w-[426px] h-[50px] flex gap-[16px] p-[12px] ">
                  <span className="w-[192.5px]">Team</span>:<span>35%</span>
                </div>
                <div className="w-[426px] h-[50px] flex gap-[16px] p-[12px] ">
                  <span className="w-[192.5px]">Marketing</span>:<span>5%</span>
                </div>
                <div className="w-[426px] h-[50px] flex gap-[16px] p-[12px] ">
                  <span className="w-[192.5px]">Liquidity Pool</span>:
                  <span>90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics
