import React from "react";
import "./DashboardHomePage.scss";
import DashboardSidePanel from "../../components/DashboardSidePanel/DashboardSidePanel";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import SearchIcon from "../../assets/icons/Search (2).svg";
import NotificationsIcon from "../../assets/icons/notificationbellmessage.svg";
import CloseIcon from "../../assets/icons/xtask.svg";
import OrangeDotIcon from "../../assets/icons/COffersDot.svg";
import VerticalSliderMessagesIcon from "../../assets/icons/verticalslidermessages.svg";
import MessagesFourIcon from "../../assets/icons/messagesfour.svg";
import CreateMessageIcon from "../../assets/icons/createmessage.svg";

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
                        Checking in...  <img
                          className="dashboard-home-page__mobile-messages-close-icon-2"
                          src={CloseIcon}
                          alt="Close Icon"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
