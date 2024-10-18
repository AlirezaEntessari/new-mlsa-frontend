import React from "react";
import "./SearchJobsViewSearchesPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import JobsSidePanel from "../../components/JobsSidePanel/JobsSidePanel";

export default function SearchJobsViewSearchesPage() {
  return (
    <div className="search-jobs-view-searches-page">
      <HeaderWithProfilePic />
      <div className="search-jobs-view-searches-page__main-container">
        <JobsSidePanel />
        <div className="search-jobs-view-searches-page__right-container">
          <div className="search-jobs-view-searches-page__mobile-container">
            <p className="search-jobs-view-searches-page__mobile-search-jobs-header">
              Search Jobs
            </p>
            <div className="search-jobs-view-searches-page__mobile-saved-searches-container">
              <p className="search-jobs-view-searches-page__mobile-saved-searches-dashboard-header">
                Saved Searches
              </p>
              <div className="search-jobs-view-searches-page__mobile-saved-searches-first-row-container">
                <p className="search-jobs-view-searches-page__mobile-saved-searches-first-row-date">
                  09/01/24
                </p>
                <p className="search-jobs-view-searches-page__mobile-saved-searches-first-row-search-filters-text">
                  Search Filters:
                </p>
                <p className="search-jobs-view-searches-page__mobile-saved-searches-first-row-search-filters-description-text">
                  Aerospace & Defense, Full Time, Texas
                </p>
                <div className="search-jobs-view-searches-page__mobile-saved-searches-first-row-bottom-button-container">
                  <button className="search-jobs-view-searches-page__mobile-saved-searches-first-row-view-search-button">
                    View Search
                  </button>
                  <button className="search-jobs-view-searches-page__mobile-saved-searches-first-row-delete-search-button">
                    Delete Search
                  </button>
                </div>
              </div>
              <div className="search-jobs-view-searches-page__mobile-saved-searches-second-row-container">
                <p className="search-jobs-view-searches-page__mobile-saved-searches-second-row-date">
                  09/01/24
                </p>
                <p className="search-jobs-view-searches-page__mobile-saved-searches-second-row-search-filters-text">
                  Search Filters:
                </p>
                <p className="search-jobs-view-searches-page__mobile-saved-searches-second-row-search-filters-description-text">
                  Healthcare, Contract, New York, XYZ Staffing Agency
                </p>
                <div className="search-jobs-view-searches-page__mobile-saved-searches-second-row-bottom-button-container">
                  <button className="search-jobs-view-searches-page__mobile-saved-searches-second-row-view-search-button">
                    View Search
                  </button>
                  <button className="search-jobs-view-searches-page__mobile-saved-searches-second-row-delete-search-button">
                    Delete Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="search-jobs-view-searches-page__tablet-desktop-container">
            <p className="search-jobs-view-searches-page__tablet-desktop-header">
              Search Jobs
            </p>
            <button className="search-jobs-view-searches-page__tablet-desktop-search-jobs-button">
              Search Jobs
            </button>
            <p className="search-jobs-view-searches-page__tablet-desktop-saved-searches-header">
              Saved Searches
            </p>
            <div className="search-jobs-view-searches-page__tablet-desktop-rows-container">
              <div className="search-jobs-view-searches-page__tablet-desktop-first-row-container">
                <p className="search-jobs-view-searches-page__tablet-desktop-first-row-search-result-text">
                  Search Filters: Aerospace & Defense, Full Time, Texas
                </p>
                <p className="search-jobs-view-searches-page__tablet-desktop-first-row-search-date">
                  09/01/24
                </p>
                <div className="search-jobs-view-searches-page__tablet-desktop-first-row-search-button-container">
                  <button className="search-jobs-view-searches-page__tablet-desktop-first-row-view-search-button">
                    View Search
                  </button>
                  <button className="search-jobs-view-searches-page__tablet-desktop-first-row-deletes-search-button">
                    Delete Search
                  </button>
                </div>
              </div>
              <div className="search-jobs-view-searches-page__tablet-desktop-second-row-container">
                <p className="search-jobs-view-searches-page__tablet-desktop-second-row-search-result-text">
                  Search Filters: Healthcare, Contract, New York, XYZ Staffing
                  Agency
                </p>
                <p className="search-jobs-view-searches-page__tablet-desktop-second-row-search-date">
                  09/01/24
                </p>
                <div className="search-jobs-view-searches-page__tablet-desktop-second-row-search-button-container">
                  <button className="search-jobs-view-searches-page__tablet-desktop-second-row-view-search-button">
                    View Search
                  </button>
                  <button className="search-jobs-view-searches-page__tablet-desktop-second-row-deletes-search-button">
                    Delete Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
