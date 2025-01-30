import React from "react";
import "./DashboardCalendarEventPage.scss";
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

export default function DashboardCalendarEventPage() {
  return (
    <div className="dashboard-calendar-event-page">
      <HeaderWithProfilePic />
      <div className="dashboard-calendar-event-page__main-container">
        <DashboardSidePanel />
        <div className="dashboard-calendar-event-page__right-container">
          <div className="dashboard-calendar-event-page__mobile-container">
            <div className="dashboard-calendar-event-page__mobile-first-half-container">
              <div className="dashboard-calendar-event-page__mobile-quick-search-candidates-container">
                <p className="dashboard-calendar-event-page__mobile-quick-search-text">
                  Quick Search
                </p>
                <select
                  className="dashboard-calendar-event-page__mobile-candidates-select"
                  name="mobile-candidates"
                  id="mobile-candidates"
                >
                  <option value="" selected>
                    Candidates
                  </option>
                </select>
              </div>
              <div className="dashboard-calendar-event-page__mobile-input-container">
                <input
                  className="dashboard-calendar-event-page__mobile-keywords-input"
                  type="text"
                  placeholder="Keywords"
                />
                <img
                  className="dashboard-calendar-event-page__mobile-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
              </div>
              <div className="dashboard-calendar-event-page__mobile-notifications-container">
                <div className="dashboard-calendar-event-page__mobile-notifications-top-container">
                  <p className="dashboard-calendar-event-page__mobile-notifications-header">
                    Notifications
                  </p>
                  <img
                    className="dashboard-calendar-event-page__mobile-notifications-icon"
                    src={NotificationsIcon}
                    alt="Notifications Icon"
                  />
                </div>
                <table className="dashboard-calendar-event-page__mobile-notifications-table">
                  <thead className="dashboard-calendar-event-page__mobile-notifications-table-header-section">
                    <tr className="dashboard-calendar-event-page__mobile-notifications-table-header-row">
                      <th className="dashboard-calendar-event-page__mobile-notifications-table-header-column-needs-attention">
                        Needs Attention
                      </th>
                    </tr>
                  </thead>
                  <tbody className="dashboard-calendar-event-page__mobile-notifications-table-data-section">
                    <tr className="dashboard-calendar-event-page__mobile-notifications-table-data-row-1">
                      <td className="dashboard-calendar-event-page__mobile-notifications-table-data-row-1-value">
                        <img
                          className="dashboard-calendar-event-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot Icon"
                        />
                        <span className="dashboard-calendar-event-page__mobile-notifications-table-data-row-1-text">
                          Welcome New MLSA Member!
                        </span>
                        <img
                          className="dashboard-calendar-event-page__mobile-close-icon"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <img
                  className="dashboard-calendar-event-page__mobile-vertical-slider-messages-icon"
                  src={VerticalSliderMessagesIcon}
                  alt="Vertical Slider Messages Icon"
                />
              </div>
              <div className="dashboard-calendar-event-page__mobile-messages-container">
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
                        to="/dashboard-read-message-page"
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
              <img
                className="dashboard-compose-message-page__mobile-calendar-icon"
                src={MobileCalendarIcon}
                alt="Mobile Calendar Icon"
              />
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
          </div>
        </div>
      </div>
    </div>
  );
}
