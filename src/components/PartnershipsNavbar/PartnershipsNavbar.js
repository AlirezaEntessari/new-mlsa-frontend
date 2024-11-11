import React from "react";
import "./PartnershipsNavbar.scss";

export default function PartnershipsNavbar() {
  return (
    <div className="partnerships-navbar">
      <div className="partnerships-navbar__mobile-container">
        <p className="partnerships-navbar__navbar">
          <span className="partnerships-navbar__my-partners-section">
            My Partners
          </span>
          <span className="partnerships-navbar__requests-section">
            Requests
          </span>
          <span className="partnerships-navbar__manage-section">Manage</span>
        </p>
      </div>
      <div className="partnerships-navbar__tablet-container">
        <p className="partnerships-navbar__tablet-navbar">
          <span className="partnerships-navbar__tablet-my-active-partnerships-section">
            My Active Partnerships
          </span>
          <span className="partnerships-navbar__tablet-partnership-requests-section">
            Partnership Requests
          </span>
          <span className="partnerships-navbar__tablet-manage-partnerships-section">
            Manage Partnerships
          </span>
        </p>
      </div>
    </div>
  );
}
