import React, { useState } from "react";
import "./AgenciesSidePanel.scss";
import RightArrow from "../../assets/icons/right arrow.svg";

export default function AgenciesSidePanel() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`agencies-side-panel ${isCollapsed ? "collapsed" : ""}`}>
      <div className="agencies-side-panel__side-panel">
        <p
          className={`agencies-side-panel__profile-option ${
            isCollapsed ? "collapsed" : ""
          }`}
          onClick={handleToggle}
        >
          <img
            className={`agencies-side-panel__right-arrow ${
              isCollapsed ? "rotate" : ""
            }`}
            src={RightArrow}
            alt="Right Arrow"
          />{" "}
          {!isCollapsed && "Agencies"}
        </p>
        {!isCollapsed && (
          <div className="agencies-side-panel__options">
            <p className="agencies-side-panel__dashboard-home">
              Dashboard Home
            </p>
            <p className="agencies-side-panel__search-jobs">Search Jobs</p>
            <p className="agencies-side-panel__search-candidates">
              Search Candidates
            </p>
            <p className="agencies-side-panel__search-agencies">
              Search Agencies
            </p>
            <p className="agencies-side-panel__my-jobs">My Jobs</p>
            <p className="agencies-side-panel__my-candidates">My Candidates</p>
            <p className="agencies-side-panel__placements">Placements</p>
            <p className="agencies-side-panel__my-documents">My Documents</p>
            <p className="agencies-side-panel__ratings">Ratings</p>
            <p className="agencies-side-panel__profile">Profile</p>
            <p className="agencies-side-panel__account">Account</p>
            <p className="agencies-side-panel__help">Help</p>
            <p className="agencies-side-panel__sign-out">Sign Out</p>
          </div>
        )}
      </div>
    </div>
  );
}
