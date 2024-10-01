import React from "react";
import "./MyJobsPlacementsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import JobsSidePanel from "../../components/JobsSidePanel/JobsSidePanel";
import MyJobsTopDashboard from "../../components/MyJobsTopDashboard/MyJobsTopDashboard";
import SearchIcon from "../../assets/icons/Search (2).svg";
import AllJobsBulletIcon from "../../assets/icons/AllJobsBullet.svg";
import JobsPendingBulletIcon from "../../assets/icons/JobsPendingBullet.svg";
import JobsReviewsBulletIcon from "../../assets/icons/JobsReviewsBullet.svg";
import JobsSubmissionsBulletIcon from "../../assets/icons/JobsSubmissionsBullet.svg";
import JobsInterviewsBulletIcon from "../../assets/icons/JobsInterviewsBullet.svg";
import JobsOffersBulletIcon from "../../assets/icons/JobsOffersBullet.svg";
import JobsPlacementIcon from "../../assets/icons/JobsPlacementsBullet.svg";
import MenuCircleArrowGrayIcon from "../../assets/icons/MenuCircleArrowGray.svg";
import ScrollDownArrowIcon from "../../assets/icons/ScrollDownArrow.svg";
import OnHoldBlueIcon from "../../assets/icons/OnHoldBlue.svg";
import PageArrowLeftIcon from "../../assets/icons/PageArrowLeft.svg";
import PageArrowRightIcon from "../../assets/icons/PageArrowRight.svg";
import PageNumberOneBlueIcon from "../../assets/icons/PageNumberBlue1.svg";
import PageNumberTwoGrayIcon from "../../assets/icons/PageNumberGray2.svg";
import PageNumberThreeGrayIcon from "../../assets/icons/PageNumberGray3.svg";

export default function MyJobsPlacementsPage() {
  return (
    <div className="my-jobs-home-page">
      <HeaderWithProfilePic />
      <div className="my-jobs-home-page__main-container">
        <JobsSidePanel />
        <div className="my-jobs-home-page__right-container">
          <p className="my-jobs-home-page__header">My Jobs</p>
          <MyJobsTopDashboard />
          <div className="my-jobs-home-page__search-my-jobs-container">
            <span className="my-jobs-home-page__search-my-jobs-text">
              Search My Jobs
            </span>
            <img
              className="my-jobs-home-page__search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="my-jobs-home-page__search-my-jobs-input"
              type="text"
            />
          </div>
          <div className="my-jobs-home-page__all-jobs-container">
            <p className="my-jobs-home-page__placements-header">
              <img
                className="my-jobs-home-page__all-jobs-bullet-icon"
                src={AllJobsBulletIcon}
                alt="All Jobs"
              />
              <span className="my-jobs-home-page__placements-text">Placements</span>
            </p>
            <div className="my-jobs-home-page__all-jobs-status-top-container">
              <p className="my-jobs-home-page__all-jobs-pending">
                <img
                  className="my-jobs-home-page__jobs-pending-bullet-icon"
                  src={JobsPendingBulletIcon}
                  alt="Jobs Pending"
                />
                <span className="my-jobs-home-page__jobs-pending-text">
                  Pending
                </span>
              </p>
              <p className="my-jobs-home-page__all-jobs-reviews">
                <img
                  className="my-jobs-home-page__jobs-reviews-bullet-icon"
                  src={JobsReviewsBulletIcon}
                  alt="Jobs Reviews Bullet"
                />
                <span className="my-jobs-home-page__jobs-reviews-text">
                  Reviews
                </span>
              </p>
              <p className="my-jobs-home-page__all-jobs-submissions">
                <img
                  className="my-jobs-home-page__jobs-submissions-bullet-icon"
                  src={JobsSubmissionsBulletIcon}
                  alt="Jobs Submissions Bullet Icon"
                />
                <span className="my-jobs-home-page__jobs-submissions-text">
                  Submissions
                </span>
              </p>
            </div>
            <div className="my-jobs-home-page__all-jobs-status-bottom-container">
              <p className="my-jobs-home-page__all-jobs-interviews">
                <img
                  className="my-jobs-home-page__jobs-interviews-bullet-icon"
                  src={JobsInterviewsBulletIcon}
                  alt="Jobs Interviews Bullet Icon"
                />
                <span className="my-jobs-home-page__jobs-interviews-text">
                  Interviews
                </span>
              </p>
              <p className="my-jobs-home-page__jobs-offers">
                <img
                  className="my-jobs-home-page__jobs-offers-bullet-icon"
                  src={JobsOffersBulletIcon}
                  alt="Jobs Offers Bullet Icon"
                />
                <span className="my-jobs-home-page__jobs-offers-text">
                  Offers
                </span>
              </p>
              <p className="my-jobs-home-page__jobs-placements">
                <img
                  className="my-jobs-home-page__jobs-placements-icon"
                  src={JobsPlacementIcon}
                  alt="Jobs Placements Bullet Icon"
                />
                <span className="my-jobs-home-page__jobs-placements-text">
                  Placements
                </span>
              </p>
            </div>
            <div className="my-jobs-home-page__sort-by-container">
              <span className="my-jobs-home-page__sort-by-text">Sort by:</span>
              <span className="my-jobs-home-page__job-id">Job ID#</span>
              <img
                className="my-jobs-home-page__menu-circle-arrow-gray-icon"
                src={MenuCircleArrowGrayIcon}
                alt="Menu Circle Arrow Gray Icon"
              />
            </div>
            <div className="my-jobs-home-page__mobile-card-container">
              <div className="my-jobs-home-page__mobile-card-one">
                <div className="my-jobs-home-page__mobile-card-one-inner-container">
                  <p className="my-jobs-home-page__mobile-card-one-header">
                    <span className="my-jobs-home-page__mobile-card-one-job-id">
                      Job ID:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-job-id-number">
                      67838473
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-posted">
                      Posted:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-posted-date">
                      07/01/24
                    </span>
                  </p>
                  <div className="my-jobs-home-page__mobile-card-one-job-title-container">
                    <span className="my-jobs-home-page__mobile-card-one-job-title-text">
                      Job Title:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-job-title-job">
                      Allied - CMA
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-job-title-applicants">
                      Applicants:
                    </span>
                    <p className="my-jobs-home-page__mobile-card-one-job-title-applicants-number">
                      3
                    </p>
                  </div>
                  <div className="my-jobs-home-page__mobile-card-one-client-container">
                    <span className="my-jobs-home-page__mobile-card-one-client-text">
                      Client:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-client-company-name">
                      Texas Health Presbyterian
                    </span>
                    <button className="my-jobs-home-page__mobile-card-one-find-candidate-button">
                      Find Candidate
                    </button>
                  </div>
                  <p className="my-jobs-home-page__mobile-card-one-industry">
                    <span className="my-jobs-home-page__mobile-card-one-industry-text">
                      Industry:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-industry-name">
                      Manufacturing
                    </span>
                  </p>
                  <button className="my-jobs-home-page__mobile-card-one-archive-button">
                    Archive
                  </button>
                  <p className="my-jobs-home-page__mobile-card-one-location">
                    <span className="my-jobs-home-page__mobile-card-one-location-text">
                      Location:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-location-place">
                      Dallas, TX
                    </span>
                  </p>
                </div>
              </div>
              <div className="my-jobs-home-page__mobile-card-two">
                <div className="my-jobs-home-page__mobile-card-one-inner-container">
                  <p className="my-jobs-home-page__mobile-card-one-header">
                    <span className="my-jobs-home-page__mobile-card-one-job-id">
                      Job ID:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-job-id-number">
                      67838474
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-posted">
                      Posted:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-posted-date">
                      07/01/24
                    </span>
                  </p>
                  <div className="my-jobs-home-page__mobile-card-one-job-title-container">
                    <span className="my-jobs-home-page__mobile-card-one-job-title-text">
                      Job Title:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-job-title-job">
                      NP
                    </span>
                    <span className="my-jobs-home-page__mobile-card-two-job-title-applicants">
                      Applicants:
                    </span>
                    <p className="my-jobs-home-page__mobile-card-one-job-title-applicants-number">
                      6
                    </p>
                  </div>
                  <div className="my-jobs-home-page__mobile-card-one-client-container">
                    <span className="my-jobs-home-page__mobile-card-one-client-text">
                      Client:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-two-client-company-name">
                      Missouri Catholic Health
                    </span>
                    <button className="my-jobs-home-page__mobile-card-two-find-candidate-button">
                      Find Candidate
                    </button>
                  </div>
                  <p className="my-jobs-home-page__mobile-card-one-industry">
                    <span className="my-jobs-home-page__mobile-card-one-industry-text">
                      Industry:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-industry-name">
                      Healthcare
                    </span>
                  </p>
                  <button className="my-jobs-home-page__mobile-card-one-archive-button">
                    Archive
                  </button>
                  <p className="my-jobs-home-page__mobile-card-one-location">
                    <span className="my-jobs-home-page__mobile-card-one-location-text">
                      Location:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-location-place">
                      St. Louis, MO
                    </span>
                  </p>
                </div>
              </div>
              <div className="my-jobs-home-page__mobile-card-three">
                <div className="my-jobs-home-page__mobile-card-one-inner-container">
                  <p className="my-jobs-home-page__mobile-card-one-header">
                    <span className="my-jobs-home-page__mobile-card-one-job-id">
                      Job ID:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-job-id-number">
                      67838461
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-posted">
                      Posted:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-posted-date">
                      08/04/24
                    </span>
                  </p>
                  <div className="my-jobs-home-page__mobile-card-one-job-title-container">
                    <span className="my-jobs-home-page__mobile-card-one-job-title-text">
                      Job Title:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-job-title-job">
                      CT Tech
                    </span>
                    <span className="my-jobs-home-page__mobile-card-three-job-title-applicants">
                      Applicants:
                    </span>
                    <p className="my-jobs-home-page__mobile-card-three-job-title-applicants-number">
                      13
                    </p>
                  </div>
                  <div className="my-jobs-home-page__mobile-card-one-client-container">
                    <span className="my-jobs-home-page__mobile-card-one-client-text">
                      Client:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-three-client-company-name">
                      New York University Hospital
                    </span>
                    <button className="my-jobs-home-page__mobile-card-three-find-candidate-button">
                      Find Candidate
                    </button>
                  </div>
                  <p className="my-jobs-home-page__mobile-card-one-industry">
                    <span className="my-jobs-home-page__mobile-card-one-industry-text">
                      Industry:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-industry-name">
                      Healthcare
                    </span>
                  </p>
                  <button className="my-jobs-home-page__mobile-card-one-archive-button">
                    Archive
                  </button>
                  <p className="my-jobs-home-page__mobile-card-one-location">
                    <span className="my-jobs-home-page__mobile-card-one-location-text">
                      Location:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-location-place">
                      New York, NY
                    </span>
                  </p>
                </div>
              </div>
              <div className="my-jobs-home-page__mobile-card-four">
                <div className="my-jobs-home-page__mobile-card-one-inner-container">
                  <p className="my-jobs-home-page__mobile-card-one-header">
                    <span className="my-jobs-home-page__mobile-card-one-job-id">
                      Job ID:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-job-id-number">
                      67838355
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-posted">
                      Posted:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-posted-date">
                      07/30/24
                    </span>
                  </p>
                  <div className="my-jobs-home-page__mobile-card-one-job-title-container">
                    <span className="my-jobs-home-page__mobile-card-one-job-title-text">
                      Job Title:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-job-title-job">
                      Operator
                    </span>
                    <span className="my-jobs-home-page__mobile-card-four-job-title-applicants">
                      Applicants:
                    </span>
                    <p className="my-jobs-home-page__mobile-card-one-job-title-applicants-number">
                      2
                    </p>
                  </div>
                  <div className="my-jobs-home-page__mobile-card-one-client-container">
                    <span className="my-jobs-home-page__mobile-card-one-client-text">
                      Client:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-four-client-company-name">
                      Garden City Catholic Health
                    </span>
                    <button className="my-jobs-home-page__mobile-card-four-find-candidate-button">
                      Find Candidate
                    </button>
                  </div>
                  <p className="my-jobs-home-page__mobile-card-one-industry">
                    <span className="my-jobs-home-page__mobile-card-one-industry-text">
                      Industry:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-industry-name">
                      Healthcare
                    </span>
                  </p>
                  <button className="my-jobs-home-page__mobile-card-one-archive-button">
                    Archive
                  </button>
                  <p className="my-jobs-home-page__mobile-card-one-location">
                    <span className="my-jobs-home-page__mobile-card-one-location-text">
                      Location:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-location-place">
                      Garden City, NY
                    </span>
                  </p>
                </div>
              </div>
              <div className="my-jobs-home-page__mobile-card-five">
                <div className="my-jobs-home-page__mobile-card-one-inner-container">
                  <p className="my-jobs-home-page__mobile-card-one-header">
                    <span className="my-jobs-home-page__mobile-card-one-job-id">
                      Job ID:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-job-id-number">
                      67838334
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-posted">
                      Posted:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-posted-date">
                      08/21/24
                    </span>
                  </p>
                  <div className="my-jobs-home-page__mobile-card-one-job-title-container">
                    <span className="my-jobs-home-page__mobile-card-one-job-title-text">
                      Job Title:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-job-title-job">
                      CT Tech
                    </span>
                    <span className="my-jobs-home-page__mobile-card-three-job-title-applicants">
                      Applicants:
                    </span>
                    <p className="my-jobs-home-page__mobile-card-three-job-title-applicants-number">
                      22
                    </p>
                  </div>
                  <div className="my-jobs-home-page__mobile-card-one-client-container">
                    <span className="my-jobs-home-page__mobile-card-one-client-text">
                      Client:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-three-client-company-name">
                      Massachusetts General Hospital
                    </span>
                    <button className="my-jobs-home-page__mobile-card-five-find-candidate-button">
                      Find Candidate
                    </button>
                  </div>
                  <p className="my-jobs-home-page__mobile-card-one-industry">
                    <span className="my-jobs-home-page__mobile-card-one-industry-text">
                      Industry:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-industry-name">
                      Healthcare
                    </span>
                  </p>
                  <button className="my-jobs-home-page__mobile-card-one-archive-button">
                    Archive
                  </button>
                  <p className="my-jobs-home-page__mobile-card-one-location">
                    <span className="my-jobs-home-page__mobile-card-one-location-text">
                      Location:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-location-place">
                      Boston, MA
                    </span>
                  </p>
                </div>
              </div>
              <div className="my-jobs-home-page__mobile-card-six">
                <div className="my-jobs-home-page__mobile-card-one-inner-container">
                  <p className="my-jobs-home-page__mobile-card-one-header">
                    <span className="my-jobs-home-page__mobile-card-one-job-id">
                      Job ID:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-job-id-number">
                      67838274
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-posted">
                      Posted:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-posted-date">
                      07/03/24
                    </span>
                  </p>
                  <div className="my-jobs-home-page__mobile-card-one-job-title-container">
                    <span className="my-jobs-home-page__mobile-card-one-job-title-text">
                      Job Title:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-job-title-job">
                      NP
                    </span>
                    <span className="my-jobs-home-page__mobile-card-six-job-title-applicants">
                      Applicants:
                    </span>
                    <p className="my-jobs-home-page__mobile-card-one-job-title-applicants-number">
                      1
                    </p>
                  </div>
                  <div className="my-jobs-home-page__mobile-card-one-client-container">
                    <span className="my-jobs-home-page__mobile-card-one-client-text">
                      Client:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-four-client-company-name">
                      Missouri Catholic Health
                    </span>
                    <button className="my-jobs-home-page__mobile-card-six-find-candidate-button">
                      Find Candidate
                    </button>
                  </div>
                  <p className="my-jobs-home-page__mobile-card-one-industry">
                    <span className="my-jobs-home-page__mobile-card-one-industry-text">
                      Industry:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-industry-name">
                      Healthcare
                    </span>
                  </p>
                  <button className="my-jobs-home-page__mobile-card-one-archive-button">
                    Archive
                  </button>
                  <p className="my-jobs-home-page__mobile-card-one-location">
                    <span className="my-jobs-home-page__mobile-card-one-location-text">
                      Location:
                    </span>
                    <span className="my-jobs-home-page__mobile-card-one-location-place">
                      Garden City, NY
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-jobs-home-page__tablet-middle-container">
            <p className="my-jobs-home-page__tablet-all-jobs-header">
              <img
                className="my-jobs-home-page__all-jobs-bullet-icon"
                src={AllJobsBulletIcon}
                alt="All Jobs"
              />{" "}
              <span className="my-jobs-home-page__tablet-all-jobs-text">
                All Jobs
              </span>
            </p>
            <p className="my-jobs-home-page__tablet-pending-header">
              <img
                className="my-jobs-home-page__jobs-pending-bullet-icon"
                src={JobsPendingBulletIcon}
                alt="Jobs Pending"
              />
              <span className="my-jobs-home-page__tablet-jobs-pending-text">
                Pending
              </span>
            </p>
            <p className="my-jobs-home-page__tablet-reviews-header">
              <img
                className="my-jobs-home-page__jobs-reviews-bullet-icon"
                src={JobsReviewsBulletIcon}
                alt="Jobs Reviews Bullet"
              />
              <span className="my-jobs-home-page__tablet-reviews-text">
                Reviews
              </span>
            </p>
            <p className="my-jobs-home-page__tablet-submissions-header">
              <img
                className="my-jobs-home-page__jobs-submissions-bullet-icon"
                src={JobsSubmissionsBulletIcon}
                alt="Jobs Submissions Bullet Icon"
              />
              <span className="my-jobs-home-page__tablet-submissions-text">
                Submissions
              </span>
            </p>
            <p className="my-jobs-home-page__tablet-interviews-header">
              <img
                className="my-jobs-home-page__jobs-interviews-bullet-icon"
                src={JobsInterviewsBulletIcon}
                alt="Jobs Interviews Bullet Icon"
              />
              <span className="my-jobs-home-page__tablet-interviews-text">
                Interviews
              </span>
            </p>
            <p className="my-jobs-home-page__tablet-offers-header">
              <img
                className="my-jobs-home-page__jobs-offers-bullet-icon"
                src={JobsOffersBulletIcon}
                alt="Jobs Offers Bullet Icon"
              />
              <span className="my-jobs-home-page__tablet-offers-text">
                Offers
              </span>
            </p>
            <p className="my-jobs-home-page__tablet-placements-header">
              <img
                className="my-jobs-home-page__jobs-placements-icon"
                src={JobsPlacementIcon}
                alt="Jobs Placements Bullet Icon"
              />
              <span className="my-jobs-home-page__tablet-placements-text">
                Placements
              </span>
            </p>
          </div>
          <table className="my-jobs-home-page__tablet-table">
            <thead>
              <tr className="my-jobs-home-page__header-row">
                <th className="my-jobs-home-page__job-id-column">
                  Job ID{" "}
                  <img
                    className="my-jobs-home-page__scroll-down-arrow-icon"
                    src={ScrollDownArrowIcon}
                    alt="Scroll Down Arrow Icon"
                  />
                </th>
                <th className="my-jobs-home-page__client-column">
                  Client{" "}
                  <img
                    className="my-jobs-home-page__scroll-down-arrow-icon"
                    src={ScrollDownArrowIcon}
                    alt="Scroll Down Arrow Icon"
                  />
                </th>
                <th className="my-jobs-home-page__job-title-column">
                  Job Title{" "}
                  <img
                    className="my-jobs-home-page__scroll-down-arrow-icon"
                    src={ScrollDownArrowIcon}
                    alt="Scroll Down Arrow Icon"
                  />
                </th>
                <th className="my-jobs-home-page__industry-column">
                  Industry{" "}
                  <img
                    className="my-jobs-home-page__scroll-down-arrow-icon"
                    src={ScrollDownArrowIcon}
                    alt="Scroll Down Arrow Icon"
                  />
                </th>
                <th className="my-jobs-home-page__location-column">
                  Location{" "}
                  <img
                    className="my-jobs-home-page__scroll-down-arrow-icon"
                    src={ScrollDownArrowIcon}
                    alt="Scroll Down Arrow Icon"
                  />
                </th>
                <th className="my-jobs-home-page__posted-column">
                  Posted{" "}
                  <img
                    className="my-jobs-home-page__scroll-down-arrow-icon"
                    src={ScrollDownArrowIcon}
                    alt="Scroll Down Arrow Icon"
                  />
                </th>
                <th className="my-jobs-home-page__appl-column">
                  Appl{" "}
                  <img
                    className="my-jobs-home-page__scroll-down-arrow-icon"
                    src={ScrollDownArrowIcon}
                    alt="Scroll Down Arrow Icon"
                  />
                </th>
                <th className="my-jobs-home-page__action-column">
                  Action{" "}
                  <img
                    className="my-jobs-home-page__scroll-down-arrow-icon"
                    src={ScrollDownArrowIcon}
                    alt="Scroll Down Arrow Icon"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="my-jobs-home-page__row">
                <td className="my-jobs-home-page__job-id-data-column">
                  6373652
                </td>
                <td className="my-jobs-home-page__client-data-column">
                  Texas Health Presbyterian
                </td>
                <td className="my-jobs-home-page__job-title-data-column">
                  Allied - CMA
                </td>
                <td className="my-jobs-home-page__industry-data-column">
                  Healthcare
                </td>
                <td className="my-jobs-home-page__location-data-column">
                  Dallas, TX
                </td>
                <td className="my-jobs-home-page__posted-data-column">
                  07/01/24
                </td>
                <td className="my-jobs-home-page__appl-data-column">
                  <p className="my-jobs-home-page__appl-data-value">4</p>
                </td>
                <td className="my-jobs-home-page__action-data-column">
                  <button className="my-jobs-home-page__tablet-find-candidate-button">
                    Find Candidate
                  </button>
                  <button className="my-jobs-home-page__tablet-archive-button">
                    Archive
                  </button>
                </td>
              </tr>
              <div className="my-jobs-home-page__margin-top"></div>
              <tr className="my-jobs-home-page__row">
                <td className="my-jobs-home-page__job-id-data-column">
                  6373653{" "}
                  <img
                    className="my-jobs-home-page__on-hold-blue-icon"
                    src={OnHoldBlueIcon}
                    alt="On Hold Blue Icon"
                  />
                </td>
                <td className="my-jobs-home-page__client-data-column">
                  Texas Health Presbyterian
                </td>
                <td className="my-jobs-home-page__job-title-data-column">
                  Allied - CMA
                </td>
                <td className="my-jobs-home-page__industry-data-column">
                  Healthcare
                </td>
                <td className="my-jobs-home-page__location-data-column">
                  Dallas, TX
                </td>
                <td className="my-jobs-home-page__posted-data-column">
                  07/01/24
                </td>
                <td className="my-jobs-home-page__appl-data-column">
                  <p className="my-jobs-home-page__appl-data-value">2</p>
                </td>
                <td className="my-jobs-home-page__action-data-column">
                  <button className="my-jobs-home-page__tablet-find-candidate-button">
                    Find Candidate
                  </button>
                  <button className="my-jobs-home-page__tablet-archive-button">
                    Archive
                  </button>
                </td>
              </tr>
              <div className="my-jobs-home-page__margin-top"></div>
              <tr className="my-jobs-home-page__row">
                <td className="my-jobs-home-page__job-id-data-column">
                  6373654
                </td>
                <td className="my-jobs-home-page__client-data-column">
                  Texas Health Presbyterian
                </td>
                <td className="my-jobs-home-page__job-title-data-column">
                  Allied - CMA
                </td>
                <td className="my-jobs-home-page__industry-data-column">
                  Healthcare
                </td>
                <td className="my-jobs-home-page__location-data-column">
                  Dallas, TX
                </td>
                <td className="my-jobs-home-page__posted-data-column">
                  07/01/24
                </td>
                <td className="my-jobs-home-page__appl-data-column">
                  <p className="my-jobs-home-page__appl-data-value">4</p>
                </td>
                <td className="my-jobs-home-page__action-data-column">
                  <button className="my-jobs-home-page__tablet-find-candidate-button">
                    Find Candidate
                  </button>
                  <button className="my-jobs-home-page__tablet-archive-button">
                    Archive
                  </button>
                </td>
              </tr>
              <div className="my-jobs-home-page__margin-top"></div>
              <tr className="my-jobs-home-page__row">
                <td className="my-jobs-home-page__job-id-data-column">
                  6373655
                </td>
                <td className="my-jobs-home-page__client-data-column">
                  Texas Health Presbyterian
                </td>
                <td className="my-jobs-home-page__job-title-data-column">
                  Allied - CMA
                </td>
                <td className="my-jobs-home-page__industry-data-column">
                  Healthcare
                </td>
                <td className="my-jobs-home-page__location-data-column">
                  Dallas, TX
                </td>
                <td className="my-jobs-home-page__posted-data-column">
                  07/01/24
                </td>
                <td className="my-jobs-home-page__appl-data-column">
                  <p className="my-jobs-home-page__appl-data-value">4</p>
                </td>
                <td className="my-jobs-home-page__action-data-column">
                  <button className="my-jobs-home-page__tablet-find-candidate-button">
                    Find Candidate
                  </button>
                  <button className="my-jobs-home-page__tablet-archive-button">
                    Archive
                  </button>
                </td>
              </tr>
              <div className="my-jobs-home-page__margin-top"></div>
              <tr className="my-jobs-home-page__row">
                <td className="my-jobs-home-page__job-id-data-column">
                  6373656
                </td>
                <td className="my-jobs-home-page__client-data-column">
                  Texas Health Presbyterian
                </td>
                <td className="my-jobs-home-page__job-title-data-column">
                  Allied - CMA
                </td>
                <td className="my-jobs-home-page__industry-data-column">
                  Healthcare
                </td>
                <td className="my-jobs-home-page__location-data-column">
                  Dallas, TX
                </td>
                <td className="my-jobs-home-page__posted-data-column">
                  07/01/24
                </td>
                <td className="my-jobs-home-page__appl-data-column">
                  <p className="my-jobs-home-page__appl-data-value">4</p>
                </td>
                <td className="my-jobs-home-page__action-data-column">
                  <button className="my-jobs-home-page__tablet-find-candidate-button">
                    Find Candidate
                  </button>
                  <button className="my-jobs-home-page__tablet-archive-button">
                    Archive
                  </button>
                </td>
              </tr>
              <div className="my-jobs-home-page__margin-top"></div>
              <tr className="my-jobs-home-page__row">
                <td className="my-jobs-home-page__job-id-data-column">
                  6373657
                </td>
                <td className="my-jobs-home-page__client-data-column">
                  Texas Health Presbyterian
                </td>
                <td className="my-jobs-home-page__job-title-data-column">
                  Allied - CMA
                </td>
                <td className="my-jobs-home-page__industry-data-column">
                  Healthcare
                </td>
                <td className="my-jobs-home-page__location-data-column">
                  Dallas, TX
                </td>
                <td className="my-jobs-home-page__posted-data-column">
                  07/01/24
                </td>
                <td className="my-jobs-home-page__appl-data-column">
                  <p className="my-jobs-home-page__appl-data-value">4</p>
                </td>
                <td className="my-jobs-home-page__action-data-column">
                  <button className="my-jobs-home-page__tablet-find-candidate-button">
                    Find Candidate
                  </button>
                  <button className="my-jobs-home-page__tablet-archive-button">
                    Archive
                  </button>
                </td>
              </tr>
              <div className="my-jobs-home-page__margin-top"></div>
              <tr className="my-jobs-home-page__row">
                <td className="my-jobs-home-page__job-id-data-column">
                  6373658
                </td>
                <td className="my-jobs-home-page__client-data-column">
                  Texas Health Presbyterian
                </td>
                <td className="my-jobs-home-page__job-title-data-column">
                  Allied - CMA
                </td>
                <td className="my-jobs-home-page__industry-data-column">
                  Healthcare
                </td>
                <td className="my-jobs-home-page__location-data-column">
                  Dallas, TX
                </td>
                <td className="my-jobs-home-page__posted-data-column">
                  07/01/24
                </td>
                <td className="my-jobs-home-page__appl-data-column">
                  <p className="my-jobs-home-page__appl-data-value">4</p>
                </td>
                <td className="my-jobs-home-page__action-data-column">
                  <button className="my-jobs-home-page__tablet-find-candidate-button">
                    Find Candidate
                  </button>
                  <button className="my-jobs-home-page__tablet-archive-button">
                    Archive
                  </button>
                </td>
              </tr>
              <div className="my-jobs-home-page__margin-top"></div>
              <tr className="my-jobs-home-page__row">
                <td className="my-jobs-home-page__job-id-data-column">
                  6373659
                </td>
                <td className="my-jobs-home-page__client-data-column">
                  Texas Health Presbyterian
                </td>
                <td className="my-jobs-home-page__job-title-data-column">
                  Allied - CMA
                </td>
                <td className="my-jobs-home-page__industry-data-column">
                  Healthcare
                </td>
                <td className="my-jobs-home-page__location-data-column">
                  Dallas, TX
                </td>
                <td className="my-jobs-home-page__posted-data-column">
                  07/01/24
                </td>
                <td className="my-jobs-home-page__appl-data-column">
                  <p className="my-jobs-home-page__appl-data-value">4</p>
                </td>
                <td className="my-jobs-home-page__action-data-column">
                  <button className="my-jobs-home-page__tablet-find-candidate-button">
                    Find Candidate
                  </button>
                  <button className="my-jobs-home-page__tablet-archive-button">
                    Archive
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="my-jobs-home-page__page-number-container">
            <img
              className="my-jobs-home-page__page-arrow-left-icon"
              src={PageArrowLeftIcon}
              alt="Page Arrow Left Icon"
            />
            <img
              className="my-jobs-home-page__page-number-one-blue-icon"
              src={PageNumberOneBlueIcon}
              alt="Page Number One Blue Icon"
            />
            <img
              className="my-jobs-home-page__page-number-two-gray-icon"
              src={PageNumberTwoGrayIcon}
              alt="Page Number Two Gray Icon"
            />
            <img
              className="my-jobs-home-page__page-number-three-gray-icon"
              src={PageNumberThreeGrayIcon}
              alt="Page Number Three Gray Icon"
            />
            <img
              className="my-jobs-home-page__page-arrow-right-icon"
              src={PageArrowRightIcon}
              alt="Page Arrow Right Icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
