import React from 'react'
import logo from './kaagazz-logo.png'
import lotus from './kaagazz_elements-09.png'

const footer = () => {
  return (
    <div className="flex justify-around items-start p-8 border-t">
      <div className="flex items-center">
        <img className="w-20" src={logo} alt="Kaagazz Logo" />
      </div>
      <div>
        <img className='w-10' src={lotus} alt="none"/>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[#355F9B] cursor-pointer font-bold">Privacy Policy</span>
        <span className="text-[#355F9B] cursor-pointer font-bold">Terms & Conditions</span>
        <span className="text-[#355F9B] cursor-pointer font-bold">Refund Policy</span>
      </div>
    </div>
  )
}

export default footer
