import React from "react";
import "./HelpMyAccountPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import HelpSidePanel from "../../components/HelpSidePanel/HelpSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import MyAccountIcon from "../../assets/icons/Help_MyAccount.svg";
import PaperIcon from "../../assets/icons/PaperIcon.svg";

export default function HelpMyAccountPage() {
  return (
    <div className="help-my-account-page">
      <HeaderWithProfilePic />
      <div className="help-my-account-page__main-container">
        <HelpSidePanel />
        <div className="help-my-account-page__right-container">
          <div className="help-my-account-page__mobile-container">
            <p className="help-my-account-page__mobile-help-center-header">
              Help Center
            </p>
            <img
              className="help-my-account-page__mobile-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-my-account-page__mobile-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-my-account-page__mobile-categories-container">
              <p className="help-my-account-page__mobile-categories-header">
                Categories
              </p>
              <div className="help-my-account-page__mobile-categories-options-container">
                <div className="help-my-account-page__mobile-my-account-ratings-and-feedback-container">
                  <p className="help-my-account-page__mobile-my-account-option">
                    My Account
                  </p>
                  <p className="help-my-account-page__mobile-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                </div>
                <div className="help-my-account-page__mobile-job-posting-reports-container">
                  <p className="help-my-account-page__mobile-job-posting-option">
                    Job Posting
                  </p>
                  <p className="help-my-account-page__mobile-reports-option">
                    Reports
                  </p>
                </div>
                <div className="help-my-account-page__mobile-candidate-posting-membership-container">
                  <p className="help-my-account-page__mobile-candidate-posting-option">
                    Candidate Posting
                  </p>
                  <p className="help-my-account-page__mobile-membership-option">
                    Membership
                  </p>
                </div>
                <div className="help-my-account-page__mobile-documents-policies-and-terms-container">
                  <p className="help-my-account-page__mobile-documents-option">
                    Documents
                  </p>
                  <p className="help-my-account-page__mobile-policies-and-terms-option">
                    Policies & Terms
                  </p>
                </div>
                <div className="help-my-account-page__mobile-partnerships-faq-container">
                  <p className="help-my-account-page__mobile-partnerships-option">
                    Partnerships
                  </p>
                  <p className="help-my-account-page__mobile-faq-option">FAQ</p>
                </div>
                <div className="help-my-account-page__mobile-dashboard-glossary-container">
                  <p className="help-my-account-page__mobile-dashboard-option">
                    Dashboard
                  </p>
                  <p className="help-my-account-page__mobile-glossary-option">
                    Glossary
                  </p>
                </div>
                <div className="help-my-account-page__mobile-searching-container">
                  <p className="help-my-account-page__mobile-searching-option">
                    Searching
                  </p>
                </div>
              </div>
            </div>
            <div className="help-my-account-page__mobile-my-account-container">
              <div className="help-my-account-page__mobile-my-account-header-container">
                <p className="help-my-account-page__mobile-my-account-header">
                  My Account
                </p>
                <img
                  className="help-my-account-page__mobile-my-account-icon"
                  src={MyAccountIcon}
                  alt="My Account Icon"
                />
              </div>
              <div className="help-my-account-page__mobile-my-account-container-options-container">
                <p className="help-my-account-page__mobile-my-account-overview-option">
                  <img
                    className="help-my-account-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-my-account-page__mobile-my-account-overview-text">
                    My Account Overview
                  </span>
                </p>
                <p className="help-my-account-page__mobile-change-password-option">
                  <img
                    className="help-my-account-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-my-account-page__mobile-change-password-text">
                    Change Password
                  </span>
                </p>
                <p className="help-my-account-page__mobile-view-and-edit-profile-option">
                  <img
                    className="help-my-account-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-my-account-page__mobile-view-and-edit-profile-text">
                    View & Edit Profile
                  </span>
                </p>
                <p className="help-my-account-page__mobile-view-and-edit-agency-information-option">
                  <img
                    className="help-my-account-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-my-account-page__mobile-view-and-edit-agency-information-text">
                    View & Edit Agency Information
                  </span>
                </p>
                <p className="help-my-account-page__mobile-manage-users-option">
                  <img
                    className="help-my-account-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-my-account-page__mobile-manage-users-text">
                    Manage Users
                  </span>
                </p>
                <p className="help-my-account-page__mobile-set-permissions-option">
                  <img
                    className="help-my-account-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-my-account-page__mobile-set-permissions-text">
                    Set Permissions
                  </span>
                </p>
                <p className="help-my-account-page__mobile-notification-settings-option">
                  <img
                    className="help-my-account-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-my-account-page__mobile-notification-settings-text">
                    Notification Settings
                  </span>
                </p>
                <p className="help-my-account-page__mobile-vacation-mode-option">
                  <img
                    className="help-my-account-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-my-account-page__mobile-vacation-mode-text">
                    Vacation Mode
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="help-my-account-page__tablet-container">
            <p className="help-my-account-page__tablet-help-center-header">
              Help Center
            </p>
            <img
              className="help-my-account-page__tablet-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-my-account-page__tablet-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-my-account-page__tablet-categories-my-account-container">
              <div className="help-my-account-page__tablet-categories-container">
                <p className="help-my-account-page__tablet-categories-header">
                  Categories
                </p>
                <p className="help-my-account-page__tablet-my-account-option">
                  My Account
                </p>
                <p className="help-my-account-page__tablet-job-posting-option">
                  Job Posting
                </p>
                <p className="help-my-account-page__tablet-candidate-posting-option">
                  Candidate Posting
                </p>
                <p className="help-my-account-page__tablet-documents-option">
                  Documents
                </p>
                <p className="help-my-account-page__tablet-partnerships-option">
                  Partnerships
                </p>
                <p className="help-my-account-page__tablet-dashboard-option">
                  Dashboard
                </p>
                <p className="help-my-account-page__tablet-searching-option">
                  Searching
                </p>
                <p className="help-my-account-page__tablet-ratings-and-feedback-option">
                  Ratings & Feedback
                </p>
                <p className="help-my-account-page__tablet-reports-option">
                  Reports
                </p>
                <p className="help-my-account-page__tablet-membership-option">
                  Membership
                </p>
                <p className="help-my-account-page__tablet-policies-and-terms-option">
                  Policies & Terms
                </p>
                <p className="help-my-account-page__tablet-faq-option">FAQ</p>
                <p className="help-my-account-page__tablet-glossary-option">
                  Glossary
                </p>
              </div>
              <div className="help-my-account-page__tablet-my-account-container">
                <div className="help-my-account-page__tablet-my-account-container-header-container">
                  <p className="help-my-account-page__tablet-my-account-header">
                    My Account
                  </p>
                  <img
                    className="help-my-account-page__tablet-my-account-icon"
                    src={MyAccountIcon}
                    alt="My Account Icon"
                  />
                </div>
                <div className="help-my-account-page__tablet-my-account-options-container">
                  <p className="help-my-account-page__tablet-my-account-overview-option">
                    <img
                      className="help-my-account-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-my-account-page__tablet-my-account-overview-text">
                      My Account Overview
                    </span>
                  </p>
                  <p className="help-my-account-page__tablet-change-password-option">
                    <img
                      className="help-my-account-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-my-account-page__tablet-change-password-text">
                      Change Password
                    </span>
                  </p>
                  <p className="help-my-account-page__tablet-view-and-edit-profile-option">
                    <img
                      className="help-my-account-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-my-account-page__tablet-view-and-edit-profile-text">
                      View & Edit Profile
                    </span>
                  </p>
                  <p className="help-my-account-page__tablet-view-and-edit-agency-information-option">
                    <img
                      className="help-my-account-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <p className="help-my-account-page__tablet-view-and-edit-agency-information-text">
                      View & Edit Agency Information
                    </p>
                  </p>
                  <p className="help-my-account-page__tablet-manage-users-option">
                    <img
                      className="help-my-account-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-my-account-page__tablet-manage-users-text">
                      Manage Users
                    </span>
                  </p>
                  <p className="help-my-account-page__tablet-set-permissions-option">
                    <img
                      className="help-my-account-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-my-account-page__tablet-set-permissions-text">
                      Set Permissions
                    </span>
                  </p>
                  <p className="help-my-account-page__tablet-notification-settings-option">
                    <img
                      className="help-my-account-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-my-account-page__tablet-notification-settings-text">
                      Notification Settings
                    </span>
                  </p>
                  <p className="help-my-account-page__tablet-vacation-mode-option">
                    <img
                      className="help-my-account-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-my-account-page__tablet-vacation-mode-text">
                      Vacation Mode
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="help-my-account-page__desktop-container">
            <p className="help-my-account-page__desktop-help-center-header">
              Help Center
            </p>
            <div className="help-my-account-page__desktop-central-container">
              <div className="help-my-account-page__desktop-left-container">
                <img
                  className="help-my-account-page__desktop-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
                <input
                  className="help-my-account-page__desktop-im-looking-for-input"
                  type="text"
                />
                <div className="help-my-account-page__desktop-categories-container">
                  <p className="help-my-account-page__desktop-categories-header">
                    Categories
                  </p>
                  <p className="help-my-account-page__desktop-my-account-option">
                    My Account
                  </p>
                  <p className="help-my-account-page__desktop-job-posting-option">
                    Job Posting
                  </p>
                  <p className="help-my-account-page__desktop-candidate-posting-option">
                    Candidate Posting
                  </p>
                  <p className="help-my-account-page__desktop-documents-option">
                    Documents
                  </p>
                  <p className="help-my-account-page__desktop-partnerships-option">
                    Partnerships
                  </p>
                  <p className="help-my-account-page__desktop-dashboard-option">
                    Dashboard
                  </p>
                  <p className="help-my-account-page__desktop-searching-option">
                    Searching
                  </p>
                  <p className="help-my-account-page__desktop-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                  <p className="help-my-account-page__desktop-reports-option">
                    Reports
                  </p>
                  <p className="help-my-account-page__desktop-membership-option">
                    Membership
                  </p>
                  <p className="help-my-account-page__desktop-policies-and-terms-option">
                    Policies & Terms
                  </p>
                  <p className="help-my-account-page__desktop-faq-option">
                    FAQ
                  </p>
                  <p className="help-my-account-page__desktop-glossary-option">Glossary</p>
                </div>
              </div>
              <div className="help-my-account-page__desktop-right-container">
                <div className="help-my-account-page__desktop-my-account-container">
                  <div className="help-my-account-page__desktop-my-account-header-container">
                    <p className="help-my-account-page__desktop-my-account-header">
                      My Account
                    </p>
                    <img
                      className="help-my-account-page__desktop-my-account-icon"
                      src={MyAccountIcon}
                      alt="My Account Icon"
                    />
                  </div>
                  <div className="help-my-account-page__desktop-my-account-options-container">
                    <p className="help-my-account-page__desktop-my-account-overview-option">
                      <img
                        className="help-my-account-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-my-account-page__desktop-my-account-overview-text">
                        My Account Overview
                      </span>
                    </p>
                    <p className="help-my-account-page__desktop-change-password-option">
                      <img
                        className="help-my-account-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-my-account-page__desktop-change-password-text">
                        Change Password
                      </span>
                    </p>
                    <p className="help-my-account-page__desktop-view-and-edit-profile-option">
                      <img
                        className="help-my-account-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-my-account-page__desktop-view-and-edit-profile-text">
                        View and Edit Profile
                      </span>
                    </p>
                    <p className="help-my-account-page__desktop-view-and-edit-agency-information-option">
                      <img
                        className="help-my-account-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-my-account-page__desktop-view-and-edit-agency-information-text">
                        View and Edit Agency Information
                      </span>
                    </p>
                    <p className="help-my-account-page__desktop-manage-users-option">
                      <img
                        className="help-my-account-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-my-account-page__desktop-manage-users-text">
                        Manage Users
                      </span>
                    </p>
                    <p className="help-my-account-page__desktop-set-permissions-option">
                      <img
                        className="help-my-account-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-my-account-page__desktop-set-permissions-text">
                        Set Permissions
                      </span>
                    </p>
                    <p className="help-my-account-page__desktop-notification-settings-option">
                      <img
                        className="help-my-account-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-my-account-page__desktop-notification-settings-text">
                        Notification Settings
                      </span>
                    </p>
                    <p className="help-my-account-page__desktop-vacation-mode-option">
                      <img
                        className="help-my-account-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-my-account-page__desktop-vacation-mode-text">
                        Vacation Mode
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
