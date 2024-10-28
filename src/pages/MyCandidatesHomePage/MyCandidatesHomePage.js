import React from "react";
import "./MyCandidatesHomePage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import CandidatesSidePanel from "../../components/CandidatesSidePanel/CandidatesSidePanel";
import PlusWhiteIcon from "../../assets/icons/PlusWhite.svg";
import SearchIcon from "../../assets/icons/Search (2).svg";
import PendingDotIcon from "../../assets/icons/CPendingDot.svg";
import ReviewsDotIcon from "../../assets/icons/CReviewsDot.svg";
import SubmissionsDotIcon from "../../assets/icons/CSubmissionsDot.svg";
import AllCandidatesDotIcon from "../../assets/icons/AllCandidatesDot.svg";
import InterviewsDotIcon from "../../assets/icons/CInterviewsDot.svg";
import OffersDotIcon from "../../assets/icons/COffersDot.svg";
import PlacementsDotIcon from "../../assets/icons/CPlacementsDot.svg";
import MenuArrowCircleDownIcon from "../../assets/icons/MenuCircleArrowGray.svg";
import OnHoldOrangeIcon from "../../assets/icons/OnHoldOrange.svg";

export default function MyCandidatesHomePage() {
  return (
    <div className="my-candidates-home-page">
      <HeaderWithProfilePic />
      <div className="my-candidates-home-page__main-container">
        <CandidatesSidePanel />
        <div className="my-candidates-home-page__right-container">
          <div className="my-candidates-home-page__mobile-container">
            <p className="my-candidates-home-page__mobile-header-text">
              My Candidates
            </p>
            <div className="my-candidates-home-page__mobile-active-placements-expiring-soon-container">
              <div className="my-candidates-home-page__mobile-active-container">
                <p className="my-candidates-home-page__mobile-active-text">
                  Active
                </p>
                <p className="my-candidates-home-page__mobile-active-number">
                  22
                </p>
              </div>
              <div className="my-candidates-home-page__mobile-placements-container">
                <p className="my-candidates-home-page__mobile-placements-text">
                  Placements
                </p>
                <p className="my-candidates-home-page__mobile-placements-number">
                  12
                </p>
              </div>
              <div className="my-candidates-home-page__mobile-expiring-soon-container">
                <p className="my-candidates-home-page__mobile-expiring-soon-text">
                  Expiring Soon
                </p>
                <p className="my-candidates-home-page__mobile-expiring-soon-number">
                  6
                </p>
              </div>
            </div>
            <div className="my-candidates-home-page__mobile-view-drafts-archived-generate-report-container">
              <button className="my-candidates-home-page__mobile-view-drafts-button">
                View Drafts
              </button>
              <button className="my-candidates-home-page__mobile-archived-button">
                Archived
              </button>
              <button className="my-candidates-home-page__mobile-generate-report-button">
                Generate Report
              </button>
            </div>
            <div className="my-candidates-home-page__mobile-post-candidate-batch-upload-container">
              <button className="my-candidates-home-page__mobile-post-candidate-button">
                <img
                  className="my-candidates-home-page__mobile-plus-white-icon"
                  src={PlusWhiteIcon}
                  alt="Plus White Icon"
                />
                Post Candidate
              </button>
              <button className="my-candidates-home-page__mobile-batch-upload-button">
                Batch Upload
              </button>
            </div>
            <div className="my-candidates-home-page__mobile-search-my-candidates-container">
              <p className="my-candidates-home-page__mobile-search-my-candidates-text">
                Search My Candidates
              </p>
              <img
                className="my-candidates-home-page__mobile-search-icon"
                src={SearchIcon}
                alt="Search Icon"
              />
              <input
                className="my-candidates-home-page__mobile-search-my-candidates-input"
                type="text"
              />
            </div>
            <div className="my-candidates-home-page__mobile-central-container">
              <p className="my-candidates-home-page__mobile-all-candidates-header">
                <img
                  className="my-candidates-home-page__mobile-all-candidates-dot-icon"
                  src={AllCandidatesDotIcon}
                  alt="All Candidates Dot Icon"
                />
                <span className="my-candidates-home-page__mobile-all-candidates-text">
                  All Candidates
                </span>
              </p>
              <div className="my-candidates-home-page__mobile-dashboard-container">
                <div className="my-candidates-home-page__mobile-dashboard-top-container">
                  <div className="my-candidates-home-page__mobile-pending-container">
                    <img
                      className="my-candidates-home-page__mobile-pending-dot-icon"
                      src={PendingDotIcon}
                      alt="Pending Dot Icon"
                    />
                    <p className="my-candidates-home-page__mobile-pending-text">
                      Pending
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-reviews-container">
                    <img
                      className="my-candidates-home-page__mobile-reviews-dot-icon"
                      src={ReviewsDotIcon}
                      alt="Reviews Dot Icon"
                    />
                    <p className="my-candidates-home-page__mobile-reviews-text">
                      Reviews
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-submissions-container">
                    <img
                      className="my-candidates-home-page__mobile-submissions-dot-icon"
                      src={SubmissionsDotIcon}
                      alt="Submissions Dot Icon"
                    />
                    <p className="my-candidates-home-page__mobile-submissions-text">
                      Submissions
                    </p>
                  </div>
                </div>
                <div className="my-candidates-home-page__mobile-dashboard-bottom-container">
                  <div className="my-candidates-home-page__mobile-interviews-container">
                    <img
                      className="my-candidates-home-page__mobile-interviews-dot-icon"
                      src={InterviewsDotIcon}
                      alt="Interviews Dot Icon"
                    />
                    <p className="my-candidates-home-page__mobile-interviews-text">
                      Interviews
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-offers-container">
                    <img
                      className="my-candidates-home-page__mobile-offers-dot-icon"
                      src={OffersDotIcon}
                      alt="Offers Dot Icon"
                    />
                    <p className="my-candidates-home-page__mobile-offers-text">
                      Offers
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-placements-container">
                    <img
                      className="my-candidates-home-page__mobile-placements-dot-icon"
                      src={PlacementsDotIcon}
                      alt="Placements Dot Icon"
                    />
                    <p className="my-candidates-home-page__mobile-placements-text">
                      Placements
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-candidates-home-page__mobile-sort-by-container">
                <span className="my-candidates-home-page__mobile-sort-by-text">
                  Sort by:
                </span>
                <span className="my-candidates-home-page__mobile-id-number-text">
                  ID #
                </span>
                <img
                  className="my-candidates-home-page__mobile-menu-arrow-circle-down-icon"
                  src={MenuArrowCircleDownIcon}
                  alt="Menu Arrow Circle Down Icon"
                />
              </div>
              <div className="my-candidates-home-page__mobile-card-container">
                <div className="my-candidates-home-page__mobile-card-1">
                  <div className="my-candidates-home-page__mobile-card-1-id-posted-container">
                    <p className="my-candidates-home-page__mobile-card-1-id">
                      <span className="my-candidates-home-page__mobile-card-1-id-text">
                        ID:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-1-id-number">
                        67838473
                      </span>
                    </p>
                    <p className="my-candidates-home-page__mobile-card-1-posted">
                      <span className="my-candidates-home-page__mobile-card-1-posted-text">
                        Posted:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-1-posted-date">
                        07/01/24
                      </span>
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-card-1-job-title-requests-container">
                    <p className="my-candidates-home-page__mobile-card-1-job-title">
                      <span className="my-candidates-home-page__mobile-card-1-job-title-text">
                        Job Title:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-1-job-title-name">
                        Allied - CMA
                      </span>
                    </p>
                    <p className="my-candidates-home-page__mobile-card-1-requests">
                      <span className="my-candidates-home-page__mobile-card-1-requests-text">
                        Requests:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-1-requests-number">
                        3
                      </span>
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-card-1-candidate-find-job-container">
                    <p className="my-candidates-home-page__mobile-card-1-candidate">
                      <span className="my-candidates-home-page__mobile-card-1-candidate-text">
                        Candidate:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-1-candidate-name">
                        Jennifer Matthews
                      </span>
                    </p>
                    <button className="my-candidates-home-page__mobile-card-1-find-job-button">
                      Find Job
                    </button>
                  </div>
                  <p className="my-candidates-home-page__mobile-card-1-industry">
                    <span className="my-candidates-home-page__mobile-card-1-industry-text">
                      Industry:
                    </span>
                    <span className="my-candidates-home-page__mobile-card-1-industry-name">
                      Manufacturing
                    </span>
                  </p>
                  <button className="my-candidates-home-page__mobile-card-1-archive-button">
                    Archive
                  </button>
                  <p className="my-candidates-home-page__mobile-card-1-location">
                    <span className="my-candidates-home-page__mobile-location-text">
                      Location:
                    </span>
                    <span className="my-candidates-home-page__mobile-location-name">
                      Dallas, TX
                    </span>
                  </p>
                </div>
                <div className="my-candidates-home-page__mobile-card-2">
                  <div className="my-candidates-home-page__mobile-card-2-id-posted-container">
                    <p className="my-candidates-home-page__mobile-card-2-id">
                      <span className="my-candidates-home-page__mobile-card-2-id-text">
                        ID:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-2-id-number">
                        67838474
                      </span>
                    </p>
                    <img
                      className="my-candidates-home-page__mobile-on-hold-orange-icon"
                      src={OnHoldOrangeIcon}
                      alt="On Hold Orange Icon"
                    />
                    <p className="my-candidates-home-page__mobile-card-2-posted">
                      <span className="my-candidates-home-page__mobile-card-2-posted-text">
                        Posted:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-2-posted-date">
                        07/01/24
                      </span>
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-card-2-job-title-requests-container">
                    <p className="my-candidates-home-page__mobile-card-2-job-title">
                      <span className="my-candidates-home-page__mobile-card-2-job-title-text">
                        Job Title:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-2-job-title-name">
                        NP
                      </span>
                    </p>
                    <p className="my-candidates-home-page__mobile-card-2-requests">
                      <span className="my-candidates-home-page__mobile-card-2-requests-text">
                        Requests:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-2-requests-number">
                        6
                      </span>
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-card-2-candidate-find-job-container">
                    <p className="my-candidates-home-page__mobile-card-2-candidate">
                      <span className="my-candidates-home-page__mobile-card-2-candidate-text">
                        Candidate:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-2-candidate-name">
                        Chris Frost
                      </span>
                    </p>
                    <button className="my-candidates-home-page__mobile-card-2-find-job-button">
                      Find Job
                    </button>
                  </div>
                  <p className="my-candidates-home-page__mobile-industry">
                    <span className="my-candidates-home-page__mobile-industry-text">
                      Industry:
                    </span>
                    <span className="my-candidates-home-page__mobile-industry-name">
                      Healthcare
                    </span>
                  </p>
                  <button className="my-candidates-home-page__mobile-card-2-archive-button">
                    Archive
                  </button>
                  <p className="my-candidates-home-page__mobile-card-2-location">
                    <span className="my-candidates-home-page__mobile-card-2-location-text">
                      Location:
                    </span>
                    <span className="my-candidates-home-page__mobile-card-2-location-name">
                      St. Louis, MO
                    </span>
                  </p>
                </div>
                <div className="my-candidates-home-page__mobile-card-3">
                  <div className="my-candidates-home-page__mobile-card-1-id-posted-container">
                    <p className="my-candidates-home-page__mobile-card-1-id">
                      <span className="my-candidates-home-page__mobile-card-1-id-text">
                        ID:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-1-id-number">
                        67838473
                      </span>
                    </p>
                    <p className="my-candidates-home-page__mobile-card-1-posted">
                      <span className="my-candidates-home-page__mobile-card-1-posted-text">
                        Posted:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-1-posted-date">
                        07/01/24
                      </span>
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-card-1-job-title-requests-container">
                    <p className="my-candidates-home-page__mobile-card-1-job-title">
                      <span className="my-candidates-home-page__mobile-card-1-job-title-text">
                        Job Title:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-1-job-title-name">
                        Allied - CMA
                      </span>
                    </p>
                    <p className="my-candidates-home-page__mobile-card-1-requests">
                      <span className="my-candidates-home-page__mobile-card-1-requests-text">
                        Requests:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-1-requests-number">
                        3
                      </span>
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-card-1-candidate-find-job-container">
                    <p className="my-candidates-home-page__mobile-card-1-candidate">
                      <span className="my-candidates-home-page__mobile-card-1-candidate-text">
                        Candidate:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-1-candidate-name">
                        Jennifer Matthews
                      </span>
                    </p>
                    <button className="my-candidates-home-page__mobile-card-1-find-job-button">
                      Find Job
                    </button>
                  </div>
                  <p className="my-candidates-home-page__mobile-card-1-industry">
                    <span className="my-candidates-home-page__mobile-card-1-industry-text">
                      Industry:
                    </span>
                    <span className="my-candidates-home-page__mobile-card-1-industry-name">
                      Manufacturing
                    </span>
                  </p>
                  <button className="my-candidates-home-page__mobile-card-1-archive-button">
                    Archive
                  </button>
                  <p className="my-candidates-home-page__mobile-card-1-location">
                    <span className="my-candidates-home-page__mobile-location-text">
                      Location:
                    </span>
                    <span className="my-candidates-home-page__mobile-location-name">
                      Dallas, TX
                    </span>
                  </p>
                </div>
                <div className="my-candidates-home-page__mobile-card-2">
                  <div className="my-candidates-home-page__mobile-card-2-id-posted-container">
                    <p className="my-candidates-home-page__mobile-card-2-id">
                      <span className="my-candidates-home-page__mobile-card-2-id-text">
                        ID:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-2-id-number">
                        67838474
                      </span>
                    </p>
                    <img
                      className="my-candidates-home-page__mobile-on-hold-orange-icon"
                      src={OnHoldOrangeIcon}
                      alt="On Hold Orange Icon"
                    />
                    <p className="my-candidates-home-page__mobile-card-2-posted">
                      <span className="my-candidates-home-page__mobile-card-2-posted-text">
                        Posted:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-2-posted-date">
                        07/01/24
                      </span>
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-card-2-job-title-requests-container">
                    <p className="my-candidates-home-page__mobile-card-2-job-title">
                      <span className="my-candidates-home-page__mobile-card-2-job-title-text">
                        Job Title:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-2-job-title-name">
                        NP
                      </span>
                    </p>
                    <p className="my-candidates-home-page__mobile-card-2-requests">
                      <span className="my-candidates-home-page__mobile-card-2-requests-text">
                        Requests:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-2-requests-number">
                        6
                      </span>
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-card-2-candidate-find-job-container">
                    <p className="my-candidates-home-page__mobile-card-2-candidate">
                      <span className="my-candidates-home-page__mobile-card-2-candidate-text">
                        Candidate:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-2-candidate-name">
                        Chris Frost
                      </span>
                    </p>
                    <button className="my-candidates-home-page__mobile-card-2-find-job-button">
                      Find Job
                    </button>
                  </div>
                  <p className="my-candidates-home-page__mobile-industry">
                    <span className="my-candidates-home-page__mobile-industry-text">
                      Industry:
                    </span>
                    <span className="my-candidates-home-page__mobile-industry-name">
                      Healthcare
                    </span>
                  </p>
                  <button className="my-candidates-home-page__mobile-card-2-archive-button">
                    Archive
                  </button>
                  <p className="my-candidates-home-page__mobile-card-2-location">
                    <span className="my-candidates-home-page__mobile-card-2-location-text">
                      Location:
                    </span>
                    <span className="my-candidates-home-page__mobile-card-2-location-name">
                      St. Louis, MO
                    </span>
                  </p>
                </div>
                <div className="my-candidates-home-page__mobile-card-3">
                  <div className="my-candidates-home-page__mobile-card-1-id-posted-container">
                    <p className="my-candidates-home-page__mobile-card-1-id">
                      <span className="my-candidates-home-page__mobile-card-1-id-text">
                        ID:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-1-id-number">
                        67838473
                      </span>
                    </p>
                    <p className="my-candidates-home-page__mobile-card-1-posted">
                      <span className="my-candidates-home-page__mobile-card-1-posted-text">
                        Posted:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-1-posted-date">
                        07/01/24
                      </span>
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-card-1-job-title-requests-container">
                    <p className="my-candidates-home-page__mobile-card-1-job-title">
                      <span className="my-candidates-home-page__mobile-card-1-job-title-text">
                        Job Title:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-1-job-title-name">
                        Allied - CMA
                      </span>
                    </p>
                    <p className="my-candidates-home-page__mobile-card-1-requests">
                      <span className="my-candidates-home-page__mobile-card-1-requests-text">
                        Requests:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-1-requests-number">
                        3
                      </span>
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-card-1-candidate-find-job-container">
                    <p className="my-candidates-home-page__mobile-card-1-candidate">
                      <span className="my-candidates-home-page__mobile-card-1-candidate-text">
                        Candidate:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-1-candidate-name">
                        Jennifer Matthews
                      </span>
                    </p>
                    <button className="my-candidates-home-page__mobile-card-1-find-job-button">
                      Find Job
                    </button>
                  </div>
                  <p className="my-candidates-home-page__mobile-card-1-industry">
                    <span className="my-candidates-home-page__mobile-card-1-industry-text">
                      Industry:
                    </span>
                    <span className="my-candidates-home-page__mobile-card-1-industry-name">
                      Manufacturing
                    </span>
                  </p>
                  <button className="my-candidates-home-page__mobile-card-1-archive-button">
                    Archive
                  </button>
                  <p className="my-candidates-home-page__mobile-card-1-location">
                    <span className="my-candidates-home-page__mobile-location-text">
                      Location:
                    </span>
                    <span className="my-candidates-home-page__mobile-location-name">
                      Dallas, TX
                    </span>
                  </p>
                </div>
                <div className="my-candidates-home-page__mobile-card-2">
                  <div className="my-candidates-home-page__mobile-card-2-id-posted-container">
                    <p className="my-candidates-home-page__mobile-card-2-id">
                      <span className="my-candidates-home-page__mobile-card-2-id-text">
                        ID:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-2-id-number">
                        67838474
                      </span>
                    </p>
                    <img
                      className="my-candidates-home-page__mobile-on-hold-orange-icon"
                      src={OnHoldOrangeIcon}
                      alt="On Hold Orange Icon"
                    />
                    <p className="my-candidates-home-page__mobile-card-2-posted">
                      <span className="my-candidates-home-page__mobile-card-2-posted-text">
                        Posted:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-2-posted-date">
                        07/01/24
                      </span>
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-card-2-job-title-requests-container">
                    <p className="my-candidates-home-page__mobile-card-2-job-title">
                      <span className="my-candidates-home-page__mobile-card-2-job-title-text">
                        Job Title:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-2-job-title-name">
                        NP
                      </span>
                    </p>
                    <p className="my-candidates-home-page__mobile-card-2-requests">
                      <span className="my-candidates-home-page__mobile-card-2-requests-text">
                        Requests:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-2-requests-number">
                        6
                      </span>
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-card-2-candidate-find-job-container">
                    <p className="my-candidates-home-page__mobile-card-2-candidate">
                      <span className="my-candidates-home-page__mobile-card-2-candidate-text">
                        Candidate:
                      </span>
                      <span className="my-candidates-home-page__mobile-card-2-candidate-name">
                        Chris Frost
                      </span>
                    </p>
                    <button className="my-candidates-home-page__mobile-card-2-find-job-button">
                      Find Job
                    </button>
                  </div>
                  <p className="my-candidates-home-page__mobile-industry">
                    <span className="my-candidates-home-page__mobile-industry-text">
                      Industry:
                    </span>
                    <span className="my-candidates-home-page__mobile-industry-name">
                      Healthcare
                    </span>
                  </p>
                  <button className="my-candidates-home-page__mobile-card-2-archive-button">
                    Archive
                  </button>
                  <p className="my-candidates-home-page__mobile-card-2-location">
                    <span className="my-candidates-home-page__mobile-card-2-location-text">
                      Location:
                    </span>
                    <span className="my-candidates-home-page__mobile-card-2-location-name">
                      St. Louis, MO
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-candidates-home-page__tablet-container">
            <p className="my-candidates-home-page__tablet-header-text">
              My Candidates
            </p>
            <div className="my-candidates-home-page__tablet-top-dashboard-container">
              <div className="my-candidates-home-page__tablet-top-dashboard-left-container">
                <button className="my-candidates-home-page__tablet-post-candidate-button">
                  <img
                    className="my-candidates-home-page__tablet-plus-white-icon"
                    src={PlusWhiteIcon}
                    alt="Plus White Icon"
                  />{" "}
                  Post Candidate
                </button>
                <button className="my-candidates-home-page__tablet-batch-upload-button">
                  Batch Upload
                </button>
              </div>
              <div className="my-candidates-home-page__tablet-top-dashboard-right-container">
                <div className="my-candidates-home-page__tablet-top-dashboard-active-placements-expiring-soon-container">
                  <div className="my-candidates-home-page__tablet-top-dashboard-active-container">
                    <p className="my-candidates-home-page__tablet-top-dashboard-active-text">
                      Active
                    </p>
                    <p className="my-candidates-home-page__tablet-top-dashboard-active-number">
                      22
                    </p>
                  </div>
                  <div className="my-candidates-home-page__tablet-top-dashboard-placements-container">
                    <p className="my-candidates-home-page__tablet-top-dashboard-placements-text">
                      Placements
                    </p>
                    <p className="my-candidates-home-page__tablet-top-dashboard-placements-number">
                      12
                    </p>
                  </div>
                  <div className="my-candidates-home-page__tablet-top-dashboard-expiring-soon-container">
                    <p className="my-candidates-home-page__tablet-top-dashboard-expiring-soon-text">
                      Expiring Soon
                    </p>
                    <p className="my-candidates-home-page__tablet-top-dashboard-expiring-soon-number">
                      6
                    </p>
                  </div>
                </div>
                <div className="my-candidates-home-page__tablet-view-drafts-archived-generate-report-container">
                  <button className="my-candidates-home-page__tablet-view-drafts-button">
                    View Drafts
                  </button>
                  <button className="my-candidates-home-page__tablet-archived-button">
                    Archived
                  </button>
                  <button className="my-candidates-home-page__tablet-generate-report-button">
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
            <div className="my-candidates-home-page__tablet-search-my-candidates-container">
              <label
                className="my-candidates-home-page__tablet-search-my-candidates-label"
                htmlFor="tablet-search-my-candidates"
              >
                Search My Candidates
              </label>
              <img
                className="my-candidates-home-page__tablet-search-icon"
                src={SearchIcon}
                alt="Search Icon"
              />
              <input
                className="my-candidates-home-page__tablet-search-my-candidates-input"
                type="text"
              />
            </div>
            <div className="my-candidates-home-page__tablet-middle-dashboard-container">
              <p className="my-candidates-home-page__tablet-middle-dashboard-all-candidates">
                <img
                  className="my-candidates-home-page__tablet-all-candidates-dot-icon"
                  src={AllCandidatesDotIcon}
                  alt="All Candidates Dot Icon"
                />
                <span className="my-candidates-home-page__tablet-all-candidates-text">
                  All Candidates
                </span>
              </p>
              <p className="my-candidates-home-page__tablet-middle-dashboard-pending">
                <img
                  className="my-candidates-home-page__tablet-pending-dot-icon"
                  src={PendingDotIcon}
                  alt="Pending Dot Icon"
                />
                <span className="my-candidates-home-page__tablet-pending-text">
                  Pending
                </span>
              </p>
              <p className="my-candidates-home-page__"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
