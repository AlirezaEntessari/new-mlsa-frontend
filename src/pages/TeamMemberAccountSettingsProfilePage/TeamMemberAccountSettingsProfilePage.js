import React from "react";
import "./TeamMemberAccountSettingsProfilePage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import AccountSettingsNavbar from "../../components/AccountSettingsNavbar/AccountSettingsNavbar";
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";

export default function TeamMemberAccountSettingsProfilePage() {
  return (
    <div className="team-member-account-settings-profile">
      <AccountSettingsHeader />
      <div className="team-member-account-settings-profile__main-container">
        <AccountSettingsSidePanel />
        <div className="team-member-account-settings-profile__right-container">
            <p className="team-member-account-settings-profile__header">Account Settings</p>
            <p className="team-member-account-settings-profile__user">User</p>
        </div>
      </div>
    </div>
  );
}
