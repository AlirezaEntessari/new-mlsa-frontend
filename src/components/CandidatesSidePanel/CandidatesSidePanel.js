import React, { useState } from "react";
import "./CandidatesSidePanel.scss";
import RightArrow from "../../assets/icons/right arrow.svg";
import { Link } from "react-router-dom";

export default function CandidatesSidePanel() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`profile-side-panel ${isCollapsed ? "collapsed" : ""}`}>
      <div className="profile-side-panel__side-panel">
        <p
          className={`profile-side-panel__profile-option ${
            isCollapsed ? "collapsed" : ""
          }`}
          onClick={handleToggle}
        >
          <img
            className={`profile-side-panel__right-arrow ${
              isCollapsed ? "rotate" : ""
            }`}
            src={RightArrow}
            alt="Right Arrow"
          />{" "}
          {!isCollapsed && "Candidates"}
        </p>
        {!isCollapsed && (
          <div className="profile-side-panel__options">
            <p className="profile-side-panel__dashboard-home">Dashboard Home</p>
            <p className="profile-side-panel__search-jobs">Search Jobs</p>
            <p className="profile-side-panel__search-candidates">
              Search Candidates
            </p>
            <Link
              className="profile-side-panel__search-agencies-link"
              to="/search-agencies-all-agencies-page"
            >
              <p className="profile-side-panel__search-agencies">
                Search Agencies
              </p>
            </Link>
            <p className="profile-side-panel__my-jobs">My Jobs</p>
            <p className="profile-side-panel__my-candidates">My Candidates</p>
            <p className="profile-side-panel__placements">Placements</p>
            <Link
              className="profile-side-panel__my-documents-link"
              to="/my-documents-agreements-page"
            >
              <p className="profile-side-panel__my-documents">My Documents</p>
            </Link>
            <p className="profile-side-panel__ratings">Ratings</p>
            <Link
              className="profile-side-panel__profile-link"
              to="/personal-profile-page"
            >
              <p className="profile-side-panel__profile">Profile</p>
            </Link>
            <Link
              className="profile-side-panel__account-link"
              to="/account-settings-profile-page"
            >
              <p className="profile-side-panel__account">Account</p>
            </Link>
            <p className="profile-side-panel__help">Help</p>
            <p className="profile-side-panel__sign-out">Sign Out</p>
          </div>
        )}
      </div>
    </div>
  );
}
