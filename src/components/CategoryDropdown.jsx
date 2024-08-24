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
        className={`border p-2 rounded-md text-[#585757] ${
          isToggled ? "bg-[#212223] border-gray-700" : "bg-white"
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
