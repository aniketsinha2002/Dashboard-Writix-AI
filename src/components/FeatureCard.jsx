const FeatureCard = ({
  icon,
  title,
  value,
  indicator,
  indicatorVal,
  btn,
  onRemove,
  isToggled,
}) => {
  console.log(isToggled);
  return (
    <div
      className={`border-none focus:outline-none p-4 shadow-sm rounded-md flex flex-col space-y-4 ${
        isToggled
          ? "bg-[#1f1d1d] border-gray-700 text-white"
          : "bg-white border-gray-200 text-black"
      }`}
    >
      <div className="flex space-x-3">
        <div className="text-2xl py-[3px] text-[#8E8E8E]">{icon}</div>
        <div className="text-[#8E8E8E] text-lg tracking-wide">{title}</div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-4xl font-bold md:mt-4 md:mb-2 ">
          {value}
        </div>
      </div>

      <div className="">
        <div>{indicator}</div>
        <div>{indicatorVal}</div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onRemove}
          className="text-red-500 hover:text-red-700 font-semibold"
        >
          {btn}
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
