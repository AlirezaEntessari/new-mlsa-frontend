import React from "react";
import "./MyJobsHomePage.scss";
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

export default function MyJobsHomePage() {
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
            <p className="my-jobs-home-page__all-jobs-header">
              <img
                className="my-jobs-home-page__all-jobs-bullet-icon"
                src={AllJobsBulletIcon}
                alt="All Jobs"
              />
              <span className="my-jobs-home-page__all-jobs-text">All Jobs</span>
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
            <div className="my-jobs-home-page__card-one">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
