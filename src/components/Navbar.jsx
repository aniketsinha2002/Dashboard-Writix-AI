import { FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/classic.css";

const Navbar = ({ isToggled, toggleTheme }) => {
  return (
    <div
      className={`p-4 shadow flex justify-between items-center h-[8vh] bg-[#273cdf]`}
    >
      <div className="text-xl font-bold text-white">Writix AI</div>

      <div className="flex flex-row items-center space-x-10 text-white">
        {/* Theme toggle button */}
        <Classic
          className="text-2xl"
          toggled={!isToggled}
          toggle={toggleTheme}
          duration={900}
          forceMotion={true}
        />
        <FaEnvelope className={`cursor-pointer `} />
        <FaBell className={`cursor-pointer `} />
        <FaUserCircle className={`cursor-pointer `} size={24} />
      </div>
    </div>
  );
};

export default Navbar;
