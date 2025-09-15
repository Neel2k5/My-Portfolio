import { useState } from "react";
import { SlControlPlay } from "react-icons/sl";
import { useScroll } from "../context/ScrollContext";
const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((p) => !p);
  };
  const { about, home,experience,philosophy, setCurrentTab,currentTab } = useScroll();
  return (
    <div className="flex flex-col">
      <div className="h-[60px]  sm:h-[54px] cursor-default flex w-screen p-2 justify-between bg-neutral-50 NavCustom ">
        <div
          onClick={() => {
            home.current?.scrollIntoView({ behavior: "smooth" });
            setCurrentTab(home);
          }}
          className="font-inter ml-5 text-4xl sm:ml-7 font-semibold"
        >
          Neel
        </div>
        {
          <>
            <div className="hidden sm:flex gap-5 text-[14px] mt-2">
              <div
                onClick={() => {
                  about.current?.scrollIntoView({ behavior: "smooth" });
                  setCurrentTab(about);
                }}
                className={`hover:font-medium ${currentTab.current===about.current&&`font-medium`} text-black transition-colors duration-200`}
              >
                About
              </div>
              <div
              onClick={() => {
                  philosophy.current?.scrollIntoView({ behavior: "smooth" });
                  setCurrentTab(philosophy);
                }}
              className={`hover:font-medium ${currentTab.current===philosophy.current&&`font-medium`} text-black transition-colors duration-200`}>
                Philosphy
              </div>
              <div 
              onClick={() => {
                  experience.current?.scrollIntoView({ behavior: "smooth" });
                  setCurrentTab(experience);
                }}
              className={`hover:font-medium ${currentTab.current===experience.current&&`font-medium`} text-black transition-colors duration-200`}>
                Experience
              </div>
            </div>
            <button 
            onClick={
              ()=>{
                window.open("https://mail.google.com/mail/?view=cm&fs=1&to=s.dutta2k5@gmail.com","_blank")
              }
            }
            className="hidden sm:flex transition-all duration-200 font-instrument hover:bg-black hover:text-white outline-[1px] py-3  items-center px-8 rounded-2xl  sm:mr-7">
              Contact
            </button>
            <div
              onClick={toggleExpanded}
              className={`${
                expanded ? `-rotate-90` : `rotate-90`
              } mr-5 transition-all duration-500 flex sm:hidden items-center text-2xl font-medium`}
            >
              <SlControlPlay />
            </div>
          </>
        }
      </div>
      {
        <div className="sm:hidden">
          <div
            className={`overflow-hidden transform transition-all duration-400 ease-in-out
              ${expanded ? "max-h-screen " : "max-h-0"}`}
          >
            <div className="relative flex flex-col ">
              <div
                onClick={() => {
                  about.current?.scrollIntoView({ behavior: "smooth" });
                  setCurrentTab(about);
                }}
                className="h-15 hover:bg-[#b4b4b4] flex p-10 text-2xl items-center transition-all duration-200 bg-[#DDDDDD]"
              >
                About
              </div>
              <div 
              onClick={() => {
                  philosophy.current?.scrollIntoView({ behavior: "smooth" });
                  setCurrentTab(philosophy);
                }}
              className="h-15 hover:bg-[#b4b4b4] flex p-10 text-2xl items-center transition-all duration-200 bg-[#DDDDDD]">
                Philosophy
              </div>
              <div 
              onClick={() => {
                  experience.current?.scrollIntoView({ behavior: "smooth" });
                  setCurrentTab(experience);
                }}
              className="h-15 hover:bg-[#b4b4b4] flex p-10 text-2xl items-center transition-all duration-200 bg-[#DDDDDD]">
                Experience
              </div>
              <div
              onClick={
              ()=>{
                window.open("https://mail.google.com/mail/?view=cm&fs=1&to=s.dutta2k5@gmail.com","_blank")
              }
            }
              className="h-15 hover:bg-[#b4b4b4] flex p-10 text-2xl items-center transition-all duration-200 bg-[#DDDDDD]">
                Contact
              </div>
            </div>
          </div>
          <div
            className={`${
              expanded ? `opacity-50 ` : `opacity-0`
            } w-screen h-[calc(100vh-240px)] bg-neutral-900 transition-all duration-400`}
          ></div>
        </div>
      }
    </div>
  );
};

export default NavBar;
