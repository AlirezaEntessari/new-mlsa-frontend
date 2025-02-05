import React from "react";
import "./DashboardHomePage.scss";
import DashboardSidePanel from "../../components/DashboardSidePanel/DashboardSidePanel";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import SearchIcon from "../../assets/icons/Search (2).svg";
import NotificationsIcon from "../../assets/icons/notificationbellmessage.svg";
import CloseIcon from "../../assets/icons/xtask.svg";
import OrangeDotIcon from "../../assets/icons/orangedot.svg";
import VerticalSliderMessagesIcon from "../../assets/icons/verticalslidermessages.svg";
import MessagesFourIcon from "../../assets/icons/messagesfour.svg";
import CreateMessageIcon from "../../assets/icons/createmessage.svg";
import MobileCalendarIcon from "../../assets/icons/mobilecalendar.svg";
import TaskIconOneIcon from "../../assets/icons/taskiconone.svg";
import GrayCheckmarkIcon from "../../assets/icons/graycheckmark.svg";
import OrangeCheckmarkIcon from "../../assets/icons/orangecheckmark.svg";
import GrayDotIcon from "../../assets/icons/graydot.svg";
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
import { Link } from "react-router-dom";

export default function DashboardHomePage() {
  return (
    <div className="dashboard-home-page">
      <HeaderWithProfilePic />
      <div className="dashboard-home-page__main-container">
        <DashboardSidePanel />
        <div className="dashboard-home-page__right-container">
          <div className="dashboard-home-page__mobile-container">
            <div className="dashboard-home-page__mobile-first-half-container">
              <div className="dashboard-home-page__mobile-top-container">
                <label
                  className="dashboard-home-page__mobile-quick-search-text"
                  htmlFor="mobile-candidates-select"
                >
                  Quick Search
                </label>
                <select
                  className="dashboard-home-page__mobile-candidates-select"
                  name="mobile-candidates-select"
                  id="mobile-candidates-select"
                >
                  <option value="candidates" selected>
                    Candidates
                  </option>
                </select>
              </div>
              <Link
                className="dashboard-home-page__link"
                to="/dashboard/quick-search-results"
              >
                <input
                  className="dashboard-home-page__mobile-keywords-input"
                  type="text"
                  placeholder="Keywords"
                  id="mobile-candidates-select"
                />
              </Link>
              <img
                className="dashboard-home-page__mobile-search-icon"
                src={SearchIcon}
                alt="Search Icon"
              />
              <div className="dashboard-home-page__mobile-notifications-container">
                <div className="dashboard-home-page__mobile-notifications-top-container">
                  <p className="dashboard-home-page__mobile-notifications-header">
                    Notifications
                  </p>
                  <img
                    className="dashboard-home-page__mobile-notifications-icon"
                    src={NotificationsIcon}
                    alt="Notifications Icon"
                  />
                </div>
                <table className="dashboard-home-page__mobile-notifications-table">
                  <thead className="dashboard-home-page__mobile-notifications-table-header-section">
                    <tr className="dashboard-home-page__mobile-notifications-table-header-row">
                      <th className="dashboard-home-page__mobile-notifications-table-header-column-needs-attention">
                        Needs Attention
                      </th>
                    </tr>
                  </thead>
                  <tbody className="dashboard-home-page__mobile-notifications-table-data-section">
                    <Link
                      className="dashboard-home-page__link"
                      to="/dashboard/read-notification"
                    >
                      <tr className="dashboard-home-page__mobile-notifications-table-data-row-1">
                        <td className="dashboard-home-page__mobile-notifications-table-data-row-1-value">
                          <img
                            className="dashboard-home-page__mobile-orange-dot-icon"
                            src={OrangeDotIcon}
                            alt="Orange Dot Icon"
                          />
                          <span className="dashboard-home-page__mobile-notifications-table-data-row-1-text">
                            Welcome New MLSA Member!
                          </span>
                          <img
                            className="dashboard-home-page__mobile-close-icon"
                            src={CloseIcon}
                            alt="Close Icon"
                          />
                        </td>
                      </tr>
                    </Link>
                  </tbody>
                </table>
                <img
                  className="dashboard-home-page__mobile-vertical-slider-messages-icon"
                  src={VerticalSliderMessagesIcon}
                  alt="Vertical Slider Messages Icon"
                />
              </div>
              <div className="dashboard-home-page__mobile-messages-container">
                <div className="dashboard-home-page__mobile-messages-top-container">
                  <p className="dashboard-home-page__mobile-messages-header">
                    Messages
                  </p>
                  <img
                    className="dashboard-home-page__mobile-messages-four-icon"
                    src={MessagesFourIcon}
                    alt="Messages Four Icon"
                  />
                  <img
                    className="dashboard-home-page__mobile-create-message-icon"
                    src={CreateMessageIcon}
                    alt="Create Message Icon"
                  />
                </div>
                <table className="dashboard-home-page__mobile-messages-table">
                  <thead className="dashboard-home-page__mobile-messages-table-header-section">
                    <tr className="dashboard-home-page__mobile-messages-table-header-row">
                      <th className="dashboard-home-page__mobile-messages-table-header-column-date">
                        Date
                      </th>
                      <th className="dashboard-home-page__mobile-messages-table-header-column-sender">
                        Sender
                      </th>
                      <th className="dashboard-home-page__mobile-messages-table-header-column-subject">
                        Subject
                      </th>
                    </tr>
                  </thead>
                  <tbody className="dashboard-home-page__mobile-messages-table-body-section">
                    <div className="dashboard-home-page__mobile-messages-table-white-space"></div>
                    <tr className="dashboard-home-page__mobile-messages-table-data-row-1">
                      <td className="dashboard-home-page__mobile-messages-table-data-row-1-date">
                        <img
                          className="dashboard-home-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot"
                        />
                        <span className="dashboard-home-page__mobile-messages-table-data-row-1-date-text">
                          12:58 PM
                        </span>
                      </td>
                      <Link
                        className="dashboard-home-page__mobile-messages-link"
                        to="/dashboard/read-message"
                      >
                        <td className="dashboard-home-page__mobile-messages-table-data-row-1-sender">
                          Acme Agency
                        </td>
                      </Link>
                      <td className="dashboard-home-page__mobile-messages-table-data-row-1-subject">
                        NDA Ques...
                        <img
                          className="dashboard-home-page__mobile-messages-close-icon-1"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-home-page__mobile-messages-table-white-space"></div>
                    <tr className="dashboard-home-page__mobile-messages-table-data-row-2">
                      <td className="dashboard-home-page__mobile-messages-table-data-row-2-date">
                        <img
                          className="dashboard-home-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot"
                        />
                        <span className="dashboard-home-page__mobile-messages-table-data-row-2-date-text">
                          12:36 PM
                        </span>
                      </td>
                      <td className="dashboard-home-page__mobile-messages-table-data-row-2-sender">
                        ABC Staffing Inc.
                      </td>
                      <td className="dashboard-home-page__mobile-messages-table-data-row-2-subject">
                        Checking in...{" "}
                        <img
                          className="dashboard-home-page__mobile-messages-close-icon-2"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-home-page__mobile-messages-table-white-space"></div>
                    <tr className="dashboard-home-page__mobile-messages-table-data-row-3">
                      <td className="dashboard-home-page__mobile-messages-table-data-row-3-date">
                        <img
                          className="dashboard-home-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot"
                        />
                        <span className="dashboard-home-page__mobile-messages-table-data-row-3-date-text">
                          Fri 7/19
                        </span>
                      </td>
                      <td className="dashboard-home-page__mobile-messages-table-data-row-3-sender">
                        Beta Staffing Agency
                      </td>
                      <td className="dashboard-home-page__mobile-messages-table-data-row-3-subject">
                        Partnership...
                        <img
                          className="dashboard-home-page__mobile-messages-close-icon-3"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-home-page__mobile-messages-table-white-space"></div>
                    <tr className="dashboard-home-page__mobile-messages-table-data-row-4">
                      <td className="dashboard-home-page__mobile-messages-table-data-row-4-date">
                        {" "}
                        <img
                          className="dashboard-home-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot"
                        />
                        <span className="dashboard-home-page__mobile-messages-table-data-row-4-date-text">
                          Fri 7/19
                        </span>
                      </td>
                      <td className="dashboard-home-page__mobile-messages-table-data-row-4-sender">
                        Circular Staffing
                      </td>
                      <td className="dashboard-home-page__mobile-messages-table-data-row-4-subject">
                        Re: Partnersh...
                        <img
                          className="dashboard-home-page__mobile-messages-close-icon-4"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <img
                  className="dashboard-home-page__mobile-messages-vertical-slider-messages-icon"
                  src={VerticalSliderMessagesIcon}
                  alt="Vertical Slider Messages Icon"
                />
              </div>
              <Link
                className="dashboard-home-page__link"
                to="/dashboard/calendar-event"
              >
                <img
                  className="dashboard-home-page__mobile-mobile-calendar-icon"
                  src={MobileCalendarIcon}
                  alt="Mobile Calendar Icon"
                />
              </Link>
              <div className="dashboard-home-page__mobile-tasks-container">
                <div className="dashboard-home-page__mobile-tasks-header-container">
                  <p className="dashboard-home-page__mobile-tasks-header">
                    Tasks
                  </p>
                  <img
                    className="dashboard-home-page__mobile-task-icon-one-icon"
                    src={TaskIconOneIcon}
                    alt="Task Icon One Icon"
                  />
                </div>
                <table className="dashboard-home-page__mobile-tasks-table">
                  <thead className="dashboard-home-page__mobile-tasks-table-header-section">
                    <tr className="dashboard-home-page__mobile-tasks-table-header-row-1">
                      <th className=""></th>
                    </tr>
                  </thead>
                  <tbody className="dashboard-home-page__mobile-tasks-body-section">
                    <tr className="dashboard-home-page__mobile-tasks-data-row-1">
                      <td className="dashboard-home-page__mobile-tasks-data-row-1-date">
                        <img
                          className="dashboard-home-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot Icon"
                        />
                        <span className="dashboard-home-page__mobile-tasks-data-row-1-date-text">
                          9/13/24
                        </span>
                      </td>
                      <td className="dashboard-home-page__mobile-tasks-data-row-1-tasks">
                        Call Kelly Re: New Applicant{" "}
                        <img
                          className="dashboard-home-page__mobile-tasks-gray-checkmark-icon"
                          src={GrayCheckmarkIcon}
                          alt="Gray Checkmark Icon"
                        />
                        <img
                          className="dashboard-home-page__mobile-tasks-close-icon"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-home-page__mobile-tasks-white-space"></div>
                    <tr className="dashboard-home-page__mobile-tasks-data-row-2">
                      <td className="dashboard-home-page__mobile-tasks-data-row-2-date">
                        <img
                          className="dashboard-home-page__mobile-tasks-gray-dot-icon"
                          src={GrayDotIcon}
                          alt="Gray Dot Icon"
                        />
                        <span className="dashboard-home-page__mobile-tasks-data-row-2-date-text">
                          9/10/24
                        </span>
                      </td>
                      <td className="dashboard-home-page__mobile-tasks-data-row-2-tasks">
                        Call Jerry about Contract{" "}
                        <img
                          className="dashboard-home-page__mobile-orange-checkmark-icon"
                          src={OrangeCheckmarkIcon}
                          alt="Orange Checkmark Icon"
                        />
                        <img
                          className="dashboard-home-page__mobile-tasks-close-icon"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <img
                  className="dashboard-home-page__mobile-tasks-vertical-slider-messages-icon"
                  src={VerticalSliderMessagesIcon}
                  alt="Vertical Slider Messages Icon"
                />
              </div>
            </div>
            <div className="dashboard-home-page__mobile-activity-summary-container">
              <div className="dashboard-home-page__mobile-activity-summary-top-container">
                <p className="dashboard-home-page__mobile-activity-summary-header">
                  Activity Summary
                </p>
                <div className="dashboard-home-page__mobile-activity-summary-jobs-candidates-placements-container">
                  <div className="dashboard-home-page__mobile-activity-summary-jobs-container">
                    <p className="dashboard-home-page__mobile-activity-summary-jobs-text">
                      Jobs
                    </p>
                    <p className="dashboard-home-page__mobile-activity-summary-jobs-number">
                      17
                    </p>
                  </div>
                  <div className="dashboard-home-page__mobile-activity-summary-candidates-container">
                    <p className="dashboard-home-page__mobile-activity-summary-candidates-text">
                      Candidates
                    </p>
                    <p className="dashboard-home-page__mobile-activity-summary-candidates-number">
                      12
                    </p>
                  </div>
                  <div className="dashboard-home-page__mobile-activity-summary-placements-container">
                    <p className="dashboard-home-page__mobile-activity-summary-placements-text">
                      Placements
                    </p>
                    <p className="dashboard-home-page__mobile-activity-summary-placements-number">
                      29
                    </p>
                  </div>
                </div>
              </div>
              <div className="dashboard-home-page__mobile-activity-summary-my-jobs-container">
                <p className="dashboard-home-page__mobile-activity-summary-my-jobs-text">
                  MY JOBS
                </p>
                <img
                  className="dashboard-home-page__mobile-blue-dash-divider-icon"
                  src={BlueDashDividerIcon}
                  alt="Blue Dash Divider Icon"
                />
              </div>
              <div className="dashboard-home-page__mobile-activity-summary-my-jobs-dashboard-container">
                <div className="dashboard-home-page__mobile-activity-summary-my-jobs-top-dashboard-container">
                  <p className="dashboard-home-page__mobile-activity-summary-my-jobs-all-jobs">
                    <img
                      className="dashboard-home-page__mobile-activity-summary-all-jobs-dot-icon"
                      src={AllJobsDotIcon}
                      alt="All Jobs Dot Icon"
                    />
                    <span className="dashboard-home-page__mobile-activity-summary-all-jobs-text">
                      All Jobs
                    </span>
                  </p>
                  <p className="dashboard-home-page__mobile-activity-summary-my-jobs-pending">
                    <img
                      className="dashboard-home-page__mobile-activity-summary-jobs-pending-bullet-icon"
                      src={JobsPendingBulletIcon}
                      alt="Jobs Pending Bullet Icon"
                    />
                    <span className="dashboard-home-page__mobile-activity-summary-jobs-pending-text">
                      Pending
                    </span>
                  </p>
                  <p className="dashboard-home-page__mobile-activity-summary-my-jobs-reviews">
                    <img
                      className="dashboard-home-page__mobile-activity-summary-jobs-reviews-bullet-icon"
                      src={JobsReviewsBulletIcon}
                      alt="Jobs Reviews Bullet Icon"
                    />
                    <span className="dashboard-home-page__mobile-activity-summary-jobs-reviews-text">
                      Reviews
                    </span>
                  </p>
                  <p className="dashboard-home-page__mobile-activity-summary-my-jobs-submissions">
                    <img
                      className="dashboard-home-page__mobile-activity-summary-jobs-submissions-bullet-icon"
                      src={JobsSubmissionsBulletIcon}
                      alt="Jobs Submissions Bullet Icon"
                    />
                    <span className="dashboard-home-page__mobile-activity-summary-jobs-submissions-text">
                      Submissions
                    </span>
                  </p>
                </div>
                <div className="dashboard-home-page__mobile-activity-summary-my-jobs-bottom-dashboard-container">
                  <p className="dashboard-home-page__mobile-activity-summary-my-jobs-interviews">
                    <img
                      className="dashboard-home-page__mobile-activity-summary-jobs-interviews-bullet-icon"
                      src={JobsInterviewsBulletIcon}
                      alt="Jobs Interviews Bullet Icon"
                    />
                    <span className="dashboard-home-page__mobile-activity-summary-jobs-interviews-text">
                      Interviews
                    </span>
                  </p>
                  <p className="dashboard-home-page__mobile-activity-summary-my-jobs-offers">
                    <img
                      className="dashboard-home-page__mobile-activity-summary-jobs-offers-bullet-icon"
                      src={JobsOffersBulletIcon}
                      alt="Jobs Offers Bullet Icon"
                    />
                    <span className="dashboard-home-page__mobile-activity-summary-jobs-offers-text">
                      Offers
                    </span>
                  </p>
                  <p className="dashboard-home-page__mobile-activity-summary-my-jobs-placements">
                    <img
                      className="dashboard-home-page__mobile-activity-summary-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="dashboard-home-page__mobile-activity-summary-jobs-placements-text">
                      Placements
                    </span>
                  </p>
                </div>
              </div>
              <div className="dashboard-home-page__mobile-activity-summary-description-status-applicants-container">
                <p className="dashboard-home-page__mobile-activity-summary-description">
                  DESCRIPTION
                </p>
                <p className="dashboard-home-page__mobile-activity-summary-status">
                  STATUS
                </p>
                <p className="dashboard-home-page__mobile-activity-summary-applicants">
                  APPLICANTS
                </p>
              </div>
              <div className="dashboard-home-page__mobile-activity-summary-job-openings-container">
                <p className="dashboard-home-page__mobile-activity-summary-job-openings-ct-tech">
                  CT Tech at Berkshire Medical Center
                </p>
                <p className="dashboard-home-page__mobile-activity-summary-job-openings-ct-tech-description">
                  <span className="dashboard-home-page__mobile-activity-summary-job-openings-ct-tech-job-nature">
                    Contract
                  </span>
                  <span className="dashboard-home-page__mobile-activity-summary-job-openings-ct-tech-job-duration">
                    27 days Remaining
                  </span>
                  <span className="dashboard-home-page__mobile-activity-summary-job-openings-ct-tech-job-status">
                    Active
                  </span>
                  <span className="dashboard-home-page__mobile-activity-summary-job-openings-ct-tech-job-number">
                    5
                  </span>
                </p>
                <p className="dashboard-home-page__mobile-activity-summary-job-openings-ultrasound-tech">
                  Ultrasound Tech at Texas Health Presbyterian
                </p>
                <p className="dashboard-home-page__mobile-activity-summary-job-openings-ultrasound-tech-description">
                  <span className="dashboard-home-page__mobile-activity-summary-job-openings-ultrasound-tech-job-nature">
                    Contract
                  </span>
                  <span className="dashboard-home-page__mobile-activity-summary-job-openings-ultrasound-tech-job-duration">
                    28 Days Remaining
                  </span>
                  <span className="dashboard-home-page__mobile-activity-summary-job-openings-ultrasound-tech-job-status">
                    Active
                  </span>
                  <span className="dashboard-home-page__mobile-activity-summary-job-openings-ultrasound-tech-job-number">
                    8
                  </span>
                </p>
                <p className="dashboard-home-page__mobile-activity-summary-job-openings-cna">
                  CNA at Atrium Health Union West
                </p>
                <p className="dashboard-home-page__mobile-activity-summary-job-openings-cna-description">
                  <span className="dashboard-home-page__mobile-activity-summary-job-openings-cna-job-nature">
                    Contract
                  </span>
                  <span className="dashboard-home-page__mobile-activity-summary-job-openings-cna-job-duration">
                    29 Days Remaining
                  </span>
                  <span className="dashboard-home-page__mobile-activity-summary-job-openings-cna-job-status">
                    Active
                  </span>
                  <span className="dashboard-home-page__mobile-activity-summary-job-openings-cna-job-number">
                    10
                  </span>
                </p>
                <p className="dashboard-home-page__mobile-activity-summary-job-openings-allied-cma">
                  Allied CMA at Texas Health Presbyterian
                </p>
                <p className="dashboard-home-page__mobile-activity-summary-job-openings-allied-cma-description">
                  <span className="dashboard-home-page__mobile-activity-summary-job-openings-allied-cma-job-nature">
                    Contract
                  </span>
                  <span className="dashboard-home-page__mobile-activity-summary-job-openings-allied-cma-job-duration">
                    30 Days Remaining
                  </span>
                  <span className="dashboard-home-page__mobile-activity-summary-job-openings-allied-cma-job-status">
                    Expired
                  </span>
                  <span className="dashboard-home-page__mobile-activity-summary-job-openings-allied-cma-job-number">
                    4
                  </span>
                </p>
                <div className="dashboard-home-page__mobile-activity-summary-job-openings-navigation-container">
                  <img
                    className="dashboard-home-page__mobile-activity-summary-job-openings-left-arrow-icon"
                    src={LeftArrowIcon}
                    alt="Left Arrow Icon"
                  />
                  <img
                    className="dashboard-home-page__mobile-activity-summary-job-openings-page-number-blue-one-icon"
                    src={PageNumberBlueOneIcon}
                    alt="Page Number Blue One Icon"
                  />
                  <img
                    className="dashboard-home-page__mobile-activity-summary-job-openings-page-number-gray-two-icon"
                    src={PageNumberGrayTwoIcon}
                    alt="Page Number Gray Two Icon"
                  />
                  <img
                    className="dashboard-home-page__mobile-activity-summary-job-openings-page-number-gray-three-icon"
                    src={PageNumberGrayThreeIcon}
                    alt="Page Number Gray Three Icon"
                  />
                  <img
                    className="dashboard-home-page__mobile-activity-summary-job-openings-right-arrow-icon"
                    src={RightArrowIcon}
                    alt="Right Arrow Icon"
                  />
                </div>
              </div>
              <div className="dashboard-home-page__mobile-activity-summary-my-candidates-container">
                <div className="dashboard-home-page__mobile-activity-summary-my-candidates-top-container">
                  <p className="dashboard-home-page__mobile-activity-summary-my-candidates-text">
                    MY CANDIDATES
                  </p>
                  <img
                    className="dashboard-home-page__mobile-activity-summary-orange-dash-divider-icon"
                    src={OrangeDashDividerIcon}
                    alt="Orange Dash Divider Icon"
                  />
                </div>
                <div className="dashboard-home-page__mobile-activity-summary-dashboard-container">
                  <div className="dashboard-home-page__mobile-activity-summary-dashboard-top-container">
                    <p className="dashboard-home-page__mobile-activity-summary-dashboard-all-candidates">
                      <img
                        className="dashboard-home-page__mobile-all-candidates-dash-dot-icon"
                        src={AllCandidatesDashDotIcon}
                        alt="All Candidates Dash Dot Icon"
                      />
                      <span className="dashboard-home-page__mobile-activity-summary-all-candidates-text">
                        All Candidates
                      </span>
                    </p>
                    <p className="dashboard-home-page__mobile-activity-summary-dashboard-pending">
                      <img
                        className="dashboard-home-page__mobile-my-candidates-pending-icon"
                        src={MyCandidatesPendingIcon}
                        alt="My Candidates Pending Icon"
                      />
                      <span className="dashboard-home-page__mobile-activity-summary-pending-text">
                        Pending
                      </span>
                    </p>
                    <p className="dashboard-home-page__mobile-activity-summary-dashboard-reviews">
                      <img
                        className="dashboard-home-page__mobile-my-candidates-reviews-icon"
                        src={MyCandidatesReviewsIcon}
                        alt="My Candidates Reviews Icon"
                      />
                      <span className="dashboard-home-page__mobile-activity-summary-reviews-text">
                        Reviews
                      </span>
                    </p>
                    <p className="dashboard-home-page__mobile-activity-summary-dashboard-submissions">
                      <img
                        className="dashboard-home-page__mobile-my-candidates-submissions-icon"
                        src={MyCandidatesSubmissionsIcon}
                        alt="My Candidates Submissions Icon"
                      />
                      <span className="dashboard-home-page__mobile-activity-summary-submissions-text">
                        Submissions
                      </span>
                    </p>
                  </div>
                  <div className="dashboard-home-page__mobile-activity-summary-dashboard-bottom-container">
                    <p className="dashboard-home-page__mobile-activity-summary-dashboard-interviews">
                      <img
                        className="dashboard-home-page__mobile-my-candidates-interviews-icon"
                        src={MyCandidatesInterviewsIcon}
                        alt="My Candidates Interviews Icon"
                      />
                      <span className="dashboard-home-page__mobile-activity-summary-dashboard-interviews-text">
                        Interviews
                      </span>
                    </p>
                    <p className="dashboard-home-page__mobile-activity-summary-dashboard-offers">
                      <img
                        className="dashboard-home-page__mobile-my-candidates-offers-icon"
                        src={MyCandidatesOffersIcon}
                        alt="My Candidates Offers Icon"
                      />
                      <span className="dashboard-home-page__mobile-activity-summary-offers-text">
                        Offers
                      </span>
                    </p>
                    <p className="dashboard-home-page__mobile-activity-summary-dashboard-placements">
                      <img
                        className="dashboard-home-page__mobile-my-candidates-placements-icon"
                        src={MyCandidatesPlacementsIcon}
                        alt="My Candidates Placements Icon"
                      />
                      <span className="dashboard-home-page__mobile-activity-summary-placements-text">
                        Placements
                      </span>
                    </p>
                  </div>
                </div>
                <div className="dashboard-home-page__mobile-my-candidates-description-status-requests-container">
                  <p className="dashboard-home-page__mobile-my-candidates-description-text">
                    DESCRIPTION
                  </p>
                  <p className="dashboard-home-page__mobile-my-candidates-status-text">
                    STATUS
                  </p>
                  <p className="dashboard-home-page__mobile-my-candidates-requests-text">
                    REQUESTS
                  </p>
                </div>
                <div className="dashboard-home-page__mobile-my-candidates-dashboard-container">
                  <p className="dashboard-home-page__mobile-my-candidates-dashboard-ann-morton">
                    Ann Morton
                  </p>
                  <p className="dashboard-home-page__mobile-my-candidates-dashboard-ann-morton-description">
                    <span className="dashboard-home-page__mobile-my-candidates-dashboard-ann-morton-job-title">
                      RN - ER
                    </span>
                    <span className="dashboard-home-page__mobile-my-candidates-dashboard-ann-morton-duration">
                      27 Days Remaining
                    </span>
                    <span className="dashboard-home-page__mobile-my-candidates-dashboard-ann-morton-status">
                      Active
                    </span>
                    <span className="dashboard-home-page__mobile-my-candidates-dashboard-ann-morton-number-of-jobs">
                      2 Jobs
                    </span>
                  </p>
                  <p className="dashboard-home-page__mobile-my-candidates-dashboard-sarah-davis">
                    Sarah Davis
                  </p>
                  <p className="dashboard-home-page__mobile-my-candidates-dashboard-sarah-davis-description">
                    <span className="dashboard-home-page__mobile-my-candidates-dashboard-sarah-davis-job-title">
                      Ultrasound Tech
                    </span>
                    <span className="dashboard-home-page__mobile-my-candidates-dashboard-sarah-davis-duration">
                      34 Days Remaining
                    </span>
                    <span className="dashboard-home-page__mobile-my-candidates-dashboard-sarah-davis-status">
                      Active
                    </span>
                    <span className="dashboard-home-page__mobile-my-candidates-dashboard-sarah-davis-number-of-jobs">
                      4 Jobs
                    </span>
                  </p>
                  <p className="dashboard-home-page__mobile-my-candidates-dashboard-joe-williams">
                    Joe Williams
                  </p>
                  <p className="dashboard-home-page__mobile-my-candidates-dashboard-joe-williams-description">
                    <span className="dashboard-home-page__mobile-my-candidates-dashboard-joe-williams-job-title">
                      CNA
                    </span>
                    <span className="dashboard-home-page__mobile-my-candidates-dashboard-joe-williams-duration">
                      35 Days Remaining
                    </span>
                    <span className="dashboard-home-page__mobile-my-candidates-dashboard-joe-williams-status">
                      Active
                    </span>
                    <span className="dashboard-home-page__mobile-my-candidates-dashboard-joe-williams-number-of-jobs">
                      5 Jobs
                    </span>
                  </p>
                  <p className="dashboard-home-page__mobile-my-candidates-dashboard-tim-peterson">
                    Tim Peterson
                  </p>
                  <p className="dashboard-home-page__mobile-my-candidates-dashboard-tim-peterson-description">
                    <span className="dashboard-home-page__mobile-my-candidates-dashboard-tim-peterson-job-title">
                      RN-ER
                    </span>
                    <span className="dashboard-home-page__mobile-my-candidates-dashboard-tim-peterson-duration">
                      0 Days Remaining
                    </span>
                    <span className="dashboard-home-page__mobile-my-candidates-dashboard-tim-peterson-status">
                      Expired
                    </span>
                    <span className="dashboard-home-page__mobile-my-candidates-dashboard-tim-peterson-number-of-jobs">
                      0 Jobs
                    </span>
                  </p>
                </div>
                <div className="dashboard-home-page__mobile-my-candidates-navigation-container">
                  <img
                    className="dashboard-home-page__mobile-my-candidates-left-arrow-icon"
                    src={LeftArrowIcon}
                    alt="Left Arrow Icon"
                  />
                  <img
                    className="dashboard-home-page__mobile-my-candidates-page-number-peach-one-icon"
                    src={PageNumberPeachOneIcon}
                    alt="Page Number Peach One Icon"
                  />
                  <img
                    className="dashboard-home-page__mobile-my-candidates-page-number-gray-two-icon"
                    src={PageNumberGrayTwoIcon}
                    alt="Page Number Gray Two Icon"
                  />
                  <img
                    className="dashboard-home-page__mobile-my-candidates-page-number-gray-three-icon"
                    src={PageNumberGrayThreeIcon}
                    alt="Page Number Gray Three Icon"
                  />
                  <img
                    className="dashboard-home-page__mobile-my-candidates-page-number-right-arrow-icon"
                    src={RightArrowIcon}
                    alt="Right Arrow Icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-home-page__tablet-container">
            <div className="dashboard-home-page__tablet-central-container">
              <div className="dashboard-home-page__tablet-top-container">
                <p className="dashboard-home-page__tablet-quick-search-header">
                  Quick Search
                </p>
                <select
                  className="dashboard-home-page__tablet-candidates-select"
                  name="tablet-candidates"
                  id="tablet-candidates"
                >
                  <option value="Candidates" selected>
                    Candidates
                  </option>
                </select>
                <Link
                  className="dashboard-home-page__link"
                  to="/dashboard/quick-search-results"
                >
                  <input
                    className="dashboard-home-page__tablet-keyword-input"
                    type="text"
                    placeholder="Keyword"
                  />
                </Link>
                <img
                  className="dashboard-home-page__tablet-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
              </div>
              <div className="dashboard-home-page__tablet-notifications-messages-container">
                <div className="dashboard-home-page__tablet-notifications-container">
                  <div className="dashboard-home-page__tablet-notifications-top-container">
                    <p className="dashboard-home-page__tablet-notifications-header">
                      Notifications
                    </p>
                    <img
                      className="dashboard-home-page__tablet-notifications-icon"
                      src={NotificationsIcon}
                      alt="Notifications Icon"
                    />
                  </div>
                  <table className="dashboard-home-page__tablet-notifications-table">
                    <thead className="dashboard-home-page__tablet-notifications-table-header-section">
                      <tr className="dashboard-home-page__tablet-notifications-table-header-row">
                        <th className="dashboard-home-page__tablet-notifications-table-header-column-needs-attention">
                          Needs Attention
                        </th>
                      </tr>
                    </thead>
                    <tbody className="dashboard-home-page__tablet-notifications-table-data-section">
                      <Link
                        className="dashboard-home-page__link"
                        to="/dashboard/read-notification"
                      >
                        <tr className="dashboard-home-page__tablet-notifications-table-data-row-1">
                          <td className="dashboard-home-page__tablet-notifications-table-data-row-1-value">
                            <img
                              className="dashboard-home-page__tablet-orange-dot-icon"
                              src={OrangeDotIcon}
                              alt="Orange Dot Icon"
                            />
                            <span className="dashboard-home-page__tablet-notifications-table-data-row-1-text">
                              Welcome New MLSA Member!
                            </span>
                            <img
                              className="dashboard-home-page__tablet-close-icon"
                              src={CloseIcon}
                              alt="Close Icon"
                            />
                          </td>
                        </tr>
                      </Link>
                    </tbody>
                  </table>
                  <img
                    className="dashboard-home-page__tablet-vertical-slider-notifications-icon"
                    src={VerticalSliderMessagesIcon}
                    alt="Vertical Slider Messages Icon"
                  />
                </div>
                <div className="dashboard-home-page__tablet-messages-container">
                  <div className="dashboard-home-page__tablet-messages-top-container">
                    <p className="dashboard-home-page__tablet-messages-header">
                      Messages
                    </p>
                    <img
                      className="dashboard-home-page__tablet-messages-four-icon"
                      src={MessagesFourIcon}
                      alt="Messages Four Icon"
                    />
                    <img
                      className="dashboard-home-page__tablet-create-message-icon"
                      src={CreateMessageIcon}
                      alt="Create Message Icon"
                    />
                  </div>
                  <table className="dashboard-home-page__tablet-messages-table">
                    <thead className="dashboard-home-page__tablet-messages-table-header-section">
                      <tr className="dashboard-home-page__tablet-messages-table-header-row">
                        <th className="dashboard-home-page__tablet-messages-table-header-column-date">
                          Date
                        </th>
                        <th className="dashboard-home-page__tablet-messages-table-header-column-sender">
                          Sender
                        </th>
                        <th className="dashboard-home-page__tablet-messages-table-header-column-subject">
                          Subject
                        </th>
                      </tr>
                    </thead>
                    <tbody className="dashboard-home-page__tablet-messages-table-body-section">
                      <div className="dashboard-home-page__tablet-messages-table-white-space"></div>
                      <tr className="dashboard-home-page__tablet-messages-table-data-row-1">
                        <td className="dashboard-home-page__tablet-messages-table-data-row-1-date">
                          <img
                            className="dashboard-home-page__tablet-orange-dot-icon"
                            src={OrangeDotIcon}
                            alt="Orange Dot"
                          />
                          <span className="dashboard-home-page__tablet-messages-table-data-row-1-date-text">
                            12:58 PM
                          </span>
                        </td>
                        <Link
                          className="dashboard-home-page__link"
                          to="/dashboard/read-message"
                        >
                          <td className="dashboard-home-page__tablet-messages-table-data-row-1-sender">
                            Acme Agency
                          </td>
                        </Link>
                        <td className="dashboard-home-page__tablet-messages-table-data-row-1-subject">
                          NDA Ques...
                          <img
                            className="dashboard-home-page__tablet-messages-close-icon-1"
                            src={CloseIcon}
                            alt="Close Icon"
                          />
                        </td>
                      </tr>
                      <div className="dashboard-home-page__tablet-messages-table-white-space"></div>
                      <tr className="dashboard-home-page__tablet-messages-table-data-row-2">
                        <td className="dashboard-home-page__tablet-messages-table-data-row-2-date">
                          <img
                            className="dashboard-home-page__tablet-orange-dot-icon"
                            src={OrangeDotIcon}
                            alt="Orange Dot"
                          />
                          <span className="dashboard-home-page__tablet-messages-table-data-row-2-date-text">
                            12:36 PM
                          </span>
                        </td>
                        <td className="dashboard-home-page__tablet-messages-table-data-row-2-sender">
                          ABC Staffing Inc.
                        </td>
                        <td className="dashboard-home-page__tablet-messages-table-data-row-2-subject">
                          Checking in...{" "}
                          <img
                            className="dashboard-home-page__tablet-messages-close-icon-2"
                            src={CloseIcon}
                            alt="Close Icon"
                          />
                        </td>
                      </tr>
                      <div className="dashboard-home-page__tablet-messages-table-white-space"></div>
                      <tr className="dashboard-home-page__tablet-messages-table-data-row-3">
                        <td className="dashboard-home-page__tablet-messages-table-data-row-3-date">
                          <img
                            className="dashboard-home-page__tablet-orange-dot-icon"
                            src={OrangeDotIcon}
                            alt="Orange Dot"
                          />
                          <span className="dashboard-home-page__tablet-messages-table-data-row-3-date-text">
                            Fri 7/19
                          </span>
                        </td>
                        <td className="dashboard-home-page__tablet-messages-table-data-row-3-sender">
                          Beta Staffing Agency
                        </td>
                        <td className="dashboard-home-page__tablet-messages-table-data-row-3-subject">
                          Partnership...
                          <img
                            className="dashboard-home-page__tablet-messages-close-icon-3"
                            src={CloseIcon}
                            alt="Close Icon"
                          />
                        </td>
                      </tr>
                      <div className="dashboard-home-page__tablet-messages-table-white-space"></div>
                      <tr className="dashboard-home-page__tablet-messages-table-data-row-4">
                        <td className="dashboard-home-page__tablet-messages-table-data-row-4-date">
                          {" "}
                          <img
                            className="dashboard-home-page__tablet-orange-dot-icon"
                            src={OrangeDotIcon}
                            alt="Orange Dot"
                          />
                          <span className="dashboard-home-page__tablet-messages-table-data-row-4-date-text">
                            Fri 7/19
                          </span>
                        </td>
                        <td className="dashboard-home-page__tablet-messages-table-data-row-4-sender">
                          Circular Staffing
                        </td>
                        <td className="dashboard-home-page__tablet-messages-table-data-row-4-subject">
                          Re: Partnersh...
                          <img
                            className="dashboard-home-page__tablet-messages-close-icon-4"
                            src={CloseIcon}
                            alt="Close Icon"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <img
                    className="dashboard-home-page__tablet-messages-vertical-slider-messages-icon"
                    src={VerticalSliderMessagesIcon}
                    alt="Vertical Slider Messages Icon"
                  />
                </div>
              </div>
              <div className="dashboard-home-page__tablet-calendar-tasks-container">
                <Link
                  className="dashboard-home-page__link"
                  to="/dashboard/calendar-event"
                >
                  <img
                    className="dashboard-home-page__tablet-calendar-icon"
                    src={MobileCalendarIcon}
                    alt="Calendar Icon"
                  />
                </Link>
                <div className="dashboard-home-page__tablet-tasks-container">
                  <div className="dashboard-home-page__tablet-tasks-header-container">
                    <p className="dashboard-home-page__tablet-tasks-header">
                      Tasks
                    </p>
                    <img
                      className="dashboard-home-page__tablet-task-icon-one-icon"
                      src={TaskIconOneIcon}
                      alt="Task Icon One Icon"
                    />
                  </div>
                  <div className="dashboard-home-page__tablet-tasks-first-row-container">
                    <img
                      className="dashboard-home-page__tablet-orange-dot-icon"
                      src={OrangeDotIcon}
                      alt="Orange Dot Icon"
                    />
                    <p className="dashboard-home-page__tablet-tasks-first-row-date">
                      9/13/24
                    </p>
                    <p className="dashboard-home-page__tablet-tasks-first-row-task-description">
                      Call Kelly Re: New Applicant
                    </p>
                    <img
                      className="dashboard-home-page__tablet-gray-checkmark-icon"
                      src={GrayCheckmarkIcon}
                      alt="Gray Checkmark Icon"
                    />
                    <img
                      className="dashboard-home-page__tablet-tasks-first-row-close-icon"
                      src={CloseIcon}
                      alt="Close Icon"
                    />
                  </div>
                  <div className="dashboard-home-page__tablet-second-row-container">
                    <img
                      className="dashboard-home-page__tablet-gray-dot-icon"
                      src={GrayDotIcon}
                      alt="Gray Dot Icon"
                    />
                    <p className="dashboard-home-page__tablet-tasks-second-row-date">
                      9/10/24
                    </p>
                    <p className="dashboard-home-page__tablet-tasks-second-row-task-description">
                      Call Jerry about Contract
                    </p>
                    <img
                      className="dashboard-home-page__tablet-orange-checkmark-icon"
                      src={OrangeCheckmarkIcon}
                      alt="Orange Checkmark Icon"
                    />
                    <img
                      className="dashboard-home-page__tablet-tasks-second-row-close-icon"
                      src={CloseIcon}
                      alt="Close Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-home-page__tablet-activity-summary-container">
              <div className="dashboard-home-page__tablet-activity-summary-top-container">
                <p className="dashboard-home-page__tablet-activity-summary-header">
                  Activity Summary
                </p>
                <div className="dashboard-home-page__tablet-activity-summary-jobs-candidates-placements-container">
                  <div className="dashboard-home-page__tablet-activity-summary-jobs-container">
                    <p className="dashboard-home-page__tablet-activity-summary-jobs-text">
                      Jobs
                    </p>
                    <p className="dashboard-home-page__tablet-activity-summary-jobs-number">
                      17
                    </p>
                  </div>
                  <div className="dashboard-home-page__tablet-activity-summary-candidates-container">
                    <p className="dashboard-home-page__tablet-activity-summary-candidates-text">
                      Candidates
                    </p>
                    <p className="dashboard-home-page__tablet-activity-summary-candidates-number">
                      12
                    </p>
                  </div>
                  <div className="dashboard-home-page__tablet-activity-summary-placements-container">
                    <p className="dashboard-home-page__tablet-activity-summary-placements-text">
                      Placements
                    </p>
                    <p className="dashboard-home-page__tablet-activity-summary-placements-number">
                      29
                    </p>
                  </div>
                </div>
              </div>
              <div className="dashboard-home-page__tablet-activity-summary-my-jobs-container">
                <div className="dashboard-home-page__tablet-activity-summary-my-jobs-header-container">
                  <p className="dashboard-home-page__tablet-activity-summary-my-jobs-header-text">
                    MY JOBS
                  </p>
                  <img
                    className="dashboard-home-page__tablet-blue-dash-divider-icon"
                    src={BlueDashDividerIcon}
                    alt="Blue Dash Divider Icon"
                  />
                </div>
                <div className="dashboard-home-page__tablet-activity-summary-my-jobs-top-dashboard-container">
                  <p className="dashboard-home-page__tablet-activity-summary-my-jobs-all-jobs">
                    <img
                      className="dashboard-home-page__tablet-activity-summary-all-jobs-dot-icon"
                      src={AllJobsDotIcon}
                      alt="All Jobs Dot Icon"
                    />
                    <span className="dashboard-home-page__tablet-activity-summary-all-jobs-text">
                      All Jobs
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-activity-summary-my-jobs-pending">
                    <img
                      className="dashboard-home-page__tablet-jobs-pending-bullet-icon"
                      src={JobsPendingBulletIcon}
                      alt="Jobs Pending Bullet Icon"
                    />
                    <span className="dashboard-home-page__tablet-activity-summary-pending-text">
                      Pending
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-activity-summary-reviews">
                    <img
                      className="dashboard-home-page__tablet-jobs-reviews-bullet-icon"
                      src={JobsReviewsBulletIcon}
                      alt="Jobs Reviews Bullet Icon"
                    />
                    <span className="dashboard-home-page__tablet-activity-summary-reviews-text">
                      Reviews
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-activity-summary-submissions">
                    <img
                      className="dashboard-home-page__tablet-jobs-submissions-bullet-icon"
                      src={JobsSubmissionsBulletIcon}
                      alt="Jobs Submissions Bullet Icon"
                    />
                    <span className="dashboard-home-page__tablet-activity-summary-submissions-text">
                      Submissions
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-activity-summary-interviews">
                    <img
                      className="dashboard-home-page__tablet-jobs-interviews-bullet-icon"
                      src={JobsInterviewsBulletIcon}
                      alt="Jobs Interviews Bullet Icon"
                    />
                    <span className="dashboard-home-page__tablet-activity-summary-interviews-text">
                      Interviews
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-activity-summary-offers">
                    <img
                      className="dashboard-home-page__tablet-jobs-offers-bullet-icon"
                      src={JobsOffersBulletIcon}
                      alt="Jobs Offers Bullet Icon"
                    />
                    <span className="dashboard-home-page__tablet-activity-summary-offers-text">
                      Offers
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-activity-summary-placements">
                    <img
                      className="dashboard-home-page__tablet-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="dashboard-home-page__tablet-activity-summary-placements-text">
                      Placements
                    </span>
                  </p>
                </div>
                <div className="dashboard-home-page__tablet-description-status-applicants-container">
                  <p className="dashboard-home-page__tablet-description-text">
                    DESCRIPTION
                  </p>
                  <p className="dashboard-home-page__tablet-status-text">
                    STATUS
                  </p>
                  <p className="dashboard-home-page__tablet-applicants-text">
                    APPLICANTS
                  </p>
                </div>
                <div className="dashboard-home-page__tablet-my-jobs-job-description-container">
                  <p className="dashboard-home-page__tablet-ct-tech">
                    CT Tech at Berkshire Medical Center
                  </p>
                  <p className="dashboard-home-page__tablet-ct-tech-description">
                    <span className="dashboard-home-page__tablet-ct-tech-job-nature">
                      Contract
                    </span>
                    <span className="dashboard-home-page__tablet-ct-tech-job-duration">
                      27 Days Remaining
                    </span>
                    <span className="dashboard-home-page__tablet-ct-tech-job-status">
                      Active
                    </span>
                    <span className="dashboard-home-page__tablet-ct-tech-job-number-of-applicants">
                      5 Candidates
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-ultrasound-tech">
                    Ultrasound Tech at Texas Health Presbyterian
                  </p>
                  <p className="dashboard-home-page__tablet-ultrasound-tech-description">
                    <span className="dashboard-home-page__tablet-ultrasound-tech-job-nature">
                      Contract
                    </span>
                    <span className="dashboard-home-page__tablet-ultrasound-tech-job-duration">
                      28 Days Remaining
                    </span>
                    <span className="dashboard-home-page__tablet-ultrasound-tech-job-status">
                      Active
                    </span>
                    <span className="dashboard-home-page__tablet-ultrasound-tech-job-number-of-applicants">
                      8 Candidates
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-cna">
                    CNA at Atrium Health Union West
                  </p>
                  <p className="dashboard-home-page__tablet-cna-description">
                    <span className="dashboard-home-page__tablet-cna-job-nature">
                      Contract
                    </span>
                    <span className="dashboard-home-page__tablet-cna-job-duration">
                      29 Days Remaining
                    </span>
                    <span className="dashboard-home-page__tablet-cna-job-status">
                      Active
                    </span>
                    <span className="dashboard-home-page__tablet-cna-job-number-of-applicants">
                      10 Candidates
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-allied-cma">
                    Allied CMA at Texas Health Presbyterian
                  </p>
                  <p className="dashboard-home-page__tablet-allied-cma-description">
                    <span className="dashboard-home-page__tablet-allied-cma-nature">
                      Contract
                    </span>
                    <span className="dashboard-home-page__tablet-allied-cma-duration">
                      30 Days Remaining
                    </span>
                    <span className="dashboard-home-page__tablet-allied-cma-status">
                      Expired
                    </span>
                    <span className="dashboard-home-page__tablet-allied-cma-applicants">
                      4 Candidates
                    </span>
                  </p>
                </div>
                <div className="dashboard-home-page__tablet-my-jobs-navigation-container">
                  <img
                    className="dashboard-home-page__tablet-left-arrow-icon"
                    src={LeftArrowIcon}
                    alt="Left Arrow Icon"
                  />
                  <img
                    className="dashboard-home-page__tablet-page-number-blue-one-icon"
                    src={PageNumberBlueOneIcon}
                    alt="Page Number Blue One Icon"
                  />
                  <img
                    className="dashboard-home-page__tablet-page-number-gray-two-icon"
                    src={PageNumberGrayTwoIcon}
                    alt="Page Number Gray Two Icon"
                  />
                  <img
                    className="dashboard-home-page__tablet-page-number-gray-three-icon"
                    src={PageNumberGrayThreeIcon}
                    alt="Page Number Gray Three Icon"
                  />
                  <img
                    className="dashboard-home-page__tablet-right-arrow-icon"
                    src={RightArrowIcon}
                    alt="Right Arrow Icon"
                  />
                </div>
              </div>
              <div className="dashboard-home-page__tablet-activity-summary-my-candidates-container">
                <div className="dashboard-home-page__tablet-activity-summary-my-candidates-header-container">
                  <p className="dashboard-home-page__tablet-activity-summary-my-candidates-header-text">
                    MY CANDIDATES
                  </p>
                  <img
                    className="dashboard-home-page__tablet-orange-dash-divider-icon"
                    src={OrangeDashDividerIcon}
                    alt="Orange Dash Divider Icon"
                  />
                </div>
                <div className="dashboard-home-page__tablet-top-dashboard-container">
                  <p className="dashboard-home-page__tablet-my-candidates-all-candidates">
                    <img
                      className="dashboard-home-page__tablet-all-candidates-dash-dot-icon"
                      src={AllCandidatesDashDotIcon}
                      alt="All Candidates Dash Dat Icon"
                    />
                    <span className="dashboard-home-page__tablet-my-candidates-all-candidates-text">
                      All Candidates
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-my-candidates-pending">
                    <img
                      className="dashboard-home-page__tablet-my-candidates-pending-icon"
                      src={MyCandidatesPendingIcon}
                      alt="My Candidates Pending Icon"
                    />
                    <span className="dashboard-home-page__tablet-my-candidates-pending-text">
                      Pending
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-my-candidates-reviews">
                    <img
                      className="dashboard-home-page__tablet-my-candidates-reviews-icon"
                      src={MyCandidatesReviewsIcon}
                      alt="My Candidates Reviews Icon"
                    />
                    <span className="dashboard-home-page__tablet-my-candidates-reviews-text">
                      Reviews
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-my-candidates-submissions">
                    <img
                      className="dashboard-home-page__tablet-my-candidates-submissions-icon"
                      src={MyCandidatesSubmissionsIcon}
                      alt="My Candidates Submissions Icon"
                    />
                    <span className="dashboard-home-page__tablet-my-candidates-submissions-text">
                      Submissions
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-my-candidates-interviews">
                    <img
                      className="dashboard-home-page__tablet-my-candidates-interviews-icon"
                      src={MyCandidatesInterviewsIcon}
                      alt="My Candidates Interviews Icon"
                    />
                    <span className="dashboard-home-page__tablet-my-candidates-interviews-text">
                      Interviews
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-my-candidates-offers">
                    <img
                      className="dashboard-home-page__tablet-my-candidates-offers-icon"
                      src={MyCandidatesOffersIcon}
                      alt="My Candidates Offers Icon"
                    />
                    <span className="dashboard-home-page__tablet-my-candidates-offers-text">
                      Offers
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-my-candidates-placements">
                    <img
                      className="dashboard-home-page__tablet-my-candidates-placements-icon"
                      src={MyCandidatesPlacementsIcon}
                      alt="My Candidates Placements Icon"
                    />
                    <span className="dashboard-home-page__tablet-my-candidates-placements-text">
                      Placements
                    </span>
                  </p>
                </div>
                <div className="dashboard-home-page__tablet-my-candidates-description-status-requests-container">
                  <p className="dashboard-home-page__tablet-my-candidates-description-text">
                    DESCRIPTION
                  </p>
                  <p className="dashboard-home-page__tablet-my-candidates-status-text">
                    STATUS
                  </p>
                  <p className="dashboard-home-page__tablet-my-candidates-requests-text">
                    REQUESTS
                  </p>
                </div>
                <div className="dashboard-home-page__tablet-my-candidates-description-container">
                  <p className="dashboard-home-page__tablet-my-candidates-ann-morton">
                    Ann Morton
                  </p>
                  <p className="dashboard-home-page__tablet-my-candidates-ann-morton-description">
                    <span className="dashboard-home-page__tablet-my-candidates-ann-morton-job-title">
                      RN - ER
                    </span>
                    <span className="dashboard-home-page__tablet-my-candidates-ann-morton-duration">
                      27 Days Remaining
                    </span>
                    <span className="dashboard-home-page__tablet-my-candidates-ann-morton-status">
                      Active
                    </span>
                    <span className="dashboard-home-page__tablet-my-candidates-ann-morton-requests">
                      2 Jobs
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-my-candidates-sarah-davis">
                    Sarah Davis
                  </p>
                  <p className="dashboard-home-page__tablet-my-candidates-sarah-davis-description">
                    <span className="dashboard-home-page__tablet-my-candidates-sarah-davis-job-title">
                      Ultrasound Tech
                    </span>
                    <span className="dashboard-home-page__tablet-my-candidates-sarah-davis-duration">
                      34 Days Remaining
                    </span>
                    <span className="dashboard-home-page__tablet-my-candidates-sarah-davis-status">
                      Active
                    </span>
                    <span className="dashboard-home-page__tablet-my-candidates-sarah-davis-requests">
                      4 Jobs
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-my-candidates-joe-williams">
                    Joe Williams
                  </p>
                  <p className="dashboard-home-page__tablet-my-candidates-joe-williams-description">
                    <span className="dashboard-home-page__tablet-my-candidates-joe-williams-job-title">
                      CNA
                    </span>
                    <span className="dashboard-home-page__tablet-my-candidates-joe-williams-duration">
                      35 Days Remaining
                    </span>
                    <span className="dashboard-home-page__tablet-my-candidates-joe-williams-status">
                      Active
                    </span>
                    <span className="dashboard-home-page__tablet-my-candidates-joe-williams-requests">
                      5 Jobs
                    </span>
                  </p>
                  <p className="dashboard-home-page__tablet-my-candidates-tim-peterson">
                    Tim Peterson
                  </p>
                  <p className="dashboard-home-page__tablet-my-candidates-tim-peterson-description">
                    <span className="dashboard-home-page__tablet-my-candidates-tim-peterson-job-title">
                      RN - ER
                    </span>
                    <span className="dashboard-home-page__tablet-my-candidates-tim-peterson-duration">
                      0 Days Remaining
                    </span>
                    <span className="dashboard-home-page__tablet-my-candidates-tim-peterson-status">
                      Expired
                    </span>
                    <span className="dashboard-home-page__tablet-my-candidates-tim-peterson-requests">
                      0 Jobs
                    </span>
                  </p>
                </div>
                <div className="dashboard-home-page__tablet-my-candidates-navigation-container">
                  <img
                    className="dashboard-home-page__tablet-my-candidates-left-arrow-icon"
                    src={LeftArrowIcon}
                    alt="Left Arrow Icon"
                  />
                  <img
                    className="dashboard-home-page__tablet-my-candidates-page-number-peach-one-icon"
                    src={PageNumberPeachOneIcon}
                    alt="Page Number Peach One Icon"
                  />
                  <img
                    className="dashboard-home-page__tablet-my-candidates-page-number-gray-two-icon"
                    src={PageNumberGrayTwoIcon}
                    alt="Page Number Gray Two Icon"
                  />
                  <img
                    className="dashboard-home-page__tablet-my-candidates-page-number-gray-three-icon"
                    src={PageNumberGrayThreeIcon}
                    alt="Page Number Gray Three Icon"
                  />
                  <img
                    className="dashboard-home-page__tablet-my-candidates-right-arrow-icon"
                    src={RightArrowIcon}
                    alt="Right Arrow Icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-home-page__desktop-container">
            <div className="dashboard-home-page__desktop-first-half-container">
              <div className="dashboard-home-page__desktop-top-container">
                <p className="dashboard-home-page__desktop-quick-search-header">
                  Quick Search
                </p>
                <select
                  className="dashboard-home-page__desktop-candidates-select"
                  name="desktop-candidates"
                  id="desktop-candidates"
                >
                  <option value="candidates" selected>
                    Candidates
                  </option>
                </select>
                <Link
                  className="dashboard-home-page__link"
                  to="/dashboard/quick-search-results"
                >
                  <input
                    className="dashboard-home-page__desktop-candidates-input"
                    type="text"
                    placeholder="Keyword"
                  />
                </Link>
              </div>
              <div className="dashboard-home-page__desktop-notifications-messages-container">
                <div className="dashboard-home-page__desktop-notifications-container">
                  <div className="dashboard-home-page__desktop-notifications-header-container">
                    <p className="dashboard-home-page__desktop-notifications-header">
                      Notifications
                    </p>
                    <img
                      className="dashboard-home-page__desktop-notifications-icon"
                      src={NotificationsIcon}
                      alt="Notifications Icon"
                    />
                  </div>
                  <table className="dashboard-home-page__desktop-notifications-table">
                    <thead className="dashboard-home-page__desktop-notifications-table-header-section">
                      <tr className="dashboard-home-page__desktop-notifications-table-header-row">
                        <th className="dashboard-home-page__desktop-notifications-table-header-column-needs-attention">
                          Needs Attention
                        </th>
                      </tr>
                    </thead>
                    <tbody className="dashboard-home-page__desktop-notifications-table-data-section">
                      <Link
                        className="dashboard-home-page__link"
                        to="/dashboard/read-notification"
                      >
                        <tr className="dashboard-home-page__desktop-notifications-table-data-row-1">
                          <td className="dashboard-home-page__desktop-notifications-table-data-row-1-value">
                            <img
                              className="dashboard-home-page__desktop-orange-dot-icon"
                              src={OrangeDotIcon}
                              alt="Orange Dot Icon"
                            />
                            <span className="dashboard-home-page__desktop-notifications-table-data-row-1-text">
                              Welcome New MLSA Member!
                            </span>
                            <img
                              className="dashboard-home-page__desktop-close-icon"
                              src={CloseIcon}
                              alt="Close Icon"
                            />
                          </td>
                        </tr>
                      </Link>
                    </tbody>
                  </table>
                  <img
                    className="dashboard-home-page__desktop-vertical-slider-notifications-icon"
                    src={VerticalSliderMessagesIcon}
                    alt="Vertical Slider Messages Icon"
                  />
                </div>
                <div className="dashboard-home-page__desktop-messages-container">
                  <div className="dashboard-home-page__desktop-messages-header-container">
                    <p className="dashboard-home-page__desktop-messages-header">
                      Messages
                    </p>
                    <img
                      className="dashboard-home-page__desktop-messages-four-icon"
                      src={MessagesFourIcon}
                      alt="Messages Four Icon"
                    />
                    <img
                      className="dashboard-home-page__desktop-create-message-icon"
                      src={CreateMessageIcon}
                      alt="Create Message Icon"
                    />
                  </div>
                  <table className="dashboard-home-page__desktop-messages-table">
                    <thead className="dashboard-home-page__desktop-messages-table-header-section">
                      <tr className="dashboard-home-page__desktop-messages-table-header-row">
                        <th className="dashboard-home-page__desktop-messages-table-header-column-date">
                          Date
                        </th>
                        <th className="dashboard-home-page__desktop-messages-table-header-column-sender">
                          Sender
                        </th>
                        <th className="dashboard-home-page__desktop-messages-table-header-column-subject">
                          Subject
                        </th>
                      </tr>
                    </thead>
                    <tbody className="dashboard-home-page__desktop-messages-table-body-section">
                      <div className="dashboard-home-page__desktop-messages-table-white-space"></div>
                      <tr className="dashboard-home-page__desktop-messages-table-data-row-1">
                        <td className="dashboard-home-page__desktop-messages-table-data-row-1-date">
                          <img
                            className="dashboard-home-page__desktop-orange-dot-icon"
                            src={OrangeDotIcon}
                            alt="Orange Dot"
                          />
                          <span className="dashboard-home-page__desktop-messages-table-data-row-1-date-text">
                            12:58 PM
                          </span>
                        </td>
                        <Link
                          className="dashboard-home-page__link"
                          to="/dashboard/read-message"
                        >
                          <td className="dashboard-home-page__desktop-messages-table-data-row-1-sender">
                            Acme Agency
                          </td>
                        </Link>
                        <td className="dashboard-home-page__desktop-messages-table-data-row-1-subject">
                          NDA Ques...
                          <img
                            className="dashboard-home-page__desktop-messages-close-icon-1"
                            src={CloseIcon}
                            alt="Close Icon"
                          />
                        </td>
                      </tr>
                      <div className="dashboard-home-page__desktop-messages-table-white-space"></div>
                      <tr className="dashboard-home-page__desktop-messages-table-data-row-2">
                        <td className="dashboard-home-page__desktop-messages-table-data-row-2-date">
                          <img
                            className="dashboard-home-page__desktop-orange-dot-icon"
                            src={OrangeDotIcon}
                            alt="Orange Dot"
                          />
                          <span className="dashboard-home-page__desktop-messages-table-data-row-2-date-text">
                            12:36 PM
                          </span>
                        </td>
                        <td className="dashboard-home-page__desktop-messages-table-data-row-2-sender">
                          ABC Staffing Inc.
                        </td>
                        <td className="dashboard-home-page__desktop-messages-table-data-row-2-subject">
                          Checking in...{" "}
                          <img
                            className="dashboard-home-page__desktop-messages-close-icon-2"
                            src={CloseIcon}
                            alt="Close Icon"
                          />
                        </td>
                      </tr>
                      <div className="dashboard-home-page__desktop-messages-table-white-space"></div>
                      <tr className="dashboard-home-page__desktop-messages-table-data-row-3">
                        <td className="dashboard-home-page__desktop-messages-table-data-row-3-date">
                          <img
                            className="dashboard-home-page__desktop-orange-dot-icon"
                            src={OrangeDotIcon}
                            alt="Orange Dot"
                          />
                          <span className="dashboard-home-page__desktop-messages-table-data-row-3-date-text">
                            Fri 7/19
                          </span>
                        </td>
                        <td className="dashboard-home-page__desktop-messages-table-data-row-3-sender">
                          Beta Staffing Agency
                        </td>
                        <td className="dashboard-home-page__desktop-messages-table-data-row-3-subject">
                          Partnership...
                          <img
                            className="dashboard-home-page__desktop-messages-close-icon-3"
                            src={CloseIcon}
                            alt="Close Icon"
                          />
                        </td>
                      </tr>
                      <div className="dashboard-home-page__desktop-messages-table-white-space"></div>
                      <tr className="dashboard-home-page__desktop-messages-table-data-row-4">
                        <td className="dashboard-home-page__desktop-messages-table-data-row-4-date">
                          {" "}
                          <img
                            className="dashboard-home-page__desktop-orange-dot-icon"
                            src={OrangeDotIcon}
                            alt="Orange Dot"
                          />
                          <span className="dashboard-home-page__desktop-messages-table-data-row-4-date-text">
                            Fri 7/19
                          </span>
                        </td>
                        <td className="dashboard-home-page__desktop-messages-table-data-row-4-sender">
                          Circular Staffing
                        </td>
                        <td className="dashboard-home-page__desktop-messages-table-data-row-4-subject">
                          Re: Partnersh...
                          <img
                            className="dashboard-home-page__desktop-messages-close-icon-4"
                            src={CloseIcon}
                            alt="Close Icon"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <img
                    className="dashboard-home-page__desktop-messages-vertical-slider-messages-icon"
                    src={VerticalSliderMessagesIcon}
                    alt="Vertical Slider Messages Icon"
                  />
                </div>
              </div>
              <div className="dashboard-home-page__desktop-calendar-tasks-container">
                <Link
                  className="dashboard-home-page__link"
                  to="/dashboard/calendar-event"
                >
                  <img
                    className="dashboard-home-page__desktop-calendar-icon"
                    src={MobileCalendarIcon}
                    alt="Mobile Calendar Icon"
                  />
                </Link>
                <div className="dashboard-home-page__desktop-tasks-container">
                  <div className="dashboard-home-page__desktop-tasks-header-container">
                    <p className="dashboard-home-page__desktop-tasks-header">
                      Tasks
                    </p>
                    <img
                      className="dashboard-home-page__desktop-tasks-icon-one-icon"
                      src={TaskIconOneIcon}
                      alt="Task Icon One Icon"
                    />
                  </div>
                  <div className="dashboard-home-page__desktop-tasks-first-row-container">
                    <img
                      className="dashboard-home-page__desktop-tasks-first-row-orange-dot-icon"
                      src={OrangeDotIcon}
                      alt="Orange Dot Icon"
                    />
                    <p className="dashboard-home-page__desktop-tasks-first-row-date">
                      9/13/24
                    </p>
                    <p className="dashboard-home-page__desktop-tasks-first-row-task-description">
                      Call Kelly Re: New Applicant
                    </p>
                    <img
                      className="dashboard-home-page__desktop-tasks-first-row-gray-checkmark-icon"
                      src={GrayCheckmarkIcon}
                      alt="Gray Checkmark Icon"
                    />
                    <img
                      className="dashboard-home-page__desktop-tasks-first-row-close-icon"
                      src={CloseIcon}
                      alt="Close Icon"
                    />
                  </div>
                  <div className="dashboard-home-page__desktop-tasks-second-row-container">
                    <img
                      className="dashboard-home-page__desktop-tasks-second-row-gray-dot-icon"
                      src={GrayDotIcon}
                      alt="Gray Dot Icon"
                    />
                    <p className="dashboard-home-page__desktop-tasks-second-row-date">
                      9/10/24
                    </p>
                    <p className="dashboard-home-page__desktop-tasks-second-row-task-description">
                      Call Jerry about Contract
                    </p>
                    <img
                      className="dashboard-home-page__desktop-tasks-second-row-orange-checkmark-icon"
                      src={OrangeCheckmarkIcon}
                      alt="Orange Checkmark Icon"
                    />
                    <img
                      className="dashboard-home-page__desktop-tasks-second-row-close-icon"
                      src={CloseIcon}
                      alt="Close Icon"
                    />
                  </div>
                  <img
                    className="dashboard-home-page__desktop-tasks-second-row-vertical-slider-messages-icon"
                    src={VerticalSliderMessagesIcon}
                    alt="Vertical Slider Messages Icon"
                  />
                </div>
              </div>
            </div>
            <div className="dashboard-home-page__desktop-activity-summary-container">
              <div className="dashboard-home-page__desktop-activity-summary-top-container">
                <p className="dashboard-home-page__desktop-activity-summary-header">
                  Activity Summary
                </p>
                <div className="dashboard-home-page__desktop-activity-summary-jobs-candidates-placements-container">
                  <div className="dashboard-home-page__desktop-activity-summary-jobs-container">
                    <p className="dashboard-home-page__desktop-activity-summary-jobs-text">
                      Jobs
                    </p>
                    <p className="dashboard-home-page__desktop-activity-summary-jobs-number">
                      0
                    </p>
                  </div>
                  <div className="dashboard-home-page__desktop-activity-summary-candidates-container">
                    <p className="dashboard-home-page__desktop-activity-summary-candidates-text">
                      Candidates
                    </p>
                    <p className="dashboard-home-page__desktop-activity-summary-candidates-number">
                      0
                    </p>
                  </div>
                  <div className="dashboard-home-page__desktop-activity-summary-placements-container">
                    <p className="dashboard-home-page__desktop-activity-summary-placements-text">
                      Placements
                    </p>
                    <p className="dashboard-home-page__desktop-activity-summary-placements-number">
                      0
                    </p>
                  </div>
                </div>
              </div>
              <div className="dashboard-home-page__desktop-activity-summary-my-jobs-container">
                <div className="dashboard-home-page__desktop-activity-summary-my-jobs-top-container">
                  <p className="dashboard-home-page__desktop-activity-summary-my-jobs-header">
                    MY JOBS
                  </p>
                  <img
                    className="dashboard-home-page__desktop-activity-summary-my-jobs-blue-dash-divider-icon"
                    src={BlueDashDividerIcon}
                    alt="Blue Dash Divider Icon"
                  />
                </div>
                <div className="dashboard-home-page__desktop-activity-summary-my-jobs-dashboard-container">
                  <p className="dashboard-home-page__desktop-activity-summary-my-jobs-all-jobs">
                    <img
                      className="dashboard-home-page__desktop-all-jobs-dot-icon"
                      src={AllJobsDotIcon}
                      alt="All Jobs Dot Icon"
                    />
                    <span className="dashboard-home-page__desktop-activity-summary-my-jobs-all-jobs-text">
                      All Jobs
                    </span>
                  </p>
                  <p className="dashboard-home-page__desktop-activity-summary-my-jobs-pending">
                    <img
                      className="dashboard-home-page__desktop-jobs-pending-bullet-icon"
                      src={JobsPendingBulletIcon}
                      alt="Jobs Pending Bullet Icon"
                    />
                    <span className="dashboard-home-page__desktop-activity-summary-my-jobs-pending-text">
                      Pending
                    </span>
                  </p>
                  <p className="dashboard-home-page__desktop-activity-summary-my-jobs-reviews">
                    <img
                      className="dashboard-home-page__desktop-jobs-reviews-bullet-icon"
                      src={JobsReviewsBulletIcon}
                      alt="Jobs Reviews Bullet Icon"
                    />
                    <span className="dashboard-home-page__desktop-activity-summary-my-jobs-reviews-text">
                      Reviews
                    </span>
                  </p>
                  <p className="dashboard-home-page__desktop-activity-summary-my-jobs-submissions">
                    <img
                      className="dashboard-home-page__desktop-jobs-submissions-bullet-icon"
                      src={JobsSubmissionsBulletIcon}
                      alt="Jobs Submissions Bullet Icon"
                    />
                    <span className="dashboard-home-page__desktop-activity-summary-my-jobs-submissions-text">
                      Submissions
                    </span>
                  </p>
                  <p className="dashboard-home-page__desktop-activity-summary-my-jobs-interviews">
                    <img
                      className="dashboard-home-page__desktop-jobs-interviews-bullet-icon"
                      src={JobsInterviewsBulletIcon}
                      alt="Jobs Interviews Bullet Icon"
                    />
                    <span className="dashboard-home-page__desktop-activity-summary-my-jobs-interviews-text">
                      Interviews
                    </span>
                  </p>
                  <p className="dashboard-home-page__desktop-activity-summary-my-jobs-offers">
                    <img
                      className="dashboard-home-page__desktop-jobs-offers-bullet-icon"
                      src={JobsOffersBulletIcon}
                      alt="Jobs Offers Bullet Icon"
                    />
                    <span className="dashboard-home-page__desktop-activity-summary-my-jobs-offers-text">
                      Offers
                    </span>
                  </p>
                  <p className="dashboard-home-page__desktop-activity-summary-my-jobs-placements">
                    <img
                      className="dashboard-home-page__desktop-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="dashboard-home-page__desktop-activity-summary-my-jobs-placements-text">
                      Placements
                    </span>
                  </p>
                </div>
                <div className="dashboard-home-page__desktop-activity-summary-my-jobs-description-status-applicants-container">
                  <p className="dashboard-home-page__desktop-activity-summary-my-jobs-description-text">
                    DESCRIPTION
                  </p>
                  <p className="dashboard-home-page__desktop-activity-summary-my-jobs-status-text">
                    STATUS
                  </p>
                  <p className="dashboard-home-page__desktop-activity-summary-my-jobs-applicants-text">
                    APPLICANTS
                  </p>
                </div>
                <button className="dashboard-home-page__desktop-post-my-first-job-button">
                  Post My First Job
                </button>
                <div className="dashboard-home-page__desktop-activity-summary-my-jobs-navigation-container">
                  <img
                    className="dashboard-home-page__desktop-activity-summary-my-jobs-left-arrow-icon"
                    src={LeftArrowIcon}
                    alt="Left Arrow Icon"
                  />
                  <img
                    className="dashboard-home-page__desktop-activity-summary-my-jobs-page-number-blue-one-icon"
                    src={PageNumberBlueOneIcon}
                    alt="Page Number Blue One Icon"
                  />
                  <img
                    className="dashboard-home-page__desktop-activity-summary-my-jobs-right-arrow-icon"
                    src={RightArrowIcon}
                    alt="Right Arrow Icon"
                  />
                </div>
              </div>
              <div className="dashboard-home-page__desktop-activity-summary-my-candidates-container">
                <div className="dashboard-home-page__desktop-activity-summary-my-candidates-top-container">
                  <p className="dashboard-home-page__desktop-activity-summary-my-candidates-header">
                    MY CANDIDATES
                  </p>
                  <img
                    className="dashboard-home-page__desktop-orange-dash-divider-icon"
                    src={OrangeDashDividerIcon}
                    alt="Orange Dash Divider Icon"
                  />
                </div>
                <div className="dashboard-home-page__desktop-activity-summary-my-candidates-dashboard-container">
                  <p className="dashboard-home-page__desktop-activity-summary-my-candidates-all-candidates">
                    <img
                      className="dashboard-home-page__desktop-all-candidates-dash-dot-icon"
                      src={AllCandidatesDashDotIcon}
                      alt="All Candidates Dash Dot Icon"
                    />
                    <span className="dashboard-home-page__desktop-activity-summary-my-candidates-all-candidates-text">
                      All Candidates
                    </span>
                  </p>
                  <p className="dashboard-home-page__desktop-activity-summary-my-candidates-pending">
                    <img
                      className="dashboard-home-page__desktop-my-candidates-pending-icon"
                      src={MyCandidatesPendingIcon}
                      alt="My Candidates Pending Icon"
                    />
                    <span className="dashboard-home-page__desktop-activity-summary-my-candidates-pending-text">
                      Pending
                    </span>
                  </p>
                  <p className="dashboard-home-page__desktop-activity-summary-my-candidates-reviews">
                    <img
                      className="dashboard-home-page__desktop-activity-summary-my-candidates-reviews-icon"
                      src={MyCandidatesReviewsIcon}
                      alt="My Candidates Reviews Icon"
                    />
                    <span className="dashboard-home-page__desktop-activity-summary-my-candidates-reviews-text">
                      Reviews
                    </span>
                  </p>
                  <p className="dashboard-home-page__desktop-activity-summary-my-candidates-submissions">
                    <img
                      className="dashboard-home-page__desktop-activity-summary-my-candidates-submissions-icon"
                      src={MyCandidatesSubmissionsIcon}
                      alt="My Candidates Submissions Icon"
                    />
                    <span className="dashboard-home-page__desktop-activity-summary-my-candidates-submissions-text">
                      Submissions
                    </span>
                  </p>
                  <p className="dashboard-home-page__desktop-activity-summary-my-candidates-interviews">
                    <img
                      className="dashboard-home-page__desktop-my-candidates-interviews-icon"
                      src={MyCandidatesInterviewsIcon}
                      alt="My Candidates Interviews Icon"
                    />
                    <span className="dashboard-home-page__desktop-activity-summary-my-candidates-interviews-text">
                      Interviews
                    </span>
                  </p>
                  <p className="dashboard-home-page__desktop-activity-summary-my-candidates-offers">
                    <img
                      className="dashboard-home-page__desktop-my-candidates-offers-icon"
                      src={MyCandidatesOffersIcon}
                      alt="My Candidates Offers Icon"
                    />
                    <span className="dashboard-home-page__desktop-activity-summary-my-candidates-offers-text">
                      Offers
                    </span>
                  </p>
                  <p className="dashboard-home-page__desktop-activity-summary-my-candidates-placements">
                    <img
                      className="dashboard-home-page__desktop-my-candidates-placements-icon"
                      src={MyCandidatesPlacementsIcon}
                      alt="My Candidates Placements Icon"
                    />
                    <span className="dashboard-home-page__desktop-activity-summary-my-candidates-placements-text">
                      Placements
                    </span>
                  </p>
                </div>
                <div className="dashboard-home-page__desktop-activity-summary-my-candidates-description-status-requests-container">
                  <p className="dashboard-home-page__desktop-activity-summary-my-candidates-description-text">
                    DESCRIPTION
                  </p>
                  <p className="dashboard-home-page__desktop-activity-summary-my-candidates-status-text">
                    STATUS
                  </p>
                  <p className="dashboard-home-page__desktop-activity-summary-my-candidates-requests-text">
                    REQUESTS
                  </p>
                </div>
                <button className="dashboard-home-page__desktop-post-my-first-candidate-button">
                  Post My First Candidate
                </button>
                <div className="dashboard-home-page__desktop-activity-summary-my-candidates-navigation-container">
                  <img
                    className="dashboard-home-page__desktop-activity-summary-my-candidates-left-arrow-icon"
                    src={LeftArrowIcon}
                    alt="Left Arrow Icon"
                  />
                  <img
                    className="dashboard-home-page__desktop-activity-summary-my-candidates-page-number-peach-one-icon"
                    src={PageNumberPeachOneIcon}
                    alt="Page Number Peach One Icon"
                  />
                  <img
                    className="dashboard-home-page__desktop-activity-summary-my-candidates-right-arrow-icon"
                    src={RightArrowIcon}
                    alt="Right Arrow Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
