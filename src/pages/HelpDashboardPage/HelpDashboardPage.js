import React from "react";
import "./HelpDashboardPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import HelpSidePanel from "../../components/HelpSidePanel/HelpSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import DashboardIcon from "../../assets/icons/Help_Dashboard.svg";
import PaperIcon from "../../assets/icons/PaperIcon.svg";
import { Link } from "react-router-dom";

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
                  <Link
                    className="help-dashboard-page__mobile-link"
                    to="/help-my-account-page"
                  >
                    <p className="help-dashboard-page__mobile-my-account-option">
                      My Account
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__mobile-link"
                    to="/help-ratings-and-feedback-page"
                  >
                    <p className="help-dashboard-page__mobile-ratings-and-feedback-option">
                      Ratings & Feedback
                    </p>
                  </Link>
                </div>
                <div className="help-dashboard-page__mobile-job-posting-reports-container">
                  <Link
                    className="help-dashboard-page__mobile-link"
                    to="/help-job-posting-page"
                  >
                    <p className="help-dashboard-page__mobile-job-posting-option">
                      Job Posting
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__mobile-link"
                    to="/help-reports-page"
                  >
                    <p className="help-dashboard-page__mobile-reports-option">
                      Reports
                    </p>
                  </Link>
                </div>
                <div className="help-dashboard-page__mobile-candidate-posting-membership-container">
                  <Link
                    className="help-dashboard-page__mobile-link"
                    to="/help-candidate-posting-page"
                  >
                    <p className="help-dashboard-page__mobile-candidate-posting-option">
                      Candidate Posting
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__mobile-link"
                    to="/help-membership-page"
                  >
                    <p className="help-dashboard-page__mobile-membership-option">
                      Membership
                    </p>
                  </Link>
                </div>
                <div className="help-dashboard-page__mobile-documents-policies-and-terms-container">
                  <Link
                    className="help-dashboard-page__mobile-link"
                    to="/help-documents-page"
                  >
                    <p className="help-dashboard-page__mobile-documents-option">
                      Documents
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__mobile-link"
                    to="/help-policies-and-terms-page"
                  >
                    <p className="help-dashboard-page__mobile-policies-and-terms-option">
                      Policies & Terms
                    </p>
                  </Link>
                </div>
                <div className="help-dashboard-page__mobile-partnerships-faq-container">
                  <Link
                    className="help-dashboard-page__mobile-link"
                    to="/help-partnerships-page"
                  >
                    <p className="help-dashboard-page__mobile-partnerships-option">
                      Partnerships
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__mobile-link"
                    to="/help-faq-page"
                  >
                    <p className="help-dashboard-page__mobile-faq-option">
                      FAQ
                    </p>
                  </Link>
                </div>
                <div className="help-dashboard-page__mobile-dashboard-glossary-container">
                  <Link
                    className="help-dashboard-page__mobile-link"
                    to="/help-dashboard-page"
                  >
                    <p className="help-dashboard-page__mobile-dashboard-option">
                      Dashboard
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__mobile-link"
                    to="/help-glossary-page"
                  >
                    <p className="help-dashboard-page__mobile-glossary-option">
                      Glossary
                    </p>
                  </Link>
                </div>
                <div className="help-dashboard-page__mobile-searching-container">
                  <Link
                    className="help-dashboard-page__mobile-link"
                    to="/help-searching-page"
                  >
                    <p className="help-dashboard-page__mobile-searching-option">
                      Searching
                    </p>
                  </Link>
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
                <Link
                  className="help-dashboard-page__tablet-link"
                  to="/help-my-account-page"
                >
                  <p className="help-dashboard-page__tablet-my-account-option">
                    My Account
                  </p>
                </Link>
                <Link
                  className="help-dashboard-page__tablet-link"
                  to="/help-job-posting-page"
                >
                  <p className="help-dashboard-page__tablet-job-posting-option">
                    Job Posting
                  </p>
                </Link>
                <Link
                  className="help-dashboard-page__tablet-link"
                  to="/help-candidate-posting-page"
                >
                  <p className="help-dashboard-page__tablet-candidate-posting-option">
                    Candidate Posting
                  </p>
                </Link>
                <Link
                  className="help-dashboard-page__tablet-link"
                  to="/help-documents-page"
                >
                  <p className="help-dashboard-page__tablet-documents-option">
                    Documents
                  </p>
                </Link>
                <Link
                  className="help-dashboard-page__tablet-link"
                  to="/help-partnerships-page"
                >
                  <p className="help-dashboard-page__tablet-partnerships-option">
                    Partnerships
                  </p>
                </Link>
                <Link
                  className="help-dashboard-page__tablet-link"
                  to="/help-dashboard-page"
                >
                  <p className="help-dashboard-page__tablet-dashboard-option">
                    Dashboard
                  </p>
                </Link>
                <Link
                  className="help-dashboard-page__tablet-link"
                  to="/help-searching-page"
                >
                  <p className="help-dashboard-page__tablet-searching-option">
                    Searching
                  </p>
                </Link>
                <Link
                  className="help-dashboard-page__tablet-link"
                  to="/help-ratings-and-feedback-page"
                >
                  <p className="help-dashboard-page__tablet-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                </Link>
                <Link
                  className="help-dashboard-page__tablet-link"
                  to="/help-reports-page"
                >
                  <p className="help-dashboard-page__tablet-reports-option">
                    Reports
                  </p>
                </Link>
                <Link
                  className="help-dashboard-page__tablet-link"
                  to="/help-membership-page"
                >
                  <p className="help-dashboard-page__tablet-membership-option">
                    Membership
                  </p>
                </Link>
                <Link
                  className="help-dashboard-page__tablet-link"
                  to="/help-policies-and-terms-page"
                >
                  <p className="help-dashboard-page__tablet-policies-and-terms-option">
                    Policies & Terms
                  </p>
                </Link>
                <Link
                  className="help-dashboard-page__tablet-link"
                  to="/help-faq-page"
                >
                  <p className="help-dashboard-page__tablet-faq-option">FAQ</p>
                </Link>
                <Link
                  className="help-dashboard-page__tablet-link"
                  to="/help-glossary-page"
                >
                  <p className="help-dashboard-page__tablet-glossary-option">
                    Glossary
                  </p>
                </Link>
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
                  <Link
                    className="help-dashboard-page__desktop-link"
                    to="/help-my-account-page"
                  >
                    <p className="help-dashboard-page__desktop-my-account-option">
                      My Account
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__desktop-link"
                    to="/help-job-posting-page"
                  >
                    <p className="help-dashboard-page__desktop-job-posting-option">
                      Job Posting
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__desktop-link"
                    to="/help-candidate-posting-page"
                  >
                    <p className="help-dashboard-page__desktop-candidate-posting-option">
                      Candidate Posting
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__desktop-link"
                    to="/help-documents-page"
                  >
                    <p className="help-dashboard-page__desktop-documents-option">
                      Documents
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__desktop-link"
                    to="/help-partnerships-page"
                  >
                    <p className="help-dashboard-page__desktop-partnerships-option">
                      Partnerships
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__desktop-link"
                    to="/help-dashboard-page"
                  >
                    <p className="help-dashboard-page__desktop-dashboard-option">
                      Dashboard
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__desktop-link"
                    to="/help-searching-page"
                  >
                    <p className="help-dashboard-page__desktop-searching-option">
                      Searching
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__desktop-link"
                    to="/help-ratings-and-feedback-page"
                  >
                    <p className="help-dashboard-page__desktop-ratings-and-feedback-option">
                      Ratings & Feedback
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__desktop-link"
                    to="/help-reports-page"
                  >
                    <p className="help-dashboard-page__desktop-reports-option">
                      Reports
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__desktop-link"
                    to="/help-membership-page"
                  >
                    <p className="help-dashboard-page__desktop-membership-option">
                      Membership
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__desktop-link"
                    to="/help-policies-and-terms-page"
                  >
                    <p className="help-dashboard-page__desktop-policies-and-terms-option">
                      Policies & Terms
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__desktop-link"
                    to="/help-faq-page"
                  >
                    <p className="help-dashboard-page__desktop-faq-option">
                      FAQ
                    </p>
                  </Link>
                  <Link
                    className="help-dashboard-page__desktop-link"
                    to="/help-glossary-page"
                  >
                    <p className="help-dashboard-page__desktop-glossary-option">
                      Glossary
                    </p>
                  </Link>
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
