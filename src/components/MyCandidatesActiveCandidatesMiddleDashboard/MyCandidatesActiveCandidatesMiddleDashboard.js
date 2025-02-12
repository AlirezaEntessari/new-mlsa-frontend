import React from "react";
import "./MyCandidatesActiveCandidatesMiddleDashboard.scss";
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
import ScrollDownArrowIcon from "../../assets/icons/ScrollDownArrow.svg";
import PageArrowLeftIcon from "../../assets/icons/PageArrowLeft.svg";
import PageNumberPeach1Icon from "../../assets/icons/PageNumberPeach1.svg";
import PageNumberGray2Icon from "../../assets/icons/PageNumberGray2.svg";
import PageNumberGray3Icon from "../../assets/icons/PageNumberGray3.svg";
import PageArrowRightIcon from "../../assets/icons/PageArrowRight.svg";
import { Link } from "react-router-dom";

export default function MyCandidatesActiveCandidatesMiddleDashboard() {
  return (
    <div className="my-candidates-active-candidates-middle-dashboard">
      <div className="my-candidates-active-candidates-middle-dashboard__mobile-container">
        <div className="my-candidates-active-candidates-middle-dashboard__mobile-central-container">
          <p className="my-candidates-active-candidates-middle-dashboard__mobile-all-candidates-header">
            <img
              className="my-candidates-active-candidates-middle-dashboard__mobile-all-candidates-dot-icon"
              src={AllCandidatesDotIcon}
              alt="All Candidates Dot Icon"
            />
            <span className="my-candidates-active-candidates-middle-dashboard__mobile-all-candidates-text">
              All Candidates
            </span>
          </p>
          <p className="my-candidates-active-candidates-middle-dashboard__mobile-active-candidates-text">
            Active Candidates
          </p>
          <div className="my-candidates-active-candidates-middle-dashboard__mobile-dashboard-container">
            <div className="my-candidates-active-candidates-middle-dashboard__mobile-dashboard-top-container">
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-pending-container">
                <img
                  className="my-candidates-active-candidates-middle-dashboard__mobile-pending-dot-icon"
                  src={PendingDotIcon}
                  alt="Pending Dot Icon"
                />
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-pending-text">
                  Pending
                </p>
              </div>
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-reviews-container">
                <img
                  className="my-candidates-active-candidates-middle-dashboard__mobile-reviews-dot-icon"
                  src={ReviewsDotIcon}
                  alt="Reviews Dot Icon"
                />
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-reviews-text">
                  Reviews
                </p>
              </div>
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-submissions-container">
                <img
                  className="my-candidates-active-candidates-middle-dashboard__mobile-submissions-dot-icon"
                  src={SubmissionsDotIcon}
                  alt="Submissions Dot Icon"
                />
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-submissions-text">
                  Submissions
                </p>
              </div>
            </div>
            <div className="my-candidates-active-candidates-middle-dashboard__mobile-dashboard-bottom-container">
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-interviews-container">
                <img
                  className="my-candidates-active-candidates-middle-dashboard__mobile-interviews-dot-icon"
                  src={InterviewsDotIcon}
                  alt="Interviews Dot Icon"
                />
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-interviews-text">
                  Interviews
                </p>
              </div>
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-offers-container">
                <img
                  className="my-candidates-active-candidates-middle-dashboard__mobile-offers-dot-icon"
                  src={OffersDotIcon}
                  alt="Offers Dot Icon"
                />
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-offers-text">
                  Offers
                </p>
              </div>
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-placements-container">
                <img
                  className="my-candidates-active-candidates-middle-dashboard__mobile-placements-dot-icon"
                  src={PlacementsDotIcon}
                  alt="Placements Dot Icon"
                />
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-placements-text">
                  Placements
                </p>
              </div>
            </div>
          </div>
          <div className="my-candidates-active-candidates-middle-dashboard__mobile-sort-by-container">
            <span className="my-candidates-active-candidates-middle-dashboard__mobile-sort-by-text">
              Sort by:
            </span>
            <span className="my-candidates-active-candidates-middle-dashboard__mobile-id-number-text">
              ID #
            </span>
            <img
              className="my-candidates-active-candidates-middle-dashboard__mobile-menu-arrow-circle-down-icon"
              src={MenuArrowCircleDownIcon}
              alt="Menu Arrow Circle Down Icon"
            />
          </div>
          <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-container">
            <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-1">
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-id-posted-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-id">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-id-text">
                    ID:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-id-number">
                    67838473
                  </span>
                </p>
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-posted">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-posted-text">
                    Posted:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-posted-date">
                    07/01/24
                  </span>
                </p>
              </div>
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-job-title-requests-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-job-title">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-job-title-text">
                    Job Title:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-job-title-name">
                    Allied - CMA
                  </span>
                </p>
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-requests">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-requests-text">
                    Requests:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-requests-number">
                    3
                  </span>
                </p>
              </div>
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-candidate-find-job-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-candidate">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-candidate-text">
                    Candidate:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-candidate-name">
                    Jennifer Matthews
                  </span>
                </p>
                <button className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-find-job-button">
                  Find Job
                </button>
              </div>
              <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-industry">
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-industry-text">
                  Industry:
                </span>
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-industry-name">
                  Manufacturing
                </span>
              </p>
              <button className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-archive-button">
                Archive
              </button>
              <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-location">
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-location-text">
                  Location:
                </span>
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-location-name">
                  Dallas, TX
                </span>
              </p>
            </div>
            <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-2">
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-id-posted-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-id">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-id-text">
                    ID:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-id-number">
                    67838474
                  </span>
                </p>
                <img
                  className="my-candidates-active-candidates-middle-dashboard__mobile-on-hold-orange-icon"
                  src={OnHoldOrangeIcon}
                  alt="On Hold Orange Icon"
                />
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-posted">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-posted-text">
                    Posted:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-posted-date">
                    07/01/24
                  </span>
                </p>
              </div>
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-job-title-requests-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-job-title">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-job-title-text">
                    Job Title:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-job-title-name">
                    NP
                  </span>
                </p>
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-requests">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-requests-text">
                    Requests:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-requests-number">
                    6
                  </span>
                </p>
              </div>
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-candidate-find-job-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-candidate">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-candidate-text">
                    Candidate:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-candidate-name">
                    Chris Frost
                  </span>
                </p>
                <button className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-find-job-button">
                  Find Job
                </button>
              </div>
              <p className="my-candidates-active-candidates-middle-dashboard__mobile-industry">
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-industry-text">
                  Industry:
                </span>
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-industry-name">
                  Healthcare
                </span>
              </p>
              <button className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-archive-button">
                Archive
              </button>
              <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-location">
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-location-text">
                  Location:
                </span>
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-location-name">
                  St. Louis, MO
                </span>
              </p>
            </div>
            <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-3">
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-id-posted-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-id">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-id-text">
                    ID:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-id-number">
                    67838473
                  </span>
                </p>
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-posted">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-posted-text">
                    Posted:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-posted-date">
                    07/01/24
                  </span>
                </p>
              </div>
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-job-title-requests-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-job-title">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-job-title-text">
                    Job Title:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-job-title-name">
                    Allied - CMA
                  </span>
                </p>
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-requests">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-requests-text">
                    Requests:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-requests-number">
                    3
                  </span>
                </p>
              </div>
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-candidate-find-job-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-candidate">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-candidate-text">
                    Candidate:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-candidate-name">
                    Jennifer Matthews
                  </span>
                </p>
                <button className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-find-job-button">
                  Find Job
                </button>
              </div>
              <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-industry">
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-industry-text">
                  Industry:
                </span>
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-industry-name">
                  Manufacturing
                </span>
              </p>
              <button className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-archive-button">
                Archive
              </button>
              <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-location">
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-location-text">
                  Location:
                </span>
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-location-name">
                  Dallas, TX
                </span>
              </p>
            </div>
            <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-2">
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-id-posted-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-id">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-id-text">
                    ID:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-id-number">
                    67838474
                  </span>
                </p>
                <img
                  className="my-candidates-active-candidates-middle-dashboard__mobile-on-hold-orange-icon"
                  src={OnHoldOrangeIcon}
                  alt="On Hold Orange Icon"
                />
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-posted">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-posted-text">
                    Posted:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-posted-date">
                    07/01/24
                  </span>
                </p>
              </div>
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-job-title-requests-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-job-title">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-job-title-text">
                    Job Title:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-job-title-name">
                    NP
                  </span>
                </p>
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-requests">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-requests-text">
                    Requests:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-requests-number">
                    6
                  </span>
                </p>
              </div>
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-candidate-find-job-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-candidate">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-candidate-text">
                    Candidate:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-candidate-name">
                    Chris Frost
                  </span>
                </p>
                <button className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-find-job-button">
                  Find Job
                </button>
              </div>
              <p className="my-candidates-active-candidates-middle-dashboard__mobile-industry">
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-industry-text">
                  Industry:
                </span>
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-industry-name">
                  Healthcare
                </span>
              </p>
              <button className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-archive-button">
                Archive
              </button>
              <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-location">
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-location-text">
                  Location:
                </span>
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-location-name">
                  St. Louis, MO
                </span>
              </p>
            </div>
            <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-3">
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-id-posted-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-id">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-id-text">
                    ID:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-id-number">
                    67838473
                  </span>
                </p>
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-posted">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-posted-text">
                    Posted:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-posted-date">
                    07/01/24
                  </span>
                </p>
              </div>
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-job-title-requests-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-job-title">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-job-title-text">
                    Job Title:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-job-title-name">
                    Allied - CMA
                  </span>
                </p>
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-requests">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-requests-text">
                    Requests:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-requests-number">
                    3
                  </span>
                </p>
              </div>
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-candidate-find-job-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-candidate">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-candidate-text">
                    Candidate:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-candidate-name">
                    Jennifer Matthews
                  </span>
                </p>
                <button className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-find-job-button">
                  Find Job
                </button>
              </div>
              <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-industry">
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-industry-text">
                  Industry:
                </span>
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-industry-name">
                  Manufacturing
                </span>
              </p>
              <button className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-archive-button">
                Archive
              </button>
              <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-1-location">
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-location-text">
                  Location:
                </span>
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-location-name">
                  Dallas, TX
                </span>
              </p>
            </div>
            <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-2">
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-id-posted-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-id">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-id-text">
                    ID:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-id-number">
                    67838474
                  </span>
                </p>
                <img
                  className="my-candidates-active-candidates-middle-dashboard__mobile-on-hold-orange-icon"
                  src={OnHoldOrangeIcon}
                  alt="On Hold Orange Icon"
                />
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-posted">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-posted-text">
                    Posted:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-posted-date">
                    07/01/24
                  </span>
                </p>
              </div>
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-job-title-requests-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-job-title">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-job-title-text">
                    Job Title:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-job-title-name">
                    NP
                  </span>
                </p>
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-requests">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-requests-text">
                    Requests:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-requests-number">
                    6
                  </span>
                </p>
              </div>
              <div className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-candidate-find-job-container">
                <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-candidate">
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-candidate-text">
                    Candidate:
                  </span>
                  <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-candidate-name">
                    Chris Frost
                  </span>
                </p>
                <button className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-find-job-button">
                  Find Job
                </button>
              </div>
              <p className="my-candidates-active-candidates-middle-dashboard__mobile-industry">
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-industry-text">
                  Industry:
                </span>
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-industry-name">
                  Healthcare
                </span>
              </p>
              <button className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-archive-button">
                Archive
              </button>
              <p className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-location">
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-location-text">
                  Location:
                </span>
                <span className="my-candidates-active-candidates-middle-dashboard__mobile-card-2-location-name">
                  St. Louis, MO
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-candidates-active-candidates-middle-dashboard__tablet-container">
        <p className="my-candidates-active-candidates-middle-dashboard__tablet-active-candidates-header">
          Active Candidates
        </p>
        <div className="my-candidates-active-candidates-middle-dashboard__tablet-middle-dashboard-container">
          <p className="my-candidates-active-candidates-middle-dashboard__tablet-middle-dashboard-all-candidates">
            <img
              className="my-candidates-active-candidates-middle-dashboard__tablet-all-candidates-dot-icon"
              src={AllCandidatesDotIcon}
              alt="All Candidates Dot Icon"
            />
            <span className="my-candidates-active-candidates-middle-dashboard__tablet-all-candidates-text">
              All Candidates
            </span>
          </p>
          <p className="my-candidates-active-candidates-middle-dashboard__tablet-middle-dashboard-pending">
            <img
              className="my-candidates-active-candidates-middle-dashboard__tablet-pending-dot-icon"
              src={PendingDotIcon}
              alt="Pending Dot Icon"
            />
            <span className="my-candidates-active-candidates-middle-dashboard__tablet-pending-text">
              Pending
            </span>
          </p>
          <p className="my-candidates-active-candidates-middle-dashboard__tablet-middle-dashboard-reviews">
            <img
              className="my-candidates-active-candidates-middle-dashboard__tablet-reviews-dot-icon"
              src={ReviewsDotIcon}
              alt="Reviews Dot Icon"
            />
            <span className="my-candidates-active-candidates-middle-dashboard__tablet-reviews-text">
              Reviews
            </span>
          </p>
          <p className="my-candidates-active-candidates-middle-dashboard__tablet-middle-dashboard-submissions">
            <img
              className="my-candidates-active-candidates-middle-dashboard__tablet-submissions-dot-icon"
              src={SubmissionsDotIcon}
              alt="Submissions"
            />
            <span className="my-candidates-active-candidates-middle-dashboard__tablet-submissions-text">
              Submissions
            </span>
          </p>
          <p className="my-candidates-active-candidates-middle-dashboard__tablet-middle-dashboard-interviews">
            <img
              className="my-candidates-active-candidates-middle-dashboard__tablet-interviews-dot-icon"
              src={InterviewsDotIcon}
              alt="Interviews Dot Icon"
            />
            <span className="my-candidates-active-candidates-middle-dashboard__tablet-interviews-text">
              Interviews
            </span>
          </p>
          <p className="my-candidates-active-candidates-middle-dashboard__tablet-middle-dashboard-offers">
            <img
              className="my-candidates-active-candidates-middle-dashboard__tablet-offers-dot-icon"
              src={OffersDotIcon}
              alt="Offers Dot Icon"
            />
            <span className="my-candidates-active-candidates-middle-dashboard__tablet-offers-text">
              Offers
            </span>
          </p>
          <p className="my-candidates-active-candidates-middle-dashboard__tablet-middle-dashboard-placements">
            <img
              className="my-candidates-active-candidates-middle-dashboard__tablet-placements-dot-icon"
              src={PlacementsDotIcon}
              alt="Placements Dot Icon"
            />
            <span className="my-candidates-active-candidates-middle-dashboard__tablet-placements-text">
              Placements
            </span>
          </p>
        </div>
        <table className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-table">
          <thead className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-header-row">
            <tr className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-header-row-1">
              <th className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-header-row-id">
                ID{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__tablet-scroll-down-arrow-icon"
                  src={ScrollDownArrowIcon}
                  alt="Scroll Down Arrow Icon"
                />
              </th>
              <th className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-header-row-full-name">
                Full Name{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__tablet-scroll-down-arrow-icon"
                  src={ScrollDownArrowIcon}
                  alt="Scroll Down Arrow Icon"
                />
              </th>
              <th className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-header-row-job-title">
                Job Title{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__tablet-scroll-down-arrow-icon"
                  src={ScrollDownArrowIcon}
                  alt="Scroll Down Arrow Icon"
                />
              </th>
              <th className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-header-row-industry">
                Industry{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__tablet-scroll-down-arrow-icon"
                  src={ScrollDownArrowIcon}
                  alt="Scroll Down Arrow Icon"
                />
              </th>
              <th className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-header-row-availability-date">
                Availability Date
                <img
                  className="my-candidates-active-candidates-middle-dashboard__tablet-scroll-down-arrow-icon"
                  src={ScrollDownArrowIcon}
                  alt="Scroll Down Arrow Icon"
                />
              </th>
              <th className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-header-row-posted-date">
                Posted Date{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__tablet-scroll-down-arrow-icon"
                  src={ScrollDownArrowIcon}
                  alt="Scroll Down Arrow Icon"
                />
              </th>
              <th className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-header-row-requests">
                Requests{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__tablet-scroll-down-arrow-icon"
                  src={ScrollDownArrowIcon}
                  alt="Scroll Down Arrow Icon"
                />
              </th>
              <th className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-header-row-action">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-body-section">
            <tr className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1">
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-id">
                6373652
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-full-name">
                John Smith
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-requests">
                4
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-action">
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-archive-button">
                  Archive
                </button>
              </td>
            </tr>
            <tr className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2">
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-id">
                6373652{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__tablet-on-hold-orange-icon"
                  src={OnHoldOrangeIcon}
                  alt="On Hold Orange Icon"
                />
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-full-name">
                Ann Norton
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-requests">
                2
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-action">
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-archive-button">
                  Archive
                </button>
              </td>
            </tr>
            <tr className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3">
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-id">
                6373652
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-full-name">
                Sarah Connor
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-requests">
                2
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-action">
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-archive-button">
                  Archive
                </button>
              </td>
            </tr>
            <tr className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1">
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-id">
                6373652
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-full-name">
                John Smith
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-requests">
                4
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-action">
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-archive-button">
                  Archive
                </button>
              </td>
            </tr>
            <tr className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2">
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-id">
                6373652{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__tablet-on-hold-orange-icon"
                  src={OnHoldOrangeIcon}
                  alt="On Hold Orange Icon"
                />
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-full-name">
                Ann Norton
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-requests">
                2
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-action">
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-archive-button">
                  Archive
                </button>
              </td>
            </tr>
            <tr className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3">
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-id">
                6373652
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-full-name">
                Sarah Connor
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-requests">
                2
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-action">
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-archive-button">
                  Archive
                </button>
              </td>
            </tr>
            <tr className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1">
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-id">
                6373652
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-full-name">
                John Smith
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-requests">
                4
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-1-action">
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-archive-button">
                  Archive
                </button>
              </td>
            </tr>
            <tr className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2">
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-id">
                6373652{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__tablet-on-hold-orange-icon"
                  src={OnHoldOrangeIcon}
                  alt="On Hold Orange Icon"
                />
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-full-name">
                Ann Norton
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-requests">
                2
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-2-action">
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-archive-button">
                  Archive
                </button>
              </td>
            </tr>
            <tr className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3">
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-id">
                6373652
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-full-name">
                Sarah Connor
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-requests">
                2
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__tablet-my-candidates-data-row-3-action">
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__tablet-archive-button">
                  Archive
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="my-candidates-active-candidates-middle-dashboard__tablet-navigation-container">
          <img
            className="my-candidates-active-candidates-middle-dashboard__tablet-page-arrow-left-icon"
            src={PageArrowLeftIcon}
            alt="Page Arrow Left Icon"
          />
          <img
            className="my-candidates-active-candidates-middle-dashboard__tablet-page-number-peach-1-icon"
            src={PageNumberPeach1Icon}
            alt="Page Number Peach 1 Icon"
          />
          <img
            className="my-candidates-active-candidates-middle-dashboard__tablet-page-number-gray-2-icon"
            src={PageNumberGray2Icon}
            alt="Page Number Gray 2 Icon"
          />
          <img
            className="my-candidates-active-candidates-middle-dashboard__tablet-page-number-gray-3-icon"
            src={PageNumberGray3Icon}
            alt="Page Number Gray 3 Icon"
          />
          <img
            className="my-candidates-active-candidates-middle-dashboard__tablet-page-arrow-right-icon"
            src={PageArrowRightIcon}
            alt="Page Arrow Right Icon"
          />
        </div>
      </div>
      <div className="my-candidates-active-candidates-middle-dashboard__desktop-container">
        <p className="my-candidates-active-candidates-middle-dashboard__desktop-active-candidates-text">
          Active Candidates
        </p>
        <div className="my-candidates-active-candidates-middle-dashboard__desktop-middle-dashboard-container">
          <p className="my-candidates-active-candidates-middle-dashboard__desktop-all-candidates">
            <img
              className="my-candidates-active-candidates-middle-dashboard__desktop-all-candidates-dot-icon"
              src={AllCandidatesDotIcon}
              alt="All Candidates Dot Icon"
            />
            <span className="my-candidates-active-candidates-middle-dashboard__desktop-all-candidates-text">
              All Candidates
            </span>
          </p>
          <p className="my-candidates-active-candidates-middle-dashboard__desktop-pending">
            <img
              className="my-candidates-active-candidates-middle-dashboard__desktop-pending-dot-icon"
              src={PendingDotIcon}
              alt="Pending Dot Icon"
            />
            <span className="my-candidates-active-candidates-middle-dashboard__desktop-pending-text">
              Pending
            </span>
          </p>
          <p className="my-candidates-active-candidates-middle-dashboard__desktop-reviews">
            <img
              className="my-candidates-active-candidates-middle-dashboard__desktop-reviews-dot-icon"
              src={ReviewsDotIcon}
              alt="Reviews Dot Icon"
            />
            <span className="my-candidates-active-candidates-middle-dashboard__desktop-reviews-text">
              Reviews
            </span>
          </p>
          <p className="my-candidates-active-candidates-middle-dashboard__desktop-submissions">
            <img
              className="my-candidates-active-candidates-middle-dashboard__desktop-submissions-dot-icon"
              src={SubmissionsDotIcon}
              alt="Submissions Dot Icon"
            />
            <span className="my-candidates-active-candidates-middle-dashboard__desktop-submissions-text">
              Submissions
            </span>
          </p>
          <p className="my-candidates-active-candidates-middle-dashboard__desktop-interviews">
            <img
              className="my-candidates-active-candidates-middle-dashboard__desktop-interviews-dot-icon"
              src={InterviewsDotIcon}
              alt="Interviews Dot Icon"
            />
            <span className="my-candidates-active-candidates-middle-dashboard__desktop-interviews-text">
              Interviews
            </span>
          </p>
          <p className="my-candidates-active-candidates-middle-dashboard__desktop-offers">
            <img
              className="my-candidates-active-candidates-middle-dashboard__desktop-offers-dot-icon"
              src={OffersDotIcon}
              alt="Offers Dot Icon"
            />
            <span className="my-candidates-active-candidates-middle-dashboard__desktop-offers-text">
              Offers
            </span>
          </p>
          <p className="my-candidates-active-candidates-middle-dashboard__desktop-dashboard-placements">
            <img
              className="my-candidates-active-candidates-middle-dashboard__desktop-placements-dot-icon"
              src={PlacementsDotIcon}
              alt="Placements Dot Icon"
            />
            <span className="my-candidates-active-candidates-middle-dashboard__desktop-dashboard-placements-text">
              Placements
            </span>
          </p>
        </div>
        <table className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-table">
          <thead className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-header-row">
            <tr className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-header-row-1">
              <th className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-header-row-1-id">
                ID{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__desktop-scroll-down-arrow-icon"
                  src={ScrollDownArrowIcon}
                  alt="Scroll Down Arrow Icon"
                />
              </th>
              <th className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-header-row-1-full-name">
                Full Name{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__desktop-scroll-down-arrow-icon"
                  src={ScrollDownArrowIcon}
                  alt="Scroll Down Arrow Icon"
                />
              </th>
              <th className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-header-row-1-job-title">
                Job Title{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__desktop-scroll-down-arrow-icon"
                  src={ScrollDownArrowIcon}
                  alt="Scroll Down Arrow Icon"
                />
              </th>
              <th className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-header-row-1-industry">
                Industry{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__desktop-scroll-down-arrow-icon"
                  src={ScrollDownArrowIcon}
                  alt="Scroll Down Arrow Icon"
                />
              </th>
              <th className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-header-row-1-availability-date">
                Availability Date{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__desktop-scroll-down-arrow-icon"
                  src={ScrollDownArrowIcon}
                  alt="Scroll Down Arrow Icon"
                />
              </th>
              <th className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-header-row-1-posted-date">
                Posted Date{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__desktop-scroll-down-arrow-icon"
                  src={ScrollDownArrowIcon}
                  alt="Scroll Down Arrow Icon"
                />
              </th>
              <th className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-header-row-1-requests">
                Requests{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__desktop-scroll-down-arrow-icon"
                  src={ScrollDownArrowIcon}
                  alt="Scroll Down Arrow Icon"
                />
              </th>
              <th className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-header-row-1-action">
                Action{" "}
              </th>
            </tr>
          </thead>
          <tbody className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-body-section">
            <tr className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1">
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-id">
                6373652
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-full-name">
                John Smith
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-requests">
                4
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-action">
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-active-button">
                  Active
                </button>
              </td>
            </tr>
            <tr className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2">
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-id">
                6373653{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__desktop-on-hold-orange-icon"
                  src={OnHoldOrangeIcon}
                  alt="On Hold Orange Icon"
                />
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-full-name">
                Ann Norton
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-requests">
                2
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-action">
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-active-button">
                  Active
                </button>
              </td>
            </tr>
            <tr className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3">
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-id">
                6373654
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-full-name">
                Sarah Connor
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-requests">
                2
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-action">
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-active-button">
                  Active
                </button>
              </td>
            </tr>
            <tr className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1">
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-id">
                6373652
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-full-name">
                John Smith
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-requests">
                4
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-action">
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-active-button">
                  Active
                </button>
              </td>
            </tr>
            <tr className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2">
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-id">
                6373653{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__desktop-on-hold-orange-icon"
                  src={OnHoldOrangeIcon}
                  alt="On Hold Orange Icon"
                />
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-full-name">
                Ann Norton
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-requests">
                2
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-action">
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-active-button">
                  Active
                </button>
              </td>
            </tr>
            <tr className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3">
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-id">
                6373654
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-full-name">
                Sarah Connor
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-requests">
                2
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-action">
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-active-button">
                  Active
                </button>
              </td>
            </tr>
            <tr className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1">
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-id">
                6373652
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-full-name">
                John Smith
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-requests">
                4
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-1-action">
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-active-button">
                  Active
                </button>
              </td>
            </tr>
            <tr className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2">
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-id">
                6373653{" "}
                <img
                  className="my-candidates-active-candidates-middle-dashboard__desktop-on-hold-orange-icon"
                  src={OnHoldOrangeIcon}
                  alt="On Hold Orange Icon"
                />
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-full-name">
                Ann Norton
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-requests">
                2
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-2-action">
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-active-button">
                  Active
                </button>
              </td>
            </tr>
            <tr className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3">
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-id">
                6373654
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-full-name">
                Sarah Connor
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-job-title">
                Allied - CMA
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-industry">
                Healthcare
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-availability-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-posted-date">
                07/01/24
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-requests">
                2
              </td>
              <td className="my-candidates-active-candidates-middle-dashboard__desktop-my-candidates-data-row-3-action">
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-find-job-button">
                  Find Job
                </button>
                <button className="my-candidates-active-candidates-middle-dashboard__desktop-active-button">
                  Active
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="my-candidates-active-candidates-middle-dashboard__desktop-navigation-container">
          <img
            className="my-candidates-active-candidates-middle-dashboard__desktop-page-arrow-left-icon"
            src={PageArrowLeftIcon}
            alt="Page Arrow Left Icon"
          />
          <img
            className="my-candidates-active-candidates-middle-dashboard__desktop-page-number-peach-1-icon"
            src={PageNumberPeach1Icon}
            alt="Page Number Peach 1 Icon"
          />
          <img
            className="my-candidates-active-candidates-middle-dashboard__desktop-page-number-gray-2-icon"
            src={PageNumberGray2Icon}
            alt="Page Number Gray 2 Icon"
          />
          <img
            className="my-candidates-active-candidates-middle-dashboard__desktop-page-number-gray-3-icon"
            src={PageNumberGray3Icon}
            alt="Page Number Gray 3 Icon"
          />
          <img
            className="my-candidates-active-candidates-middle-dashboard__desktop-page-arrow-right-icon"
            src={PageArrowRightIcon}
            alt="Page Arrow Right Icon"
          />
        </div>
      </div>
    </div>
  );
}
