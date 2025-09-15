import {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

type ScrollType = {
  home: RefObject<HTMLDivElement | null>;
  about: RefObject<HTMLDivElement | null>;
  philosophy: RefObject<HTMLDivElement | null>;
  experience: RefObject<HTMLDivElement | null>;
  currentTab : RefObject<HTMLDivElement | null>;
  setCurrentTab : React.Dispatch<React.SetStateAction<RefObject<HTMLDivElement | null>>>
};
const ScrollCtx = createContext<ScrollType | null>(null);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const home = useRef<HTMLDivElement | null>(null);
  const about = useRef<HTMLDivElement | null>(null);
  const philosophy = useRef<HTMLDivElement | null>(null);
  const experience = useRef<HTMLDivElement | null>(null);
  const [currentTab,setCurrentTab] = useState<RefObject<HTMLDivElement | null>>(home)
  
  useEffect(() => {
    const sections = [home, about, philosophy, experience];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ref = sections.find((sec) => sec.current === entry.target);
            if (ref) setCurrentTab(ref);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => sec.current && observer.observe(sec.current));

    return () => {
      sections.forEach((sec) => sec.current && observer.unobserve(sec.current));
    };
  }, []);
  
  return (
    <ScrollCtx.Provider value={{ home, about, philosophy, experience,currentTab,setCurrentTab }}>
      {children}
    </ScrollCtx.Provider>
  );
};

export const useScroll = (): ScrollType => {
  const ctx = useContext(ScrollCtx);
  if (!ctx) throw new Error("useScroll must be used inside ScrollProvider");
  return ctx;
};
