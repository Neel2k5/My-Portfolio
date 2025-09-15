import AboutPage from "./components/AboutPage";
import ExperiencePage from "./components/ExperiencePage";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import PhilosophyPage from "./components/PhilosophyPage";
import { ScrollProvider} from "./context/ScrollContext";

const App = () => {
  return (
    <div className="h-full cursor-default w-full overflow-x-hidden overflow-y-auto scrollbar-hide">
      <ScrollProvider>
        <div className="fixed z-50">
          <NavBar />
        </div>
      <div className="pt-[60px] sm:pt-[54px] ">
        <div >
          <HomePage />
        </div>
        <div >
          <AboutPage />
        </div>
        <div>
          <PhilosophyPage/>
        </div>
        <div>
          <ExperiencePage/>
        </div>
      </div>
      </ScrollProvider>
      {/* scrollable tabs */}
    </div>
  );
};

export default App;
