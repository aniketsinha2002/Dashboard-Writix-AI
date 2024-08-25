import { FaLongArrowAltDown } from "react-icons/fa";

const ProfitIndicator = ({ val }) => {
  return (
    <div className="flex flex-col items-center text-sm md:text-base">
      <div className="text-red-500 flex flex-row justify-center items-center">
        <div className="mt-[2px]">
          <FaLongArrowAltDown />
        </div>
        <div>{val}</div>
      </div>
      <div>
        <div className="text-gray-400 tracking-wide">Since Last Month</div>
      </div>
    </div>
  );
};

export default ProfitIndicator;
