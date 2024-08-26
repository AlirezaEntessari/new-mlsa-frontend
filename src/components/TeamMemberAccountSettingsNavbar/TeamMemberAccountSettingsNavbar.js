import React from "react";
import "./TeamMemberAccountSettingsNavbar.scss";
import { Link } from "react-router-dom";

export default function TeamMemberAccountSettingsNavbar() {
  return (
    <div className="team-member-account-settings-navbar">
      <p className="team-member-account-settings-navbar__header-bar">
        <Link
          to="/team-member-account-settings-profile-page"
          className="team-member-account-settings-navbar__profile-link"
        >
          <span className="team-member-account-settings-navbar__profile-option">
            Profile
          </span>
        </Link>
        <Link
          to="/team-member-account-settings-password-page"
          className="team-member-account-settings-navbar__password-link"
        >
          <span className="team-member-account-settings-navbar__password-option">
            Password
          </span>
        </Link>
        <Link
          to="/team-member-account-settings-notifications-page"
          className="team-member-account-settings-navbar__notifications-link"
        >
          <span className="team-member-account-settings-navbar__notifications-option">
            Notifications
          </span>
        </Link>
      </p>
    </div>
  );
}
