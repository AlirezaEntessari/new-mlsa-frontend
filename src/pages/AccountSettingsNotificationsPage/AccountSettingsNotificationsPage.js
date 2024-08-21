import React from "react";
import "./AccountSettingsNotificationsPage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import AccountSettingsNavbar from "../../components/AccountSettingsNavbar/AccountSettingsNavbar";
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";

export default function AccountSettingsNotificationsPage() {
  return (
    <div className="account-settings-notifications">
      <AccountSettingsHeader />
      <div className="account-settings-notifications__main-container">
        <AccountSettingsSidePanel />
        <div className="account-settings-notifications__right-container">
          <p className="account-settings-notifications__header">
            Account Settings
          </p>
          <p className="account-settings-notifications__administrator-text">
            Administrator
          </p>
          <AccountSettingsNavbar />
          <div className="account-settings-notifications__notification-settings-container">
            <p className="account-settings-notifications__notification-settings">
              Notification Settings
            </p>
            <button className="account-settings-notifications__save-changes-button">
              Save Changes
            </button>
          </div>
          <p className="account-settings-notifications__update-your-notifications-here">Update your notifications here</p>
          <button className="account-settings-notifications__cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
}
