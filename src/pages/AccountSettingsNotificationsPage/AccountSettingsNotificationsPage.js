import React from "react";
import "./AccountSettingsNotificationsPage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import AccountSettingsNavbar from "../../components/AccountSettingsNavbar/AccountSettingsNavbar";
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";
import RadioButton from "../../assets/icons/RadioButtonGrayOff.svg";
import RadioButtonBlueOn from "../../assets/icons/RadioButtonBlueOn.svg";
import SVGCheckbox from "../../components/SVGCheckbox/SVGCheckbox";

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
          <p className="account-settings-notifications__update-your-notifications-here">
            Update your notifications here
          </p>
          <button className="account-settings-notifications__cancel-button">
            Cancel
          </button>
          <div className="account-settings-notifications__vacation-mode-container">
            <span className="account-settings-notifications__vacation-mode-text">
              Vacation Mode
            </span>
            <img
              className="account-settings-notifications__radio-button"
              src={RadioButton}
              alt="Radio Button"
            />
            <span className="account-settings-notifications__off-text">
              OFF
            </span>
            <button className="account-settings-notifications__clear-all-button">
              Clear All
            </button>
          </div>
          <div className="account-settings-notifications__email-notifications-container">
            <div className="account-settings-notifications__email-notifications-top-container">
              <p className="account-settings-notifications__email-notifications-text">
                Email Notifications
              </p>
              <img
                className="account-settings-notifications__radio-button-blue-on"
                src={RadioButtonBlueOn}
                alt="Radio Button Blue On"
              />
            </div>
            <div className="account-settings-notifications__submission-updates-container-one">
              <p className="account-settings-notifications__email-updates">
                Updates
              </p>
              <div className="account-settings-notifications__checkbox-container-submissions-updates-one">
                <SVGCheckbox />
              </div>
              <span className="account-settings-notifications__submissions-updates-text">
                Submissions Updates
              </span>
            </div>
            <div className="account-settings-notifications__application-updates-container-one">
              <div className="account-settings-notifications__checkbox-container-applications-updates-one">
                <SVGCheckbox />
              </div>
              <span className="account-settings-notifications__applications-updates-text">
                Applications Updates
              </span>
            </div>
            <div className="account-settings-notifications__email-partner-updates-container">
              <div className="account-settings-notifications__submission-updates-container-two">
                <p className="account-settings-notifications__email-partner-updates">
                  Partner Updates
                </p>
                <div className="account-settings-notifications__checkbox-container-submissions-updates-two">
                  <SVGCheckbox />
                </div>
                <span className="account-settings-notifications__submissions-updates-text">
                  Submissions Updates
                </span>
              </div>
              <div className="account-settings-notifications__applications-updates-container-two">
                <div className="account-settings-notifications__checkbox-container-applications-updates-two">
                  <SVGCheckbox />
                </div>
                <span className="account-settings-notifications__applications-updates-text">
                  Applications Updates
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
