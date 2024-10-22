import React from "react";
import "./SearchCandidatesListViewPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import CandidatesSidePanel from "../../components/CandidatesSidePanel/CandidatesSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import JobsSearchMapPlaceholderIcon from "../../assets/icons/JobSearchMapPlaceholder.svg";
import { Link } from "react-router-dom";
import PageArrowLeftIcon from "../../assets/icons/PageArrowLeft.svg";
import PageNumberPeach1Icon from "../../assets/icons/PageNumberPeach1.svg";
import PageNumberGray2Icon from "../../assets/icons/PageNumberGray2.svg";
import PageNumberGray3Icon from "../../assets/icons/PageNumberGray3.svg";
import PageArrowRightIcon from "../../assets/icons/PageArrowRight.svg";

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
                <th className="search-candidates-list-view-page__tablet-search-candidates-staffing-agency-header-column">
                  Staffing Agency
                </th>
                <th className="search-candidates-list-view-page__tablet-search-candidates-id-header-column">
                  ID
                </th>
                <th className="search-candidates-list-view-page__tablet-search-candidates-industry-header-column">
                  Industry
                </th>
                <th className="search-candidates-list-view-page__tablet-search-candidates-job-title-header-column">
                  Job Title
                </th>
                <th className="search-candidates-list-view-page__tablet-search-candidates-job-type-header-column">
                  Job Type
                </th>
                <th className="search-candidates-list-view-page__tablet-search-candidates-availability-date-header-column">
                  Availability Date
                </th>
                <th className="search-candidates-list-view-page__tablet-search-candidates-posted-date-header-column">
                  Posted Date
                </th>
                <th className="search-candidates-list-view-page__tablet-search-candidates-action-header-column">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="search-candidates-list-view-page__tablet-search-candidates-body-section">
              <tr className="search-candidates-list-view-page__tablet-search-candidates-row-1">
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-staffing-agency">
                  HumanRe Agency
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-id">
                  87634529
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-industry">
                  Manufacturing
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-job-title">
                  Operator
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-job-type">
                  Full Time
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-availability-date">
                  7/17/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-posted-date">
                  7/17/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-action">
                  <button className="search-candidates-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-list-view-page__tablet-post-job-button">
                    Post Job
                  </button>
                </td>
              </tr>
              <tr className="search-candidates-list-view-page__tablet-search-candidates-row-2">
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-staffing-agency">
                  Acme Agency
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-id">
                  83927565
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-industry">
                  Healthcare
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-job-title">
                  CT-Tech
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-job-type">
                  Contract
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-availability-date">
                  7/10/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-posted-date">
                  7/10/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-action">
                  <button className="search-candidates-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-list-view-page__tablet-post-job-button">
                    Post Job
                  </button>
                </td>
              </tr>
              <tr className="search-candidates-list-view-page__tablet-search-candidates-row-1">
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-staffing-agency">
                  HumanRe Agency
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-id">
                  87634529
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-industry">
                  Manufacturing
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-job-title">
                  Operator
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-job-type">
                  Full Time
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-availability-date">
                  7/17/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-posted-date">
                  7/17/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-action">
                  <button className="search-candidates-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-list-view-page__tablet-post-job-button">
                    Post Job
                  </button>
                </td>
              </tr>
              <tr className="search-candidates-list-view-page__tablet-search-candidates-row-2">
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-staffing-agency">
                  Acme Agency
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-id">
                  83927565
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-industry">
                  Healthcare
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-job-title">
                  CT-Tech
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-job-type">
                  Contract
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-availability-date">
                  7/10/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-posted-date">
                  7/10/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-action">
                  <button className="search-candidates-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-list-view-page__tablet-post-job-button">
                    Post Job
                  </button>
                </td>
              </tr>
              <tr className="search-candidates-list-view-page__tablet-search-candidates-row-1">
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-staffing-agency">
                  HumanRe Agency
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-id">
                  87634529
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-industry">
                  Manufacturing
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-job-title">
                  Operator
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-job-type">
                  Full Time
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-availability-date">
                  7/17/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-posted-date">
                  7/17/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-action">
                  <button className="search-candidates-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-list-view-page__tablet-post-job-button">
                    Post Job
                  </button>
                </td>
              </tr>
              <tr className="search-candidates-list-view-page__tablet-search-candidates-row-2">
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-staffing-agency">
                  Acme Agency
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-id">
                  83927565
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-industry">
                  Healthcare
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-job-title">
                  CT-Tech
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-job-type">
                  Contract
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-availability-date">
                  7/10/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-posted-date">
                  7/10/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-action">
                  <button className="search-candidates-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-list-view-page__tablet-post-job-button">
                    Post Job
                  </button>
                </td>
              </tr>
              <tr className="search-candidates-list-view-page__tablet-search-candidates-row-1">
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-staffing-agency">
                  HumanRe Agency
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-id">
                  87634529
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-industry">
                  Manufacturing
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-job-title">
                  Operator
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-job-type">
                  Full Time
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-availability-date">
                  7/17/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-posted-date">
                  7/17/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-action">
                  <button className="search-candidates-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-list-view-page__tablet-post-job-button">
                    Post Job
                  </button>
                </td>
              </tr>
              <tr className="search-candidates-list-view-page__tablet-search-candidates-row-2">
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-staffing-agency">
                  Acme Agency
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-id">
                  83927565
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-industry">
                  Healthcare
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-job-title">
                  CT-Tech
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-job-type">
                  Contract
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-availability-date">
                  7/10/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-posted-date">
                  7/10/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-action">
                  <button className="search-candidates-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-list-view-page__tablet-post-job-button">
                    Post Job
                  </button>
                </td>
              </tr>
              <tr className="search-candidates-list-view-page__tablet-search-candidates-row-1">
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-staffing-agency">
                  HumanRe Agency
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-id">
                  87634529
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-industry">
                  Manufacturing
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-job-title">
                  Operator
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-job-type">
                  Full Time
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-availability-date">
                  7/17/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-posted-date">
                  7/17/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-action">
                  <button className="search-candidates-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-list-view-page__tablet-post-job-button">
                    Post Job
                  </button>
                </td>
              </tr>
              <tr className="search-candidates-list-view-page__tablet-search-candidates-row-2">
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-staffing-agency">
                  Acme Agency
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-id">
                  83927565
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-industry">
                  Healthcare
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-job-title">
                  CT-Tech
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-job-type">
                  Contract
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-availability-date">
                  7/10/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-posted-date">
                  7/10/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-action">
                  <button className="search-candidates-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-list-view-page__tablet-post-job-button">
                    Post Job
                  </button>
                </td>
              </tr>
              <tr className="search-candidates-list-view-page__tablet-search-candidates-row-1">
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-staffing-agency">
                  HumanRe Agency
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-id">
                  87634529
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-industry">
                  Manufacturing
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-job-title">
                  Operator
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-job-type">
                  Full Time
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-availability-date">
                  7/17/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-posted-date">
                  7/17/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-1-action">
                  <button className="search-candidates-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-list-view-page__tablet-post-job-button">
                    Post Job
                  </button>
                </td>
              </tr>
              <tr className="search-candidates-list-view-page__tablet-search-candidates-row-2">
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-staffing-agency">
                  Acme Agency
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-id">
                  83927565
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-industry">
                  Healthcare
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-job-title">
                  CT-Tech
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-job-type">
                  Contract
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-availability-date">
                  7/10/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-posted-date">
                  7/10/24
                </td>
                <td className="search-candidates-list-view-page__tablet-search-candidates-row-2-action">
                  <button className="search-candidates-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>
                  <button className="search-candidates-list-view-page__tablet-post-job-button">
                    Post Job
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="search-candidates-list-view-page__tablet-navigation-container">
            <img
              className="search-candidates-list-view-page__tablet-page-arrow-left-icon"
              src={PageArrowLeftIcon}
              alt="Page Arrow Left Icon"
            />
            <img
              className="search-candidates-list-view-page__tablet-page-number-peach-1-icon"
              src={PageNumberPeach1Icon}
              alt="Page Number Peach 1 Icon"
            />
            <img
              className="search-candidates-list-view-page__tablet-page-number-gray-2-icon"
              src={PageNumberGray2Icon}
              alt="Page Number Gray 2 Icon"
            />
            <img
              className="search-candidates-list-view-page__tablet-page-number-gray-3-icon"
              src={PageNumberGray3Icon}
              alt="Page Number Gray 3 Icon"
            />
            <img
              className="search-candidates-list-view-page__tablet-page-arrow-right-icon"
              src={PageArrowRightIcon}
              alt="Page Arrow Right Icon"
            />
          </div>
        </div>
        <div className="search-candidates-list-view-page__desktop-container">
          <div className="search-candidates-list-view-page__desktop-header-container">
            <div className="search-candidates-list-view-page__desktop-header-left-container">
              <p className="search-candidates-list-view-page__desktop-header-text">
                Search Candidates
              </p>
              <img
                className="search-candidates-list-view-page__desktop-search-icon"
                src={SearchIcon}
                alt="Search Icon"
              />
              <input
                className="search-candidates-list-view-page__desktop-key-word-search-input"
                type="text"
                placeholder="Keyword Search"
              />
              <select
                className="search-candidates-list-view-page__desktop-location-select"
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
                className="search-candidates-list-view-page__desktop-industry-select"
                name="desktop-industry"
                id="desktop-industry"
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
                className="search-candidates-list-view-page__desktop-job-type-select"
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
                className="search-candidates-list-view-page__desktop-agency-select"
                name="desktop-agency"
                id="desktop-agency"
              >
                <option value="" disabled selected>
                  Agency
                </option>
                <option value="ABC Staffing Inc.">ABC Staffing Inc.</option>
                <option value="DEF Agency">DEF Agency</option>
                <option value="GHI Staffing Agency">GHI Staffing Agency</option>
              </select>
              <select
                className="search-candidates-list-view-page__desktop-other-filter-select"
                name="desktop-other-filter"
                id="desktop-other-filter"
              >
                <option value="" disabled selected>
                  Other Filter
                </option>
              </select>
              <button className="search-candidates-list-view-page__desktop-clear-filters-button">
                Clear Filters
              </button>
            </div>
            <div className="search-candidates-list-view-page__desktop-header-right-container">
              <img
                className="search-candidates-list-view-page__desktop-jobs-search-map-placeholder-icon"
                src={JobsSearchMapPlaceholderIcon}
                alt="Jobs Search Map Placeholder Icon"
              />
              <div className="search-candidates-list-view-page__desktop-view-searches-list-view-show-hidden-container">
                <Link to="/search-candidates-view-searches-page">
                  <button className="search-candidates-list-view-page__desktop-view-searches-button">
                    View Searches
                  </button>
                </Link>
                <button className="search-candidates-list-view-page__desktop-list-view-button">
                  List View
                </button>
                <button className="search-candidates-list-view-page__desktop-show-hidden-button">
                  Show Hidden
                </button>
              </div>
            </div>
          </div>
          <table className="search-candidates-list-view-page__desktop-search-candidates-table">
            <thead className="search-candidates-list-view-page__desktop-header-row">
              <tr className="search-candidates-list-view-page__desktop-header-row-1">
                <th className="search-candidates-list-view-page__desktop-header-staffing-agency-column">
                  Staffing Agency
                </th>
                <th className="search-candidates-list-view-page__desktop-header-id-column">
                  ID
                </th>
                <th className="search-candidates-list-view-page__desktop-header-industry-column">
                  Industry
                </th>
                <th className="search-candidates-list-view-page__desktop-header-candidate-title-column">
                  Candidate Title
                </th>
                <th className="search-candidates-list-view-page__desktop-header-job-type-column">
                  Job Type
                </th>
                <th className="search-candidates-list-view-page__desktop-header-availability-date-column">
                  Availability Date
                </th>
                <th className="search-candidates-list-view-page__desktop-header-posted-date-column">
                  Posted Date
                </th>
                <th className="search-candidates-list-view-page__desktop-header-action-column">
                  Action
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}
