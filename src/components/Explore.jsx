import React from 'react'

const Explore = () => {
  return (
    <div className="flex w-full h-[462px] items-center justify-center">
      <div className="bg-[#011C24] text-center flex flex-col w-[960px] h-[382px] px-[156px] py-[56px] gap-[30px] rounded-[20px]">
        <h1 className="text-[40px] font-[500] text-[#FFFFFF]">
          Explore Our <span>dApp</span>
        </h1>
        <p className="text-[16px] font-[400] text-[#B0FAFFB2]">
          EthAi is an AI-powered dApp designed to help traders make smarter,
          data-driven decisions. By tracking smart money flows, monitoring key
          wallets, and providing real-time market insights, EthAi empowers users
          to stay ahead of trends. The platform offers intuitive AI features for
          asset recommendations, market analysis, and personalized crypto Q&A,
          making it the ultimate tool for both novice and experienced traders.
        </p>
        <button className="py-[12px] px-[24px] rounded-[12px] bg-[#CDFCFF] w-[140px] self-center">
          Open dApp
        </button>
      </div>
    </div>
  );
}

export default Explore
