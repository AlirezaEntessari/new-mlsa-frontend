import React from "react";
import "./HelpPoliciesAndTermsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import HelpSidePanel from "../../components/HelpSidePanel/HelpSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import PoliciesAndTermsIcon from "../../assets/icons/Help_Policies.svg";
import PaperIcon from "../../assets/icons/PaperIcon.svg";
import { Link } from "react-router-dom";

export default function HelpPoliciesAndTermsPage() {
  return (
    <div className="help-policies-and-terms-page">
      <HeaderWithProfilePic />
      <div className="help-policies-and-terms-page__main-container">
        <HelpSidePanel />
        <div className="help-policies-and-terms-page__right-container">
          <div className="help-policies-and-terms-page__mobile-container">
            <p className="help-policies-and-terms-page__mobile-help-center-header">
              Help Center
            </p>
            <img
              className="help-policies-and-terms-page__mobile-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-policies-and-terms-page__mobile-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-policies-and-terms-page__mobile-categories-container">
              <p className="help-policies-and-terms-page__mobile-categories-header">
                Categories
              </p>
              <div className="help-policies-and-terms-page__mobile-categories-options-container">
                <div className="help-policies-and-terms-page__mobile-my-account-ratings-and-feedback-container">
                  <Link
                    className="help-policies-and-terms-page__mobile-link"
                    to="/help-my-account-page"
                  >
                    <p className="help-policies-and-terms-page__mobile-my-account-option">
                      My Account
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__mobile-link"
                    to="/help-ratings-and-feedback-page"
                  >
                    <p className="help-policies-and-terms-page__mobile-ratings-and-feedback-option">
                      Ratings & Feedback
                    </p>
                  </Link>
                </div>
                <div className="help-policies-and-terms-page__mobile-job-posting-reports-container">
                  <Link
                    className="help-policies-and-terms-page__mobile-link"
                    to="/help-job-posting-page"
                  >
                    <p className="help-policies-and-terms-page__mobile-job-posting-option">
                      Job Posting
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__mobile-link"
                    to="/help-reports-page"
                  >
                    <p className="help-policies-and-terms-page__mobile-reports-option">
                      Reports
                    </p>
                  </Link>
                </div>
                <div className="help-policies-and-terms-page__mobile-candidate-posting-membership-container">
                  <Link
                    className="help-policies-and-terms-page__mobile-link"
                    to="/help-candidate-posting-page"
                  >
                    <p className="help-policies-and-terms-page__mobile-candidate-posting-option">
                      Candidate Posting
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__mobile-link"
                    to="/help-membership-page"
                  >
                    <p className="help-policies-and-terms-page__mobile-membership-option">
                      Membership
                    </p>
                  </Link>
                </div>
                <div className="help-policies-and-terms-page__mobile-documents-policies-and-terms-container">
                  <Link
                    className="help-policies-and-terms-page__mobile-link"
                    to="/help-documents-page"
                  >
                    <p className="help-policies-and-terms-page__mobile-documents-option">
                      Documents
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__mobile-link"
                    to="/help-policies-and-terms-page"
                  >
                    <p className="help-policies-and-terms-page__mobile-policies-and-terms-option">
                      Policies & Terms
                    </p>
                  </Link>
                </div>
                <div className="help-policies-and-terms-page__mobile-partnerships-faq-container">
                  <Link
                    className="help-policies-and-terms-page__mobile-link"
                    to="/help-partnerships-page"
                  >
                    <p className="help-policies-and-terms-page__mobile-partnerships-option">
                      Partnerships
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__mobile-link"
                    to="/help-faq-page"
                  >
                    <p className="help-policies-and-terms-page__mobile-faq-option">
                      FAQ
                    </p>
                  </Link>
                </div>
                <div className="help-policies-and-terms-page__mobile-dashboard-glossary-container">
                  <Link
                    className="help-policies-and-terms-page__mobile-link"
                    to="/help-dashboard-page"
                  >
                    <p className="help-policies-and-terms-page__mobile-dashboard-option">
                      Dashboard
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__mobile-link"
                    to="/help-glossary-page"
                  >
                    <p className="help-policies-and-terms-page__mobile-glossary-option">
                      Glossary
                    </p>
                  </Link>
                </div>
                <div className="help-policies-and-terms-page__mobile-searching-container">
                  <Link
                    className="help-policies-and-terms-page__mobile-link"
                    to="/help-searching-page"
                  >
                    <p className="help-policies-and-terms-page__mobile-searching-option">
                      Searching
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="help-policies-and-terms-page__mobile-policies-and-terms-container">
              <div className="help-policies-and-terms-page__mobile-policies-and-terms-header-container">
                <p className="help-policies-and-terms-page__mobile-policies-and-terms-header">
                  Policies & Terms
                </p>
                <img
                  className="help-policies-and-terms-page__mobile-policies-and-terms-icon"
                  src={PoliciesAndTermsIcon}
                  alt="Policies and Terms Icon"
                />
              </div>
              <div className="help-policies-and-terms-page__mobile-policies-and-terms-container-options-container">
                <p className="help-policies-and-terms-page__mobile-terms-of-service-overview-option">
                  <img
                    className="help-policies-and-terms-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-policies-and-terms-page__mobile-terms-of-service-overview-text">
                    Terms of Service
                  </span>
                </p>
                <p className="help-policies-and-terms-page__mobile-privacy-policy-option">
                  <img
                    className="help-policies-and-terms-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-policies-and-terms-page__mobile-privacy-policy-text">
                    Privacy Policy
                  </span>
                </p>
                <p className="help-policies-and-terms-page__mobile-user-agreement-option">
                  <img
                    className="help-policies-and-terms-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-policies-and-terms-page__mobile-user-agreement-text">
                    User Agreement
                  </span>
                </p>
                <p className="help-policies-and-terms-page__mobile-guarantee-period-option">
                  <img
                    className="help-policies-and-terms-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-policies-and-terms-page__mobile-guarantee-period-text">
                    Guarantee Period
                  </span>
                </p>
                <p className="help-policies-and-terms-page__mobile-cancellation-policy-option">
                  <img
                    className="help-policies-and-terms-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-policies-and-terms-page__mobile-cancellation-policy-text">
                    Cancellation Policy
                  </span>
                </p>
                <p className="help-policies-and-terms-page__mobile-refund-policy-option">
                  <img
                    className="help-policies-and-terms-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-policies-and-terms-page__mobile-refund-policy-text">
                    Refund Policy
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="help-policies-and-terms-page__tablet-container">
            <p className="help-policies-and-terms-page__tablet-help-center-header">
              Help Center
            </p>
            <img
              className="help-policies-and-terms-page__tablet-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-policies-and-terms-page__tablet-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-policies-and-terms-page__tablet-categories-my-account-container">
              <div className="help-policies-and-terms-page__tablet-categories-container">
                <p className="help-policies-and-terms-page__tablet-categories-header">
                  Categories
                </p>
                <Link
                  className="help-policies-and-terms-page__tablet-link"
                  to="/help-my-account-page"
                >
                  <p className="help-policies-and-terms-page__tablet-my-account-option">
                    My Account
                  </p>
                </Link>
                <Link
                  className="help-policies-and-terms-page__tablet-link"
                  to="/help-job-posting-page"
                >
                  <p className="help-policies-and-terms-page__tablet-job-posting-option">
                    Job Posting
                  </p>
                </Link>
                <Link
                  className="help-policies-and-terms-page__tablet-link"
                  to="/help-candidate-posting-page"
                >
                  <p className="help-policies-and-terms-page__tablet-candidate-posting-option">
                    Candidate Posting
                  </p>
                </Link>
                <Link
                  className="help-policies-and-terms-page__tablet-link"
                  to="/help-documents-page"
                >
                  <p className="help-policies-and-terms-page__tablet-documents-option">
                    Documents
                  </p>
                </Link>
                <Link
                  className="help-policies-and-terms-page__tablet-link"
                  to="/help-partnerships-page"
                >
                  <p className="help-policies-and-terms-page__tablet-partnerships-option">
                    Partnerships
                  </p>
                </Link>
                <Link
                  className="help-policies-and-terms-page__tablet-link"
                  to="/help-dashboard-page"
                >
                  <p className="help-policies-and-terms-page__tablet-dashboard-option">
                    Dashboard
                  </p>
                </Link>
                <Link
                  className="help-policies-and-terms-page__tablet-link"
                  to="/help-searching-page"
                >
                  <p className="help-policies-and-terms-page__tablet-searching-option">
                    Searching
                  </p>
                </Link>
                <Link
                  className="help-policies-and-terms-page__tablet-link"
                  to="/help-ratings-and-feedback-page"
                >
                  <p className="help-policies-and-terms-page__tablet-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                </Link>
                <Link
                  className="help-policies-and-terms-page__tablet-link"
                  to="/help-reports-page"
                >
                  <p className="help-policies-and-terms-page__tablet-reports-option">
                    Reports
                  </p>
                </Link>
                <Link
                  className="help-policies-and-terms-page__tablet-link"
                  to="/help-membership-page"
                >
                  <p className="help-policies-and-terms-page__tablet-membership-option">
                    Membership
                  </p>
                </Link>
                <Link
                  className="help-policies-and-terms-page__tablet-link"
                  to="/help-policies-and-terms-page"
                >
                  <p className="help-policies-and-terms-page__tablet-policies-and-terms-option">
                    Policies & Terms
                  </p>
                </Link>
                <Link
                  className="help-policies-and-terms-page__tablet-link"
                  to="/help-faq-page"
                >
                  <p className="help-policies-and-terms-page__tablet-faq-option">
                    FAQ
                  </p>
                </Link>
                <Link
                  className="help-policies-and-terms-page__tablet-link"
                  to="/help-glossary-page"
                >
                  <p className="help-policies-and-terms-page__tablet-glossary-option">
                    Glossary
                  </p>
                </Link>
              </div>
              <div className="help-policies-and-terms-page__tablet-policies-and-terms-container">
                <div className="help-policies-and-terms-page__tablet-policies-and-terms-container-header-container">
                  <p className="help-policies-and-terms-page__tablet-policies-and-terms-header">
                    Policies & Terms
                  </p>
                  <img
                    className="help-policies-and-terms-page__tablet-policies-and-terms-icon"
                    src={PoliciesAndTermsIcon}
                    alt="Policies and Terms Icon"
                  />
                </div>
                <div className="help-policies-and-terms-page__tablet-policies-and-terms-options-container">
                  <p className="help-policies-and-terms-page__tablet-terms-of-service-option">
                    <img
                      className="help-policies-and-terms-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-policies-and-terms-page__tablet-terms-of-service-text">
                      Terms of Service
                    </span>
                  </p>
                  <p className="help-policies-and-terms-page__tablet-privacy-policy-option">
                    <img
                      className="help-policies-and-terms-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-policies-and-terms-page__tablet-privacy-policy-text">
                      Privacy Policy
                    </span>
                  </p>
                  <p className="help-policies-and-terms-page__tablet-user-agreement-option">
                    <img
                      className="help-policies-and-terms-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-policies-and-terms-page__tablet-user-agreement-text">
                      User Agreement
                    </span>
                  </p>
                  <p className="help-policies-and-terms-page__tablet-guarantee-period-option">
                    <img
                      className="help-policies-and-terms-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-policies-and-terms-page__tablet-guarantee-period-text">
                      Guarantee Period
                    </span>
                  </p>
                  <p className="help-policies-and-terms-page__tablet-cancellation-policy-option">
                    <img
                      className="help-policies-and-terms-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-policies-and-terms-page__tablet-cancellation-policy-text">
                      Cancellation Policy
                    </span>
                  </p>
                  <p className="help-policies-and-terms-page__tablet-refund-policy-option">
                    <img
                      className="help-policies-and-terms-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-policies-and-terms-page__tablet-refund-policy-text">
                      Refund Policy
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="help-policies-and-terms-page__desktop-container">
            <p className="help-policies-and-terms-page__desktop-help-center-header">
              Help Center
            </p>
            <div className="help-policies-and-terms-page__desktop-central-container">
              <div className="help-policies-and-terms-page__desktop-left-container">
                <img
                  className="help-policies-and-terms-page__desktop-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
                <input
                  className="help-policies-and-terms-page__desktop-im-looking-for-input"
                  type="text"
                />
                <div className="help-policies-and-terms-page__desktop-categories-container">
                  <p className="help-policies-and-terms-page__desktop-categories-header">
                    Categories
                  </p>
                  <Link
                    className="help-policies-and-terms-page__desktop-link"
                    to="/help-my-account-page"
                  >
                    <p className="help-policies-and-terms-page__desktop-my-account-option">
                      My Account
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__desktop-link"
                    to="/help-job-posting-page"
                  >
                    <p className="help-policies-and-terms-page__desktop-job-posting-option">
                      Job Posting
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__desktop-link"
                    to="/help-candidate-posting-page"
                  >
                    <p className="help-policies-and-terms-page__desktop-candidate-posting-option">
                      Candidate Posting
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__desktop-link"
                    to="/help-documents-page"
                  >
                    <p className="help-policies-and-terms-page__desktop-documents-option">
                      Documents
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__desktop-link"
                    to="/help-partnerships-page"
                  >
                    <p className="help-policies-and-terms-page__desktop-partnerships-option">
                      Partnerships
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__desktop-link"
                    to="/help-dashboard-page"
                  >
                    <p className="help-policies-and-terms-page__desktop-dashboard-option">
                      Dashboard
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__desktop-link"
                    to="/help-searching-page"
                  >
                    <p className="help-policies-and-terms-page__desktop-searching-option">
                      Searching
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__desktop-link"
                    to="/help-ratings-and-feedback-page"
                  >
                    <p className="help-policies-and-terms-page__desktop-ratings-and-feedback-option">
                      Ratings & Feedback
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__desktop-link"
                    to="/help-reports-page"
                  >
                    <p className="help-policies-and-terms-page__desktop-reports-option">
                      Reports
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__desktop-link"
                    to="/help-membership-page"
                  >
                    <p className="help-policies-and-terms-page__desktop-membership-option">
                      Membership
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__desktop-link"
                    to="/help-policies-and-terms-page"
                  >
                    <p className="help-policies-and-terms-page__desktop-policies-and-terms-option">
                      Policies & Terms
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__desktop-link"
                    to="/help-faq-page"
                  >
                    <p className="help-policies-and-terms-page__desktop-faq-option">
                      FAQ
                    </p>
                  </Link>
                  <Link
                    className="help-policies-and-terms-page__desktop-link"
                    to="/help-glossary-page"
                  >
                    <p className="help-policies-and-terms-page__desktop-glossary-option">
                      Glossary
                    </p>
                  </Link>
                </div>
              </div>
              <div className="help-policies-and-terms-page__desktop-right-container">
                <div className="help-policies-and-terms-page__desktop-policies-and-terms-container">
                  <div className="help-policies-and-terms-page__desktop-policies-and-terms-header-container">
                    <p className="help-policies-and-terms-page__desktop-policies-and-terms-header">
                      Policies & Terms
                    </p>
                    <img
                      className="help-policies-and-terms-page__desktop-policies-and-terms-icon"
                      src={PoliciesAndTermsIcon}
                      alt="Policies and Terms Icon"
                    />
                  </div>
                  <div className="help-policies-and-terms-page__desktop-policies-and-terms-options-container">
                    <p className="help-policies-and-terms-page__desktop-terms-of-service-option">
                      <img
                        className="help-policies-and-terms-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-policies-and-terms-page__desktop-terms-of-service-text">
                        Terms of Service
                      </span>
                    </p>
                    <p className="help-policies-and-terms-page__desktop-privacy-policy-option">
                      <img
                        className="help-policies-and-terms-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-policies-and-terms-page__desktop-privacy-policy-text">
                        Privacy Policy
                      </span>
                    </p>
                    <p className="help-policies-and-terms-page__desktop-user-agreement-option">
                      <img
                        className="help-policies-and-terms-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-policies-and-terms-page__desktop-user-agreement-text">
                        User Agreement
                      </span>
                    </p>
                    <p className="help-policies-and-terms-page__desktop-guarantee-period-option">
                      <img
                        className="help-policies-and-terms-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-policies-and-terms-page__desktop-guarantee-period-text">
                        Guarantee Period
                      </span>
                    </p>
                    <p className="help-policies-and-terms-page__desktop-cancellation-policy-option">
                      <img
                        className="help-policies-and-terms-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-policies-and-terms-page__desktop-cancellation-policy-text">
                        Cancellation Policy
                      </span>
                    </p>
                    <p className="help-policies-and-terms-page__desktop-refund-policy-option">
                      <img
                        className="help-policies-and-terms-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-policies-and-terms-page__desktop-refund-policy-text">
                        Refund Policy
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
