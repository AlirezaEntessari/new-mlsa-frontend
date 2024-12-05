import React from "react";
import "./HelpMembershipPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import HelpSidePanel from "../../components/HelpSidePanel/HelpSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import MembershipIcon from "../../assets/icons/Help_Membership.svg";
import PaperIcon from "../../assets/icons/PaperIcon.svg";
import { Link } from "react-router-dom";

export default function HelpMembershipPage() {
  return (
    <div className="help-membership-page">
      <HeaderWithProfilePic />
      <div className="help-membership-page__main-container">
        <HelpSidePanel />
        <div className="help-membership-page__right-container">
          <div className="help-membership-page__mobile-container">
            <p className="help-membership-page__mobile-help-center-header">
              Help Center
            </p>
            <img
              className="help-membership-page__mobile-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-membership-page__mobile-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-membership-page__mobile-categories-container">
              <p className="help-membership-page__mobile-categories-header">
                Categories
              </p>
              <div className="help-membership-page__mobile-categories-options-container">
                <div className="help-membership-page__mobile-my-account-ratings-and-feedback-container">
                  <Link
                    className="help-membership-page__mobile-link"
                    to="/help-my-account-page"
                  >
                    <p className="help-membership-page__mobile-my-account-option">
                      My Account
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__mobile-link"
                    to="/help-ratings-and-feedback-page"
                  >
                    <p className="help-membership-page__mobile-ratings-and-feedback-option">
                      Ratings & Feedback
                    </p>
                  </Link>
                </div>
                <div className="help-membership-page__mobile-job-posting-reports-container">
                  <Link
                    className="help-membership-page__mobile-link"
                    to="/help-job-posting-page"
                  >
                    <p className="help-membership-page__mobile-job-posting-option">
                      Job Posting
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__mobile-link"
                    to="/help-reports-page"
                  >
                    <p className="help-membership-page__mobile-reports-option">
                      Reports
                    </p>
                  </Link>
                </div>
                <div className="help-membership-page__mobile-candidate-posting-membership-container">
                  <Link
                    className="help-membership-page__mobile-link"
                    to="/help-candidate-posting-page"
                  >
                    <p className="help-membership-page__mobile-candidate-posting-option">
                      Candidate Posting
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__mobile-link"
                    to="/help-membership-page"
                  >
                    <p className="help-membership-page__mobile-membership-option">
                      Membership
                    </p>
                  </Link>
                </div>
                <div className="help-membership-page__mobile-documents-policies-and-terms-container">
                  <Link
                    className="help-membership-page__mobile-link"
                    to="/help-documents-page"
                  >
                    <p className="help-membership-page__mobile-documents-option">
                      Documents
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__mobile-link"
                    to="/help-policies-and-terms-page"
                  >
                    <p className="help-membership-page__mobile-policies-and-terms-option">
                      Policies & Terms
                    </p>
                  </Link>
                </div>
                <div className="help-membership-page__mobile-partnerships-faq-container">
                  <Link
                    className="help-membership-page__mobile-link"
                    to="/help-partnerships-page"
                  >
                    <p className="help-membership-page__mobile-partnerships-option">
                      Partnerships
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__mobile-link"
                    to="/help-faq-page"
                  >
                    <p className="help-membership-page__mobile-faq-option">
                      FAQ
                    </p>
                  </Link>
                </div>
                <div className="help-membership-page__mobile-dashboard-glossary-container">
                  <Link
                    className="help-membership-page__mobile-link"
                    to="/help-dashboard-page"
                  >
                    <p className="help-membership-page__mobile-dashboard-option">
                      Dashboard
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__mobile-link"
                    to="/help-glossary-page"
                  >
                    <p className="help-membership-page__mobile-glossary-option">
                      Glossary
                    </p>
                  </Link>
                </div>
                <div className="help-membership-page__mobile-searching-container">
                  <Link
                    className="help-membership-page__mobile-link"
                    to="/help-searching-page"
                  >
                    <p className="help-membership-page__mobile-searching-option">
                      Searching
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="help-membership-page__mobile-membership-container">
              <div className="help-membership-page__mobile-membership-header-container">
                <p className="help-membership-page__mobile-membership-header">
                  Membership
                </p>
                <img
                  className="help-membership-page__mobile-membership-icon"
                  src={MembershipIcon}
                  alt="Membership Icon"
                />
              </div>
              <div className="help-membership-page__mobile-membership-container-options-container">
                <p className="help-membership-page__mobile-plan-overview-option">
                  <img
                    className="help-membership-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-membership-page__mobile-plan-overview-text">
                    Plan Overview
                  </span>
                </p>
                <p className="help-membership-page__mobile-referral-credits-option">
                  <img
                    className="help-membership-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-membership-page__mobile-referral-credits-text">
                    Referral Credits
                  </span>
                </p>
                <p className="help-membership-page__mobile-billing-option">
                  <img
                    className="help-membership-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-membership-page__mobile-billing-text">
                    Billing
                  </span>
                </p>
                <p className="help-membership-page__mobile-membership-options-option">
                  <img
                    className="help-membership-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-membership-page__mobile-membership-options-text">
                    Membership Options
                  </span>
                </p>
                <p className="help-membership-page__mobile-changing-membership-option">
                  <img
                    className="help-membership-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-membership-page__mobile-changing-membership-text">
                    Changing Membership
                  </span>
                </p>
                <p className="help-membership-page__mobile-canceling-membership-option">
                  <img
                    className="help-membership-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-membership-page__mobile-canceling-membership-text">
                    Canceling Membership
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="help-membership-page__tablet-container">
            <p className="help-membership-page__tablet-help-center-header">
              Help Center
            </p>
            <img
              className="help-membership-page__tablet-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-membership-page__tablet-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-membership-page__tablet-categories-my-account-container">
              <div className="help-membership-page__tablet-categories-container">
                <p className="help-membership-page__tablet-categories-header">
                  Categories
                </p>
                <Link
                  className="help-membership-page__tablet-link"
                  to="/help-my-account-page"
                >
                  <p className="help-membership-page__tablet-my-account-option">
                    My Account
                  </p>
                </Link>
                <Link
                  className="help-membership-page__tablet-link"
                  to="/help-job-posting-page"
                >
                  <p className="help-membership-page__tablet-job-posting-option">
                    Job Posting
                  </p>
                </Link>
                <Link
                  className="help-membership-page__tablet-link"
                  to="/help-candidate-posting-page"
                >
                  <p className="help-membership-page__tablet-candidate-posting-option">
                    Candidate Posting
                  </p>
                </Link>
                <Link
                  className="help-membership-page__tablet-link"
                  to="/help-documents-page"
                >
                  <p className="help-membership-page__tablet-documents-option">
                    Documents
                  </p>
                </Link>
                <Link
                  className="help-membership-page__tablet-link"
                  to="/help-partnerships-page"
                >
                  <p className="help-membership-page__tablet-partnerships-option">
                    Partnerships
                  </p>
                </Link>
                <Link
                  className="help-membership-page__tablet-link"
                  to="/help-dashboard-page"
                >
                  <p className="help-membership-page__tablet-dashboard-option">
                    Dashboard
                  </p>
                </Link>
                <Link
                  className="help-membership-page__tablet-link"
                  to="/help-searching-page"
                >
                  <p className="help-membership-page__tablet-searching-option">
                    Searching
                  </p>
                </Link>
                <Link
                  className="help-membership-page__tablet-link"
                  to="/help-ratings-and-feedback-page"
                >
                  <p className="help-membership-page__tablet-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                </Link>
                <Link
                  className="help-membership-page__tablet-link"
                  to="/help-reports-page"
                >
                  <p className="help-membership-page__tablet-reports-option">
                    Reports
                  </p>
                </Link>
                <Link
                  className="help-membership-page__tablet-link"
                  to="/help-membership-page"
                >
                  <p className="help-membership-page__tablet-membership-option">
                    Membership
                  </p>
                </Link>
                <Link
                  className="help-membership-page__tablet-link"
                  to="/help-policies-and-terms-page"
                >
                  <p className="help-membership-page__tablet-policies-and-terms-option">
                    Policies & Terms
                  </p>
                </Link>
                <Link
                  className="help-membership-page__tablet-link"
                  to="/help-faq-page"
                >
                  <p className="help-membership-page__tablet-faq-option">FAQ</p>
                </Link>
                <Link
                  className="help-membership-page__tablet-link"
                  to="/help-glossary-page"
                >
                  <p className="help-membership-page__tablet-glossary-option">
                    Glossary
                  </p>
                </Link>
              </div>
              <div className="help-membership-page__tablet-membership-container">
                <div className="help-membership-page__tablet-membership-container-header-container">
                  <p className="help-membership-page__tablet-membership-header">
                    Membership
                  </p>
                  <img
                    className="help-membership-page__tablet-membership-icon"
                    src={MembershipIcon}
                    alt="Membership Icon"
                  />
                </div>
                <div className="help-membership-page__tablet-membership-options-container">
                  <p className="help-membership-page__tablet-plan-overview-option">
                    <img
                      className="help-membership-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-membership-page__tablet-plan-overview-text">
                      Plan Overview
                    </span>
                  </p>
                  <p className="help-membership-page__tablet-referral-credits-option">
                    <img
                      className="help-membership-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-membership-page__tablet-referral-credits-text">
                      Referral Credits
                    </span>
                  </p>
                  <p className="help-membership-page__tablet-billing-option">
                    <img
                      className="help-membership-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-membership-page__tablet-billing-text">
                      Billing
                    </span>
                  </p>
                  <p className="help-membership-page__tablet-membership-options-option">
                    <img
                      className="help-membership-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-membership-page__tablet-membership-options-text">
                      Membership Options
                    </span>
                  </p>
                  <p className="help-membership-page__tablet-changing-membership-option">
                    <img
                      className="help-membership-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-membership-page__tablet-changing-membership-text">
                      Changing Membership
                    </span>
                  </p>
                  <p className="help-membership-page__tablet-canceling-membership-option">
                    <img
                      className="help-membership-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-membership-page__tablet-canceling-membership-text">
                      Canceling Membership
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="help-membership-page__desktop-container">
            <p className="help-membership-page__desktop-help-center-header">
              Help Center
            </p>
            <div className="help-membership-page__desktop-central-container">
              <div className="help-membership-page__desktop-left-container">
                <img
                  className="help-membership-page__desktop-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
                <input
                  className="help-membership-page__desktop-im-looking-for-input"
                  type="text"
                />
                <div className="help-membership-page__desktop-categories-container">
                  <p className="help-membership-page__desktop-categories-header">
                    Categories
                  </p>
                  <Link
                    className="help-membership-page__desktop-link"
                    to="/help-my-account-page"
                  >
                    <p className="help-membership-page__desktop-my-account-option">
                      My Account
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__desktop-link"
                    to="/help-job-posting-page"
                  >
                    <p className="help-membership-page__desktop-job-posting-option">
                      Job Posting
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__desktop-link"
                    to="/help-candidate-posting-page"
                  >
                    <p className="help-membership-page__desktop-candidate-posting-option">
                      Candidate Posting
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__desktop-link"
                    to="/help-documents-page"
                  >
                    <p className="help-membership-page__desktop-documents-option">
                      Documents
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__desktop-link"
                    to="/help-partnerships-page"
                  >
                    <p className="help-membership-page__desktop-partnerships-option">
                      Partnerships
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__desktop-link"
                    to="/help-dashboard-page"
                  >
                    <p className="help-membership-page__desktop-dashboard-option">
                      Dashboard
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__desktop-link"
                    to="/help-searching-page"
                  >
                    <p className="help-membership-page__desktop-searching-option">
                      Searching
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__desktop-link"
                    to="/help-ratings-and-feedback-page"
                  >
                    <p className="help-membership-page__desktop-ratings-and-feedback-option">
                      Ratings & Feedback
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__desktop-link"
                    to="/help-reports-page"
                  >
                    <p className="help-membership-page__desktop-reports-option">
                      Reports
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__desktop-link"
                    to="/help-membership-page"
                  >
                    <p className="help-membership-page__desktop-membership-option">
                      Membership
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__desktop-link"
                    to="/help-policies-and-terms-page"
                  >
                    <p className="help-membership-page__desktop-policies-and-terms-option">
                      Policies & Terms
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__desktop-link"
                    to="/help-faq-page"
                  >
                    <p className="help-membership-page__desktop-faq-option">
                      FAQ
                    </p>
                  </Link>
                  <Link
                    className="help-membership-page__desktop-link"
                    to="/help-glossary-page"
                  >
                    <p className="help-membership-page__desktop-glossary-option">
                      Glossary
                    </p>
                  </Link>
                </div>
              </div>
              <div className="help-membership-page__desktop-right-container">
                <div className="help-membership-page__desktop-membership-container">
                  <div className="help-membership-page__desktop-membership-header-container">
                    <p className="help-membership-page__desktop-membership-header">
                      Membership
                    </p>
                    <img
                      className="help-membership-page__desktop-membership-icon"
                      src={MembershipIcon}
                      alt="Membership Icon"
                    />
                  </div>
                  <div className="help-membership-page__desktop-membership-options-container">
                    <p className="help-membership-page__desktop-plan-overview-option">
                      <img
                        className="help-membership-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-membership-page__desktop-plan-overview-text">
                        Plan Overview
                      </span>
                    </p>
                    <p className="help-membership-page__desktop-referral-credits-option">
                      <img
                        className="help-membership-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-membership-page__desktop-referral-credits-text">
                        Referral Credits
                      </span>
                    </p>
                    <p className="help-membership-page__desktop-billing-option">
                      <img
                        className="help-membership-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-membership-page__desktop-billing-text">
                        Billing
                      </span>
                    </p>
                    <p className="help-membership-page__desktop-membership-options-option">
                      <img
                        className="help-membership-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-membership-page__desktop-membership-options-text">
                        Membership Options
                      </span>
                    </p>
                    <p className="help-membership-page__desktop-changing-membership-option">
                      <img
                        className="help-membership-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-membership-page__desktop-changing-membership-text">
                        Changing Membership
                      </span>
                    </p>
                    <p className="help-membership-page__desktop-canceling-membership-option">
                      <img
                        className="help-membership-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-membership-page__desktop-canceling-membership-text">
                        Canceling Membership
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
