import React from "react";
import "./DashboardComposeMessagePage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import DashboardSidePanel from "../../components/DashboardSidePanel/DashboardSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import NotificationsIcon from "../../assets/icons/notificationbellmessage.svg";
import CloseIcon from "../../assets/icons/xtask.svg";
import OrangeDotIcon from "../../assets/icons/orangedot.svg";
import VerticalSliderMessagesIcon from "../../assets/icons/verticalslidermessages.svg";
import MobileCalendarIcon from "../../assets/icons/mobilecalendar.svg";
import TaskIconOneIcon from "../../assets/icons/taskiconone.svg";
import GrayCheckmarkIcon from "../../assets/icons/graycheckmark.svg";
import OrangeCheckmarkIcon from "../../assets/icons/orangecheckmark.svg";
import GrayDotIcon from "../../assets/icons/graydot.svg";
import ActivitySummary from "../../components/ActivitySummary/ActivitySummary";
import PageBackArrowLeftDashIcon from "../../assets/icons/pagebackarrowleftdash.svg";
import { Link } from "react-router-dom";

export default function DashboardComposeMessagePage() {
  return (
    <div className="dashboard-compose-message-page">
      <HeaderWithProfilePic />
      <div className="dashboard-compose-message-page__main-container">
        <DashboardSidePanel />
        <div className="dashboard-compose-message-page__right-container">
          <div className="dashboard-compose-message-page__mobile-container">
            <div className="dashboard-compose-message-page__mobile-first-half-container">
              <div className="dashboard-compose-message-page__mobile-quick-search-candidates-container">
                <p className="dashboard-compose-message-page__mobile-quick-search-text">
                  Quick Search
                </p>
                <select
                  className="dashboard-compose-message-page__mobile-candidates-select"
                  name="mobile-candidates"
                  id="mobile-candidates"
                >
                  <option value="" selected>
                    Candidates
                  </option>
                </select>
              </div>
              <Link
                className="dashboard-compose-message-page__link"
                to="/dashboard/quick-search-results"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="dashboard-compose-message-page__mobile-input-container">
                  <input
                    className="dashboard-compose-message-page__mobile-keywords-input"
                    type="text"
                    placeholder="Keywords"
                  />
                  <img
                    className="dashboard-compose-message-page__mobile-search-icon"
                    src={SearchIcon}
                    alt="Search Icon"
                  />
                </div>
              </Link>
              <div className="dashboard-compose-message-page__mobile-notifications-container">
                <div className="dashboard-compose-message-page__mobile-notifications-top-container">
                  <p className="dashboard-compose-message-page__mobile-notifications-header">
                    Notifications
                  </p>
                  <img
                    className="dashboard-compose-message-page__mobile-notifications-icon"
                    src={NotificationsIcon}
                    alt="Notifications Icon"
                  />
                </div>
                <table className="dashboard-compose-message-page__mobile-notifications-table">
                  <thead className="dashboard-compose-message-page__mobile-notifications-table-header-section">
                    <tr className="dashboard-compose-message-page__mobile-notifications-table-header-row">
                      <th className="dashboard-compose-message-page__mobile-notifications-table-header-column-needs-attention">
                        Needs Attention
                      </th>
                    </tr>
                  </thead>
                  <tbody className="dashboard-compose-message-page__mobile-notifications-table-data-section">
                    <Link
                      className="dashboard-compose-message-page__link"
                      to="/dashboard/read-notification"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <tr className="dashboard-compose-message-page__mobile-notifications-table-data-row-1">
                        <td className="dashboard-compose-message-page__mobile-notifications-table-data-row-1-value">
                          <img
                            className="dashboard-compose-message-page__mobile-orange-dot-icon"
                            src={OrangeDotIcon}
                            alt="Orange Dot Icon"
                          />
                          <span className="dashboard-compose-message-page__mobile-notifications-table-data-row-1-text">
                            Welcome New MLSA Member!
                          </span>
                          <img
                            className="dashboard-compose-message-page__mobile-close-icon"
                            src={CloseIcon}
                            alt="Close Icon"
                          />
                        </td>
                      </tr>
                    </Link>
                  </tbody>
                </table>
                <img
                  className="dashboard-compose-message-page__mobile-vertical-slider-messages-icon"
                  src={VerticalSliderMessagesIcon}
                  alt="Vertical Slider Messages Icon"
                />
              </div>
              <div className="dashboard-compose-message-page__mobile-messages-container">
                <div className="dashboard-compose-message-page__mobile-messages-top-container">
                  <p className="dashboard-compose-message-page__mobile-messages-header">
                    Messages{" "}
                    <Link
                      className="dashboard-compose-message-page__link"
                      to="/dashboard/home"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <img
                        className="dashboard-compose-message-page__mobile-page-back-arrow-left-dash-icon"
                        src={PageBackArrowLeftDashIcon}
                        alt="Page Back Arrow Left Dash Icon"
                      />
                    </Link>
                  </p>
                  <img
                    className="dashboard-compose-message-page__mobile-messages-close-icon"
                    src={CloseIcon}
                    alt="Close Icon"
                  />
                </div>
                <div className="dashboard-compose-message-page__mobile-messages-inner-container">
                  <p className="dashboard-compose-message-page__mobile-messages-to">
                    <span className="dashboard-compose-message-page__rust-text">
                      To:
                    </span>
                    <span className="dashboard-compose-message-page__mobile-messages-recruiter-name">
                      Samantha Arico
                    </span>
                  </p>
                  <p className="dashboard-compose-message-page__mobile-messages-subject">
                    <span className="dashboard-compose-message-page__rust-text">
                      Subject:
                    </span>
                    <span className="dashboard-compose-message-page__mobile-re-welcome-text">
                      Re:Welcome!
                    </span>
                  </p>
                  <p className="dashboard-compose-message-page__mobile-messages-message-header">
                    Message:
                  </p>
                  <div className="dashboard-compose-message-page__mobile-messages-message-description-container">
                    <div className="dashboard-compose-message-page__mobile-messages-message-description-inner-container">
                      <p className="dashboard-compose-message-page__mobile-messages-message-description-recruiter-greeting">
                        Hi Samantha!
                      </p>
                      <p className="dashboard-compose-message-page__mobile-messages-message-description-glad">
                        I am so glad I signed up for the MLSA Membership!
                      </p>
                      <p className="dashboard-compose-message-page__mobile-messages-message-description-no-brainer">
                        It really was a no-brainer!
                      </p>
                      <p className="dashboard-compose-message-page__mobile-messages-message-description-sincerely">
                        Sincerely,
                      </p>
                      <p className="dashboard-compose-message-page__mobile-messages-message-description-recruiter-reply">
                        John
                      </p>
                    </div>
                  </div>
                </div>
                <div className="dashboard-compose-message-page__mobile-messages-button-container">
                  <button className="dashboard-compose-message-page__mobile-messages-save-draft-button">
                    Save Draft
                  </button>
                  <button className="dashboard-compose-message-page__mobile-messages-send-button">
                    Send
                  </button>
                </div>
              </div>
              <Link
                className="dashboard-compose-message-page__link"
                to="/dashboard/calendar-event"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img
                  className="dashboard-compose-message-page__mobile-calendar-icon"
                  src={MobileCalendarIcon}
                  alt="Mobile Calendar Icon"
                />
              </Link>
              <div className="dashboard-compose-message-page__mobile-tasks-container">
                <div className="dashboard-compose-message-page__mobile-tasks-header-container">
                  <p className="dashboard-compose-message-page__mobile-tasks-header">
                    Tasks
                  </p>
                  <img
                    className="dashboard-compose-message-page__mobile-task-icon-one-icon"
                    src={TaskIconOneIcon}
                    alt="Task Icon One Icon"
                  />
                </div>
                <table className="dashboard-compose-message-page__mobile-tasks-table">
                  <thead className="dashboard-compose-message-page__mobile-tasks-table-header-section">
                    <tr className="dashboard-compose-message-page__mobile-tasks-table-header-row-1">
                      <th className=""></th>
                    </tr>
                  </thead>
                  <tbody className="dashboard-compose-message-page__mobile-tasks-body-section">
                    <tr className="dashboard-compose-message-page__mobile-tasks-data-row-1">
                      <td className="dashboard-compose-message-page__mobile-tasks-data-row-1-date">
                        <img
                          className="dashboard-compose-message-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot Icon"
                        />
                        <span className="dashboard-compose-message-page__mobile-tasks-data-row-1-date-text">
                          9/13/24
                        </span>
                      </td>
                      <td className="dashboard-compose-message-page__mobile-tasks-data-row-1-tasks">
                        Call Kelly Re: New Applicant{" "}
                        <img
                          className="dashboard-compose-message-page__mobile-tasks-gray-checkmark-icon"
                          src={GrayCheckmarkIcon}
                          alt="Gray Checkmark Icon"
                        />
                        <img
                          className="dashboard-compose-message-page__mobile-tasks-close-icon"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-compose-message-page__mobile-tasks-white-space"></div>
                    <tr className="dashboard-compose-message-page__mobile-tasks-data-row-2">
                      <td className="dashboard-compose-message-page__mobile-tasks-data-row-2-date">
                        <img
                          className="dashboard-compose-message-page__mobile-tasks-gray-dot-icon"
                          src={GrayDotIcon}
                          alt="Gray Dot Icon"
                        />
                        <span className="dashboard-compose-message-page__mobile-tasks-data-row-2-date-text">
                          9/10/24
                        </span>
                      </td>
                      <td className="dashboard-compose-message-page__mobile-tasks-data-row-2-tasks">
                        Call Jerry about Contract{" "}
                        <img
                          className="dashboard-compose-message-page__mobile-orange-checkmark-icon"
                          src={OrangeCheckmarkIcon}
                          alt="Orange Checkmark Icon"
                        />
                        <img
                          className="dashboard-compose-message-page__mobile-tasks-close-icon"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <img
                  className="dashboard-compose-message-page__mobile-tasks-vertical-slider-messages-icon"
                  src={VerticalSliderMessagesIcon}
                  alt="Vertical Slider Messages Icon"
                />
              </div>
            </div>
            <ActivitySummary />
          </div>
          <div className="dashboard-compose-message-page__tablet-container">
            <div className="dashboard-compose-message-page__tablet-first-half-container">
              <div className="dashboard-compose-message-page__tablet-header-container">
                <p className="dashboard-compose-message-page__tablet-header">
                  Quick Search
                </p>
                <select
                  className="dashboard-compose-message-page__tablet-candidates-select"
                  name="tablet-candidates"
                  id="tablet-candidates"
                >
                  <option value="" selected>
                    Candidates
                  </option>
                </select>
                <Link
                  className="dashboard-compose-message-page__link"
                  to="/dashboard/quick-search-results"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="dashboard-compose-message-page__tablet-keyword-input-container">
                    <input
                      className="dashboard-compose-message-page__tablet-keyword-input"
                      type="text"
                      placeholder="Keyword"
                    />
                    <img
                      className="dashboard-compose-message-page__tablet-search-icon"
                      src={SearchIcon}
                      alt="Search Icon"
                    />
                  </div>
                </Link>
              </div>
              <div className="dashboard-compose-message-page__tablet-central-container">
                <div className="dashboard-compose-message-page__tablet-central-left-container">
                  <div className="dashboard-compose-message-page__tablet-notifications-container">
                    <div className="dashboard-compose-message-page__tablet-notifications-top-container">
                      <p className="dashboard-compose-message-page__tablet-notifications-header">
                        Notifications
                      </p>
                      <img
                        className="dashboard-compose-message-page__tablet-notifications-icon"
                        src={NotificationsIcon}
                        alt="Notifications Icon"
                      />
                    </div>
                    <table className="dashboard-compose-message-page__tablet-notifications-table">
                      <thead className="dashboard-compose-message-page__tablet-notifications-table-header-section">
                        <tr className="dashboard-compose-message-page__tablet-notifications-table-header-row">
                          <th className="dashboard-compose-message-page__tablet-notifications-table-header-column-needs-attention">
                            Needs Attention
                          </th>
                        </tr>
                      </thead>
                      <tbody className="dashboard-compose-message-page__tablet-notifications-table-data-section">
                        <Link
                          className="dashboard-compose-message-page__link"
                          to="/dashboard/read-notification"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <tr className="dashboard-compose-message-page__tablet-notifications-table-data-row-1">
                            <td className="dashboard-compose-message-page__tablet-notifications-table-data-row-1-value">
                              <img
                                className="dashboard-compose-message-page__tablet-orange-dot-icon"
                                src={OrangeDotIcon}
                                alt="Orange Dot Icon"
                              />
                              <span className="dashboard-compose-message-page__tablet-notifications-table-data-row-1-text">
                                Welcome New MLSA Member!
                              </span>
                              <img
                                className="dashboard-compose-message-page__tablet-close-icon"
                                src={CloseIcon}
                                alt="Close Icon"
                              />
                            </td>
                          </tr>
                        </Link>
                      </tbody>
                    </table>
                    <img
                      className="dashboard-compose-message-page__tablet-vertical-slider-notifications-icon"
                      src={VerticalSliderMessagesIcon}
                      alt="Vertical Slider Messages Icon"
                    />
                  </div>
                  <Link
                    className="dashboard-compose-message-page__link"
                    to="/dashboard/calendar-event"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <img
                      className="dashboard-compose-message-page__tablet-calendar-icon"
                      src={MobileCalendarIcon}
                      alt="Calendar Icon"
                    />
                  </Link>
                  <div className="dashboard-compose-message-page__tablet-tasks-container">
                    <div className="dashboard-compose-message-page__tablet-tasks-header-container">
                      <p className="dashboard-compose-message-page__tablet-tasks-header">
                        Tasks
                      </p>
                      <img
                        className="dashboard-compose-message-page__tablet-task-icon-one-icon"
                        src={TaskIconOneIcon}
                        alt="Task Icon One Icon"
                      />
                    </div>
                    <div className="dashboard-compose-message-page__tablet-tasks-first-row-container">
                      <img
                        className="dashboard-compose-message-page__tablet-orange-dot-icon"
                        src={OrangeDotIcon}
                        alt="Orange Dot Icon"
                      />
                      <p className="dashboard-compose-message-page__tablet-tasks-first-row-date">
                        9/13/24
                      </p>
                      <p className="dashboard-compose-message-page__tablet-tasks-first-row-task-description">
                        Call Kelly Re: New Applicant
                      </p>
                      <img
                        className="dashboard-compose-message-page__tablet-gray-checkmark-icon"
                        src={GrayCheckmarkIcon}
                        alt="Gray Checkmark Icon"
                      />
                      <img
                        className="dashboard-compose-message-page__tablet-tasks-first-row-close-icon"
                        src={CloseIcon}
                        alt="Close Icon"
                      />
                    </div>
                    <div className="dashboard-compose-message-page__tablet-second-row-container">
                      <img
                        className="dashboard-compose-message-page__tablet-gray-dot-icon"
                        src={GrayDotIcon}
                        alt="Gray Dot Icon"
                      />
                      <p className="dashboard-compose-message-page__tablet-tasks-second-row-date">
                        9/10/24
                      </p>
                      <p className="dashboard-compose-message-page__tablet-tasks-second-row-task-description">
                        Call Jerry about Contract
                      </p>
                      <img
                        className="dashboard-compose-message-page__tablet-orange-checkmark-icon"
                        src={OrangeCheckmarkIcon}
                        alt="Orange Checkmark Icon"
                      />
                      <img
                        className="dashboard-compose-message-page__tablet-tasks-second-row-close-icon"
                        src={CloseIcon}
                        alt="Close Icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="dashboard-compose-message-page__tablet-central-right-container">
                  <div className="dashboard-compose-message-page__tablet-messages-container">
                    <div className="dashboard-compose-message-page__tablet-messages-top-container">
                      <p className="dashboard-compose-message-page__tablet-messages-header">
                        Messages
                        <Link
                          className="dashboard-compose-message-page__link"
                          to="/dashboard/home"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <img
                            className="dashboard-compose-message-page__tablet-page-back-arrow-left-dash-icon"
                            src={PageBackArrowLeftDashIcon}
                            alt="Page Back Arrow Left Dash Icon"
                          />
                        </Link>
                      </p>
                      <img
                        className="dashboard-compose-message-page__tablet-messages-close-icon"
                        src={CloseIcon}
                        alt="Close Icon"
                      />
                    </div>
                    <div className="dashboard-compose-message-page__tablet-messages-inner-container">
                      <p className="dashboard-compose-message-page__tablet-messages-to">
                        <span className="dashboard-compose-message-page__rust-text">
                          To:
                        </span>
                        <span className="dashboard-compose-message-page__tablet-messages-sender-name">
                          Jane Matthews
                        </span>
                      </p>
                      <p className="dashboard-compose-message-page__tablet-messages-subject">
                        <span className="dashboard-compose-message-page__rust-text">
                          Subject:
                        </span>
                        <span className="dashboard-compose-message-page__tablet-messages-nda-questions">
                          Re: NDA Questions
                        </span>
                      </p>
                      <p className="dashboard-compose-message-page__tablet-messages-message-header">
                        Message:
                      </p>
                      <div className="dashboard-compose-message-page__tablet-messages-description-container">
                        <div className="dashboard-compose-message-page__tablet-messages-description-inner-container">
                          <p className="dashboard-compose-message-page__tablet-messages-description-greeting">
                            Hi Jane!
                          </p>
                          <p className="dashboard-compose-message-page__tablet-messages-description-central-text">
                            I will be back tomorrow and will be in touch then.
                          </p>
                          <p className="dashboard-compose-message-page__tablet-messages-description-sincerely">
                            Sincerely,
                          </p>
                          <p className="dashboard-compose-message-page__tablet-messages-description-recruiter-name">
                            John
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-compose-message-page__tablet-messages-button-container">
                      <button className="dashboard-compose-message-page__tablet-messages-save-draft-button">
                        Save Draft
                      </button>
                      <button className="dashboard-compose-message-page__tablet-messages-send-button">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ActivitySummary />
          </div>
          <div className="dashboard-compose-message-page__desktop-container">
            <div className="dashboard-compose-message-page__desktop-first-half-container">
              <div className="dashboard-compose-message-page__desktop-quick-search-top-container">
                <p className="dashboard-compose-message-page__desktop-quick-search-text">
                  Quick Search
                </p>
                <select
                  className="dashboard-compose-message-page__desktop-candidates-select"
                  name="desktop-candidates"
                  id="desktop-candidates"
                >
                  <option value="" selected>
                    Candidates
                  </option>
                </select>
                <Link
                  className="dashboard-compose-message-page__link"
                  to="/dashboard/quick-search-results"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="dashboard-compose-message-page__desktop-quick-search-container">
                    <input
                      className="dashboard-compose-message-page__desktop-quick-search-here-input"
                      type="text"
                      placeholder="Quick Search Here"
                    />
                    <img
                      className="dashboard-compose-message-page__desktop-search-icon"
                      src={SearchIcon}
                      alt="Search Icon"
                    />
                  </div>
                </Link>
              </div>
              <div className="dashboard-compose-message-page__desktop-central-container">
                <div className="dashboard-compose-message-page__desktop-central-left-container">
                  <div className="dashboard-compose-message-page__desktop-notifications-container">
                    <div className="dashboard-compose-message-page__desktop-notifications-header-container">
                      <p className="dashboard-compose-message-page__desktop-notifications-header">
                        Notifications
                      </p>
                      <img
                        className="dashboard-compose-message-page__desktop-notifications-icon"
                        src={NotificationsIcon}
                        alt="Notifications Icon"
                      />
                    </div>
                    <table className="dashboard-compose-message-page__desktop-notifications-table">
                      <thead className="dashboard-compose-message-page__desktop-notifications-table-header-section">
                        <tr className="dashboard-compose-message-page__desktop-notifications-table-header-row">
                          <th className="dashboard-compose-message-page__desktop-notifications-table-header-column-needs-attention">
                            Needs Attention
                          </th>
                        </tr>
                      </thead>
                      <tbody className="dashboard-compose-message-page__desktop-notifications-table-data-section">
                        <Link
                          className="dashboard-compose-message-page__link"
                          to="/dashboard/read-notification"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <tr className="dashboard-compose-message-page__desktop-notifications-table-data-row-1">
                            <td className="dashboard-compose-message-page__desktop-notifications-table-data-row-1-value">
                              <img
                                className="dashboard-compose-message-page__desktop-orange-dot-icon"
                                src={OrangeDotIcon}
                                alt="Orange Dot Icon"
                              />
                              <span className="dashboard-compose-message-page__desktop-notifications-table-data-row-1-text">
                                Welcome New MLSA Member!
                              </span>
                              <img
                                className="dashboard-compose-message-page__desktop-close-icon"
                                src={CloseIcon}
                                alt="Close Icon"
                              />
                            </td>
                          </tr>
                        </Link>
                      </tbody>
                    </table>
                    <img
                      className="dashboard-compose-message-page__desktop-vertical-slider-notifications-icon"
                      src={VerticalSliderMessagesIcon}
                      alt="Vertical Slider Messages Icon"
                    />
                  </div>
                  <Link
                    className="dashboard-compose-message-page__link"
                    to="/dashboard/calendar-event"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <img
                      className="dashboard-compose-message-page__desktop-calendar-icon"
                      src={MobileCalendarIcon}
                      alt="Calendar Icon"
                    />
                  </Link>
                  <div className="dashboard-compose-message-page__desktop-tasks-container">
                    <div className="dashboard-compose-message-page__desktop-tasks-header-container">
                      <p className="dashboard-compose-message-page__desktop-tasks-header">
                        Tasks
                      </p>
                      <img
                        className="dashboard-compose-message-page__desktop-tasks-icon-one-icon"
                        src={TaskIconOneIcon}
                        alt="Task Icon One Icon"
                      />
                    </div>
                    <div className="dashboard-compose-message-page__desktop-tasks-first-row-container">
                      <img
                        className="dashboard-compose-message-page__desktop-tasks-first-row-orange-dot-icon"
                        src={OrangeDotIcon}
                        alt="Orange Dot Icon"
                      />
                      <p className="dashboard-compose-message-page__desktop-tasks-first-row-date">
                        9/13/24
                      </p>
                      <p className="dashboard-compose-message-page__desktop-tasks-first-row-task-description">
                        Call Kelly Re: New Applicant
                      </p>
                      <img
                        className="dashboard-compose-message-page__desktop-tasks-first-row-gray-checkmark-icon"
                        src={GrayCheckmarkIcon}
                        alt="Gray Checkmark Icon"
                      />
                      <img
                        className="dashboard-compose-message-page__desktop-tasks-first-row-close-icon"
                        src={CloseIcon}
                        alt="Close Icon"
                      />
                    </div>
                    <div className="dashboard-compose-message-page__desktop-tasks-second-row-container">
                      <img
                        className="dashboard-compose-message-page__desktop-tasks-second-row-gray-dot-icon"
                        src={GrayDotIcon}
                        alt="Gray Dot Icon"
                      />
                      <p className="dashboard-compose-message-page__desktop-tasks-second-row-date">
                        9/10/24
                      </p>
                      <p className="dashboard-compose-message-page__desktop-tasks-second-row-task-description">
                        Call Jerry about Contract
                      </p>
                      <img
                        className="dashboard-compose-message-page__desktop-tasks-second-row-orange-checkmark-icon"
                        src={OrangeCheckmarkIcon}
                        alt="Orange Checkmark Icon"
                      />
                      <img
                        className="dashboard-compose-message-page__desktop-tasks-second-row-close-icon"
                        src={CloseIcon}
                        alt="Close Icon"
                      />
                    </div>
                    <img
                      className="dashboard-compose-message-page__desktop-tasks-second-row-vertical-slider-messages-icon"
                      src={VerticalSliderMessagesIcon}
                      alt="Vertical Slider Messages Icon"
                    />
                  </div>
                </div>
                <div className="dashboard-compose-message-page__desktop-central-right-container">
                  <div className="dashboard-compose-message-page__desktop-messages-container">
                    <div className="dashboard-compose-message-page__desktop-messages-header-container">
                      <p className="dashboard-compose-message-page__desktop-messages-header">
                        Messages
                        <Link
                          className="dashboard-compose-message-page__link"
                          to="/dashboard/home"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <img
                            className="dashboard-compose-message-page__desktop-page-back-arrow-left-dash-icon"
                            src={PageBackArrowLeftDashIcon}
                            alt="Page Back Arrow Left Dash Icon"
                          />
                        </Link>
                      </p>
                      <img
                        className="dashboard-compose-message-page__desktop-messages-close-icon"
                        src={CloseIcon}
                        alt="Close Icon"
                      />
                    </div>
                    <div className="dashboard-compose-message-page__desktop-messages-inner-container">
                      <p className="dashboard-compose-message-page__desktop-messages-to">
                        <span className="dashboard-compose-message-page__desktop-rust-text">
                          To:
                        </span>
                        <span className="dashboard-compose-message-page__desktop-messages-sender-client-name">
                          Jane Matthews
                        </span>
                      </p>
                      <p className="dashboard-compose-message-page__desktop-messages-subject">
                        <span className="dashboard-compose-message-page__desktop-rust-text">
                          Subject:
                        </span>
                        <span className="dashboard-compose-message-page__desktop-nda-questions-text">
                          Re: NDA Questions
                        </span>
                      </p>
                      <p className="dashboard-compose-message-page__desktop-messages-message-header">
                        Message:
                      </p>
                      <div className="dashboard-compose-message-page__desktop-messages-message-container">
                        <div className="dashboard-compose-message-page__desktop-messages-message-inner-container">
                          <p className="dashboard-compose-message-page__desktop-messages-greeting">
                            Hi Jane!
                          </p>
                          <p className="dashboard-compose-message-page__desktop-messages-message-description">
                            I will be back tomorrow and will be in touch then.
                          </p>
                          <p className="dashboard-compose-message-page__desktop-messages-message-sincerely">
                            Sincerely,
                          </p>
                          <p className="dashboard-compose-message-page__desktop-messages-message-recruiter-reply">
                            John
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-compose-message-page__desktop-messages-button-container">
                      <button className="dashboard-compose-message-page__desktop-save-draft-button">
                        Save Draft
                      </button>
                      <button className="dashboard-compose-message-page__desktop-send-button">
                        Send
                      </button>
                    </div>
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
