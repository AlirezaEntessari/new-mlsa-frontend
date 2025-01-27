import React from "react";
import "./DashboardQuickSearchResultsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import DashboardSidePanel from "../../components/DashboardSidePanel/DashboardSidePanel";
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

export default function DashboardQuickSearchResultsPage() {
  return (
    <div className="dashboard-quick-search-results-page">
      <HeaderWithProfilePic />
      <div className="dashboard-quick-search-results-page__main-container">
        <DashboardSidePanel />
        <div className="dashboard-quick-search-results-page__right-container">
          <div className="dashboard-quick-search-results-page__mobile-container">
            <div className="dashboard-quick-search-results-page__mobile-quick-search-candidates-container">
              <p className="dashboard-quick-search-results-page__mobile-quick-search-text">
                Quick Search
              </p>
              <select
                className="dashboard-quick-search-results-page__mobile-candidates-select"
                name="mobile-candidates"
                id="mobile-candidates"
              >
                <option value="" selected>
                  Candidates
                </option>
              </select>
            </div>
            <div className="dashboard-quick-search-results-page__mobile-input-container">
              <input
                className="dashboard-quick-search-results-page__mobile-keywords-input"
                type="text"
                placeholder="Keywords"
              />
              <img
                className="dashboard-quick-search-results-page__mobile-search-icon"
                src={SearchIcon}
                alt="Search Icon"
              />
            </div>
            <p className="dashboard-quick-search-results-page__mobile-results-top-level">
              Results for: Electrical Engineering Delray Beach Florida
            </p>
            <div className="dashboard-quick-search-results-page__mobile-electrical-engineering-intern-container">
              <p className="dashboard-quick-search-results-page__mobile-electrical-engineering-intern">
                Electrical Engineering Intern
              </p>
              <p className="dashboard-quick-search-results-page__mobile-electrical-engineering-intern-description">
                <span className="dashboard-quick-search-results-page__mobile-electrical-engineering-intern-company">
                  Kimley-Horn
                </span>
                <span className="dashboard-quick-search-results-page__mobile-electrical-engineering-intern-location">
                  Delray Beach, FL
                </span>
                <span className="dashboard-quick-search-results-page__mobile-electrical-engineering-intern-date">
                  7/23/24
                </span>
              </p>
            </div>
            <div className="dashboard-quick-search-results-page__mobile-electrical-engineer-actalent-container">
              <p className="dashboard-quick-search-results-page__mobile-electrical-engineer-actalent-text">
                Electrical Engineer
              </p>
              <p className="dashboard-quick-search-results-page__mobile-electrical-engineering-actalent-description">
                <span className="dashboard-quick-search-results-page__mobile-actalent-text">
                  Actalent
                </span>
                <span className="dashboard-quick-search-results-page__mobile-electrical-engineering-actalent-location">
                  Delray Beach, FL
                </span>
                <span className="dashboard-quick-search-results-page__mobile-electrical-engineering-actalent-date">
                  7/22/24
                </span>
              </p>
            </div>
            <div className="dashboard-quick-search-results-page__mobile-electrical-engineer-razorback-electric-container">
              <p className="dashboard-quick-search-results-page__mobile-electrical-engineer-razorback-electric-text">
                Electrical Engineer
              </p>
              <p className="dashboard-quick-search-results-page__mobile-electrical-engineer-razorback-electric-description">
                <span className="dashboard-quick-search-results-page__mobile-electrical-engineer-razorback-electric-company">
                  Razorback Electric
                </span>
                <span className="dashboard-quick-search-results-page__mobile-electrical-engineer-razorback-electric-location">
                  Delray Beach, FL
                </span>
                <span className="dashboard-quick-search-results-page__mobile-electrical-engineer-razorback-electric-date">
                  6/23/24
                </span>
              </p>
            </div>
            <div className="dashboard-quick-search-results-page__mobile-electrical-engineering-intern-division-16-container">
              <p className="dashboard-quick-search-results-page__mobile-electrical-engineering-intern-division-16-text">
                Electrical Engineering Intern
              </p>
              <p className="dashboard-quick-search-results-page__mobile-electrical-engineering-intern-division-16-description">
                <span className="dashboard-quick-search-results-page__mobile-electrical-engineering-intern-division-16-company">
                  Division 16
                </span>
                <span className="dashboard-quick-search-results-page__mobile-electrical-engineering-intern-division-16-location">
                  Delray Beach, FL
                </span>
                <span className="dashboard-quick-search-results-page__mobile-electrical-engineering-intern-division-16-date">
                  5/20/24
                </span>
              </p>
            </div>
            <div className="dashboard-quick-search-results-page__mobile-central-orange-container">
              <div className="dashboard-quick-search-results-page__mobile-notifications-container">
                <div className="dashboard-quick-search-results-page__mobile-notifications-top-container">
                  <p className="dashboard-quick-search-results-page__mobile-notifications-header">
                    Notifications
                  </p>
                  <img
                    className="dashboard-quick-search-results-page__mobile-notifications-icon"
                    src={NotificationsIcon}
                    alt="Notifications Icon"
                  />
                </div>
                <table className="dashboard-quick-search-results-page__mobile-notifications-table">
                  <thead className="dashboard-quick-search-results-page__mobile-notifications-table-header-section">
                    <tr className="dashboard-quick-search-results-page__mobile-notifications-table-header-row">
                      <th className="dashboard-quick-search-results-page__mobile-notifications-table-header-column-needs-attention">
                        Needs Attention
                      </th>
                    </tr>
                  </thead>
                  <tbody className="dashboard-quick-search-results-page__mobile-notifications-table-data-section">
                    <tr className="dashboard-quick-search-results-page__mobile-notifications-table-data-row-1">
                      <td className="dashboard-quick-search-results-page__mobile-notifications-table-data-row-1-value">
                        <img
                          className="dashboard-quick-search-results-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot Icon"
                        />
                        <span className="dashboard-quick-search-results-page__mobile-notifications-table-data-row-1-text">
                          Welcome New MLSA Member!
                        </span>
                        <img
                          className="dashboard-quick-search-results-page__mobile-close-icon"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <img
                  className="dashboard-quick-search-results-page__mobile-vertical-slider-notifications-icon"
                  src={VerticalSliderMessagesIcon}
                  alt="Vertical Slider Messages Icon"
                />
              </div>
              <div className="dashboard-quick-search-results-page__mobile-messages-container">
                <div className="dashboard-quick-search-results-page__mobile-messages-top-container">
                  <p className="dashboard-quick-search-results-page__mobile-messages-header">
                    Messages
                  </p>
                  <img
                    className="dashboard-quick-search-results-page__mobile-messages-four-icon"
                    src={MessagesFourIcon}
                    alt="Messages Four Icon"
                  />
                  <img
                    className="dashboard-quick-search-results-page__mobile-create-message-icon"
                    src={CreateMessageIcon}
                    alt="Create Message Icon"
                  />
                </div>
                <table className="dashboard-quick-search-results-page__mobile-messages-table">
                  <thead className="dashboard-quick-search-results-page__mobile-messages-table-header-section">
                    <tr className="dashboard-quick-search-results-page__mobile-messages-table-header-row">
                      <th className="dashboard-quick-search-results-page__mobile-messages-table-header-column-date">
                        Date
                      </th>
                      <th className="dashboard-quick-search-results-page__mobile-messages-table-header-column-sender">
                        Sender
                      </th>
                      <th className="dashboard-quick-search-results-page__mobile-messages-table-header-column-subject">
                        Subject
                      </th>
                    </tr>
                  </thead>
                  <tbody className="dashboard-quick-search-results-page__mobile-messages-table-body-section">
                    <div className="dashboard-quick-search-results-page__mobile-messages-table-white-space"></div>
                    <tr className="dashboard-quick-search-results-page__mobile-messages-table-data-row-1">
                      <td className="dashboard-quick-search-results-page__mobile-messages-table-data-row-1-date">
                        <img
                          className="dashboard-quick-search-results-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot"
                        />
                        <span className="dashboard-quick-search-results-page__mobile-messages-table-data-row-1-date-text">
                          12:58 PM
                        </span>
                      </td>
                      <td className="dashboard-quick-search-results-page__mobile-messages-table-data-row-1-sender">
                        Acme Agency
                      </td>
                      <td className="dashboard-quick-search-results-page__mobile-messages-table-data-row-1-subject">
                        NDA Ques...
                        <img
                          className="dashboard-quick-search-results-page__mobile-messages-close-icon-1"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-quick-search-results-page__mobile-messages-table-white-space"></div>
                    <tr className="dashboard-quick-search-results-page__mobile-messages-table-data-row-2">
                      <td className="dashboard-quick-search-results-page__mobile-messages-table-data-row-2-date">
                        <img
                          className="dashboard-quick-search-results-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot"
                        />
                        <span className="dashboard-quick-search-results-page__mobile-messages-table-data-row-2-date-text">
                          12:36 PM
                        </span>
                      </td>
                      <td className="dashboard-quick-search-results-page__mobile-messages-table-data-row-2-sender">
                        ABC Staffing Inc.
                      </td>
                      <td className="dashboard-quick-search-results-page__mobile-messages-table-data-row-2-subject">
                        Checking in...{" "}
                        <img
                          className="dashboard-quick-search-results-page__mobile-messages-close-icon-2"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-quick-search-results-page__mobile-messages-table-white-space"></div>
                    <tr className="dashboard-quick-search-results-page__mobile-messages-table-data-row-3">
                      <td className="dashboard-quick-search-results-page__mobile-messages-table-data-row-3-date">
                        <img
                          className="dashboard-quick-search-results-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot"
                        />
                        <span className="dashboard-quick-search-results-page__mobile-messages-table-data-row-3-date-text">
                          Fri 7/19
                        </span>
                      </td>
                      <td className="dashboard-quick-search-results-page__mobile-messages-table-data-row-3-sender">
                        Beta Staffing Agency
                      </td>
                      <td className="dashboard-quick-search-results-page__mobile-messages-table-data-row-3-subject">
                        Partnership...
                        <img
                          className="dashboard-quick-search-results-page__mobile-messages-close-icon-3"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-quick-search-results-page__mobile-messages-table-white-space"></div>
                    <tr className="dashboard-quick-search-results-page__mobile-messages-table-data-row-4">
                      <td className="dashboard-quick-search-results-page__mobile-messages-table-data-row-4-date">
                        {" "}
                        <img
                          className="dashboard-quick-search-results-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot"
                        />
                        <span className="dashboard-quick-search-results-page__mobile-messages-table-data-row-4-date-text">
                          Fri 7/19
                        </span>
                      </td>
                      <td className="dashboard-quick-search-results-page__mobile-messages-table-data-row-4-sender">
                        Circular Staffing
                      </td>
                      <td className="dashboard-quick-search-results-page__mobile-messages-table-data-row-4-subject">
                        Re: Partnersh...
                        <img
                          className="dashboard-quick-search-results-page__mobile-messages-close-icon-4"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <img
                  className="dashboard-quick-search-results-page__mobile-messages-vertical-slider-messages-icon"
                  src={VerticalSliderMessagesIcon}
                  alt="Vertical Slider Messages Icon"
                />
              </div>
              <img
                className="dashboard-quick-search-results-page__mobile-calendar-icon"
                src={MobileCalendarIcon}
                alt="Mobile Calendar Icon"
              />
              <div className="dashboard-quick-search-results-page__mobile-tasks-container">
                <div className="dashboard-quick-search-results-page__mobile-tasks-header-container">
                  <p className="dashboard-quick-search-results-page__mobile-tasks-header">
                    Tasks
                  </p>
                  <img
                    className="dashboard-quick-search-results-page__mobile-task-icon-one-icon"
                    src={TaskIconOneIcon}
                    alt="Task Icon One Icon"
                  />
                </div>
                <table className="dashboard-quick-search-results-page__mobile-tasks-table">
                  <thead className="dashboard-quick-search-results-page__mobile-tasks-table-header-section">
                    <tr className="dashboard-quick-search-results-page__mobile-tasks-table-header-row-1">
                      <th className=""></th>
                    </tr>
                  </thead>
                  <tbody className="dashboard-quick-search-results-page__mobile-tasks-body-section">
                    <tr className="dashboard-quick-search-results-page__mobile-tasks-data-row-1">
                      <td className="dashboard-quick-search-results-page__mobile-tasks-data-row-1-date">
                        <img
                          className="dashboard-quick-search-results-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot Icon"
                        />
                        <span className="dashboard-quick-search-results-page__mobile-tasks-data-row-1-date-text">
                          9/13/24
                        </span>
                      </td>
                      <td className="dashboard-quick-search-results-page__mobile-tasks-data-row-1-tasks">
                        Call Kelly Re: New Applicant{" "}
                        <img
                          className="dashboard-quick-search-results-page__mobile-tasks-gray-checkmark-icon"
                          src={GrayCheckmarkIcon}
                          alt="Gray Checkmark Icon"
                        />
                        <img
                          className="dashboard-quick-search-results-page__mobile-tasks-close-icon"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-quick-search-results-page__mobile-tasks-white-space"></div>
                    <tr className="dashboard-quick-search-results-page__mobile-tasks-data-row-2">
                      <td className="dashboard-quick-search-results-page__mobile-tasks-data-row-2-date">
                        <img
                          className="dashboard-quick-search-results-page__mobile-tasks-gray-dot-icon"
                          src={GrayDotIcon}
                          alt="Gray Dot Icon"
                        />
                        <span className="dashboard-quick-search-results-page__mobile-tasks-data-row-2-date-text">
                          9/10/24
                        </span>
                      </td>
                      <td className="dashboard-quick-search-results-page__mobile-tasks-data-row-2-tasks">
                        Call Jerry about Contract{" "}
                        <img
                          className="dashboard-quick-search-results-page__mobile-orange-checkmark-icon"
                          src={OrangeCheckmarkIcon}
                          alt="Orange Checkmark Icon"
                        />
                        <img
                          className="dashboard-quick-search-results-page__mobile-tasks-close-icon"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <img
                  className="dashboard-quick-search-results-page__mobile-tasks-vertical-slider-messages-icon"
                  src={VerticalSliderMessagesIcon}
                  alt="Vertical Slider Messages Icon"
                />
              </div>
            </div>
            <div className="dashboard-quick-search-results-page__mobile-activity-summary-container">
              <div className="dashboard-quick-search-results-page__mobile-activity-summary-top-container">
                <p className="dashboard-quick-search-results-page__mobile-activity-summary-header">
                  Activity Summary
                </p>
                <div className="dashboard-quick-search-results-page__mobile-activity-summary-jobs-candidates-placements-container">
                  <div className="dashboard-quick-search-results-page__mobile-activity-summary-jobs-container">
                    <p className="dashboard-quick-search-results-page__mobile-activity-summary-jobs-text">
                      Jobs
                    </p>
                    <p className="dashboard-quick-search-results-page__mobile-activity-summary-jobs-number">
                      17
                    </p>
                  </div>
                  <div className="dashboard-quick-search-results-page__mobile-activity-summary-candidates-container">
                    <p className="dashboard-quick-search-results-page__mobile-activity-summary-candidates-text">
                      Candidates
                    </p>
                    <p className="dashboard-quick-search-results-page__mobile-activity-summary-candidates-number">
                      12
                    </p>
                  </div>
                  <div className="dashboard-quick-search-results-page__mobile-activity-summary-placements-container">
                    <p className="dashboard-quick-search-results-page__mobile-activity-summary-placements-text">
                      Placements
                    </p>
                    <p className="dashboard-quick-search-results-page__mobile-activity-summary-placements-number">
                      29
                    </p>
                  </div>
                </div>
              </div>
              <div className="dashboard-quick-search-results-page__mobile-activity-summary-my-jobs-container">
                <p className="dashboard-quick-search-results-page__mobile-activity-summary-my-jobs-text">
                  MY JOBS
                </p>
                <img
                  className="dashboard-quick-search-results-page__mobile-blue-dash-divider-icon"
                  src={BlueDashDividerIcon}
                  alt="Blue Dash Divider Icon"
                />
              </div>
              <div className="dashboard-quick-search-results-page__mobile-activity-summary-my-jobs-dashboard-container">
                <div className="dashboard-quick-search-results-page__mobile-activity-summary-my-jobs-top-dashboard-container">
                  <p className="dashboard-quick-search-results-page__mobile-activity-summary-my-jobs-all-jobs">
                    <img
                      className="dashboard-quick-search-results-page__mobile-activity-summary-all-jobs-dot-icon"
                      src={AllJobsDotIcon}
                      alt="All Jobs Dot Icon"
                    />
                    <span className="dashboard-quick-search-results-page__mobile-activity-summary-all-jobs-text">
                      All Jobs
                    </span>
                  </p>
                  <p className="dashboard-quick-search-results-page__mobile-activity-summary-my-jobs-pending">
                    <img
                      className="dashboard-quick-search-results-page__mobile-activity-summary-jobs-pending-bullet-icon"
                      src={JobsPendingBulletIcon}
                      alt="Jobs Pending Bullet Icon"
                    />
                    <span className="dashboard-quick-search-results-page__mobile-activity-summary-jobs-pending-text">
                      Pending
                    </span>
                  </p>
                  <p className="dashboard-quick-search-results-page__mobile-activity-summary-my-jobs-reviews">
                    <img
                      className="dashboard-quick-search-results-page__mobile-activity-summary-jobs-reviews-bullet-icon"
                      src={JobsReviewsBulletIcon}
                      alt="Jobs Reviews Bullet Icon"
                    />
                    <span className="dashboard-quick-search-results-page__mobile-activity-summary-jobs-reviews-text">
                      Reviews
                    </span>
                  </p>
                  <p className="dashboard-quick-search-results-page__mobile-activity-summary-my-jobs-submissions">
                    <img
                      className="dashboard-quick-search-results-page__mobile-activity-summary-jobs-submissions-bullet-icon"
                      src={JobsSubmissionsBulletIcon}
                      alt="Jobs Submissions Bullet Icon"
                    />
                    <span className="dashboard-quick-search-results-page__mobile-activity-summary-jobs-submissions-text">
                      Submissions
                    </span>
                  </p>
                </div>
                <div className="dashboard-quick-search-results-page__mobile-activity-summary-my-jobs-bottom-dashboard-container">
                  <p className="dashboard-quick-search-results-page__mobile-activity-summary-my-jobs-interviews">
                    <img
                      className="dashboard-quick-search-results-page__mobile-activity-summary-jobs-interviews-bullet-icon"
                      src={JobsInterviewsBulletIcon}
                      alt="Jobs Interviews Bullet Icon"
                    />
                    <span className="dashboard-quick-search-results-page__mobile-activity-summary-jobs-interviews-text">
                      Interviews
                    </span>
                  </p>
                  <p className="dashboard-quick-search-results-page__mobile-activity-summary-my-jobs-offers">
                    <img
                      className="dashboard-quick-search-results-page__mobile-activity-summary-jobs-offers-bullet-icon"
                      src={JobsOffersBulletIcon}
                      alt="Jobs Offers Bullet Icon"
                    />
                    <span className="dashboard-quick-search-results-page__mobile-activity-summary-jobs-offers-text">
                      Offers
                    </span>
                  </p>
                  <p className="dashboard-quick-search-results-page__mobile-activity-summary-my-jobs-placements">
                    <img
                      className="dashboard-quick-search-results-page__mobile-activity-summary-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="dashboard-quick-search-results-page__mobile-activity-summary-jobs-placements-text">
                      Placements
                    </span>
                  </p>
                </div>
              </div>
              <div className="dashboard-quick-search-results-page__mobile-activity-summary-description-status-applicants-container">
                <p className="dashboard-quick-search-results-page__mobile-activity-summary-description">
                  DESCRIPTION
                </p>
                <p className="dashboard-quick-search-results-page__mobile-activity-summary-status">
                  STATUS
                </p>
                <p className="dashboard-quick-search-results-page__mobile-activity-summary-applicants">
                  APPLICANTS
                </p>
              </div>
              <div className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-container">
                <p className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-ct-tech">
                  CT Tech at Berkshire Medical Center
                </p>
                <p className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-ct-tech-description">
                  <span className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-ct-tech-job-nature">
                    Contract
                  </span>
                  <span className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-ct-tech-job-duration">
                    27 days Remaining
                  </span>
                  <span className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-ct-tech-job-status">
                    Active
                  </span>
                  <span className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-ct-tech-job-number">
                    5
                  </span>
                </p>
                <p className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-ultrasound-tech">
                  Ultrasound Tech at Texas Health Presbyterian
                </p>
                <p className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-ultrasound-tech-description">
                  <span className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-ultrasound-tech-job-nature">
                    Contract
                  </span>
                  <span className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-ultrasound-tech-job-duration">
                    28 Days Remaining
                  </span>
                  <span className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-ultrasound-tech-job-status">
                    Active
                  </span>
                  <span className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-ultrasound-tech-job-number">
                    8
                  </span>
                </p>
                <p className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-cna">
                  CNA at Atrium Health Union West
                </p>
                <p className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-cna-description">
                  <span className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-cna-job-nature">
                    Contract
                  </span>
                  <span className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-cna-job-duration">
                    29 Days Remaining
                  </span>
                  <span className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-cna-job-status">
                    Active
                  </span>
                  <span className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-cna-job-number">
                    10
                  </span>
                </p>
                <p className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-allied-cma">
                  Allied CMA at Texas Health Presbyterian
                </p>
                <p className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-allied-cma-description">
                  <span className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-allied-cma-job-nature">
                    Contract
                  </span>
                  <span className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-allied-cma-job-duration">
                    30 Days Remaining
                  </span>
                  <span className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-allied-cma-job-status">
                    Expired
                  </span>
                  <span className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-allied-cma-job-number">
                    4
                  </span>
                </p>
                <div className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-navigation-container">
                  <img
                    className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-left-arrow-icon"
                    src={LeftArrowIcon}
                    alt="Left Arrow Icon"
                  />
                  <img
                    className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-page-number-blue-one-icon"
                    src={PageNumberBlueOneIcon}
                    alt="Page Number Blue One Icon"
                  />
                  <img
                    className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-page-number-gray-two-icon"
                    src={PageNumberGrayTwoIcon}
                    alt="Page Number Gray Two Icon"
                  />
                  <img
                    className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-page-number-gray-three-icon"
                    src={PageNumberGrayThreeIcon}
                    alt="Page Number Gray Three Icon"
                  />
                  <img
                    className="dashboard-quick-search-results-page__mobile-activity-summary-job-openings-right-arrow-icon"
                    src={RightArrowIcon}
                    alt="Right Arrow Icon"
                  />
                </div>
              </div>
              <div className="dashboard-quick-search-results-page__mobile-activity-summary-my-candidates-container">
                <div className="dashboard-quick-search-results-page__mobile-activity-summary-my-candidates-top-container">
                  <p className="dashboard-quick-search-results-page__mobile-activity-summary-my-candidates-text">
                    MY CANDIDATES
                  </p>
                  <img
                    className="dashboard-quick-search-results-page__mobile-activity-summary-orange-dash-divider-icon"
                    src={OrangeDashDividerIcon}
                    alt="Orange Dash Divider Icon"
                  />
                </div>
                <div className="dashboard-quick-search-results-page__mobile-activity-summary-dashboard-container">
                  <div className="dashboard-quick-search-results-page__mobile-activity-summary-dashboard-top-container">
                    <p className="dashboard-quick-search-results-page__mobile-activity-summary-dashboard-all-candidates">
                      <img
                        className="dashboard-quick-search-results-page__mobile-all-candidates-dash-dot-icon"
                        src={AllCandidatesDashDotIcon}
                        alt="All Candidates Dash Dot Icon"
                      />
                      <span className="dashboard-quick-search-results-page__mobile-activity-summary-all-candidates-text">
                        All Candidates
                      </span>
                    </p>
                    <p className="dashboard-quick-search-results-page__mobile-activity-summary-dashboard-pending">
                      <img
                        className="dashboard-quick-search-results-page__mobile-my-candidates-pending-icon"
                        src={MyCandidatesPendingIcon}
                        alt="My Candidates Pending Icon"
                      />
                      <span className="dashboard-quick-search-results-page__mobile-activity-summary-pending-text">
                        Pending
                      </span>
                    </p>
                    <p className="dashboard-quick-search-results-page__mobile-activity-summary-dashboard-reviews">
                      <img
                        className="dashboard-quick-search-results-page__mobile-my-candidates-reviews-icon"
                        src={MyCandidatesReviewsIcon}
                        alt="My Candidates Reviews Icon"
                      />
                      <span className="dashboard-quick-search-results-page__mobile-activity-summary-reviews-text">
                        Reviews
                      </span>
                    </p>
                    <p className="dashboard-quick-search-results-page__mobile-activity-summary-dashboard-submissions">
                      <img
                        className="dashboard-quick-search-results-page__mobile-my-candidates-submissions-icon"
                        src={MyCandidatesSubmissionsIcon}
                        alt="My Candidates Submissions Icon"
                      />
                      <span className="dashboard-quick-search-results-page__mobile-activity-summary-submissions-text">
                        Submissions
                      </span>
                    </p>
                  </div>
                  <div className="dashboard-quick-search-results-page__mobile-activity-summary-dashboard-bottom-container">
                    <p className="dashboard-quick-search-results-page__mobile-activity-summary-dashboard-interviews">
                      <img
                        className="dashboard-quick-search-results-page__mobile-my-candidates-interviews-icon"
                        src={MyCandidatesInterviewsIcon}
                        alt="My Candidates Interviews Icon"
                      />
                      <span className="dashboard-quick-search-results-page__mobile-activity-summary-dashboard-interviews-text">
                        Interviews
                      </span>
                    </p>
                    <p className="dashboard-quick-search-results-page__mobile-activity-summary-dashboard-offers">
                      <img
                        className="dashboard-quick-search-results-page__mobile-my-candidates-offers-icon"
                        src={MyCandidatesOffersIcon}
                        alt="My Candidates Offers Icon"
                      />
                      <span className="dashboard-quick-search-results-page__mobile-activity-summary-offers-text">
                        Offers
                      </span>
                    </p>
                    <p className="dashboard-quick-search-results-page__mobile-activity-summary-dashboard-placements">
                      <img
                        className="dashboard-quick-search-results-page__mobile-my-candidates-placements-icon"
                        src={MyCandidatesPlacementsIcon}
                        alt="My Candidates Placements Icon"
                      />
                      <span className="dashboard-quick-search-results-page__mobile-activity-summary-placements-text">
                        Placements
                      </span>
                    </p>
                  </div>
                </div>
                <div className="dashboard-quick-search-results-page__mobile-my-candidates-description-status-requests-container">
                  <p className="dashboard-quick-search-results-page__mobile-my-candidates-description-text">
                    DESCRIPTION
                  </p>
                  <p className="dashboard-quick-search-results-page__mobile-my-candidates-status-text">
                    STATUS
                  </p>
                  <p className="dashboard-quick-search-results-page__mobile-my-candidates-requests-text">
                    REQUESTS
                  </p>
                </div>
                <div className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-container">
                  <p className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-ann-morton">
                    Ann Morton
                  </p>
                  <p className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-ann-morton-description">
                    <span className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-ann-morton-job-title">
                      RN - ER
                    </span>
                    <span className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-ann-morton-duration">
                      27 Days Remaining
                    </span>
                    <span className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-ann-morton-status">
                      Active
                    </span>
                    <span className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-ann-morton-number-of-jobs">
                      2 Jobs
                    </span>
                  </p>
                  <p className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-sarah-davis">
                    Sarah Davis
                  </p>
                  <p className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-sarah-davis-description">
                    <span className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-sarah-davis-job-title">
                      Ultrasound Tech
                    </span>
                    <span className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-sarah-davis-duration">
                      34 Days Remaining
                    </span>
                    <span className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-sarah-davis-status">
                      Active
                    </span>
                    <span className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-sarah-davis-number-of-jobs">
                      4 Jobs
                    </span>
                  </p>
                  <p className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-joe-williams">
                    Joe Williams
                  </p>
                  <p className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-joe-williams-description">
                    <span className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-joe-williams-job-title">
                      CNA
                    </span>
                    <span className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-joe-williams-duration">
                      35 Days Remaining
                    </span>
                    <span className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-joe-williams-status">
                      Active
                    </span>
                    <span className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-joe-williams-number-of-jobs">
                      5 Jobs
                    </span>
                  </p>
                  <p className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-tim-peterson">
                    Tim Peterson
                  </p>
                  <p className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-tim-peterson-description">
                    <span className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-tim-peterson-job-title">
                      RN-ER
                    </span>
                    <span className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-tim-peterson-duration">
                      0 Days Remaining
                    </span>
                    <span className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-tim-peterson-status">
                      Expired
                    </span>
                    <span className="dashboard-quick-search-results-page__mobile-my-candidates-dashboard-tim-peterson-number-of-jobs">
                      0 Jobs
                    </span>
                  </p>
                </div>
                <div className="dashboard-quick-search-results-page__mobile-my-candidates-navigation-container">
                  <img
                    className="dashboard-quick-search-results-page__mobile-my-candidates-left-arrow-icon"
                    src={LeftArrowIcon}
                    alt="Left Arrow Icon"
                  />
                  <img
                    className="dashboard-quick-search-results-page__mobile-my-candidates-page-number-peach-one-icon"
                    src={PageNumberPeachOneIcon}
                    alt="Page Number Peach One Icon"
                  />
                  <img
                    className="dashboard-quick-search-results-page__mobile-my-candidates-page-number-gray-two-icon"
                    src={PageNumberGrayTwoIcon}
                    alt="Page Number Gray Two Icon"
                  />
                  <img
                    className="dashboard-quick-search-results-page__mobile-my-candidates-page-number-gray-three-icon"
                    src={PageNumberGrayThreeIcon}
                    alt="Page Number Gray Three Icon"
                  />
                  <img
                    className="dashboard-quick-search-results-page__mobile-my-candidates-page-number-right-arrow-icon"
                    src={RightArrowIcon}
                    alt="Right Arrow Icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-quick-search-results-page__tablet-container">
            <div className="dashboard-quick-search-results-page__tablet-header-container">
              <p className="dashboard-quick-search-results-page__tablet-header">
                Quick Search
              </p>
              <select
                className="dashboard-quick-search-results-page__tablet-candidates-select"
                name="tablet-candidates"
                id="tablet-candidates"
              >
                <option value="" selected>
                  Candidates
                </option>
              </select>
              <div className="dashboard-quick-search-results-page__tablet-keyword-input-container">
                <input
                  className="dashboard-quick-search-results-page__tablet-keyword-input"
                  type="text"
                  placeholder="Keyword"
                />
                <img
                  className="dashboard-quick-search-results-page__tablet-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
              </div>
            </div>
            <div className="dashboard-quick-search-results-page__tablet-top-results-container">
              <div className="dashboard-quick-search-results-page__tablet-top-results-inner-container">
                <p className="dashboard-quick-search-results-page__tablet-top-results-search-parameter-text">
                  Results for: Electrical Engineering Delray Beach Florida
                </p>
                <p className="dashboard-quick-search-results-page__electrical-engineering-intern-kimley-horn-description">
                  <span className="dashboard-quick-search-results-page__electrical-engineering-intern-kimley-horn-text">
                    Electrical Engineering Intern
                  </span>
                  <span className="dashboard-quick-search-results-page__electrical-engineering-intern-kimley-horn-company">
                    Kimley-Horn
                  </span>
                  <span className="dashboard-quick-search-results-page__electrical-engineering-intern-kimley-horn-location">
                    Delray Beach, FL
                  </span>
                  <span className="dashboard-quick-search-results-page__electrical-engineering-intern-kimley-horn-date">
                    7/23/24
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
