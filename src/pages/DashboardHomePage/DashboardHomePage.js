import React from "react";
import "./DashboardHomePage.scss";
import DashboardSidePanel from "../../components/DashboardSidePanel/DashboardSidePanel";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import SearchIcon from "../../assets/icons/Search (2).svg";
import NotificationsIcon from "../../assets/icons/notificationbellmessage.svg";
import CloseIcon from "../../assets/icons/xtask.svg";
import OrangeDotIcon from "../../assets/icons/COffersDot.svg";

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
                        Welcome New MLSA Member!
                        <img
                          className="dashboard-home-page__mobile-close-icon"
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
