import React from "react";
import "./DashboardCalendarEventPage.scss";
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
import { Link } from "react-router-dom";
import ActivitySummary from "../../components/ActivitySummary/ActivitySummary";
import PageBackArrowLeftDashIcon from "../../assets/icons/pagebackarrowleftdash.svg";
import GrayRadioButtonIcon from "../../assets/icons/Grayradiobutton.svg";

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
                <Link
                  className="dashboard-calendar-event-page__link"
                  to="/dashboard-quick-search-results-page"
                >
                  <input
                    className="dashboard-calendar-event-page__mobile-keywords-input"
                    type="text"
                    placeholder="Keywords"
                  />
                </Link>
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
                    <Link
                      className="dashboard-calendar-event-page__link"
                      to="/dashboard-read-notification-page"
                    >
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
                    </Link>
                  </tbody>
                </table>
                <img
                  className="dashboard-calendar-event-page__mobile-vertical-slider-messages-icon"
                  src={VerticalSliderMessagesIcon}
                  alt="Vertical Slider Messages Icon"
                />
              </div>
              <div className="dashboard-calendar-event-page__mobile-messages-container">
                <div className="dashboard-calendar-event-page__mobile-messages-top-container">
                  <p className="dashboard-calendar-event-page__mobile-messages-header">
                    Messages
                    <Link
                      className="dashboard-calendar-event-page__link"
                      to="/dashboard-home-page"
                    >
                      <img
                        className="dashboard-calendar-event-page__mobile-page-back-arrow-left-dash-icon"
                        src={PageBackArrowLeftDashIcon}
                        alt="Page Back Arrow Left Dash Icon"
                      />
                    </Link>
                  </p>
                  <img
                    className="dashboard-calendar-event-page__mobile-messages-four-icon"
                    src={MessagesFourIcon}
                    alt="Messages Four Icon"
                  />
                  <img
                    className="dashboard-calendar-event-page__mobile-create-message-icon"
                    src={CreateMessageIcon}
                    alt="Create Message Icon"
                  />
                </div>
                <table className="dashboard-calendar-event-page__mobile-messages-table">
                  <thead className="dashboard-calendar-event-page__mobile-messages-table-header-section">
                    <tr className="dashboard-calendar-event-page__mobile-messages-table-header-row">
                      <th className="dashboard-calendar-event-page__mobile-messages-table-header-column-date">
                        Date
                      </th>
                      <th className="dashboard-calendar-event-page__mobile-messages-table-header-column-sender">
                        Sender
                      </th>
                      <th className="dashboard-calendar-event-page__mobile-messages-table-header-column-subject">
                        Subject
                      </th>
                    </tr>
                  </thead>
                  <tbody className="dashboard-calendar-event-page__mobile-messages-table-body-section">
                    <div className="dashboard-calendar-event-page__mobile-messages-table-white-space"></div>
                    <tr className="dashboard-calendar-event-page__mobile-messages-table-data-row-1">
                      <td className="dashboard-calendar-event-page__mobile-messages-table-data-row-1-date">
                        <img
                          className="dashboard-calendar-event-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot"
                        />
                        <span className="dashboard-calendar-event-page__mobile-messages-table-data-row-1-date-text">
                          12:58 PM
                        </span>
                      </td>
                      <Link
                        className="dashboard-calendar-event-page__link"
                        to="/dashboard-read-message-page"
                      >
                        <td className="dashboard-calendar-event-page__mobile-messages-table-data-row-1-sender">
                          Acme Agency
                        </td>
                      </Link>
                      <td className="dashboard-calendar-event-page__mobile-messages-table-data-row-1-subject">
                        NDA Ques...
                        <img
                          className="dashboard-calendar-event-page__mobile-messages-close-icon-1"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-calendar-event-page__mobile-messages-table-white-space"></div>
                    <tr className="dashboard-calendar-event-page__mobile-messages-table-data-row-2">
                      <td className="dashboard-calendar-event-page__mobile-messages-table-data-row-2-date">
                        <img
                          className="dashboard-calendar-event-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot"
                        />
                        <span className="dashboard-calendar-event-page__mobile-messages-table-data-row-2-date-text">
                          12:36 PM
                        </span>
                      </td>
                      <td className="dashboard-calendar-event-page__mobile-messages-table-data-row-2-sender">
                        ABC Staffing Inc.
                      </td>
                      <td className="dashboard-calendar-event-page__mobile-messages-table-data-row-2-subject">
                        Checking in...{" "}
                        <img
                          className="dashboard-calendar-event-page__mobile-messages-close-icon-2"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-calendar-event-page__mobile-messages-table-white-space"></div>
                    <tr className="dashboard-calendar-event-page__mobile-messages-table-data-row-3">
                      <td className="dashboard-calendar-event-page__mobile-messages-table-data-row-3-date">
                        <img
                          className="dashboard-calendar-event-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot"
                        />
                        <span className="dashboard-calendar-event-page__mobile-messages-table-data-row-3-date-text">
                          Fri 7/19
                        </span>
                      </td>
                      <td className="dashboard-calendar-event-page__mobile-messages-table-data-row-3-sender">
                        Beta Staffing Agency
                      </td>
                      <td className="dashboard-calendar-event-page__mobile-messages-table-data-row-3-subject">
                        Partnership...
                        <img
                          className="dashboard-calendar-event-page__mobile-messages-close-icon-3"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-calendar-event-page__mobile-messages-table-white-space"></div>
                    <tr className="dashboard-calendar-event-page__mobile-messages-table-data-row-4">
                      <td className="dashboard-calendar-event-page__mobile-messages-table-data-row-4-date">
                        {" "}
                        <img
                          className="dashboard-calendar-event-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot"
                        />
                        <span className="dashboard-calendar-event-page__mobile-messages-table-data-row-4-date-text">
                          Fri 7/19
                        </span>
                      </td>
                      <td className="dashboard-calendar-event-page__mobile-messages-table-data-row-4-sender">
                        Circular Staffing
                      </td>
                      <td className="dashboard-calendar-event-page__mobile-messages-table-data-row-4-subject">
                        Re: Partnersh...
                        <img
                          className="dashboard-calendar-event-page__mobile-messages-close-icon-4"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <img
                  className="dashboard-calendar-event-page__mobile-messages-vertical-slider-messages-icon"
                  src={VerticalSliderMessagesIcon}
                  alt="Vertical Slider Messages Icon"
                />
              </div>
              <img
                className="dashboard-calendar-event-page__mobile-calendar-icon"
                src={MobileCalendarIcon}
                alt="Mobile Calendar Icon"
              />
              <div className="dashboard-calendar-event-page__mobile-calendar-container">
                <div className="dashboard-calendar-event-page__mobile-calendar-inner-container">
                  <p className="dashboard-calendar-event-page__mobile-calendar-container-header">
                    Tuesday, August 2, 2024
                  </p>
                  <div className="dashboard-calendar-event-page__mobile-calendar-name-of-event-container">
                    <label
                      className="dashboard-calendar-event-page__mobile-name-of-event-label"
                      htmlFor="mobile-name-of-event"
                    >
                      Name of Event:
                    </label>
                    <input
                      className="dashboard-calendar-event-page__mobile-name-of-event-input"
                      type="text"
                      id="mobile-name-of-event"
                      placeholder="Type the name of your event here"
                    />
                  </div>
                  <div className="dashboard-calendar-event-page__mobile-calendar-time-of-event-container">
                    <p className="dashboard-calendar-event-page__mobile-calendar-time-of-event-text">
                      Time of Event:
                    </p>
                    <div className="dashboard-calendar-event-page__mobile-calendar-select-all-day-container">
                      <select
                        className="dashboard-calendar-event-page__mobile-time-of-event-select"
                        name="mobile-time-of-event"
                        id="mobile-time-of-event"
                      >
                        <option value="7:00 AM" selected>
                          7:00 AM
                        </option>
                        <option value="8:00 AM">8:00 AM</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                        <option value="9:00 PM">9:00 PM</option>
                        <option value="10:00 PM">10:00 PM</option>
                      </select>
                      <img
                        className="dashboard-calendar-event-page__mobile-gray-radio-button-icon"
                        src={GrayRadioButtonIcon}
                        alt="Gray Radio Button Icon"
                      />
                      <p className="dashboard-calendar-event-page__mobile-all-day-text">
                        All Day
                      </p>
                    </div>
                  </div>
                </div>
                <div className="dashboard-calendar-event-page__mobile-calendar-button-container">
                  <button className="dashboard-calendar-event-page__mobile-calendar-cancel-button">
                    Cancel
                  </button>
                  <button className="dashboard-calendar-event-page__mobile-calendar-add-event-button">
                    Add Event
                  </button>
                </div>
              </div>
              <div className="dashboard-calendar-event-page__mobile-tasks-container">
                <div className="dashboard-calendar-event-page__mobile-tasks-header-container">
                  <p className="dashboard-calendar-event-page__mobile-tasks-header">
                    Tasks
                  </p>
                  <img
                    className="dashboard-calendar-event-page__mobile-task-icon-one-icon"
                    src={TaskIconOneIcon}
                    alt="Task Icon One Icon"
                  />
                </div>
                <table className="dashboard-calendar-event-page__mobile-tasks-table">
                  <thead className="dashboard-calendar-event-page__mobile-tasks-table-header-section">
                    <tr className="dashboard-calendar-event-page__mobile-tasks-table-header-row-1">
                      <th className=""></th>
                    </tr>
                  </thead>
                  <tbody className="dashboard-calendar-event-page__mobile-tasks-body-section">
                    <tr className="dashboard-calendar-event-page__mobile-tasks-data-row-1">
                      <td className="dashboard-calendar-event-page__mobile-tasks-data-row-1-date">
                        <img
                          className="dashboard-calendar-event-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot Icon"
                        />
                        <span className="dashboard-calendar-event-page__mobile-tasks-data-row-1-date-text">
                          9/13/24
                        </span>
                      </td>
                      <td className="dashboard-calendar-event-page__mobile-tasks-data-row-1-tasks">
                        Call Kelly Re: New Applicant{" "}
                        <img
                          className="dashboard-calendar-event-page__mobile-tasks-gray-checkmark-icon"
                          src={GrayCheckmarkIcon}
                          alt="Gray Checkmark Icon"
                        />
                        <img
                          className="dashboard-calendar-event-page__mobile-tasks-close-icon"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-calendar-event-page__mobile-tasks-white-space"></div>
                    <tr className="dashboard-calendar-event-page__mobile-tasks-data-row-2">
                      <td className="dashboard-calendar-event-page__mobile-tasks-data-row-2-date">
                        <img
                          className="dashboard-calendar-event-page__mobile-tasks-gray-dot-icon"
                          src={GrayDotIcon}
                          alt="Gray Dot Icon"
                        />
                        <span className="dashboard-calendar-event-page__mobile-tasks-data-row-2-date-text">
                          9/10/24
                        </span>
                      </td>
                      <td className="dashboard-calendar-event-page__mobile-tasks-data-row-2-tasks">
                        Call Jerry about Contract{" "}
                        <img
                          className="dashboard-calendar-event-page__mobile-orange-checkmark-icon"
                          src={OrangeCheckmarkIcon}
                          alt="Orange Checkmark Icon"
                        />
                        <img
                          className="dashboard-calendar-event-page__mobile-tasks-close-icon"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <img
                  className="dashboard-calendar-event-page__mobile-tasks-vertical-slider-messages-icon"
                  src={VerticalSliderMessagesIcon}
                  alt="Vertical Slider Messages Icon"
                />
              </div>
            </div>
            <ActivitySummary />
          </div>
          <div className="dashboard-calendar-event-page__tablet-container">
            <div className="dashboard-calendar-event-page__tablet-first-half-container">
              <div className="dashboard-calendar-event-page__tablet-header-container">
                <p className="dashboard-calendar-event-page__tablet-header">
                  Quick Search
                </p>
                <select
                  className="dashboard-calendar-event-page__tablet-candidates-select"
                  name="tablet-candidates"
                  id="tablet-candidates"
                >
                  <option value="" selected>
                    Candidates
                  </option>
                </select>
                <div className="dashboard-calendar-event-page__tablet-keyword-input-container">
                  <input
                    className="dashboard-calendar-event-page__tablet-keyword-input"
                    type="text"
                    placeholder="Keyword"
                  />
                  <img
                    className="dashboard-calendar-event-page__tablet-search-icon"
                    src={SearchIcon}
                    alt="Search Icon"
                  />
                </div>
              </div>
              <div className="dashboard-calendar-event-page__tablet-central-container">
                <div className="dashboard-calendar-event-page__tablet-central-left-container">
                  <img
                    className="dashboard-calendar-event-page__tablet-calendar-icon"
                    src={MobileCalendarIcon}
                    alt="Calendar Icon"
                  />
                  <div className="dashboard-calendar-event-page__tablet-calendar-container">
                    <div className="dashboard-calendar-event-page__tablet-calendar-inner-container">
                      <p className="dashboard-calendar-event-page__tablet-calendar-header">
                        Tuesday, August 2, 2024
                      </p>
                      <div className="dashboard-calendar-event-page__tablet-calendar-name-of-event-container">
                        <label
                          className="dashboard-calendar-event-page__tablet-name-of-event-label"
                          htmlFor="tablet-name-of-event"
                        >
                          Name of Event:
                        </label>
                        <input
                          className="dashboard-calendar-event-page__tablet-name-of-event-input"
                          type="text"
                          id="tablet-name-of-event"
                          placeholder="Type the name of your event here"
                        />
                      </div>
                      <div className="dashboard-calendar-event-page__tablet-time-of-event-container">
                        <label className="dashboard-calendar-event-page__tablet-time-of-event-text">
                          Time of Event:
                        </label>
                        <div className="dashboard-calendar-event-page__tablet-time-of-event-select-all-day-container">
                          <select
                            className="dashboard-calendar-event-page__tablet-time-of-event-select"
                            name="tablet-time-of-event"
                            id="tablet-time-of-event"
                          >
                            <option value="7:00 AM" selected>
                              7:00 AM
                            </option>
                            <option value="8:00 AM">8:00 AM</option>
                            <option value="9:00 AM">9:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                            <option value="5:00 PM">5:00 PM</option>
                            <option value="6:00 PM">6:00 PM</option>
                            <option value="7:00 PM">7:00 PM</option>
                            <option value="8:00 PM">8:00 PM</option>
                            <option value="9:00 PM">9:00 PM</option>
                            <option value="10:00 PM">10:00 PM</option>
                          </select>
                          <img
                            className="dashboard-calendar-event-page__tablet-gray-radio-button-icon"
                            src={GrayRadioButtonIcon}
                            alt="Gray Radio Button Icon"
                          />
                          <p className="dashboard-calendar-event-page__tablet-all-day-text">
                            All Day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-calendar-event-page__tablet-calendar-button-container">
                      <button className="dashboard-calendar-event-page__tablet-calendar-cancel-button">
                        Cancel
                      </button>
                      <button className="dashboard-calendar-event-page__tablet-calendar-add-event-button">
                        Add Event
                      </button>
                    </div>
                  </div>
                </div>
                <div className="dashboard-calendar-event-page__tablet-central-right-container">
                  <div className="dashboard-calendar-event-page__tablet-messages-container">
                    <div className="dashboard-calendar-event-page__tablet-messages-top-container">
                      <p className="dashboard-calendar-event-page__tablet-messages-header">
                        Messages
                      </p>
                      <img
                        className="dashboard-calendar-event-page__tablet-messages-four-icon"
                        src={MessagesFourIcon}
                        alt="Messages Four Icon"
                      />
                      <img
                        className="dashboard-calendar-event-page__tablet-create-message-icon"
                        src={CreateMessageIcon}
                        alt="Create Message Icon"
                      />
                    </div>
                    <table className="dashboard-calendar-event-page__tablet-messages-table">
                      <thead className="dashboard-calendar-event-page__tablet-messages-table-header-section">
                        <tr className="dashboard-calendar-event-page__tablet-messages-table-header-row">
                          <th className="dashboard-calendar-event-page__tablet-messages-table-header-column-date">
                            Date
                          </th>
                          <th className="dashboard-calendar-event-page__tablet-messages-table-header-column-sender">
                            Sender
                          </th>
                          <th className="dashboard-calendar-event-page__tablet-messages-table-header-column-subject">
                            Subject
                          </th>
                        </tr>
                      </thead>
                      <tbody className="dashboard-calendar-event-page__tablet-messages-table-body-section">
                        <div className="dashboard-calendar-event-page__tablet-messages-table-white-space"></div>
                        <tr className="dashboard-calendar-event-page__tablet-messages-table-data-row-1">
                          <td className="dashboard-calendar-event-page__tablet-messages-table-data-row-1-date">
                            <img
                              className="dashboard-calendar-event-page__tablet-orange-dot-icon"
                              src={OrangeDotIcon}
                              alt="Orange Dot"
                            />
                            <span className="dashboard-calendar-event-page__tablet-messages-table-data-row-1-date-text">
                              12:58 PM
                            </span>
                          </td>
                          <Link
                            className="dashboard-calendar-event-page__link"
                            to="/dashboard-read-message-page"
                          >
                            <td className="dashboard-calendar-event-page__tablet-messages-table-data-row-1-sender">
                              Acme Agency
                            </td>
                          </Link>
                          <td className="dashboard-calendar-event-page__tablet-messages-table-data-row-1-subject">
                            NDA Ques...
                            <img
                              className="dashboard-calendar-event-page__tablet-messages-close-icon-1"
                              src={CloseIcon}
                              alt="Close Icon"
                            />
                          </td>
                        </tr>
                        <div className="dashboard-calendar-event-page__tablet-messages-table-white-space"></div>
                        <tr className="dashboard-calendar-event-page__tablet-messages-table-data-row-2">
                          <td className="dashboard-calendar-event-page__tablet-messages-table-data-row-2-date">
                            <img
                              className="dashboard-calendar-event-page__tablet-orange-dot-icon"
                              src={OrangeDotIcon}
                              alt="Orange Dot"
                            />
                            <span className="dashboard-calendar-event-page__tablet-messages-table-data-row-2-date-text">
                              12:36 PM
                            </span>
                          </td>
                          <td className="dashboard-calendar-event-page__tablet-messages-table-data-row-2-sender">
                            ABC Staffing Inc.
                          </td>
                          <td className="dashboard-calendar-event-page__tablet-messages-table-data-row-2-subject">
                            Checking in...{" "}
                            <img
                              className="dashboard-calendar-event-page__tablet-messages-close-icon-2"
                              src={CloseIcon}
                              alt="Close Icon"
                            />
                          </td>
                        </tr>
                        <div className="dashboard-calendar-event-page__tablet-messages-table-white-space"></div>
                        <tr className="dashboard-calendar-event-page__tablet-messages-table-data-row-3">
                          <td className="dashboard-calendar-event-page__tablet-messages-table-data-row-3-date">
                            <img
                              className="dashboard-calendar-event-page__tablet-orange-dot-icon"
                              src={OrangeDotIcon}
                              alt="Orange Dot"
                            />
                            <span className="dashboard-calendar-event-page__tablet-messages-table-data-row-3-date-text">
                              Fri 7/19
                            </span>
                          </td>
                          <td className="dashboard-calendar-event-page__tablet-messages-table-data-row-3-sender">
                            Beta Staffing Agency
                          </td>
                          <td className="dashboard-calendar-event-page__tablet-messages-table-data-row-3-subject">
                            Partnership...
                            <img
                              className="dashboard-calendar-event-page__tablet-messages-close-icon-3"
                              src={CloseIcon}
                              alt="Close Icon"
                            />
                          </td>
                        </tr>
                        <div className="dashboard-calendar-event-page__tablet-messages-table-white-space"></div>
                        <tr className="dashboard-calendar-event-page__tablet-messages-table-data-row-4">
                          <td className="dashboard-calendar-event-page__tablet-messages-table-data-row-4-date">
                            {" "}
                            <img
                              className="dashboard-calendar-event-page__tablet-orange-dot-icon"
                              src={OrangeDotIcon}
                              alt="Orange Dot"
                            />
                            <span className="dashboard-calendar-event-page__tablet-messages-table-data-row-4-date-text">
                              Fri 7/19
                            </span>
                          </td>
                          <td className="dashboard-calendar-event-page__tablet-messages-table-data-row-4-sender">
                            Circular Staffing
                          </td>
                          <td className="dashboard-calendar-event-page__tablet-messages-table-data-row-4-subject">
                            Re: Partnersh...
                            <img
                              className="dashboard-calendar-event-page__tablet-messages-close-icon-4"
                              src={CloseIcon}
                              alt="Close Icon"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <img
                      className="dashboard-calendar-event-page__tablet-messages-vertical-slider-messages-icon"
                      src={VerticalSliderMessagesIcon}
                      alt="Vertical Slider Messages Icon"
                    />
                  </div>
                  <div className="dashboard-calendar-event-page__tablet-tasks-container">
                    <div className="dashboard-calendar-event-page__tablet-tasks-header-container">
                      <p className="dashboard-calendar-event-page__tablet-tasks-header">
                        Tasks
                      </p>
                      <img
                        className="dashboard-calendar-event-page__tablet-task-icon-one-icon"
                        src={TaskIconOneIcon}
                        alt="Task Icon One Icon"
                      />
                    </div>
                    <div className="dashboard-calendar-event-page__tablet-tasks-first-row-container">
                      <img
                        className="dashboard-calendar-event-page__tablet-orange-dot-icon"
                        src={OrangeDotIcon}
                        alt="Orange Dot Icon"
                      />
                      <p className="dashboard-calendar-event-page__tablet-tasks-first-row-date">
                        9/13/24
                      </p>
                      <p className="dashboard-calendar-event-page__tablet-tasks-first-row-task-description">
                        Call Kelly Re: New Applicant
                      </p>
                      <img
                        className="dashboard-calendar-event-page__tablet-gray-checkmark-icon"
                        src={GrayCheckmarkIcon}
                        alt="Gray Checkmark Icon"
                      />
                      <img
                        className="dashboard-calendar-event-page__tablet-tasks-first-row-close-icon"
                        src={CloseIcon}
                        alt="Close Icon"
                      />
                    </div>
                    <div className="dashboard-calendar-event-page__tablet-second-row-container">
                      <img
                        className="dashboard-calendar-event-page__tablet-gray-dot-icon"
                        src={GrayDotIcon}
                        alt="Gray Dot Icon"
                      />
                      <p className="dashboard-calendar-event-page__tablet-tasks-second-row-date">
                        9/10/24
                      </p>
                      <p className="dashboard-calendar-event-page__tablet-tasks-second-row-task-description">
                        Call Jerry about Contract
                      </p>
                      <img
                        className="dashboard-calendar-event-page__tablet-orange-checkmark-icon"
                        src={OrangeCheckmarkIcon}
                        alt="Orange Checkmark Icon"
                      />
                      <img
                        className="dashboard-calendar-event-page__tablet-tasks-second-row-close-icon"
                        src={CloseIcon}
                        alt="Close Icon"
                      />
                    </div>
                  </div>
                  <div className="dashboard-calendar-event-page__tablet-notifications-container">
                    <div className="dashboard-calendar-event-page__tablet-notifications-top-container">
                      <p className="dashboard-calendar-event-page__tablet-notifications-header">
                        Notifications
                      </p>
                      <img
                        className="dashboard-calendar-event-page__tablet-notifications-icon"
                        src={NotificationsIcon}
                        alt="Notifications Icon"
                      />
                    </div>
                    <table className="dashboard-calendar-event-page__tablet-notifications-table">
                      <thead className="dashboard-calendar-event-page__tablet-notifications-table-header-section">
                        <tr className="dashboard-calendar-event-page__tablet-notifications-table-header-row">
                          <th className="dashboard-calendar-event-page__tablet-notifications-table-header-column-needs-attention">
                            Needs Attention
                          </th>
                        </tr>
                      </thead>
                      <tbody className="dashboard-calendar-event-page__tablet-notifications-table-data-section">
                        <Link
                          className="dashboard-calendar-event-page__link"
                          to="/dashboard-read-notification-page"
                        >
                          <tr className="dashboard-calendar-event-page__tablet-notifications-table-data-row-1">
                            <td className="dashboard-calendar-event-page__tablet-notifications-table-data-row-1-value">
                              <img
                                className="dashboard-calendar-event-page__tablet-orange-dot-icon"
                                src={OrangeDotIcon}
                                alt="Orange Dot Icon"
                              />
                              <span className="dashboard-calendar-event-page__tablet-notifications-table-data-row-1-text">
                                Welcome New MLSA Member!
                              </span>
                              <img
                                className="dashboard-calendar-event-page__tablet-close-icon"
                                src={CloseIcon}
                                alt="Close Icon"
                              />
                            </td>
                          </tr>
                        </Link>
                      </tbody>
                    </table>
                    <img
                      className="dashboard-calendar-event-page__tablet-vertical-slider-notifications-icon"
                      src={VerticalSliderMessagesIcon}
                      alt="Vertical Slider Messages Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <ActivitySummary />
          </div>
          <div className="dashboard-calendar-event-page__desktop-container">
            <div className="dashboard-calendar-event-page__desktop-first-half-container">
              <div className="dashboard-calendar-event-page__desktop-quick-search-top-container">
                <p className="dashboard-calendar-event-page__desktop-quick-search-text">
                  Quick Search
                </p>
                <select
                  className="dashboard-calendar-event-page__desktop-candidates-select"
                  name="desktop-candidates"
                  id="desktop-candidates"
                >
                  <option value="" selected>
                    Candidates
                  </option>
                </select>
                <input
                  className="dashboard-calendar-event-page__desktop-quick-search-here-input"
                  type="text"
                  placeholder="Quick Search Here"
                />
              </div>
              <div className="dashboard-calendar-event-page__desktop-central-container">
                <div className="dashboard-calendar-event-page__desktop-central-left-container">
                  <img
                    className="dashboard-calendar-event-page__desktop-calendar-icon"
                    src={MobileCalendarIcon}
                    alt="Calendar Icon"
                  />
                  <div className="dashboard-calendar-event-page__desktop-calendar-container">
                    <div className="dashboard-calendar-event-page__desktop-calendar-inner-container">
                      <p className="dashboard-calendar-event-page__desktop-calendar-header">
                        Tuesday, August 2, 2024
                      </p>
                      <div className="dashboard-calendar-event-page__desktop-calendar-name-of-event-container">
                        <label
                          className="dashboard-calendar-event-page__desktop-calendar-name-of-event-label"
                          htmlFor="desktop-name-of-event"
                        >
                          Name of Event:
                        </label>
                        <input
                          className="dashboard-calendar-event-page__desktop-name-of-event-input"
                          type="text"
                          placeholder="Type the name of your event here"
                          id="desktop-name-of-event"
                        />
                      </div>
                      <div className="dashboard-calendar-event-page__desktop-time-of-event-container">
                        <p className="dashboard-calendar-event-page__desktop-time-of-event-text">
                          Time of Event:
                        </p>
                        <div className="dashboard-calendar-event-page__desktop-time-of-event-select-all-day-container">
                          <select
                            className="dashboard-calendar-event-page__desktop-time-of-event-select"
                            name="desktop-time-of-event"
                            id="desktop-time-of-event"
                          >
                            <option value="7:00 AM" selected>
                              7:00 AM
                            </option>
                            <option value="8:00 AM">8:00 AM</option>
                            <option value="9:00 AM">9:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                            <option value="5:00 PM">5:00 PM</option>
                            <option value="6:00 PM">6:00 PM</option>
                            <option value="7:00 PM">7:00 PM</option>
                            <option value="8:00 PM">8:00 PM</option>
                            <option value="9:00 PM">9:00 PM</option>
                            <option value="10:00 PM">10:00 PM</option>
                          </select>
                          <img
                            className="dashboard-calendar-event-page__desktop-gray-radio-button-icon"
                            src={GrayRadioButtonIcon}
                            alt="Gray Radio Button Icon"
                          />
                          <p className="dashboard-calendar-event-page__desktop-all-day-text">
                            All Day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-calendar-event-page__desktop-calendar-button-container">
                      <button className="dashboard-calendar-event-page__desktop-calendar-cancel-button">
                        Cancel
                      </button>
                      <button className="dashboard-calendar-event-page__desktop-calendar-add-event-button">
                        Add Event
                      </button>
                    </div>
                  </div>
                </div>
                <div className="dashboard-calendar-event-page__desktop-central-right-container">
                  <div className="dashboard-calendar-event-page__desktop-messages-container">
                    <div className="dashboard-calendar-event-page__desktop-messages-header-container">
                      <p className="dashboard-calendar-event-page__desktop-messages-header">
                        Messages
                      </p>
                      <img
                        className="dashboard-calendar-event-page__desktop-messages-four-icon"
                        src={MessagesFourIcon}
                        alt="Messages Four Icon"
                      />
                      <img
                        className="dashboard-calendar-event-page__desktop-create-message-icon"
                        src={CreateMessageIcon}
                        alt="Create Message Icon"
                      />
                    </div>
                    <table className="dashboard-calendar-event-page__desktop-messages-table">
                      <thead className="dashboard-calendar-event-page__desktop-messages-table-header-section">
                        <tr className="dashboard-calendar-event-page__desktop-messages-table-header-row">
                          <th className="dashboard-calendar-event-page__desktop-messages-table-header-column-date">
                            Date
                          </th>
                          <th className="dashboard-calendar-event-page__desktop-messages-table-header-column-sender">
                            Sender
                          </th>
                          <th className="dashboard-calendar-event-page__desktop-messages-table-header-column-subject">
                            Subject
                          </th>
                        </tr>
                      </thead>
                      <tbody className="dashboard-calendar-event-page__desktop-messages-table-body-section">
                        <div className="dashboard-calendar-event-page__desktop-messages-table-white-space"></div>
                        <tr className="dashboard-calendar-event-page__desktop-messages-table-data-row-1">
                          <td className="dashboard-calendar-event-page__desktop-messages-table-data-row-1-date">
                            <img
                              className="dashboard-calendar-event-page__desktop-orange-dot-icon"
                              src={OrangeDotIcon}
                              alt="Orange Dot"
                            />
                            <span className="dashboard-calendar-event-page__desktop-messages-table-data-row-1-date-text">
                              12:58 PM
                            </span>
                          </td>
                          <Link
                            className="dashboard-calendar-event-page__link"
                            to="/dashboard-read-message-page"
                          >
                            <td className="dashboard-calendar-event-page__desktop-messages-table-data-row-1-sender">
                              Acme Agency
                            </td>
                          </Link>
                          <td className="dashboard-calendar-event-page__desktop-messages-table-data-row-1-subject">
                            NDA Ques...
                            <img
                              className="dashboard-calendar-event-page__desktop-messages-close-icon-1"
                              src={CloseIcon}
                              alt="Close Icon"
                            />
                          </td>
                        </tr>
                        <div className="dashboard-calendar-event-page__desktop-messages-table-white-space"></div>
                        <tr className="dashboard-calendar-event-page__desktop-messages-table-data-row-2">
                          <td className="dashboard-calendar-event-page__desktop-messages-table-data-row-2-date">
                            <img
                              className="dashboard-calendar-event-page__desktop-orange-dot-icon"
                              src={OrangeDotIcon}
                              alt="Orange Dot"
                            />
                            <span className="dashboard-calendar-event-page__desktop-messages-table-data-row-2-date-text">
                              12:36 PM
                            </span>
                          </td>
                          <td className="dashboard-calendar-event-page__desktop-messages-table-data-row-2-sender">
                            ABC Staffing Inc.
                          </td>
                          <td className="dashboard-calendar-event-page__desktop-messages-table-data-row-2-subject">
                            Checking in...{" "}
                            <img
                              className="dashboard-calendar-event-page__desktop-messages-close-icon-2"
                              src={CloseIcon}
                              alt="Close Icon"
                            />
                          </td>
                        </tr>
                        <div className="dashboard-calendar-event-page__desktop-messages-table-white-space"></div>
                        <tr className="dashboard-calendar-event-page__desktop-messages-table-data-row-3">
                          <td className="dashboard-calendar-event-page__desktop-messages-table-data-row-3-date">
                            <img
                              className="dashboard-calendar-event-page__desktop-orange-dot-icon"
                              src={OrangeDotIcon}
                              alt="Orange Dot"
                            />
                            <span className="dashboard-calendar-event-page__desktop-messages-table-data-row-3-date-text">
                              Fri 7/19
                            </span>
                          </td>
                          <td className="dashboard-calendar-event-page__desktop-messages-table-data-row-3-sender">
                            Beta Staffing Agency
                          </td>
                          <td className="dashboard-calendar-event-page__desktop-messages-table-data-row-3-subject">
                            Partnership...
                            <img
                              className="dashboard-calendar-event-page__desktop-messages-close-icon-3"
                              src={CloseIcon}
                              alt="Close Icon"
                            />
                          </td>
                        </tr>
                        <div className="dashboard-calendar-event-page__desktop-messages-table-white-space"></div>
                        <tr className="dashboard-calendar-event-page__desktop-messages-table-data-row-4">
                          <td className="dashboard-calendar-event-page__desktop-messages-table-data-row-4-date">
                            {" "}
                            <img
                              className="dashboard-calendar-event-page__desktop-orange-dot-icon"
                              src={OrangeDotIcon}
                              alt="Orange Dot"
                            />
                            <span className="dashboard-calendar-event-page__desktop-messages-table-data-row-4-date-text">
                              Fri 7/19
                            </span>
                          </td>
                          <td className="dashboard-calendar-event-page__desktop-messages-table-data-row-4-sender">
                            Circular Staffing
                          </td>
                          <td className="dashboard-calendar-event-page__desktop-messages-table-data-row-4-subject">
                            Re: Partnersh...
                            <img
                              className="dashboard-calendar-event-page__desktop-messages-close-icon-4"
                              src={CloseIcon}
                              alt="Close Icon"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <img
                      className="dashboard-calendar-event-page__desktop-messages-vertical-slider-messages-icon"
                      src={VerticalSliderMessagesIcon}
                      alt="Vertical Slider Messages Icon"
                    />
                  </div>
                  <div className="dashboard-calendar-event-page__desktop-tasks-container">
                    <div className="dashboard-calendar-event-page__desktop-tasks-header-container">
                      <p className="dashboard-calendar-event-page__desktop-tasks-header">
                        Tasks
                      </p>
                      <img
                        className="dashboard-calendar-event-page__desktop-tasks-icon-one-icon"
                        src={TaskIconOneIcon}
                        alt="Task Icon One Icon"
                      />
                    </div>
                    <div className="dashboard-calendar-event-page__desktop-tasks-first-row-container">
                      <img
                        className="dashboard-calendar-event-page__desktop-tasks-first-row-orange-dot-icon"
                        src={OrangeDotIcon}
                        alt="Orange Dot Icon"
                      />
                      <p className="dashboard-calendar-event-page__desktop-tasks-first-row-date">
                        9/13/24
                      </p>
                      <p className="dashboard-calendar-event-page__desktop-tasks-first-row-task-description">
                        Call Kelly Re: New Applicant
                      </p>
                      <img
                        className="dashboard-calendar-event-page__desktop-tasks-first-row-gray-checkmark-icon"
                        src={GrayCheckmarkIcon}
                        alt="Gray Checkmark Icon"
                      />
                      <img
                        className="dashboard-calendar-event-page__desktop-tasks-first-row-close-icon"
                        src={CloseIcon}
                        alt="Close Icon"
                      />
                    </div>
                    <div className="dashboard-calendar-event-page__desktop-tasks-second-row-container">
                      <img
                        className="dashboard-calendar-event-page__desktop-tasks-second-row-gray-dot-icon"
                        src={GrayDotIcon}
                        alt="Gray Dot Icon"
                      />
                      <p className="dashboard-calendar-event-page__desktop-tasks-second-row-date">
                        9/10/24
                      </p>
                      <p className="dashboard-calendar-event-page__desktop-tasks-second-row-task-description">
                        Call Jerry about Contract
                      </p>
                      <img
                        className="dashboard-calendar-event-page__desktop-tasks-second-row-orange-checkmark-icon"
                        src={OrangeCheckmarkIcon}
                        alt="Orange Checkmark Icon"
                      />
                      <img
                        className="dashboard-calendar-event-page__desktop-tasks-second-row-close-icon"
                        src={CloseIcon}
                        alt="Close Icon"
                      />
                    </div>
                    <img
                      className="dashboard-calendar-event-page__desktop-tasks-second-row-vertical-slider-messages-icon"
                      src={VerticalSliderMessagesIcon}
                      alt="Vertical Slider Messages Icon"
                    />
                  </div>
                  <div className="dashboard-calendar-event-page__desktop-notifications-container">
                    <div className="dashboard-calendar-event-page__desktop-notifications-header-container">
                      <p className="dashboard-calendar-event-page__desktop-notifications-header">
                        Notifications
                      </p>
                      <img
                        className="dashboard-calendar-event-page__desktop-notifications-icon"
                        src={NotificationsIcon}
                        alt="Notifications Icon"
                      />
                    </div>
                    <table className="dashboard-calendar-event-page__desktop-notifications-table">
                      <thead className="dashboard-calendar-event-page__desktop-notifications-table-header-section">
                        <tr className="dashboard-calendar-event-page__desktop-notifications-table-header-row">
                          <th className="dashboard-calendar-event-page__desktop-notifications-table-header-column-needs-attention">
                            Needs Attention
                          </th>
                        </tr>
                      </thead>
                      <tbody className="dashboard-calendar-event-page__desktop-notifications-table-data-section">
                        <Link
                          className="dashboard-calendar-event-page__link"
                          to="/dashboard-read-notification-page"
                        >
                          <tr className="dashboard-calendar-event-page__desktop-notifications-table-data-row-1">
                            <td className="dashboard-calendar-event-page__desktop-notifications-table-data-row-1-value">
                              <img
                                className="dashboard-calendar-event-page__desktop-orange-dot-icon"
                                src={OrangeDotIcon}
                                alt="Orange Dot Icon"
                              />
                              <span className="dashboard-calendar-event-page__desktop-notifications-table-data-row-1-text">
                                Welcome New MLSA Member!
                              </span>
                              <img
                                className="dashboard-calendar-event-page__desktop-close-icon"
                                src={CloseIcon}
                                alt="Close Icon"
                              />
                            </td>
                          </tr>
                        </Link>
                      </tbody>
                    </table>
                    <img
                      className="dashboard-calendar-event-page__desktop-vertical-slider-notifications-icon"
                      src={VerticalSliderMessagesIcon}
                      alt="Vertical Slider Messages Icon"
                    />
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
