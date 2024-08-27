import React, { useState } from "react";
import "./AccountSettingsSidePanel.scss";
import RightArrow from "../../assets/icons/right arrow.svg";

export default function AccountSettingsSidePanel() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`account-settings-side-panel ${
        isCollapsed ? "collapsed" : ""
      }`}
    >
      <div className="account-settings-side-panel__side-panel">
        <p
          className={`account-settings-side-panel__account-option ${
            isCollapsed ? "collapsed" : ""
          }`}
          onClick={handleToggle}
        >
          <img
            className={`account-settings-side-panel__right-arrow ${
              isCollapsed ? "rotate" : ""
            }`}
            src={RightArrow}
            alt="Right Arrow"
          />{" "}
          {!isCollapsed && "Account"}
        </p>
        {!isCollapsed && (
          <div className="account-settings-side-panel__options">
            <p className="account-settings-side-panel__dashboard-home">
              Dashboard Home
            </p>
            <p className="account-settings-side-panel__search-jobs">
              Search Jobs
            </p>
            <p className="account-settings-side-panel__search-candidates">
              Search Candidates
            </p>
            <p className="account-settings-side-panel__search-agencies">
              Search Agencies
            </p>
            <p className="account-settings-side-panel__my-jobs">My Jobs</p>
            <p className="account-settings-side-panel__my-candidates">
              My Candidates
            </p>
            <p className="account-settings-side-panel__placements">
              Placements
            </p>
            <p className="account-settings-side-panel__my-documents">
              My Documents
            </p>
            <p className="account-settings-side-panel__ratings">Ratings</p>
            <p className="account-settings-side-panel__profile">Profile</p>
            <p className="account-settings-side-panel__account">Account</p>
            <p className="account-settings-side-panel__help">Help</p>
            <p className="account-settings-side-panel__sign-out">Sign Out</p>
          </div>
        )}
      </div>
    </div>
  );
}
