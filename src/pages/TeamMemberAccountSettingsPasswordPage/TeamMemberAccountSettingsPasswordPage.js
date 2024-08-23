import React from 'react'
import './TeamMemberAccountSettingsPasswordPage.scss';
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";
import TeamMemberAccountSettingsNavbar from "../../components/TeamMemberAccountSettingsNavbar/TeamMemberAccountSettingsNavbar";

export default function TeamMemberAccountSettingsPasswordPage() {
  return (
    <div className='team-member-account-settings-password'>
        <AccountSettingsHeader />
        <div className="team-member-account-settings-password__main-container">
            <AccountSettingsSidePanel />
            <div className="team-member-account-settings-password__right-container">
                <p className='team-member-account-settings-password__header'>Account Settings</p>
                <p className='team-member-account-settings-password__user-text'>User</p>
                <TeamMemberAccountSettingsNavbar />
            </div>
        </div>
    </div>
  )
}
