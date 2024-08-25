import { useState } from "react";
import {
  FaWallet,
  FaUsers,
  FaCalendarDay,
  FaShoppingCart,
  FaDownload,
  FaLongArrowAltUp,
  FaLongArrowAltDown,
} from "react-icons/fa";
import ProfitIndicator from "./ProfitIndicator";
import LossIndicator from "./LossIndicator";
import SearchBar from "./SearchBar";
import CategoryDropdown from "./CategoryDropdown";
import FeatureCard from "./FeatureCard";

const MainContent = ({ isToggled }) => {
  const [features, setFeatures] = useState([
    {
      id: 1,
      icon: <FaWallet />,
      title: "Balance",
      value: "$12,345",
      indicator: <ProfitIndicator val={"10.54%"} />,
      btn: "Remove",
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Number of Clients",
      value: "150",
      indicator: <LossIndicator val={"10.54%"} />,
      btn: "Remove",
    },
    {
      id: 3,
      icon: <FaCalendarDay />,
      title: "Today's Bookings",
      value: "+ 12",
      indicator: <ProfitIndicator val={"10.54%"} />,
      btn: "Remove",
    },
    {
      id: 4,
      icon: <FaShoppingCart />,
      title: "Purchases",
      value: "24",
      indicator: <ProfitIndicator val={"10.54%"} />,
      btn: "Remove",
    },
    {
      id: 5,
      icon: <FaDownload />,
      title: "Downloads",
      value: "1,200",
      indicator: <LossIndicator val={"10.54%"} />,
      btn: "Remove",
    },
  ]);

  const [searchResults, setSearchResults] = useState(features);

  const handleRemoveFeature = (id) => {
    const updatedFeatures = features.filter((feature) => feature.id !== id);
    setFeatures(updatedFeatures);
    setSearchResults(updatedFeatures);
  };

  const handleSearch = (query) => {
    const results = features.filter((feature) =>
      feature.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(
      results.length > 0
        ? results
        : [{ id: null, title: "Sorry, not found", btn: "" }]
    );
  };

  return (
    <div className={`flex-grow p-4 `}>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between mb-4">
        <SearchBar onSearch={handleSearch} isToggled={isToggled} />
        <CategoryDropdown isToggled={isToggled} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            value={feature.value}
            indicator={feature.indicator}
            btn={feature.btn}
            onRemove={() => handleRemoveFeature(feature.id)}
            isToggled={isToggled}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
