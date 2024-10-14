import React from "react";
import "./SearchJobsHomeGridViewPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import JobsSidePanel from "../../components/JobsSidePanel/JobsSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";

export default function SearchJobsHomeGridViewPage() {
  return (
    <div className="search-jobs-home-grid-view-page">
      <HeaderWithProfilePic />
      <div className="search-jobs-home-grid-view-page__main-container">
        <JobsSidePanel />
        <div className="search-jobs-home-grid-view-page__right-container">
          <p className="search-jobs-home-grid-view-page__mobile-header">
            Search Jobs
          </p>
          <img
            className="search-jobs-home-grid-view-page__mobile-search-icon"
            src={SearchIcon}
            alt="Search Icon"
          />
          <input
            className="search-jobs-home-grid-view-page__mobile-key-word-search-input"
            type="text"
            placeholder="Keyword Search"
          />
          <div className="search-jobs-home-grid-view-page__mobile-select-container">
            
          </div>
        </div>
      </div>
    </div>
  );
}
