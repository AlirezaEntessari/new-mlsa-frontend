import React from 'react'
import './TeamMemberAccountSettingsNotificationsPage.scss';
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import TeamMemberAccountSettingsNavbar from '../../components/TeamMemberAccountSettingsNavbar/TeamMemberAccountSettingsNavbar';
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";
import RadioButton from "../../assets/icons/RadioButtonGrayOff.svg";
import RadioButtonBlueOn from "../../assets/icons/RadioButtonBlueOn.svg";
import SVGCheckbox from "../../components/SVGCheckbox/SVGCheckbox";

export default function TeamMemberAccountSettingsNotificationsPage() {
  return (
    <div className="team-member-account-settings-notifications">
      <AccountSettingsHeader />
      <div className="team-member-account-settings-notifications__main-container">
        <AccountSettingsSidePanel />
        <div className="team-member-account-settings-notifications__right-container">
          <p className="team-member-account-settings-notifications__header">
            Account Settings
          </p>
          <p className="team-member-account-settings-notifications__user-text">
            User
          </p>
          <TeamMemberAccountSettingsNavbar />
          <div className="team-member-account-settings-notifications__notification-settings-container">
            <p className="team-member-account-settings-notifications__notification-settings">
              Notification Settings
            </p>
            <button className="team-member-account-settings-notifications__save-changes-button">
              Save Changes
            </button>
          </div>
          <p className="team-member-account-settings-notifications__update-your-notifications-here">
            Update your notifications here
          </p>
          <button className="team-member-account-settings-notifications__cancel-button">
            Cancel
          </button>
          <div className="team-member-account-settings-notifications__vacation-mode-container">
            <span className="team-member-account-settings-notifications__vacation-mode-text">
              Vacation Mode
            </span>
            <img
              className="team-member-account-settings-notifications__radio-button"
              src={RadioButton}
              alt="Radio Button"
            />
            <span className="team-member-account-settings-notifications__off-text">
              OFF
            </span>
            <button className="team-member-account-settings-notifications__clear-all-button">
              Clear All
            </button>
          </div>
          <div className="team-member-account-settings-notifications__notifications-container">
            <div className="team-member-account-settings-notifications__email-notifications-container">
              <div className="team-member-account-settings-notifications__email-notifications-top-container">
                <p className="team-member-account-settings-notifications__email-notifications-text">
                  Email Notifications
                </p>
                <img
                  className="team-member-account-settings-notifications__radio-button-blue-on"
                  src={RadioButtonBlueOn}
                  alt="Radio Button Blue On"
                />
              </div>
              <div className="team-member-account-settings-notifications__submission-updates-container-one">
                <p className="team-member-account-settings-notifications__email-updates">
                  Updates
                </p>
                <div className="team-member-account-settings-notifications__checkbox-container-submissions-updates-one">
                  <SVGCheckbox />
                </div>
                <span className="team-member-account-settings-notifications__submissions-updates-text">
                  Submissions Updates
                </span>
              </div>
              <div className="team-member-account-settings-notifications__application-updates-container-one">
                <div className="team-member-account-settings-notifications__checkbox-container-applications-updates-one">
                  <SVGCheckbox />
                </div>
                <span className="team-member-account-settings-notifications__applications-updates-text">
                  Applications Updates
                </span>
              </div>
              <div className="team-member-account-settings-notifications__email-partner-updates-container">
                <div className="team-member-account-settings-notifications__submission-updates-container-two">
                  <p className="team-member-account-settings-notifications__email-partner-updates">
                    Partner Updates
                  </p>
                  <div className="team-member-account-settings-notifications__checkbox-container-submissions-updates-two">
                    <SVGCheckbox />
                  </div>
                  <span className="team-member-account-settings-notifications__submissions-updates-text">
                    Submissions Updates
                  </span>
                </div>
                <div className="team-member-account-settings-notifications__applications-updates-container-two">
                  <div className="team-member-account-settings-notifications__checkbox-container-applications-updates-two">
                    <SVGCheckbox />
                  </div>
                  <span className="team-member-account-settings-notifications__applications-updates-text">
                    Applications Updates
                  </span>
                </div>
              </div>
              <div className="team-member-account-settings-notifications__email-new-job-alerts-container">
                <div className="team-member-account-settings-notifications__submission-updates-container-three">
                  <p className="team-member-account-settings-notifications__email-new-job-alerts">
                    New Job Alerts
                  </p>
                  <div className="team-member-account-settings-notifications__checkbox-container-submissions-updates-three">
                    <SVGCheckbox />
                  </div>
                  <span className="team-member-account-settings-notifications__submissions-updates-text">
                    Submissions Updates
                  </span>
                </div>
                <div className="team-member-account-settings-notifications__applications-updates-container-three">
                  <div className="team-member-account-settings-notifications__checkbox-container-applications-updates-three">
                    <SVGCheckbox />
                  </div>
                  <span className="team-member-account-settings-notifications__applications-updates-text">
                    Applications Updates
                  </span>
                </div>
              </div>
              <div className="team-member-account-settings-notifications__email-new-candidate-alerts-container">
                <div className="team-member-account-settings-notifications__submission-updates-container-four">
                  <p className="team-member-account-settings-notifications__email-new-candidate-alerts">
                    New Candidate Alerts
                  </p>
                  <div className="team-member-account-settings-notifications__checkbox-container-submissions-updates-four">
                    <SVGCheckbox />
                  </div>
                  <span className="team-member-account-settings-notifications__submissions-updates-text">
                    Submissions Updates
                  </span>
                </div>
                <div className="team-member-account-settings-notifications__applications-updates-container-four">
                  <div className="team-member-account-settings-notifications__checkbox-container-applications-updates-four">
                    <SVGCheckbox />
                  </div>
                  <span className="team-member-account-settings-notifications__applications-updates-text">
                    Applications Updates
                  </span>
                </div>
              </div>
            </div>
            <div className="team-member-account-settings-notifications__message-notifications-container">
              <div className="team-member-account-settings-notifications__message-notifications-top-container">
                <p className="team-member-account-settings-notifications__message-notifications-text">
                  Message Notifications
                </p>
                <img
                  className="team-member-account-settings-notifications__radio-button-blue-on"
                  src={RadioButtonBlueOn}
                  alt="Radio Button Blue On"
                />
              </div>
              <div className="team-member-account-settings-notifications__submission-updates-container-one">
                <p className="team-member-account-settings-notifications__message-updates">
                  Updates
                </p>
                <div className="team-member-account-settings-notifications__checkbox-container-submissions-updates-one">
                  <SVGCheckbox />
                </div>
                <span className="team-member-account-settings-notifications__submissions-updates-text">
                  Submissions Updates
                </span>
              </div>
              <div className="team-member-account-settings-notifications__application-updates-container-one">
                <div className="team-member-account-settings-notifications__checkbox-container-applications-updates-one">
                  <SVGCheckbox />
                </div>
                <span className="team-member-account-settings-notifications__applications-updates-text">
                  Applications Updates
                </span>
              </div>
              <div className="team-member-account-settings-notifications__email-partner-updates-container">
                <div className="team-member-account-settings-notifications__submission-updates-container-two">
                  <p className="team-member-account-settings-notifications__message-partner-updates">
                    Partner Updates
                  </p>
                  <div className="team-member-account-settings-notifications__checkbox-container-submissions-updates-two">
                    <SVGCheckbox />
                  </div>
                  <span className="team-member-account-settings-notifications__submissions-updates-text">
                    Submissions Updates
                  </span>
                </div>
                <div className="team-member-account-settings-notifications__applications-updates-container-two">
                  <div className="team-member-account-settings-notifications__checkbox-container-applications-updates-two">
                    <SVGCheckbox />
                  </div>
                  <span className="team-member-account-settings-notifications__applications-updates-text">
                    Applications Updates
                  </span>
                </div>
              </div>
              <div className="team-member-account-settings-notifications__email-new-job-alerts-container">
                <div className="team-member-account-settings-notifications__submission-updates-container-three">
                  <p className="team-member-account-settings-notifications__message-new-job-alerts">
                    New Job Alerts
                  </p>
                  <div className="team-member-account-settings-notifications__checkbox-container-submissions-updates-three">
                    <SVGCheckbox />
                  </div>
                  <span className="team-member-account-settings-notifications__submissions-updates-text">
                    Submissions Updates
                  </span>
                </div>
                <div className="team-member-account-settings-notifications__applications-updates-container-three">
                  <div className="team-member-account-settings-notifications__checkbox-container-applications-updates-three">
                    <SVGCheckbox />
                  </div>
                  <span className="team-member-account-settings-notifications__applications-updates-text">
                    Applications Updates
                  </span>
                </div>
              </div>
              <div className="team-member-account-settings-notifications__email-new-candidate-alerts-container">
                <div className="team-member-account-settings-notifications__submission-updates-container-four">
                  <p className="team-member-account-settings-notifications__message-new-candidate-alerts">
                    New Candidate Alerts
                  </p>
                  <div className="team-member-account-settings-notifications__checkbox-container-submissions-updates-four">
                    <SVGCheckbox />
                  </div>
                  <span className="team-member-account-settings-notifications__submissions-updates-text">
                    Submissions Updates
                  </span>
                </div>
                <div className="team-member-account-settings-notifications__applications-updates-container-four">
                  <div className="team-member-account-settings-notifications__checkbox-container-applications-updates-four">
                    <SVGCheckbox />
                  </div>
                  <span className="team-member-account-settings-notifications__applications-updates-text">
                    Applications Updates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
