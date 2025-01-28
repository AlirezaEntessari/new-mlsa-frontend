import React from "react";
import "./DashboardReadNotificationPage.scss";
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

export default function DashboardReadNotificationPage() {
  return (
    <div className="dashboard-read-notification-page">
      <HeaderWithProfilePic />
      <div className="dashboard-read-notification-page__main-container">
        <DashboardSidePanel />
        <div className="dashboard-read-notification-page__right-container">
          <div className="dashboard-read-notification-page__mobile-container">
            <div className="dashboard-read-notification-page__mobile-first-half-container">
              <div className="dashboard-read-notification-page__mobile-quick-search-candidates-container">
                <p className="dashboard-read-notification-page__mobile-quick-search-text">
                  Quick Search
                </p>
                <select
                  className="dashboard-read-notification-page__mobile-candidates-select"
                  name="mobile-candidates"
                  id="mobile-candidates"
                >
                  <option value="" selected>
                    Candidates
                  </option>
                </select>
              </div>
              <div className="dashboard-read-notification-page__mobile-input-container">
                <input
                  className="dashboard-read-notification-page__mobile-keywords-input"
                  type="text"
                  placeholder="Keywords"
                />
                <img
                  className="dashboard-read-notification-page__mobile-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
              </div>
              <div className="dashboard-read-notification-page__mobile-notifications-container">
                <div className="dashboard-read-notification-page__mobile-notifications-top-container">
                  <p className="dashboard-read-notification-page__mobile-notifications-header">
                    Notifications
                  </p>
                  <img
                    className="dashboard-read-notification-page__mobile-notifications-icon"
                    src={NotificationsIcon}
                    alt="Notifications Icon"
                  />
                </div>
                <table className="dashboard-read-notification-page__mobile-notifications-table">
                  <thead className="dashboard-read-notification-page__mobile-notifications-table-header-section">
                    <tr className="dashboard-read-notification-page__mobile-notifications-table-header-row">
                      <th className="dashboard-read-notification-page__mobile-notifications-table-header-column-needs-attention">
                        Needs Attention
                      </th>
                    </tr>
                  </thead>
                  <tbody className="dashboard-read-notification-page__mobile-notifications-table-data-section">
                    <tr className="dashboard-read-notification-page__mobile-notifications-table-data-row-1">
                      <td className="dashboard-read-notification-page__mobile-notifications-table-data-row-1-value">
                        <img
                          className="dashboard-read-notification-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot Icon"
                        />
                        <span className="dashboard-read-notification-page__mobile-notifications-table-data-row-1-text">
                          Welcome New MLSA Member!
                        </span>
                        <img
                          className="dashboard-read-notification-page__mobile-close-icon"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-read-notification-page__mobile-notifications-table-white-space"></div>
                    <tr className="dashboard-read-notification-page__mobile-notifications-table-data-row-2">
                      <td className="dashboard-read-notification-page__mobile-notifications-table-data-welcome">
                        Welcome New MLSA Member! We are grateful you have joined
                        us and look forward to much future success! Read your
                        welcome message for tips on how to start using MLSA.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <img
                  className="dashboard-read-notification-page__mobile-vertical-slider-messages-icon"
                  src={VerticalSliderMessagesIcon}
                  alt="Vertical Slider Messages Icon"
                />
              </div>
              <div className="dashboard-read-notification-page__mobile-messages-container">
                <div className="dashboard-read-notification-page__mobile-messages-top-container">
                  <p className="dashboard-read-notification-page__mobile-messages-header">
                    Messages
                  </p>
                  <img
                    className="dashboard-read-notification-page__mobile-messages-four-icon"
                    src={MessagesFourIcon}
                    alt="Messages Four Icon"
                  />
                  <img
                    className="dashboard-read-notification-page__mobile-create-message-icon"
                    src={CreateMessageIcon}
                    alt="Create Message Icon"
                  />
                </div>
                <table className="dashboard-read-notification-page__mobile-messages-table">
                  <thead className="dashboard-read-notification-page__mobile-messages-table-header-section">
                    <tr className="dashboard-read-notification-page__mobile-messages-table-header-row">
                      <th className="dashboard-read-notification-page__mobile-messages-table-header-column-date">
                        Date
                      </th>
                      <th className="dashboard-read-notification-page__mobile-messages-table-header-column-sender">
                        Sender
                      </th>
                      <th className="dashboard-read-notification-page__mobile-messages-table-header-column-subject">
                        Subject
                      </th>
                    </tr>
                  </thead>
                  <tbody className="dashboard-read-notification-page__mobile-messages-table-body-section">
                    <div className="dashboard-read-notification-page__mobile-messages-table-white-space"></div>
                    <tr className="dashboard-read-notification-page__mobile-messages-table-data-row-1">
                      <td className="dashboard-read-notification-page__mobile-messages-table-data-row-1-date">
                        <img
                          className="dashboard-read-notification-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot"
                        />
                        <span className="dashboard-read-notification-page__mobile-messages-table-data-row-1-date-text">
                          12:58 PM
                        </span>
                      </td>
                      <td className="dashboard-read-notification-page__mobile-messages-table-data-row-1-sender">
                        Acme Agency
                      </td>
                      <td className="dashboard-read-notification-page__mobile-messages-table-data-row-1-subject">
                        NDA Ques...
                        <img
                          className="dashboard-read-notification-page__mobile-messages-close-icon-1"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-read-notification-page__mobile-messages-table-white-space"></div>
                    <tr className="dashboard-read-notification-page__mobile-messages-table-data-row-2">
                      <td className="dashboard-read-notification-page__mobile-messages-table-data-row-2-date">
                        <img
                          className="dashboard-read-notification-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot"
                        />
                        <span className="dashboard-read-notification-page__mobile-messages-table-data-row-2-date-text">
                          12:36 PM
                        </span>
                      </td>
                      <td className="dashboard-read-notification-page__mobile-messages-table-data-row-2-sender">
                        ABC Staffing Inc.
                      </td>
                      <td className="dashboard-read-notification-page__mobile-messages-table-data-row-2-subject">
                        Checking in...{" "}
                        <img
                          className="dashboard-read-notification-page__mobile-messages-close-icon-2"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-read-notification-page__mobile-messages-table-white-space"></div>
                    <tr className="dashboard-read-notification-page__mobile-messages-table-data-row-3">
                      <td className="dashboard-read-notification-page__mobile-messages-table-data-row-3-date">
                        <img
                          className="dashboard-read-notification-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot"
                        />
                        <span className="dashboard-read-notification-page__mobile-messages-table-data-row-3-date-text">
                          Fri 7/19
                        </span>
                      </td>
                      <td className="dashboard-read-notification-page__mobile-messages-table-data-row-3-sender">
                        Beta Staffing Agency
                      </td>
                      <td className="dashboard-read-notification-page__mobile-messages-table-data-row-3-subject">
                        Partnership...
                        <img
                          className="dashboard-read-notification-page__mobile-messages-close-icon-3"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                    <div className="dashboard-read-notification-page__mobile-messages-table-white-space"></div>
                    <tr className="dashboard-read-notification-page__mobile-messages-table-data-row-4">
                      <td className="dashboard-read-notification-page__mobile-messages-table-data-row-4-date">
                        {" "}
                        <img
                          className="dashboard-read-notification-page__mobile-orange-dot-icon"
                          src={OrangeDotIcon}
                          alt="Orange Dot"
                        />
                        <span className="dashboard-read-notification-page__mobile-messages-table-data-row-4-date-text">
                          Fri 7/19
                        </span>
                      </td>
                      <td className="dashboard-read-notification-page__mobile-messages-table-data-row-4-sender">
                        Circular Staffing
                      </td>
                      <td className="dashboard-read-notification-page__mobile-messages-table-data-row-4-subject">
                        Re: Partnersh...
                        <img
                          className="dashboard-read-notification-page__mobile-messages-close-icon-4"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <img
                  className="dashboard-read-notification-page__mobile-messages-vertical-slider-messages-icon"
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
