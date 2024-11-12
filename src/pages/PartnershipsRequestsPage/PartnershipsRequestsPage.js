import React from "react";
import "./PartnershipsRequestsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import PartnershipsNavbar from "../../components/PartnershipsNavbar/PartnershipsNavbar";
import PartnershipsSidePanel from "../../components/PartnershipsSidePanel/PartnershipsSidePanel";
import LMNStaffingIncLogo from "../../assets/icons/lmnstaffinginc.svg";
import RatingStarIcon from "../../assets/icons/RatingStar.svg";
import OakStreetAgencyIcon from "../../assets/icons/oakstreetagency.svg";

export default function PartnershipsRequestsPage() {
  return (
    <div className="partnerships-requests-page">
      <HeaderWithProfilePic />
      <div className="partnerships-requests-page__main-container">
        <PartnershipsSidePanel />
        <div className="partnerships-requests-page__right-container">
          <p className="partnerships-requests-page__mobile-header">
            Partnerships
          </p>
          <PartnershipsNavbar />
          <p className="partnerships-requests-page__mobile-incoming-requests">
            Incoming Requests
          </p>
          <div className="partnerships-requests-page__mobile-card-container">
            <div className="partnerships-requests-page__mobile-card-1">
              <div className="partnerships-requests-page__mobile-card-1-top-container">
                <img
                  className="partnerships-requests-page__mobile-lmn-staffing-logo"
                  src={LMNStaffingIncLogo}
                  alt="LMN Staffing Logo"
                />
                <div className="partnerships-requests-page__mobile-card-1-top-right-container">
                  <p className="partnerships-requests-page__mobile-card-1-agency-name">
                    LMN Staffing Inc.
                  </p>
                  <div className="partnerships-requests-page__mobile-card-1-reviews-container">
                    <div className="partnerships-requests-page__mobile-card-1-star-container">
                      <img
                        className="partnerships-requests-page__mobile-card-1-rating-star-icon-1"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                      <img
                        className="partnerships-requests-page__mobile-card-1-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                      <img
                        className="partnerships-requests-page__mobile-card-1-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                      <img
                        className="partnerships-requests-page__mobile-card-1-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                      <img
                        className="partnerships-requests-page__mobile-card-1-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                    </div>
                    <p className="partnerships-requests-page__mobile-card-1-reviews-text">
                      5
                    </p>
                  </div>
                  <p className="partnerships-requests-page__mobile-card-1-partners-since">
                    Partners since 4/22/24
                  </p>
                  <p className="partnerships-requests-page__mobile-card-1-manage-partnership">
                    Manage Partnership
                  </p>
                </div>
              </div>
              <div className="partnerships-requests-page__mobile-card-1-active-jobs-active-candidates-container">
                <div className="partnerships-requests-page__mobile-card-1-active-jobs-container">
                  <p className="partnerships-requests-page__mobile-card-1-active-jobs-text">
                    Active Jobs
                  </p>
                  <p className="partnerships-requests-page__mobile-card-1-active-jobs-number">
                    28
                  </p>
                </div>
                <div className="partnerships-requests-page__mobile-card-1-active-candidates-container">
                  <p className="partnerships-requests-page__mobile-card-1-active-candidates-text">
                    Active Candidates
                  </p>
                  <p className="partnerships-requests-page__mobile-card-1-active-candidates-number">
                    11
                  </p>
                </div>
              </div>
              <div className="partnerships-requests-page__mobile-card-1-button-container">
                <button className="partnerships-requests-page__mobile-card-1-review-request-button">
                  Review Request
                </button>
                <button className="partnerships-requests-page__mobile-card-1-message-agency-button">
                  Message Agency
                </button>
              </div>
            </div>
            <div className="partnerships-requests-page__mobile-card-2">
              <div className="partnerships-requests-page__mobile-card-2-top-container">
                <img
                  className="partnerships-requests-page__mobile-card-2-oak-street-agency-icon"
                  src={OakStreetAgencyIcon}
                  alt="Oak Street Agency Icon"
                />
                <div className="partnerships-requests-page__mobile-card-2-top-right-container">
                  <p className="partnerships-requests-page__mobile-card-2-agency-name">
                    Oak Street Agency
                  </p>
                  <div className="partnerships-requests-page__mobile-card-2-reviews-container">
                    <div className="partnerships-requests-page__mobile-card-2-star-container">
                      <img
                        className="partnerships-requests-page__mobile-card-2-rating-star-icon-1"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                      <img
                        className="partnerships-requests-page__mobile-card-2-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                      <img
                        className="partnerships-requests-page__mobile-card-2-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                      <img
                        className="partnerships-requests-page__mobile-card-2-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                      <img
                        className="partnerships-requests-page__mobile-card-2-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                    </div>
                    <p className="partnerships-requests-page__mobile-card-2-reviews-text">
                      5
                    </p>
                  </div>
                  <p className="partnerships-requests-page__mobile-card-2-partners-since">
                    Partners since 4/22/24
                  </p>
                  <p className="partnerships-requests-page__mobile-card-2-manage-partnership">
                    Manage Partnership
                  </p>
                </div>
              </div>
              <div className="partnerships-requests-page__mobile-card-2-active-jobs-active-candidates-container">
                <div className="partnerships-requests-page__mobile-card-2-active-jobs-container">
                  <p className="partnerships-requests-page__mobile-card-2-active-jobs-text">
                    Active Jobs
                  </p>
                  <p className="partnerships-requests-page__mobile-card-2-active-jobs-number">
                    28
                  </p>
                </div>
                <div className="partnerships-requests-page__mobile-card-2-active-candidates-container">
                  <p className="partnerships-requests-page__mobile-card-2-active-candidates-text">
                    Active Candidates
                  </p>
                  <p className="partnerships-requests-page__mobile-card-2-active-candidates-number">
                    11
                  </p>
                </div>
              </div>
              <div className="partnerships-requests-page__mobile-card-2-button-container">
                <button className="partnerships-requests-page__mobile-card-2-review-request-button">
                  Review Request
                </button>
                <button className="partnerships-requests-page__mobile-card-2-message-agency-button">
                  Message Agency
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
