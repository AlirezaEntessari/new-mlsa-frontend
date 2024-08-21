import React, { useState } from 'react';

const SVGCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div onClick={toggleCheckbox} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          border: '2px solid black',
          borderRadius: '4px',
          background: isChecked ? '#007BFF' : 'white',
        }}
      >
        {isChecked && (
          <path
            d="M5 13L9 17L19 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
      <span style={{ marginLeft: '8px' }}></span>
    </div>
  );
};

export default SVGCheckbox;
