import { IoMdRemoveCircleOutline } from "react-icons/io";

const FeatureCard = ({
  icon,
  title,
  value,
  indicator,
  btn,
  showBtn,
  onRemove,
  isToggled,
}) => {
  console.log(isToggled);
  return (
    <div
      className={`border-none focus:outline-none px-7 py-6 shadow-sm rounded-md flex flex-col ${
        isToggled
          ? "bg-[#1f1d1d] border-gray-700 text-white"
          : "bg-white border-gray-200 text-black"
      }`}
    >
      <div className="space-y-3">
        <div className="flex space-x-3 justify-between">
          <div className="text-[#8E8E8E] text-lg ">{title}</div>
          <div className="text-lg py-[3px] text-[#8E8E8E]">{icon}</div>
        </div>

        <div className="flex items-start ">
          <div className="text-4xl font-bold  ">{value}</div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-row items-start justify-start">
          <div>{indicator}</div>
        </div>
        {/* EDGE CASE -> WHEN SORRY NOT FOUND -> SHOW BUTTON FROM API */}
        <div
          className={` ${showBtn} flex flex-row items-center justify-center py-1 space-x-2 text-red-500 hover:text-white  hover:border-red-700 hover:bg-red-500 font-semibold cursor-pointer border border-red-500 rounded-md`}
          onClick={onRemove}
        >
          <IoMdRemoveCircleOutline />
          <div className="">{btn}</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
