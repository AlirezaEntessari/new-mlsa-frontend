import React from "react";
import "./TeamMemberAccountSettingsNavbar.scss";
import { Link } from "react-router-dom";

export default function TeamMemberAccountSettingsNavbar() {
  return (
    <div className="team-member-account-settings-navbar">
      <p className="team-member-account-settings-navbar__header-bar">
        <span className="team-member-account-settings-navbar__profile-option">
          Profile
        </span>
        <span className="team-member-account-settings-navbar__password-option">
          Password
        </span>
        <span className="team-member-account-settings-navbar__notifications-option">
          Notifications
        </span>
      </p>
    </div>
  );
}
