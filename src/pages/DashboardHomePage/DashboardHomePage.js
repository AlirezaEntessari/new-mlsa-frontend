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

export default function DashboardHomePage() {
  return (
    <div className="dashboard-home-page">
      <HeaderWithProfilePic />
      <div className="dashboard-home-page__main-container">
        <DashboardSidePanel />
        <div className="dashboard-home-page__right-container">
          <div className="dashboard-home-page__mobile-container">
            <div className="dashboard-home-page__mobile__mobile-first-half-container">
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
              <input
                className="dashboard-home-page__mobile-keywords-input"
                type="text"
                placeholder="Keywords"
                id="mobile-candidates-select"
              />
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
                      <td className="dashboard-home-page__mobile-messages-table-data-row-1-sender">
                        Acme Agency
                      </td>
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
              <img
                className="dashboard-home-page__mobile-mobile-calendar-icon"
                src={MobileCalendarIcon}
                alt="Mobile Calendar Icon"
              />
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
                    <span className="dashboard-home-page__mobile-activity-summary-job-openings-ct-tech-job-status">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
