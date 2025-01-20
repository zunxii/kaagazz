import React from 'react'
import main_photo from "./image.webp";
import { gsap } from "gsap";
import kaagazz_elements from './kaagazz_elements-09.png'
import vid from './header.mp4'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <section className="h-screen flex flex-col justify-center items-center relative bg-gradient-to-b from-white to-pink-50">
     <img className="w-[40%] right-10 bottom-10 absolute hover:scale-105 transition-transform duration-300" src={main_photo} alt="Kaagazz Product"/>
     <div className="absolute left-20 top-50">
      <h2 
        className="ml-5 text-2xl flex gap-5 items-center font-light tracking-wider"
        ref={(el) => {
          gsap.from(el, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
          });
        }}
      >WELCOME | स्वागतम् 
        <div className="rounded-[3rem] overflow-hidden flex justify-center items-center w-[60px] shadow-lg">
          <video 
            src={vid} 
            autoPlay 
            loop 
            muted 
            className="w-30"
            ref={(el) => {
              gsap.timeline()
                .from(el, {
                  scale: 0.5,
                  opacity: 0,
                  delay: 1,
                  duration: 1,
                  ease: "back.out"
                });
            }}
          ></video>
        </div>
      </h2>
      <div className="flex flex-col gap-4">
        <h1 
          className="text-9xl font-bold text-[#355F9B] tracking-wider drop-shadow-lg"
          ref={(el) => {
            gsap.from(el, {
              y: 100,
              opacity: 0, 
              duration: 1,
              ease: "power2.out"
            });
          }}
        >KAAGAZZ</h1>
        <h3 
          className="ml-80 text-xl font-light tracking-widest text-[#1C3B6B]"
          ref={(el) => {
            gsap.from(el, {
              x: 100,
              opacity: 0,
              duration: 1, 
              ease: "power2.out"
            });
          }}
        >INDIAN ROLLING PAPER</h3>
        <button
          onClick={() => navigate('/shop')}
          className="ml-80 mt-4 px-8 py-3 bg-[#355F9B] text-white rounded-full hover:bg-[#1C3B6B] transition-colors duration-300 shadow-lg text-lg font-medium tracking-wide"
        >
          SHOP NOW
        </button>
      </div>
     </div>
    </section>
    </>
  )
}

export default Home
