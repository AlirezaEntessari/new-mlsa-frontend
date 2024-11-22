import React from "react";
import "./HelpHomePage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import HelpSidePanel from "../../components/HelpSidePanel/HelpSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import MyAccountIcon from "../../assets/icons/Help_MyAccount.svg";
import JobPostingIcon from "../../assets/icons/Help_JobPosting.svg";
import CandidatePostingIcon from "../../assets/icons/Help_CandidatePosting.svg";
import DocumentsIcon from "../../assets/icons/Help_Documents.svg";
import DashboardIcon from "../../assets/icons/Help_Dashboard.svg";
import PartnershipsIcon from "../../assets/icons/Help_Partnerships.svg";
import SearchingIcon from "../../assets/icons/Help_Searching.svg";
import RatingsAndFeedbackIcon from "../../assets/icons/Help_Ratings.svg";
import ReportsIcon from "../../assets/icons/Help_Reports.svg";
import MembershipIcon from "../../assets/icons/Help_Membership.svg";
import PoliciesAndTermsIcon from "../../assets/icons/Help_Policies.svg";
import FAQIcon from "../../assets/icons/Help_FAQ.svg";
import GlossaryIcon from "../../assets/icons/Help_Glossary.svg";

export default function HelpHomePage() {
  return (
    <div className="help-home-page">
      <HeaderWithProfilePic />
      <div className="help-home-page__main-container">
        <HelpSidePanel />
        <div className="help-home-page__right-container">
          <div className="help-home-page__mobile-container">
            <p className="help-home-page__mobile-help-center-header">
              Help Center
            </p>
            <p className="help-home-page__mobile-how-can-we-help-today-header">
              How Can We Help Today?
            </p>
            <img
              className="help-home-page__mobile-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-home-page__im-looking-for-input"
              type="text"
              placeholder="I'm looking for"
            />
            <div className="help-home-page__mobile-card-container">
              <div className="help-home-page__mobile-my-account-container">
                <img
                  className="help-home-page__mobile-my-account-icon"
                  src={MyAccountIcon}
                  alt="My Account Icon"
                />
                <p className="help-home-page__mobile-my-account-text">
                  My Account
                </p>
                <p className="help-home-page__mobile-my-account-articles">
                  8 Articles
                </p>
              </div>
              <div className="help-home-page__mobile-job-posting-container">
                <img
                  className="help-home-page__mobile-job-posting-icon"
                  src={JobPostingIcon}
                  alt="Job Posting Icon"
                />
                <p className="help-home-page__mobile-job-posting-text">
                  Job Posting
                </p>
                <p className="help-home-page__mobile-job-posting-articles">
                  9 Articles
                </p>
              </div>
              <div className="help-home-page__mobile-candidate-posting-container">
                <img
                  className="help-home-page__mobile-candidate-posting-icon"
                  src={CandidatePostingIcon}
                  alt="Help Candidate Posting Icon"
                />
                <p className="help-home-page__mobile-candidate-posting-text">
                  Candidate Posting
                </p>
                <p className="help-home-page__mobile-candidate-posting-articles">
                  9 Articles
                </p>
              </div>
              <div className="help-home-page__mobile-documents-container">
                <img
                  className="help-home-page__mobile-documents-icon"
                  src={DocumentsIcon}
                  alt="Documents Icon"
                />
                <p className="help-home-page__mobile-documents-text">
                  Documents
                </p>
                <p className="help-home-page__mobile-documents-articles">
                  4 Articles
                </p>
              </div>
              <div className="help-home-page__mobile-partnerships-container">
                <img
                  className="help-home-page__mobile-partnerships-icon"
                  src={PartnershipsIcon}
                  alt="Partnerships Icon"
                />
                <p className="help-home-page__mobile-partnerships-text">
                  Partnerships
                </p>
                <p className="help-home-page__mobile-partnerships-articles">
                  4 Articles
                </p>
              </div>
              <div className="help-home-page__mobile-dashboard-container">
                <img
                  className="help-home-page__mobile-dashboard-icon"
                  src={DashboardIcon}
                  alt="Dashboard Icon"
                />
                <p className="help-home-page__mobile-dashboard-text">
                  Dashboard
                </p>
                <p className="help-home-page__mobile-dashboard-articles">
                  9 Articles
                </p>
              </div>
              <div className="help-home-page__mobile-searching-container">
                <img
                  className="help-home-page__mobile-searching-icon"
                  src={SearchingIcon}
                  alt="Searching Icon"
                />
                <p className="help-home-page__mobile-searching-text">
                  Searching
                </p>
                <p className="help-home-page__mobile-searching-articles">
                  8 Articles
                </p>
              </div>
              <div className="help-home-page__mobile-ratings-and-feedback-container">
                <img
                  className="help-home-page__mobile-ratings-and-feedback-icon"
                  src={RatingsAndFeedbackIcon}
                  alt="Ratings And Feedback Icon"
                />
                <p className="help-home-page__mobile-ratings-and-feedback-text">
                  Ratings & Feedback
                </p>
                <p className="help-home-page__mobile-ratings-and-feedback-articles">
                  8 Articles
                </p>
              </div>
              <div className="help-home-page__mobile-reports-container">
                <img
                  className="help-home-page__mobile-reports-icon"
                  src={ReportsIcon}
                  alt="Reports Icon"
                />
                <p className="help-home-page__mobile-reports-text">Reports</p>
                <p className="help-home-page__mobile-reports-articles">
                  4 Articles
                </p>
              </div>
              <div className="help-home-page__mobile-membership-container">
                <img
                  className="help-home-page__mobile-membership-icon"
                  src={MembershipIcon}
                  alt="Membership Icon"
                />
                <p className="help-home-page__mobile-membership-text">
                  Membership
                </p>
                <p className="help-home-page__mobile-membership-articles">
                  6 Articles
                </p>
              </div>
              <div className="help-home-page__mobile-policies-and-terms-container">
                <img
                  className="help-home-page__mobile-policies-and-terms-icon"
                  src={PoliciesAndTermsIcon}
                  alt="Policies and Terms Icon"
                />
                <p className="help-home-page__mobile-policies-and-terms-text">
                  Policies & Terms
                </p>
                <p className="help-home-page__mobile-policies-and-terms-articles">
                  6 Articles
                </p>
              </div>
              <div className="help-home-page__mobile-faq-container">
                <img
                  className="help-home-page__mobile-faq-icon"
                  src={FAQIcon}
                  alt="FAQ Icon"
                />
                <p className="help-home-page__mobile-faq-text">FAQ</p>
                <p className="help-home-page__mobile-faq-articles">
                  6 Articles
                </p>
              </div>
              <div className="help-home-page__mobile-glossary-container">
                <img
                  className="help-home-page__mobile-glossary-icon"
                  src={GlossaryIcon}
                  alt="Glossary Icon"
                />
                <p className="help-home-page__mobile-glossary-text">Glossary</p>
                <p className="help-home-page__mobile-glossary-articles">
                  6 Articles
                </p>
              </div>
            </div>
          </div>
          <div className="help-home-page__tablet-container">
            <p className="help-home-page__tablet-help-center-header">
              Help Center
            </p>
            <label
              className="help-home-page__tablet-how-can-we-help-today-header"
              htmlFor="tablet-how-can-we-help-today"
            >
              How Can We Help Today?
            </label>
            <img
              className="help-home-page__tablet-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-home-page__tablet-im-looking-for-input"
              type="text"
              id="tablet-how-can-we-help-today"
              placeholder="I'm looking for..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
