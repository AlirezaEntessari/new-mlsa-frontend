import React from "react";
import "./HelpMembershipPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import HelpSidePanel from "../../components/HelpSidePanel/HelpSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import MembershipIcon from "../../assets/icons/Help_Membership.svg";
import PaperIcon from "../../assets/icons/PaperIcon.svg";

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
                  <p className="help-membership-page__mobile-my-account-option">
                    My Account
                  </p>
                  <p className="help-membership-page__mobile-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                </div>
                <div className="help-membership-page__mobile-job-posting-reports-container">
                  <p className="help-membership-page__mobile-job-posting-option">
                    Job Posting
                  </p>
                  <p className="help-membership-page__mobile-reports-option">
                    Reports
                  </p>
                </div>
                <div className="help-membership-page__mobile-candidate-posting-membership-container">
                  <p className="help-membership-page__mobile-candidate-posting-option">
                    Candidate Posting
                  </p>
                  <p className="help-membership-page__mobile-membership-option">
                    Membership
                  </p>
                </div>
                <div className="help-membership-page__mobile-documents-policies-and-terms-container">
                  <p className="help-membership-page__mobile-documents-option">
                    Documents
                  </p>
                  <p className="help-membership-page__mobile-policies-and-terms-option">
                    Policies & Terms
                  </p>
                </div>
                <div className="help-membership-page__mobile-partnerships-faq-container">
                  <p className="help-membership-page__mobile-partnerships-option">
                    Partnerships
                  </p>
                  <p className="help-membership-page__mobile-faq-option">FAQ</p>
                </div>
                <div className="help-membership-page__mobile-dashboard-glossary-container">
                  <p className="help-membership-page__mobile-dashboard-option">
                    Dashboard
                  </p>
                  <p className="help-membership-page__mobile-glossary-option">
                    Glossary
                  </p>
                </div>
                <div className="help-membership-page__mobile-searching-container">
                  <p className="help-membership-page__mobile-searching-option">
                    Searching
                  </p>
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
                <p className="help-membership-page__tablet-my-account-option">
                  My Account
                </p>
                <p className="help-membership-page__tablet-job-posting-option">
                  Job Posting
                </p>
                <p className="help-membership-page__tablet-candidate-posting-option">
                  Candidate Posting
                </p>
                <p className="help-membership-page__tablet-documents-option">
                  Documents
                </p>
                <p className="help-membership-page__tablet-partnerships-option">
                  Partnerships
                </p>
                <p className="help-membership-page__tablet-dashboard-option">
                  Dashboard
                </p>
                <p className="help-membership-page__tablet-searching-option">
                  Searching
                </p>
                <p className="help-membership-page__tablet-ratings-and-feedback-option">
                  Ratings & Feedback
                </p>
                <p className="help-membership-page__tablet-reports-option">
                  Reports
                </p>
                <p className="help-membership-page__tablet-membership-option">
                  Membership
                </p>
                <p className="help-membership-page__tablet-policies-and-terms-option">
                  Policies & Terms
                </p>
                <p className="help-membership-page__tablet-faq-option">FAQ</p>
                <p className="help-membership-page__tablet-glossary-option">
                  Glossary
                </p>
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
                  <p className="help-membership-page__desktop-my-account-option">
                    My Account
                  </p>
                  <p className="help-membership-page__desktop-job-posting-option">
                    Job Posting
                  </p>
                  <p className="help-membership-page__desktop-candidate-posting-option">
                    Candidate Posting
                  </p>
                  <p className="help-membership-page__desktop-documents-option">
                    Documents
                  </p>
                  <p className="help-membership-page__desktop-partnerships-option">
                    Partnerships
                  </p>
                  <p className="help-membership-page__desktop-dashboard-option">
                    Dashboard
                  </p>
                  <p className="help-membership-page__desktop-searching-option">
                    Searching
                  </p>
                  <p className="help-membership-page__desktop-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                  <p className="help-membership-page__desktop-reports-option">
                    Reports
                  </p>
                  <p className="help-membership-page__desktop-membership-option">
                    Membership
                  </p>
                  <p className="help-membership-page__desktop-policies-and-terms-option">
                    Policies & Terms
                  </p>
                  <p className="help-membership-page__desktop-faq-option">
                    FAQ
                  </p>
                  <p className="help-membership-page__desktop-glossary-option">
                    Glossary
                  </p>
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
