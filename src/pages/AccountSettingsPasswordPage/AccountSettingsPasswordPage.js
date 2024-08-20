import React from "react";
import "./AccountSettingsPasswordPage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";
import AccountSettingsNavbar from "../../components/AccountSettingsNavbar/AccountSettingsNavbar";
import RedAsteriskIcon from "../../assets/icons/mingcute_asterisk-line.svg";
import DontShowIcon from "../../assets/icons/ph_eye-light (1).svg";

export default function AccountSettingsPasswordPage() {
  return (
    <div className="account-settings-password">
      <AccountSettingsHeader />
      <div className="account-settings-password__main-container">
        <AccountSettingsSidePanel />
        <div className="account-settings-password__right-container">
          <p className="account-settings-password__header">Account Settings</p>
          <p className="account-settings-password__administrator-text">
            Administrator
          </p>
          <AccountSettingsNavbar />
          <p className="account-settings-password__change-password-header">
            Change Password
          </p>
          <div className="account-settings-password__tablet-container">
            <div className="account-settings-password__left-container">
              <p className="account-settings-password__rules-first-line">
                Please follow these rules for creating a password:
              </p>
              <p className="account-settings-password__rules-length">
                <span className="account-settings-password__bold">
                  1. Length:{" "}
                </span>
                At least 8 characters. More is better.
              </p>
              <p className="account-settings-password__rules-variety">
                <span className="account-settings-password__bold">
                  2. Variety:{" "}
                </span>{" "}
                At least one of the following:
              </p>
              <p className="account-settings-password__uppercase-letter">
                Uppercase Letter
              </p>
              <p className="account-settings-password__lowercase-letter">
                Lowercase letter
              </p>
              <p className="account-settings-password__number">Number</p>
              <p className="account-settings-password__symbol">Symbol</p>
              <p className="account-settings-password__no-personal-info">
                <span className="account-settings-password__bold">
                  1. No personal info:{" "}
                </span>
                Avoid names, birthdays or common words
              </p>
              <p className="account-settings-password__avoid-obvious-patterns">
                <span className="account-settings-password__bold">
                  2. Avoid obvious patterns:{" "}
                </span>
                No sequential or repeated characters (e.g., 1234)
              </p>
              <p className="account-settings-password__be-unique">
                <span className="account-settings-password__bold">
                  3. Be Unique:{" "}
                </span>
                Don't reuse old passwords.
              </p>
              <p className="account-settings-password__regular-updates">
                <span className="account-settings-password__bold">
                  4. Regular Updates:{" "}
                </span>{" "}
                Change your password periodically
              </p>
              <p className="account-settings-password__combination-memorable">
                *Tip: A combination of unrelated words can be both strong and
                memorable
              </p>
            </div>
            <div className="account-settings-password__right-container">
              <label
                className="account-settings-password__password-label"
                htmlFor="password"
              >
                Password{" "}
                <img
                  className="account-settings-password__red-asterisk-icon"
                  src={RedAsteriskIcon}
                  alt="Red Asterisk Icon"
                />
              </label>
              <img
                className="account-settings-password__dont-show-icon-one"
                src={DontShowIcon}
                alt="Don't Show"
              />
              <input
                className="account-settings-password__password-input"
                type="text"
                placeholder="Enter your password"
              />
              <label
                className="account-settings-password__confirm-password-label"
                htmlFor="confirm-password"
              >
                Confirm Password{" "}
                <img
                  className="account-settings-password__red-asterisk-icon"
                  src={RedAsteriskIcon}
                  alt="Red Asterisk Icon"
                />
              </label>
              <img
                className="account-settings-password__dont-show-icon-two"
                src={DontShowIcon}
                alt="Don't Show"
              />
              <input
                className="account-settings-password__confirm-password-input"
                type="text"
                placeholder="Enter your password again"
              />
              <button className="account-settings-password__cancel-button">
                Cancel
              </button>
              <button className="account-settings-password__save-changes-button">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
