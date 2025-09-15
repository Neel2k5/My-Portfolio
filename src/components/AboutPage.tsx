import { useState, useEffect } from "react";
import pfp from "/pfp.jpeg";
import { useScroll } from "../context/ScrollContext";

const AboutPage = () => {
  const [loaded, setLoaded] = useState(false);
  const { about, currentTab } = useScroll();
  useEffect(() => {
    if (currentTab.current === about.current) {
      setLoaded(true);
    } else setLoaded(false);
  }, [currentTab]);

  return (
    <div
      ref={about}
      className="scroll-mt-[60px] sm:scroll-mt-[54px] h-[calc(100vh-60px)] sm:h-[calc(100vh-54px)] overflow-clip w-screen"
    >
      <div className="flex flex-col">
        {/* Photo and bit about me */}
        <div className="flex flex-col sm:flex-row sm:gap-15 px-5 sm:px-15">
          <div
            className={`${
              !loaded ? `translate-y-20 opacity-0` : ``
            } h-[180px] rounded-[5px] mt-5 sm:m-5 w-[144px] overflow-clip transition-all duration-700`}
          >
            <img className="grayscale h-full w-full object-cover" src={pfp} />
          </div>
          <div className="flex flex-col">
            <div
              className={`${
                !loaded ? `translate-x-20 opacity-0` : ``
              } font-inconsolata font-light text-[40px] sm:text-[64px] transition-all duration-700`}
            >
              Bit About Me
            </div>
            <div
              className={`${
                !loaded ? `translate-x-20 opacity-0` : ``
              } font-inter text-[#7D7D7D] font-semibold italic text-[12px] sm:text-[15px] text-wrap sm:w-[898px] transition-all duration-700`}
            >
              As a full-stack developer, I focus on building reliable backends
              and seamless frontends. I use React and Tailwind CSS for
              interfaces, with Figma for design collaboration, but my core
              expertise is in backend development with Golang utilising Fiber
              and Node with Express. I’ve worked across databases including
              MongoDB, PostgreSQL, MySQL, and SQLite, and I leverage Docker and
              Redis to optimize performance and scalability. I deploy projects
              using platforms like Firebase and Vercel.
            </div>
          </div>
        </div>

        {/* My Craft and boxes */}
        <div className="flex">
          <div className="flex items-center flex-col sm:px-20 pr-5 sm:py-4 gap-5">
            <div
              className={`${
                !loaded ? `-translate-x-20 opacity-0` : ``
              } flex flex-col items-center transition-all duration-700`}
            >
              <div className="text-[64px] sm:text-[90px] font-light">
                My Craft
              </div>
              <div className="font-inter font-semibold text-[#7D7D7D] text-[18px] text-center text-wrap w-[420px]">
                “The harmony of diverse technologies can create elegance built
                on integrity”
              </div>
            </div>
            <div
              className={`${
                !loaded ? `translate-y-20 opacity-0` : ``
              } transition-all duration-700 flex gap-4`}
            >
              <button 
              onClick={
                ()=>{
                  window.open("https://github.com/Neel2k5","_blank","noopener,noreferrer")
                }
              }
              className=" hover:text-white hover:bg-black transition-all duration-500 font-inconsolata outline-1 font-light px-12 py-2 rounded-[60px] text-[24px]">
                Github
              </button>
              <button 
              onClick={
                ()=>{
                  window.open("https://docs.google.com/document/d/1M3ICC73bWFabGEEa859hJJh62oo3lnmo/edit?usp=sharing&ouid=111456362393989146999&rtpof=true&sd=true","_blank","noopener,noreferrer")
                }
              }
              className="hover:text-white hover:bg-black transition-all duration-500 font-inconsolata outline-1 font-light px-12 py-2 rounded-[60px] text-[24px]">
                Resume
              </button>
            </div>
          </div>

          {/* Boxes */}
          <div
            className={`${
              !loaded ? `translate-y-20 opacity-0` : ``
            } transition-all duration-700 flex flex-col sm:flex-row flex-wrap gap-2 mr-5 justify-center w-full sm:w-[688px] sm:pr-12`}
          >
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <div className="bg-[#F1F1F1] px-2 py-1 flex flex-col justify-center w-[347px] h-auto sm:w-[337px] rounded-[15px] sm:h-[150px]">
                <div className="font-inconsolata text-[20px] sm:text-[48px] font-light text-center">
                  MERN Stack{" "}
                </div>
                <div className="font-inter text-[10px] font-semibold sm:text-[12px] text-center text-[#858585]">
                  A flexible and scalable JavaScript stack for dynamic,
                  data-driven applications.
                </div>
              </div>

              <div className="bg-[#F1F1F1] px-2 py-1 flex flex-col justify-center w-[347px] h-auto sm:w-[337px] rounded-[15px] sm:h-[150px]">
                <div className="font-inconsolata text-[20px] sm:text-[48px] font-light text-center">
                  Go(Fiber){" "}
                </div>
                <div className="font-inter text-[10px] font-semibold sm:text-[12px] text-center text-[#858585]">
                  A high-performance, scalable backend framework of golang for
                  building robust and flexible APIs.
                </div>
              </div>
            </div>

            <div className="bg-[#F1F1F1] px-2 py-1 flex flex-col justify-center w-fit h-auto sm:w-[400px] rounded-[15px] sm:h-[150px]">
              <div className="font-inconsolata text-[20px] sm:text-[48px] font-light text-center">
                Containerisation
              </div>
              <div className="font-inter text-[10px] font-semibold sm:text-[12px] text-center text-[#858585]">
                Streamlining development and deployment with Docker for
                scalable, consistent, and efficient workflows.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
