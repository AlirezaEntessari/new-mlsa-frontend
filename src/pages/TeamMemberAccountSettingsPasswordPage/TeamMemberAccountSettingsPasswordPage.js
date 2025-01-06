import React, { useState } from "react";
import "./TeamMemberAccountSettingsPasswordPage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";
import TeamMemberAccountSettingsNavbar from "../../components/TeamMemberAccountSettingsNavbar/TeamMemberAccountSettingsNavbar";
import RedAsteriskIcon from "../../assets/icons/mingcute_asterisk-line.svg";
import DontShowIcon from "../../assets/icons/ph_eye-light (1).svg";
import axios from "axios";

export default function TeamMemberAccountSettingsPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const URL = 'http://localhost:5000'

  const handleSaveChanges = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      await axios.post(`${URL}/api/account-settings/user-password`, {
        password,
        confirmPassword,
      });

      alert("Password updated successfully!");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
    } catch (error) {
      console.error("Error updating password:", error);
      setErrorMessage("Failed to update password. Please try again.");
    }
  };

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
          <div className="team-member-account-settings-password__desktop-container">
            <div className="team-member-account-settings-password__desktop-left-container">
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
                </span>{" "}
                Change your password periodically.
              </p>
              <p className="team-member-account-settings-password__tip">
                *Tip: A combination of unrelated words can be both strong and
                memorable.
              </p>
            </div>
            <div className="team-member-account-settings-password__desktop-right-container">
              <label
                className="team-member-account-settings-password__password-label"
                htmlFor="password"
              >
                Password{" "}
                <img
                  className="team-member-account-settings-password__red-asterisk-icon"
                  src={RedAsteriskIcon}
                  alt="Red Asterisk Icon"
                />
              </label>
              <img
                className="team-member-account-settings-password__dont-show-icon-one"
                src={DontShowIcon}
                alt="Don't Show Icon"
              />
              <input
                className="team-member-account-settings-password__password-input"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                className="team-member-account-settings-password__confirm-password-label"
                htmlFor="confirm-password"
              >
                Confirm Password{" "}
                <img
                  className="team-member-account-settings-password__red-asterisk-icon"
                  src={RedAsteriskIcon}
                  alt="Red Asterisk Icon"
                />
              </label>
              <img
                className="team-member-account-settings-password__dont-show-icon-two"
                src={DontShowIcon}
                alt="Don't Show Icon"
              />
              <input
                className="team-member-account-settings-password__confirm-password-input"
                type="password"
                placeholder="Enter your password again"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errorMessage && (
                <p className="team-member-account-settings-password__error-message">
                  {errorMessage}
                </p>
              )}
              <div className="team-member-account-settings-password__button-container">
                <button className="team-member-account-settings-password__cancel-button">
                  Cancel
                </button>
                <button
                  className="team-member-account-settings-password__save-changes-button"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
