import React from "react";
import "./HelpDocumentsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import HelpSidePanel from "../../components/HelpSidePanel/HelpSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import DocumentsIcon from "../../assets/icons/Help_Documents.svg";
import PaperIcon from "../../assets/icons/PaperIcon.svg";
import { dblClick } from "@testing-library/user-event/dist/click";
import { Link } from "react-router-dom";

export default function HelpDocumentsPage() {
  return (
    <div className="help-documents-page">
      <HeaderWithProfilePic />
      <div className="help-documents-page__main-container">
        <HelpSidePanel />
        <div className="help-documents-page__right-container">
          <div className="help-documents-page__mobile-container">
            <p className="help-documents-page__mobile-help-center-header">
              Help Center
            </p>
            <img
              className="help-documents-page__mobile-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-documents-page__mobile-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-documents-page__mobile-categories-container">
              <p className="help-documents-page__mobile-categories-header">
                Categories
              </p>
              <div className="help-documents-page__mobile-categories-options-container">
                <div className="help-documents-page__mobile-my-account-ratings-and-feedback-container">
                  <Link
                    className="help-documents-page__mobile-link"
                    to="/help-my-account-page"
                  >
                    <p className="help-documents-page__mobile-my-account-option">
                      My Account
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__mobile-link"
                    to="/help-ratings-and-feedback-page"
                  >
                    <p className="help-documents-page__mobile-ratings-and-feedback-option">
                      Ratings & Feedback
                    </p>
                  </Link>
                </div>
                <div className="help-documents-page__mobile-job-posting-reports-container">
                  <Link
                    className="help-documents-page__mobile-link"
                    to="/help-job-posting-page"
                  >
                    <p className="help-documents-page__mobile-job-posting-option">
                      Job Posting
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__mobile-link"
                    to="/help-reports-page"
                  >
                    <p className="help-documents-page__mobile-reports-option">
                      Reports
                    </p>
                  </Link>
                </div>
                <div className="help-documents-page__mobile-candidate-posting-membership-container">
                  <Link
                    className="help-documents-page__mobile-link"
                    to="/help-candidate-posting-page"
                  >
                    <p className="help-documents-page__mobile-candidate-posting-option">
                      Candidate Posting
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__mobile-link"
                    to="/help-membership-page"
                  >
                    <p className="help-documents-page__mobile-membership-option">
                      Membership
                    </p>
                  </Link>
                </div>
                <div className="help-documents-page__mobile-documents-policies-and-terms-container">
                  <Link
                    className="help-documents-page__mobile-link"
                    to="/help-documents-page"
                  >
                    <p className="help-documents-page__mobile-documents-option">
                      Documents
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__mobile-link"
                    to="/help-policies-and-terms-page"
                  >
                    <p className="help-documents-page__mobile-policies-and-terms-option">
                      Policies & Terms
                    </p>
                  </Link>
                </div>
                <div className="help-documents-page__mobile-partnerships-faq-container">
                  <Link
                    className="help-documents-page__mobile-link"
                    to="/help-partnerships-page"
                  >
                    <p className="help-documents-page__mobile-partnerships-option">
                      Partnerships
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__mobile-link"
                    to="/help-faq-page"
                  >
                    <p className="help-documents-page__mobile-faq-option">
                      FAQ
                    </p>
                  </Link>
                </div>
                <div className="help-documents-page__mobile-dashboard-glossary-container">
                  <Link
                    className="help-documents-page__mobile-link"
                    to="/help-dashboard-page"
                  >
                    <p className="help-documents-page__mobile-dashboard-option">
                      Dashboard
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__mobile-link"
                    to="/help-glossary-page"
                  >
                    <p className="help-documents-page__mobile-glossary-option">
                      Glossary
                    </p>
                  </Link>
                </div>
                <div className="help-documents-page__mobile-searching-container">
                  <Link
                    className="help-documents-page__mobile-link"
                    to="/help-searching-page"
                  >
                    <p className="help-documents-page__mobile-searching-option">
                      Searching
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="help-documents-page__mobile-documents-container">
              <div className="help-documents-page__mobile-documents-header-container">
                <p className="help-documents-page__mobile-documents-header">
                  Documents
                </p>
                <img
                  className="help-documents-page__mobile-documents-icon"
                  src={DocumentsIcon}
                  alt="Documents Icon"
                />
              </div>
              <div className="help-documents-page__mobile-documents-container-options-container">
                <p className="help-documents-page__mobile-search-bar-option">
                  <img
                    className="help-documents-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-documents-page__mobile-search-bar-text">
                    Search Bar
                  </span>
                </p>
                <p className="help-documents-page__mobile-agreements-option">
                  <img
                    className="help-documents-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-documents-page__mobile-agreements-text">
                    Agreements
                  </span>
                </p>
                <p className="help-documents-page__mobile-reports-documents-option">
                  <img
                    className="help-documents-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-documents-page__mobile-reports-text">
                    Reports
                  </span>
                </p>
                <p className="help-documents-page__mobile-archive-option">
                  <img
                    className="help-documents-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-documents-page__mobile-archive-text">
                    Archive
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="help-documents-page__tablet-container">
            <p className="help-documents-page__tablet-help-center-header">
              Help Center
            </p>
            <img
              className="help-documents-page__tablet-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-documents-page__tablet-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-documents-page__tablet-categories-my-account-container">
              <div className="help-documents-page__tablet-categories-container">
                <p className="help-documents-page__tablet-categories-header">
                  Categories
                </p>
                <Link
                  className="help-documents-page__tablet-link"
                  to="/help-my-account-page"
                >
                  <p className="help-documents-page__tablet-my-account-option">
                    My Account
                  </p>
                </Link>
                <Link
                  className="help-documents-page__tablet-link"
                  to="/help-job-posting-page"
                >
                  <p className="help-documents-page__tablet-job-posting-option">
                    Job Posting
                  </p>
                </Link>
                <Link
                  className="help-documents-page__tablet-link"
                  to="/help-candidate-posting-page"
                >
                  <p className="help-documents-page__tablet-candidate-posting-option">
                    Candidate Posting
                  </p>
                </Link>
                <Link
                  className="help-documents-page__tablet-link"
                  to="/help-documents-page"
                >
                  <p className="help-documents-page__tablet-documents-option">
                    Documents
                  </p>
                </Link>
                <Link
                  className="help-documents-page__tablet-link"
                  to="/help-partnerships-page"
                >
                  <p className="help-documents-page__tablet-partnerships-option">
                    Partnerships
                  </p>
                </Link>
                <Link
                  className="help-documents-page__tablet-link"
                  to="/help-dashboard-page"
                >
                  <p className="help-documents-page__tablet-dashboard-option">
                    Dashboard
                  </p>
                </Link>
                <Link
                  className="help-documents-page__tablet-link"
                  to="/help-searching-page"
                >
                  <p className="help-documents-page__tablet-searching-option">
                    Searching
                  </p>
                </Link>
                <Link
                  className="help-documents-page__tablet-link"
                  to="/help-ratings-and-feedback-page"
                >
                  <p className="help-documents-page__tablet-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                </Link>
                <Link
                  className="help-documents-page__tablet-link"
                  to="/help-reports-page"
                >
                  <p className="help-documents-page__tablet-reports-option">
                    Reports
                  </p>
                </Link>
                <Link
                  className="help-documents-page__tablet-link"
                  to="/help-membership-page"
                >
                  <p className="help-documents-page__tablet-membership-option">
                    Membership
                  </p>
                </Link>
                <Link
                  className="help-documents-page__tablet-link"
                  to="/help-policies-and-terms-page"
                >
                  <p className="help-documents-page__tablet-policies-and-terms-option">
                    Policies & Terms
                  </p>
                </Link>
                <Link
                  className="help-documents-page__tablet-link"
                  to="/help-faq-page"
                >
                  <p className="help-documents-page__tablet-faq-option">FAQ</p>
                </Link>
                <Link
                  className="help-documents-page__tablet-link"
                  to="/help-glossary-page"
                >
                  <p className="help-documents-page__tablet-glossary-option">
                    Glossary
                  </p>
                </Link>
              </div>
              <div className="help-documents-page__tablet-documents-container">
                <div className="help-documents-page__tablet-documents-container-header-container">
                  <p className="help-documents-page__tablet-documents-header">
                    Documents
                  </p>
                  <img
                    className="help-documents-page__tablet-documents-icon"
                    src={DocumentsIcon}
                    alt="Documents Icon"
                  />
                </div>
                <div className="help-documents-page__tablet-documents-options-container">
                  <p className="help-documents-page__tablet-search-bar-option">
                    <img
                      className="help-documents-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-documents-page__tablet-search-bar-text">
                      Search Bar
                    </span>
                  </p>
                  <p className="help-documents-page__tablet-agreements-option">
                    <img
                      className="help-documents-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-documents-page__tablet-agreements-text">
                      Agreements
                    </span>
                  </p>
                  <p className="help-documents-page__tablet-documents-reports-option">
                    <img
                      className="help-documents-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-documents-page__tablet-reports-text">
                      Reports
                    </span>
                  </p>
                  <p className="help-documents-page__tablet-archive-option">
                    <img
                      className="help-documents-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <p className="help-documents-page__tablet-archive-text">
                      Archive
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="help-documents-page__desktop-container">
            <p className="help-documents-page__desktop-help-center-header">
              Help Center
            </p>
            <div className="help-documents-page__desktop-central-container">
              <div className="help-documents-page__desktop-left-container">
                <img
                  className="help-documents-page__desktop-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
                <input
                  className="help-documents-page__desktop-im-looking-for-input"
                  type="text"
                />
                <div className="help-documents-page__desktop-categories-container">
                  <p className="help-documents-page__desktop-categories-header">
                    Categories
                  </p>
                  <Link
                    className="help-documents-page__desktop-link"
                    to="/help-my-account-page"
                  >
                    <p className="help-documents-page__desktop-my-account-option">
                      My Account
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__desktop-link"
                    to="/help-job-posting-page"
                  >
                    <p className="help-documents-page__desktop-job-posting-option">
                      Job Posting
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__desktop-link"
                    to="/help-candidate-posting-page"
                  >
                    <p className="help-documents-page__desktop-candidate-posting-option">
                      Candidate Posting
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__desktop-link"
                    to="/help-documents-page"
                  >
                    <p className="help-documents-page__desktop-documents-option">
                      Documents
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__desktop-link"
                    to="/help-partnerships-page"
                  >
                    <p className="help-documents-page__desktop-partnerships-option">
                      Partnerships
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__desktop-link"
                    to="/help-dashboard-page"
                  >
                    <p className="help-documents-page__desktop-dashboard-option">
                      Dashboard
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__desktop-link"
                    to="/help-searching-page"
                  >
                    <p className="help-documents-page__desktop-searching-option">
                      Searching
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__desktop-link"
                    to="/help-ratings-and-feedback-page"
                  >
                    <p className="help-documents-page__desktop-ratings-and-feedback-option">
                      Ratings & Feedback
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__desktop-link"
                    to="/help-reports-page"
                  >
                    <p className="help-documents-page__desktop-reports-option">
                      Reports
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__desktop-link"
                    to="/help-membership-page"
                  >
                    <p className="help-documents-page__desktop-membership-option">
                      Membership
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__desktop-link"
                    to="/help-policies-and-terms-page"
                  >
                    <p className="help-documents-page__desktop-policies-and-terms-option">
                      Policies & Terms
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__desktop-link"
                    to="/help-faq-page"
                  >
                    <p className="help-documents-page__desktop-faq-option">
                      FAQ
                    </p>
                  </Link>
                  <Link
                    className="help-documents-page__desktop-link"
                    to="/help-glossary-page"
                  >
                    <p className="help-documents-page__desktop-glossary-option">
                      Glossary
                    </p>
                  </Link>
                </div>
              </div>
              <div className="help-documents-page__desktop-right-container">
                <div className="help-documents-page__desktop-documents-container">
                  <div className="help-documents-page__desktop-documents-header-container">
                    <p className="help-documents-page__desktop-documents-header">
                      Documents
                    </p>
                    <img
                      className="help-documents-page__desktop-documents-icon"
                      src={DocumentsIcon}
                      alt="Documents Icon"
                    />
                  </div>
                  <div className="help-documents-page__desktop-documents-options-container">
                    <p className="help-documents-page__desktop-search-bar-option">
                      <img
                        className="help-documents-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-documents-page__desktop-search-bar-text">
                        Search Bar
                      </span>
                    </p>
                    <p className="help-documents-page__desktop-agreements-option">
                      <img
                        className="help-documents-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-documents-page__desktop-agreements-text">
                        Agreements
                      </span>
                    </p>
                    <p className="help-documents-page__desktop-documents-reports-option">
                      <img
                        className="help-documents-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-documents-page__desktop-reports-text">
                        Reports
                      </span>
                    </p>
                    <p className="help-documents-page__desktop-archive-option">
                      <img
                        className="help-documents-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-documents-page__desktop-archive-text">
                        Archive
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
