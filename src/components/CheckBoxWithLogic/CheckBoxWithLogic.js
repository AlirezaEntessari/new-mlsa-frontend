// CheckBoxWithLogic Component
import React, { useState } from "react";

export default function CheckBoxWithLogic({ labelText, selectedIndustries, setSelectedIndustries }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxClick = () => {
    const updatedChecked = !checked;
    setChecked(updatedChecked);

    if (updatedChecked) {
      setSelectedIndustries([...selectedIndustries, labelText]);
    } else {
      setSelectedIndustries(selectedIndustries.filter(item => item !== labelText));
    }
  };

  return (
    <div
      className="checkbox-with-logic"
      onClick={handleCheckboxClick}
      style={{ cursor: "pointer", display: "flex", alignItems: "center", fontFamily: "Roboto" }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="22"
          height="22"
          fill={checked ? "#007BFF" : "white"}
          stroke="#221001"
          strokeWidth="2"
        />
        {checked && (
          <path
            d="M6 12L10 16L18 8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
      <span style={{ marginLeft: "8px", fontWeight: 500 }}>{labelText}</span>
    </div>
  );
}