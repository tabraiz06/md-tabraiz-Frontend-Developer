import React from "react";
import logo from "../assets/logo.png";
import telegram from '../assets/telegram.png'
import insta from '../assets/instagram.png'
import x from '../assets/x.png'
import fb from '../assets/facebook.png'
import discord from '../assets/discord.png'
const Footer = () => {
  return (
    <div className="h-[470px] w-full flex items-center justify-between p-16 bg-[#010F14]">
      <div className="flex flex-col gap-8">
        <img src={logo} alt="" className="h-[56px] w-[180px] " />
        <div className="flex icons gap-4">
          <img src={telegram} alt="" />
          <img src={insta} alt="" />
          <img src={x} alt="" />
          <img src={fb} alt="" />
          <img src={discord} alt="" />
        </div>
      </div>
      <div className="text w-[480px]">
        <h1 className="text-[40px] font-[500] text-[#FFFFFF]">
          “Designed for traders of today, just like you."
        </h1>
        <div className="btn h-[54px] w-[480px] gap-[12px] mt-4 rounded-[18px] border-[1px] flex justify-between px-4 items-center">
          <p className="text-[16px] font-[400] text-[#EFEFE8] px-[20px] py-[16px]  ">
            What's your work email?
          </p>
          <button className="py-[12px] px-[24px] bg-[#8BF9E803] h-[44px] rounded-[12px] text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
