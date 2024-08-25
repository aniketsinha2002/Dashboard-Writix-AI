import { useState } from "react";
import { mockData } from "../assets/MockData"; //MOCK DATA
import SearchBar from "./SearchBar";
import CategoryDropdown from "./CategoryDropdown";
import FeatureCard from "./FeatureCard";

const MainContent = ({ isToggled }) => {
  const [features, setFeatures] = useState(mockData);
  const [searchResults, setSearchResults] = useState(mockData);

  const handleRemoveFeature = (id) => {
    setSearchResults((prevResults) =>
      prevResults.map((feature) =>
        feature.id === id ? { ...feature, isRemoving: true } : feature
      )
    );

    setTimeout(() => {
      setFeatures((prevFeatures) =>
        prevFeatures.filter((feature) => feature.id !== id)
      );
      setSearchResults((prevResults) =>
        prevResults.filter((feature) => feature.id !== id)
      );
    }, 300);
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
    <div className="flex-grow p-4">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between mb-4">
        <SearchBar onSearch={handleSearch} isToggled={isToggled} />
        <CategoryDropdown isToggled={isToggled} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.map((feature) => (
          <div
            key={feature.id}
            className={`transition-opacity duration-300 transform ${
              feature.isRemoving ? "opacity-0 scale-95" : ""
            }`}
          >
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              value={feature.value}
              indicator={feature.indicator}
              btn={feature.btn}
              onRemove={() => handleRemoveFeature(feature.id)}
              isToggled={isToggled}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
