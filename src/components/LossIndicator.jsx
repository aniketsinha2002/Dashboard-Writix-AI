import { FaLongArrowAltDown } from "react-icons/fa";

const LossIndicator = ({ val }) => {
  return (
    <div className="flex flex-row space-x-2 items-center text-sm md:text-base">
      <div className="text-red-500 flex flex-row justify-center items-center">
        <div className="mt-[2px]">
          <FaLongArrowAltDown />
        </div>
        <div>{val}</div>
      </div>
      <div>
        <div className="text-gray-400 ">from last month</div>
      </div>
    </div>
  );
};

export default LossIndicator;
