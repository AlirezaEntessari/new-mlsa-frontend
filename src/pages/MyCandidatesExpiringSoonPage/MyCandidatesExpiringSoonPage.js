import React from "react";
import "./MyCandidatesExpiringSoonPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import CandidatesSidePanel from "../../components/CandidatesSidePanel/CandidatesSidePanel";
import MyCandidatesNavbar from "../../components/MyCandidatesNavbar/MyCandidatesNavbar";
import SearchIcon from "../../assets/icons/Search (2).svg";
import MenuArrowCircleDownIcon from "../../assets/icons/MenuCircleArrowGray.svg";
import MyCandidatesMobileCardContainer from "../../components/MyCandidatesMobileCardContainer/MyCandidatesMobileCardContainer";
import ScrollDownArrowIcon from "../../assets/icons/ScrollDownArrow.svg";

export default function MyCandidatesExpiringSoonPage() {
  return (
    <div className="my-candidates-expiring-soon-page">
      <HeaderWithProfilePic />
      <div className="my-candidates-expiring-soon-page__main-container">
        <CandidatesSidePanel />
        <div className="my-candidates-expiring-soon-page__right-container">
          <div className="my-candidates-expiring-soon-page__mobile-container">
            <p className="my-candidates-expiring-soon-page__mobile-header">
              My Candidates
            </p>
            <MyCandidatesNavbar />
            <div className="my-candidates-expiring-soon-page__mobile-search-expiring-soon-container">
              <label
                className="my-candidates-expiring-soon-page__mobile-search-expiring-soon-label"
                htmlFor="mobile-search-expiring-soon"
              >
                Search Expiring Soon
              </label>
              <div className="my-candidates-expiring-soon-page__mobile-search-expiring-soon-input-container">
                <input
                  className="my-candidates-expiring-soon-page__mobile-search-expiring-soon-input"
                  type="text"
                  id="mobile-search-expiring-soon"
                />
                <img
                  className="my-candidates-expiring-soon-page__mobile-search-expiring-soon-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
              </div>
            </div>
            <div className="my-candidates-expiring-soon-page__mobile-sort-by-date-container">
              <p className="my-candidates-expiring-soon-page__mobile-sort-by-text">
                Sort by:
              </p>
              <div className="my-candidates-expiring-soon-page__mobile-date-container">
                <p className="my-candidates-expiring-soon-page__mobile-date-text">
                  Date
                </p>
                <img
                  className="my-candidates-expiring-soon-page__mobile-menu-arrow-circle-down-icon"
                  src={MenuArrowCircleDownIcon}
                  alt="Menu Arrow Circle Down"
                />
              </div>
            </div>
            <div className="my-candidates-expiring-soon-page__mobile-card-container">
              <MyCandidatesMobileCardContainer />
            </div>
          </div>
          <div className="my-candidates-expiring-soon-page__tablet-container">
            <p className="my-candidates-expiring-soon-page__tablet-my-candidates-header">
              My Candidates
            </p>
            <MyCandidatesNavbar />
            <div className="my-candidates-expiring-soon-page__tablet-search-expiring-soon-my-candidates-container">
              <label
                className="my-candidates-expiring-soon-page__tablet-search-expiring-soon-label"
                htmlFor="tablet-search-expiring-soon"
              >
                Search Expiring Soon
              </label>
              <div className="my-candidates-expiring-soon-page__tablet-search-expiring-soon-container">
                <input
                  className="my-candidates-expiring-soon-page__tablet-search-expiring-soon-input"
                  type="text"
                  id="tablet-search-expiring-soon"
                />
                <img
                  className="my-candidates-expiring-soon-page__tablet-search-expiring-soon-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
              </div>
              <button className="my-candidates-expiring-soon-page__tablet-my-candidates-button">
                My Candidates
              </button>
            </div>
            <table className="my-candidates-expiring-soon-page__tablet-table">
              <thead className="my-candidates-expiring-soon-page__tablet-header-section">
                <tr className="my-candidates-expiring-soon-page__tablet-header-row">
                  <th className="my-candidates-expiring-soon-page__tablet-header-row-id">
                    ID{" "}
                    <img
                      className="my-candidates-expiring-soon-page__tablet-scroll-down-arrow-icon"
                      src={ScrollDownArrowIcon}
                      alt="Scroll Down Arrow Icon"
                    />
                  </th>
                  <th className="my-candidates-expiring-soon-page__tablet-header-row-full-name">
                    Full Name{" "}
                    <img
                      className="my-candidates-expiring-soon-page__tablet-scroll-down-arrow-icon"
                      src={ScrollDownArrowIcon}
                      alt="Scroll Down Arrow Icon"
                    />
                  </th>
                  <th className="my-candidates-expiring-soon-page__tablet-header-row-job-title">
                    Job Title{" "}
                    <img
                      className="my-candidates-expiring-soon-page__tablet-scroll-down-arrow-icon"
                      src={ScrollDownArrowIcon}
                      alt="Scroll Down Arrow Icon"
                    />
                  </th>
                  <th className="my-candidates-expiring-soon-page__tablet-header-row-industry">
                    Industry{" "}
                    <img
                      className="my-candidates-expiring-soon-page__tablet-scroll-down-arrow-icon"
                      src={ScrollDownArrowIcon}
                      alt="Scroll Down Arrow Icon"
                    />
                  </th>
                  <th className="my-candidates-expiring-soon-page__tablet-header-row-availability-date">
                    Availability Date{" "}
                    <img
                      className="my-candidates-expiring-soon-page__tablet-scroll-down-arrow-icon"
                      src={ScrollDownArrowIcon}
                      alt="Scroll Down Arrow Icon"
                    />
                  </th>
                  <th className="my-candidates-expiring-soon-page__tablet-header-row-posted-date">
                    Posted Date{" "}
                    <img
                      className="my-candidates-expiring-soon-page__tablet-scroll-down-arrow-icon"
                      src={ScrollDownArrowIcon}
                      alt="Scroll Down Arrow Icon"
                    />
                  </th>
                  <th className="my-candidates-expiring-soon-page__tablet-header-row-requests">
                    Requests{" "}
                    <img
                      className="my-candidates-expiring-soon-page__tablet-scroll-down-arrow-icon"
                      src={ScrollDownArrowIcon}
                      alt="Scroll Down Arrow Icon"
                    />
                  </th>
                  <th className="my-candidates-expiring-soon-page__tablet-header-row-action">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="my-candidates-expiring-soon-page__tablet-body-section">
                <tr className="my-candidates-expiring-soon-page__tablet-data-row-1">
                  <td className="my-candidates-expiring-soon-page__tablet-data-row-1-id">
                    93837626
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-data-row-1-full-name">Jay Haller</td>
                  <td className="my-candidates-expiring-soon-page__tablet-data-row-1-job-title">RN</td>
                  <td className="my-candidates-expiring-soon-page__tablet-data-row-1-industry">Healthcare</td>
                  <td className="my-candidates-expiring-soon-page__tablet-data-row-1-availability-date">11/2/24</td>
                  <td className="my-candidates-expiring-soon-page__tablet-data-row-1-posted-date">09/10/24</td>
                  <td className="my-candidates-expiring-soon-page__tablet-data-row-1-requests">4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
