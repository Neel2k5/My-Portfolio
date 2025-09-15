import { useScroll } from "../context/ScrollContext";
import { useState,useEffect } from "react";
const ExperiencePage = () => {
  const { experience,currentTab } = useScroll();
const [loaded, setLoaded] = useState(false);
useEffect(() => {
    if (currentTab.current === experience.current) {
      setLoaded(true);
    } else setLoaded(false);
  }, [currentTab]);

  const ReturnExp = ({
    title,
    desc,
    date,
    key,
  }: {
    title: string;
    desc: string;
    date: string;
    key: number;
  }) => {
    return (
      <div key={key} className="sm:h-[131px] p-2 sm:w-[453px] bg-[#EEEEEE]">
        <div className="font-inter font-semibold text-[30px]">{title}</div>
        <div className="flex justify-end px-5 text-[16px] font-inter font-medium italic">
          {date}
        </div>
        <div className="text-[14px] font-inter font-light italic ">{desc}</div>
      </div>
    );
  };

  const expList = [
    {
      title: "Tech Team at Resourcio",
      desc: "Working as a frontend Developer  at Resourcio gaining hand-on experience with NextJS and Tailwind",
      date: "31 Aug 2025",
    },
  ];
  return (
    <div
      ref={experience}
      className="h-[calc(100vh-60px)]  sm:h-[calc(100vh-54px)] overflow-clip w-screen scroll-mt-[60px] sm:scroll-mt-[54px]"
    >
      <div className={` flex gap-3 h-full flex-col-reverse sm:flex-row`}>
        <div className={`${loaded?`opacity-100 translate-0`:`opacity-0 -translate-x-20 `} transition-all duration-500 flex flex-col p-2 overflow-auto`}>
          {expList.map((v, i) => ReturnExp({ ...v, key: i }))}
        </div>
       
        <div className="flex-1 w-full h-full flex flex-col justify-center  text-center max-w-[710px] items-center">
          <div className={`font-inconsolata text-[64px] sm:text-[120px]  font-light ${loaded?`opacity-100 translate-0`:`opacity-0 translate-x-20 `} transition-all duration-500 `}>
            Experience
          </div>
          <div className={`font-inter ${loaded?`opacity-100 translate-0`:`opacity-0 -translate-y-20 `} transition-all duration-500 text-[20px] text-center text-[#7D7D7D] sm:w-[710px]`}>
            “Experience turns knowledge into wisdom. It teaches silently, yet
            reveals truth deeply. Through it, understanding is realized.”
          </div>
          <button
          onClick={()=>{
                  window.open("https://www.linkedin.com/in/swapnaneel-dutta","_blank","noopener,noreferrer")
                }}
          className={`mt-10 font-inter text-[24px] hover:text-white hover:bg-black transition-all duration-500 bg-[#E9E9E9] font-light px-19 py-2 ${loaded?`opacity-100 translate-0`:`opacity-0 translate-y-20 `} transition-all duration-500 rounded-[50px]`}>
            Linkedin
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
