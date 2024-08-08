import React from "react";
import "./AccountSettingsSidePanel.scss";

export default function AccountSettingsSidePanel() {
  return (
    <div className="account-settings-side-panel">
      <div className="account-settings-side-panel__side-panel">
        <p className="account-settings-side-panel__account-option">Account</p>
        <p className="account-settings-side-panel__dashboard-home">
          Dashboard Home
        </p>
        <p className="account-settings-side-panel__search-jobs">Search Jobs</p>
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
        <p className="account-settings-side-panel__placements">Placements</p>
        <p className="account-settings-side-panel__my-documents">
          My Documents
        </p>
        <p className="account-settings-side-panel__ratings">Ratings</p>
        <p className="account-settings-side-panel__profile">Profile</p>
        <p className="account-settings-side-panel__account">Account</p>
        <p className="account-settings-side-panel__help">Help</p>
        <p className="account-settings-side-panel__sign-out">Sign Out</p>
      </div>
    </div>
  );
}
