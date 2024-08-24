const FeatureCard = ({ icon, title, value, onRemove, isToggled }) => {
  return (
    <div
      className={`border p-4 bg-white shadow-sm rounded-md flex flex-col space-y-6 ${
        isToggled ? "bg-[#1F1F1F] border-gray-700 text-white" : ""
      }`}
    >
      <div className="flex items-start space-x-4">
        <div className="text-2xl text-[#8E8E8E]">{icon}</div>
        <div className="text-[#8E8E8E]">{title}</div>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="text-3xl font-semibold">{value}</div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={onRemove}
          className="text-red-500 hover:text-red-700 font-semibold"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
