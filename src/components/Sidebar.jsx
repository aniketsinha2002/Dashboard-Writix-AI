import {
  FaCalendarCheck,
  FaUserPlus,
  FaClipboardList,
  FaChartPie,
} from "react-icons/fa";
import ProgressCircle from "./ProgressCircle";

const Sidebar = ({ isToggled }) => {
  const options = [
    { icon: <FaCalendarCheck />, label: "Schedule a Meeting" },
    { icon: <FaUserPlus />, label: "Add Client" },
    { icon: <FaClipboardList />, label: "Today's Bookings" },
    { icon: <FaChartPie />, label: "Total Item Bookings" },
  ];

  return (
    <div
      className={`${
        isToggled ? "bg-[#212223] text-white" : "bg-gray-100 text-black"
      } px-4 py-5 shadow min-h-screen flex flex-col justify-between w-[10rem] md:w-[15rem]`}
    >
      <div className="flex flex-col gap-4">
        {options.map((option, index) => (
          <SidebarOption key={index} icon={option.icon} label={option.label} />
        ))}
      </div>
      <div className="flex justify-center">
        <ProgressCircle percentage={90} />
      </div>
    </div>
  );
};

const SidebarOption = ({ icon, label }) => (
  <div className="flex items-center space-x-4 mb-4 cursor-pointer">
    <div>{icon}</div>
    <div>{label}</div>
  </div>
);

export default Sidebar;
