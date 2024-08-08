import React from "react";
import "./AccountSettingsAgencyPage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import AccountSettingsNavbar from "../../components/AccountSettingsNavbar/AccountSettingsNavbar";
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";

export default function AccountSettingsAgencyPage() {
  return (
    <div className="account-settings-agency">
      <AccountSettingsHeader />
      <div className="account-settings-agency__main-container">
        <AccountSettingsSidePanel />
        <div className="account-settings-agency__right-container">
          <p className="account-settings-agency__header">Account Settings</p>
          <p className="account-settings-agency__administrator-text">
            Administrator
          </p>
          <AccountSettingsNavbar />
          <p className="account-settings-agency__agency-information-header">
            Agency Information
          </p>
          <div className="account-settings-agency__personal-details-container">
            <span className="account-settings-agency__personal-details">
              Update your Agency details and manage your users here
            </span>
            <button className="account-settings-agency__cancel-button">
              Cancel
            </button>
            <button className="account-settings-agency__save-changes-button">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
