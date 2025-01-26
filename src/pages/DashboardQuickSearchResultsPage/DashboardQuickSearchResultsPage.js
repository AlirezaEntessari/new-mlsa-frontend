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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
