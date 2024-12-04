import React from "react";
import "./HelpPartnershipsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import HelpSidePanel from "../../components/HelpSidePanel/HelpSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import PartnershipsIcon from "../../assets/icons/Help_Partnerships.svg";
import PaperIcon from "../../assets/icons/PaperIcon.svg";
import { Link } from "react-router-dom";

export default function HelpPartnershipsPage() {
  return (
    <div className="help-partnerships-page">
      <HeaderWithProfilePic />
      <div className="help-partnerships-page__main-container">
        <HelpSidePanel />
        <div className="help-partnerships-page__right-container">
          <div className="help-partnerships-page__mobile-container">
            <p className="help-partnerships-page__mobile-help-center-header">
              Help Center
            </p>
            <img
              className="help-partnerships-page__mobile-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-partnerships-page__mobile-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-partnerships-page__mobile-categories-container">
              <p className="help-partnerships-page__mobile-categories-header">
                Categories
              </p>
              <div className="help-partnerships-page__mobile-categories-options-container">
                <div className="help-partnerships-page__mobile-my-account-ratings-and-feedback-container">
                  <Link
                    className="help-partnerships-page__mobile-link"
                    to="/help-my-account-page"
                  >
                    <p className="help-partnerships-page__mobile-my-account-option">
                      My Account
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__mobile-link"
                    to="/help-ratings-and-feedback-page"
                  >
                    <p className="help-partnerships-page__mobile-ratings-and-feedback-option">
                      Ratings & Feedback
                    </p>
                  </Link>
                </div>
                <div className="help-partnerships-page__mobile-job-posting-reports-container">
                  <Link
                    className="help-partnerships-page__mobile-link"
                    to="/help-job-posting-page"
                  >
                    <p className="help-partnerships-page__mobile-job-posting-option">
                      Job Posting
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__mobile-link"
                    to="/help-reports-page"
                  >
                    <p className="help-partnerships-page__mobile-reports-option">
                      Reports
                    </p>
                  </Link>
                </div>
                <div className="help-partnerships-page__mobile-candidate-posting-membership-container">
                  <Link
                    className="help-partnerships-page__mobile-link"
                    to="/help-candidate-posting-page"
                  >
                    <p className="help-partnerships-page__mobile-candidate-posting-option">
                      Candidate Posting
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__mobile-link"
                    to="/help-membership-page"
                  >
                    <p className="help-partnerships-page__mobile-membership-option">
                      Membership
                    </p>
                  </Link>
                </div>
                <div className="help-partnerships-page__mobile-documents-policies-and-terms-container">
                  <Link
                    className="help-partnerships-page__mobile-link"
                    to="/help-documents-page"
                  >
                    <p className="help-partnerships-page__mobile-documents-option">
                      Documents
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__mobile-link"
                    to="/help-policies-and-terms-page"
                  >
                    <p className="help-partnerships-page__mobile-policies-and-terms-option">
                      Policies & Terms
                    </p>
                  </Link>
                </div>
                <div className="help-partnerships-page__mobile-partnerships-faq-container">
                  <Link
                    className="help-partnerships-page__mobile-link"
                    to="/help-partnerships-page"
                  >
                    <p className="help-partnerships-page__mobile-partnerships-option">
                      Partnerships
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__mobile-link"
                    to="/help-faq-page"
                  >
                    <p className="help-partnerships-page__mobile-faq-option">
                      FAQ
                    </p>
                  </Link>
                </div>
                <div className="help-partnerships-page__mobile-dashboard-glossary-container">
                  <Link
                    className="help-partnerships-page__mobile-link"
                    to="/help-dashboard-page"
                  >
                    <p className="help-partnerships-page__mobile-dashboard-option">
                      Dashboard
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__mobile-link"
                    to="/help-glossary-page"
                  >
                    <p className="help-partnerships-page__mobile-glossary-option">
                      Glossary
                    </p>
                  </Link>
                </div>
                <div className="help-partnerships-page__mobile-searching-container">
                  <Link
                    className="help-partnerships-page__mobile-link"
                    to="/help-searching-page"
                  >
                    <p className="help-partnerships-page__mobile-searching-option">
                      Searching
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="help-partnerships-page__mobile-partnerships-container">
              <div className="help-partnerships-page__mobile-partnerships-header-container">
                <p className="help-partnerships-page__mobile-partnerships-header">
                  Partnerships
                </p>
                <img
                  className="help-partnerships-page__mobile-partnerships-icon"
                  src={PartnershipsIcon}
                  alt="Partnership Icon"
                />
              </div>
              <div className="help-partnerships-page__mobile-partnerships-container-options-container">
                <p className="help-partnerships-page__mobile-partnership-overview-option">
                  <img
                    className="help-partnerships-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-partnerships-page__mobile-partnership-overview-text">
                    Partnership Overview
                  </span>
                </p>
                <p className="help-partnerships-page__mobile-partnering-with-agencies-option">
                  <img
                    className="help-partnerships-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-partnerships-page__mobile-partnering-with-agencies-text">
                    Partnering with Agencies
                  </span>
                </p>
                <p className="help-partnerships-page__mobile-search-agencies-option">
                  <img
                    className="help-partnerships-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-partnerships-page__mobile-search-agencies-text">
                    Search Agencies
                  </span>
                </p>
                <p className="help-partnerships-page__mobile-refer-an-agency-option">
                  <img
                    className="help-partnerships-page__mobile-paper-icon"
                    src={PaperIcon}
                    alt="Paper Icon"
                  />
                  <span className="help-partnerships-page__mobile-refer-an-agency-text">
                    Refer an Agency
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="help-partnerships-page__tablet-container">
            <p className="help-partnerships-page__tablet-help-center-header">
              Help Center
            </p>
            <img
              className="help-partnerships-page__tablet-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-partnerships-page__tablet-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-partnerships-page__tablet-categories-my-account-container">
              <div className="help-partnerships-page__tablet-categories-container">
                <p className="help-partnerships-page__tablet-categories-header">
                  Categories
                </p>
                <Link
                  className="help-partnerships-page__tablet-link"
                  to="/help-my-account-page"
                >
                  <p className="help-partnerships-page__tablet-my-account-option">
                    My Account
                  </p>
                </Link>
                <Link
                  className="help-partnerships-page__tablet-link"
                  to="/help-job-posting-page"
                >
                  <p className="help-partnerships-page__tablet-job-posting-option">
                    Job Posting
                  </p>
                </Link>
                <Link
                  className="help-partnerships-page__tablet-link"
                  to="/help-candidate-posting-page"
                >
                  <p className="help-partnerships-page__tablet-candidate-posting-option">
                    Candidate Posting
                  </p>
                </Link>
                <Link
                  className="help-partnerships-page__tablet-link"
                  to="/help-documents-page"
                >
                  <p className="help-partnerships-page__tablet-documents-option">
                    Documents
                  </p>
                </Link>
                <Link
                  className="help-partnerships-page__tablet-link"
                  to="/help-partnerships-page"
                >
                  <p className="help-partnerships-page__tablet-partnerships-option">
                    Partnerships
                  </p>
                </Link>
                <Link
                  className="help-partnerships-page__tablet-link"
                  to="/help-dashboard-page"
                >
                  <p className="help-partnerships-page__tablet-dashboard-option">
                    Dashboard
                  </p>
                </Link>
                <Link
                  className="help-partnerships-page__tablet-link"
                  to="/help-searching-page"
                >
                  <p className="help-partnerships-page__tablet-searching-option">
                    Searching
                  </p>
                </Link>
                <Link
                  className="help-partnerships-page__tablet-link"
                  to="/help-ratings-and-feedback-page"
                >
                  <p className="help-partnerships-page__tablet-ratings-and-feedback-option">
                    Ratings & Feedback
                  </p>
                </Link>
                <Link
                  className="help-partnerships-page__tablet-link"
                  to="/help-reports-page"
                >
                  <p className="help-partnerships-page__tablet-reports-option">
                    Reports
                  </p>
                </Link>
                <Link
                  className="help-partnerships-page__tablet-link"
                  to="/help-membership-page"
                >
                  <p className="help-partnerships-page__tablet-membership-option">
                    Membership
                  </p>
                </Link>
                <Link
                  className="help-partnerships-page__tablet-link"
                  to="/help-policies-and-terms-page"
                >
                  <p className="help-partnerships-page__tablet-policies-and-terms-option">
                    Policies & Terms
                  </p>
                </Link>
                <Link
                  className="help-partnerships-page__tablet-link"
                  to="/help-faq-page"
                >
                  <p className="help-partnerships-page__tablet-faq-option">
                    FAQ
                  </p>
                </Link>
                <Link
                  className="help-partnerships-page__tablet-link"
                  to="/help-glossary-page"
                >
                  <p className="help-partnerships-page__tablet-glossary-option">
                    Glossary
                  </p>
                </Link>
              </div>
              <div className="help-partnerships-page__tablet-partnerships-container">
                <div className="help-partnerships-page__tablet-partnerships-container-header-container">
                  <p className="help-partnerships-page__tablet-partnerships-header">
                    Partnerships
                  </p>
                  <img
                    className="help-partnerships-page__tablet-partnerships-icon"
                    src={PartnershipsIcon}
                    alt="Partnerships Icon"
                  />
                </div>
                <div className="help-partnerships-page__tablet-partnerships-options-container">
                  <p className="help-partnerships-page__tablet-partnership-overview-option">
                    <img
                      className="help-partnerships-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-partnerships-page__tablet-partnership-overview-text">
                      Partnership Overview
                    </span>
                  </p>
                  <p className="help-partnerships-page__tablet-partnering-with-agencies-option">
                    <img
                      className="help-partnerships-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-partnerships-page__tablet-partnering-with-agencies-text">
                      Partnering with Agencies
                    </span>
                  </p>
                  <p className="help-partnerships-page__tablet-search-agencies-option">
                    <img
                      className="help-partnerships-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-partnerships-page__tablet-search-agencies-text">
                      Search Agencies
                    </span>
                  </p>
                  <p className="help-partnerships-page__tablet-refer-an-agency-option">
                    <img
                      className="help-partnerships-page__tablet-paper-icon"
                      src={PaperIcon}
                      alt="Paper Icon"
                    />
                    <span className="help-partnerships-page__tablet-refer-an-agency-text">
                      Refer an Agency
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="help-partnerships-page__desktop-container">
            <p className="help-partnerships-page__desktop-help-center-header">
              Help Center
            </p>
            <div className="help-partnerships-page__desktop-central-container">
              <div className="help-partnerships-page__desktop-left-container">
                <img
                  className="help-partnerships-page__desktop-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
                <input
                  className="help-partnerships-page__desktop-im-looking-for-input"
                  type="text"
                />
                <div className="help-partnerships-page__desktop-categories-container">
                  <p className="help-partnerships-page__desktop-categories-header">
                    Categories
                  </p>
                  <Link
                    className="help-partnerships-page__desktop-link"
                    to="/help-my-account-page"
                  >
                    <p className="help-partnerships-page__desktop-my-account-option">
                      My Account
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__desktop-link"
                    to="/help-job-posting-page"
                  >
                    <p className="help-partnerships-page__desktop-job-posting-option">
                      Job Posting
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__desktop-link"
                    to="/help-candidate-posting-page"
                  >
                    <p className="help-partnerships-page__desktop-candidate-posting-option">
                      Candidate Posting
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__desktop-link"
                    to="/help-documents-page"
                  >
                    <p className="help-partnerships-page__desktop-documents-option">
                      Documents
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__desktop-link"
                    to="/help-partnerships-page"
                  >
                    <p className="help-partnerships-page__desktop-partnerships-option">
                      Partnerships
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__desktop-link"
                    to="/help-dashboard-page"
                  >
                    <p className="help-partnerships-page__desktop-dashboard-option">
                      Dashboard
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__desktop-link"
                    to="/help-searching-page"
                  >
                    <p className="help-partnerships-page__desktop-searching-option">
                      Searching
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__desktop-link"
                    to="/help-ratings-and-feedback-page"
                  >
                    <p className="help-partnerships-page__desktop-ratings-and-feedback-option">
                      Ratings & Feedback
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__desktop-link"
                    to="/help-reports-page"
                  >
                    <p className="help-partnerships-page__desktop-reports-option">
                      Reports
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__desktop-link"
                    to="/help-membership-page"
                  >
                    <p className="help-partnerships-page__desktop-membership-option">
                      Membership
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__desktop-link"
                    to="/help-policies-and-terms-page"
                  >
                    <p className="help-partnerships-page__desktop-policies-and-terms-option">
                      Policies & Terms
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__desktop-link"
                    to="/help-faq-page"
                  >
                    <p className="help-partnerships-page__desktop-faq-option">
                      FAQ
                    </p>
                  </Link>
                  <Link
                    className="help-partnerships-page__desktop-link"
                    to="/help-glossary-page"
                  >
                    <p className="help-partnerships-page__desktop-glossary-option">
                      Glossary
                    </p>
                  </Link>
                </div>
              </div>
              <div className="help-partnerships-page__desktop-right-container">
                <div className="help-partnerships-page__desktop-partnerships-container">
                  <div className="help-partnerships-page__desktop-partnerships-header-container">
                    <p className="help-partnerships-page__desktop-partnerships-header">
                      Partnerships
                    </p>
                    <img
                      className="help-partnerships-page__desktop-partnerships-icon"
                      src={PartnershipsIcon}
                      alt="Partnerships Icon"
                    />
                  </div>
                  <div className="help-partnerships-page__desktop-partnerships-options-container">
                    <p className="help-partnerships-page__desktop-partnership-overview-option">
                      <img
                        className="help-partnerships-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-partnerships-page__desktop-partnership-overview-text">
                        Partnership Overview
                      </span>
                    </p>
                    <p className="help-partnerships-page__desktop-partnering-with-agencies-option">
                      <img
                        className="help-partnerships-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-partnerships-page__desktop-partnering-with-agencies-text">
                        Partnering with Agencies
                      </span>
                    </p>
                    <p className="help-partnerships-page__desktop-search-agencies-option">
                      <img
                        className="help-partnerships-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-partnerships-page__desktop-search-agencies-text">
                        Search Agencies
                      </span>
                    </p>
                    <p className="help-partnerships-page__desktop-refer-agency-option">
                      <img
                        className="help-partnerships-page__desktop-paper-icon"
                        src={PaperIcon}
                        alt="Paper Icon"
                      />
                      <span className="help-partnerships-page__desktop-refer-agency-text">
                        Refer an Agency
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
