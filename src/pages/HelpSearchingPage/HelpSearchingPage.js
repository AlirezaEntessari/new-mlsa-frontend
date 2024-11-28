import React from "react";
import "./HelpSearchingPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import HelpSidePanel from "../../components/HelpSidePanel/HelpSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import SearchingIcon from "../../assets/icons/Help_Searching.svg";
import PaperIcon from "../../assets/icons/PaperIcon.svg";

export default function HelpSearchingPage() {
  return (
    <div className="help-searching-page">
      <HeaderWithProfilePic />
      <div className="help-searching-page__main-container">
        <HelpSidePanel />
        <div className="help-searching-page__right-container">
          <div className="help-searching-page__mobile-container">
            <p className="help-searching-page__mobile-help-center-header">
              Help Center
            </p>
            <img
              className="help-searching-page__mobile-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-searching-page__mobile-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-searching-page__mobile-categories-container">
              <p className="help-searching-page__mobile-categories-header">
                Categories
              </p>
              <div className="help-searching-page__mobile-categories-options-container">
                <div className="help-searching-page__mobile-my-account-ratings-and-feedback-container">
                  <p className="help-searching-page__mobile-my-account-option">
                    My Account
                  </p>
                  <p className="help-searching-page__mobile-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                </div>
                <div className="help-searching-page__mobile-job-posting-reports-container">
                  <p className="help-searching-page__mobile-job-posting-option">
                    Job Posting
                  </p>
                  <p className="help-searching-page__mobile-reports-option">
                    Reports
                  </p>
                </div>
                <div className="help-searching-page__mobile-candidate-posting-membership-container">
                  <p className="help-searching-page__mobile-candidate-posting-option">
                    Candidate Posting
                  </p>
                  <p className="help-searching-page__mobile-membership-option">
                    Membership
                  </p>
                </div>
                <div className="help-searching-page__mobile-documents-policies-and-terms-container">
                  <p className="help-searching-page__mobile-documents-option">
                    Documents
                  </p>
                  <p className="help-searching-page__mobile-policies-and-terms-option">
                    Policies & Terms
                  </p>
                </div>
                <div className="help-searching-page__mobile-partnerships-faq-container">
                  <p className="help-searching-page__mobile-partnerships-option">
                    Partnerships
                  </p>
                  <p className="help-searching-page__mobile-faq-option">FAQ</p>
                </div>
                <div className="help-searching-page__mobile-dashboard-glossary-container">
                  <p className="help-searching-page__mobile-dashboard-option">
                    Dashboard
                  </p>
                  <p className="help-searching-page__mobile-glossary-option">
                    Glossary
                  </p>
                </div>
                <div className="help-searching-page__mobile-searching-container">
                  <p className="help-searching-page__mobile-searching-option">
                    Searching
                  </p>
                </div>
              </div>
            </div>
            <div className="help-searching-page__mobile-searching-central-container">
              <div className="help-searching-page__mobile-searching-header-container">
                <p className="help-searching-page__mobile-searching-header">
                  Searching
                </p>
                <img
                  className="help-searching-page__mobile-searching-icon"
                  src={SearchingIcon}
                  alt="Searching Icon"
                />
              </div>
              <div className="help-searching-page__mobile-searching-container-options-container">
                <p className="help-searching-page__mobile-searching-overview-option">
                  <img
                    className="help-searching-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-searching-page__mobile-searching-overview-text">
                    Searching Overview
                  </span>
                </p>
                <p className="help-searching-page__mobile-view-saved-searches-option">
                  <img
                    className="help-searching-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-searching-page__mobile-view-saved-searches-text">
                    View Saved Searches
                  </span>
                </p>
                <p className="help-searching-page__mobile-search-jobs-option">
                  <img
                    className="help-searching-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-searching-page__mobile-search-jobs-text">
                    Search Jobs
                  </span>
                </p>
                <p className="help-searching-page__mobile-search-candidates-option">
                  <img
                    className="help-searching-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-searching-page__mobile-search-candidates-text">
                    Search Candidates
                  </span>
                </p>
                <p className="help-searching-page__mobile-search-agencies-option">
                  <img
                    className="help-searching-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-searching-page__mobile-search-agencies-text">
                    Search Agencies
                  </span>
                </p>
                <p className="help-searching-page__mobile-view-all-member-agencies-option">
                  <img
                    className="help-searching-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-searching-page__mobile-view-all-member-agencies-text">
                    View all Member Agencies
                  </span>
                </p>
                <p className="help-searching-page__mobile-view-all-active-jobs-option">
                  <img
                    className="help-searching-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-searching-page__mobile-view-all-active-jobs-text">
                    View all Active Jobs
                  </span>
                </p>
                <p className="help-searching-page__mobile-view-all-active-candidates-option">
                  <img
                    className="help-searching-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-searching-page__mobile-view-all-active-candidates-text">
                    View all Active Candidates
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="help-searching-page__tablet-container">
            <p className="help-searching-page__tablet-help-center-header">
              Help Center
            </p>
            <img
              className="help-searching-page__tablet-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-searching-page__tablet-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-searching-page__tablet-categories-my-account-container">
              <div className="help-searching-page__tablet-categories-container">
                <p className="help-searching-page__tablet-categories-header">
                  Categories
                </p>
                <p className="help-searching-page__tablet-my-account-option">
                  My Account
                </p>
                <p className="help-searching-page__tablet-job-posting-option">
                  Job Posting
                </p>
                <p className="help-searching-page__tablet-candidate-posting-option">
                  Candidate Posting
                </p>
                <p className="help-searching-page__tablet-documents-option">
                  Documents
                </p>
                <p className="help-searching-page__tablet-partnerships-option">
                  Partnerships
                </p>
                <p className="help-searching-page__tablet-dashboard-option">
                  Dashboard
                </p>
                <p className="help-searching-page__tablet-searching-option">
                  Searching
                </p>
                <p className="help-searching-page__tablet-ratings-and-feedback-option">
                  Ratings & Feedback
                </p>
                <p className="help-searching-page__tablet-reports-option">
                  Reports
                </p>
                <p className="help-searching-page__tablet-membership-option">
                  Membership
                </p>
                <p className="help-searching-page__tablet-policies-and-terms-option">
                  Policies & Terms
                </p>
                <p className="help-searching-page__tablet-faq-option">FAQ</p>
                <p className="help-searching-page__tablet-glossary-option">
                  Glossary
                </p>
              </div>
              <div className="help-searching-page__tablet-searching-container">
                <div className="help-searching-page__tablet-searching-container-header-container">
                  <p className="help-searching-page__tablet-searching-header">
                    Searching
                  </p>
                  <img
                    className="help-searching-page__tablet-searching-icon"
                    src={SearchingIcon}
                    alt="Searching Icon"
                  />
                </div>
                <div className="help-searching-page__tablet-searching-options-container">
                  <p className="help-searching-page__tablet-searching-overview-option">
                    <img
                      className="help-searching-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-searching-page__tablet-searching-overview-text">
                      Searching Overview
                    </span>
                  </p>
                  <p className="help-searching-page__tablet-view-saved-searches-option">
                    <img
                      className="help-searching-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-searching-page__tablet-view-saved-searches-text">
                      View Saved Searches
                    </span>
                  </p>
                  <p className="help-searching-page__tablet-search-jobs-option">
                    <img
                      className="help-searching-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-searching-page__tablet-search-jobs-text">
                      Search Jobs
                    </span>
                  </p>
                  <p className="help-searching-page__tablet-search-candidates-option">
                    <img
                      className="help-searching-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-searching-page__tablet-search-candidates-text">
                      Search Candidates
                    </span>
                  </p>
                  <p className="help-searching-page__tablet-search-agencies-option">
                    <img
                      className="help-searching-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-searching-page__tablet-search-agencies-text">
                      Search Agencies
                    </span>
                  </p>
                  <p className="help-searching-page__tablet-view-all-member-agencies-option">
                    <img
                      className="help-searching-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-searching-page__tablet-view-all-member-agencies-text">
                      View all Member Agencies
                    </span>
                  </p>
                  <p className="help-searching-page__tablet-view-all-active-jobs-option">
                    <img
                      className="help-searching-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-searching-page__tablet-view-all-active-jobs-text">
                      View all Active Jobs
                    </span>
                  </p>
                  <p className="help-searching-page__tablet-view-all-active-candidates-option">
                    <img
                      className="help-searching-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-searching-page__tablet-view-all-active-candidates-text">
                      View all Active Candidates
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="help-searching-page__desktop-container">
            <p className="help-searching-page__desktop-help-center-header">
              Help Center
            </p>
            <div className="help-searching-page__desktop-central-container">
              <div className="help-searching-page__desktop-left-container">
                <img
                  className="help-searching-page__desktop-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
                <input
                  className="help-searching-page__desktop-im-looking-for-input"
                  type="text"
                />
                <div className="help-searching-page__desktop-categories-container">
                  <p className="help-searching-page__desktop-categories-header">
                    Categories
                  </p>
                  <p className="help-searching-page__desktop-my-account-option">
                    My Account
                  </p>
                  <p className="help-searching-page__desktop-job-posting-option">
                    Job Posting
                  </p>
                  <p className="help-searching-page__desktop-candidate-posting-option">
                    Candidate Posting
                  </p>
                  <p className="help-searching-page__desktop-documents-option">
                    Documents
                  </p>
                  <p className="help-searching-page__desktop-partnerships-option">
                    Partnerships
                  </p>
                  <p className="help-searching-page__desktop-dashboard-option">
                    Dashboard
                  </p>
                  <p className="help-searching-page__desktop-searching-option">
                    Searching
                  </p>
                  <p className="help-searching-page__desktop-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                  <p className="help-searching-page__desktop-reports-option">
                    Reports
                  </p>
                  <p className="help-searching-page__desktop-membership-option">
                    Membership
                  </p>
                  <p className="help-searching-page__desktop-policies-and-terms-option">
                    Policies & Terms
                  </p>
                  <p className="help-searching-page__desktop-faq-option">FAQ</p>
                  <p className="help-searching-page__desktop-glossary-option">
                    Glossary
                  </p>
                </div>
              </div>
              <div className="help-searching-page__desktop-right-container">
                <div className="help-searching-page__desktop-searching-container">
                  <div className="help-searching-page__desktop-searching-header-container">
                    <p className="help-searching-page__desktop-searching-header">
                      My Account
                    </p>
                    <img
                      className="help-searching-page__desktop-searching-icon"
                      src={SearchingIcon}
                      alt="My Account Icon"
                    />
                  </div>
                  <div className="help-searching-page__desktop-searching-options-container">
                    <p className="help-searching-page__desktop-searching-overview-option">
                      <img
                        className="help-searching-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-searching-page__desktop-searching-overview-text">
                        Searching Overview
                      </span>
                    </p>
                    <p className="help-searching-page__desktop-view-saved-searches-option">
                      <img
                        className="help-searching-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-searching-page__desktop-view-saved-searches-text">
                        View Saved Searches
                      </span>
                    </p>
                    <p className="help-searching-page__desktop-search-jobs-option">
                      <img
                        className="help-searching-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-searching-page__desktop-search-jobs-text">
                        Search Jobs
                      </span>
                    </p>
                    <p className="help-searching-page__desktop-search-candidates-option">
                      <img
                        className="help-searching-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-searching-page__desktop-search-candidates-text">
                        Search Candidates
                      </span>
                    </p>
                    <p className="help-searching-page__desktop-search-agencies-option">
                      <img
                        className="help-searching-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-searching-page__desktop-search-agencies-text">
                        Search Agencies
                      </span>
                    </p>
                    <p className="help-searching-page__desktop-view-all-member-agencies-option">
                      <img
                        className="help-searching-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-searching-page__desktop-view-all-member-agencies-text">
                        View all Member Agencies
                      </span>
                    </p>
                    <p className="help-searching-page__desktop-view-all-active-jobs-option">
                      <img
                        className="help-searching-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-searching-page__desktop-view-all-active-jobs-text">
                        View all Active Jobs
                      </span>
                    </p>
                    <p className="help-searching-page__desktop-view-all-active-candidates-option">
                      <img
                        className="help-searching-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-searching-page__desktop-view-all-active-candidates-text">
                        View all Active Candidates
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
