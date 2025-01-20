import React from 'react'
import plus from '../assets/plus.png'
const Faq = () => {
  return (
    <div className="flex w-full items-center justify-center h-[700px] p-16">
      <div className="flex w-[1200px] h-[551px] gap-[60px] p-16">
        <div className="w-[385px] ">
          <h1 className="text-[40px] font-[500] text-[#FFFFFF]">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="w-[675px]">
          <div className="flex py-[20px] gap-4">
            <img src={plus} alt="" className="h-[14px] w-[14px]" />
            <p className="text-[16px] font-[400] text-[#FFFFFF]">
              What is EthAi?
            </p>
          </div>
          <div className="flex py-[20px] gap-4">
            <img src={plus} alt="" className="h-[14px] w-[14px]" />
            <p className="text-[16px] font-[400] text-[#FFFFFF]">
              How can EthAi can help me as a Trader?
            </p>
          </div>
          <div className="flex py-[20px] gap-4">
            <img src={plus} alt="" className="h-[14px] w-[14px]" />
            <p className="text-[16px] font-[400] text-[#FFFFFF]">
              Who can use EthAi?
            </p>
          </div>
          <div className="flex py-[20px] gap-4">
            <img src={plus} alt="" className="h-[14px] w-[14px]" />
            <p className="text-[16px] font-[400] text-[#FFFFFF]">
              How does EthAi track smart money flow?
            </p>
          </div>
          <div className="flex py-[20px] gap-4">
            <img src={plus} alt="" className="h-[14px] w-[14px]" />
            <p className="text-[16px] font-[400] text-[#FFFFFF]">
              How does ensure data security?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq
