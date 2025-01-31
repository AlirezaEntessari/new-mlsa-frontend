import React from "react";
import "./DashboardReadMessagePage.scss";
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
import ActivitySummary from "../../components/ActivitySummary/ActivitySummary";
import PageBackArrowLeftDashIcon from "../../assets/icons/pagebackarrowleftdash.svg";
import BackArrowDashIcon from "../../assets/icons/backarrowdash.svg";
import { Link } from "react-router-dom";

export default function DashboardReadMessagePage() {
  return (
    <div className="dashboard-read-message-page">
      <HeaderWithProfilePic />
      <div className="dashboard-read-message-page__main-container">
        <DashboardSidePanel />
        <div className="dashboard-read-message-page__right-container">
          <div className="dashboard-read-message-page__mobile-container">
            <div className="dashboard-read-message-page__mobile-first-half-container">
              <div className="dashboard-read-message-page__mobile-quick-search-candidates-container">
                <p className="dashboard-read-message-page__mobile-quick-search-text">
                  Quick Search
                </p>
                <select
                  className="dashboard-read-message-page__mobile-candidates-select"
                  name="mobile-candidates"
                  id="mobile-candidates"
                >
                  <option value="" selected>
                    Candidates
                  </option>
                </select>
              </div>
              <Link
                className="dashboard-read-message-page__link"
                to="/dashboard-quick-search-results-page"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="dashboard-read-message-page__mobile-input-container">
                  <input
                    className="dashboard-read-message-page__mobile-keywords-input"
                    type="text"
                    placeholder="Keywords"
                  />
                  <img
                    className="dashboard-read-message-page__mobile-search-icon"
                    src={SearchIcon}
                    alt="Search Icon"
                  />
                </div>
              </Link>
              <div className="dashboard-read-message-page__mobile-notifications-container">
                <div className="dashboard-read-message-page__mobile-notifications-top-container">
                  <p className="dashboard-read-message-page__mobile-notifications-header">
                    Notifications
                  </p>
                  <img
                    className="dashboard-read-message-page__mobile-notifications-icon"
                    src={NotificationsIcon}
                    alt="Notifications Icon"
                  />
                </div>
                <table className="dashboard-read-message-page__mobile-notifications-table">
                  <thead className="dashboard-read-message-page__mobile-notifications-table-header-section">
                    <tr className="dashboard-read-message-page__mobile-notifications-table-header-row">
                      <th className="dashboard-read-message-page__mobile-notifications-table-header-column-needs-attention">
                        Needs Attention
                      </th>
                    </tr>
                  </thead>
                  <tbody className="dashboard-read-message-page__mobile-notifications-table-data-section">
                    <Link
                      className="dashboard-read-message-page__link"
                      to="/dashboard-read-notification-page"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <tr className="dashboard-read-message-page__mobile-notifications-table-data-row-1">
                        <td className="dashboard-read-message-page__mobile-notifications-table-data-row-1-value">
                          <img
                            className="dashboard-read-message-page__mobile-orange-dot-icon"
                            src={OrangeDotIcon}
                            alt="Orange Dot Icon"
                          />
                          <span className="dashboard-read-message-page__mobile-notifications-table-data-row-1-text">
                            Welcome New MLSA Member!
                          </span>
                          <img
                            className="dashboard-read-message-page__mobile-close-icon"
                            src={CloseIcon}
                            alt="Close Icon"
                          />
                        </td>
                      </tr>
                    </Link>
                  </tbody>
                </table>
                <img
                  className="dashboard-read-message-page__mobile-vertical-slider-messages-icon"
                  src={VerticalSliderMessagesIcon}
                  alt="Vertical Slider Messages Icon"
                />
              </div>
              <div className="dashboard-read-message-page__mobile-messages-container">
                <div className="dashboard-read-message-page__mobile-messages-top-container">
                  <p className="dashboard-read-message-page__mobile-messages-header">
                    Messages{" "}
                    <Link
                      className="dashboard-read-message-page__link"
                      to="/dashboard-home-page"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <img
                        className="dashboard-read-message-page__mobile-page-back-arrow-left-dash-icon"
                        src={PageBackArrowLeftDashIcon}
                        alt="Page Back Arrow Left Dash Icon"
                      />
                    </Link>
                  </p>
                  <Link
                    className="dashboard-read-message-page__link"
                    to="/dashboard-compose-message-page"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <img
                      className="dashboard-read-message-page__mobile-back-arrow-dash-icon"
                      src={BackArrowDashIcon}
                      alt="Back Arrow Dash Icon"
                    />
                  </Link>
                  <img
                    className="dashboard-read-message-page__mobile-messages-close-icon"
                    src={CloseIcon}
                    alt="Close Icon"
                  />
                </div>
                <div className="dashboard-read-message-page__mobile-messages-inner-container">
                  <p className="dashboard-read-message-page__mobile-messages-sender">
                    <span className="dashboard-read-message-page__rust-text">
                      Sender:
                    </span>
                    <span className="dashboard-read-message-page__mobile-messages-sender-company-name">
                      Multiple Listing Staffing Association
                    </span>
                  </p>
                  <p className="dashboard-read-message-page__mobile-messages-subject">
                    <span className="dashboard-read-message-page__rust-text">
                      Subject:
                    </span>
                    <span className="dashboard-read-message-page__mobile-welcome-text">
                      Welcome!
                    </span>
                  </p>
                  <p className="dashboard-read-message-page__mobile-messages-message-header">
                    Message:
                  </p>
                  <p className="dashboard-read-message-page__mobile-messages-message-description">
                    Hi John! Welcome to MLSA! This message would be something
                    welcoming you to our platform and telling you about the
                    great success you will have. It will also give you some
                    direction on what to do next and some tips on how to have a
                    better experience.
                  </p>
                  <div className="dashboard-read-message-page__mobile-messages-message-description-footer-container">
                    <p className="dashboard-read-message-page__mobile-messages-many-thanks">
                      Many thanks,
                    </p>
                    <p className="dashboard-read-message-page__mobile-messages-recruiter-name">
                      Samantha Arico
                    </p>
                    <p className="dashboard-read-message-page__mobile-messages-association-name">
                      Multiple Listing Staffing Association
                    </p>
                  </div>
                </div>
                <button className="dashboard-read-message-page__mobile-messages-save-and-close-button">
                  Save & Close
                </button>
              </div>
              <Link
                className="dashboard-read-message-page__link"
                to="/dashboard-calendar-event-page"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img
                  className="dashboard-read-message-page__mobile-mobile-calendar-icon"
                  src={MobileCalendarIcon}
                  alt="Calendar Icon"
                />
              </Link>
              <div className="dashboard-read-message-page__mobile-tasks-container">
                <div className="dashboard-read-message-page__mobile-tasks-header-container">
                  <p className="dashboard-read-message-page__mobile-tasks-header">
                    Tasks
                  </p>
                  <img
                    className="dashboard-read-message-page__mobile-task-icon-one-icon"
                    src={TaskIconOneIcon}
                    alt="Task Icon One Icon"
                  />
                </div>
                <table className="dashboard-read-message-page__mobile-tasks-table">
                  <thead className="dashboard-read-message-page__mobile-tasks-table-header-section">
                    <tr className="dashboard-read-message-page__mobile-tasks-table-header-row-1">
                      <th className=""></th>
                    </tr>
                  </thead>
                  <tbody className="dashboard-read-message-page__mobile-tasks-body-section">
                    <tr className="dashboard-read-message-page__mobile-tasks-data-row-1">
                      <td className="dashboard-read-message-page__mobile-tasks-data-row-1-date">
                        <img
                          className="dashboard-read-message-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot Icon"
                        />
                        <span className="dashboard-read-message-page__mobile-tasks-data-row-1-date-text">
                          9/13/24
                        </span>
                      </td>
                      <td className="dashboard-read-message-page__mobile-tasks-data-row-1-tasks">
                        Call Kelly Re: New Applicant{" "}
                        <img
                          className="dashboard-read-message-page__mobile-tasks-gray-checkmark-icon"
                          src={GrayCheckmarkIcon}
                          alt="Gray Checkmark Icon"
                        />
                        <img
                          className="dashboard-read-message-page__mobile-tasks-close-icon"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-read-message-page__mobile-tasks-white-space"></div>
                    <tr className="dashboard-read-message-page__mobile-tasks-data-row-2">
                      <td className="dashboard-read-message-page__mobile-tasks-data-row-2-date">
                        <img
                          className="dashboard-read-message-page__mobile-tasks-gray-dot-icon"
                          src={GrayDotIcon}
                          alt="Gray Dot Icon"
                        />
                        <span className="dashboard-read-message-page__mobile-tasks-data-row-2-date-text">
                          9/10/24
                        </span>
                      </td>
                      <td className="dashboard-read-message-page__mobile-tasks-data-row-2-tasks">
                        Call Jerry about Contract{" "}
                        <img
                          className="dashboard-read-message-page__mobile-orange-checkmark-icon"
                          src={OrangeCheckmarkIcon}
                          alt="Orange Checkmark Icon"
                        />
                        <img
                          className="dashboard-read-message-page__mobile-tasks-close-icon"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <img
                  className="dashboard-read-message-page__mobile-tasks-vertical-slider-messages-icon"
                  src={VerticalSliderMessagesIcon}
                  alt="Vertical Slider Messages Icon"
                />
              </div>
            </div>
            <ActivitySummary />
          </div>
          <div className="dashboard-read-message-page__tablet-container">
            <div className="dashboard-read-message-page__tablet-first-half-container">
              <div className="dashboard-read-message-page__tablet-header-container">
                <p className="dashboard-read-message-page__tablet-header">
                  Quick Search
                </p>
                <select
                  className="dashboard-read-message-page__tablet-candidates-select"
                  name="tablet-candidates"
                  id="tablet-candidates"
                >
                  <option value="" selected>
                    Candidates
                  </option>
                </select>
                <Link
                  className="dashboard-read-message-page__link"
                  to="/dashboard-quick-search-results-page"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="dashboard-read-message-page__tablet-keyword-input-container">
                    <input
                      className="dashboard-read-message-page__tablet-keyword-input"
                      type="text"
                      placeholder="Keyword"
                    />
                    <img
                      className="dashboard-read-message-page__tablet-search-icon"
                      src={SearchIcon}
                      alt="Search Icon"
                    />
                  </div>
                </Link>
              </div>
              <div className="dashboard-read-message-page__tablet-central-container">
                <div className="dashboard-read-message-page__tablet-central-left-container">
                  <div className="dashboard-read-message-page__tablet-notifications-container">
                    <div className="dashboard-read-message-page__tablet-notifications-top-container">
                      <p className="dashboard-read-message-page__tablet-notifications-header">
                        Notifications
                      </p>
                      <img
                        className="dashboard-read-message-page__tablet-notifications-icon"
                        src={NotificationsIcon}
                        alt="Notifications Icon"
                      />
                    </div>
                    <table className="dashboard-read-message-page__tablet-notifications-table">
                      <thead className="dashboard-read-message-page__tablet-notifications-table-header-section">
                        <tr className="dashboard-read-message-page__tablet-notifications-table-header-row">
                          <th className="dashboard-read-message-page__tablet-notifications-table-header-column-needs-attention">
                            Needs Attention
                          </th>
                        </tr>
                      </thead>
                      <tbody className="dashboard-read-message-page__tablet-notifications-table-data-section">
                        <Link
                          className="dashboard-read-message-page__link"
                          to="/dashboard-read-notification-page"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <tr className="dashboard-read-message-page__tablet-notifications-table-data-row-1">
                            <td className="dashboard-read-message-page__tablet-notifications-table-data-row-1-value">
                              <img
                                className="dashboard-read-message-page__tablet-orange-dot-icon"
                                src={OrangeDotIcon}
                                alt="Orange Dot Icon"
                              />
                              <span className="dashboard-read-message-page__tablet-notifications-table-data-row-1-text">
                                Welcome New MLSA Member!
                              </span>
                              <img
                                className="dashboard-read-message-page__tablet-close-icon"
                                src={CloseIcon}
                                alt="Close Icon"
                              />
                            </td>
                          </tr>
                        </Link>
                      </tbody>
                    </table>
                    <img
                      className="dashboard-read-message-page__tablet-vertical-slider-notifications-icon"
                      src={VerticalSliderMessagesIcon}
                      alt="Vertical Slider Messages Icon"
                    />
                  </div>
                  <Link
                    className="dashboard-read-message-page__link"
                    to="/dashboard-calendar-event-page"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <img
                      className="dashboard-read-message-page__tablet-calendar-icon"
                      src={MobileCalendarIcon}
                      alt="Calendar Icon"
                    />
                  </Link>
                  <div className="dashboard-read-message-page__tablet-tasks-container">
                    <div className="dashboard-read-message-page__tablet-tasks-header-container">
                      <p className="dashboard-read-message-page__tablet-tasks-header">
                        Tasks
                      </p>
                      <img
                        className="dashboard-read-message-page__tablet-task-icon-one-icon"
                        src={TaskIconOneIcon}
                        alt="Task Icon One Icon"
                      />
                    </div>
                    <div className="dashboard-read-message-page__tablet-tasks-first-row-container">
                      <img
                        className="dashboard-read-message-page__tablet-orange-dot-icon"
                        src={OrangeDotIcon}
                        alt="Orange Dot Icon"
                      />
                      <p className="dashboard-read-message-page__tablet-tasks-first-row-date">
                        9/13/24
                      </p>
                      <p className="dashboard-read-message-page__tablet-tasks-first-row-task-description">
                        Call Kelly Re: New Applicant
                      </p>
                      <img
                        className="dashboard-read-message-page__tablet-gray-checkmark-icon"
                        src={GrayCheckmarkIcon}
                        alt="Gray Checkmark Icon"
                      />
                      <img
                        className="dashboard-read-message-page__tablet-tasks-first-row-close-icon"
                        src={CloseIcon}
                        alt="Close Icon"
                      />
                    </div>
                    <div className="dashboard-read-message-page__tablet-second-row-container">
                      <img
                        className="dashboard-read-message-page__tablet-gray-dot-icon"
                        src={GrayDotIcon}
                        alt="Gray Dot Icon"
                      />
                      <p className="dashboard-read-message-page__tablet-tasks-second-row-date">
                        9/10/24
                      </p>
                      <p className="dashboard-read-message-page__tablet-tasks-second-row-task-description">
                        Call Jerry about Contract
                      </p>
                      <img
                        className="dashboard-read-message-page__tablet-orange-checkmark-icon"
                        src={OrangeCheckmarkIcon}
                        alt="Orange Checkmark Icon"
                      />
                      <img
                        className="dashboard-read-message-page__tablet-tasks-second-row-close-icon"
                        src={CloseIcon}
                        alt="Close Icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="dashboard-read-message-page__tablet-central-right-container">
                  <div className="dashboard-read-message-page__tablet-messages-container">
                    <div className="dashboard-read-message-page__tablet-messages-top-container">
                      <p className="dashboard-read-message-page__tablet-messages-header">
                        Messages
                        <Link
                          className="dashboard-read-message-page__link"
                          to="/dashboard-home-page"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <img
                            className="dashboard-read-message-page__tablet-page-back-arrow-left-dash-icon"
                            src={PageBackArrowLeftDashIcon}
                            alt="Page Back Arrow Left Dash Icon"
                          />
                        </Link>
                      </p>
                      <Link
                        className="dashboard-read-message-page__link"
                        to="/dashboard-compose-message-page"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <img
                          className="dashboard-read-message-page__tablet-back-arrow-dash-icon"
                          src={BackArrowDashIcon}
                          alt="Back Arrow Dash Icon"
                        />
                      </Link>
                      <img
                        className="dashboard-read-message-page__tablet-messages-close-icon"
                        src={CloseIcon}
                        alt="Close Icon"
                      />
                    </div>
                    <div className="dashboard-read-message-page__tablet-messages-inner-container">
                      <p className="dashboard-read-message-page__tablet-messages-sender">
                        <span className="dashboard-read-message-page__rust-text">
                          Sender:
                        </span>
                        <span className="dashboard-read-message-page__tablet-messages-sender-company">
                          Multiple Listing Staffing Association
                        </span>
                      </p>
                      <p className="dashboard-read-message-page__tablet-messages-subject">
                        <span className="dashboard-read-message-page__rust-text">
                          Subject:
                        </span>
                        <span className="dashboard-read-message-page__tablet-welcome-text">
                          Welcome!
                        </span>
                      </p>
                      <p className="dashboard-read-message-page__tablet-messages-message-header">
                        Message:
                      </p>
                      <p className="dashboard-read-message-page__tablet-messages-description-text">
                        Hi John! Welcome to MLSA! This message would be
                        something welcoming you to our platform and telling you
                        about the great success you will have. It will also give
                        you some direction on what to do next and some tips on
                        how to have a better experience.
                      </p>
                      <div className="dashboard-read-message-page__tablet-messages-footer-container">
                        <p className="dashboard-read-message-page__tablet-messages-many-thanks">
                          Many thanks,
                        </p>
                        <p className="dashboard-read-message-page__tablet-messages-recruiter-name">
                          Samantha Arico
                        </p>
                        <p className="dashboard-read-message-page__tablet-messages-association">
                          Multiple Listing Staffing Association
                        </p>
                      </div>
                    </div>
                    <button className="dashboard-read-message-page__tablet-save-and-close-button">
                      Save & Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <ActivitySummary />
          </div>
          <div className="dashboard-read-message-page__desktop-container">
            <div className="dashboard-read-message-page__desktop-first-half-container">
              <div className="dashboard-read-message-page__desktop-quick-search-top-container">
                <p className="dashboard-read-message-page__desktop-quick-search-text">
                  Quick Search
                </p>
                <select
                  className="dashboard-read-message-page__desktop-candidates-select"
                  name="desktop-candidates"
                  id="desktop-candidates"
                >
                  <option value="" selected>
                    Candidates
                  </option>
                </select>
                <Link
                  className="dashboard-read-message-page__link"
                  to="/dashboard-quick-search-results-page"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="dashboard-read-message-page__desktop-quick-search-input-container">
                    <input
                      className="dashboard-read-message-page__desktop-quick-search-here-input"
                      type="text"
                      placeholder="Quick Search Here"
                    />
                    <img
                      className="dashboard-read-message-page__desktop-search-icon"
                      src={SearchIcon}
                      alt="Search Icon"
                    />
                  </div>
                </Link>
              </div>
              <div className="dashboard-read-message-page__desktop-central-container">
                <div className="dashboard-read-message-page__desktop-central-left-container">
                  <div className="dashboard-read-message-page__desktop-notifications-container">
                    <div className="dashboard-read-message-page__desktop-notifications-header-container">
                      <p className="dashboard-read-message-page__desktop-notifications-header">
                        Notifications
                      </p>
                      <img
                        className="dashboard-read-message-page__desktop-notifications-icon"
                        src={NotificationsIcon}
                        alt="Notifications Icon"
                      />
                    </div>
                    <table className="dashboard-read-message-page__desktop-notifications-table">
                      <thead className="dashboard-read-message-page__desktop-notifications-table-header-section">
                        <tr className="dashboard-read-message-page__desktop-notifications-table-header-row">
                          <th className="dashboard-read-message-page__desktop-notifications-table-header-column-needs-attention">
                            Needs Attention
                          </th>
                        </tr>
                      </thead>
                      <tbody className="dashboard-read-message-page__desktop-notifications-table-data-section">
                        <Link
                          className="dashboard-read-message-page__link"
                          to="/dashboard-read-notification-page"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <tr className="dashboard-read-message-page__desktop-notifications-table-data-row-1">
                            <td className="dashboard-read-message-page__desktop-notifications-table-data-row-1-value">
                              <img
                                className="dashboard-read-message-page__desktop-orange-dot-icon"
                                src={OrangeDotIcon}
                                alt="Orange Dot Icon"
                              />
                              <span className="dashboard-read-message-page__desktop-notifications-table-data-row-1-text">
                                Welcome New MLSA Member!
                              </span>
                              <img
                                className="dashboard-read-message-page__desktop-close-icon"
                                src={CloseIcon}
                                alt="Close Icon"
                              />
                            </td>
                          </tr>
                        </Link>
                      </tbody>
                    </table>
                    <img
                      className="dashboard-read-message-page__desktop-vertical-slider-notifications-icon"
                      src={VerticalSliderMessagesIcon}
                      alt="Vertical Slider Messages Icon"
                    />
                  </div>
                  <Link
                    className="dashboard-read-message-page__link"
                    to="/dashboard-calendar-event-page"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <img
                      className="dashboard-read-message-page__desktop-calendar-icon"
                      src={MobileCalendarIcon}
                      alt="Calendar Icon"
                    />
                  </Link>
                  <div className="dashboard-read-message-page__desktop-tasks-container">
                    <div className="dashboard-read-message-page__desktop-tasks-header-container">
                      <p className="dashboard-read-message-page__desktop-tasks-header">
                        Tasks
                      </p>
                      <img
                        className="dashboard-read-message-page__desktop-tasks-icon-one-icon"
                        src={TaskIconOneIcon}
                        alt="Task Icon One Icon"
                      />
                    </div>
                    <div className="dashboard-read-message-page__desktop-tasks-first-row-container">
                      <img
                        className="dashboard-read-message-page__desktop-tasks-first-row-orange-dot-icon"
                        src={OrangeDotIcon}
                        alt="Orange Dot Icon"
                      />
                      <p className="dashboard-read-message-page__desktop-tasks-first-row-date">
                        9/13/24
                      </p>
                      <p className="dashboard-read-message-page__desktop-tasks-first-row-task-description">
                        Call Kelly Re: New Applicant
                      </p>
                      <img
                        className="dashboard-read-message-page__desktop-tasks-first-row-gray-checkmark-icon"
                        src={GrayCheckmarkIcon}
                        alt="Gray Checkmark Icon"
                      />
                      <img
                        className="dashboard-read-message-page__desktop-tasks-first-row-close-icon"
                        src={CloseIcon}
                        alt="Close Icon"
                      />
                    </div>
                    <div className="dashboard-read-message-page__desktop-tasks-second-row-container">
                      <img
                        className="dashboard-read-message-page__desktop-tasks-second-row-gray-dot-icon"
                        src={GrayDotIcon}
                        alt="Gray Dot Icon"
                      />
                      <p className="dashboard-read-message-page__desktop-tasks-second-row-date">
                        9/10/24
                      </p>
                      <p className="dashboard-read-message-page__desktop-tasks-second-row-task-description">
                        Call Jerry about Contract
                      </p>
                      <img
                        className="dashboard-read-message-page__desktop-tasks-second-row-orange-checkmark-icon"
                        src={OrangeCheckmarkIcon}
                        alt="Orange Checkmark Icon"
                      />
                      <img
                        className="dashboard-read-message-page__desktop-tasks-second-row-close-icon"
                        src={CloseIcon}
                        alt="Close Icon"
                      />
                    </div>
                    <img
                      className="dashboard-read-message-page__desktop-tasks-second-row-vertical-slider-messages-icon"
                      src={VerticalSliderMessagesIcon}
                      alt="Vertical Slider Messages Icon"
                    />
                  </div>
                </div>
                <div className="dashboard-read-message-page__desktop-central-right-container">
                  <div className="dashboard-read-message-page__desktop-messages-container">
                    <div className="dashboard-read-message-page__desktop-messages-header-container">
                      <p className="dashboard-read-message-page__desktop-messages-header">
                        Messages
                        <Link
                          className="dashboard-read-message-page__link"
                          to="/dashboard-home-page"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <img
                            className="dashboard-read-message-page__desktop-page-back-arrow-left-dash-icon"
                            src={PageBackArrowLeftDashIcon}
                            alt="Page Back Arrow Left Dash Icon"
                          />
                        </Link>
                      </p>
                      <Link
                        className="dashboard-read-message-page__link"
                        to="/dashboard-compose-message-page"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <img
                          className="dashboard-read-message-page__desktop-back-arrow-dash-icon"
                          src={BackArrowDashIcon}
                          alt="Back Arrow Dash Icon"
                        />
                      </Link>
                      <img
                        className="dashboard-read-message-page__desktop-messages-close-icon"
                        src={CloseIcon}
                        alt="Close Icon"
                      />
                    </div>
                    <div className="dashboard-read-message-page__desktop-messages-inner-container">
                      <p className="dashboard-read-message-page__desktop-messages-sender">
                        <span className="dashboard-read-message-page__desktop-rust-text">
                          Sender:
                        </span>
                        <span className="dashboard-read-message-page__desktop-messages-sender-company">
                          Multiple Listing Staffing Association
                        </span>
                      </p>
                      <p className="dashboard-read-message-page__desktop-messages-subject">
                        <span className="dashboard-read-message-page__desktop-rust-text">
                          Subject:
                        </span>
                        <span className="dashboard-read-message-page__desktop-messages-welcome-text">
                          Welcome!
                        </span>
                      </p>
                      <p className="dashboard-read-message-page__desktop-messages-message-header">
                        Message:
                      </p>
                      <p className="dashboard-read-message-page__desktop-messages-message-description">
                        Hi John! Welcome to MLSA! This message would be
                        something welcoming you to our platform and telling you
                        about the great success you will have. It will also give
                        you some direction on what to do next and some tips on
                        how to have a better experience.
                      </p>
                      <div className="dashboard-read-message-page__desktop-messages-message-footer-container">
                        <p className="dashboard-read-message-page__desktop-messages-message-many-thanks">
                          Many thanks,
                        </p>
                        <p className="dashboard-read-message-page__desktop-messages-message-recruiter-name">
                          Samantha Arico
                        </p>
                        <p className="dashboard-read-message-page__desktop-messages-message-association">
                          Multiple Listing Staffing Association
                        </p>
                      </div>
                    </div>
                    <button className="dashboard-read-message-page__desktop-save-and-close-button">
                      Save & Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <ActivitySummary />
          </div>
        </div>
      </div>
    </div>
  );
}
