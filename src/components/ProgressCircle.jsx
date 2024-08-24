import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCircle = ({ percentage }) => {
  return (
    <div className="mt-8 w-[8rem]">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={{
          path: { stroke: "#00712B" },
          text: { fill: "#00712B", fontSize: "16px" },
        }}
      />
    </div>
  );
};

export default ProgressCircle;
