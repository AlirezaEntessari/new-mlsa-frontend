import React from "react";
import "./PartnershipsRequestsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import PartnershipsNavbar from "../../components/PartnershipsNavbar/PartnershipsNavbar";
import PartnershipsSidePanel from "../../components/PartnershipsSidePanel/PartnershipsSidePanel";
import LMNStaffingIncLogo from "../../assets/icons/lmnstaffinginc.svg";
import RatingStarIcon from "../../assets/icons/RatingStar.svg";
import OakStreetAgencyIcon from "../../assets/icons/oakstreetagency.svg";
import UniversalStaffingIcon from "../../assets/icons/UNIVERSALSTAFFING.svg";
import SearchIcon from "../../assets/icons/Search (2).svg";
import XYZStaffingIcon from "../../assets/icons/xyzstaffing.svg";
import ZoltanStaffingIcon from "../../assets/icons/zoltanstaffing.svg";

export default function PartnershipsRequestsPage() {
  return (
    <div className="partnerships-requests-page">
      <HeaderWithProfilePic />
      <div className="partnerships-requests-page__main-container">
        <PartnershipsSidePanel />
        <div className="partnerships-requests-page__right-container">
          <div className="partnerships-requests-page__mobile-container">
            <p className="partnerships-requests-page__mobile-header">
              Partnerships
            </p>
            <PartnershipsNavbar />
            <p className="partnerships-requests-page__mobile-incoming-requests">
              Incoming Requests
            </p>
            <div className="partnerships-requests-page__mobile-top-card-container">
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
              <div className="partnerships-requests-page__mobile-card-3">
                <div className="partnerships-requests-page__mobile-card-3-top-container">
                  <img
                    className="partnerships-requests-page__mobile-card-3-universal-staffing-icon"
                    src={UniversalStaffingIcon}
                    alt="Universal Staffing Icon"
                  />
                  <div className="partnerships-requests-page__mobile-card-3-top-right-container">
                    <p className="partnerships-requests-page__mobile-card-3-staffing-agency-name">
                      Universal Staffing
                    </p>
                    <div className="partnerships-requests-page__mobile-card-3-reviews-container">
                      <div className="partnerships-requests-page__mobile-card-3-star-container">
                        <img
                          className="partnerships-requests-page__mobile-card-3-rating-star-icon-1"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-requests-page__mobile-card-3-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-requests-page__mobile-card-3-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-requests-page__mobile-card-3-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-requests-page__mobile-card-3-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                      </div>
                      <p className="partnerships-requests-page__mobile-card-3-reviews-text">
                        5
                      </p>
                    </div>
                    <p className="partnerships-requests-page__mobile-card-3-partners-since">
                      Partners since 4/22/24
                    </p>
                    <p className="partnerships-requests-page__mobile-card-3-manage-partnership">
                      Manage Partnership
                    </p>
                  </div>
                </div>
                <div className="partnerships-requests-page__mobile-card-3-active-jobs-active-candidates-container">
                  <div className="partnerships-requests-page__mobile-card-3-active-jobs-container">
                    <p className="partnerships-requests-page__mobile-card-3-active-jobs-text">
                      Active Jobs
                    </p>
                    <p className="partnerships-requests-page__mobile-card-3-active-jobs-number">
                      17
                    </p>
                  </div>
                  <div className="partnerships-requests-page__mobile-card-3-active-candidates-container">
                    <p className="partnerships-requests-page__mobile-card-3-active-candidates-text">
                      Active Candidates
                    </p>
                    <p className="partnerships-requests-page__mobile-card-3-active-candidates-number">
                      4
                    </p>
                  </div>
                </div>
                <div className="partnerships-requests-page__mobile-card-3-button-container">
                  <button className="partnerships-requests-page__mobile-card-3-review-request-button">
                    Review Request
                  </button>
                  <button className="partnerships-requests-page__mobile-card-3-message-agency-button">
                    Message Agency
                  </button>
                </div>
              </div>
            </div>
            <p className="partnerships-requests-page__mobile-request-a-partnership">
              Request a Partnership
            </p>
            <div className="partnerships-requests-page__mobile-search-agencies-container">
              <label
                className="partnerships-requests-page__mobile-search-agencies-label"
                htmlFor="mobile-search-agencies"
              >
                Search Agencies
              </label>
              <img
                className="partnerships-requests-page__mobile-search-icon"
                src={SearchIcon}
                alt="Search Icon"
              />
              <input
                className="partnerships-requests-page__mobile-search-agencies-input"
                type="text"
                id="mobile-search-agencies"
              />
            </div>
            <p className="partnerships-requests-page__mobile-new-members-text">
              New Members
            </p>
            <div className="partnerships-requests-page__mobile-bottom-card-container">
              <div className="partnerships-requests-page__mobile-card-4">
                <div className="partnerships-requests-page__mobile-card-4-top-container">
                  <img
                    className="partnerships-requests-page__mobile-card-4-xyz-staffing-icon"
                    src={XYZStaffingIcon}
                    alt="XYZ Staffing Icon"
                  />
                  <div className="partnerships-requests-page__mobile-card-4-top-right-container">
                    <p className="partnerships-requests-page__mobile-card-4-agency-name">
                      XYZ Staffing Inc.
                    </p>
                    <div className="partnerships-requests-page__mobile-card-4-reviews-container">
                      <div className="partnerships-requests-page__mobile-card-4-star-container">
                        <img
                          className="partnerships-requests-page__mobile-card-4-rating-star-icon-1"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-requests-page__mobile-card-4-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-requests-page__mobile-card-4-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-requests-page__mobile-card-4-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-requests-page__mobile-card-4-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                      </div>
                      <p className="partnerships-requests-page__mobile-card-4-reviews-text">
                        5
                      </p>
                    </div>
                    <p className="partnerships-requests-page__mobile-card-4-partners-since">
                      Partners since 4/22/24
                    </p>
                    <p className="partnerships-requests-page__mobile-card-4-manage-partnership">
                      Manage Partnership
                    </p>
                  </div>
                </div>
                <div className="partnerships-requests-page__mobile-card-4-active-jobs-active-candidates-container">
                  <div className="partnerships-requests-page__mobile-card-4-active-jobs-container">
                    <p className="partnerships-requests-page__mobile-card-4-active-jobs-text">
                      Active Jobs
                    </p>
                    <p className="partnerships-requests-page__mobile-card-4-active-jobs-number">
                      28
                    </p>
                  </div>
                  <div className="partnerships-requests-page__mobile-card-4-active-candidates-container">
                    <p className="partnerships-requests-page__mobile-card-4-active-candidates-text">
                      Active Candidates
                    </p>
                    <p className="partnerships-requests-page__mobile-card-4-active-candidates-number">
                      11
                    </p>
                  </div>
                </div>
                <div className="partnerships-requests-page__mobile-card-4-button-container">
                  <button className="partnerships-requests-page__mobile-card-4-request-partnership-button">
                    Request Partnership
                  </button>
                  <button className="partnerships-requests-page__mobile-card-4-message-agency-button">
                    Message Agency
                  </button>
                </div>
              </div>
              <div className="partnerships-requests-page__mobile-card-5">
                <div className="partnerships-requests-page__mobile-card-5-top-container">
                  <img
                    className="partnerships-requests-page__mobile-card-5-zoltan-staffing-icon"
                    src={ZoltanStaffingIcon}
                    alt="Zoltan Staffing Icon"
                  />
                  <div className="partnerships-requests-page__mobile-card-5-top-right-container">
                    <p className="partnerships-requests-page__mobile-card-5-agency-name">
                      Zoltan Staffing Inc.
                    </p>
                    <div className="partnerships-requests-page__mobile-card-5-reviews-container">
                      <div className="partnerships-requests-page__mobile-card-5-star-container">
                        <img
                          className="partnerships-requests-page__mobile-card-5-rating-star-icon-1"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-requests-page__mobile-card-5-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-requests-page__mobile-card-5-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-requests-page__mobile-card-5-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-requests-page__mobile-card-5-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                      </div>
                      <p className="partnerships-requests-page__mobile-card-5-reviews-text">
                        5
                      </p>
                    </div>
                    <p className="partnerships-requests-page__mobile-card-5-partners-since">
                      Partners since 4/22/24
                    </p>
                    <p className="partnerships-requests-page__mobile-card-5-manage-partnership">
                      Manage Partnership
                    </p>
                  </div>
                </div>
                <div className="partnerships-requests-page__mobile-card-5-active-jobs-active-candidates-container">
                  <div className="partnerships-requests-page__mobile-card-5-active-jobs-container">
                    <p className="partnerships-requests-page__mobile-card-5-active-jobs-text">
                      Active Jobs
                    </p>
                    <p className="partnerships-requests-page__mobile-card-5-active-jobs-number">
                      28
                    </p>
                  </div>
                  <div className="partnerships-requests-page__mobile-card-5-active-candidates-container">
                    <p className="partnerships-requests-page__mobile-card-5-active-candidates-text">
                      Active Candidates
                    </p>
                    <p className="partnerships-requests-page__mobile-card-5-active-candidates-number">
                      11
                    </p>
                  </div>
                </div>
                <div className="partnerships-requests-page__mobile-card-5-button-container">
                  <button className="partnerships-requests-page__mobile-card-5-request-partnership-button">
                    Request Partnership
                  </button>
                  <button className="partnerships-requests-page__mobile-card-5-message-agency-button">
                    Message Agency
                  </button>
                </div>
              </div>
              <div className="partnerships-requests-page__mobile-card-6">
                <div className="partnerships-requests-page__mobile-card-6-top-container">
                  <img
                    className="partnerships-requests-page__mobile-card-6-lmn-staffing-inc-logo"
                    src={LMNStaffingIncLogo}
                    alt="LMN Staffing Inc. Logo"
                  />
                  <div className="partnerships-requests-page__mobile-card-6-top-right-container">
                    <p className="partnerships-requests-page__mobile-card-6-staffing-agency-name">
                      LMN Staffing Inc.
                    </p>
                    <div className="partnerships-requests-page__mobile-card-6-reviews-container">
                      <div className="partnerships-requests-page__mobile-card-6-star-container">
                        <img
                          className="partnerships-requests-page__mobile-card-6-rating-star-icon-1"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-requests-page__mobile-card-6-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-requests-page__mobile-card-6-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-requests-page__mobile-card-6-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                        <img
                          className="partnerships-requests-page__mobile-card-6-rating-star-icon"
                          src={RatingStarIcon}
                          alt="Rating Star Icon"
                        />
                      </div>
                      <p className="partnerships-requests-page__mobile-card-6-reviews-text">
                        5
                      </p>
                    </div>
                    <p className="partnerships-requests-page__mobile-card-6-partners-since">
                      Partners since 4/22/24
                    </p>
                    <p className="partnerships-requests-page__mobile-card-6-manage-partnership">
                      Manage Partnership
                    </p>
                  </div>
                </div>
                <div className="partnerships-requests-page__mobile-card-6-active-jobs-active-candidates-container">
                  <div className="partnerships-requests-page__mobile-card-6-active-jobs-container">
                    <p className="partnerships-requests-page__mobile-card-6-active-jobs-text">
                      Active Jobs
                    </p>
                    <p className="partnerships-requests-page__mobile-card-6-active-jobs-number">
                      17
                    </p>
                  </div>
                  <div className="partnerships-requests-page__mobile-card-6-active-candidates-container">
                    <p className="partnerships-requests-page__mobile-card-6-active-candidates-text">
                      Active Candidates
                    </p>
                    <p className="partnerships-requests-page__mobile-card-6-active-candidates-number">
                      4
                    </p>
                  </div>
                </div>
                <div className="partnerships-requests-page__mobile-card-6-button-container">
                  <button className="partnerships-requests-page__mobile-card-6-request-partnership-button">
                    Request Partnership
                  </button>
                  <button className="partnerships-requests-page__mobile-card-6-message-agency-button">
                    Message Agency
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="partnerships-requests-page__tablet-container">
            <p className="partnerships-requests-page__tablet-header">Partnerships</p>
            <PartnershipsNavbar />
            <p className="partnerships-requests-page__tablet"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
