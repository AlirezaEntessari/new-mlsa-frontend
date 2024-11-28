import React from "react";
import "./HelpDashboardPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import HelpSidePanel from "../../components/HelpSidePanel/HelpSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import DashboardIcon from "../../assets/icons/Help_Dashboard.svg";
import PaperIcon from "../../assets/icons/PaperIcon.svg";

export default function HelpDashboardPage() {
  return (
    <div className="help-dashboard-page">
      <HeaderWithProfilePic />
      <div className="help-dashboard-page__main-container">
        <HelpSidePanel />
        <div className="help-dashboard-page__right-container">
          <div className="help-dashboard-page__mobile-container">
            <p className="help-dashboard-page__mobile-help-center-header">
              Help Center
            </p>
            <img
              className="help-dashboard-page__mobile-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-dashboard-page__mobile-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-dashboard-page__mobile-categories-container">
              <p className="help-dashboard-page__mobile-categories-header">
                Categories
              </p>
              <div className="help-dashboard-page__mobile-categories-options-container">
                <div className="help-dashboard-page__mobile-my-account-ratings-and-feedback-container">
                  <p className="help-dashboard-page__mobile-my-account-option">
                    My Account
                  </p>
                  <p className="help-dashboard-page__mobile-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                </div>
                <div className="help-dashboard-page__mobile-job-posting-reports-container">
                  <p className="help-dashboard-page__mobile-job-posting-option">
                    Job Posting
                  </p>
                  <p className="help-dashboard-page__mobile-reports-option">
                    Reports
                  </p>
                </div>
                <div className="help-dashboard-page__mobile-candidate-posting-membership-container">
                  <p className="help-dashboard-page__mobile-candidate-posting-option">
                    Candidate Posting
                  </p>
                  <p className="help-dashboard-page__mobile-membership-option">
                    Membership
                  </p>
                </div>
                <div className="help-dashboard-page__mobile-documents-policies-and-terms-container">
                  <p className="help-dashboard-page__mobile-documents-option">
                    Documents
                  </p>
                  <p className="help-dashboard-page__mobile-policies-and-terms-option">
                    Policies & Terms
                  </p>
                </div>
                <div className="help-dashboard-page__mobile-partnerships-faq-container">
                  <p className="help-dashboard-page__mobile-partnerships-option">
                    Partnerships
                  </p>
                  <p className="help-dashboard-page__mobile-faq-option">FAQ</p>
                </div>
                <div className="help-dashboard-page__mobile-dashboard-glossary-container">
                  <p className="help-dashboard-page__mobile-dashboard-option">
                    Dashboard
                  </p>
                  <p className="help-dashboard-page__mobile-glossary-option">
                    Glossary
                  </p>
                </div>
                <div className="help-dashboard-page__mobile-searching-container">
                  <p className="help-dashboard-page__mobile-searching-option">
                    Searching
                  </p>
                </div>
              </div>
            </div>
            <div className="help-dashboard-page__mobile-dashboard-container">
              <div className="help-dashboard-page__mobile-dashboard-header-container">
                <p className="help-dashboard-page__mobile-dashboard-header">
                  Dashboard
                </p>
                <img
                  className="help-dashboard-page__mobile-dashboard-icon"
                  src={DashboardIcon}
                  alt="My Account Icon"
                />
              </div>
              <div className="help-dashboard-page__mobile-dashboard-container-options-container">
                <p className="help-dashboard-page__mobile-dashboard-overview-option">
                  <img
                    className="help-dashboard-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-dashboard-page__mobile-dashboard-overview-text">
                    Dashboard Overview
                  </span>
                </p>
                <p className="help-dashboard-page__mobile-manage-messages-option">
                  <img
                    className="help-dashboard-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-dashboard-page__mobile-manage-messages-text">
                    Manage Messages
                  </span>
                </p>
                <p className="help-dashboard-page__mobile-manage-notifications-option">
                  <img
                    className="help-dashboard-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-dashboard-page__mobile-manage-notifications-text">
                    Manage Notifications
                  </span>
                </p>
                <p className="help-dashboard-page__mobile-manage-calendar-option">
                  <img
                    className="help-dashboard-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-dashboard-page__mobile-manage-calendar-text">
                    Manage Calendar
                  </span>
                </p>
                <p className="help-dashboard-page__mobile-manage-tasks-option">
                  <img
                    className="help-dashboard-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-dashboard-page__mobile-manage-tasks-text">
                    Manage Tasks
                  </span>
                </p>
                <p className="help-dashboard-page__mobile-navigate-activity-summary-option">
                  <img
                    className="help-dashboard-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-dashboard-page__mobile-navigate-activity-summary-text">
                    Navigate Activity Summary
                  </span>
                </p>
                <p className="help-dashboard-page__mobile-manage-jobs-option">
                  <img
                    className="help-dashboard-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-dashboard-page__mobile-manage-jobs-text">
                    Manage Jobs
                  </span>
                </p>
                <p className="help-dashboard-page__mobile-manage-candidates-option">
                  <img
                    className="help-dashboard-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-dashboard-page__mobile-manage-candidates-text">
                    Manage Candidates
                  </span>
                </p>
                <p className="help-dashboard-page__mobile-edit-profile-option">
                  <img
                    className="help-dashboard-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-dashboard-page__mobile-edit-profile-text">
                    Edit Profile
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="help-dashboard-page__tablet-container">
            <p className="help-dashboard-page__tablet-help-center-header">
              Help Center
            </p>
            <img
              className="help-dashboard-page__tablet-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-dashboard-page__tablet-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-dashboard-page__tablet-categories-my-account-container">
              <div className="help-dashboard-page__tablet-categories-container">
                <p className="help-dashboard-page__tablet-categories-header">
                  Categories
                </p>
                <p className="help-dashboard-page__tablet-my-account-option">
                  My Account
                </p>
                <p className="help-dashboard-page__tablet-job-posting-option">
                  Job Posting
                </p>
                <p className="help-dashboard-page__tablet-candidate-posting-option">
                  Candidate Posting
                </p>
                <p className="help-dashboard-page__tablet-documents-option">
                  Documents
                </p>
                <p className="help-dashboard-page__tablet-partnerships-option">
                  Partnerships
                </p>
                <p className="help-dashboard-page__tablet-dashboard-option">
                  Dashboard
                </p>
                <p className="help-dashboard-page__tablet-searching-option">
                  Searching
                </p>
                <p className="help-dashboard-page__tablet-ratings-and-feedback-option">
                  Ratings & Feedback
                </p>
                <p className="help-dashboard-page__tablet-reports-option">
                  Reports
                </p>
                <p className="help-dashboard-page__tablet-membership-option">
                  Membership
                </p>
                <p className="help-dashboard-page__tablet-policies-and-terms-option">
                  Policies & Terms
                </p>
                <p className="help-dashboard-page__tablet-faq-option">FAQ</p>
                <p className="help-dashboard-page__tablet-glossary-option">
                  Glossary
                </p>
              </div>
              <div className="help-dashboard-page__tablet-dashboard-container">
                <div className="help-dashboard-page__tablet-dashboard-container-header-container">
                  <p className="help-dashboard-page__tablet-dashboard-header">
                    Dashboard
                  </p>
                  <img
                    className="help-dashboard-page__tablet-dashboard-icon"
                    src={DashboardIcon}
                    alt="Dashboard Icon"
                  />
                </div>
                <div className="help-dashboard-page__tablet-dashboard-options-container">
                  <p className="help-dashboard-page__tablet-dashboard-overview-option">
                    <img
                      className="help-dashboard-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-dashboard-page__tablet-dashboard-overview-text">
                      Dashboard Overview
                    </span>
                  </p>
                  <p className="help-dashboard-page__tablet-manage-messages-option">
                    <img
                      className="help-dashboard-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-dashboard-page__tablet-manage-messages-text">
                      Manage Messages
                    </span>
                  </p>
                  <p className="help-dashboard-page__tablet-manage-notifications-option">
                    <img
                      className="help-dashboard-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-dashboard-page__tablet-manage-notifications-text">
                      Manage Notifications
                    </span>
                  </p>
                  <p className="help-dashboard-page__tablet-manage-calendar-option">
                    <img
                      className="help-dashboard-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-dashboard-page__tablet-manage-calendar-text">
                      Manage Calendar
                    </span>
                  </p>
                  <p className="help-dashboard-page__tablet-manage-tasks-option">
                    <img
                      className="help-dashboard-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-dashboard-page__tablet-manage-tasks-text">
                      Manage Tasks
                    </span>
                  </p>
                  <p className="help-dashboard-page__tablet-navigate-activity-summary-option">
                    <img
                      className="help-dashboard-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-dashboard-page__tablet-navigate-activity-summary-text">
                      Navigate Activity Summary
                    </span>
                  </p>
                  <p className="help-dashboard-page__tablet-manage-jobs-option">
                    <img
                      className="help-dashboard-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-dashboard-page__tablet-manage-jobs-text">
                      Manage Jobs
                    </span>
                  </p>
                  <p className="help-dashboard-page__tablet-manage-candidates-option">
                    <img
                      className="help-dashboard-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-dashboard-page__tablet-manage-candidates-text">
                      Manage Candidates
                    </span>
                  </p>
                  <p className="help-dashboard-page__tablet-edit-profile-option">
                    <img
                      className="help-dashboard-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-dashboard-page__tablet-edit-profile-text">
                      Edit Profile
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="help-dashboard-page__desktop-container">
            <p className="help-dashboard-page__desktop-help-center-header">
              Help Center
            </p>
            <div className="help-dashboard-page__desktop-central-container">
              <div className="help-dashboard-page__desktop-left-container">
                <img
                  className="help-dashboard-page__desktop-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
                <input
                  className="help-dashboard-page__desktop-im-looking-for-input"
                  type="text"
                />
                <div className="help-dashboard-page__desktop-categories-container">
                  <p className="help-dashboard-page__desktop-categories-header">
                    Categories
                  </p>
                  <p className="help-dashboard-page__desktop-my-account-option">
                    My Account
                  </p>
                  <p className="help-dashboard-page__desktop-job-posting-option">
                    Job Posting
                  </p>
                  <p className="help-dashboard-page__desktop-candidate-posting-option">
                    Candidate Posting
                  </p>
                  <p className="help-dashboard-page__desktop-documents-option">
                    Documents
                  </p>
                  <p className="help-dashboard-page__desktop-partnerships-option">
                    Partnerships
                  </p>
                  <p className="help-dashboard-page__desktop-dashboard-option">
                    Dashboard
                  </p>
                  <p className="help-dashboard-page__desktop-searching-option">
                    Searching
                  </p>
                  <p className="help-dashboard-page__desktop-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                  <p className="help-dashboard-page__desktop-reports-option">
                    Reports
                  </p>
                  <p className="help-dashboard-page__desktop-membership-option">
                    Membership
                  </p>
                  <p className="help-dashboard-page__desktop-policies-and-terms-option">
                    Policies & Terms
                  </p>
                  <p className="help-dashboard-page__desktop-faq-option">FAQ</p>
                  <p className="help-dashboard-page__desktop-glossary-option">
                    Glossary
                  </p>
                </div>
              </div>
              <div className="help-dashboard-page__desktop-right-container">
                <div className="help-dashboard-page__desktop-dashboard-container">
                  <div className="help-dashboard-page__desktop-dashboard-header-container">
                    <p className="help-dashboard-page__desktop-dashboard-header">
                      Dashboard
                    </p>
                    <img
                      className="help-dashboard-page__desktop-dashboard-icon"
                      src={DashboardIcon}
                      alt="Dashboard Icon"
                    />
                  </div>
                  <div className="help-dashboard-page__desktop-dashboard-options-container">
                    <p className="help-dashboard-page__desktop-dashboard-overview-option">
                      <img
                        className="help-dashboard-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-dashboard-page__desktop-dashboard-overview-text">
                        Dashboard Overview
                      </span>
                    </p>
                    <p className="help-dashboard-page__desktop-manage-messages-option">
                      <img
                        className="help-dashboard-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-dashboard-page__desktop-manage-messages-text">
                        Manage Messages
                      </span>
                    </p>
                    <p className="help-dashboard-page__desktop-manage-notifications-option">
                      <img
                        className="help-dashboard-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-dashboard-page__desktop-manage-notifications-text">
                        Manage Notifications
                      </span>
                    </p>
                    <p className="help-dashboard-page__desktop-manage-calendar-option">
                      <img
                        className="help-dashboard-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-dashboard-page__desktop-manage-calendar-text">
                        Manage Calendar
                      </span>
                    </p>
                    <p className="help-dashboard-page__desktop-manage-tasks-option">
                      <img
                        className="help-dashboard-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-dashboard-page__desktop-manage-tasks-text">
                        Manage Tasks
                      </span>
                    </p>
                    <p className="help-dashboard-page__desktop-navigate-activity-summary-option">
                      <img
                        className="help-dashboard-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-dashboard-page__desktop-navigate-activity-summary-text">
                        Navigate Activity Summary
                      </span>
                    </p>
                    <p className="help-dashboard-page__desktop-manage-jobs-option">
                      <img
                        className="help-dashboard-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-dashboard-page__desktop-manage-jobs-text">
                        Manage Jobs
                      </span>
                    </p>
                    <p className="help-dashboard-page__desktop-manage-candidates-option">
                      <img
                        className="help-dashboard-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-dashboard-page__desktop-manage-candidates-text">
                        Manage Candidates
                      </span>
                    </p>
                    <p className="help-dashboard-page__desktop-edit-profile-option">
                      <img
                        className="help-dashboard-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-dashboard-page__desktop-edit-profile-text">
                        Edit Profile
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
