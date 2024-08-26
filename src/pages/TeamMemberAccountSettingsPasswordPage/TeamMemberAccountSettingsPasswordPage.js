import React from "react";
import "./TeamMemberAccountSettingsPasswordPage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";
import TeamMemberAccountSettingsNavbar from "../../components/TeamMemberAccountSettingsNavbar/TeamMemberAccountSettingsNavbar";

export default function TeamMemberAccountSettingsPasswordPage() {
  return (
    <div className="team-member-account-settings-password">
      <AccountSettingsHeader />
      <div className="team-member-account-settings-password__main-container">
        <AccountSettingsSidePanel />
        <div className="team-member-account-settings-password__right-container">
          <p className="team-member-account-settings-password__header">
            Account Settings
          </p>
          <p className="team-member-account-settings-password__user-text">
            User
          </p>
          <TeamMemberAccountSettingsNavbar />
          <p className="team-member-account-settings-password__change-password-header">
            Change Password
          </p>
          <p className="team-member-account-settings-password__follow-these-rules">
            Please follow these rules for creating a password:
          </p>
          <p className="team-member-account-settings-password__length">
            <span className="team-member-account-settings-password__bold">
              1. Length:{" "}
            </span>{" "}
            At least 8 characters. More is better.
          </p>
          <p className="team-member-account-settings-password__variety">
            <span className="team-member-account-settings-password__bold">
              2. Variety:{" "}
            </span>{" "}
            At least one of the following:
          </p>
          <p className="team-member-account-settings-password__uppercase-letter">
            Uppercase letter
          </p>
          <p className="team-member-account-settings-password__lowercase-letter">
            Lowercase letter
          </p>
          <p className="team-member-account-settings-password__number">
            Number
          </p>
          <p className="team-member-account-settings-password__symbol">
            Symbol
          </p>
          <p className="team-member-account-settings-password__no-personal-info">
            <span className="team-member-account-settings-password__bold">
              1. No personal info:
            </span>{" "}
            Avoid names, birthdays or common words
          </p>
          <p className="team-member-account-settings-password__avoid-obvious-patterns">
            <span className="team-member-account-settings-password__bold">
              2. Avoid obvious patterns:{" "}
            </span>{" "}
            No sequential or repeated characters (e.g., 1234, )
          </p>
          <p className="team-member-account-settings-password__be-unique">
            <span className="team-member-account-settings-password__bold">
              3. Be Unique:
            </span>{" "}
            Don't reuse old passwords.
          </p>
          <p className="team-member-account-settings-password__regular-updates">
            <span className="team-member-account-settings-password__bold">
              4. Regular Updates:{" "}
            </span> Change your password periodically.
          </p>
          <p className="team-member-account-settings-password__tip">*Tip: A combination of unrelated words can be both strong and memorable.</p>
        </div>
      </div>
    </div>
  );
}
