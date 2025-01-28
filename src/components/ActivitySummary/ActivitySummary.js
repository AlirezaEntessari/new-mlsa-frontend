import React from "react";
import "./ActivitySummary.scss";
import BlueDashDividerIcon from "../../assets/icons/bluedashdivider.svg";
import OrangeDashDividerIcon from "../../assets/icons/orangedashdivider.svg";
import AllJobsDotIcon from "../../assets/icons/alljobsdot.svg";
import JobsPendingBulletIcon from "../../assets/icons/JobsPendingBullet.svg";
import JobsReviewsBulletIcon from "../../assets/icons/JobsReviewsBullet.svg";
import JobsSubmissionsBulletIcon from "../../assets/icons/JobsSubmissionsBullet.svg";
import JobsInterviewsBulletIcon from "../../assets/icons/JobsInterviewsBullet.svg";
import JobsOffersBulletIcon from "../../assets/icons/JobsOffersBullet.svg";
import JobsPlacementsBulletIcon from "../../assets/icons/JobsPlacementsBullet.svg";
import LeftArrowIcon from "../../assets/icons/PageArrowLeft.svg";
import PageNumberBlueOneIcon from "../../assets/icons/PageNumberBlue1.svg";
import PageNumberGrayTwoIcon from "../../assets/icons/PageNumberGray2.svg";
import PageNumberGrayThreeIcon from "../../assets/icons/PageNumberGray3.svg";
import RightArrowIcon from "../../assets/icons/PageArrowRight.svg";
import AllCandidatesDashDotIcon from "../../assets/icons/allcandidatesdashdot.svg";
import MyCandidatesPendingIcon from "../../assets/icons/CPendingDot.svg";
import MyCandidatesReviewsIcon from "../../assets/icons/CReviewsDot.svg";
import MyCandidatesSubmissionsIcon from "../../assets/icons/CSubmissionsDot.svg";
import MyCandidatesInterviewsIcon from "../../assets/icons/CReviewsDot.svg";
import MyCandidatesOffersIcon from "../../assets/icons/COffersDot.svg";
import MyCandidatesPlacementsIcon from "../../assets/icons/CPlacementsDot.svg";
import PageNumberPeachOneIcon from "../../assets/icons/PageNumberPeach1.svg";

export default function ActivitySummary() {
  return (
    <div className="activity-summary">
      <div className="activity-summary__mobile-container">
        <div className="activity-summary__mobile-activity-summary-container">
          <div className="activity-summary__mobile-activity-summary-top-container">
            <p className="activity-summary__mobile-activity-summary-header">
              Activity Summary
            </p>
            <div className="activity-summary__mobile-activity-summary-jobs-candidates-placements-container">
              <div className="activity-summary__mobile-activity-summary-jobs-container">
                <p className="activity-summary__mobile-activity-summary-jobs-text">
                  Jobs
                </p>
                <p className="activity-summary__mobile-activity-summary-jobs-number">
                  17
                </p>
              </div>
              <div className="activity-summary__mobile-activity-summary-candidates-container">
                <p className="activity-summary__mobile-activity-summary-candidates-text">
                  Candidates
                </p>
                <p className="activity-summary__mobile-activity-summary-candidates-number">
                  12
                </p>
              </div>
              <div className="activity-summary__mobile-activity-summary-placements-container">
                <p className="activity-summary__mobile-activity-summary-placements-text">
                  Placements
                </p>
                <p className="activity-summary__mobile-activity-summary-placements-number">
                  29
                </p>
              </div>
            </div>
          </div>
          <div className="activity-summary__mobile-activity-summary-my-jobs-container">
            <p className="activity-summary__mobile-activity-summary-my-jobs-text">
              MY JOBS
            </p>
            <img
              className="activity-summary__mobile-blue-dash-divider-icon"
              src={BlueDashDividerIcon}
              alt="Blue Dash Divider Icon"
            />
          </div>
          <div className="activity-summary__mobile-activity-summary-my-jobs-dashboard-container">
            <div className="activity-summary__mobile-activity-summary-my-jobs-top-dashboard-container">
              <p className="activity-summary__mobile-activity-summary-my-jobs-all-jobs">
                <img
                  className="activity-summary__mobile-activity-summary-all-jobs-dot-icon"
                  src={AllJobsDotIcon}
                  alt="All Jobs Dot Icon"
                />
                <span className="activity-summary__mobile-activity-summary-all-jobs-text">
                  All Jobs
                </span>
              </p>
              <p className="activity-summary__mobile-activity-summary-my-jobs-pending">
                <img
                  className="activity-summary__mobile-activity-summary-jobs-pending-bullet-icon"
                  src={JobsPendingBulletIcon}
                  alt="Jobs Pending Bullet Icon"
                />
                <span className="activity-summary__mobile-activity-summary-jobs-pending-text">
                  Pending
                </span>
              </p>
              <p className="activity-summary__mobile-activity-summary-my-jobs-reviews">
                <img
                  className="activity-summary__mobile-activity-summary-jobs-reviews-bullet-icon"
                  src={JobsReviewsBulletIcon}
                  alt="Jobs Reviews Bullet Icon"
                />
                <span className="activity-summary__mobile-activity-summary-jobs-reviews-text">
                  Reviews
                </span>
              </p>
              <p className="activity-summary__mobile-activity-summary-my-jobs-submissions">
                <img
                  className="activity-summary__mobile-activity-summary-jobs-submissions-bullet-icon"
                  src={JobsSubmissionsBulletIcon}
                  alt="Jobs Submissions Bullet Icon"
                />
                <span className="activity-summary__mobile-activity-summary-jobs-submissions-text">
                  Submissions
                </span>
              </p>
            </div>
            <div className="activity-summary__mobile-activity-summary-my-jobs-bottom-dashboard-container">
              <p className="activity-summary__mobile-activity-summary-my-jobs-interviews">
                <img
                  className="activity-summary__mobile-activity-summary-jobs-interviews-bullet-icon"
                  src={JobsInterviewsBulletIcon}
                  alt="Jobs Interviews Bullet Icon"
                />
                <span className="activity-summary__mobile-activity-summary-jobs-interviews-text">
                  Interviews
                </span>
              </p>
              <p className="activity-summary__mobile-activity-summary-my-jobs-offers">
                <img
                  className="activity-summary__mobile-activity-summary-jobs-offers-bullet-icon"
                  src={JobsOffersBulletIcon}
                  alt="Jobs Offers Bullet Icon"
                />
                <span className="activity-summary__mobile-activity-summary-jobs-offers-text">
                  Offers
                </span>
              </p>
              <p className="activity-summary__mobile-activity-summary-my-jobs-placements">
                <img
                  className="activity-summary__mobile-activity-summary-jobs-placements-bullet-icon"
                  src={JobsPlacementsBulletIcon}
                  alt="Jobs Placements Bullet Icon"
                />
                <span className="activity-summary__mobile-activity-summary-jobs-placements-text">
                  Placements
                </span>
              </p>
            </div>
          </div>
          <div className="activity-summary__mobile-activity-summary-description-status-applicants-container">
            <p className="activity-summary__mobile-activity-summary-description">
              DESCRIPTION
            </p>
            <p className="activity-summary__mobile-activity-summary-status">
              STATUS
            </p>
            <p className="activity-summary__mobile-activity-summary-applicants">
              APPLICANTS
            </p>
          </div>
          <div className="activity-summary__mobile-activity-summary-job-openings-container">
            <p className="activity-summary__mobile-activity-summary-job-openings-ct-tech">
              CT Tech at Berkshire Medical Center
            </p>
            <p className="activity-summary__mobile-activity-summary-job-openings-ct-tech-description">
              <span className="activity-summary__mobile-activity-summary-job-openings-ct-tech-job-nature">
                Contract
              </span>
              <span className="activity-summary__mobile-activity-summary-job-openings-ct-tech-job-duration">
                27 days Remaining
              </span>
              <span className="activity-summary__mobile-activity-summary-job-openings-ct-tech-job-status">
                Active
              </span>
              <span className="activity-summary__mobile-activity-summary-job-openings-ct-tech-job-number">
                5
              </span>
            </p>
            <p className="activity-summary__mobile-activity-summary-job-openings-ultrasound-tech">
              Ultrasound Tech at Texas Health Presbyterian
            </p>
            <p className="activity-summary__mobile-activity-summary-job-openings-ultrasound-tech-description">
              <span className="activity-summary__mobile-activity-summary-job-openings-ultrasound-tech-job-nature">
                Contract
              </span>
              <span className="activity-summary__mobile-activity-summary-job-openings-ultrasound-tech-job-duration">
                28 Days Remaining
              </span>
              <span className="activity-summary__mobile-activity-summary-job-openings-ultrasound-tech-job-status">
                Active
              </span>
              <span className="activity-summary__mobile-activity-summary-job-openings-ultrasound-tech-job-number">
                8
              </span>
            </p>
            <p className="activity-summary__mobile-activity-summary-job-openings-cna">
              CNA at Atrium Health Union West
            </p>
            <p className="activity-summary__mobile-activity-summary-job-openings-cna-description">
              <span className="activity-summary__mobile-activity-summary-job-openings-cna-job-nature">
                Contract
              </span>
              <span className="activity-summary__mobile-activity-summary-job-openings-cna-job-duration">
                29 Days Remaining
              </span>
              <span className="activity-summary__mobile-activity-summary-job-openings-cna-job-status">
                Active
              </span>
              <span className="activity-summary__mobile-activity-summary-job-openings-cna-job-number">
                10
              </span>
            </p>
            <p className="activity-summary__mobile-activity-summary-job-openings-allied-cma">
              Allied CMA at Texas Health Presbyterian
            </p>
            <p className="activity-summary__mobile-activity-summary-job-openings-allied-cma-description">
              <span className="activity-summary__mobile-activity-summary-job-openings-allied-cma-job-nature">
                Contract
              </span>
              <span className="activity-summary__mobile-activity-summary-job-openings-allied-cma-job-duration">
                30 Days Remaining
              </span>
              <span className="activity-summary__mobile-activity-summary-job-openings-allied-cma-job-status">
                Expired
              </span>
              <span className="activity-summary__mobile-activity-summary-job-openings-allied-cma-job-number">
                4
              </span>
            </p>
            <div className="activity-summary__mobile-activity-summary-job-openings-navigation-container">
              <img
                className="activity-summary__mobile-activity-summary-job-openings-left-arrow-icon"
                src={LeftArrowIcon}
                alt="Left Arrow Icon"
              />
              <img
                className="activity-summary__mobile-activity-summary-job-openings-page-number-blue-one-icon"
                src={PageNumberBlueOneIcon}
                alt="Page Number Blue One Icon"
              />
              <img
                className="activity-summary__mobile-activity-summary-job-openings-page-number-gray-two-icon"
                src={PageNumberGrayTwoIcon}
                alt="Page Number Gray Two Icon"
              />
              <img
                className="activity-summary__mobile-activity-summary-job-openings-page-number-gray-three-icon"
                src={PageNumberGrayThreeIcon}
                alt="Page Number Gray Three Icon"
              />
              <img
                className="activity-summary__mobile-activity-summary-job-openings-right-arrow-icon"
                src={RightArrowIcon}
                alt="Right Arrow Icon"
              />
            </div>
          </div>
          <div className="activity-summary__mobile-activity-summary-my-candidates-container">
            <div className="activity-summary__mobile-activity-summary-my-candidates-top-container">
              <p className="activity-summary__mobile-activity-summary-my-candidates-text">
                MY CANDIDATES
              </p>
              <img
                className="activity-summary__mobile-activity-summary-orange-dash-divider-icon"
                src={OrangeDashDividerIcon}
                alt="Orange Dash Divider Icon"
              />
            </div>
            <div className="activity-summary__mobile-activity-summary-dashboard-container">
              <div className="activity-summary__mobile-activity-summary-dashboard-top-container">
                <p className="activity-summary__mobile-activity-summary-dashboard-all-candidates">
                  <img
                    className="activity-summary__mobile-all-candidates-dash-dot-icon"
                    src={AllCandidatesDashDotIcon}
                    alt="All Candidates Dash Dot Icon"
                  />
                  <span className="activity-summary__mobile-activity-summary-all-candidates-text">
                    All Candidates
                  </span>
                </p>
                <p className="activity-summary__mobile-activity-summary-dashboard-pending">
                  <img
                    className="activity-summary__mobile-my-candidates-pending-icon"
                    src={MyCandidatesPendingIcon}
                    alt="My Candidates Pending Icon"
                  />
                  <span className="activity-summary__mobile-activity-summary-pending-text">
                    Pending
                  </span>
                </p>
                <p className="activity-summary__mobile-activity-summary-dashboard-reviews">
                  <img
                    className="activity-summary__mobile-my-candidates-reviews-icon"
                    src={MyCandidatesReviewsIcon}
                    alt="My Candidates Reviews Icon"
                  />
                  <span className="activity-summary__mobile-activity-summary-reviews-text">
                    Reviews
                  </span>
                </p>
                <p className="activity-summary__mobile-activity-summary-dashboard-submissions">
                  <img
                    className="activity-summary__mobile-my-candidates-submissions-icon"
                    src={MyCandidatesSubmissionsIcon}
                    alt="My Candidates Submissions Icon"
                  />
                  <span className="activity-summary__mobile-activity-summary-submissions-text">
                    Submissions
                  </span>
                </p>
              </div>
              <div className="activity-summary__mobile-activity-summary-dashboard-bottom-container">
                <p className="activity-summary__mobile-activity-summary-dashboard-interviews">
                  <img
                    className="activity-summary__mobile-my-candidates-interviews-icon"
                    src={MyCandidatesInterviewsIcon}
                    alt="My Candidates Interviews Icon"
                  />
                  <span className="activity-summary__mobile-activity-summary-dashboard-interviews-text">
                    Interviews
                  </span>
                </p>
                <p className="activity-summary__mobile-activity-summary-dashboard-offers">
                  <img
                    className="activity-summary__mobile-my-candidates-offers-icon"
                    src={MyCandidatesOffersIcon}
                    alt="My Candidates Offers Icon"
                  />
                  <span className="activity-summary__mobile-activity-summary-offers-text">
                    Offers
                  </span>
                </p>
                <p className="activity-summary__mobile-activity-summary-dashboard-placements">
                  <img
                    className="activity-summary__mobile-my-candidates-placements-icon"
                    src={MyCandidatesPlacementsIcon}
                    alt="My Candidates Placements Icon"
                  />
                  <span className="activity-summary__mobile-activity-summary-placements-text">
                    Placements
                  </span>
                </p>
              </div>
            </div>
            <div className="activity-summary__mobile-my-candidates-description-status-requests-container">
              <p className="activity-summary__mobile-my-candidates-description-text">
                DESCRIPTION
              </p>
              <p className="activity-summary__mobile-my-candidates-status-text">
                STATUS
              </p>
              <p className="activity-summary__mobile-my-candidates-requests-text">
                REQUESTS
              </p>
            </div>
            <div className="activity-summary__mobile-my-candidates-dashboard-container">
              <p className="activity-summary__mobile-my-candidates-dashboard-ann-morton">
                Ann Morton
              </p>
              <p className="activity-summary__mobile-my-candidates-dashboard-ann-morton-description">
                <span className="activity-summary__mobile-my-candidates-dashboard-ann-morton-job-title">
                  RN - ER
                </span>
                <span className="activity-summary__mobile-my-candidates-dashboard-ann-morton-duration">
                  27 Days Remaining
                </span>
                <span className="activity-summary__mobile-my-candidates-dashboard-ann-morton-status">
                  Active
                </span>
                <span className="activity-summary__mobile-my-candidates-dashboard-ann-morton-number-of-jobs">
                  2 Jobs
                </span>
              </p>
              <p className="activity-summary__mobile-my-candidates-dashboard-sarah-davis">
                Sarah Davis
              </p>
              <p className="activity-summary__mobile-my-candidates-dashboard-sarah-davis-description">
                <span className="activity-summary__mobile-my-candidates-dashboard-sarah-davis-job-title">
                  Ultrasound Tech
                </span>
                <span className="activity-summary__mobile-my-candidates-dashboard-sarah-davis-duration">
                  34 Days Remaining
                </span>
                <span className="activity-summary__mobile-my-candidates-dashboard-sarah-davis-status">
                  Active
                </span>
                <span className="activity-summary__mobile-my-candidates-dashboard-sarah-davis-number-of-jobs">
                  4 Jobs
                </span>
              </p>
              <p className="activity-summary__mobile-my-candidates-dashboard-joe-williams">
                Joe Williams
              </p>
              <p className="activity-summary__mobile-my-candidates-dashboard-joe-williams-description">
                <span className="activity-summary__mobile-my-candidates-dashboard-joe-williams-job-title">
                  CNA
                </span>
                <span className="activity-summary__mobile-my-candidates-dashboard-joe-williams-duration">
                  35 Days Remaining
                </span>
                <span className="activity-summary__mobile-my-candidates-dashboard-joe-williams-status">
                  Active
                </span>
                <span className="activity-summary__mobile-my-candidates-dashboard-joe-williams-number-of-jobs">
                  5 Jobs
                </span>
              </p>
              <p className="activity-summary__mobile-my-candidates-dashboard-tim-peterson">
                Tim Peterson
              </p>
              <p className="activity-summary__mobile-my-candidates-dashboard-tim-peterson-description">
                <span className="activity-summary__mobile-my-candidates-dashboard-tim-peterson-job-title">
                  RN-ER
                </span>
                <span className="activity-summary__mobile-my-candidates-dashboard-tim-peterson-duration">
                  0 Days Remaining
                </span>
                <span className="activity-summary__mobile-my-candidates-dashboard-tim-peterson-status">
                  Expired
                </span>
                <span className="activity-summary__mobile-my-candidates-dashboard-tim-peterson-number-of-jobs">
                  0 Jobs
                </span>
              </p>
            </div>
            <div className="activity-summary__mobile-my-candidates-navigation-container">
              <img
                className="activity-summary__mobile-my-candidates-left-arrow-icon"
                src={LeftArrowIcon}
                alt="Left Arrow Icon"
              />
              <img
                className="activity-summary__mobile-my-candidates-page-number-peach-one-icon"
                src={PageNumberPeachOneIcon}
                alt="Page Number Peach One Icon"
              />
              <img
                className="activity-summary__mobile-my-candidates-page-number-gray-two-icon"
                src={PageNumberGrayTwoIcon}
                alt="Page Number Gray Two Icon"
              />
              <img
                className="activity-summary__mobile-my-candidates-page-number-gray-three-icon"
                src={PageNumberGrayThreeIcon}
                alt="Page Number Gray Three Icon"
              />
              <img
                className="activity-summary__mobile-my-candidates-page-number-right-arrow-icon"
                src={RightArrowIcon}
                alt="Right Arrow Icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="activity-summary__tablet-container">
        <div className="activity-summary__tablet-activity-summary-container">
          <div className="activity-summary__tablet-activity-summary-top-container">
            <p className="activity-summary__tablet-activity-summary-header">
              Activity Summary
            </p>
            <div className="activity-summary__tablet-activity-summary-jobs-candidates-placements-container">
              <div className="activity-summary__tablet-activity-summary-jobs-container">
                <p className="activity-summary__tablet-activity-summary-jobs-text">
                  Jobs
                </p>
                <p className="activity-summary__tablet-activity-summary-jobs-number">
                  17
                </p>
              </div>
              <div className="activity-summary__tablet-activity-summary-candidates-container">
                <p className="activity-summary__tablet-activity-summary-candidates-text">
                  Candidates
                </p>
                <p className="activity-summary__tablet-activity-summary-candidates-number">
                  12
                </p>
              </div>
              <div className="activity-summary__tablet-activity-summary-placements-container">
                <p className="activity-summary__tablet-activity-summary-placements-text">
                  Placements
                </p>
                <p className="activity-summary__tablet-activity-summary-placements-number">
                  29
                </p>
              </div>
            </div>
          </div>
          <div className="activity-summary__tablet-activity-summary-my-jobs-container">
            <div className="activity-summary__tablet-activity-summary-my-jobs-header-container">
              <p className="activity-summary__tablet-activity-summary-my-jobs-header-text">
                MY JOBS
              </p>
              <img
                className="activity-summary__tablet-blue-dash-divider-icon"
                src={BlueDashDividerIcon}
                alt="Blue Dash Divider Icon"
              />
            </div>
            <div className="activity-summary__tablet-activity-summary-my-jobs-top-dashboard-container">
              <p className="activity-summary__tablet-activity-summary-my-jobs-all-jobs">
                <img
                  className="activity-summary__tablet-activity-summary-all-jobs-dot-icon"
                  src={AllJobsDotIcon}
                  alt="All Jobs Dot Icon"
                />
                <span className="activity-summary__tablet-activity-summary-all-jobs-text">
                  All Jobs
                </span>
              </p>
              <p className="activity-summary__tablet-activity-summary-my-jobs-pending">
                <img
                  className="activity-summary__tablet-jobs-pending-bullet-icon"
                  src={JobsPendingBulletIcon}
                  alt="Jobs Pending Bullet Icon"
                />
                <span className="activity-summary__tablet-activity-summary-pending-text">
                  Pending
                </span>
              </p>
              <p className="activity-summary__tablet-activity-summary-reviews">
                <img
                  className="activity-summary__tablet-jobs-reviews-bullet-icon"
                  src={JobsReviewsBulletIcon}
                  alt="Jobs Reviews Bullet Icon"
                />
                <span className="activity-summary__tablet-activity-summary-reviews-text">
                  Reviews
                </span>
              </p>
              <p className="activity-summary__tablet-activity-summary-submissions">
                <img
                  className="activity-summary__tablet-jobs-submissions-bullet-icon"
                  src={JobsSubmissionsBulletIcon}
                  alt="Jobs Submissions Bullet Icon"
                />
                <span className="activity-summary__tablet-activity-summary-submissions-text">
                  Submissions
                </span>
              </p>
              <p className="activity-summary__tablet-activity-summary-interviews">
                <img
                  className="activity-summary__tablet-jobs-interviews-bullet-icon"
                  src={JobsInterviewsBulletIcon}
                  alt="Jobs Interviews Bullet Icon"
                />
                <span className="activity-summary__tablet-activity-summary-interviews-text">
                  Interviews
                </span>
              </p>
              <p className="activity-summary__tablet-activity-summary-offers">
                <img
                  className="activity-summary__tablet-jobs-offers-bullet-icon"
                  src={JobsOffersBulletIcon}
                  alt="Jobs Offers Bullet Icon"
                />
                <span className="activity-summary__tablet-activity-summary-offers-text">
                  Offers
                </span>
              </p>
              <p className="activity-summary__tablet-activity-summary-placements">
                <img
                  className="activity-summary__tablet-jobs-placements-bullet-icon"
                  src={JobsPlacementsBulletIcon}
                  alt="Jobs Placements Bullet Icon"
                />
                <span className="activity-summary__tablet-activity-summary-placements-text">
                  Placements
                </span>
              </p>
            </div>
            <div className="activity-summary__tablet-description-status-applicants-container">
              <p className="activity-summary__tablet-description-text">
                DESCRIPTION
              </p>
              <p className="activity-summary__tablet-status-text">STATUS</p>
              <p className="activity-summary__tablet-applicants-text">
                APPLICANTS
              </p>
            </div>
            <div className="activity-summary__tablet-my-jobs-job-description-container">
              <p className="activity-summary__tablet-ct-tech">
                CT Tech at Berkshire Medical Center
              </p>
              <p className="activity-summary__tablet-ct-tech-description">
                <span className="activity-summary__tablet-ct-tech-job-nature">
                  Contract
                </span>
                <span className="activity-summary__tablet-ct-tech-job-duration">
                  27 Days Remaining
                </span>
                <span className="activity-summary__tablet-ct-tech-job-status">
                  Active
                </span>
                <span className="activity-summary__tablet-ct-tech-job-number-of-applicants">
                  5 Candidates
                </span>
              </p>
              <p className="activity-summary__tablet-ultrasound-tech">
                Ultrasound Tech at Texas Health Presbyterian
              </p>
              <p className="activity-summary__tablet-ultrasound-tech-description">
                <span className="activity-summary__tablet-ultrasound-tech-job-nature">
                  Contract
                </span>
                <span className="activity-summary__tablet-ultrasound-tech-job-duration">
                  28 Days Remaining
                </span>
                <span className="activity-summary__tablet-ultrasound-tech-job-status">
                  Active
                </span>
                <span className="activity-summary__tablet-ultrasound-tech-job-number-of-applicants">
                  8 Candidates
                </span>
              </p>
              <p className="activity-summary__tablet-cna">
                CNA at Atrium Health Union West
              </p>
              <p className="activity-summary__tablet-cna-description">
                <span className="activity-summary__tablet-cna-job-nature">
                  Contract
                </span>
                <span className="activity-summary__tablet-cna-job-duration">
                  29 Days Remaining
                </span>
                <span className="activity-summary__tablet-cna-job-status">
                  Active
                </span>
                <span className="activity-summary__tablet-cna-job-number-of-applicants">
                  10 Candidates
                </span>
              </p>
              <p className="activity-summary__tablet-allied-cma">
                Allied CMA at Texas Health Presbyterian
              </p>
              <p className="activity-summary__tablet-allied-cma-description">
                <span className="activity-summary__tablet-allied-cma-nature">
                  Contract
                </span>
                <span className="activity-summary__tablet-allied-cma-duration">
                  30 Days Remaining
                </span>
                <span className="activity-summary__tablet-allied-cma-status">
                  Expired
                </span>
                <span className="activity-summary__tablet-allied-cma-applicants">
                  4 Candidates
                </span>
              </p>
            </div>
            <div className="activity-summary__tablet-my-jobs-navigation-container">
              <img
                className="activity-summary__tablet-left-arrow-icon"
                src={LeftArrowIcon}
                alt="Left Arrow Icon"
              />
              <img
                className="activity-summary__tablet-page-number-blue-one-icon"
                src={PageNumberBlueOneIcon}
                alt="Page Number Blue One Icon"
              />
              <img
                className="activity-summary__tablet-page-number-gray-two-icon"
                src={PageNumberGrayTwoIcon}
                alt="Page Number Gray Two Icon"
              />
              <img
                className="activity-summary__tablet-page-number-gray-three-icon"
                src={PageNumberGrayThreeIcon}
                alt="Page Number Gray Three Icon"
              />
              <img
                className="activity-summary__tablet-right-arrow-icon"
                src={RightArrowIcon}
                alt="Right Arrow Icon"
              />
            </div>
          </div>
          <div className="activity-summary__tablet-activity-summary-my-candidates-container">
            <div className="activity-summary__tablet-activity-summary-my-candidates-header-container">
              <p className="activity-summary__tablet-activity-summary-my-candidates-header-text">
                MY CANDIDATES
              </p>
              <img
                className="activity-summary__tablet-orange-dash-divider-icon"
                src={OrangeDashDividerIcon}
                alt="Orange Dash Divider Icon"
              />
            </div>
            <div className="activity-summary__tablet-top-dashboard-container">
              <p className="activity-summary__tablet-my-candidates-all-candidates">
                <img
                  className="activity-summary__tablet-all-candidates-dash-dot-icon"
                  src={AllCandidatesDashDotIcon}
                  alt="All Candidates Dash Dat Icon"
                />
                <span className="activity-summary__tablet-my-candidates-all-candidates-text">
                  All Candidates
                </span>
              </p>
              <p className="activity-summary__tablet-my-candidates-pending">
                <img
                  className="activity-summary__tablet-my-candidates-pending-icon"
                  src={MyCandidatesPendingIcon}
                  alt="My Candidates Pending Icon"
                />
                <span className="activity-summary__tablet-my-candidates-pending-text">
                  Pending
                </span>
              </p>
              <p className="activity-summary__tablet-my-candidates-reviews">
                <img
                  className="activity-summary__tablet-my-candidates-reviews-icon"
                  src={MyCandidatesReviewsIcon}
                  alt="My Candidates Reviews Icon"
                />
                <span className="activity-summary__tablet-my-candidates-reviews-text">
                  Reviews
                </span>
              </p>
              <p className="activity-summary__tablet-my-candidates-submissions">
                <img
                  className="activity-summary__tablet-my-candidates-submissions-icon"
                  src={MyCandidatesSubmissionsIcon}
                  alt="My Candidates Submissions Icon"
                />
                <span className="activity-summary__tablet-my-candidates-submissions-text">
                  Submissions
                </span>
              </p>
              <p className="activity-summary__tablet-my-candidates-interviews">
                <img
                  className="activity-summary__tablet-my-candidates-interviews-icon"
                  src={MyCandidatesInterviewsIcon}
                  alt="My Candidates Interviews Icon"
                />
                <span className="activity-summary__tablet-my-candidates-interviews-text">
                  Interviews
                </span>
              </p>
              <p className="activity-summary__tablet-my-candidates-offers">
                <img
                  className="activity-summary__tablet-my-candidates-offers-icon"
                  src={MyCandidatesOffersIcon}
                  alt="My Candidates Offers Icon"
                />
                <span className="activity-summary__tablet-my-candidates-offers-text">
                  Offers
                </span>
              </p>
              <p className="activity-summary__tablet-my-candidates-placements">
                <img
                  className="activity-summary__tablet-my-candidates-placements-icon"
                  src={MyCandidatesPlacementsIcon}
                  alt="My Candidates Placements Icon"
                />
                <span className="activity-summary__tablet-my-candidates-placements-text">
                  Placements
                </span>
              </p>
            </div>
            <div className="activity-summary__tablet-my-candidates-description-status-requests-container">
              <p className="activity-summary__tablet-my-candidates-description-text">
                DESCRIPTION
              </p>
              <p className="activity-summary__tablet-my-candidates-status-text">
                STATUS
              </p>
              <p className="activity-summary__tablet-my-candidates-requests-text">
                REQUESTS
              </p>
            </div>
            <div className="activity-summary__tablet-my-candidates-description-container">
              <p className="activity-summary__tablet-my-candidates-ann-morton">
                Ann Morton
              </p>
              <p className="activity-summary__tablet-my-candidates-ann-morton-description">
                <span className="activity-summary__tablet-my-candidates-ann-morton-job-title">
                  RN - ER
                </span>
                <span className="activity-summary__tablet-my-candidates-ann-morton-duration">
                  27 Days Remaining
                </span>
                <span className="activity-summary__tablet-my-candidates-ann-morton-status">
                  Active
                </span>
                <span className="activity-summary__tablet-my-candidates-ann-morton-requests">
                  2 Jobs
                </span>
              </p>
              <p className="activity-summary__tablet-my-candidates-sarah-davis">
                Sarah Davis
              </p>
              <p className="activity-summary__tablet-my-candidates-sarah-davis-description">
                <span className="activity-summary__tablet-my-candidates-sarah-davis-job-title">
                  Ultrasound Tech
                </span>
                <span className="activity-summary__tablet-my-candidates-sarah-davis-duration">
                  34 Days Remaining
                </span>
                <span className="activity-summary__tablet-my-candidates-sarah-davis-status">
                  Active
                </span>
                <span className="activity-summary__tablet-my-candidates-sarah-davis-requests">
                  4 Jobs
                </span>
              </p>
              <p className="activity-summary__tablet-my-candidates-joe-williams">
                Joe Williams
              </p>
              <p className="activity-summary__tablet-my-candidates-joe-williams-description">
                <span className="activity-summary__tablet-my-candidates-joe-williams-job-title">
                  CNA
                </span>
                <span className="activity-summary__tablet-my-candidates-joe-williams-duration">
                  35 Days Remaining
                </span>
                <span className="activity-summary__tablet-my-candidates-joe-williams-status">
                  Active
                </span>
                <span className="activity-summary__tablet-my-candidates-joe-williams-requests">
                  5 Jobs
                </span>
              </p>
              <p className="activity-summary__tablet-my-candidates-tim-peterson">
                Tim Peterson
              </p>
              <p className="activity-summary__tablet-my-candidates-tim-peterson-description">
                <span className="activity-summary__tablet-my-candidates-tim-peterson-job-title">
                  RN - ER
                </span>
                <span className="activity-summary__tablet-my-candidates-tim-peterson-duration">
                  0 Days Remaining
                </span>
                <span className="activity-summary__tablet-my-candidates-tim-peterson-status">
                  Expired
                </span>
                <span className="activity-summary__tablet-my-candidates-tim-peterson-requests">
                  0 Jobs
                </span>
              </p>
            </div>
            <div className="activity-summary__tablet-my-candidates-navigation-container">
              <img
                className="activity-summary__tablet-my-candidates-left-arrow-icon"
                src={LeftArrowIcon}
                alt="Left Arrow Icon"
              />
              <img
                className="activity-summary__tablet-my-candidates-page-number-peach-one-icon"
                src={PageNumberPeachOneIcon}
                alt="Page Number Peach One Icon"
              />
              <img
                className="activity-summary__tablet-my-candidates-page-number-gray-two-icon"
                src={PageNumberGrayTwoIcon}
                alt="Page Number Gray Two Icon"
              />
              <img
                className="activity-summary__tablet-my-candidates-page-number-gray-three-icon"
                src={PageNumberGrayThreeIcon}
                alt="Page Number Gray Three Icon"
              />
              <img
                className="activity-summary__tablet-my-candidates-right-arrow-icon"
                src={RightArrowIcon}
                alt="Right Arrow Icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="activity-summary__desktop-container">
        <div className="activity-summary__desktop-activity-summary-container">
          <div className="activity-summary__desktop-activity-summary-top-container">
            <p className="activity-summary__desktop-activity-summary-header">
              Activity Summary
            </p>
            <div className="activity-summary__desktop-activity-summary-jobs-candidates-placements-container">
              <div className="activity-summary__desktop-activity-summary-jobs-container">
                <p className="activity-summary__desktop-activity-summary-jobs-text">
                  Jobs
                </p>
                <p className="activity-summary__desktop-activity-summary-jobs-number">
                  0
                </p>
              </div>
              <div className="activity-summary__desktop-activity-summary-candidates-container">
                <p className="activity-summary__desktop-activity-summary-candidates-text">
                  Candidates
                </p>
                <p className="activity-summary__desktop-activity-summary-candidates-number">
                  0
                </p>
              </div>
              <div className="activity-summary__desktop-activity-summary-placements-container">
                <p className="activity-summary__desktop-activity-summary-placements-text">
                  Placements
                </p>
                <p className="activity-summary__desktop-activity-summary-placements-number">
                  0
                </p>
              </div>
            </div>
          </div>
          <div className="activity-summary__desktop-activity-summary-my-jobs-container">
            <div className="activity-summary__desktop-activity-summary-my-jobs-top-container">
              <p className="activity-summary__desktop-activity-summary-my-jobs-header">
                MY JOBS
              </p>
              <img
                className="activity-summary__desktop-activity-summary-my-jobs-blue-dash-divider-icon"
                src={BlueDashDividerIcon}
                alt="Blue Dash Divider Icon"
              />
            </div>
            <div className="activity-summary__desktop-activity-summary-my-jobs-dashboard-container">
              <p className="activity-summary__desktop-activity-summary-my-jobs-all-jobs">
                <img
                  className="activity-summary__desktop-all-jobs-dot-icon"
                  src={AllJobsDotIcon}
                  alt="All Jobs Dot Icon"
                />
                <span className="activity-summary__desktop-activity-summary-my-jobs-all-jobs-text">
                  All Jobs
                </span>
              </p>
              <p className="activity-summary__desktop-activity-summary-my-jobs-pending">
                <img
                  className="activity-summary__desktop-jobs-pending-bullet-icon"
                  src={JobsPendingBulletIcon}
                  alt="Jobs Pending Bullet Icon"
                />
                <span className="activity-summary__desktop-activity-summary-my-jobs-pending-text">
                  Pending
                </span>
              </p>
              <p className="activity-summary__desktop-activity-summary-my-jobs-reviews">
                <img
                  className="activity-summary__desktop-jobs-reviews-bullet-icon"
                  src={JobsReviewsBulletIcon}
                  alt="Jobs Reviews Bullet Icon"
                />
                <span className="activity-summary__desktop-activity-summary-my-jobs-reviews-text">
                  Reviews
                </span>
              </p>
              <p className="activity-summary__desktop-activity-summary-my-jobs-submissions">
                <img
                  className="activity-summary__desktop-jobs-submissions-bullet-icon"
                  src={JobsSubmissionsBulletIcon}
                  alt="Jobs Submissions Bullet Icon"
                />
                <span className="activity-summary__desktop-activity-summary-my-jobs-submissions-text">
                  Submissions
                </span>
              </p>
              <p className="activity-summary__desktop-activity-summary-my-jobs-interviews">
                <img
                  className="activity-summary__desktop-jobs-interviews-bullet-icon"
                  src={JobsInterviewsBulletIcon}
                  alt="Jobs Interviews Bullet Icon"
                />
                <span className="activity-summary__desktop-activity-summary-my-jobs-interviews-text">
                  Interviews
                </span>
              </p>
              <p className="activity-summary__desktop-activity-summary-my-jobs-offers">
                <img
                  className="activity-summary__desktop-jobs-offers-bullet-icon"
                  src={JobsOffersBulletIcon}
                  alt="Jobs Offers Bullet Icon"
                />
                <span className="activity-summary__desktop-activity-summary-my-jobs-offers-text">
                  Offers
                </span>
              </p>
              <p className="activity-summary__desktop-activity-summary-my-jobs-placements">
                <img
                  className="activity-summary__desktop-jobs-placements-bullet-icon"
                  src={JobsPlacementsBulletIcon}
                  alt="Jobs Placements Bullet Icon"
                />
                <span className="activity-summary__desktop-activity-summary-my-jobs-placements-text">
                  Placements
                </span>
              </p>
            </div>
            <div className="activity-summary__desktop-activity-summary-my-jobs-description-status-applicants-container">
              <p className="activity-summary__desktop-activity-summary-my-jobs-description-text">
                DESCRIPTION
              </p>
              <p className="activity-summary__desktop-activity-summary-my-jobs-status-text">
                STATUS
              </p>
              <p className="activity-summary__desktop-activity-summary-my-jobs-applicants-text">
                APPLICANTS
              </p>
            </div>
            <button className="activity-summary__desktop-post-my-first-job-button">
              Post My First Job
            </button>
            <div className="activity-summary__desktop-activity-summary-my-jobs-navigation-container">
              <img
                className="activity-summary__desktop-activity-summary-my-jobs-left-arrow-icon"
                src={LeftArrowIcon}
                alt="Left Arrow Icon"
              />
              <img
                className="activity-summary__desktop-activity-summary-my-jobs-page-number-blue-one-icon"
                src={PageNumberBlueOneIcon}
                alt="Page Number Blue One Icon"
              />
              <img
                className="activity-summary__desktop-activity-summary-my-jobs-right-arrow-icon"
                src={RightArrowIcon}
                alt="Right Arrow Icon"
              />
            </div>
          </div>
          <div className="activity-summary__desktop-activity-summary-my-candidates-container">
            <div className="activity-summary__desktop-activity-summary-my-candidates-top-container">
              <p className="activity-summary__desktop-activity-summary-my-candidates-header">
                MY CANDIDATES
              </p>
              <img
                className="activity-summary__desktop-orange-dash-divider-icon"
                src={OrangeDashDividerIcon}
                alt="Orange Dash Divider Icon"
              />
            </div>
            <div className="activity-summary__desktop-activity-summary-my-candidates-dashboard-container">
              <p className="activity-summary__desktop-activity-summary-my-candidates-all-candidates">
                <img
                  className="activity-summary__desktop-all-candidates-dash-dot-icon"
                  src={AllCandidatesDashDotIcon}
                  alt="All Candidates Dash Dot Icon"
                />
                <span className="activity-summary__desktop-activity-summary-my-candidates-all-candidates-text">
                  All Candidates
                </span>
              </p>
              <p className="activity-summary__desktop-activity-summary-my-candidates-pending">
                <img
                  className="activity-summary__desktop-my-candidates-pending-icon"
                  src={MyCandidatesPendingIcon}
                  alt="My Candidates Pending Icon"
                />
                <span className="activity-summary__desktop-activity-summary-my-candidates-pending-text">
                  Pending
                </span>
              </p>
              <p className="activity-summary__desktop-activity-summary-my-candidates-reviews">
                <img
                  className="activity-summary__desktop-activity-summary-my-candidates-reviews-icon"
                  src={MyCandidatesReviewsIcon}
                  alt="My Candidates Reviews Icon"
                />
                <span className="activity-summary__desktop-activity-summary-my-candidates-reviews-text">
                  Reviews
                </span>
              </p>
              <p className="activity-summary__desktop-activity-summary-my-candidates-submissions">
                <img
                  className="activity-summary__desktop-activity-summary-my-candidates-submissions-icon"
                  src={MyCandidatesSubmissionsIcon}
                  alt="My Candidates Submissions Icon"
                />
                <span className="activity-summary__desktop-activity-summary-my-candidates-submissions-text">
                  Submissions
                </span>
              </p>
              <p className="activity-summary__desktop-activity-summary-my-candidates-interviews">
                <img
                  className="activity-summary__desktop-my-candidates-interviews-icon"
                  src={MyCandidatesInterviewsIcon}
                  alt="My Candidates Interviews Icon"
                />
                <span className="activity-summary__desktop-activity-summary-my-candidates-interviews-text">
                  Interviews
                </span>
              </p>
              <p className="activity-summary__desktop-activity-summary-my-candidates-offers">
                <img
                  className="activity-summary__desktop-my-candidates-offers-icon"
                  src={MyCandidatesOffersIcon}
                  alt="My Candidates Offers Icon"
                />
                <span className="activity-summary__desktop-activity-summary-my-candidates-offers-text">
                  Offers
                </span>
              </p>
              <p className="activity-summary__desktop-activity-summary-my-candidates-placements">
                <img
                  className="activity-summary__desktop-my-candidates-placements-icon"
                  src={MyCandidatesPlacementsIcon}
                  alt="My Candidates Placements Icon"
                />
                <span className="activity-summary__desktop-activity-summary-my-candidates-placements-text">
                  Placements
                </span>
              </p>
            </div>
            <div className="activity-summary__desktop-activity-summary-my-candidates-description-status-requests-container">
              <p className="activity-summary__desktop-activity-summary-my-candidates-description-text">
                DESCRIPTION
              </p>
              <p className="activity-summary__desktop-activity-summary-my-candidates-status-text">
                STATUS
              </p>
              <p className="activity-summary__desktop-activity-summary-my-candidates-requests-text">
                REQUESTS
              </p>
            </div>
            <button className="activity-summary__desktop-post-my-first-candidate-button">
              Post My First Candidate
            </button>
            <div className="activity-summary__desktop-activity-summary-my-candidates-navigation-container">
              <img
                className="activity-summary__desktop-activity-summary-my-candidates-left-arrow-icon"
                src={LeftArrowIcon}
                alt="Left Arrow Icon"
              />
              <img
                className="activity-summary__desktop-activity-summary-my-candidates-page-number-peach-one-icon"
                src={PageNumberPeachOneIcon}
                alt="Page Number Peach One Icon"
              />
              <img
                className="activity-summary__desktop-activity-summary-my-candidates-right-arrow-icon"
                src={RightArrowIcon}
                alt="Right Arrow Icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
