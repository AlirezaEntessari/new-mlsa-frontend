import React from "react";
import "./HelpReportsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import HelpSidePanel from "../../components/HelpSidePanel/HelpSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import ReportsIcon from "../../assets/icons/Help_Reports.svg";
import PaperIcon from "../../assets/icons/PaperIcon.svg";
import { Link } from "react-router-dom";

export default function HelpReportsPage() {
  return (
    <div className="help-reports-page">
      <HeaderWithProfilePic />
      <div className="help-reports-page__main-container">
        <HelpSidePanel />
        <div className="help-reports-page__right-container">
          <div className="help-reports-page__mobile-container">
            <p className="help-reports-page__mobile-help-center-header">
              Help Center
            </p>
            <img
              className="help-reports-page__mobile-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-reports-page__mobile-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-reports-page__mobile-categories-container">
              <p className="help-reports-page__mobile-categories-header">
                Categories
              </p>
              <div className="help-reports-page__mobile-categories-options-container">
                <div className="help-reports-page__mobile-my-account-ratings-and-feedback-container">
                  <Link
                    className="help-reports-page__mobile-link"
                    to="/help-my-account-page"
                  >
                    <p className="help-reports-page__mobile-my-account-option">
                      My Account
                    </p>
                  </Link>
                  <Link
                    className="help-reports-page__mobile-link"
                    to="/help-ratings-and-feedback-page"
                  >
                    <p className="help-reports-page__mobile-ratings-and-feedback-option">
                      Ratings & Feedback
                    </p>
                  </Link>
                </div>
                <div className="help-reports-page__mobile-job-posting-reports-container">
                  <Link
                    className="help-reports-page__mobile-link"
                    to="/help-job-posting-page"
                  >
                    <p className="help-reports-page__mobile-job-posting-option">
                      Job Posting
                    </p>
                  </Link>
                  <Link
                    className="help-reports-page__mobile-link"
                    to="/help-reports-page"
                  >
                    <p className="help-reports-page__mobile-reports-option">
                      Reports
                    </p>
                  </Link>
                </div>
                <div className="help-reports-page__mobile-candidate-posting-membership-container">
                  <Link
                    className="help-reports-page__mobile-link"
                    to="/help-candidate-posting-page"
                  >
                    <p className="help-reports-page__mobile-candidate-posting-option">
                      Candidate Posting
                    </p>
                  </Link>
                  <Link
                    className="help-reports-page__mobile-link"
                    to="/help-membership-page"
                  >
                    <p className="help-reports-page__mobile-membership-option">
                      Membership
                    </p>
                  </Link>
                </div>
                <div className="help-reports-page__mobile-documents-policies-and-terms-container">
                  <Link
                    className="help-reports-page__mobile-link"
                    to="/help-documents-page"
                  >
                    <p className="help-reports-page__mobile-documents-option">
                      Documents
                    </p>
                  </Link>
                  <Link
                    className="help-reports-page__mobile-link"
                    to="/help-policies-and-terms-page"
                  >
                    <p className="help-reports-page__mobile-policies-and-terms-option">
                      Policies & Terms
                    </p>
                  </Link>
                </div>
                <div className="help-reports-page__mobile-partnerships-faq-container">
                  <Link
                    className="help-reports-page__mobile-link"
                    to="/help-partnerships-page"
                  >
                    <p className="help-reports-page__mobile-partnerships-option">
                      Partnerships
                    </p>
                  </Link>
                  <Link
                    className="help-reports-page__mobile-link"
                    to="/help-faq-page"
                  >
                    <p className="help-reports-page__mobile-faq-option">FAQ</p>
                  </Link>
                </div>
                <div className="help-reports-page__mobile-dashboard-glossary-container">
                  <Link
                    className="help-reports-page__mobile-link"
                    to="/help-dashboard-page"
                  >
                    <p className="help-reports-page__mobile-dashboard-option">
                      Dashboard
                    </p>
                  </Link>
                  <Link
                    className="help-reports-page__mobile-link"
                    to="/help-glossary-page"
                  >
                    <p className="help-reports-page__mobile-glossary-option">
                      Glossary
                    </p>
                  </Link>
                </div>
                <div className="help-reports-page__mobile-searching-container">
                  <Link
                    className="help-reports-page__mobile-link"
                    to="/help-searching-page"
                  >
                    <p className="help-reports-page__mobile-searching-option">
                      Searching
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="help-reports-page__mobile-reports-container">
              <div className="help-reports-page__mobile-reports-header-container">
                <p className="help-reports-page__mobile-reports-header">
                  Reports
                </p>
                <img
                  className="help-reports-page__mobile-reports-icon"
                  src={ReportsIcon}
                  alt="Reports Icon"
                />
              </div>
              <div className="help-reports-page__mobile-reports-container-options-container">
                <p className="help-reports-page__mobile-reports-overview-option">
                  <img
                    className="help-reports-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-reports-page__mobile-reports-overview-text">
                    Reports Overview
                  </span>
                </p>
                <p className="help-reports-page__mobile-run-a-report-option">
                  <img
                    className="help-reports-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-reports-page__mobile-run-a-report-text">
                    Run a Report
                  </span>
                </p>
                <p className="help-reports-page__mobile-view-reports-option">
                  <img
                    className="help-reports-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-reports-page__mobile-view-reports-text">
                    View Reports
                  </span>
                </p>
                <p className="help-reports-page__mobile-export-reports-option">
                  <img
                    className="help-reports-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-reports-page__mobile-export-reports-text">
                    Export Reports
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="help-reports-page__tablet-container">
            <p className="help-reports-page__tablet-help-center-header">
              Help Center
            </p>
            <img
              className="help-reports-page__tablet-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-reports-page__tablet-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-reports-page__tablet-categories-my-account-container">
              <div className="help-reports-page__tablet-categories-container">
                <p className="help-reports-page__tablet-categories-header">
                  Categories
                </p>
                <p className="help-reports-page__tablet-my-account-option">
                  My Account
                </p>
                <p className="help-reports-page__tablet-job-posting-option">
                  Job Posting
                </p>
                <p className="help-reports-page__tablet-candidate-posting-option">
                  Candidate Posting
                </p>
                <p className="help-reports-page__tablet-documents-option">
                  Documents
                </p>
                <p className="help-reports-page__tablet-partnerships-option">
                  Partnerships
                </p>
                <p className="help-reports-page__tablet-dashboard-option">
                  Dashboard
                </p>
                <p className="help-reports-page__tablet-searching-option">
                  Searching
                </p>
                <p className="help-reports-page__tablet-ratings-and-feedback-option">
                  Ratings & Feedback
                </p>
                <p className="help-reports-page__tablet-reports-option">
                  Reports
                </p>
                <p className="help-reports-page__tablet-membership-option">
                  Membership
                </p>
                <p className="help-reports-page__tablet-policies-and-terms-option">
                  Policies & Terms
                </p>
                <p className="help-reports-page__tablet-faq-option">FAQ</p>
                <p className="help-reports-page__tablet-glossary-option">
                  Glossary
                </p>
              </div>
              <div className="help-reports-page__tablet-reports-container">
                <div className="help-reports-page__tablet-reports-container-header-container">
                  <p className="help-reports-page__tablet-reports-header">
                    Reports
                  </p>
                  <img
                    className="help-reports-page__tablet-reports-icon"
                    src={ReportsIcon}
                    alt="Reports Icon"
                  />
                </div>
                <div className="help-reports-page__tablet-reports-options-container">
                  <p className="help-reports-page__tablet-reports-overview-option">
                    <img
                      className="help-reports-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-reports-page__tablet-reports-overview-text">
                      Reports Overview
                    </span>
                  </p>
                  <p className="help-reports-page__tablet-run-a-report-option">
                    <img
                      className="help-reports-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-reports-page__tablet-run-a-report-text">
                      Run a Report
                    </span>
                  </p>
                  <p className="help-reports-page__tablet-view-reports-option">
                    <img
                      className="help-reports-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-reports-page__tablet-view-reports-text">
                      View Reports
                    </span>
                  </p>
                  <p className="help-reports-page__tablet-export-reports-option">
                    <img
                      className="help-reports-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-reports-page__tablet-export-reports-text">
                      Export Reports
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="help-reports-page__desktop-container">
            <p className="help-reports-page__desktop-help-center-header">
              Help Center
            </p>
            <div className="help-reports-page__desktop-central-container">
              <div className="help-reports-page__desktop-left-container">
                <img
                  className="help-reports-page__desktop-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
                <input
                  className="help-reports-page__desktop-im-looking-for-input"
                  type="text"
                />
                <div className="help-reports-page__desktop-categories-container">
                  <p className="help-reports-page__desktop-categories-header">
                    Categories
                  </p>
                  <p className="help-reports-page__desktop-my-account-option">
                    My Account
                  </p>
                  <p className="help-reports-page__desktop-job-posting-option">
                    Job Posting
                  </p>
                  <p className="help-reports-page__desktop-candidate-posting-option">
                    Candidate Posting
                  </p>
                  <p className="help-reports-page__desktop-documents-option">
                    Documents
                  </p>
                  <p className="help-reports-page__desktop-partnerships-option">
                    Partnerships
                  </p>
                  <p className="help-reports-page__desktop-dashboard-option">
                    Dashboard
                  </p>
                  <p className="help-reports-page__desktop-searching-option">
                    Searching
                  </p>
                  <p className="help-reports-page__desktop-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                  <p className="help-reports-page__desktop-reports-option">
                    Reports
                  </p>
                  <p className="help-reports-page__desktop-membership-option">
                    Membership
                  </p>
                  <p className="help-reports-page__desktop-policies-and-terms-option">
                    Policies & Terms
                  </p>
                  <p className="help-reports-page__desktop-faq-option">FAQ</p>
                  <p className="help-reports-page__desktop-glossary-option">
                    Glossary
                  </p>
                </div>
              </div>
              <div className="help-reports-page__desktop-right-container">
                <div className="help-reports-page__desktop-reports-container">
                  <div className="help-reports-page__desktop-reports-header-container">
                    <p className="help-reports-page__desktop-reports-header">
                      Reports
                    </p>
                    <img
                      className="help-reports-page__desktop-reports-icon"
                      src={ReportsIcon}
                      alt="Reports Icon"
                    />
                  </div>
                  <div className="help-reports-page__desktop-reports-options-container">
                    <p className="help-reports-page__desktop-reports-overview-option">
                      <img
                        className="help-reports-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-reports-page__desktop-reports-overview-text">
                        Reports Overview
                      </span>
                    </p>
                    <p className="help-reports-page__desktop-run-a-report-option">
                      <img
                        className="help-reports-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-reports-page__desktop-run-a-report-text">
                        Run a Report
                      </span>
                    </p>
                    <p className="help-reports-page__desktop-view-reports-option">
                      <img
                        className="help-reports-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-reports-page__desktop-view-reports-text">
                        View Reports
                      </span>
                    </p>
                    <p className="help-reports-page__desktop-export-reports-option">
                      <img
                        className="help-reports-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-reports-page__desktop-export-reports-text">
                        Export Reports
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
