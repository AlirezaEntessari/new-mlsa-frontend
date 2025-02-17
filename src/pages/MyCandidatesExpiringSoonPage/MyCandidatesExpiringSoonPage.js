import React from "react";
import "./MyCandidatesExpiringSoonPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import CandidatesSidePanel from "../../components/CandidatesSidePanel/CandidatesSidePanel";
import MyCandidatesNavbar from "../../components/MyCandidatesNavbar/MyCandidatesNavbar";
import SearchIcon from "../../assets/icons/Search (2).svg";
import MenuArrowCircleDownIcon from "../../assets/icons/MenuCircleArrowGray.svg";
import MyCandidatesMobileCardContainer from "../../components/MyCandidatesMobileCardContainer/MyCandidatesMobileCardContainer";
import ScrollDownArrowIcon from "../../assets/icons/ScrollDownArrow.svg";
import OnHoldOrangeIcon from "../../assets/icons/OnHoldOrange.svg";

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
          <div className="my-candidates-expiring-soon-page__tablet-desktop-container">
            <p className="my-candidates-expiring-soon-page__tablet-desktop-my-candidates-header">
              My Candidates
            </p>
            <MyCandidatesNavbar />
            <div className="my-candidates-expiring-soon-page__tablet-desktop-search-expiring-soon-my-candidates-container">
              <label
                className="my-candidates-expiring-soon-page__tablet-desktop-search-expiring-soon-label"
                htmlFor="tablet-search-expiring-soon"
              >
                Search Expiring Soon
              </label>
              <div className="my-candidates-expiring-soon-page__tablet-desktop-search-expiring-soon-container">
                <input
                  className="my-candidates-expiring-soon-page__tablet-desktop-search-expiring-soon-input"
                  type="text"
                  id="tablet-search-expiring-soon"
                />
                <img
                  className="my-candidates-expiring-soon-page__tablet-desktop-search-expiring-soon-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
              </div>
              <button className="my-candidates-expiring-soon-page__tablet-desktop-my-candidates-button">
                My Candidates
              </button>
            </div>
            <table className="my-candidates-expiring-soon-page__tablet-desktop-table">
              <thead className="my-candidates-expiring-soon-page__tablet-desktop-header-section">
                <tr className="my-candidates-expiring-soon-page__tablet-desktop-header-row">
                  <th className="my-candidates-expiring-soon-page__tablet-desktop-header-row-id">
                    ID{" "}
                    <img
                      className="my-candidates-expiring-soon-page__tablet-desktop-scroll-down-arrow-icon"
                      src={ScrollDownArrowIcon}
                      alt="Scroll Down Arrow Icon"
                    />
                  </th>
                  <th className="my-candidates-expiring-soon-page__tablet-desktop-header-row-full-name">
                    Full Name{" "}
                    <img
                      className="my-candidates-expiring-soon-page__tablet-desktop-scroll-down-arrow-icon"
                      src={ScrollDownArrowIcon}
                      alt="Scroll Down Arrow Icon"
                    />
                  </th>
                  <th className="my-candidates-expiring-soon-page__tablet-desktop-header-row-job-title">
                    Job Title{" "}
                    <img
                      className="my-candidates-expiring-soon-page__tablet-desktop-scroll-down-arrow-icon"
                      src={ScrollDownArrowIcon}
                      alt="Scroll Down Arrow Icon"
                    />
                  </th>
                  <th className="my-candidates-expiring-soon-page__tablet-desktop-header-row-industry">
                    Industry{" "}
                    <img
                      className="my-candidates-expiring-soon-page__tablet-desktop-scroll-down-arrow-icon"
                      src={ScrollDownArrowIcon}
                      alt="Scroll Down Arrow Icon"
                    />
                  </th>
                  <th className="my-candidates-expiring-soon-page__tablet-desktop-header-row-availability-date">
                    Availability Date{" "}
                    <img
                      className="my-candidates-expiring-soon-page__tablet-desktop-scroll-down-arrow-icon"
                      src={ScrollDownArrowIcon}
                      alt="Scroll Down Arrow Icon"
                    />
                  </th>
                  <th className="my-candidates-expiring-soon-page__tablet-desktop-header-row-posted-date">
                    Posted Date{" "}
                    <img
                      className="my-candidates-expiring-soon-page__tablet-desktop-scroll-down-arrow-icon"
                      src={ScrollDownArrowIcon}
                      alt="Scroll Down Arrow Icon"
                    />
                  </th>
                  <th className="my-candidates-expiring-soon-page__tablet-desktop-header-row-requests">
                    Requests{" "}
                    <img
                      className="my-candidates-expiring-soon-page__tablet-desktop-scroll-down-arrow-icon"
                      src={ScrollDownArrowIcon}
                      alt="Scroll Down Arrow Icon"
                    />
                  </th>
                  <th className="my-candidates-expiring-soon-page__tablet-desktop-header-row-action">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="my-candidates-expiring-soon-page__tablet-desktop-body-section">
                <tr className="my-candidates-expiring-soon-page__tablet-desktop-data-row-1">
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-1-id">
                    93837626
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-1-full-name">
                    Jay Haller
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-1-job-title">
                    RN
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-1-industry">
                    Healthcare
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-1-availability-date">
                    11/2/24
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-1-posted-date">
                    09/10/24
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-1-requests">
                    4
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-1-find-job-action">
                    <button className="my-candidates-expiring-soon-page__tablet-desktop-find-job-button">
                      Find Job
                    </button>
                    <button className="my-candidates-expiring-soon-page__tablet-desktop-other-actions-button">
                      Other Actions
                    </button>
                  </td>
                </tr>
                <tr className="my-candidates-expiring-soon-page__tablet-desktop-data-row-2">
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-2-id">
                    76354298{" "}
                    <img
                      className="my-candidates-expiring-soon-page__tablet-desktop-on-hold-orange-icon"
                      src={OnHoldOrangeIcon}
                      alt="On Hold Orange Icon"
                    />
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-2-full-name">
                    George Cintron
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-2-job-title">
                    Allied - CMA
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-2-industry">
                    Healthcare
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-2-availability-date">
                    11/1/24
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-2-posted-date">
                    09/10/24
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-2-requests">
                    3
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-2-action">
                    <button className="my-candidates-expiring-soon-page__tablet-desktop-find-job-button">
                      Find Job
                    </button>
                    <button className="my-candidates-expiring-soon-page__tablet-desktop-other-actions-button">
                      Other Actions
                    </button>
                  </td>
                </tr>
                <tr className="my-candidates-expiring-soon-page__tablet-desktop-data-row-3">
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-3-id">
                    87452619
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-3-full-name">
                    Jessica O'Sullivan
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-3-job-title">
                    PA
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-3-industry">
                    Healthcare
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-3-availability-date">
                    11/7/24
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-3-posted-date">
                    09/10/24
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-3-requests">
                    3
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-3-action">
                    <button className="my-candidates-expiring-soon-page__tablet-desktop-find-job-button">
                      Find Job
                    </button>
                    <button className="my-candidates-expiring-soon-page__tablet-desktop-other-actions-button">
                      Other Actions
                    </button>
                  </td>
                </tr>
                <tr className="my-candidates-expiring-soon-page__tablet-desktop-data-row-4">
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-4-id">
                    98345267
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-4-full-name">
                    Emma Simons
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-4-job-title">
                    NA
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-4-industry">
                    Healthcare
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-4-availability-date">
                    11/15/24
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-4-posted-date">
                    09/10/24
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-4-requests">
                    2
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-4-action">
                    <button className="my-candidates-expiring-soon-page__tablet-desktop-find-job-button">
                      Find Job
                    </button>
                    <button className="my-candidates-expiring-soon-page__tablet-desktop-other-actions-button">
                      Other Actions
                    </button>
                  </td>
                </tr>
                <tr className="my-candidates-expiring-soon-page__tablet-desktop-data-row-5">
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-5-id">
                    28478466
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-5-full-name">
                    Kenneth Forgione
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-5-job-title">
                    Allied - CMA
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-5-industry">
                    Healthcare
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-5-availability-date">
                    10/15/24
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-5-posted-date">
                    09/23/24
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-5-requests">
                    3
                  </td>
                  <td className="my-candidates-expiring-soon-page__tablet-desktop-data-row-5-action">
                    <button className="my-candidates-expiring-soon-page__tablet-desktop-find-job-button">
                      Find Job
                    </button>
                    <button className="my-candidates-expiring-soon-page__tablet-desktop-other-actions-button">
                      Other Actions
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
