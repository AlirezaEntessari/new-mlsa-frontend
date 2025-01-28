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
                  </tbody>
                </table>
                <img
                  className="dashboard-read-message-page__mobile-vertical-slider-messages-icon"
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
