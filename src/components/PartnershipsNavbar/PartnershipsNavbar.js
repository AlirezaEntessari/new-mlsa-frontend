import React from "react";
import "./PartnershipsNavbar.scss";

export default function PartnershipsNavbar() {
  return (
    <div className="partnerships-navbar">
      <p className="partnerships-navbar__navbar">
        <span className="partnerships-navbar__my-partners-section">
          My Partners
        </span>
        <span className="partnerships-navbar__requests-section">Requests</span>
        <span className="partnerships-navbar__manage-section">Manage</span>
      </p>
    </div>
  );
}
