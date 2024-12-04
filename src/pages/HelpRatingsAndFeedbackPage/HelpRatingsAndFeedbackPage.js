import React from "react";
import "./HelpRatingsAndFeedbackPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import HelpSidePanel from "../../components/HelpSidePanel/HelpSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import RatingsAndFeedbackIcon from "../../assets/icons/Help_Ratings.svg";
import PaperIcon from "../../assets/icons/PaperIcon.svg";
import { Link } from "react-router-dom";

export default function HelpRatingsAndFeedbackPage() {
  return (
    <div className="help-ratings-and-feedback-page">
      <HeaderWithProfilePic />
      <div className="help-ratings-and-feedback-page__main-container">
        <HelpSidePanel />
        <div className="help-ratings-and-feedback-page__right-container">
          <div className="help-ratings-and-feedback-page__mobile-container">
            <p className="help-ratings-and-feedback-page__mobile-help-center-header">
              Help Center
            </p>
            <img
              className="help-ratings-and-feedback-page__mobile-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-ratings-and-feedback-page__mobile-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-ratings-and-feedback-page__mobile-categories-container">
              <p className="help-ratings-and-feedback-page__mobile-categories-header">
                Categories
              </p>
              <div className="help-ratings-and-feedback-page__mobile-categories-options-container">
                <div className="help-ratings-and-feedback-page__mobile-my-account-ratings-and-feedback-container">
                  <Link
                    className="help-ratings-and-feedback-page__mobile-link"
                    to="/help-my-account-page"
                  >
                    <p className="help-ratings-and-feedback-page__mobile-my-account-option">
                      My Account
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__mobile-link"
                    to="/help-ratings-and-feedback-page"
                  >
                    <p className="help-ratings-and-feedback-page__mobile-ratings-and-feedback-option">
                      Ratings & Feedback
                    </p>
                  </Link>
                </div>
                <div className="help-ratings-and-feedback-page__mobile-job-posting-reports-container">
                  <Link
                    className="help-ratings-and-feedback-page__mobile-link"
                    to="/help-job-posting-page"
                  >
                    <p className="help-ratings-and-feedback-page__mobile-job-posting-option">
                      Job Posting
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__mobile-link"
                    to="/help-reports-page"
                  >
                    <p className="help-ratings-and-feedback-page__mobile-reports-option">
                      Reports
                    </p>
                  </Link>
                </div>
                <div className="help-ratings-and-feedback-page__mobile-candidate-posting-membership-container">
                  <Link
                    className="help-ratings-and-feedback-page__mobile-link"
                    to="/help-candidate-posting-page"
                  >
                    <p className="help-ratings-and-feedback-page__mobile-candidate-posting-option">
                      Candidate Posting
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__mobile-link"
                    to="/help-membership-page"
                  >
                    <p className="help-ratings-and-feedback-page__mobile-membership-option">
                      Membership
                    </p>
                  </Link>
                </div>
                <div className="help-ratings-and-feedback-page__mobile-documents-policies-and-terms-container">
                  <Link
                    className="help-ratings-and-feedback-page__mobile-link"
                    to="/help-documents-page"
                  >
                    <p className="help-ratings-and-feedback-page__mobile-documents-option">
                      Documents
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__mobile-link"
                    to="/help-policies-and-terms-page"
                  >
                    <p className="help-ratings-and-feedback-page__mobile-policies-and-terms-option">
                      Policies & Terms
                    </p>
                  </Link>
                </div>
                <div className="help-ratings-and-feedback-page__mobile-partnerships-faq-container">
                  <Link
                    className="help-ratings-and-feedback-page__mobile-link"
                    to="/help-partnerships-page"
                  >
                    <p className="help-ratings-and-feedback-page__mobile-partnerships-option">
                      Partnerships
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__mobile-link"
                    to="/help-faq-page"
                  >
                    <p className="help-ratings-and-feedback-page__mobile-faq-option">
                      FAQ
                    </p>
                  </Link>
                </div>
                <div className="help-ratings-and-feedback-page__mobile-dashboard-glossary-container">
                  <Link
                    className="help-ratings-and-feedback-page__mobile-link"
                    to="/help-dashboard-page"
                  >
                    <p className="help-ratings-and-feedback-page__mobile-dashboard-option">
                      Dashboard
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__mobile-link"
                    to="/help-glossary-page"
                  >
                    <p className="help-ratings-and-feedback-page__mobile-glossary-option">
                      Glossary
                    </p>
                  </Link>
                </div>
                <div className="help-ratings-and-feedback-page__mobile-searching-container">
                  <p className="help-ratings-and-feedback-page__mobile-searching-option">
                    Searching
                  </p>
                </div>
              </div>
            </div>
            <div className="help-ratings-and-feedback-page__mobile-ratings-and-feedback-container">
              <div className="help-ratings-and-feedback-page__mobile-ratings-and-feedback-header-container">
                <p className="help-ratings-and-feedback-page__mobile-ratings-and-feedback-header">
                  Ratings & Feedback
                </p>
                <img
                  className="help-ratings-and-feedback-page__mobile-ratings-and-feedback-icon"
                  src={RatingsAndFeedbackIcon}
                  alt="Ratings and Feedback Icon"
                />
              </div>
              <div className="help-ratings-and-feedback-page__mobile-ratings-and-feedback-container-options-container">
                <p className="help-ratings-and-feedback-page__mobile-ratings-overview-option">
                  <img
                    className="help-ratings-and-feedback-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-ratings-and-feedback-page__mobile-ratings-overview-text">
                    Ratings Overview
                  </span>
                </p>
                <p className="help-ratings-and-feedback-page__mobile-feedback-overview-option">
                  <img
                    className="help-ratings-and-feedback-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-ratings-and-feedback-page__mobile-feedback-overview-text">
                    Feedback Overview
                  </span>
                </p>
                <p className="help-ratings-and-feedback-page__mobile-my-ratings-option">
                  <img
                    className="help-ratings-and-feedback-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-ratings-and-feedback-page__mobile-my-ratings-text">
                    My Ratings
                  </span>
                </p>
                <p className="help-ratings-and-feedback-page__mobile-writing-feedback-option">
                  <img
                    className="help-ratings-and-feedback-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-ratings-and-feedback-page__mobile-writing-feedback-text">
                    Writing Feedback
                  </span>
                </p>
                <p className="help-ratings-and-feedback-page__mobile-my-feedback-option">
                  <img
                    className="help-ratings-and-feedback-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-ratings-and-feedback-page__mobile-my-feedback-text">
                    My Feedback
                  </span>
                </p>
                <p className="help-ratings-and-feedback-page__mobile-responding-to-feedback-option">
                  <img
                    className="help-ratings-and-feedback-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-ratings-and-feedback-page__mobile-responding-to-feedback-text">
                    Responding to Feedback
                  </span>
                </p>
                <p className="help-ratings-and-feedback-page__mobile-negative-ratings-and-feedback-option">
                  <img
                    className="help-ratings-and-feedback-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-ratings-and-feedback-page__mobile-negative-ratings-and-feedback-text">
                    Negative Ratings & Feedback
                  </span>
                </p>
                <p className="help-ratings-and-feedback-page__mobile-disputes-option">
                  <img
                    className="help-ratings-and-feedback-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-ratings-and-feedback-page__mobile-disputes-text">
                    Disputes
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="help-ratings-and-feedback-page__tablet-container">
            <p className="help-ratings-and-feedback-page__tablet-help-center-header">
              Help Center
            </p>
            <img
              className="help-ratings-and-feedback-page__tablet-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-ratings-and-feedback-page__tablet-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-ratings-and-feedback-page__tablet-categories-my-account-container">
              <div className="help-ratings-and-feedback-page__tablet-categories-container">
                <p className="help-ratings-and-feedback-page__tablet-categories-header">
                  Categories
                </p>
                <Link
                  className="help-ratings-and-feedback-page__tablet-link"
                  to="/help-my-account-page"
                >
                  <p className="help-ratings-and-feedback-page__tablet-my-account-option">
                    My Account
                  </p>
                </Link>
                <Link
                  className="help-ratings-and-feedback-page__tablet-link"
                  to="/help-job-posting-page"
                >
                  <p className="help-ratings-and-feedback-page__tablet-job-posting-option">
                    Job Posting
                  </p>
                </Link>
                <Link
                  className="help-ratings-and-feedback-page__tablet-link"
                  to="/help-candidate-posting-page"
                >
                  <p className="help-ratings-and-feedback-page__tablet-candidate-posting-option">
                    Candidate Posting
                  </p>
                </Link>
                <Link
                  className="help-ratings-and-feedback-page__tablet-link"
                  to="/help-documents-page"
                >
                  <p className="help-ratings-and-feedback-page__tablet-documents-option">
                    Documents
                  </p>
                </Link>
                <Link
                  className="help-ratings-and-feedback-page__tablet-link"
                  to="/help-partnerships-page"
                >
                  <p className="help-ratings-and-feedback-page__tablet-partnerships-option">
                    Partnerships
                  </p>
                </Link>
                <Link
                  className="help-ratings-and-feedback-page__tablet-link"
                  to="/help-dashboard-page"
                >
                  <p className="help-ratings-and-feedback-page__tablet-dashboard-option">
                    Dashboard
                  </p>
                </Link>
                <Link
                  className="help-ratings-and-feedback-page__tablet-link"
                  to="/help-searching-page"
                >
                  <p className="help-ratings-and-feedback-page__tablet-searching-option">
                    Searching
                  </p>
                </Link>
                <Link
                  className="help-ratings-and-feedback-page__tablet-link"
                  to="/help-ratings-and-feedback-page"
                >
                  <p className="help-ratings-and-feedback-page__tablet-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                </Link>
                <Link
                  className="help-ratings-and-feedback-page__tablet-link"
                  to="/help-reports-page"
                >
                  <p className="help-ratings-and-feedback-page__tablet-reports-option">
                    Reports
                  </p>
                </Link>
                <Link
                  className="help-ratings-and-feedback-page__tablet-link"
                  to="/help-membership-page"
                >
                  <p className="help-ratings-and-feedback-page__tablet-membership-option">
                    Membership
                  </p>
                </Link>
                <Link
                  className="help-ratings-and-feedback-page__tablet-link"
                  to="/help-policies-and-terms-page"
                >
                  <p className="help-ratings-and-feedback-page__tablet-policies-and-terms-option">
                    Policies & Terms
                  </p>
                </Link>
                <Link
                  className="help-ratings-and-feedback-page__tablet-link"
                  to="/help-faq-page"
                >
                  <p className="help-ratings-and-feedback-page__tablet-faq-option">
                    FAQ
                  </p>
                </Link>
                <Link
                  className="help-ratings-and-feedback-page__tablet-link"
                  to="/help-glossary-page"
                >
                  <p className="help-ratings-and-feedback-page__tablet-glossary-option">
                    Glossary
                  </p>
                </Link>
              </div>
              <div className="help-ratings-and-feedback-page__tablet-ratings-and-feedback-container">
                <div className="help-ratings-and-feedback-page__tablet-ratings-and-feedback-container-header-container">
                  <p className="help-ratings-and-feedback-page__tablet-ratings-and-feedback-header">
                    Ratings & Feedback
                  </p>
                  <img
                    className="help-ratings-and-feedback-page__tablet-ratings-and-feedback-icon"
                    src={RatingsAndFeedbackIcon}
                    alt="Ratings and Feedback Icon"
                  />
                </div>
                <div className="help-ratings-and-feedback-page__tablet-ratings-and-feedback-options-container">
                  <p className="help-ratings-and-feedback-page__tablet-ratings-overview-option">
                    <img
                      className="help-ratings-and-feedback-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-ratings-and-feedback-page__tablet-ratings-overview-text">
                      Ratings Overview
                    </span>
                  </p>
                  <p className="help-ratings-and-feedback-page__tablet-feedback-overview-option">
                    <img
                      className="help-ratings-and-feedback-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-ratings-and-feedback-page__tablet-feedback-overview-text">
                      Feedback Overview
                    </span>
                  </p>
                  <p className="help-ratings-and-feedback-page__tablet-my-ratings-option">
                    <img
                      className="help-ratings-and-feedback-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-ratings-and-feedback-page__tablet-my-ratings-text">
                      My Ratings
                    </span>
                  </p>
                  <p className="help-ratings-and-feedback-page__tablet-writing-feedback-option">
                    <img
                      className="help-ratings-and-feedback-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-ratings-and-feedback-page__tablet-writing-feedback-text">
                      Writing Feedback
                    </span>
                  </p>
                  <p className="help-ratings-and-feedback-page__tablet-my-feedback-option">
                    <img
                      className="help-ratings-and-feedback-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-ratings-and-feedback-page__tablet-my-feedback-text">
                      My Feedback
                    </span>
                  </p>
                  <p className="help-ratings-and-feedback-page__tablet-responding-to-feedback-option">
                    <img
                      className="help-ratings-and-feedback-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-ratings-and-feedback-page__tablet-responding-to-feedback-text">
                      Responding to Feedback
                    </span>
                  </p>
                  <p className="help-ratings-and-feedback-page__tablet-negative-ratings-and-feedback-option">
                    <img
                      className="help-ratings-and-feedback-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-ratings-and-feedback-page__tablet-negative-ratings-and-feedback-text">
                      Negative Ratings & Feedback
                    </span>
                  </p>
                  <p className="help-ratings-and-feedback-page__tablet-disputes-option">
                    <img
                      className="help-ratings-and-feedback-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-ratings-and-feedback-page__tablet-disputes-text">
                      Disputes
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="help-ratings-and-feedback-page__desktop-container">
            <p className="help-ratings-and-feedback-page__desktop-help-center-header">
              Help Center
            </p>
            <div className="help-ratings-and-feedback-page__desktop-central-container">
              <div className="help-ratings-and-feedback-page__desktop-left-container">
                <img
                  className="help-ratings-and-feedback-page__desktop-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
                <input
                  className="help-ratings-and-feedback-page__desktop-im-looking-for-input"
                  type="text"
                />
                <div className="help-ratings-and-feedback-page__desktop-categories-container">
                  <p className="help-ratings-and-feedback-page__desktop-categories-header">
                    Categories
                  </p>
                  <Link
                    className="help-ratings-and-feedback-page__desktop-link"
                    to="/help-my-account-page"
                  >
                    <p className="help-ratings-and-feedback-page__desktop-my-account-option">
                      My Account
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__desktop-link"
                    to="/help-job-posting-page"
                  >
                    <p className="help-ratings-and-feedback-page__desktop-job-posting-option">
                      Job Posting
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__desktop-link"
                    to="/help-candidate-posting-page"
                  >
                    <p className="help-ratings-and-feedback-page__desktop-candidate-posting-option">
                      Candidate Posting
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__desktop-link"
                    to="/help-documents-page"
                  >
                    <p className="help-ratings-and-feedback-page__desktop-documents-option">
                      Documents
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__desktop-link"
                    to="/help-partnerships-page"
                  >
                    <p className="help-ratings-and-feedback-page__desktop-partnerships-option">
                      Partnerships
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__desktop-link"
                    to="/help-dashboard-page"
                  >
                    <p className="help-ratings-and-feedback-page__desktop-dashboard-option">
                      Dashboard
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__desktop-link"
                    to="/help-searching-page"
                  >
                    <p className="help-ratings-and-feedback-page__desktop-searching-option">
                      Searching
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__desktop-link"
                    to="/help-ratings-and-feedback-page"
                  >
                    <p className="help-ratings-and-feedback-page__desktop-ratings-and-feedback-option">
                      Ratings & Feedback
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__desktop-link"
                    to="/help-reports-page"
                  >
                    <p className="help-ratings-and-feedback-page__desktop-reports-option">
                      Reports
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__desktop-link"
                    to="/help-membership-page"
                  >
                    <p className="help-ratings-and-feedback-page__desktop-membership-option">
                      Membership
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__desktop-link"
                    to="/help-policies-and-terms-page"
                  >
                    <p className="help-ratings-and-feedback-page__desktop-policies-and-terms-option">
                      Policies & Terms
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__desktop-link"
                    to="/help-faq-page"
                  >
                    <p className="help-ratings-and-feedback-page__desktop-faq-option">
                      FAQ
                    </p>
                  </Link>
                  <Link
                    className="help-ratings-and-feedback-page__desktop-link"
                    to="/help-glossary-page"
                  >
                    <p className="help-ratings-and-feedback-page__desktop-glossary-option">
                      Glossary
                    </p>
                  </Link>
                </div>
              </div>
              <div className="help-ratings-and-feedback-page__desktop-right-container">
                <div className="help-ratings-and-feedback-page__desktop-ratings-and-feedback-container">
                  <div className="help-ratings-and-feedback-page__desktop-ratings-and-feedback-header-container">
                    <p className="help-ratings-and-feedback-page__desktop-ratings-and-feedback-header">
                      Ratings & Feedback
                    </p>
                    <img
                      className="help-ratings-and-feedback-page__desktop-ratings-and-feedback-icon"
                      src={RatingsAndFeedbackIcon}
                      alt="Ratings and Feedback Icon"
                    />
                  </div>
                  <div className="help-ratings-and-feedback-page__desktop-ratings-and-feedback-options-container">
                    <p className="help-ratings-and-feedback-page__desktop-ratings-overview-option">
                      <img
                        className="help-ratings-and-feedback-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-ratings-and-feedback-page__desktop-ratings-overview-text">
                        Ratings Overview
                      </span>
                    </p>
                    <p className="help-ratings-and-feedback-page__desktop-feedback-overview-option">
                      <img
                        className="help-ratings-and-feedback-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-ratings-and-feedback-page__desktop-feedback-overview-text">
                        Feedback Overview
                      </span>
                    </p>
                    <p className="help-ratings-and-feedback-page__desktop-my-ratings-option">
                      <img
                        className="help-ratings-and-feedback-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-ratings-and-feedback-page__desktop-my-ratings-text">
                        My Ratings
                      </span>
                    </p>
                    <p className="help-ratings-and-feedback-page__desktop-writing-feedback-option">
                      <img
                        className="help-ratings-and-feedback-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-ratings-and-feedback-page__desktop-writing-feedback-text">
                        Writing Feedback
                      </span>
                    </p>
                    <p className="help-ratings-and-feedback-page__desktop-my-feedback-option">
                      <img
                        className="help-ratings-and-feedback-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-ratings-and-feedback-page__desktop-my-feedback-text">
                        My Feedback
                      </span>
                    </p>
                    <p className="help-ratings-and-feedback-page__desktop-responding-to-feedback-option">
                      <img
                        className="help-ratings-and-feedback-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-ratings-and-feedback-page__desktop-responding-to-feedback-text">
                        Responding to Feedback
                      </span>
                    </p>
                    <p className="help-ratings-and-feedback-page__desktop-negative-ratings-and-feedback-option">
                      <img
                        className="help-ratings-and-feedback-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-ratings-and-feedback-page__desktop-negative-ratings-and-feedback-text">
                        Negative Ratings & Feedback
                      </span>
                    </p>
                    <p className="help-ratings-and-feedback-page__desktop-disputes-option">
                      <img
                        className="help-ratings-and-feedback-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-ratings-and-feedback-page__desktop-disputes-text">
                        Disputes
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
