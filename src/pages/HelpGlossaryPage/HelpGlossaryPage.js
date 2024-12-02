import React from "react";
import "./HelpGlossaryPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import HelpSidePanel from "../../components/HelpSidePanel/HelpSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import GlossaryIcon from "../../assets/icons/Help_Glossary.svg";
import PaperIcon from "../../assets/icons/PaperIcon.svg";
import ABCSliderIcon from "../../assets/icons/abcslider.svg";

export default function HelpGlossaryPage() {
  return (
    <div className="help-glossary-page">
      <HeaderWithProfilePic />
      <div className="help-glossary-page__main-container">
        <HelpSidePanel />
        <div className="help-glossary-page__right-container">
          <div className="help-glossary-page__mobile-container">
            <p className="help-glossary-page__mobile-help-center-header">
              Help Center
            </p>
            <img
              className="help-glossary-page__mobile-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-glossary-page__mobile-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-glossary-page__mobile-categories-container">
              <p className="help-glossary-page__mobile-categories-header">
                Categories
              </p>
              <div className="help-glossary-page__mobile-categories-options-container">
                <div className="help-glossary-page__mobile-my-account-ratings-and-feedback-container">
                  <p className="help-glossary-page__mobile-my-account-option">
                    My Account
                  </p>
                  <p className="help-glossary-page__mobile-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                </div>
                <div className="help-glossary-page__mobile-job-posting-reports-container">
                  <p className="help-glossary-page__mobile-job-posting-option">
                    Job Posting
                  </p>
                  <p className="help-glossary-page__mobile-reports-option">
                    Reports
                  </p>
                </div>
                <div className="help-glossary-page__mobile-candidate-posting-membership-container">
                  <p className="help-glossary-page__mobile-candidate-posting-option">
                    Candidate Posting
                  </p>
                  <p className="help-glossary-page__mobile-membership-option">
                    Membership
                  </p>
                </div>
                <div className="help-glossary-page__mobile-documents-policies-and-terms-container">
                  <p className="help-glossary-page__mobile-documents-option">
                    Documents
                  </p>
                  <p className="help-glossary-page__mobile-policies-and-terms-option">
                    Policies & Terms
                  </p>
                </div>
                <div className="help-glossary-page__mobile-partnerships-faq-container">
                  <p className="help-glossary-page__mobile-partnerships-option">
                    Partnerships
                  </p>
                  <p className="help-glossary-page__mobile-faq-option">FAQ</p>
                </div>
                <div className="help-glossary-page__mobile-dashboard-glossary-container">
                  <p className="help-glossary-page__mobile-dashboard-option">
                    Dashboard
                  </p>
                  <p className="help-glossary-page__mobile-glossary-option">
                    Glossary
                  </p>
                </div>
                <div className="help-glossary-page__mobile-searching-container">
                  <p className="help-glossary-page__mobile-searching-option">
                    Searching
                  </p>
                </div>
              </div>
            </div>
            <div className="help-glossary-page__mobile-glossary-container">
              <div className="help-glossary-page__mobile-glossary-header-container">
                <p className="help-glossary-page__mobile-glossary-header">
                  Glossary
                </p>
                <img
                  className="help-glossary-page__mobile-glossary-icon"
                  src={GlossaryIcon}
                  alt="Glossary Icon"
                />
              </div>
              <div className="help-glossary-page__mobile-glossary-input-container">
                <img
                  className="help-glossary-page__mobile-glossary-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
                <input
                  className="help-glossary-page__mobile-glossary-input"
                  type="text"
                />
              </div>
              <img
                className="help-glossary-page__mobile-abc-slider-icon"
                src={ABCSliderIcon}
                alt="ABC Slider Icon"
              />
              <div className="help-glossary-page__mobile-glossary-container-options-container">
                <p className="help-glossary-page__mobile-action-option">
                  <img
                    className="help-glossary-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-glossary-page__mobile-action-text">
                    Action
                  </span>
                </p>
                <p className="help-glossary-page__mobile-active-jobs-option">
                  <img
                    className="help-glossary-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-glossary-page__mobile-active-jobs-text">
                    Active Jobs
                  </span>
                </p>
                <p className="help-glossary-page__mobile-administrator-option">
                  <img
                    className="help-glossary-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-glossary-page__mobile-administrator-text">
                    Administrator
                  </span>
                </p>
                <p className="help-glossary-page__mobile-acknowledge-and-agree-option">
                  <img
                    className="help-glossary-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-glossary-page__mobile-acknowledge-and-agree-text">
                    Acknowledge & Agree
                  </span>
                </p>
                <p className="help-glossary-page__mobile-agency-option">
                  <img
                    className="help-glossary-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-glossary-page__mobile-agency-text">
                    Agency
                  </span>
                </p>
                <p className="help-glossary-page__mobile-agency-id-number-option">
                  <img
                    className="help-glossary-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-glossary-page__mobile-agency-id-number-text">
                    Agency ID #
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="help-glossary-page__tablet-container">
            <p className="help-glossary-page__tablet-help-center-header">
              Help Center
            </p>
            <img
              className="help-glossary-page__tablet-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-glossary-page__tablet-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-glossary-page__tablet-categories-my-account-container">
              <div className="help-glossary-page__tablet-categories-container">
                <p className="help-glossary-page__tablet-categories-header">
                  Categories
                </p>
                <p className="help-glossary-page__tablet-my-account-option">
                  My Account
                </p>
                <p className="help-glossary-page__tablet-job-posting-option">
                  Job Posting
                </p>
                <p className="help-glossary-page__tablet-candidate-posting-option">
                  Candidate Posting
                </p>
                <p className="help-glossary-page__tablet-documents-option">
                  Documents
                </p>
                <p className="help-glossary-page__tablet-partnerships-option">
                  Partnerships
                </p>
                <p className="help-glossary-page__tablet-dashboard-option">
                  Dashboard
                </p>
                <p className="help-glossary-page__tablet-searching-option">
                  Searching
                </p>
                <p className="help-glossary-page__tablet-ratings-and-feedback-option">
                  Ratings & Feedback
                </p>
                <p className="help-glossary-page__tablet-reports-option">
                  Reports
                </p>
                <p className="help-glossary-page__tablet-membership-option">
                  Membership
                </p>
                <p className="help-glossary-page__tablet-policies-and-terms-option">
                  Policies & Terms
                </p>
                <p className="help-glossary-page__tablet-faq-option">FAQ</p>
                <p className="help-glossary-page__tablet-glossary-option">
                  Glossary
                </p>
              </div>
              <div className="help-glossary-page__tablet-glossary-container">
                <div className="help-glossary-page__tablet-glossary-container-header-container">
                  <p className="help-glossary-page__tablet-glossary-header">
                    Glossary
                  </p>
                  <img
                    className="help-glossary-page__tablet-glossary-icon"
                    src={GlossaryIcon}
                    alt="Glossary Icon"
                  />
                </div>
                <div className="help-glossary-page__tablet-glossary-input-container">
                  <img
                    className="help-glossary-page__tablet-glossary-search-icon"
                    src={SearchIcon}
                    alt="Search Icon"
                  />
                  <input
                    className="help-glossary-page__tablet-glossary-input"
                    type="text"
                  />
                </div>
                <img
                  className="help-glossary-page__tablet-abc-slider-icon"
                  src={ABCSliderIcon}
                  alt="ABC Slider Icon"
                />
                <div className="help-glossary-page__tablet-glossary-options-container">
                  <p className="help-glossary-page__tablet-action-option">
                    <img
                      className="help-glossary-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-glossary-page__tablet-action-text">
                      Action
                    </span>
                  </p>
                  <p className="help-glossary-page__tablet-active-jobs-option">
                    <img
                      className="help-glossary-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-glossary-page__tablet-active-jobs-text">
                      Active Jobs
                    </span>
                  </p>
                  <p className="help-glossary-page__tablet-administrator-option">
                    <img
                      className="help-glossary-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-glossary-page__tablet-administrator-text">
                      Administrator
                    </span>
                  </p>
                  <p className="help-glossary-page__tablet-acknowledge-and-agree-option">
                    <img
                      className="help-glossary-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-glossary-page__tablet-acknowledge-and-agree-text">
                      Acknowledge & Agree
                    </span>
                  </p>
                  <p className="help-glossary-page__tablet-agency-option">
                    <img
                      className="help-glossary-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-glossary-page__tablet-agency-text">
                      Agency
                    </span>
                  </p>
                  <p className="help-glossary-page__tablet-agency-id-number-option">
                    <img
                      className="help-glossary-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-glossary-page__tablet-agency-id-number-text">
                      Agency ID #
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="help-glossary-page__desktop-container">
            <p className="help-glossary-page__desktop-help-center-header">
              Help Center
            </p>
            <div className="help-glossary-page__desktop-central-container">
              <div className="help-glossary-page__desktop-left-container">
                <img
                  className="help-glossary-page__desktop-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
                <input
                  className="help-glossary-page__desktop-im-looking-for-input"
                  type="text"
                />
                <div className="help-glossary-page__desktop-categories-container">
                  <p className="help-glossary-page__desktop-categories-header">
                    Categories
                  </p>
                  <p className="help-glossary-page__desktop-my-account-option">
                    My Account
                  </p>
                  <p className="help-glossary-page__desktop-job-posting-option">
                    Job Posting
                  </p>
                  <p className="help-glossary-page__desktop-candidate-posting-option">
                    Candidate Posting
                  </p>
                  <p className="help-glossary-page__desktop-documents-option">
                    Documents
                  </p>
                  <p className="help-glossary-page__desktop-partnerships-option">
                    Partnerships
                  </p>
                  <p className="help-glossary-page__desktop-dashboard-option">
                    Dashboard
                  </p>
                  <p className="help-glossary-page__desktop-searching-option">
                    Searching
                  </p>
                  <p className="help-glossary-page__desktop-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                  <p className="help-glossary-page__desktop-reports-option">
                    Reports
                  </p>
                  <p className="help-glossary-page__desktop-membership-option">
                    Membership
                  </p>
                  <p className="help-glossary-page__desktop-policies-and-terms-option">
                    Policies & Terms
                  </p>
                  <p className="help-glossary-page__desktop-faq-option">FAQ</p>
                  <p className="help-glossary-page__desktop-glossary-option">
                    Glossary
                  </p>
                </div>
              </div>
              <div className="help-glossary-page__desktop-right-container">
                <div className="help-glossary-page__desktop-glossary-container">
                  <div className="help-glossary-page__desktop-glossary-header-container">
                    <p className="help-glossary-page__desktop-glossary-header">
                      Glossary
                    </p>
                    <img
                      className="help-glossary-page__desktop-glossary-icon"
                      src={GlossaryIcon}
                      alt="Glossary Icon"
                    />
                  </div>
                  <div className="help-glossary-page__desktop-glossary-input-container">
                    <img
                      className="help-glossary-page__desktop-glossary-search-icon"
                      src={SearchIcon}
                      alt="Search Icon"
                    />
                    <input
                      className="help-glossary-page__desktop-glossary-input"
                      type="text"
                    />
                  </div>
                  <img
                    className="help-glossary-page__desktop-abc-slider-icon"
                    src={ABCSliderIcon}
                    alt="ABC Slider Icon"
                  />
                  <div className="help-glossary-page__desktop-my-account-options-container">
                    <p className="help-glossary-page__desktop-action-option">
                      <img
                        className="help-glossary-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-glossary-page__desktop-action-text">
                        Action
                      </span>
                    </p>
                    <p className="help-glossary-page__desktop-active-jobs-option">
                      <img
                        className="help-glossary-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-glossary-page__desktop-active-jobs-text">
                        Active Jobs
                      </span>
                    </p>
                    <p className="help-glossary-page__desktop-administrator-option">
                      <img
                        className="help-glossary-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-glossary-page__desktop-administrator-text">
                        Administrator
                      </span>
                    </p>
                    <p className="help-glossary-page__desktop-acknowledge-and-agree-option">
                      <img
                        className="help-glossary-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-glossary-page__desktop-acknowledge-and-agree-text">
                        Acknowledge & Agree
                      </span>
                    </p>
                    <p className="help-glossary-page__desktop-agency-option">
                      <img
                        className="help-glossary-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-glossary-page__desktop-agency-text">
                        Agency
                      </span>
                    </p>
                    <p className="help-glossary-page__desktop-agency-id-number-option">
                      <img
                        className="help-glossary-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-glossary-page__desktop-agency-id-number-text">
                        Agency ID #
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
