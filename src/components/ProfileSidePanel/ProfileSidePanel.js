import React, { useState } from "react";
import "./ProfileSidePanel.scss";
import RightArrow from "../../assets/icons/right arrow.svg";

export default function ProfileSidePanel() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`profile-side-panel ${
        isCollapsed ? "collapsed" : ""
      }`}
    >
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
          {!isCollapsed && "Profile"}
        </p>
        {!isCollapsed && (
          <div className="profile-side-panel__options">
            <p className="profile-side-panel__dashboard-home">
              Dashboard Home
            </p>
            <p className="profile-side-panel__search-jobs">
              Search Jobs
            </p>
            <p className="profile-side-panel__search-candidates">
              Search Candidates
            </p>
            <p className="profile-side-panel__search-agencies">
              Search Agencies
            </p>
            <p className="profile-side-panel__my-jobs">My Jobs</p>
            <p className="profile-side-panel__my-candidates">
              My Candidates
            </p>
            <p className="profile-side-panel__placements">
              Placements
            </p>
            <p className="profile-side-panel__my-documents">
              My Documents
            </p>
            <p className="profile-side-panel__ratings">Ratings</p>
            <p className="profile-side-panel__profile">Profile</p>
            <p className="profile-side-panel__account">Account</p>
            <p className="profile-side-panel__help">Help</p>
            <p className="profile-side-panel__sign-out">Sign Out</p>
          </div>
        )}
      </div>
    </div>
  );
}
