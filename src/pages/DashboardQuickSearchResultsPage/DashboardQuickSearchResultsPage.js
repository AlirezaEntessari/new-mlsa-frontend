import React from "react";
import "./DashboardQuickSearchResultsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import DashboardSidePanel from "../../components/DashboardSidePanel/DashboardSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";

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
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
