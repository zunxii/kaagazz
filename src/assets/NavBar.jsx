import React from 'react';
import logo from "./kaagazz-logo.png";
import { RiHeartFill } from "@remixicon/react";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className='flex justify-around items-center p-6 fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-lg'>
      <img 
        className='w-20 cursor-pointer hover:scale-105 transition-transform duration-300' 
        src={logo} 
        alt="Kaagazz Logo"
        onClick={() => navigate('/')}
      />
      <div className='flex justify-evenly w-[40%]'>
        <span 
          onClick={() => navigate('/')}
          className='font-bold text-[#355F9B] cursor-pointer [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] hover:scale-110 transition-transform duration-300'
        >
          HOME
        </span>
        <span 
          onClick={() => navigate('/shop')}
          className='font-bold text-[#355F9B] cursor-pointer [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] hover:scale-110 transition-transform duration-300'
        >
          SHOP
        </span>
        <span 
          onClick={() => navigate('/products')}
          className='font-bold text-[#355F9B] cursor-pointer [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] hover:scale-110 transition-transform duration-300'
        >
          PRODUCTS
        </span>
        <span 
          onClick={() => navigate('/about')}
          className='font-bold text-[#355F9B] cursor-pointer [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] hover:scale-110 transition-transform duration-300'
        >
          ABOUT
        </span>
      </div>
      <div>
        <span className="hover:scale-110 transition-transform duration-300 cursor-pointer">
          <RiHeartFill
            size={36}
            color="red"
            className="my-icon hover:drop-shadow-lg"
          />
        </span>
      </div>
    </nav>
  )
}

export default NavBar
