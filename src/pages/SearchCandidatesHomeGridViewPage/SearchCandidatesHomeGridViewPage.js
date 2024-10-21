import React, { useState } from "react";
import "./SearchCandidatesHomeGridViewPage.scss";
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
import JobSearchNotification1Icon from "../../assets/icons/JobSearchNotificationOrange1.svg";
import ModalSearchJobs from "../../components/ModalSearchJobs/ModalSearchJobs";
import PageArrowLeftIcon from "../../assets/icons/PageArrowLeft.svg";
import PageNumberBlue1Icon from "../../assets/icons/PageNumberBlue1.svg";
import PageNumberGray2Icon from "../../assets/icons/PageNumberGray2.svg";
import PageNumberGray3Icon from "../../assets/icons/PageNumberGray3.svg";
import PageArrowRightIcon from "../../assets/icons/PageArrowRight.svg";

export default function SearchCandidatesHomeGridViewPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSearchJobs = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="search-candidates-home-grid-view-page">
      <HeaderWithProfilePic />
      <div className="search-candidates-home-grid-view-page__main-container">
        <JobsSidePanel />
        <div className="search-candidates-home-grid-view-page__right-container">
          <div className="search-candidates-home-grid-view-page__mobile-container">
            <p className="search-candidates-home-grid-view-page__mobile-header">
              Search Jobs
            </p>
            <img
              className="search-candidates-home-grid-view-page__mobile-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="search-candidates-home-grid-view-page__mobile-key-word-search-input"
              type="text"
              placeholder="Keyword Search"
            />
            <div className="search-candidates-home-grid-view-page__mobile-select-container">
              <div className="search-candidates-home-grid-view-page__mobile-location-agency-select-container">
                <select
                  className="search-candidates-home-grid-view-page__mobile-location-select"
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
                  className="search-candidates-home-grid-view-page__mobile-agency-select"
                  name="mobile-agency"
                  id="mobile-agency"
                >
                  <option value="" disabled selected>
                    Agency
                  </option>
                  <option value="ABC Staffing Inc.">ABC Staffing Inc.</option>
                  <option value="DEF Agency">DEF Agency</option>
                  <option value="GHI Staffing Agency">
                    GHI Staffing Agency
                  </option>
                </select>
              </div>
              <div className="search-candidates-home-grid-view-page__mobile-industry-other-filter-select-container">
                <select
                  className="search-candidates-home-grid-view-page__mobile-industry-select"
                  name="mobile-industry"
                  id="mobile-industry"
                >
                  <option value="" disabled selected>
                    Industry
                  </option>
                  <option value="aerospace-defense">
                    Aerospace and Defense
                  </option>
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
                  <option value="power-and-utilities">
                    Power and Utilities
                  </option>
                  <option value="telecommunications">Telecommunications</option>
                </select>
                <select
                  className="search-candidates-home-grid-view-page__mobile-other-select"
                  name="mobile-other"
                  id="mobile-other"
                >
                  <option value="" disabled selected>
                    Other Filter
                  </option>
                </select>
              </div>
              <div className="search-candidates-home-grid-view-page__mobile-job-type-clear-filters-container">
                <select
                  className="search-candidates-home-grid-view-page__mobile-job-type-select"
                  name="mobile-job-type"
                  id="mobile-job-type"
                >
                  <option value="" disabled selected>
                    Job Type
                  </option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                </select>
                <button className="search-candidates-home-grid-view-page__mobile-clear-filters-button">
                  Clear Filters
                </button>
              </div>
            </div>
            <img
              className="search-candidates-home-grid-view-page__mobile-job-search-map-placeholder-icon"
              src={JobsSearchMapPlaceholderIcon}
              alt="Job Search Map Placeholder Icon"
            />
            <div className="search-candidates-home-grid-view-page__mobile-view-searches-show-hidden-container">
              <button className="search-candidates-home-grid-view-page__mobile-view-searches-button">
                View Searches
              </button>
              <button className="search-candidates-home-grid-view-page__mobile-show-hidden-button">
                Show Hidden
              </button>
            </div>
            <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-container">
              <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-header">
                Today's Featured Jobs
              </p>
              <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card">
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card-new-opening-header-container">
                  <img
                    className="search-candidates-home-grid-view-page__mobile-fireworks-white-icon"
                    src={FireworksWhiteIcon}
                    alt="Fireworks White Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-new-opening-text">
                    NEW OPENING
                  </span>
                </div>
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card-header-rating-container">
                  <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card-header-text">
                    ABC Staffing Inc.
                  </p>
                  <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card-rating-container">
                    <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-rating-text">
                      4.5
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__mobile-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                  </div>
                  <img
                    onClick={handleSearchJobs}
                    className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card-action-icon"
                    src={ActionIcon}
                    alt="Action Icon"
                  />
                </div>
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card-job-description-container">
                  <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card-job-description">
                    CT-Tech
                  </span>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-jobs-placements-bullet-icon"
                    src={JobsPlacementsBulletIcon}
                    alt="Jobs Placements Bullet Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card-job-type-text">
                    Contract
                  </span>
                </div>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card-job-id">
                  Job ID# 76534526
                </p>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card-job-description-text-field">
                  The Patient Care Technician is responsible for assisting
                  registered professional nurses, in the care of the patient.
                  He/she performs all of the essential generic job functions as
                  listed below.
                </p>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card-salary">
                  Salary: $40,000 - $60,000
                </p>
                <div className="search-candidates-home-grid-view-page__mobile-location-split-fee-container">
                  <img
                    className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card-job-pin-icon"
                    src={JobPinIcon}
                    alt="Job Pin Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card-location-text">
                    Boston, MA
                  </span>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-location-jobs-placements-bullet-icon"
                    src={JobsPlacementsBulletIcon}
                    alt="Jobs Placements Bullet Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-location-jobs-placements-split-fee-text">
                    Split Fee: $$$
                  </span>
                </div>
                <img
                  className="search-candidates-home-grid-view-page__mobile-job-search-notification-four-icon"
                  src={JobSearchNotification4Icon}
                  alt="Job Search Notification 4 Icon"
                />
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card-bottom-button-container">
                  <button className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-home-grid-view-page__mobile-featured-jobs-first-card-post-candidate-button">
                    Post Candidate
                  </button>
                </div>
              </div>
              <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-second-card">
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-second-card-new-opening-header-container">
                  <img
                    className="search-candidates-home-grid-view-page__mobile-hot-flame-icon"
                    src={HotFlameIcon}
                    alt="Fireworks White Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-hot-opening-text">
                    HOT OPENING
                  </span>
                </div>
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-second-card-header-rating-container">
                  <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-second-card-header-text">
                    Hollingsworth Agency
                  </p>
                  <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-second-card-rating-container">
                    <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-second-card-rating-text">
                      4.2
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__mobile-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                  </div>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-featured-jobs-second-action-icon"
                    src={ActionIcon}
                    alt="Action Icon"
                  />
                </div>
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-second-card-job-description-container">
                  <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-second-card-job-description">
                    RN
                  </span>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-jobs-placements-bullet-icon"
                    src={JobsPlacementsBulletIcon}
                    alt="Jobs Placements Bullet Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-second-card-job-type-text">
                    Contract
                  </span>
                </div>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-second-card-job-id">
                  Job ID# 76534526
                </p>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-second-card-job-description-text-field">
                  The Patient Care Technician is responsible for assisting
                  registered professional nurses, in the care of the patient.
                  He/she performs all of the essential generic job functions as
                  listed below.
                </p>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-second-card-salary">
                  Salary: $40,000 - $60,000
                </p>
                <div className="search-candidates-home-grid-view-page__mobile-second-card-location-split-fee-container">
                  <img
                    className="search-candidates-home-grid-view-page__mobile-second-card-featured-jobs-job-pin-icon"
                    src={JobPinIcon}
                    alt="Job Pin Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-second-card-featured-jobs-location-text">
                    CA
                  </span>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-second-card-location-jobs-placements-bullet-icon"
                    src={JobsPlacementsBulletIcon}
                    alt="Jobs Placements Bullet Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-second-card-location-jobs-placements-split-fee-text">
                    Split Fee: $$$
                  </span>
                </div>
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-second-card-bottom-button-container">
                  <button className="search-candidates-home-grid-view-page__mobile-featured-jobs-second-card-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-home-grid-view-page__mobile-featured-jobs-second-card-post-candidate-button">
                    Post Candidate
                  </button>
                </div>
              </div>
              <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-third-card">
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-third-card-new-opening-header-container">
                  <img
                    className="search-candidates-home-grid-view-page__mobile-hot-flame-icon"
                    src={HotFlameIcon}
                    alt="Fireworks White Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-hot-opening-text">
                    HOT OPENING
                  </span>
                </div>
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-third-card-header-rating-container">
                  <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-third-card-header-text">
                    Staffing Agency 2
                  </p>
                  <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-third-card-rating-container">
                    <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-third-card-rating-text">
                      4.2
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__mobile-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                  </div>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-featured-jobs-third-action-icon"
                    src={ActionIcon}
                    alt="Action Icon"
                  />
                </div>
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-third-card-job-description-container">
                  <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-third-card-job-description">
                    RN
                  </span>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-jobs-placements-bullet-icon"
                    src={JobsPlacementsBulletIcon}
                    alt="Jobs Placements Bullet Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-third-card-job-type-text">
                    Part Time
                  </span>
                </div>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-third-card-job-id">
                  Job ID# 76534526
                </p>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-third-card-job-description-text-field">
                  The Patient Care Technician is responsible for assisting
                  registered professional nurses, in the care of the patient.
                  He/she performs all of the essential generic job functions as
                  listed below.
                </p>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-third-card-salary">
                  Salary: $40,000 - $60,000
                </p>
                <div className="search-candidates-home-grid-view-page__mobile-third-card-location-split-fee-container">
                  <img
                    className="search-candidates-home-grid-view-page__mobile-third-card-featured-jobs-job-pin-icon"
                    src={JobPinIcon}
                    alt="Job Pin Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-third-card-featured-jobs-location-text">
                    New York, NY
                  </span>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-third-card-location-jobs-placements-bullet-icon"
                    src={JobsPlacementsBulletIcon}
                    alt="Jobs Placements Bullet Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-third-card-location-jobs-placements-split-fee-text">
                    Split Fee: $$$
                  </span>
                </div>
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-third-card-bottom-button-container">
                  <button className="search-candidates-home-grid-view-page__mobile-featured-jobs-third-card-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-home-grid-view-page__mobile-featured-jobs-third-card-post-candidate-button">
                    Post Candidate
                  </button>
                </div>
              </div>
              <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-fourth-card">
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-fourth-card-new-opening-header-container">
                  <img
                    className="search-candidates-home-grid-view-page__mobile-hot-flame-icon"
                    src={HotFlameIcon}
                    alt="Fireworks White Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-hot-opening-text">
                    HOT OPENING
                  </span>
                </div>
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-fourth-card-header-rating-container">
                  <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-fourth-card-header-text">
                    Hollingsworth Agency
                  </p>
                  <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-fourth-card-rating-container">
                    <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-fourth-card-rating-text">
                      4.2
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__mobile-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                  </div>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-featured-jobs-fourth-action-icon"
                    src={ActionIcon}
                    alt="Action Icon"
                  />
                </div>
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-fourth-card-job-description-container">
                  <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-fourth-card-job-description">
                    RN
                  </span>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-jobs-placements-bullet-icon"
                    src={JobsPlacementsBulletIcon}
                    alt="Jobs Placements Bullet Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-fourth-card-job-type-text">
                    Contract
                  </span>
                </div>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-fourth-card-job-id">
                  Job ID# 76534526
                </p>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-fourth-card-job-description-text-field">
                  The Patient Care Technician is responsible for assisting
                  registered professional nurses, in the care of the patient.
                  He/she performs all of the essential generic job functions as
                  listed below.
                </p>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-fourth-card-salary">
                  Salary: $40,000 - $60,000
                </p>
                <div className="search-candidates-home-grid-view-page__mobile-fourth-card-location-split-fee-container">
                  <img
                    className="search-candidates-home-grid-view-page__mobile-fourth-card-featured-jobs-job-pin-icon"
                    src={JobPinIcon}
                    alt="Job Pin Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-fourth-card-featured-jobs-location-text">
                    CA
                  </span>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-fourth-card-location-jobs-placements-bullet-icon"
                    src={JobsPlacementsBulletIcon}
                    alt="Jobs Placements Bullet Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-fourth-card-location-jobs-placements-split-fee-text">
                    Split Fee: $$$
                  </span>
                </div>
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-fourth-card-bottom-button-container">
                  <button className="search-candidates-home-grid-view-page__mobile-featured-jobs-fourth-card-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-home-grid-view-page__mobile-featured-jobs-fourth-card-post-candidate-button">
                    Post Candidate
                  </button>
                </div>
              </div>
              <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-fifth-card">
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-fifth-card-new-opening-header-container">
                  <img
                    className="search-candidates-home-grid-view-page__mobile-hot-flame-icon"
                    src={HotFlameIcon}
                    alt="Fireworks White Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-hot-opening-text">
                    HOT OPENING
                  </span>
                </div>
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-fifth-card-header-rating-container">
                  <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-fifth-card-header-text">
                    Staffing Agency 2
                  </p>
                  <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-fifth-card-rating-container">
                    <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-fifth-card-rating-text">
                      4.2
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__mobile-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                  </div>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-featured-jobs-fifth-action-icon"
                    src={ActionIcon}
                    alt="Action Icon"
                  />
                </div>
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-fifth-card-job-description-container">
                  <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-fifth-card-job-description">
                    RN
                  </span>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-jobs-placements-bullet-icon"
                    src={JobsPlacementsBulletIcon}
                    alt="Jobs Placements Bullet Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-fifth-card-job-type-text">
                    Part Time
                  </span>
                </div>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-fifth-card-job-id">
                  Job ID# 76534526
                </p>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-fifth-card-job-description-text-field">
                  The Patient Care Technician is responsible for assisting
                  registered professional nurses, in the care of the patient.
                  He/she performs all of the essential generic job functions as
                  listed below.
                </p>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-fifth-card-salary">
                  Salary: $40,000 - $60,000
                </p>
                <div className="search-candidates-home-grid-view-page__mobile-fifth-card-location-split-fee-container">
                  <img
                    className="search-candidates-home-grid-view-page__mobile-fifth-card-featured-jobs-job-pin-icon"
                    src={JobPinIcon}
                    alt="Job Pin Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-fifth-card-featured-jobs-location-text">
                    New York, NY
                  </span>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-fifth-card-location-jobs-placements-bullet-icon"
                    src={JobsPlacementsBulletIcon}
                    alt="Jobs Placements Bullet Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-fifth-card-location-jobs-placements-split-fee-text">
                    Split Fee: $$$
                  </span>
                </div>
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-fifth-card-bottom-button-container">
                  <button className="search-candidates-home-grid-view-page__mobile-featured-jobs-fifth-card-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-home-grid-view-page__mobile-featured-jobs-fifth-card-post-candidate-button">
                    Post Candidate
                  </button>
                </div>
              </div>
              <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card">
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card-new-opening-header-container">
                  <img
                    className="search-candidates-home-grid-view-page__mobile-hot-flame-icon"
                    src={FireworksWhiteIcon}
                    alt="Fireworks White Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-new-opening-text">
                    NEW OPENING
                  </span>
                </div>
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card-header-rating-container">
                  <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card-header-text">
                    ABC Staffing Inc.
                  </p>
                  <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card-rating-container">
                    <span className="search-candidates-home-grid-view-page__mobile-featured-sixth-rating-text">
                      4.5
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__mobile-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                  </div>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card-action-icon"
                    src={ActionIcon}
                    alt="Action Icon"
                  />
                </div>
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card-job-description-container">
                  <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card-job-description">
                    CT-Tech
                  </span>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-jobs-placements-bullet-icon"
                    src={JobsPlacementsBulletIcon}
                    alt="Jobs Placements Bullet Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card-job-type-text">
                    Contract
                  </span>
                </div>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card-job-id">
                  Job ID# 76534526
                </p>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card-job-description-text-field">
                  The Patient Care Technician is responsible for assisting
                  registered professional nurses, in the care of the patient.
                  He/she performs all of the essential generic job functions as
                  listed below.
                </p>
                <p className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card-salary">
                  Salary: $40,000 - $60,000
                </p>
                <div className="search-candidates-home-grid-view-page__mobile-location-split-fee-container">
                  <img
                    className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card-job-pin-icon"
                    src={JobPinIcon}
                    alt="Job Pin Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card-location-text">
                    Boston, MA
                  </span>
                  <img
                    className="search-candidates-home-grid-view-page__mobile-location-jobs-placements-bullet-icon"
                    src={JobsPlacementsBulletIcon}
                    alt="Jobs Placements Bullet Icon"
                  />
                  <span className="search-candidates-home-grid-view-page__mobile-location-jobs-placements-split-fee-text">
                    Split Fee: $$$
                  </span>
                </div>
                <img
                  className="search-candidates-home-grid-view-page__mobile-job-search-notification-one-icon"
                  src={JobSearchNotification1Icon}
                  alt="Job Search Notification 1 Icon"
                />
                <div className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card-bottom-button-container">
                  <button className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-home-grid-view-page__mobile-featured-jobs-sixth-card-post-candidate-button">
                    Post Candidate
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="search-candidates-home-grid-view-page__tablet-container">
            <div className="search-candidates-home-grid-view-page__tablet-header-container">
              <p className="search-candidates-home-grid-view-page__tablet-header-text">
                Search Jobs
              </p>
              <button className="search-candidates-home-grid-view-page__tablet-clear-filters-button">
                Clear Filters
              </button>
            </div>
            <img
              className="search-candidates-home-grid-view-page__tablet-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <div className="search-candidates-home-grid-view-page__tablet-keyword-search-other-filter-container">
              <input
                className="search-candidates-home-grid-view-page__tablet-keyword-search-input"
                type="text"
                placeholder="Keyword Search"
              />
              <select
                className="search-candidates-home-grid-view-page__tablet-other-filter-select"
                name="tablet-other-filter"
                id="tablet-other-filter"
              >
                <option value="" disabled selected>
                  Other Filter
                </option>
              </select>
            </div>
            <div className="search-candidates-home-grid-view-page__tablet-location-industry-job-type-agency-container">
              <select
                className="search-candidates-home-grid-view-page__tablet-location-select"
                name="tablet-location"
                id="tablet-location"
              >
                <option value="" disabled selected>
                  Location
                </option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
              <select
                className="search-candidates-home-grid-view-page__tablet-industry-select"
                name="tablet-industry"
                id="tablet-industry"
              >
                <option value="aerospace-defense" disabled selected>
                  Aerospace and Defense
                </option>
                <option value="professional-services-consulting">
                  Professional Services/Consulting
                </option>
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
                className="search-candidates-home-grid-view-page__tablet-job-type-select"
                name="tablet-job-type"
                id="tablet-job-type"
              >
                <option value="" disabled selected>
                  Job Type
                </option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
              <select
                className="search-candidates-home-grid-view-page__tablet-agency-select"
                name="tablet-agency"
                id="tablet-agency"
              >
                <option value="" disabled selected>
                  Agency
                </option>
                <option value="ABC Staffing Inc.">ABC Staffing Inc.</option>
                <option value="DEF Agency">DEF Agency</option>
                <option value="GHI Staffing Agency">GHI Staffing Agency</option>
              </select>
            </div>
            <img
              className="search-candidates-home-grid-view-page__tablet-jobs-search-map-placeholder-icon"
              src={JobsSearchMapPlaceholderIcon}
              alt="Jobs Search Map Placeholder Icon"
            />
            <div className="search-candidates-home-grid-view-page__tablet-view-searches-list-view-show-hidden-container">
              <button className="search-candidates-home-grid-view-page__tablet-view-searches-button">
                View Searches
              </button>
              <button className="search-candidates-home-grid-view-page__tablet-list-view-button">
                List View
              </button>
              <button className="search-candidates-home-grid-view-page__tablet-show-hidden-button">
                Show Hidden
              </button>
            </div>
            <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-container">
              <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-header">
                Today's Featured Jobs
              </p>
              <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-card-container-1">
                <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card">
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card-new-opening-header-container">
                    <img
                      className="search-candidates-home-grid-view-page__tablet-fireworks-white-icon"
                      src={FireworksWhiteIcon}
                      alt="Fireworks White Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-new-opening-text">
                      NEW OPENING
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card-header-rating-container">
                    <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card-header-text">
                      ABC Staffing Inc.
                    </p>
                    <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card-rating-container">
                      <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-rating-text">
                        4.5
                      </span>
                      <img
                        className="search-candidates-home-grid-view-page__tablet-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                    </div>
                    <img
                      onClick={handleSearchJobs}
                      className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card-action-icon"
                      src={ActionIcon}
                      alt="Action Icon"
                    />
                  </div>
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card-job-description-container">
                    <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card-job-description">
                      CT-Tech
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__tablet-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card-job-type-text">
                      Contract
                    </span>
                  </div>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card-job-id">
                    Job ID# 76534526
                  </p>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card-job-description-text-field">
                    The Patient Care Technician is responsible for assisting
                    registered professional nurses, in the care of the patient.
                    He/she performs all of the essential generic job functions
                    as listed below.
                  </p>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card-salary">
                    Salary: $40,000 - $60,000
                  </p>
                  <div className="search-candidates-home-grid-view-page__tablet-location-split-fee-container">
                    <img
                      className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card-job-pin-icon"
                      src={JobPinIcon}
                      alt="Job Pin Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card-location-text">
                      Boston, MA
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__tablet-location-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-location-jobs-placements-split-fee-text">
                      Split Fee: $$$
                    </span>
                  </div>
                  <img
                    className="search-candidates-home-grid-view-page__tablet-job-search-notification-four-icon"
                    src={JobSearchNotification4Icon}
                    alt="Job Search Notification 4 Icon"
                  />
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card-bottom-button-container">
                    <button className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card-view-my-matches-button">
                      View My Matches
                    </button>
                    <button className="search-candidates-home-grid-view-page__tablet-featured-jobs-first-card-post-candidate-button">
                      Post Candidate
                    </button>
                  </div>
                </div>
                <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-second-card">
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-second-card-new-opening-header-container">
                    <img
                      className="search-candidates-home-grid-view-page__tablet-hot-flame-icon"
                      src={HotFlameIcon}
                      alt="Fireworks White Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-hot-opening-text">
                      HOT OPENING
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-second-card-header-rating-container">
                    <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-second-card-header-text">
                      Hollingsworth Agency
                    </p>
                    <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-second-card-rating-container">
                      <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-second-card-rating-text">
                        4.2
                      </span>
                      <img
                        className="search-candidates-home-grid-view-page__tablet-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                    </div>
                    <img
                      className="search-candidates-home-grid-view-page__tablet-featured-jobs-second-action-icon"
                      src={ActionIcon}
                      alt="Action Icon"
                    />
                  </div>
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-second-card-job-description-container">
                    <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-second-card-job-description">
                      RN
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__tablet-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-second-card-job-type-text">
                      Contract
                    </span>
                  </div>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-second-card-job-id">
                    Job ID# 76534526
                  </p>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-second-card-job-description-text-field">
                    The Patient Care Technician is responsible for assisting
                    registered professional nurses, in the care of the patient.
                    He/she performs all of the essential generic job functions
                    as listed below.
                  </p>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-second-card-salary">
                    Salary: $40,000 - $60,000
                  </p>
                  <div className="search-candidates-home-grid-view-page__tablet-second-card-location-split-fee-container">
                    <img
                      className="search-candidates-home-grid-view-page__tablet-second-card-featured-jobs-job-pin-icon"
                      src={JobPinIcon}
                      alt="Job Pin Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-second-card-featured-jobs-location-text">
                      CA
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__tablet-second-card-location-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-second-card-location-jobs-placements-split-fee-text">
                      Split Fee: $$$
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-second-card-bottom-button-container">
                    <button className="search-candidates-home-grid-view-page__tablet-featured-jobs-second-card-view-my-matches-button">
                      View My Matches
                    </button>
                    <button className="search-candidates-home-grid-view-page__tablet-featured-jobs-second-card-post-candidate-button">
                      Post Candidate
                    </button>
                  </div>
                </div>
              </div>
              <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-card-container-2">
                <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-third-card">
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-third-card-new-opening-header-container">
                    <img
                      className="search-candidates-home-grid-view-page__tablet-hot-flame-icon"
                      src={HotFlameIcon}
                      alt="Fireworks White Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-hot-opening-text">
                      HOT OPENING
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-third-card-header-rating-container">
                    <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-third-card-header-text">
                      Staffing Agency 2
                    </p>
                    <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-third-card-rating-container">
                      <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-third-card-rating-text">
                        4.2
                      </span>
                      <img
                        className="search-candidates-home-grid-view-page__tablet-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                    </div>
                    <img
                      className="search-candidates-home-grid-view-page__tablet-featured-jobs-third-action-icon"
                      src={ActionIcon}
                      alt="Action Icon"
                    />
                  </div>
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-third-card-job-description-container">
                    <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-third-card-job-description">
                      RN
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__tablet-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-third-card-job-type-text">
                      Part Time
                    </span>
                  </div>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-third-card-job-id">
                    Job ID# 76534526
                  </p>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-third-card-job-description-text-field">
                    The Patient Care Technician is responsible for assisting
                    registered professional nurses, in the care of the patient.
                    He/she performs all of the essential generic job functions
                    as listed below.
                  </p>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-third-card-salary">
                    Salary: $40,000 - $60,000
                  </p>
                  <div className="search-candidates-home-grid-view-page__tablet-third-card-location-split-fee-container">
                    <img
                      className="search-candidates-home-grid-view-page__tablet-third-card-featured-jobs-job-pin-icon"
                      src={JobPinIcon}
                      alt="Job Pin Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-third-card-featured-jobs-location-text">
                      New York, NY
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__tablet-third-card-location-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-third-card-location-jobs-placements-split-fee-text">
                      Split Fee: $$$
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-third-card-bottom-button-container">
                    <button className="search-candidates-home-grid-view-page__tablet-featured-jobs-third-card-view-my-matches-button">
                      View My Matches
                    </button>
                    <button className="search-candidates-home-grid-view-page__tablet-featured-jobs-third-card-post-candidate-button">
                      Post Candidate
                    </button>
                  </div>
                </div>
                <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-fourth-card">
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-fourth-card-new-opening-header-container">
                    <img
                      className="search-candidates-home-grid-view-page__tablet-hot-flame-icon"
                      src={HotFlameIcon}
                      alt="Fireworks White Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-hot-opening-text">
                      HOT OPENING
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-fourth-card-header-rating-container">
                    <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-fourth-card-header-text">
                      Hollingsworth Agency
                    </p>
                    <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-fourth-card-rating-container">
                      <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-fourth-card-rating-text">
                        4.2
                      </span>
                      <img
                        className="search-candidates-home-grid-view-page__tablet-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                    </div>
                    <img
                      className="search-candidates-home-grid-view-page__tablet-featured-jobs-fourth-action-icon"
                      src={ActionIcon}
                      alt="Action Icon"
                    />
                  </div>
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-fourth-card-job-description-container">
                    <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-fourth-card-job-description">
                      RN
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__tablet-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-fourth-card-job-type-text">
                      Contract
                    </span>
                  </div>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-fourth-card-job-id">
                    Job ID# 76534526
                  </p>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-fourth-card-job-description-text-field">
                    The Patient Care Technician is responsible for assisting
                    registered professional nurses, in the care of the patient.
                    He/she performs all of the essential generic job functions
                    as listed below.
                  </p>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-fourth-card-salary">
                    Salary: $40,000 - $60,000
                  </p>
                  <div className="search-candidates-home-grid-view-page__tablet-fourth-card-location-split-fee-container">
                    <img
                      className="search-candidates-home-grid-view-page__tablet-fourth-card-featured-jobs-job-pin-icon"
                      src={JobPinIcon}
                      alt="Job Pin Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-fourth-card-featured-jobs-location-text">
                      CA
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__tablet-fourth-card-location-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-fourth-card-location-jobs-placements-split-fee-text">
                      Split Fee: $$$
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-fourth-card-bottom-button-container">
                    <button className="search-candidates-home-grid-view-page__tablet-featured-jobs-fourth-card-view-my-matches-button">
                      View My Matches
                    </button>
                    <button className="search-candidates-home-grid-view-page__tablet-featured-jobs-fourth-card-post-candidate-button">
                      Post Candidate
                    </button>
                  </div>
                </div>
              </div>
              <div className="search-candidates-home-grid-view-page__tablet-card-container-3">
                <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-fifth-card">
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-fifth-card-new-opening-header-container">
                    <img
                      className="search-candidates-home-grid-view-page__tablet-hot-flame-icon"
                      src={HotFlameIcon}
                      alt="Fireworks White Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-hot-opening-text">
                      HOT OPENING
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-fifth-card-header-rating-container">
                    <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-fifth-card-header-text">
                      Staffing Agency 2
                    </p>
                    <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-fifth-card-rating-container">
                      <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-fifth-card-rating-text">
                        4.2
                      </span>
                      <img
                        className="search-candidates-home-grid-view-page__tablet-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                    </div>
                    <img
                      className="search-candidates-home-grid-view-page__tablet-featured-jobs-fifth-action-icon"
                      src={ActionIcon}
                      alt="Action Icon"
                    />
                  </div>
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-fifth-card-job-description-container">
                    <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-fifth-card-job-description">
                      RN
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__tablet-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-fifth-card-job-type-text">
                      Part Time
                    </span>
                  </div>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-fifth-card-job-id">
                    Job ID# 76534526
                  </p>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-fifth-card-job-description-text-field">
                    The Patient Care Technician is responsible for assisting
                    registered professional nurses, in the care of the patient.
                    He/she performs all of the essential generic job functions
                    as listed below.
                  </p>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-fifth-card-salary">
                    Salary: $40,000 - $60,000
                  </p>
                  <div className="search-candidates-home-grid-view-page__tablet-fifth-card-location-split-fee-container">
                    <img
                      className="search-candidates-home-grid-view-page__tablet-fifth-card-featured-jobs-job-pin-icon"
                      src={JobPinIcon}
                      alt="Job Pin Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-fifth-card-featured-jobs-location-text">
                      New York, NY
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__tablet-fifth-card-location-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-fifth-card-location-jobs-placements-split-fee-text">
                      Split Fee: $$$
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-fifth-card-bottom-button-container">
                    <button className="search-candidates-home-grid-view-page__tablet-featured-jobs-fifth-card-view-my-matches-button">
                      View My Matches
                    </button>
                    <button className="search-candidates-home-grid-view-page__tablet-featured-jobs-fifth-card-post-candidate-button">
                      Post Candidate
                    </button>
                  </div>
                </div>
                <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card">
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card-new-opening-header-container">
                    <img
                      className="search-candidates-home-grid-view-page__tablet-fireworks-white-icon"
                      src={FireworksWhiteIcon}
                      alt="Fireworks White Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-new-opening-text">
                      NEW OPENING
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card-header-rating-container">
                    <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card-header-text">
                      ABC Staffing Inc.
                    </p>
                    <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card-rating-container">
                      <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-rating-text">
                        4.5
                      </span>
                      <img
                        className="search-candidates-home-grid-view-page__tablet-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                    </div>
                    <img
                      onClick={handleSearchJobs}
                      className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card-action-icon"
                      src={ActionIcon}
                      alt="Action Icon"
                    />
                  </div>
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card-job-description-container">
                    <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card-job-description">
                      CT-Tech
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__tablet-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card-job-type-text">
                      Contract
                    </span>
                  </div>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card-job-id">
                    Job ID# 76534526
                  </p>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card-job-description-text-field">
                    The Patient Care Technician is responsible for assisting
                    registered professional nurses, in the care of the patient.
                    He/she performs all of the essential generic job functions
                    as listed below.
                  </p>
                  <p className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card-salary">
                    Salary: $40,000 - $60,000
                  </p>
                  <div className="search-candidates-home-grid-view-page__tablet-location-split-fee-container">
                    <img
                      className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card-job-pin-icon"
                      src={JobPinIcon}
                      alt="Job Pin Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card-location-text">
                      Boston, MA
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__tablet-location-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__tablet-location-jobs-placements-split-fee-text">
                      Split Fee: $$$
                    </span>
                  </div>
                  <img
                    className="search-candidates-home-grid-view-page__tablet-job-search-notification-one-icon"
                    src={JobSearchNotification1Icon}
                    alt="Job Search Notification 1 Icon"
                  />
                  <div className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card-bottom-button-container">
                    <button className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card-view-my-matches-button">
                      View My Matches
                    </button>
                    <button className="search-candidates-home-grid-view-page__tablet-featured-jobs-sixth-card-post-candidate-button">
                      Post Candidate
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-candidates-home-grid-view-page__tablet-page-navigation-container">
              <img
                className="search-candidates-home-grid-view-page__tablet-page-arrow-left-icon"
                src={PageArrowLeftIcon}
                alt="Page Arrow Left Icon"
              />
              <img
                className="search-candidates-home-grid-view-page__tablet-page-number-blue-1-icon"
                src={PageNumberBlue1Icon}
                alt="Page Number Blue 1 Icon"
              />
              <img
                className="search-candidates-home-grid-view-page__tablet-page-number-gray-2-icon"
                src={PageNumberGray2Icon}
                alt="Page Number Gray 2 Icon"
              />
              <img
                className="search-candidates-home-grid-view-page__tablet-page-number-gray-3-icon"
                src={PageNumberGray3Icon}
                alt="Page Number Gray 3 Icon"
              />
              <img
                className="search-candidates-home-grid-view-page__tablet-page-arrow-right-icon"
                src={PageArrowRightIcon}
                alt="Page Arrow Right Icon"
              />
            </div>
          </div>
          <div className="search-candidates-home-grid-view-page__desktop-container">
            <div className="search-candidates-home-grid-view-page__desktop-header-container">
              <div className="search-candidates-home-grid-view-page__desktop-header-left-container">
                <p className="search-candidates-home-grid-view-page__desktop-header-text">
                  Search Jobs
                </p>
                <img
                  className="search-candidates-home-grid-view-page__desktop-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
                <input
                  className="search-candidates-home-grid-view-page__desktop-key-word-search-input"
                  type="text"
                  placeholder="Keyword Search"
                />
                <select
                  className="search-candidates-home-grid-view-page__desktop-location-select"
                  name="desktop-location"
                  id="desktop-location"
                >
                  <option value="" disabled selected>
                    Location
                  </option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>
                <select
                  className="search-candidates-home-grid-view-page__desktop-industry-select"
                  name="desktop-industry"
                  id="desktop-industry"
                >
                  <option value="" disabled selected>
                    Industry
                  </option>
                  <option value="aerospace-defense">
                    Aerospace and Defense
                  </option>
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
                  <option value="power-and-utilities">
                    Power and Utilities
                  </option>
                  <option value="telecommunications">Telecommunications</option>
                </select>
                <select
                  className="search-candidates-home-grid-view-page__desktop-job-type-select"
                  name="desktop-job-type"
                  id="desktop-job-type"
                >
                  <option value="" disabled selected>
                    Job Type
                  </option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                </select>
                <select
                  className="search-candidates-home-grid-view-page__desktop-agency-select"
                  name="desktop-agency"
                  id="desktop-agency"
                >
                  <option value="" disabled selected>
                    Agency
                  </option>
                  <option value="ABC Staffing Inc.">ABC Staffing Inc.</option>
                  <option value="DEF Agency">DEF Agency</option>
                  <option value="GHI Staffing Agency">
                    GHI Staffing Agency
                  </option>
                </select>
                <select
                  className="search-candidates-home-grid-view-page__desktop-other-filter-select"
                  name="desktop-other-filter"
                  id="desktop-other-filter"
                >
                  <option value="" disabled selected>
                    Other Filter
                  </option>
                </select>
                <button className="search-candidates-home-grid-view-page__desktop-clear-filters-button">
                  Clear Filters
                </button>
              </div>
              <div className="search-candidates-home-grid-view-page__desktop-header-right-container">
                <img
                  className="search-jobs-home-grid-view-page__desktop-jobs-search-map-placeholder-icon"
                  src={JobsSearchMapPlaceholderIcon}
                  alt="Jobs Search Map Placeholder Icon"
                />
                <div className="search-candidates-home-grid-view-page__desktop-view-searches-list-view-show-hidden-container">
                  <button className="search-candidates-home-grid-view-page__desktop-view-searches-button">
                    View Searches
                  </button>
                  <button className="search-candidates-home-grid-view-page__desktop-list-view-button">
                    List View
                  </button>
                  <button className="search-candidates-home-grid-view-page__desktop-show-hidden-button">
                    Show Hidden
                  </button>
                </div>
              </div>
            </div>
            <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-section">
              <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-header">
                Today's Featured Jobs
              </p>
              <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-card-top-section">
                <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card">
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card-new-opening-header-container">
                    <img
                      className="search-candidates-home-grid-view-page__desktop-fireworks-white-icon"
                      src={FireworksWhiteIcon}
                      alt="Fireworks White Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-new-opening-text">
                      NEW OPENING
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card-header-rating-container">
                    <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card-header-text">
                      ABC Staffing Inc.
                    </p>
                    <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card-rating-container">
                      <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-rating-text">
                        4.5
                      </span>
                      <img
                        className="search-candidates-home-grid-view-page__desktop-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                    </div>
                    <img
                      onClick={handleSearchJobs}
                      className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card-action-icon"
                      src={ActionIcon}
                      alt="Action Icon"
                    />
                  </div>
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card-job-description-container">
                    <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card-job-description">
                      CT-Tech
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__desktop-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card-job-type-text">
                      Contract
                    </span>
                  </div>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card-job-id">
                    Job ID# 76534526
                  </p>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card-job-description-text-field">
                    The Patient Care Technician is responsible for assisting
                    registered professional nurses, in the care of the patient.
                    He/she performs all of the essential generic job functions
                    as listed below.
                  </p>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card-salary">
                    Salary: $40,000 - $60,000
                  </p>
                  <div className="search-candidates-home-grid-view-page__desktop-location-split-fee-container">
                    <img
                      className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card-job-pin-icon"
                      src={JobPinIcon}
                      alt="Job Pin Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card-location-text">
                      Boston, MA
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__desktop-location-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-location-jobs-placements-split-fee-text">
                      Split Fee: $$$
                    </span>
                  </div>
                  <img
                    className="search-candidates-home-grid-view-page__desktop-job-search-notification-four-icon"
                    src={JobSearchNotification4Icon}
                    alt="Job Search Notification 4 Icon"
                  />
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card-bottom-button-container">
                    <button className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card-view-my-matches-button">
                      View My Matches
                    </button>
                    <button className="search-candidates-home-grid-view-page__desktop-featured-jobs-first-card-post-candidate-button">
                      Post Candidate
                    </button>
                  </div>
                </div>
                <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-second-card">
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-second-card-new-opening-header-container">
                    <img
                      className="search-candidates-home-grid-view-page__desktop-hot-flame-icon"
                      src={HotFlameIcon}
                      alt="Fireworks White Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-hot-opening-text">
                      HOT OPENING
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-second-card-header-rating-container">
                    <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-second-card-header-text">
                      Hollingsworth Agency
                    </p>
                    <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-second-card-rating-container">
                      <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-second-card-rating-text">
                        4.2
                      </span>
                      <img
                        className="search-candidates-home-grid-view-page__desktop-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                    </div>
                    <img
                      className="search-candidates-home-grid-view-page__desktop-featured-jobs-second-action-icon"
                      src={ActionIcon}
                      alt="Action Icon"
                    />
                  </div>
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-second-card-job-description-container">
                    <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-second-card-job-description">
                      RN
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__desktop-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-second-card-job-type-text">
                      Contract
                    </span>
                  </div>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-second-card-job-id">
                    Job ID# 76534526
                  </p>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-second-card-job-description-text-field">
                    The Patient Care Technician is responsible for assisting
                    registered professional nurses, in the care of the patient.
                    He/she performs all of the essential generic job functions
                    as listed below.
                  </p>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-second-card-salary">
                    Salary: $40,000 - $60,000
                  </p>
                  <div className="search-candidates-home-grid-view-page__desktop-second-card-location-split-fee-container">
                    <img
                      className="search-candidates-home-grid-view-page__desktop-second-card-featured-jobs-job-pin-icon"
                      src={JobPinIcon}
                      alt="Job Pin Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-second-card-featured-jobs-location-text">
                      CA
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__desktop-second-card-location-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-second-card-location-jobs-placements-split-fee-text">
                      Split Fee: $$$
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-second-card-bottom-button-container">
                    <button className="search-candidates-home-grid-view-page__desktop-featured-jobs-second-card-view-my-matches-button">
                      View My Matches
                    </button>
                    <button className="search-candidates-home-grid-view-page__desktop-featured-jobs-second-card-post-candidate-button">
                      Post Candidate
                    </button>
                  </div>
                </div>
                <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-third-card">
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-third-card-new-opening-header-container">
                    <img
                      className="search-candidates-home-grid-view-page__desktop-hot-flame-icon"
                      src={HotFlameIcon}
                      alt="Fireworks White Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-hot-opening-text">
                      HOT OPENING
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-third-card-header-rating-container">
                    <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-third-card-header-text">
                      Staffing Agency 2
                    </p>
                    <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-third-card-rating-container">
                      <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-third-card-rating-text">
                        4.2
                      </span>
                      <img
                        className="search-candidates-home-grid-view-page__desktop-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                    </div>
                    <img
                      className="search-candidates-home-grid-view-page__desktop-featured-jobs-third-action-icon"
                      src={ActionIcon}
                      alt="Action Icon"
                    />
                  </div>
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-third-card-job-description-container">
                    <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-third-card-job-description">
                      RN
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__desktop-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-third-card-job-type-text">
                      Part Time
                    </span>
                  </div>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-third-card-job-id">
                    Job ID# 76534526
                  </p>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-third-card-job-description-text-field">
                    The Patient Care Technician is responsible for assisting
                    registered professional nurses, in the care of the patient.
                    He/she performs all of the essential generic job functions
                    as listed below.
                  </p>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-third-card-salary">
                    Salary: $40,000 - $60,000
                  </p>
                  <div className="search-candidates-home-grid-view-page__desktop-third-card-location-split-fee-container">
                    <img
                      className="search-candidates-home-grid-view-page__desktop-third-card-featured-jobs-job-pin-icon"
                      src={JobPinIcon}
                      alt="Job Pin Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-third-card-featured-jobs-location-text">
                      New York, NY
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__desktop-third-card-location-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-third-card-location-jobs-placements-split-fee-text">
                      Split Fee: $$$
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-third-card-bottom-button-container">
                    <button className="search-candidates-home-grid-view-page__desktop-featured-jobs-third-card-view-my-matches-button">
                      View My Matches
                    </button>
                    <button className="search-candidates-home-grid-view-page__desktop-featured-jobs-third-card-post-candidate-button">
                      Post Candidate
                    </button>
                  </div>
                </div>
              </div>
              <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-card-bottom-section">
                <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-fourth-card">
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-fourth-card-new-opening-header-container">
                    <img
                      className="search-candidates-home-grid-view-page__desktop-hot-flame-icon"
                      src={HotFlameIcon}
                      alt="Fireworks White Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-hot-opening-text">
                      HOT OPENING
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-fourth-card-header-rating-container">
                    <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-fourth-card-header-text">
                      Hollingsworth Agency
                    </p>
                    <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-fourth-card-rating-container">
                      <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-fourth-card-rating-text">
                        4.2
                      </span>
                      <img
                        className="search-candidates-home-grid-view-page__desktop-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                    </div>
                    <img
                      className="search-candidates-home-grid-view-page__desktop-featured-jobs-fourth-action-icon"
                      src={ActionIcon}
                      alt="Action Icon"
                    />
                  </div>
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-fourth-card-job-description-container">
                    <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-fourth-card-job-description">
                      RN
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__desktop-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-fourth-card-job-type-text">
                      Contract
                    </span>
                  </div>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-fourth-card-job-id">
                    Job ID# 76534526
                  </p>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-fourth-card-job-description-text-field">
                    The Patient Care Technician is responsible for assisting
                    registered professional nurses, in the care of the patient.
                    He/she performs all of the essential generic job functions
                    as listed below.
                  </p>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-fourth-card-salary">
                    Salary: $40,000 - $60,000
                  </p>
                  <div className="search-candidates-home-grid-view-page__desktop-fourth-card-location-split-fee-container">
                    <img
                      className="search-candidates-home-grid-view-page__desktop-fourth-card-featured-jobs-job-pin-icon"
                      src={JobPinIcon}
                      alt="Job Pin Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-fourth-card-featured-jobs-location-text">
                      CA
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__desktop-fourth-card-location-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-fourth-card-location-jobs-placements-split-fee-text">
                      Split Fee: $$$
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-fourth-card-bottom-button-container">
                    <button className="search-candidates-home-grid-view-page__desktop-featured-jobs-fourth-card-view-my-matches-button">
                      View My Matches
                    </button>
                    <button className="search-candidates-home-grid-view-page__desktop-featured-jobs-fourth-card-post-candidate-button">
                      Post Candidate
                    </button>
                  </div>
                </div>
                <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-fifth-card">
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-fifth-card-new-opening-header-container">
                    <img
                      className="search-candidates-home-grid-view-page__desktop-hot-flame-icon"
                      src={HotFlameIcon}
                      alt="Fireworks White Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-hot-opening-text">
                      HOT OPENING
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-fifth-card-header-rating-container">
                    <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-fifth-card-header-text">
                      Staffing Agency 2
                    </p>
                    <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-fifth-card-rating-container">
                      <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-fifth-card-rating-text">
                        4.2
                      </span>
                      <img
                        className="search-candidates-home-grid-view-page__desktop-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                    </div>
                    <img
                      className="search-candidates-home-grid-view-page__desktop-featured-jobs-fifth-action-icon"
                      src={ActionIcon}
                      alt="Action Icon"
                    />
                  </div>
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-fifth-card-job-description-container">
                    <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-fifth-card-job-description">
                      RN
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__desktop-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-fifth-card-job-type-text">
                      Part Time
                    </span>
                  </div>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-fifth-card-job-id">
                    Job ID# 76534526
                  </p>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-fifth-card-job-description-text-field">
                    The Patient Care Technician is responsible for assisting
                    registered professional nurses, in the care of the patient.
                    He/she performs all of the essential generic job functions
                    as listed below.
                  </p>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-fifth-card-salary">
                    Salary: $40,000 - $60,000
                  </p>
                  <div className="search-candidates-home-grid-view-page__desktop-fifth-card-location-split-fee-container">
                    <img
                      className="search-candidates-home-grid-view-page__desktop-fifth-card-featured-jobs-job-pin-icon"
                      src={JobPinIcon}
                      alt="Job Pin Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-fifth-card-featured-jobs-location-text">
                      New York, NY
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__desktop-fifth-card-location-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-fifth-card-location-jobs-placements-split-fee-text">
                      Split Fee: $$$
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-fifth-card-bottom-button-container">
                    <button className="search-candidates-home-grid-view-page__desktop-featured-jobs-fifth-card-view-my-matches-button">
                      View My Matches
                    </button>
                    <button className="search-candidates-home-grid-view-page__desktop-featured-jobs-fifth-card-post-candidate-button">
                      Post Candidate
                    </button>
                  </div>
                </div>
                <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card">
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card-new-opening-header-container">
                    <img
                      className="search-candidates-home-grid-view-page__desktop-fireworks-white-icon"
                      src={FireworksWhiteIcon}
                      alt="Fireworks White Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-new-opening-text">
                      NEW OPENING
                    </span>
                  </div>
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card-header-rating-container">
                    <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card-header-text">
                      ABC Staffing Inc.
                    </p>
                    <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card-rating-container">
                      <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-rating-text">
                        4.5
                      </span>
                      <img
                        className="search-candidates-home-grid-view-page__desktop-rating-star-icon"
                        src={RatingStarIcon}
                        alt="Rating Star Icon"
                      />
                    </div>
                    <img
                      onClick={handleSearchJobs}
                      className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card-action-icon"
                      src={ActionIcon}
                      alt="Action Icon"
                    />
                  </div>
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card-job-description-container">
                    <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card-job-description">
                      CT-Tech
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__desktop-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card-job-type-text">
                      Contract
                    </span>
                  </div>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card-job-id">
                    Job ID# 76534526
                  </p>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card-job-description-text-field">
                    The Patient Care Technician is responsible for assisting
                    registered professional nurses, in the care of the patient.
                    He/she performs all of the essential generic job functions
                    as listed below.
                  </p>
                  <p className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card-salary">
                    Salary: $40,000 - $60,000
                  </p>
                  <div className="search-candidates-home-grid-view-page__desktop-location-split-fee-container">
                    <img
                      className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card-job-pin-icon"
                      src={JobPinIcon}
                      alt="Job Pin Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card-location-text">
                      Boston, MA
                    </span>
                    <img
                      className="search-candidates-home-grid-view-page__desktop-location-jobs-placements-bullet-icon"
                      src={JobsPlacementsBulletIcon}
                      alt="Jobs Placements Bullet Icon"
                    />
                    <span className="search-candidates-home-grid-view-page__desktop-location-jobs-placements-split-fee-text">
                      Split Fee: $$$
                    </span>
                  </div>
                  <img
                    className="search-candidates-home-grid-view-page__desktop-job-search-notification-one-icon"
                    src={JobSearchNotification1Icon}
                    alt="Job Search Notification 1 Icon"
                  />
                  <div className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card-bottom-button-container">
                    <button className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card-view-my-matches-button">
                      View My Matches
                    </button>
                    <button className="search-candidates-home-grid-view-page__desktop-featured-jobs-sixth-card-post-candidate-button">
                      Post Candidate
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-candidates-home-grid-view-page__desktop-navigation-container">
              <img
                className="search-candidates-home-grid-view-page__desktop-page-arrow-left-icon"
                src={PageArrowLeftIcon}
                alt="Page Arrow Left Icon"
              />
              <img
                className="search-candidates-home-grid-view-page__desktop-page-number-blue-1-icon"
                src={PageNumberBlue1Icon}
                alt="Page Number Blue 1 Icon"
              />
              <img
                className="search-candidates-home-grid-view-page__desktop-page-number-gray-2-icon"
                src={PageNumberGray2Icon}
                alt="Page Number Gray 2 Icon"
              />
              <img
                className="search-candidates-home-grid-view-page__desktop-page-number-gray-3-icon"
                src={PageNumberGray3Icon}
                alt="Page Number Gray 3 Icon"
              />
              <img
                className="search-candidates-home-grid-view-page__desktop-page-arrow-right-icon"
                src={PageArrowRightIcon}
                alt="Page Arrow Right Icon"
              />
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && <ModalSearchJobs closeModal={closeModal} />}
    </div>
  );
}
