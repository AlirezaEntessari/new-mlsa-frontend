import React from "react";
import "./AccountSettingsNavbar.scss";
import { Link } from "react-router-dom";

export default function AccountSettingsNavbar() {
  return (
    <div className="account-settings-navbar">
      <p className="account-settings-navbar__header-bar">
        <Link
          to="/account-settings-profile-page"
          className="account-settings-navbar__profile-link"
        >
          <span className="account-settings-navbar__profile-option">
            Profile
          </span>
        </Link>
        <Link
          to="/account-settings-agency-page"
          className="account-settings-navbar__agency-link"
        >
          <span className="account-settings-navbar__agency-option">Agency</span>
        </Link>
        <Link
          to="/account-settings-password-page"
          className="account-settings-navbar__password-link"
        >
          <span className="account-settings-navbar__password-option">
            Password
          </span>
        </Link>
        <Link
          to="/account-settings-billing-page"
          className="account-settings-navbar__billing-link"
        >
          <span className="account-settings-navbar__billing-option">
            Billing
          </span>
        </Link>
        <Link
          to="/account-settings-notifications-page"
          className="account-settings-navbar__notifications-link"
        >
          <span className="account-settings-navbar__notifications-option">
            Notifications
          </span>
        </Link>
      </p>
    </div>
  );
}
