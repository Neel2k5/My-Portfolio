import { useState, useEffect } from "react";
import { useScroll } from "../context/ScrollContext";
const PhilosophyPage = () => {
  const [loaded, setLoaded] = useState(false);
  const { philosophy, currentTab } = useScroll();
  useEffect(() => {
    if (currentTab.current === philosophy.current) setLoaded(true);
    else setLoaded(false);
  }, [currentTab]);
  return (
    <div
      ref={philosophy}
      className=" relative scroll-mt-[60px]  sm:scroll-mt-[54px] h-[calc(100vh-60px)] sm:h-[calc(100vh-54px)] overflow-clip w-screen"
    >
      <div className={`${loaded?`opacity-100 translate-0`:`opacity-0 -translate-y-20 `} transition-all duration-500 flex justify-end`}>
        <div
          className={`font-inconsolata font-light text-[48px] sm:text-[90px] flex justify-end  text-right p-5 pr-10 w-[880px]`}
        >
          Uptime is the most Elegant Design Choice
        </div>
      </div>
      <div 
      className={`${loaded?`opacity-100 translate-0`:`opacity-0 -translate-x-20 `} transition-all duration-500 absolute top-65 sm:top-80 left-6 w-[380px] sm:w-[590px] text-wrap font-inter italic text-[#7D7D7D] font-semibold p-5`}>
        “ I believe the real beauty of software lives in its reliability.
        Interfaces may change, but systems last. My focus is on building
        foundations that are scalable, secure, and resilient quiet strengths
        that power everything above them.”
      </div>
      <div 
      className={`${loaded?`opacity-100 translate-0`:`opacity-0 translate-y-20 `} transition-all duration-500 mt-50 sm:mt-0 flex  justify-center items-end flex-1`}>
        <div className=" bg-[#F1F1F1] h-[375px] w-[calc(100vw-20px)] sm:h-[90px] rounded-t-[15px] sm:w-[calc(100vw-60px)]"></div>
      </div>{" "}
    </div>
  );
};

export default PhilosophyPage;
