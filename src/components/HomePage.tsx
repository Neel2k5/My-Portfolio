import { useEffect, useState } from "react";
import pfp from "/pfp.jpeg";
import { useScroll } from "../context/ScrollContext";

const HomePage = () => {
    const [loaded,setLoaded]= useState(false);
    const {home,currentTab} = useScroll()
    useEffect(()=>{
        if(currentTab.current===home.current)
          setLoaded(true)
        else setLoaded(false)
    },[currentTab])
    
  return (
    <div ref={home} className="h-[calc(100vh-60px)] sm:h-[calc(100vh-54px)] overflow-clip w-screen scroll-mt-[60px] sm:scroll-mt-[54px]">
      <div className="flex flex-col-reverse items-center sm:items-start sm:flex-row sm:justify-between">
        {/* left text and btn */}
        <div className="flex sm:pb-[40px] gap-[20px]  py-10 sm:px-10 flex-col justify-end  h-fit sm:h-[calc(100vh-54px)]">
          <div className={`${!loaded?`-translate-x-20 opacity-0`:``} transition-all duration-700`}>
            <div className=" flex leading-none text-wrap font-inconsolata font-light text-[85px] sm:text-[120px]  pb-0">
              Software
            </div>
            <div className="leading-none  text-wrap font-inconsolata font-light text-[85px] sm:text-[120px] pt-0">
              Developer
            </div>
          </div>
          <div
          className={`${!loaded?`-translate-y-20 opacity-0`:``} flex justify-center pb-10 sm:pb-0 sm:pr-25 transition-all duration-700`}
          >
            <button
            onClick={()=>{
                  window.open("https://www.linkedin.com/in/swapnaneel-dutta","_blank","noopener,noreferrer")
                }}
            className="font-inter text-[18px] py-3 px-6 sm:px-20 rounded-[50px] bg-[#E9E9E9] transition-all duration-400 hover:bg-black hover:text-white">
              Let's Connect
            </button>
          </div>
        </div>
        {/* Right side image and text */}
        <div 
        className={` flex gap-10  pl-10 sm:pl-20 sm:p-20 pt-10 flex-col `}
       >
          <div 
          className={`${!loaded?`translate-y-20 opacity-0`:``} h-[180px] rounded-[5px] m-5 w-[144px] overflow-clip transition-all duration-700`}
          >
            <img className="grayscale h-full w-full object-cover" src={pfp} />
          </div>
          
          <div 
          className={`${!loaded?`translate-x-20 opacity-0`:``} text-wrap flex justify-end font-semibold w-[160px] text-[11px] transition-all duration-700`}
          
          >Hi, I’m Neel, a Full Stack Web Developer focusing on building scalable systems </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
