import React, { useState } from "react";
import "./DocumentsSidePanel.scss";
import RightArrow from "../../assets/icons/right arrow.svg";

export default function DocumentsSidePanel() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`documents-side-panel ${isCollapsed ? "collapsed" : ""}`}>
      <div className="documents-side-panel__side-panel">
        <p
          className={`documents-side-panel__profile-option ${
            isCollapsed ? "collapsed" : ""
          }`}
          onClick={handleToggle}
        >
          <img
            className={`documents-side-panel__right-arrow ${
              isCollapsed ? "rotate" : ""
            }`}
            src={RightArrow}
            alt="Right Arrow"
          />{" "}
          {!isCollapsed && "My Documents"}
        </p>
        {!isCollapsed && (
          <div className="documents-side-panel__options">
            <p className="documents-side-panel__dashboard-home">
              Dashboard Home
            </p>
            <p className="documents-side-panel__search-jobs">Search Jobs</p>
            <p className="documents-side-panel__search-candidates">
              Search Candidates
            </p>
            <p className="documents-side-panel__search-agencies">
              Search Agencies
            </p>
            <p className="documents-side-panel__my-jobs">My Jobs</p>
            <p className="documents-side-panel__my-candidates">My Candidates</p>
            <p className="documents-side-panel__placements">Placements</p>
            <p className="documents-side-panel__my-documents">My Documents</p>
            <p className="documents-side-panel__ratings">Ratings</p>
            <p className="documents-side-panel__profile">Profile</p>
            <p className="documents-side-panel__account">Account</p>
            <p className="documents-side-panel__help">Help</p>
            <p className="documents-side-panel__sign-out">Sign Out</p>
          </div>
        )}
      </div>
    </div>
  );
}
