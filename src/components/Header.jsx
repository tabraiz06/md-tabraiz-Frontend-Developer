import React from 'react'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className="flex w-full justify-between items-center min-h-[100px] px-16 fixed z-50 ">
      <div>
        
        <img src={logo} alt="logo" />
      </div>
      <div className='menus flex w-[653px] h-[64px] items-center justify-evenly'>
        <span>Features</span>
        <span>Why Us</span>
        <span>Tokenomics</span>
        <span>Roadmap</span>
      </div>
      <div className='flex gap-3'>
        <button className='btn1 hover:bg-'>Login</button>
        <button className='btn2'>Whitepaper</button>
      </div>
    </div>
  );
}

export default Header
