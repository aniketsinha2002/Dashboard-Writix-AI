import React from "react";

const CategoryDropdown = ({ isToggled }) => {
  const categories = [
    { value: "widgets", label: "Widgets" },
    { value: "ui-elements", label: "UI Elements" },
    { value: "forms", label: "Forms" },
    { value: "data", label: "Data" },
    { value: "sample-pages", label: "Sample Pages" },
  ];

  return (
    <div className="relative">
      <select
        className={`tracking-wide border p-2 border-none focus:outline-none rounded-md text-[#928e8e] ${
          isToggled ? "bg-[#2C2C2C] border-gray-700" : "bg-white"
        }`}
      >
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
