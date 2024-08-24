import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "@theme-toggles/react/css/classic.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-[#121212] text-white" : "bg-[#EDEDED] text-black"
      }`}
    >
      <Navbar toggleTheme={toggleTheme} isToggled={isDarkMode} />
      <div className="flex flex-row">
        <Sidebar isToggled={isDarkMode} />
        <MainContent isToggled={isDarkMode} />
      </div>
    </div>
  );
};

export default App;
