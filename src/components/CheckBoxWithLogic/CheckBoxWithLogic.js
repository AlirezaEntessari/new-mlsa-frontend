import React, { useState } from "react";
import axios from "axios";

export default function CheckBoxWithLogic({ labelText, apiEndpoint }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxClick = () => {
    setChecked(!checked);

    // If the checkbox is being checked, send the label text to the backend
    if (!checked) {
      sendDataToBackend(labelText);
    }
  };

  const sendDataToBackend = async (text) => {
    try {
      const response = await axios.post(apiEndpoint, { text });
      if (response.status === 200) {
        console.log("Data sent successfully:", text);
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="checkbox-with-logic" onClick={handleCheckboxClick} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
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
