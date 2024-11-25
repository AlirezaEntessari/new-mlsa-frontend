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
            <div className="help-home-page__tablet-central-card-container">
              <div className="help-home-page__tablet-my-account-job-posting-container">
                <div className="help-home-page__tablet-my-account-container">
                  <img
                    className="help-home-page__tablet-my-account-icon"
                    src={MyAccountIcon}
                    alt="My Account Icon"
                  />
                  <p className="help-home-page__tablet-my-account-text">
                    My Account
                  </p>
                  <p className="help-home-page__tablet-my-account-articles">
                    8 Articles
                  </p>
                </div>
                <div className="help-home-page__tablet-job-posting-container">
                  <img
                    className="help-home-page__tablet-job-posting-icon"
                    src={JobPostingIcon}
                    alt="Job Posting Icon"
                  />
                  <p className="help-home-page__tablet-job-posting-text">
                    Job Posting
                  </p>
                  <p className="help-home-page__tablet-job-posting-articles">
                    9 Articles
                  </p>
                </div>
              </div>
              <div className="help-home-page__tablet-candidate-posting-documents-container">
                <div className="help-home-page__tablet-candidate-posting-container">
                  <img
                    className="help-home-page__tablet-candidate-posting-icon"
                    src={CandidatePostingIcon}
                    alt="Candidate Posting Icon"
                  />
                  <p className="help-home-page__tablet-candidate-posting-text">
                    Candidate Posting
                  </p>
                  <p className="help-home-page__tablet-candidate-posting-articles">
                    9 Articles
                  </p>
                </div>
                <div className="help-home-page__tablet-documents-container">
                  <img
                    className="help-home-page__tablet-documents-icon"
                    src={DocumentsIcon}
                    alt="Documents Icon"
                  />
                  <p className="help-home-page__tablet-documents-text">
                    Documents
                  </p>
                  <p className="help-home-page__tablet-documents-articles">
                    4 Articles
                  </p>
                </div>
              </div>
              <div className="help-home-page__tablet-partnerships-dashboard-container">
                <div className="help-home-page__tablet-partnerships-container">
                  <img
                    className="help-home-page__tablet-partnerships-icon"
                    src={PartnershipsIcon}
                    alt="Partnerships Icon"
                  />
                  <p className="help-home-page__tablet-partnerships-text">
                    Partnerships
                  </p>
                  <p className="help-home-page__tablet-partnerships-articles">
                    4 Articles
                  </p>
                </div>
                <div className="help-home-page__tablet-dashboard-container">
                  <img
                    className="help-home-page__tablet-dashboard-icon"
                    src={DashboardIcon}
                    alt="Dashboard Icon"
                  />
                  <p className="help-home-page__tablet-dashboard-text">
                    Dashboard
                  </p>
                  <p className="help-home-page__tablet-dashboard-articles">
                    9 Articles
                  </p>
                </div>
              </div>
              <div className="help-home-page__tablet-searching-ratings-and-feedback-container">
                <div className="help-home-page__tablet-searching-container">
                  <img
                    className="help-home-page__tablet-searching-icon"
                    src={SearchingIcon}
                    alt="Searching Icon"
                  />
                  <p className="help-home-page__tablet-searching-text">
                    Searching
                  </p>
                  <p className="help-home-page__tablet-searching-articles">
                    8 Articles
                  </p>
                </div>
                <div className="help-home-page__tablet-ratings-and-feedback-container">
                  <img
                    className="help-home-page__tablet-ratings-and-feedback-icon"
                    src={RatingsAndFeedbackIcon}
                    alt="Ratings and Feedback Icon"
                  />
                  <p className="help-home-page__tablet-ratings-and-feedback-text">
                    Ratings & Feedback
                  </p>
                  <p className="help-home-page__tablet-ratings-and-feedback-articles">
                    8 Articles
                  </p>
                </div>
              </div>
              <div className="help-home-page__tablet-reports-membership-container">
                <div className="help-home-page__tablet-reports-container">
                  <img
                    className="help-home-page__tablet-reports-icon"
                    src={ReportsIcon}
                    alt="Reports Icon"
                  />
                  <p className="help-home-page__tablet-reports-text">Reports</p>
                  <p className="help-home-page__tablet-reports-articles">
                    4 Articles
                  </p>
                </div>
                <div className="help-home-page__tablet-membership-container">
                  <img
                    className="help-home-page__tablet-membership-icon"
                    src={MembershipIcon}
                    alt="Membership Icon"
                  />
                  <p className="help-home-page__tablet-membership-text">
                    Membership
                  </p>
                  <p className="help-home-page__tablet-membership-articles">
                    6 Articles
                  </p>
                </div>
              </div>
              <div className="help-home-page__tablet-policies-and-terms-faq-container">
                <div className="help-home-page__tablet-policies-and-terms-container">
                  <img
                    className="help-home-page__tablet-policies-and-terms-icon"
                    src={PoliciesAndTermsIcon}
                    alt="Policies and Terms Icon"
                  />
                  <p className="help-home-page__tablet-policies-and-terms-text">
                    Policies and Terms
                  </p>
                  <p className="help-home-page__tablet-policies-and-terms-articles">
                    6 Articles
                  </p>
                </div>
                <div className="help-home-page__tablet-faq-container">
                  <img
                    className="help-home-page__tablet-faq-icon"
                    src={FAQIcon}
                    alt="FAQ Icon"
                  />
                  <p className="help-home-page__tablet-faq-text">FAQ</p>
                  <p className="help-home-page__tablet-faq-articles">
                    6 Articles
                  </p>
                </div>
              </div>
              <div className="help-home-page__tablet-glossary-container">
                <img
                  className="help-home-page__tablet-glossary-icon"
                  src={GlossaryIcon}
                  alt="Glossary Icon"
                />
                <p className="help-home-page__tablet-glossary-text">Glossary</p>
                <p className="help-home-page__tablet-glossary-articles">
                  6 Articles
                </p>
              </div>
            </div>
          </div>
          <div className="help-home-page__desktop-container">
            <p className="help-home-page__desktop-help-center-header">
              Help Center
            </p>
            <p className="help-home-page__desktop-how-can-we-help-today-header">
              How Can We Help Today?
            </p>
            <img
              className="help-home-page__desktop-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="help-home-page__desktop-im-looking-for-input"
              type="text"
              placeholder="I'm looking for..."
            />
            <div className="help-home-page__desktop-central-container">
              <div className="help-home-page__desktop-my-account-job-posting-candidate-posting-container">
                <div className="help-home-page__desktop-my-account-container">
                  <img
                    className="help-home-page__desktop-my-account-icon"
                    src={MyAccountIcon}
                    alt="My Account Icon"
                  />
                  <p className="help-home-page__desktop-my-account-text">
                    My Account
                  </p>
                  <p className="help-home-page__desktop-my-account-articles">
                    8 Articles
                  </p>
                </div>
                <div className="help-home-page__desktop-job-posting-container">
                  <img
                    className="help-home-page__desktop-job-posting-icon"
                    src={JobPostingIcon}
                    alt="Job Posting Icon"
                  />
                  <p className="help-home-page__desktop-job-posting-text">
                    Job Posting
                  </p>
                  <p className="help-home-page__desktop-job-posting-articles">
                    9 Articles
                  </p>
                </div>
                <div className="help-home-page__desktop-candidate-posting-container">
                  <img
                    className="help-home-page__desktop-candidate-posting-icon"
                    src={CandidatePostingIcon}
                    alt="Candidate Posting Icon"
                  />
                  <p className="help-home-page__desktop-candidate-posting-text">
                    Candidate Posting
                  </p>
                  <p className="help-home-page__desktop-candidate-posting-articles">
                    9 Articles
                  </p>
                </div>
              </div>
              <div className="help-home-page__desktop-documents-partnerships-dashboard-container">
                <div className="help-home-page__desktop-documents-container">
                  <img
                    className="help-home-page__desktop-documents-icon"
                    src={DocumentsIcon}
                    alt="Documents Icon"
                  />
                  <p className="help-home-page__desktop-documents-text">
                    Documents
                  </p>
                  <p className="help-home-page__desktop-documents-articles">
                    4 Articles
                  </p>
                </div>
                <div className="help-home-page__desktop-partnerships-container">
                  <img
                    className="help-home-page__desktop-partnerships-icon"
                    src={PartnershipsIcon}
                    alt="Partnerships Icon"
                  />
                  <p className="help-home-page__desktop-partnerships-text">
                    Partnerships
                  </p>
                  <p className="help-home-page__desktop-partnerships-articles">
                    4 Articles
                  </p>
                </div>
                <div className="help-home-page__desktop-dashboard-container">
                  <img
                    className="help-home-page__desktop-dashboard-icon"
                    src={DashboardIcon}
                    alt="Dashboard Icon"
                  />
                  <p className="help-home-page__desktop-dashboard-text">
                    Dashboard
                  </p>
                  <p className="help-home-page__desktop-dashboard-articles">
                    9 Articles
                  </p>
                </div>
              </div>
              <div className="help-home-page__desktop-searching-ratings-and-feedback-reports-container">
                <div className="help-home-page__desktop-searching-container">
                  <img
                    className="help-home-page__desktop-searching-icon"
                    src={SearchingIcon}
                    alt="Searching Icon"
                  />
                  <p className="help-home-page__desktop-searching-text">
                    Searching
                  </p>
                  <p className="help-home-page__desktop-searching-articles">
                    8 Articles
                  </p>
                </div>
                <div className="help-home-page__desktop-ratings-and-feedback-container">
                  <img
                    className="help-home-page__desktop-ratings-and-feedback-icon"
                    src={RatingsAndFeedbackIcon}
                    alt="Ratings and Feedback Icon"
                  />
                  <p className="help-home-page__desktop-ratings-and-feedback-text">
                    Ratings & Feedback
                  </p>
                  <p className="help-home-page__desktop-ratings-and-feedback-articles">
                    8 Articles
                  </p>
                </div>
                <div className="help-home-page__desktop-reports-container">
                  <img
                    className="help-home-page__desktop-reports-icon"
                    src={ReportsIcon}
                    alt="Reports Icon"
                  />
                  <p className="help-home-page__desktop-reports-text">
                    Reports
                  </p>
                  <p className="help-home-page__desktop-reports-articles">
                    4 Articles
                  </p>
                </div>
              </div>
              <div className="help-home-page__desktop-membership-policies-and-terms-faq-container">
                <div className="help-home-page__desktop-membership-container">
                  <img
                    className="help-home-page__desktop-membership-icon"
                    src={MembershipIcon}
                    alt="Membership Icon"
                  />
                  <p className="help-home-page__desktop-membership-text">
                    Membership
                  </p>
                  <p className="help-home-page__desktop-membership-articles">
                    6 Articles
                  </p>
                </div>
                <div className="help-home-page__desktop-policies-and-terms-container">
                  <img
                    className="help-home-page__desktop-policies-and-terms-icon"
                    src={PoliciesAndTermsIcon}
                    alt="Policies and Terms Icon"
                  />
                  <p className="help-home-page__desktop-policies-and-terms-text">
                    Policies and Terms
                  </p>
                  <p className="help-home-page__desktop-policies-and-terms-articles">
                    6 Articles
                  </p>
                </div>
                <div className="help-home-page__desktop-faq-container">
                  <img
                    className="help-home-page__desktop-faq-icon"
                    src={FAQIcon}
                    alt="FAQ Icon"
                  />
                  <p className="help-home-page__desktop-faq-text">FAQ</p>
                  <p className="help-home-page__desktop-faq-articles">
                    6 Articles
                  </p>
                </div>
              </div>
              <div className="help-home-page__desktop-glossary-container">
                <img
                  className="help-home-page__desktop-glossary-icon"
                  src={GlossaryIcon}
                  alt="Glossary Icon"
                />
                <p className="help-home-page__desktop-glossary-text">
                  Glossary
                </p>
                <p className="help-home-page__desktop-glossary-articles">
                  6 Articles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
