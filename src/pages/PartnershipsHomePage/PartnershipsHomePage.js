import React from "react";
import "./PartnershipsHomePage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import PartnershipsSidePanel from "../../components/PartnershipsSidePanel/PartnershipsSidePanel";
import PartnershipsNavbar from "../../components/PartnershipsNavbar/PartnershipsNavbar";
import ABCStaffingLogo from "../../assets/icons/abcstaffinglogo.svg";
import RatingStarIcon from "../../assets/icons/RatingStar.svg";
import AcmeAgencyLogo from "../../assets/icons/acmeagency.svg";

export default function PartnershipsHomePage() {
  return (
    <div className="partnerships-home-page">
      <HeaderWithProfilePic />
      <div className="partnerships-home-page__main-container">
        <PartnershipsSidePanel />
        <div className="partnerships-home-page__right-container">
          <div className="partnerships-home-page__mobile-container">
            <p className="partnerships-home-page__mobile-header">
              Partnerships
            </p>
            <PartnershipsNavbar />
            <div className="partnerships-home-page__mobile-card-container">
              <div className="partnerships-home-page__mobile-card-1">
                <div className="partnerships-home-page__mobile-card-1-top-container">
                  <img
                    className="partnerships-home-page__mobile-card-1-abc-staffing-logo"
                    src={ABCStaffingLogo}
                    alt="ABC Staffing Logo"
                  />
                  <div className="partnerships-home-page__mobile-card-1-top-right-container">
                    <p className="partnerships-home-page__mobile-card-1-agency-name">
                      ABC Staffing Inc.
                    </p>
                    <div className="partnerships-home-page__mobile-card-1-reviews-container">
                      <div className="partnerships-home-page__mobile-card-1-star-container">
                        <img
                          className="partnerships-home-page__mobile-card-1-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-home-page__mobile-card-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-home-page__mobile-card-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-home-page__mobile-card-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-home-page__mobile-card-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                      </div>
                      <p className="partnerships-home-page__mobile-card-1-reviews-text">
                        5
                      </p>
                    </div>
                    <p className="partnerships-home-page__mobile-card-1-partners-since">
                      Partners since 4/22/24
                    </p>
                    <p className="partnerships-home-page__mobile-card-1-manage-partnership">
                      Manage Partnership
                    </p>
                  </div>
                </div>
                <div className="partnerships-home-page__mobile-card-1-active-jobs-active-candidates-container">
                  <div className="partnerships-home-page__mobile-card-1-active-jobs-container">
                    <p className="partnerships-home-page__mobile-card-1-active-jobs-text">
                      Active Jobs
                    </p>
                    <p className="partnerships-home-page__mobile-card-1-active-jobs-number">
                      <span className="partnerships-home-page__mobile-card-1-active-jobs-first-number">
                        0
                      </span>
                      <span className="partnerships-home-page__mobile-card-1-active-jobs-second-number">
                        /28
                      </span>
                    </p>
                  </div>
                  <div className="partnerships-home-page__mobile-card-1-active-candidates-container">
                    <p className="partnerships-home-page__mobile-card-1-active-candidates-text">
                      Active Candidates
                    </p>
                    <p className="partnerships-home-page__mobile-card-1-active-candidates-number">
                      <span className="partnerships-home-page__mobile-card-1-active-candidates-first-number">
                        8
                      </span>
                      <span className="partnerships-home-page__mobile-card-1-active-candidates-second-number">
                        /11
                      </span>
                    </p>
                  </div>
                </div>
                <div className="partnerships-home-page__mobile-card-1-rate-agency-message-agency-container">
                  <button className="partnerships-home-page__mobile-card-1-rate-agency-button">
                    Rate Agency
                  </button>
                  <button className="partnerships-home-page__mobile-card-1-message-agency-button">
                    Message Agency
                  </button>
                </div>
              </div>
              <div className="partnerships-home-page__mobile-card-2">
                <div className="partnerships-home-page__mobile-card-2-top-container">
                  <img
                    className="partnerships-home-page__mobile-card-2-acme-agency-logo"
                    src={AcmeAgencyLogo}
                    alt="Acme Agency Logo"
                  />
                  <div className="partnerships-home-page__mobile-card-2-top-right-container">
                    <p className="partnerships-home-page__mobile-card-2-agency-name">
                      Acme Agency
                    </p>
                    <div className="partnerships-home-page__mobile-card-2-reviews-container">
                      <div className="partnerships-home-page__mobile-card-2-star-container">
                        <img
                          className="partnerships-home-page__mobile-card-2-rating-star-icon-1"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-home-page__mobile-card-2-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-home-page__mobile-card-2-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-home-page__mobile-card-2-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-home-page__mobile-card-2-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                      </div>
                      <p className="partnerships-home-page__mobile-card-2-reviews-text">
                        5
                      </p>
                    </div>
                    <p className="partnerships-home-page__mobile-card-2-partners-since">
                      Partners since 4/22/24
                    </p>
                    <p className="partnerships-home-page__mobile-card-2-manage-partnership">
                      Manage Partnership
                    </p>
                  </div>
                </div>
                <div className="partnerships-home-page__mobile-card-2-active-jobs-active-candidates-container">
                  <div className="partnerships-home-page__mobile-card-2-active-jobs-container">
                    <p className="partnerships-home-page__mobile-card-2-active-jobs-text">
                      Active Jobs
                    </p>
                    <p className="partnerships-home-page__mobile-card-2-active-jobs-number">
                      <span className="partnerships-home-page__mobile-card-2-active-jobs-first-number">
                        5
                      </span>
                      <span className="partnerships-home-page__mobile-card-2-active-jobs-second-number">
                        /21
                      </span>
                    </p>
                  </div>
                  <div className="partnerships-home-page__mobile-card-2-active-candidates-container">
                    <p className="partnerships-home-page__mobile-card-2-active-candidates-text">
                      Active Candidates
                    </p>
                    <p className="partnerships-home-page__mobile-card-2-active-candidates-number">
                      <span className="partnerships-home-page__mobile-card-2-active-candidates-first-number">
                        0
                      </span>
                      <span className="partnerships-home-page__mobile-card-2-active-candidates-second-number">
                        /18
                      </span>
                    </p>
                  </div>
                </div>
                <div className="partnerships-home-page__mobile-card-2-view-agency-ratings-message-agency-container">
                  <button className="partnerships-home-page__mobile-card-2-view-agency-ratings-button">
                    View Agency Ratings
                  </button>
                  <button className="partnerships-home-page__mobile-card-2-message-agency-button">
                    Message Agency
                  </button>
                </div>
              </div>
              <div className="partnerships-home-page__mobile-card-3">
                <div className="partnerships-home-page__mobile-card-3-top-container">
                  <img
                    className="partnerships-home-page__mobile-card-3-abc-staffing-logo"
                    src={ABCStaffingLogo}
                    alt="ABC Staffing Logo"
                  />
                  <div className="partnerships-home-page__mobile-card-3-top-right-container">
                    <p className="partnerships-home-page__mobile-card-3-agency-name">
                      Columbus Staffing
                    </p>
                    <div className="partnerships-home-page__mobile-card-3-reviews-container">
                      <div className="partnerships-home-page__mobile-card-3-star-container">
                        <img
                          className="partnerships-home-page__mobile-card-3-rating-star-icon-1"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-home-page__mobile-card-3-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-home-page__mobile-card-3-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-home-page__mobile-card-3-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-home-page__mobile-card-3-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                      </div>
                      <p className="partnerships-home-page__mobile-card-3-reviews-text">
                        5
                      </p>
                    </div>
                    <p className="partnerships-home-page__mobile-card-3-partners-since">
                      Partners since 4/22/24
                    </p>
                    <p className="partnerships-home-page__mobile-card-3-manage-partnership">
                      Manage Partnership
                    </p>
                  </div>
                </div>
                <div className="partnerships-home-page__mobile-card-3-active-jobs-active-candidates-container">
                  <div className="partnerships-home-page__mobile-card-3-active-jobs-container">
                    <p className="partnerships-home-page__mobile-card-3-active-jobs-text">
                      Active Jobs
                    </p>
                    <p className="partnerships-home-page__mobile-card-3-active-jobs-number">
                      <span className="partnerships-home-page__mobile-card-3-active-jobs-first-number">
                        2
                      </span>
                      <span className="partnerships-home-page__mobile-card-3-active-jobs-second-number">
                        /17
                      </span>
                    </p>
                  </div>
                  <div className="partnerships-home-page__mobile-card-3-active-candidates-container">
                    <p className="partnerships-home-page__mobile-card-3-active-candidates-text">
                      Active Candidates
                    </p>
                    <p className="partnerships-home-page__mobile-card-3-active-candidates-number">
                      <span className="partnerships-home-page__mobile-card-3-active-candidates-first-number">
                        1
                      </span>
                      <span className="partnerships-home-page__mobile-card-3-active-candidates-second-number">
                        /14
                      </span>
                    </p>
                  </div>
                </div>
                <div className="partnerships-home-page__mobile-card-3-rate-agency-message-agency-container">
                  <button className="partnerships-home-page__mobile-card-3-rate-agency-button">
                    Rate Agency
                  </button>
                  <button className="partnerships-home-page__mobile-card-3-message-agency-button">
                    Message Agency
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="partnerships-home-page__tablet-container">
            <p className="partnerships-home-page__tablet-header">
              Partnerships
            </p>
            <PartnershipsNavbar />
          </div>
        </div>
      </div>
    </div>
  );
}
