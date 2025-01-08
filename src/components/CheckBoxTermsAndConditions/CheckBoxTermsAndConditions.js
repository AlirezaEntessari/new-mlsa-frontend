import React, { useState } from "react";

export default function CheckBoxTermsAndConditions({ isChecked, setIsChecked }) {
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className="checkbox-terms-and-conditions"
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
          fill={isChecked ? "#007BFF" : "white"}
          stroke="#221001"
          strokeWidth="2"
        />
        {isChecked && (
          <path
            d="M6 12L10 16L18 8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
      <span style={{ marginLeft: "8px", fontWeight: 500 }}>
        I agree to the terms and conditions
      </span>
    </div>
  );
}
