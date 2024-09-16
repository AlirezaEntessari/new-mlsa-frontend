import React, { useState } from "react";
import "./AgenciesSidePanel.scss";
import RightArrow from "../../assets/icons/right arrow.svg";
import { Link } from "react-router-dom";

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
            <Link
              className="agencies-side-panel__search-agencies-link"
              to="/search-agencies-all-agencies-page"
            >
              <p className="agencies-side-panel__search-agencies">
                Search Agencies
              </p>
            </Link>
            <p className="agencies-side-panel__my-jobs">My Jobs</p>
            <p className="agencies-side-panel__my-candidates">My Candidates</p>
            <p className="agencies-side-panel__placements">Placements</p>
            <Link
              to="/my-documents-agreements-page"
              className="agencies-side-panel__my-documents-link"
            >
              <p className="agencies-side-panel__my-documents">My Documents</p>
            </Link>
            <p className="agencies-side-panel__ratings">Ratings</p>
            <Link
              className="agencies-side-panel__profile-link"
              to="/account-settings-profile-page"
            >
              <p className="agencies-side-panel__profile">Profile</p>
            </Link>
            <Link
              className="agencies-side-panel__account-link"
              to="/account-settings-profile-page"
            >
              <p className="agencies-side-panel__account">Account</p>
            </Link>
            <p className="agencies-side-panel__help">Help</p>
            <p className="agencies-side-panel__sign-out">Sign Out</p>
          </div>
        )}
      </div>
    </div>
  );
}
