import React from "react";
import "./SearchCandidatesListViewPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import CandidatesSidePanel from "../../components/CandidatesSidePanel/CandidatesSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import JobsSearchMapPlaceholderIcon from "../../assets/icons/JobSearchMapPlaceholder.svg";
import { Link } from "react-router-dom";

export default function SearchCandidatesListViewPage() {
  return (
    <div className="search-candidates-list-view-page">
      <HeaderWithProfilePic />
      <div className="search-candidates-list-view-page__main-container">
        <CandidatesSidePanel />
        <div className="search-candidates-list-view-page__tablet-container">
          <div className="search-candidates-list-view-page__tablet-header-container">
            <p className="search-candidates-list-view-page__tablet-header-text">
              Search Candidates
            </p>
            <button className="search-candidates-list-view-page__tablet-clear-filters-button">
              Clear Filters
            </button>
          </div>
          <img
            className="search-candidates-list-view-page__tablet-search-icon"
            src={SearchIcon}
            alt="Search Icon"
          />
          <div className="search-candidates-list-view-page__tablet-keyword-search-other-filter-container">
            <input
              className="search-candidates-list-view-page__tablet-keyword-search-input"
              type="text"
              placeholder="Keyword Search"
            />
            <select
              className="search-candidates-list-view-page__tablet-other-filter-select"
              name="tablet-other-filter"
              id="tablet-other-filter"
            >
              <option value="" disabled selected>
                Other Filter
              </option>
            </select>
          </div>
          <div className="search-candidates-list-view-page__tablet-location-industry-job-type-agency-container">
            <select
              className="search-candidates-list-view-page__tablet-location-select"
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
              className="search-candidates-list-view-page__tablet-industry-select"
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
              className="search-candidates-list-view-page__tablet-job-type-select"
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
              className="search-candidates-list-view-page__tablet-agency-select"
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
            className="search-candidates-list-view-page__tablet-jobs-search-map-placeholder-icon"
            src={JobsSearchMapPlaceholderIcon}
            alt="Jobs Search Map Placeholder Icon"
          />
          <div className="search-candidates-list-view-page__tablet-view-searches-list-view-show-hidden-container">
            <Link to="/search-candidates-view-searches-page">
              <button className="search-candidates-list-view-page__tablet-view-searches-button">
                View Searches
              </button>
            </Link>
            <button className="search-candidates-list-view-page__tablet-list-view-button">
              List View
            </button>
            <button className="search-candidates-list-view-page__tablet-show-hidden-button">
              Show Hidden
            </button>
          </div>
          <table className="search-candidates-list-view-page__tablet-search-candidates-table">
            <thead className="search-candidates-list-view-page__tablet-search-candidates-header-row">
              <tr className="search-candidates-list-view-page__tablet-search-candidates-header-row-1">
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}
