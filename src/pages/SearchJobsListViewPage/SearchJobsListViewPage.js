import React from "react";
import "./SearchJobsListViewPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import JobsSidePanel from "../../components/JobsSidePanel/JobsSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import JobSearchMapPlaceholderIcon from "../../assets/icons/JobSearchMapPlaceholder.svg";
import ScrollDownArrowWhiteIcon from "../../assets/icons/ScrollDownArrowWhite.svg";
import WhiteVerticalSpacerIcon from "../../assets/icons/WhiteVerticalSpacer.svg";
import PageArrowLeftIcon from "../../assets/icons/PageArrowLeft.svg";
import PageNumberBlue1Icon from "../../assets/icons/PageNumberBlue1.svg";
import PageNumberGray2Icon from "../../assets/icons/PageNumberGray2.svg";
import PageNumberGray3Icon from "../../assets/icons/PageNumberGray3.svg";
import PageArrowRightIcon from "../../assets/icons/PageArrowRight.svg";

export default function SearchJobsListViewPage() {
  return (
    <div className="search-jobs-list-view-page">
      <HeaderWithProfilePic />
      <div className="search-jobs-list-view-page__main-container">
        <JobsSidePanel />
        <div className="search-jobs-list-view-page__tablet-container">
          <div className="search-jobs-list-view-page__tablet-header-container">
            <p className="search-jobs-list-view-page__tablet-header-text">
              Search Jobs
            </p>
            <button className="search-jobs-list-view-page__tablet-clear-filters-button">
              Clear Filters
            </button>
          </div>
          <div className="search-jobs-list-view-page__tablet-key-word-search-other-container">
            <img
              className="search-jobs-list-view-page__tablet-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="search-jobs-list-view-page__tablet-key-word-search-input"
              type="text"
              placeholder="Keyword Search"
            />
            <select
              className="search-jobs-list-view-page__tablet-other-filter-select"
              name="tablet-other"
              id="tablet-other"
            >
              <option value="" disabled selected>
                Other Filter
              </option>
            </select>
          </div>
          <div className="search-jobs-list-view-page__tablet-location-industry-job-type-agency-container">
            <select
              className="search-jobs-list-view-page__tablet-location-select"
              name="tablet-location"
              id="tablet-location"
            >
              <option value="" disabled selected>
                Location
              </option>
              <option value="Alabama">AL</option>
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
              className="search-jobs-list-view-page__tablet-industry-select"
              name="tablet-industry"
              id="tablet-industry"
            >
              <option value="" disabled selected>
                Industry
              </option>
              <option value="aerospace-defense">Aerospace and Defense</option>
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
              className="search-jobs-list-view-page__tablet-job-type-select"
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
              className="search-jobs-list-view-page__tablet-agency-select"
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
            className="search-jobs-list-view-page__tablet-job-search-map-placeholder-icon"
            src={JobSearchMapPlaceholderIcon}
            alt="Job Search Map Placeholder Icon"
          />
          <div className="search-jobs-list-view-page__tablet-view-searches-grid-view-show-hidden-container">
            <button className="search-jobs-list-view-page__tablet-view-searches-button">
              View Searches
            </button>
            <button className="search-jobs-list-view-page__tablet-grid-view-button">
              Grid View
            </button>
            <button className="search-jobs-list-view-page__tablet-show-hidden-button">
              Show Hidden
            </button>
          </div>
          <table className="search-jobs-list-view-page__tablet-search-jobs-table">
            <thead className="search-jobs-list-view-page__tablet-search-jobs-header-section">
              <tr className="search-jobs-list-view-page__tablet-search-jobs-header-row">
                <th className="search-jobs-list-view-page__tablet-search-jobs-staffing-agency-header-row">
                  Staffing Agency{" "}
                  <img
                    className="search-jobs-list-view-page__tablet-scroll-down-arrow-white-icon"
                    src={ScrollDownArrowWhiteIcon}
                    alt="Scroll Down Arrow White Icon"
                  />
                </th>
                <th className="search-jobs-list-view-page__tablet-search-jobs-job-id-header-row">
                  Job ID{" "}
                  <img
                    className="search-jobs-list-view-page__tablet-scroll-down-arrow-white-icon"
                    src={ScrollDownArrowWhiteIcon}
                    alt="Scroll Down Arrow White Icon"
                  />
                </th>
                <th className="search-jobs-list-view-page__tablet-search-jobs-industry-header-row">
                  Industry{" "}
                  <img
                    className="search-jobs-list-view-page__tablet-scroll-down-arrow-white-icon"
                    src={ScrollDownArrowWhiteIcon}
                    alt="Scroll Down Arrow White Icon"
                  />
                </th>
                <th className="search-jobs-list-view-page__tablet-search-job-title-header-row">
                  Job Title{" "}
                  <img
                    className="search-jobs-list-view-page__tablet-scroll-down-arrow-white-icon"
                    src={ScrollDownArrowWhiteIcon}
                    alt="Scroll Down Arrow White Icon"
                  />
                </th>
                <th className="search-jobs-list-view-page__tablet-search-job-type-header-row">
                  Job Type{" "}
                  <img
                    className="search-jobs-list-view-page__tablet-scroll-down-arrow-white-icon"
                    src={ScrollDownArrowWhiteIcon}
                    alt="Scroll Down Arrow White Icon"
                  />
                </th>
                <th className="search-jobs-list-view-page__tablet-search-location-header-row">
                  Location{" "}
                  <img
                    className="search-jobs-list-view-page__tablet-scroll-down-arrow-white-icon"
                    src={ScrollDownArrowWhiteIcon}
                    alt="Scroll Down Arrow White Icon"
                  />
                </th>
                <th className="search-jobs-list-view-page__tablet-search-posted-date-header-row">
                  Posted Date{" "}
                  <img
                    className="search-jobs-list-view-page__tablet-scroll-down-arrow-white-icon"
                    src={ScrollDownArrowWhiteIcon}
                    alt="Scroll Down Arrow White Icon"
                  />
                </th>
                <th className="search-jobs-list-view-page__tablet-search-action-header-row">
                  Action{" "}
                  <img
                    className="search-jobs-list-view-page__tablet-scroll-down-arrow-white-icon"
                    src={ScrollDownArrowWhiteIcon}
                    alt="Scroll Down Arrow White Icon"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="search-jobs-list-view-page__tablet-search-job-table-row-1">
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-staffing-agency">
                  HumanRe Agency
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-job-id">
                  87634529
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-manufacturing">
                  Manufacturing
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-operator">
                  Operator
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-full-time">
                  Full Time
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-location">
                  Austin, TX
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-posted-date">
                  7/17/24
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-action">
                  <button className="search-jobs-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>{" "}
                  <button className="search-jobs-list-view-page__tablet-post-candidate-button">
                    Post Candidate
                  </button>
                </td>
              </tr>
              <tr className="search-jobs-list-view-page__tablet-search-job-table-row-2">
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-staffing-agency">
                  Acme Agency
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-job-id">
                  8392765
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-manufacturing">
                  Healthcare
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-operator">
                  CT Tech
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-full-time">
                  Contract
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-location">
                  NY, NY
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-posted-date">
                  7/10/24
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-action">
                  <button className="search-jobs-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>{" "}
                  <button className="search-jobs-list-view-page__tablet-post-candidate-button">
                    Post Candidate
                  </button>
                </td>
              </tr>
              <tr className="search-jobs-list-view-page__tablet-search-job-table-row-1">
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-staffing-agency">
                  HumanRe Agency
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-job-id">
                  87634529
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-manufacturing">
                  Manufacturing
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-operator">
                  Operator
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-full-time">
                  Full Time
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-location">
                  Austin, TX
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-posted-date">
                  7/17/24
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-action">
                  <button className="search-jobs-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>{" "}
                  <button className="search-jobs-list-view-page__tablet-post-candidate-button">
                    Post Candidate
                  </button>
                </td>
              </tr>
              <tr className="search-jobs-list-view-page__tablet-search-job-table-row-2">
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-staffing-agency">
                  Acme Agency
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-job-id">
                  8392765
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-manufacturing">
                  Healthcare
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-operator">
                  CT Tech
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-full-time">
                  Contract
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-location">
                  NY, NY
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-posted-date">
                  7/10/24
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-action">
                  <button className="search-jobs-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>{" "}
                  <button className="search-jobs-list-view-page__tablet-post-candidate-button">
                    Post Candidate
                  </button>
                </td>
              </tr>
              <tr className="search-jobs-list-view-page__tablet-search-job-table-row-1">
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-staffing-agency">
                  HumanRe Agency
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-job-id">
                  87634529
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-manufacturing">
                  Manufacturing
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-operator">
                  Operator
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-full-time">
                  Full Time
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-location">
                  Austin, TX
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-posted-date">
                  7/17/24
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-action">
                  <button className="search-jobs-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>{" "}
                  <button className="search-jobs-list-view-page__tablet-post-candidate-button">
                    Post Candidate
                  </button>
                </td>
              </tr>
              <tr className="search-jobs-list-view-page__tablet-search-job-table-row-2">
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-staffing-agency">
                  Acme Agency
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-job-id">
                  8392765
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-manufacturing">
                  Healthcare
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-operator">
                  CT Tech
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-full-time">
                  Contract
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-location">
                  NY, NY
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-posted-date">
                  7/10/24
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-action">
                  <button className="search-jobs-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>{" "}
                  <button className="search-jobs-list-view-page__tablet-post-candidate-button">
                    Post Candidate
                  </button>
                </td>
              </tr>
              <tr className="search-jobs-list-view-page__tablet-search-job-table-row-1">
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-staffing-agency">
                  HumanRe Agency
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-job-id">
                  87634529
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-manufacturing">
                  Manufacturing
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-operator">
                  Operator
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-full-time">
                  Full Time
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-location">
                  Austin, TX
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-posted-date">
                  7/17/24
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-action">
                  <button className="search-jobs-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>{" "}
                  <button className="search-jobs-list-view-page__tablet-post-candidate-button">
                    Post Candidate
                  </button>
                </td>
              </tr>
              <tr className="search-jobs-list-view-page__tablet-search-job-table-row-2">
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-staffing-agency">
                  Acme Agency
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-job-id">
                  8392765
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-manufacturing">
                  Healthcare
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-operator">
                  CT Tech
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-full-time">
                  Contract
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-location">
                  NY, NY
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-posted-date">
                  7/10/24
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-action">
                  <button className="search-jobs-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>{" "}
                  <button className="search-jobs-list-view-page__tablet-post-candidate-button">
                    Post Candidate
                  </button>
                </td>
              </tr>
              <tr className="search-jobs-list-view-page__tablet-search-job-table-row-1">
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-staffing-agency">
                  HumanRe Agency
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-job-id">
                  87634529
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-manufacturing">
                  Manufacturing
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-operator">
                  Operator
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-full-time">
                  Full Time
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-location">
                  Austin, TX
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-posted-date">
                  7/17/24
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-action">
                  <button className="search-jobs-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>{" "}
                  <button className="search-jobs-list-view-page__tablet-post-candidate-button">
                    Post Candidate
                  </button>
                </td>
              </tr>
              <tr className="search-jobs-list-view-page__tablet-search-job-table-row-2">
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-staffing-agency">
                  Acme Agency
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-job-id">
                  8392765
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-manufacturing">
                  Healthcare
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-operator">
                  CT Tech
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-full-time">
                  Contract
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-location">
                  NY, NY
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-posted-date">
                  7/10/24
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-action">
                  <button className="search-jobs-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>{" "}
                  <button className="search-jobs-list-view-page__tablet-post-candidate-button">
                    Post Candidate
                  </button>
                </td>
              </tr>
              <tr className="search-jobs-list-view-page__tablet-search-job-table-row-1">
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-staffing-agency">
                  HumanRe Agency
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-job-id">
                  87634529
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-manufacturing">
                  Manufacturing
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-operator">
                  Operator
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-full-time">
                  Full Time
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-location">
                  Austin, TX
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-posted-date">
                  7/17/24
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-1-action">
                  <button className="search-jobs-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>{" "}
                  <button className="search-jobs-list-view-page__tablet-post-candidate-button">
                    Post Candidate
                  </button>
                </td>
              </tr>
              <tr className="search-jobs-list-view-page__tablet-search-job-table-row-2">
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-staffing-agency">
                  Acme Agency
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-job-id">
                  8392765
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-manufacturing">
                  Healthcare
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-operator">
                  CT Tech
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-full-time">
                  Contract
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-location">
                  NY, NY
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-posted-date">
                  7/10/24
                </td>
                <td className="search-jobs-list-view-page__tablet-search-job-table-row-2-action">
                  <button className="search-jobs-list-view-page__tablet-view-my-matches-button">
                    View My Matches
                  </button>{" "}
                  <button className="search-jobs-list-view-page__tablet-post-candidate-button">
                    Post Candidate
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="search-jobs-list-view-page__tablet-navigation-container">
            <img
              className="search-jobs-list-view-page__tablet-page-arrow-left-icon"
              src={PageArrowLeftIcon}
              alt="Page Arrow Left Icon"
            />
            <img
              className="search-jobs-list-view-page__tablet-page-number-blue-1-icon"
              src={PageNumberBlue1Icon}
              alt="Page Number Blue 1 Icon"
            />
            <img
              className="search-jobs-list-view-page__tablet-page-number-gray-2-icon"
              src={PageNumberGray2Icon}
              alt="Page Number Gray 2 Icon"
            />
            <img
              className="search-jobs-list-view-page__tablet-page-number-gray-3-icon"
              src={PageNumberGray3Icon}
              alt="Page Number Gray 3 Icon"
            />
            <img
              className="search-jobs-list-view-page__tablet-page-arrow-right-icon"
              src={PageArrowRightIcon}
              alt="Page Arrow Right Icon"
            />
          </div>
        </div>
        <div className="search-jobs-list-view-page__desktop-container">
        <div className="search-jobs-list-view-page__desktop-header-container">
              <div className="search-jobs-list-view-page__desktop-header-left-container">
                <p className="search-jobs-list-view-page__desktop-header-text">
                  Search Jobs
                </p>
                <img
                  className="search-jobs-list-view-page__desktop-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
                <input
                  className="search-jobs-list-view-page__desktop-key-word-search-input"
                  type="text"
                  placeholder="Keyword Search"
                />
                <select
                  className="search-jobs-list-view-page__desktop-location-select"
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
                  className="search-jobs-list-view-page__desktop-industry-select"
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
                  className="search-jobs-list-view-page__desktop-job-type-select"
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
                  className="search-jobs-list-view-page__desktop-agency-select"
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
                  className="search-jobs-list-view-page__desktop-other-filter-select"
                  name="desktop-other-filter"
                  id="desktop-other-filter"
                >
                  <option value="" disabled selected>
                    Other Filter
                  </option>
                </select>
                <button className="search-jobs-list-view-page__desktop-clear-filters-button">
                  Clear Filters
                </button>
              </div>
              <div className="search-jobs-list-view-page__desktop-header-right-container">
                <img
                  className="search-jobs-list-view-page__desktop-jobs-search-map-placeholder-icon"
                  src={JobSearchMapPlaceholderIcon}
                  alt="Jobs Search Map Placeholder Icon"
                />
                <div className="search-jobs-list-view-page__desktop-view-searches-list-view-show-hidden-container">
                  <button className="search-jobs-list-view-page__desktop-view-searches-button">
                    View Searches
                  </button>
                  <button className="search-jobs-list-view-page__desktop-list-view-button">
                    List View
                  </button>
                  <button className="search-jobs-list-view-page__desktop-show-hidden-button">
                    Show Hidden
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
