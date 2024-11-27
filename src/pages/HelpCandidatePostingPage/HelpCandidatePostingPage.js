import React from "react";
import "./HelpCandidatePostingPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import HelpSidePanel from "../../components/HelpSidePanel/HelpSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import CandidatePostingIcon from "../../assets/icons/Help_CandidatePosting.svg";
import PaperIcon from "../../assets/icons/PaperIcon.svg";

export default function HelpCandidatePostingPage() {
  return (
    <div className="help-candidate-posting-page">
      <HeaderWithProfilePic />
      <div className="help-candidate-posting-page__main-container">
        <HelpSidePanel />
        <div className="help-candidate-posting-page__right-container">
          <div className="help-candidate-posting-page__mobile-container">
            <p className="help-candidate-posting-page__mobile-help-center-header">
              Help Center
            </p>
            <img
              className="help-candidate-posting-page__mobile-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-candidate-posting-page__mobile-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-candidate-posting-page__mobile-categories-container">
              <p className="help-candidate-posting-page__mobile-categories-header">
                Categories
              </p>
              <div className="help-candidate-posting-page__mobile-categories-options-container">
                <div className="help-candidate-posting-page__mobile-my-account-ratings-and-feedback-container">
                  <p className="help-candidate-posting-page__mobile-my-account-option">
                    My Account
                  </p>
                  <p className="help-candidate-posting-page__mobile-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                </div>
                <div className="help-candidate-posting-page__mobile-job-posting-reports-container">
                  <p className="help-candidate-posting-page__mobile-job-posting-option">
                    Job Posting
                  </p>
                  <p className="help-candidate-posting-page__mobile-reports-option">
                    Reports
                  </p>
                </div>
                <div className="help-candidate-posting-page__mobile-candidate-posting-membership-container">
                  <p className="help-candidate-posting-page__mobile-candidate-posting-option">
                    Candidate Posting
                  </p>
                  <p className="help-candidate-posting-page__mobile-membership-option">
                    Membership
                  </p>
                </div>
                <div className="help-candidate-posting-page__mobile-documents-policies-and-terms-container">
                  <p className="help-candidate-posting-page__mobile-documents-option">
                    Documents
                  </p>
                  <p className="help-candidate-posting-page__mobile-policies-and-terms-option">
                    Policies & Terms
                  </p>
                </div>
                <div className="help-candidate-posting-page__mobile-partnerships-faq-container">
                  <p className="help-candidate-posting-page__mobile-partnerships-option">
                    Partnerships
                  </p>
                  <p className="help-candidate-posting-page__mobile-faq-option">
                    FAQ
                  </p>
                </div>
                <div className="help-candidate-posting-page__mobile-dashboard-glossary-container">
                  <p className="help-candidate-posting-page__mobile-dashboard-option">
                    Dashboard
                  </p>
                  <p className="help-candidate-posting-page__mobile-glossary-option">
                    Glossary
                  </p>
                </div>
                <div className="help-candidate-posting-page__mobile-searching-container">
                  <p className="help-candidate-posting-page__mobile-searching-option">
                    Searching
                  </p>
                </div>
              </div>
            </div>
            <div className="help-candidate-posting-page__mobile-candidate-posting-container">
              <div className="help-candidate-posting-page__mobile-candidate-posting-header-container">
                <p className="help-candidate-posting-page__mobile-candidate-posting-header">
                  Candidate Posting
                </p>
                <img
                  className="help-candidate-posting-page__mobile-candidate-posting-icon"
                  src={CandidatePostingIcon}
                  alt="Candidate Posting Icon"
                />
              </div>
              <div className="help-candidate-posting-page__mobile-candidate-posting-container-options-container">
                <p className="help-candidate-posting-page__mobile-candidates-overview-option">
                  <img
                    className="help-candidate-posting-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-candidate-posting-page__mobile-my-candidates-overview-text">
                    My Candidates Overview
                  </span>
                </p>
                <p className="help-candidate-posting-page__mobile-post-a-candidate-option">
                  <img
                    className="help-candidate-posting-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-candidate-posting-page__mobile-post-a-candidate-text">
                    Post a Candidate
                  </span>
                </p>
                <p className="help-candidate-posting-page__mobile-save-and-view-drafts-option">
                  <img
                    className="help-candidate-posting-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-candidate-posting-page__mobile-save-and-view-drafts-text">
                    Save and View Drafts
                  </span>
                </p>
                <p className="help-candidate-posting-page__mobile-edit-candidate-option">
                  <img
                    className="help-candidate-posting-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-candidate-posting-page__mobile-edit-candidate-text">
                    Edit Candidate
                  </span>
                </p>
                <p className="help-candidate-posting-page__mobile-archive-option">
                  <img
                    className="help-candidate-posting-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-candidate-posting-page__mobile-archive-text">
                    Archive
                  </span>
                </p>
                <p className="help-candidate-posting-page__mobile-batch-upload-option">
                  <img
                    className="help-candidate-posting-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-candidate-posting-page__mobile-batch-upload-text">
                    Batch Upload
                  </span>
                </p>
                <p className="help-candidate-posting-page__mobile-candidate-activity-option">
                  <img
                    className="help-candidate-posting-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-candidate-posting-page__mobile-candidate-activity-text">
                    Candidate Activity
                  </span>
                </p>
                <p className="help-candidate-posting-page__mobile-hot-candidates-option">
                  <img
                    className="help-candidate-posting-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-candidate-posting-page__mobile-hot-candidates-text">
                    Hot Candidates
                  </span>
                </p>
                <p className="help-candidate-posting-page__mobile-run-report-option">
                  <img
                    className="help-candidate-posting-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-candidate-posting-page__mobile-run-report-text">
                    Run Report
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="help-candidate-posting-page__tablet-container">
            <p className="help-candidate-posting-page__tablet-help-center-header">
              Help Center
            </p>
            <img
              className="help-candidate-posting-page__tablet-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-candidate-posting-page__tablet-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-candidate-posting-page__tablet-categories-my-account-container">
              <div className="help-candidate-posting-page__tablet-categories-container">
                <p className="help-candidate-posting-page__tablet-categories-header">
                  Categories
                </p>
                <p className="help-candidate-posting-page__tablet-my-account-option">
                  My Account
                </p>
                <p className="help-candidate-posting-page__tablet-job-posting-option">
                  Job Posting
                </p>
                <p className="help-candidate-posting-page__tablet-candidate-posting-option">
                  Candidate Posting
                </p>
                <p className="help-candidate-posting-page__tablet-documents-option">
                  Documents
                </p>
                <p className="help-candidate-posting-page__tablet-partnerships-option">
                  Partnerships
                </p>
                <p className="help-candidate-posting-page__tablet-dashboard-option">
                  Dashboard
                </p>
                <p className="help-candidate-posting-page__tablet-searching-option">
                  Searching
                </p>
                <p className="help-candidate-posting-page__tablet-ratings-and-feedback-option">
                  Ratings & Feedback
                </p>
                <p className="help-candidate-posting-page__tablet-reports-option">
                  Reports
                </p>
                <p className="help-candidate-posting-page__tablet-membership-option">
                  Membership
                </p>
                <p className="help-candidate-posting-page__tablet-policies-and-terms-option">
                  Policies & Terms
                </p>
                <p className="help-candidate-posting-page__tablet-faq-option">
                  FAQ
                </p>
                <p className="help-candidate-posting-page__tablet-glossary-option">
                  Glossary
                </p>
              </div>
              <div className="help-candidate-posting-page__tablet-candidate-posting-container">
                <div className="help-candidate-posting-page__tablet-candidate-posting-container-header-container">
                  <p className="help-candidate-posting-page__tablet-candidate-posting-header">
                    Candidate Posting
                  </p>
                  <img
                    className="help-candidate-posting-page__tablet-candidate-posting-icon"
                    src={CandidatePostingIcon}
                    alt="Candidate Posting"
                  />
                </div>
                <div className="help-candidate-posting-page__tablet-candidate-posting-options-container">
                  <p className="help-candidate-posting-page__tablet-my-candidates-overview-option">
                    <img
                      className="help-candidate-posting-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-candidate-posting-page__tablet-my-candidates-overview-text">
                      My Candidates Overview
                    </span>
                  </p>
                  <p className="help-candidate-posting-page__tablet-post-a-candidate-option">
                    <img
                      className="help-candidate-posting-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-candidate-posting-page__tablet-post-a-candidate-text">
                      Post a Candidate
                    </span>
                  </p>
                  <p className="help-candidate-posting-page__tablet-save-and-view-drafts-option">
                    <img
                      className="help-candidate-posting-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-candidate-posting-page__tablet-save-and-view-drafts-text">
                      Save and View Drafts
                    </span>
                  </p>
                  <p className="help-candidate-posting-page__tablet-edit-candidate-option">
                    <img
                      className="help-candidate-posting-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <p className="help-candidate-posting-page__tablet-edit-candidate-text">
                      Edit Candidate
                    </p>
                  </p>
                  <p className="help-candidate-posting-page__tablet-archive-option">
                    <img
                      className="help-candidate-posting-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-candidate-posting-page__tablet-archive-text">
                      Archive
                    </span>
                  </p>
                  <p className="help-candidate-posting-page__tablet-batch-upload-option">
                    <img
                      className="help-candidate-posting-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-candidate-posting-page__tablet-batch-upload-text">
                      Batch Upload
                    </span>
                  </p>
                  <p className="help-candidate-posting-page__tablet-candidate-activity-option">
                    <img
                      className="help-candidate-posting-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-candidate-posting-page__tablet-candidate-activity-text">
                      Candidate Activity
                    </span>
                  </p>
                  <p className="help-candidate-posting-page__tablet-hot-candidates-option">
                    <img
                      className="help-candidate-posting-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-candidate-posting-page__tablet-hot-candidates-text">
                      Hot Candidates
                    </span>
                  </p>
                  <p className="help-candidate-posting-page__tablet-run-report-option">
                    <img
                      className="help-candidate-posting-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-candidate-posting-page__tablet-run-report-text">
                      Run Report
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="help-candidate-posting-page__desktop-container">
            <p className="help-candidate-posting-page__desktop-help-center-header">
              Help Center
            </p>
            <div className="help-candidate-posting-page__desktop-central-container">
              <div className="help-candidate-posting-page__desktop-left-container">
                <img
                  className="help-candidate-posting-page__desktop-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
                <input
                  className="help-candidate-posting-page__desktop-im-looking-for-input"
                  type="text"
                />
                <div className="help-candidate-posting-page__desktop-categories-container">
                  <p className="help-candidate-posting-page__desktop-categories-header">
                    Categories
                  </p>
                  <p className="help-candidate-posting-page__desktop-my-account-option">
                    My Account
                  </p>
                  <p className="help-candidate-posting-page__desktop-job-posting-option">
                    Job Posting
                  </p>
                  <p className="help-candidate-posting-page__desktop-candidate-posting-option">
                    Candidate Posting
                  </p>
                  <p className="help-candidate-posting-page__desktop-documents-option">
                    Documents
                  </p>
                  <p className="help-candidate-posting-page__desktop-partnerships-option">
                    Partnerships
                  </p>
                  <p className="help-candidate-posting-page__desktop-dashboard-option">
                    Dashboard
                  </p>
                  <p className="help-candidate-posting-page__desktop-searching-option">
                    Searching
                  </p>
                  <p className="help-candidate-posting-page__desktop-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                  <p className="help-candidate-posting-page__desktop-reports-option">
                    Reports
                  </p>
                  <p className="help-candidate-posting-page__desktop-membership-option">
                    Membership
                  </p>
                  <p className="help-candidate-posting-page__desktop-policies-and-terms-option">
                    Policies & Terms
                  </p>
                  <p className="help-candidate-posting-page__desktop-faq-option">
                    FAQ
                  </p>
                </div>
              </div>
              <div className="help-candidate-posting-page__desktop-right-container">
                <div className="help-candidate-posting-page__desktop-candidate-posting-container">
                  <div className="help-candidate-posting-page__desktop-candidate-posting-header-container">
                    <p className="help-candidate-posting-page__desktop-candidate-posting-header">
                      Candidate Posting
                    </p>
                    <img
                      className="help-candidate-posting-page__desktop-candidate-posting-icon"
                      src={CandidatePostingIcon}
                      alt="My Account Icon"
                    />
                  </div>
                  <div className="help-candidate-posting-page__desktop-candidate-posting-options-container">
                    <p className="help-candidate-posting-page__desktop-my-candidates-overview-option">
                      <img
                        className="help-candidate-posting-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-candidate-posting-page__desktop-my-candidates-overview-text">
                        My Candidates Overview
                      </span>
                    </p>
                    <p className="help-candidate-posting-page__desktop-post-a-candidate-option">
                      <img
                        className="help-candidate-posting-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-candidate-posting-page__desktop-post-a-candidate-text">
                        Post a Candidate
                      </span>
                    </p>
                    <p className="help-candidate-posting-page__desktop-save-and-view-drafts-option">
                      <img
                        className="help-candidate-posting-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-candidate-posting-page__desktop-save-and-view-drafts-text">
                        Save and View Drafts
                      </span>
                    </p>
                    <p className="help-candidate-posting-page__desktop-edit-candidate-option">
                      <img
                        className="help-candidate-posting-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-candidate-posting-page__desktop-edit-candidate-text">
                        Edit Candidate
                      </span>
                    </p>
                    <p className="help-candidate-posting-page__desktop-archive-option">
                      <img
                        className="help-candidate-posting-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-candidate-posting-page__desktop-archive-text">
                        Archive
                      </span>
                    </p>
                    <p className="help-candidate-posting-page__desktop-batch-upload-option">
                      <img
                        className="help-candidate-posting-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-candidate-posting-page__desktop-batch-upload-text">
                        Batch Upload
                      </span>
                    </p>
                    <p className="help-candidate-posting-page__desktop-candidate-activity-option">
                      <img
                        className="help-candidate-posting-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-candidate-posting-page__desktop-candidate-activity-text">
                        Candidate Activity
                      </span>
                    </p>
                    <p className="help-candidate-posting-page__desktop-hot-candidates-option">
                      <img
                        className="help-candidate-posting-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-candidate-posting-page__desktop-hot-candidates-text">
                        Hot Candidates
                      </span>
                    </p>
                    <p className="help-candidate-posting-page__desktop-run-report-option">
                      <img
                        className="help-candidate-posting-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-candidate-posting-page__desktop-run-report-text">
                        Run Report
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
