import { useState, useEffect } from "react";
import pfp from "/pfp.jpeg";
import { useScroll } from "../context/ScrollContext";
import SkillCard from "../components/supporter/SkillCard";
import { skillCardList } from "../lib/skillCardList";

const AboutPage = () => {
  const [loaded, setLoaded] = useState(false);
  const { about, currentTab } = useScroll();

  useEffect(() => {
    if (currentTab.current === about.current) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [currentTab]);

  return (
    <div
      ref={about}
      className="scroll-mt-[60px] sm:scroll-mt-[54px] min-h-[calc(100vh-60px)] sm:min-h-[calc(100vh-54px)] overflow-x-hidden w-screen pt-12 sm:pt-16"
    >
      <div className="flex flex-col pb-10">
        {/* Photo + About */}
        <div className="flex flex-col sm:flex-row sm:gap-12 px-5 sm:px-15">
          <div
            className={`${
              !loaded ? "translate-y-20 opacity-0" : ""
            } h-[180px] w-[144px] rounded-md overflow-hidden mt-5 sm:m-5 transition-all duration-700`}
          >
            <img
              src={pfp}
              alt="profile"
              className="grayscale h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <div
              className={`${
                !loaded ? "translate-x-20 opacity-0" : ""
              } font-inconsolata font-light text-[40px] sm:text-[64px] transition-all duration-700`}
            >
              Bit About Me
            </div>

            <div
              className={`${
                !loaded ? "translate-x-20 opacity-0" : ""
              } font-inter text-[#7D7D7D] font-light italic text-[12px] sm:text-[15px] sm:w-[900px] transition-all duration-700`}
            >
              Full-stack developer skilled in building reliable backends and
              seamless frontends using React, Next.js, and Tailwind CSS, with
              Figma for design collaboration. Strong backend expertise in
              Golang (Fiber) and Node.js (Express), focused on scalable APIs and
              efficient systems. Experienced with MongoDB, PostgreSQL, MySQL,
              SQLite, Redis, Docker, VPS deployments, Firebase, Vercel, and
              Cloudinary.
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          className={`${
            !loaded ? "translate-y-20 opacity-0" : ""
          } transition-all duration-700 grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-[1200px] mt-12 px-5 mx-auto`}
        >
          {skillCardList.map((card) => (
            <SkillCard
              key={card.title}
              title={card.title}
              desc={card.desc}
              tech={card.tech}
            />
          ))}
        </div>

        {/* Buttons */}
        <div
          className={`${
            !loaded ? "translate-y-20 opacity-0" : ""
          } transition-all duration-700 flex gap-4 justify-center mt-10 flex-wrap`}
        >
          <button
            onClick={() =>
              window.open(
                "https://github.com/Neel2k5",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="hover:text-white hover:bg-black transition-all duration-500 font-inconsolata outline px-10 py-2 rounded-full text-[22px]"
          >
            Github
          </button>

          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1M3ICC73bWFabGEEa859hJJh62oo3lnmo/edit?usp=sharing&ouid=111456362393989146999&rtpof=true&sd=true",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="hover:text-white hover:bg-black transition-all duration-500 font-inconsolata outline px-10 py-2 rounded-full text-[22px]"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;