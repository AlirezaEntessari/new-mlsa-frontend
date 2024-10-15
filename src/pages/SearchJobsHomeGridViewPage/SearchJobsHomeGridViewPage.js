import React from "react";
import "./SearchJobsHomeGridViewPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import JobsSidePanel from "../../components/JobsSidePanel/JobsSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import JobsSearchMapPlaceholderIcon from "../../assets/icons/JobSearchMapPlaceholder.svg";
import FireworksWhiteIcon from "../../assets/icons/fireworkswhite.svg";
import RatingStarIcon from "../../assets/icons/RatingStar.svg";
import ActionIcon from "../../assets/icons/3verticaldots.svg";
import JobsPlacementsBulletIcon from "../../assets/icons/JobsPlacementsBullet.svg";
import JobPinIcon from "../../assets/icons/JobPin.svg";
import JobSearchNotification4Icon from "../../assets/icons/JobSearchNotificationOrange4.svg";
import HotFlameIcon from "../../assets/icons/hotflame.svg";

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
            <div className="search-jobs-home-grid-view-page__mobile-location-agency-select-container">
              <select
                className="search-jobs-home-grid-view-page__mobile-location-select"
                name="mobile-location"
                id="mobile-location"
              >
                <option value="" disabled selected>
                  Location
                </option>
                <option value="Alaska">AK</option>
                <option value="Arizona">AZ</option>
                <option value="Arkansas">AR</option>
                <option value="California">CA</option>
                <option value="Colorado">CO</option>
                <option value="Connecticut">CT</option>
                <option value="Delaware">DE</option>
                <option value="Florida">FL</option>
                <option value="Georgia">GA</option>
                <option value="Hawaii">HI</option>
                <option value="Idaho">ID</option>
                <option value="Illinois">IL</option>
                <option value="Indiana">IN</option>
                <option value="Iowa">IA</option>
                <option value="Kansas">KS</option>
                <option value="Kentucky">KY</option>
                <option value="Louisiana">LA</option>
                <option value="Maine">ME</option>
                <option value="Maryland">MD</option>
                <option value="Massachusetts">MA</option>
                <option value="Michigan">MI</option>
                <option value="Minnesota">MN</option>
                <option value="Missouri">MO</option>
                <option value="Montana">MT</option>
                <option value="Nebraska">NE</option>
                <option value="Nevada">NV</option>
                <option value="New Hampshire">NH</option>
                <option value="New Jersey">NJ</option>
                <option value="New Mexico">NM</option>
                <option value="New York">NY</option>
                <option value="North Carolina">NC</option>
                <option value="North Dakota">ND</option>
                <option value="Ohio">OH</option>
                <option value="Oklahoma">OK</option>
                <option value="Oregon">OR</option>
                <option value="Pennsylvania">PA</option>
                <option value="Rhode Island">RI</option>
                <option value="South Carolina">SC</option>
                <option value="South Dakota">SD</option>
                <option value="Tennessee">TN</option>
                <option value="Texas">TX</option>
                <option value="Utah">UT</option>
                <option value="Vermont">VT</option>
                <option value="Virginia">VA</option>
                <option value="Washington">WA</option>
                <option value="West Virginia">WV</option>
                <option value="Wisconsin">WI</option>
                <option value="Wyoming">WY</option>
              </select>
              <select
                className="search-jobs-home-grid-view-page__mobile-agency-select"
                name="mobile-agency"
                id="mobile-agency"
              >
                <option value="" disabled selected>
                  Agency
                </option>
                <option value="ABC Staffing Inc.">ABC Staffing Inc.</option>
                <option value="DEF Agency">DEF Agency</option>
                <option value="GHI Staffing Agency">GHI Staffing Agency</option>
              </select>
            </div>
            <div className="search-jobs-home-grid-view-page__mobile-industry-other-filter-select-container">
              <select
                className="search-jobs-home-grid-view-page__mobile-industry-select"
                name="mobile-industry"
                id="mobile-industry"
              >
                <option value="" disabled selected>
                  Industry
                </option>
                <option value="aerospace-defense">Aerospace and Defense</option>
                <option value="agricultural">Agricultural</option>
                <option value="computers-and-technology">
                  Computers and Technology
                </option>
                <option value="conglomerate">Conglomerate</option>
                <option value="consumer-goods">Consumer Goods</option>
                <option value="financial">Financial</option>
                <option value="government">Government</option>
                <option value="healthcare">Healthcare</option>
                <option value="insurance">Insurance</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="oil-and-gas">Oil and Gas</option>
                <option value="pharmaceuticals">Pharmaceuticals</option>
                <option value="power-and-utilities">Power and Utilities</option>
                <option value="telecommunications">Telecommunications</option>
              </select>
              <select
                className="search-jobs-home-grid-view-page__mobile-other-select"
                name="mobile-other"
                id="mobile-other"
              >
                <option value="" disabled selected>
                  Other Filter
                </option>
              </select>
            </div>
            <div className="search-jobs-home-grid-view-page__mobile-job-type-clear-filters-container">
              <select
                className="search-jobs-home-grid-view-page__mobile-job-type-select"
                name="mobile-job-type"
                id="mobile-job-type"
              >
                <option value="" disabled selected>
                  Job Type
                </option>
                <option value="full-time" disabled selected>
                  Full Time
                </option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
              </select>
              <button className="search-jobs-home-grid-view-page__mobile-clear-filters-button">
                Clear Filters
              </button>
            </div>
          </div>
          <img
            className="search-jobs-home-grid-view-page__mobile-job-search-map-placeholder-icon"
            src={JobsSearchMapPlaceholderIcon}
            alt="Job Search Map Placeholder Icon"
          />
          <div className="search-jobs-home-grid-view-page__mobile-view-searches-show-hidden-container">
            <button className="search-jobs-home-grid-view-page__mobile-view-searches-button">
              View Searches
            </button>
            <button className="search-jobs-home-grid-view-page__mobile-show-hidden-button">
              Show Hidden
            </button>
          </div>
          <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-container">
            <p className="search-jobs-home-grid-view-page__mobile-featured-jobs-header">
              Today's Featured Jobs
            </p>
            <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card">
              <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card-new-opening-header-container">
                <img
                  className="search-jobs-home-grid-view-page__mobile-hot-flame-icon"
                  src={FireworksWhiteIcon}
                  alt="Fireworks White Icon"
                />
                <span className="search-jobs-home-grid-view-page__mobile-new-opening-text">
                  NEW OPENING
                </span>
              </div>
              <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card-header-rating-container">
                <p className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card-header-text">
                  ABC Staffing Inc.
                </p>
                <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card-rating-container">
                  <span className="search-jobs-home-grid-view-page__mobile-featured-jobs-rating-text">
                    4.5
                  </span>
                  <img
                    className="search-jobs-home-grid-view-page__mobile-rating-star-icon"
                    src={RatingStarIcon}
                    alt="Rating Star Icon"
                  />
                </div>
                <img
                  className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card-action-icon"
                  src={ActionIcon}
                  alt="Action Icon"
                />
              </div>
              <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card-job-description-container">
                <span className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card-job-description">
                  CT-Tech
                </span>
                <img
                  className="search-jobs-home-grid-view-page__mobile-jobs-placements-bullet-icon"
                  src={JobsPlacementsBulletIcon}
                  alt="Jobs Placements Bullet Icon"
                />
                <span className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card-job-type-text">
                  Contract
                </span>
              </div>
              <p className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card-job-id">
                Job ID# 76534526
              </p>
              <p className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card-job-description-text-field">
                The Patient Care Technician is responsible for assisting
                registered professional nurses, in the care of the patient.
                He/she performs all of the essential generic job functions as
                listed below.
              </p>
              <p className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card-salary">
                Salary: $40,000 - $60,000
              </p>
              <div className="search-jobs-home-grid-view-page__mobile-location-split-fee-container">
                <img
                  className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card-job-pin-icon"
                  src={JobPinIcon}
                  alt="Job Pin Icon"
                />
                <span className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card-location-text">
                  Boston, MA
                </span>
                <img
                  className="search-jobs-home-grid-view-page__mobile-location-jobs-placements-bullet-icon"
                  src={JobsPlacementsBulletIcon}
                  alt="Jobs Placements Bullet Icon"
                />
                <span className="search-jobs-home-grid-view-page__mobile-location-jobs-placements-split-fee-text">
                  Split Fee: $$$
                </span>
              </div>
              <img
                className="search-jobs-home-grid-view-page__mobile-job-search-notification-four-icon"
                src={JobSearchNotification4Icon}
                alt="Job Search Notification 4 Icon"
              />
              <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card-bottom-button-container">
                <button className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card-view-my-matches-button">
                  View My Matches
                </button>
                <button className="search-jobs-home-grid-view-page__mobile-featured-jobs-first-card-post-candidate-button">
                  Post Candidate
                </button>
              </div>
            </div>
            <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-second-card">
              <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-second-card-new-opening-header-container">
                <img
                  className="search-jobs-home-grid-view-page__mobile-hot-flame-icon"
                  src={HotFlameIcon}
                  alt="Fireworks White Icon"
                />
                <span className="search-jobs-home-grid-view-page__mobile-hot-opening-text">
                  HOT OPENING
                </span>
              </div>
              <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-second-card-header-rating-container">
                <p className="search-jobs-home-grid-view-page__mobile-featured-jobs-second-card-header-text">
                  Hollingsworth Agency
                </p>
                <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-second-card-rating-container">
                  <span className="search-jobs-home-grid-view-page__mobile-featured-jobs-second-card-rating-text">
                    4.2
                  </span>
                  <img
                    className="search-jobs-home-grid-view-page__mobile-rating-star-icon"
                    src={RatingStarIcon}
                    alt="Rating Star Icon"
                  />
                </div>
                <img
                  className="search-jobs-home-grid-view-page__mobile-featured-jobs-second-action-icon"
                  src={ActionIcon}
                  alt="Action Icon"
                />
              </div>
              <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-second-card-job-description-container">
                <span className="search-jobs-home-grid-view-page__mobile-featured-jobs-second-card-job-description">
                  RN
                </span>
                <img
                  className="search-jobs-home-grid-view-page__mobile-jobs-placements-bullet-icon"
                  src={JobsPlacementsBulletIcon}
                  alt="Jobs Placements Bullet Icon"
                />
                <span className="search-jobs-home-grid-view-page__mobile-featured-jobs-second-card-job-type-text">
                  Contract
                </span>
              </div>
              <p className="search-jobs-home-grid-view-page__mobile-featured-jobs-second-card-job-id">
                Job ID# 76534526
              </p>
              <p className="search-jobs-home-grid-view-page__mobile-featured-jobs-second-card-job-description-text-field">
                The Patient Care Technician is responsible for assisting
                registered professional nurses, in the care of the patient.
                He/she performs all of the essential generic job functions as
                listed below.
              </p>
              <p className="search-jobs-home-grid-view-page__mobile-featured-jobs-second-card-salary">
                Salary: $40,000 - $60,000
              </p>
              <div className="search-jobs-home-grid-view-page__mobile-second-card-location-split-fee-container">
                <img
                  className="search-jobs-home-grid-view-page__mobile-second-card-featured-jobs-job-pin-icon"
                  src={JobPinIcon}
                  alt="Job Pin Icon"
                />
                <span className="search-jobs-home-grid-view-page__mobile-second-card-featured-jobs-location-text">
                  CA
                </span>
                <img
                  className="search-jobs-home-grid-view-page__mobile-second-card-location-jobs-placements-bullet-icon"
                  src={JobsPlacementsBulletIcon}
                  alt="Jobs Placements Bullet Icon"
                />
                <span className="search-jobs-home-grid-view-page__mobile-second-card-location-jobs-placements-split-fee-text">
                  Split Fee: $$$
                </span>
              </div>
              <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-second-card-bottom-button-container">
                <button className="search-jobs-home-grid-view-page__mobile-featured-jobs-second-card-view-my-matches-button">
                  View My Matches
                </button>
                <button className="search-jobs-home-grid-view-page__mobile-featured-jobs-second-card-post-candidate-button">
                  Post Candidate
                </button>
              </div>
            </div>
            <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-third-card">
              <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-third-card-new-opening-header-container">
                <img
                  className="search-jobs-home-grid-view-page__mobile-hot-flame-icon"
                  src={HotFlameIcon}
                  alt="Fireworks White Icon"
                />
                <span className="search-jobs-home-grid-view-page__mobile-hot-opening-text">
                  HOT OPENING
                </span>
              </div>
              <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-third-card-header-rating-container">
                <p className="search-jobs-home-grid-view-page__mobile-featured-jobs-third-card-header-text">
                  Staffing Agency 2
                </p>
                <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-third-card-rating-container">
                  <span className="search-jobs-home-grid-view-page__mobile-featured-jobs-third-card-rating-text">
                    4.2
                  </span>
                  <img
                    className="search-jobs-home-grid-view-page__mobile-rating-star-icon"
                    src={RatingStarIcon}
                    alt="Rating Star Icon"
                  />
                </div>
                <img
                  className="search-jobs-home-grid-view-page__mobile-featured-jobs-third-action-icon"
                  src={ActionIcon}
                  alt="Action Icon"
                />
              </div>
              <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-third-card-job-description-container">
                <span className="search-jobs-home-grid-view-page__mobile-featured-jobs-third-card-job-description">
                  RN
                </span>
                <img
                  className="search-jobs-home-grid-view-page__mobile-jobs-placements-bullet-icon"
                  src={JobsPlacementsBulletIcon}
                  alt="Jobs Placements Bullet Icon"
                />
                <span className="search-jobs-home-grid-view-page__mobile-featured-jobs-third-card-job-type-text">
                  Part Time
                </span>
              </div>
              <p className="search-jobs-home-grid-view-page__mobile-featured-jobs-third-card-job-id">
                Job ID# 76534526
              </p>
              <p className="search-jobs-home-grid-view-page__mobile-featured-jobs-third-card-job-description-text-field">
                The Patient Care Technician is responsible for assisting
                registered professional nurses, in the care of the patient.
                He/she performs all of the essential generic job functions as
                listed below.
              </p>
              <p className="search-jobs-home-grid-view-page__mobile-featured-jobs-third-card-salary">
                Salary: $40,000 - $60,000
              </p>
              <div className="search-jobs-home-grid-view-page__mobile-third-card-location-split-fee-container">
                <img
                  className="search-jobs-home-grid-view-page__mobile-third-card-featured-jobs-job-pin-icon"
                  src={JobPinIcon}
                  alt="Job Pin Icon"
                />
                <span className="search-jobs-home-grid-view-page__mobile-third-card-featured-jobs-location-text">
                  New York, NY
                </span>
                <img
                  className="search-jobs-home-grid-view-page__mobile-third-card-location-jobs-placements-bullet-icon"
                  src={JobsPlacementsBulletIcon}
                  alt="Jobs Placements Bullet Icon"
                />
                <span className="search-jobs-home-grid-view-page__mobile-third-card-location-jobs-placements-split-fee-text">
                  Split Fee: $$$
                </span>
              </div>
              <div className="search-jobs-home-grid-view-page__mobile-featured-jobs-third-card-bottom-button-container">
                <button className="search-jobs-home-grid-view-page__mobile-featured-jobs-third-card-view-my-matches-button">
                  View My Matches
                </button>
                <button className="search-jobs-home-grid-view-page__mobile-featured-jobs-third-card-post-candidate-button">
                  Post Candidate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
