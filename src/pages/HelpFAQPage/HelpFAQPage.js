import React from "react";
import "./HelpFAQPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import HelpSidePanel from "../../components/HelpSidePanel/HelpSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import FAQIcon from "../../assets/icons/Help_FAQ.svg";
import PaperIcon from "../../assets/icons/PaperIcon.svg";
import { Link } from "react-router-dom";

export default function HelpFAQPage() {
  return (
    <div className="help-faq-page">
      <HeaderWithProfilePic />
      <div className="help-faq-page__main-container">
        <HelpSidePanel />
        <div className="help-faq-page__right-container">
          <div className="help-faq-page__mobile-container">
            <p className="help-faq-page__mobile-help-center-header">
              Help Center
            </p>
            <img
              className="help-faq-page__mobile-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-faq-page__mobile-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-faq-page__mobile-categories-container">
              <p className="help-faq-page__mobile-categories-header">
                Categories
              </p>
              <div className="help-faq-page__mobile-categories-options-container">
                <div className="help-faq-page__mobile-my-account-ratings-and-feedback-container">
                  <Link
                    className="help-faq-page__mobile-link"
                    to="/help-my-account-page"
                  >
                    <p className="help-faq-page__mobile-my-account-option">
                      My Account
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__mobile-link"
                    to="/help-ratings-and-feedback-page"
                  >
                    <p className="help-faq-page__mobile-ratings-and-feedback-option">
                      Ratings & Feedback
                    </p>
                  </Link>
                </div>
                <div className="help-faq-page__mobile-job-posting-reports-container">
                  <Link
                    className="help-faq-page__mobile-link"
                    to="/help-job-posting-page"
                  >
                    <p className="help-faq-page__mobile-job-posting-option">
                      Job Posting
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__mobile-link"
                    to="/help-reports-page"
                  >
                    <p className="help-faq-page__mobile-reports-option">
                      Reports
                    </p>
                  </Link>
                </div>
                <div className="help-faq-page__mobile-candidate-posting-membership-container">
                  <Link
                    className="help-faq-page__mobile-link"
                    to="/help-candidate-posting-page"
                  >
                    <p className="help-faq-page__mobile-candidate-posting-option">
                      Candidate Posting
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__mobile-link"
                    to="/help-membership-page"
                  >
                    <p className="help-faq-page__mobile-membership-option">
                      Membership
                    </p>
                  </Link>
                </div>
                <div className="help-faq-page__mobile-documents-policies-and-terms-container">
                  <Link
                    className="help-faq-page__mobile-link"
                    to="/help-documents-page"
                  >
                    <p className="help-faq-page__mobile-documents-option">
                      Documents
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__mobile-link"
                    to="/help-policies-and-terms-page"
                  >
                    <p className="help-faq-page__mobile-policies-and-terms-option">
                      Policies & Terms
                    </p>
                  </Link>
                </div>
                <div className="help-faq-page__mobile-partnerships-faq-container">
                  <Link
                    className="help-faq-page__mobile-link"
                    to="/help-partnerships-page"
                  >
                    <p className="help-faq-page__mobile-partnerships-option">
                      Partnerships
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__mobile-link"
                    to="/help-faq-page"
                  >
                    <p className="help-faq-page__mobile-faq-option">FAQ</p>
                  </Link>
                </div>
                <div className="help-faq-page__mobile-dashboard-glossary-container">
                  <Link
                    className="help-faq-page__mobile-link"
                    to="/help-dashboard-page"
                  >
                    <p className="help-faq-page__mobile-dashboard-option">
                      Dashboard
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__mobile-link"
                    to="/help-glossary-page"
                  >
                    <p className="help-faq-page__mobile-glossary-option">
                      Glossary
                    </p>
                  </Link>
                </div>
                <div className="help-faq-page__mobile-searching-container">
                  <Link
                    className="help-faq-page__mobile-link"
                    to="/help-searching-page"
                  >
                    <p className="help-faq-page__mobile-searching-option">
                      Searching
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="help-faq-page__mobile-faq-container">
              <div className="help-faq-page__mobile-faq-header-container">
                <p className="help-faq-page__mobile-faq-header">FAQ</p>
                <img
                  className="help-faq-page__mobile-faq-icon"
                  src={FAQIcon}
                  alt="FAQ Icon"
                />
              </div>
              <div className="help-faq-page__mobile-faq-container-options-container">
                <p className="help-faq-page__mobile-question-1-option">
                  <img
                    className="help-faq-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-faq-page__mobile-question-1-text">
                    Question 1
                  </span>
                </p>
                <p className="help-faq-page__mobile-question-2-option">
                  <img
                    className="help-faq-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-faq-page__mobile-question-2-text">
                    Question 2
                  </span>
                </p>
                <p className="help-faq-page__mobile-question-3-option">
                  <img
                    className="help-faq-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-faq-page__mobile-question-3-text">
                    Question 3
                  </span>
                </p>
                <p className="help-faq-page__mobile-question-4-option">
                  <img
                    className="help-faq-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-faq-page__mobile-question-4-text">
                    Question 4
                  </span>
                </p>
                <p className="help-faq-page__mobile-question-5-option">
                  <img
                    className="help-faq-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-faq-page__mobile-question-5-text">
                    Question 5
                  </span>
                </p>
                <p className="help-faq-page__mobile-question-6-option">
                  <img
                    className="help-faq-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-faq-page__mobile-question-6-text">
                    Question 6
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="help-faq-page__tablet-container">
            <p className="help-faq-page__tablet-help-center-header">
              Help Center
            </p>
            <img
              className="help-faq-page__tablet-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-faq-page__tablet-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-faq-page__tablet-categories-my-account-container">
              <div className="help-faq-page__tablet-categories-container">
                <p className="help-faq-page__tablet-categories-header">
                  Categories
                </p>
                <Link
                  className="help-faq-page__tablet-link"
                  to="/help-my-account-page"
                >
                  <p className="help-faq-page__tablet-my-account-option">
                    My Account
                  </p>
                </Link>
                <Link
                  className="help-faq-page__tablet-link"
                  to="/help-job-posting-page"
                >
                  <p className="help-faq-page__tablet-job-posting-option">
                    Job Posting
                  </p>
                </Link>
                <Link
                  className="help-faq-page__tablet-link"
                  to="/help-candidate-posting-page"
                >
                  <p className="help-faq-page__tablet-candidate-posting-option">
                    Candidate Posting
                  </p>
                </Link>
                <Link
                  className="help-faq-page__tablet-link"
                  to="/help-documents-page"
                >
                  <p className="help-faq-page__tablet-documents-option">
                    Documents
                  </p>
                </Link>
                <Link
                  className="help-faq-page__tablet-link"
                  to="/help-partnerships-page"
                >
                  <p className="help-faq-page__tablet-partnerships-option">
                    Partnerships
                  </p>
                </Link>
                <Link
                  className="help-faq-page__tablet-link"
                  to="/help-dashboard-page"
                >
                  <p className="help-faq-page__tablet-dashboard-option">
                    Dashboard
                  </p>
                </Link>
                <Link
                  className="help-faq-page__tablet-link"
                  to="/help-searching-page"
                >
                  <p className="help-faq-page__tablet-searching-option">
                    Searching
                  </p>
                </Link>
                <Link
                  className="help-faq-page__tablet-link"
                  to="/help-ratings-and-feedback-page"
                >
                  <p className="help-faq-page__tablet-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                </Link>
                <Link
                  className="help-faq-page__tablet-link"
                  to="/help-reports-page"
                >
                  <p className="help-faq-page__tablet-reports-option">
                    Reports
                  </p>
                </Link>
                <Link
                  className="help-faq-page__tablet-link"
                  to="/help-membership-page"
                >
                  <p className="help-faq-page__tablet-membership-option">
                    Membership
                  </p>
                </Link>
                <Link
                  className="help-faq-page__tablet-link"
                  to="/help-policies-and-terms-page"
                >
                  <p className="help-faq-page__tablet-policies-and-terms-option">
                    Policies & Terms
                  </p>
                </Link>
                <Link
                  className="help-faq-page__tablet-link"
                  to="/help-faq-page"
                >
                  <p className="help-faq-page__tablet-faq-option">FAQ</p>
                </Link>
                <Link
                  className="help-faq-page__tablet-link"
                  to="/help-glossary-page"
                >
                  <p className="help-faq-page__tablet-glossary-option">
                    Glossary
                  </p>
                </Link>
              </div>
              <div className="help-faq-page__tablet-faq-container">
                <div className="help-faq-page__tablet-faq-container-header-container">
                  <p className="help-faq-page__tablet-faq-header">FAQ</p>
                  <img
                    className="help-faq-page__tablet-faq-icon"
                    src={FAQIcon}
                    alt="FAQ Icon"
                  />
                </div>
                <div className="help-faq-page__tablet-faq-options-container">
                  <p className="help-faq-page__tablet-question-1-option">
                    <img
                      className="help-faq-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-faq-page__tablet-question-1-text">
                      Question 1
                    </span>
                  </p>
                  <p className="help-faq-page__tablet-question-2-option">
                    <img
                      className="help-faq-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-faq-page__tablet-question-2-text">
                      Question 2
                    </span>
                  </p>
                  <p className="help-faq-page__tablet-question-3-option">
                    <img
                      className="help-faq-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-faq-page__tablet-question-3-text">
                      Question 3
                    </span>
                  </p>
                  <p className="help-faq-page__tablet-question-4-option">
                    <img
                      className="help-faq-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-faq-page__tablet-question-4-text">
                      Question 4
                    </span>
                  </p>
                  <p className="help-faq-page__tablet-question-5-option">
                    <img
                      className="help-faq-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-faq-page__tablet-question-5-text">
                      Question 5
                    </span>
                  </p>
                  <p className="help-faq-page__tablet-question-6-option">
                    <img
                      className="help-faq-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-faq-page__tablet-question-6-text">
                      Question 6
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="help-faq-page__desktop-container">
            <p className="help-faq-page__desktop-help-center-header">
              Help Center
            </p>
            <div className="help-faq-page__desktop-central-container">
              <div className="help-faq-page__desktop-left-container">
                <img
                  className="help-faq-page__desktop-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
                <input
                  className="help-faq-page__desktop-im-looking-for-input"
                  type="text"
                />
                <div className="help-faq-page__desktop-categories-container">
                  <p className="help-faq-page__desktop-categories-header">
                    Categories
                  </p>
                  <Link
                    className="help-faq-page__desktop-link"
                    to="/help-my-account-page"
                  >
                    <p className="help-faq-page__desktop-my-account-option">
                      My Account
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__desktop-link"
                    to="/help-job-posting-page"
                  >
                    <p className="help-faq-page__desktop-job-posting-option">
                      Job Posting
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__desktop-link"
                    to="/help-candidate-posting-page"
                  >
                    <p className="help-faq-page__desktop-candidate-posting-option">
                      Candidate Posting
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__desktop-link"
                    to="/help-documents-page"
                  >
                    <p className="help-faq-page__desktop-documents-option">
                      Documents
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__desktop-link"
                    to="/help-partnerships-page"
                  >
                    <p className="help-faq-page__desktop-partnerships-option">
                      Partnerships
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__desktop-link"
                    to="/help-dashboard-page"
                  >
                    <p className="help-faq-page__desktop-dashboard-option">
                      Dashboard
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__desktop-link"
                    to="/help-searching-page"
                  >
                    <p className="help-faq-page__desktop-searching-option">
                      Searching
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__desktop-link"
                    to="/help-ratings-and-feedback-page"
                  >
                    <p className="help-faq-page__desktop-ratings-and-feedback-option">
                      Ratings & Feedback
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__desktop-link"
                    to="/help-reports-page"
                  >
                    <p className="help-faq-page__desktop-reports-option">
                      Reports
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__desktop-link"
                    to="/help-membership-page"
                  >
                    <p className="help-faq-page__desktop-membership-option">
                      Membership
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__desktop-link"
                    to="/help-policies-and-terms-page"
                  >
                    <p className="help-faq-page__desktop-policies-and-terms-option">
                      Policies & Terms
                    </p>
                  </Link>
                  <Link
                    className="help-faq-page__desktop-link"
                    to="/help-faq-page"
                  >
                    <p className="help-faq-page__desktop-faq-option">FAQ</p>
                  </Link>
                  <Link
                    className="help-faq-page__desktop-link"
                    to="/help-glossary-page"
                  >
                    <p className="help-faq-page__desktop-glossary-option">
                      Glossary
                    </p>
                  </Link>
                </div>
              </div>
              <div className="help-faq-page__desktop-right-container">
                <div className="help-faq-page__desktop-faq-container">
                  <div className="help-faq-page__desktop-faq-header-container">
                    <p className="help-faq-page__desktop-faq-header">FAQ</p>
                    <img
                      className="help-faq-page__desktop-faq-icon"
                      src={FAQIcon}
                      alt="FAQ Icon"
                    />
                  </div>
                  <div className="help-faq-page__desktop-faq-options-container">
                    <p className="help-faq-page__desktop-question-1-option">
                      <img
                        className="help-faq-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-faq-page__desktop-question-1-text">
                        Question 1
                      </span>
                    </p>
                    <p className="help-faq-page__desktop-question-2-option">
                      <img
                        className="help-faq-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-faq-page__desktop-question-2-text">
                        Question 2
                      </span>
                    </p>
                    <p className="help-faq-page__desktop-question-3-option">
                      <img
                        className="help-faq-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-faq-page__desktop-question-3-text">
                        Question 3
                      </span>
                    </p>
                    <p className="help-faq-page__desktop-question-4-option">
                      <img
                        className="help-faq-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-faq-page__desktop-question-4-text">
                        Question 4
                      </span>
                    </p>
                    <p className="help-faq-page__desktop-question-5-option">
                      <img
                        className="help-faq-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-faq-page__desktop-question-5-text">
                        Question 5
                      </span>
                    </p>
                    <p className="help-faq-page__desktop-question-6-option">
                      <img
                        className="help-faq-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-faq-page__desktop-question-6-text">
                        Question 6
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
