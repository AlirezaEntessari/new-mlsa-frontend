import React from "react";
import "./PartnershipsViewActivityPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import PartnershipsSidePanel from "../../components/PartnershipsSidePanel/PartnershipsSidePanel";
import PartnershipsNavbar from "../../components/PartnershipsNavbar/PartnershipsNavbar";
import ABCStaffingLogo from "../../assets/icons/abcstaffinglogo.svg";
import RatingStarIcon from "../../assets/icons/RatingStar.svg";

export default function PartnershipsViewActivityPage() {
  return (
    <div className="partnerships-view-activity-page">
      <HeaderWithProfilePic />
      <div className="partnerships-view-activity-page__main-container">
        <PartnershipsSidePanel />
        <div className="partnerships-view-activity-page__right-container">
          <div className="partnerships-view-activity-page__mobile-container">
            <p className="partnerships-view-activity-page__mobile-header">
              Partnerships
            </p>
            <PartnershipsNavbar />
            <p className="partnerships-view-activity-page__mobile-view-activity">
              View Activity
            </p>
            <div className="partnerships-view-activity-page__mobile-first-row">
              <img
                className="partnerships-view-activity-page__mobile-abc-staffing-logo"
                src={ABCStaffingLogo}
                alt="ABC Staffing Logo"
              />
              <div className="partnerships-view-activity-page__mobile-first-row-agency-information-container">
                <p className="partnerships-view-activity-page__mobile-first-row-agency-name">
                  ABC Staffing Inc.
                </p>
                <div className="partnerships-view-activity-page__mobile-reviews-container">
                  <div className="partnerships-view-activity-page__mobile-star-container">
                    <img
                      className="partnerships-view-activity-page__mobile-rating-star-icon-1"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-view-activity-page__mobile-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-view-activity-page__mobile-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-view-activity-page__mobile-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-view-activity-page__mobile-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                  </div>
                  <p className="partnerships-view-activity-page__mobile-reviews-text">
                    5
                  </p>
                </div>
              </div>
              <div className="partnerships-view-activity-page__mobile-active-jobs-active-candidates-container">
                <div className="partnerships-view-activity-page__mobile-active-jobs-container">
                  <p className="partnerships-view-activity-page__mobile-active-jobs-text">
                    Active Jobs
                  </p>
                  <p className="partnerships-view-activity-page__mobile-active-jobs-number">
                    <span className="partnerships-view-activity-page__mobile-active-jobs-first-number">
                      7
                    </span>
                    <span className="partnerships-view-activity-page__mobile-active-jobs-second-number">
                      /33
                    </span>
                  </p>
                </div>
                <div className="partnerships-view-activity-page__mobile-active-candidates-container">
                  <p className="partnerships-view-activity-page__mobile-active-candidates-text">
                    Active Candidates
                  </p>
                  <p className="partnerships-view-activity-page__mobile-active-candidates-number">
                    <span className="partnerships-view-activity-page__mobile-active-candidates-first-number">
                      4
                    </span>
                    <span className="partnerships-view-activity-page__mobile-active-candidates-second-number">
                      /25
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="partnerships-view-activity-page__mobile-my-activity-rows-container">
              <div className="partnerships-view-activity-page__mobile-my-activity-row-1">
                <div className="partnerships-view-activity-page__mobile-my-activity-row-1-top-container">
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-1-date">
                    09/15/24
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-1-job-id">
                    Job ID# 5895847
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-1-status">
                    Status: Complete
                  </p>
                </div>
                <p className="partnerships-view-activity-page__mobile-my-activity-row-1-description">
                  Job Placement Mechanical Engineer Full Time Dallas, TX
                </p>
              </div>
              <div className="partnerships-view-activity-page__mobile-my-activity-row-2">
                <div className="partnerships-view-activity-page__mobile-my-activity-row-2-top-container">
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-2-date">
                    09/15/24
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-2-job-id">
                    Job ID# 5895848
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-2-status">
                    Status: Complete
                  </p>
                </div>
                <p className="partnerships-view-activity-page__mobile-my-activity-row-2-description">
                  Candidate Placement RN Full Time Denver, CO
                </p>
              </div>
              <div className="partnerships-view-activity-page__mobile-my-activity-row-3">
                <div className="partnerships-view-activity-page__mobile-my-activity-row-3-top-container">
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-3-date">
                    09/12/24
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-3-job-id">
                    Job ID#: 5895849
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-3-status">
                    Status: Complete
                  </p>
                </div>
                <p className="partnerships-view-activity-page__mobile-my-activity-row-3-description">
                  Job Placement IT Full Time Boston, MA
                </p>
              </div>
              <div className="partnerships-view-activity-page__mobile-my-activity-row-1">
                <div className="partnerships-view-activity-page__mobile-my-activity-row-1-top-container">
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-1-date">
                    09/15/24
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-1-job-id">
                    Job ID# 5895847
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-1-status">
                    Status: Complete
                  </p>
                </div>
                <p className="partnerships-view-activity-page__mobile-my-activity-row-1-description">
                  Job Placement Mechanical Engineer Full Time Dallas, TX
                </p>
              </div>
              <div className="partnerships-view-activity-page__mobile-my-activity-row-2">
                <div className="partnerships-view-activity-page__mobile-my-activity-row-2-top-container">
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-2-date">
                    09/15/24
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-2-job-id">
                    Job ID# 5895848
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-2-status">
                    Status: Complete
                  </p>
                </div>
                <p className="partnerships-view-activity-page__mobile-my-activity-row-2-description">
                  Candidate Placement RN Full Time Denver, CO
                </p>
              </div>
              <div className="partnerships-view-activity-page__mobile-my-activity-row-3">
                <div className="partnerships-view-activity-page__mobile-my-activity-row-3-top-container">
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-3-date">
                    09/12/24
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-3-job-id">
                    Job ID#: 5895849
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-3-status">
                    Status: Complete
                  </p>
                </div>
                <p className="partnerships-view-activity-page__mobile-my-activity-row-3-description">
                  Job Placement IT Full Time Boston, MA
                </p>
              </div>
              <div className="partnerships-view-activity-page__mobile-my-activity-row-1">
                <div className="partnerships-view-activity-page__mobile-my-activity-row-1-top-container">
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-1-date">
                    09/15/24
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-1-job-id">
                    Job ID# 5895847
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-1-status">
                    Status: Complete
                  </p>
                </div>
                <p className="partnerships-view-activity-page__mobile-my-activity-row-1-description">
                  Job Placement Mechanical Engineer Full Time Dallas, TX
                </p>
              </div>
              <div className="partnerships-view-activity-page__mobile-my-activity-row-2">
                <div className="partnerships-view-activity-page__mobile-my-activity-row-2-top-container">
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-2-date">
                    09/15/24
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-2-job-id">
                    Job ID# 5895848
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-2-status">
                    Status: Complete
                  </p>
                </div>
                <p className="partnerships-view-activity-page__mobile-my-activity-row-2-description">
                  Candidate Placement RN Full Time Denver, CO
                </p>
              </div>
              <div className="partnerships-view-activity-page__mobile-my-activity-row-3">
                <div className="partnerships-view-activity-page__mobile-my-activity-row-3-top-container">
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-3-date">
                    09/12/24
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-3-job-id">
                    Job ID#: 5895849
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-3-status">
                    Status: Complete
                  </p>
                </div>
                <p className="partnerships-view-activity-page__mobile-my-activity-row-3-description">
                  Job Placement IT Full Time Boston, MA
                </p>
              </div>
              <div className="partnerships-view-activity-page__mobile-my-activity-row-1">
                <div className="partnerships-view-activity-page__mobile-my-activity-row-1-top-container">
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-1-date">
                    09/15/24
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-1-job-id">
                    Job ID# 5895847
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-1-status">
                    Status: Complete
                  </p>
                </div>
                <p className="partnerships-view-activity-page__mobile-my-activity-row-1-description">
                  Job Placement Mechanical Engineer Full Time Dallas, TX
                </p>
              </div>
              <div className="partnerships-view-activity-page__mobile-my-activity-row-2">
                <div className="partnerships-view-activity-page__mobile-my-activity-row-2-top-container">
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-2-date">
                    09/15/24
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-2-job-id">
                    Job ID# 5895848
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-2-status">
                    Status: Complete
                  </p>
                </div>
                <p className="partnerships-view-activity-page__mobile-my-activity-row-2-description">
                  Candidate Placement RN Full Time Denver, CO
                </p>
              </div>
              <div className="partnerships-view-activity-page__mobile-my-activity-row-3">
                <div className="partnerships-view-activity-page__mobile-my-activity-row-3-top-container">
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-3-date">
                    09/12/24
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-3-job-id">
                    Job ID#: 5895849
                  </p>
                  <p className="partnerships-view-activity-page__mobile-my-activity-row-3-status">
                    Status: Complete
                  </p>
                </div>
                <p className="partnerships-view-activity-page__mobile-my-activity-row-3-description">
                  Job Placement IT Full Time Boston, MA
                </p>
              </div>
            </div>
          </div>
          <div className="partnerships-view-activity-page__tablet-container">
            <p className="partnerships-view-activity-page__tablet-header">Partnerships</p>
            <PartnershipsNavbar />
          </div>
        </div>
      </div>
    </div>
  );
}
