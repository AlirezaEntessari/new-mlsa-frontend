import React from "react";
import "./MyPlacementsHomePage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import PlacementsSidePanel from "../../components/PlacementsSidePanel/PlacementsSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import LightestBlueIcon from "../../assets/icons/JobsPendingBullet.svg";
import LightBlueIcon from "../../assets/icons/JobsReviewsBullet.svg";
import DarkerLightBlueIcon from "../../assets/icons/JobsSubmissionsBullet.svg";
import RegularBlueIcon from "../../assets/icons/JobsInterviewsBullet.svg";
import DarkBlueIcon from "../../assets/icons/JobsOffersBullet.svg";
import DarkestBlueIcon from "../../assets/icons/JobsPlacementsBullet.svg";
import MenuArrowCircleDownIcon from "../../assets/icons/MenuCircleArrowGray.svg";

export default function MyPlacementsHomePage() {
  return (
    <div className="my-placements-home-page">
      <HeaderWithProfilePic />
      <div className="my-placements-home-page__main-container">
        <PlacementsSidePanel />
        <div className="my-placements-home-page__right-container">
          <div className="my-placements-home-page__mobile-container">
            <p className="my-placements-home-page__mobile-header-text">
              Placements
            </p>
            <div className="my-placements-home-page__mobile-top-dashboard-container">
              <div className="my-placements-home-page__mobile-invoiced-payment-sent-container">
                <div className="my-placements-home-page__mobile-invoiced-container">
                  <p className="my-placements-home-page__mobile-invoiced-text">
                    Invoiced
                  </p>
                  <p className="my-placements-home-page__mobile-invoiced-number">
                    5
                  </p>
                </div>
                <div className="my-placements-home-page__mobile-payment-sent-container">
                  <p className="my-placements-home-page__mobile-payment-sent-text">
                    Payment Sent
                  </p>
                  <p className="my-placements-home-page__mobile-payment-sent-number">
                    6
                  </p>
                </div>
              </div>
              <div className="my-placements-home-page__mobile-payment-received-completed-container">
                <div className="my-placements-home-page__mobile-payment-received-container">
                  <p className="my-placements-home-page__mobile-payment-received-text">
                    Payment Received
                  </p>
                  <p className="my-placements-home-page__mobile-payment-received-number">
                    16
                  </p>
                </div>
                <div className="my-placements-home-page__mobile-completed-container">
                  <p className="my-placements-home-page__mobile-completed-text">
                    Completed
                  </p>
                  <p className="my-placements-home-page__mobile-completed-number">
                    11
                  </p>
                </div>
              </div>
            </div>
            <div className="my-placements-home-page__mobile-search-placements-container">
              <label
                className="my-placements-home-page__mobile-search-placements-label"
                htmlFor="mobile-search-placements"
              >
                Search Placements
              </label>
              <img
                className="my-placements-home-page__mobile-search-icon"
                src={SearchIcon}
                alt="Search Icon"
              />
              <input
                className="my-placements-home-page__mobile-search-placements-input"
                type="text"
                id="mobile-search-placements"
              />
            </div>
            <div className="my-placements-home-page__mobile-central-container">
              <div className="my-placements-home-page__mobile-middle-dashboard-container">
                <div className="my-placements-home-page__mobile-middle-dashboard-top-container">
                  <div className="my-placements-home-page__mobile-dashboard-all-placements-container">
                    <img
                      className="my-placements-home-page__mobile-lightest-blue-icon"
                      src={LightestBlueIcon}
                      alt="Lightest Blue Icon"
                    />
                    <p className="my-placements-home-page__mobile-all-placements-text">
                      All Placements
                    </p>
                  </div>
                  <div className="my-placements-home-page__mobile-dashboard-invoiced-container">
                    <img
                      className="my-placements-home-page__mobile-light-blue-icon"
                      src={LightBlueIcon}
                      alt="Light Blue Icon"
                    />
                    <p className="my-placements-home-page__mobile-dashboard-invoiced-text">
                      Invoiced
                    </p>
                  </div>
                  <div className="my-placements-home-page__mobile-dashboard-payment-sent-container">
                    <img
                      className="my-placements-home-page__mobile-darker-light-blue-icon"
                      src={DarkerLightBlueIcon}
                      alt="Darker Light Blue Icon"
                    />
                    <p className="my-placements-home-page__mobile-dashboard-payment-sent-text">
                      Payment Sent
                    </p>
                  </div>
                </div>
                <div className="my-placements-home-page__mobile-middle-dashboard-bottom-container">
                  <div className="my-placements-home-page__mobile-dashboard-payment-received-container">
                    <img
                      className="my-placements-home-page__mobile-regular-blue-icon"
                      src={RegularBlueIcon}
                      alt="Regular Blue Icon"
                    />
                    <p className="my-placements-home-page__mobile-dashboard-payment-received-text">
                      Payment Received
                    </p>
                  </div>
                  <div className="my-placements-home-page__mobile-dashboard-completed-container">
                    <img
                      className="my-placements-home-page__mobile-dark-blue-icon"
                      src={DarkBlueIcon}
                      alt="Dark Blue Icon"
                    />
                    <p className="my-placements-home-page__mobile-dashboard-completed-text">
                      Completed
                    </p>
                  </div>
                  <div className="my-placements-home-page__mobile-dashboard-rating-container">
                    <img
                      className="my-placements-home-page__mobile-darkest-blue-icon"
                      src={DarkestBlueIcon}
                      alt="Darkest Blue Icon"
                    />
                    <p className="my-placements-home-page__mobile-rating-text">
                      Rating
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-placements-home-page__mobile-sort-by-container">
                <span className="my-placements-home-page__mobile-sort-by-text">
                  Sort by:
                </span>
                <span className="my-placements-home-page__mobile-id-number-text">
                  ID#
                </span>
                <img
                  className="my-placements-home-page__mobile-menu-arrow-circle-down-icon"
                  src={MenuArrowCircleDownIcon}
                  alt="Menu Arrow Circle Down Icon"
                />
              </div>
              <div className="my-placements-home-page__mobile-card-container">
                <div className="my-placements-home-page__mobile-card-1">
                  <div className="my-placements-home-page__mobile-card-1-id-placement-date-container">
                    <div className="my-placements-home-page__mobile-card-1-id-container">
                      <label
                        className="my-placements-home-page__mobile-card-1-label"
                        htmlFor="mobile-id"
                      >
                        ID:
                      </label>
                      <p className="my-placements-home-page__mobile-card-1-id-number">
                        67838473
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-1-placement-date-container">
                      <label
                        className="my-placements-home-page__mobile-card-1-placement-date-label"
                        htmlFor="mobile-placement-date"
                      >
                        Placement Date:
                      </label>
                      <p className="my-placements-home-page__mobile-card-1-placement-date-text">
                        07/01/24
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-1-job-title">
                    Job Title:{" "}
                    <span className="my-placements-home-page__mobile-card-1-job-title-name">
                      Allied CMA
                    </span>
                  </p>
                  <div className="my-placements-home-page__mobile-card-1-agency-full-name-container">
                    <div className="my-placements-home-page__mobile-card-1-agency-container">
                      <p className="my-placements-home-page__mobile-card-1-agency">
                        Agency:{" "}
                        <span className="my-placements-home-page__mobile-card-1-agency-text">
                          First Staffing Inc.
                        </span>
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-1-full-name-container">
                      <p className="my-placements-home-page__mobile-card-1-full-name">
                        Full Name:
                      </p>
                      <p className="my-placements-home-page__mobile-card-1-full-name-text">
                        Tom Peterson
                      </p>
                    </div>
                  </div>
                  <div className="my-placements-home-page__mobile-card-1-industry-status-container">
                    <p className="my-placements-home-page__mobile-card-1-industry">
                      Industry:{" "}
                      <span className="my-placements-home-page__mobile-card-1-industry-name">
                        Healthcare
                      </span>
                    </p>
                    <div className="my-placements-home-page__mobile-card-1-status-container">
                      <label
                        className="my-placements-home-page__mobile-card-1-status-label"
                        htmlFor="mobile-status"
                      >
                        Status
                      </label>
                      <img
                        className="my-placements-home-page__mobile-card-1-menu-arrow-circle-down"
                        src={MenuArrowCircleDownIcon}
                        alt="Menu Arrow Circle Down"
                      />
                      <p className="my-placements-home-page__mobile-card-1-status-name">
                        Invoiced
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-1-location">
                    Location:{" "}
                    <span className="my-placements-home-page__mobile-card-1-location-name">
                      Dallas, TX
                    </span>
                  </p>
                </div>
                <div className="my-placements-home-page__mobile-card-2">
                  <div className="my-placements-home-page__mobile-card-2-id-placement-date-container">
                    <div className="my-placements-home-page__mobile-card-2-id-container">
                      <label
                        className="my-placements-home-page__mobile-card-2-label"
                        htmlFor="mobile-id"
                      >
                        ID:
                      </label>
                      <p className="my-placements-home-page__mobile-card-2-id-number">
                        67838473
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-2-placement-date-container">
                      <label
                        className="my-placements-home-page__mobile-card-2-placement-date-label"
                        htmlFor="mobile-placement-date"
                      >
                        Placement Date:
                      </label>
                      <p className="my-placements-home-page__mobile-card-2-placement-date-text">
                        07/01/24
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-2-job-title">
                    Job Title:{" "}
                    <span className="my-placements-home-page__mobile-card-2-job-title-name">
                      Allied CMA
                    </span>
                  </p>
                  <div className="my-placements-home-page__mobile-card-2-agency-full-name-container">
                    <div className="my-placements-home-page__mobile-card-2-agency-container">
                      <p className="my-placements-home-page__mobile-card-2-agency">
                        Agency:{" "}
                        <span className="my-placements-home-page__mobile-card-2-agency-text">
                          Staffing Agency 2
                        </span>
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-2-full-name-container">
                      <p className="my-placements-home-page__mobile-card-2-full-name">
                        Full Name:
                      </p>
                      <p className="my-placements-home-page__mobile-card-2-full-name-text">
                        Tom Peterson
                      </p>
                    </div>
                  </div>
                  <div className="my-placements-home-page__mobile-card-2-industry-status-container">
                    <p className="my-placements-home-page__mobile-card-2-industry">
                      Industry:{" "}
                      <span className="my-placements-home-page__mobile-card-2-industry-name">
                        Healthcare
                      </span>
                    </p>
                    <div className="my-placements-home-page__mobile-card-2-status-container">
                      <label
                        className="my-placements-home-page__mobile-card-2-status-label"
                        htmlFor="mobile-status"
                      >
                        Status
                      </label>
                      <img
                        className="my-placements-home-page__mobile-card-2-menu-arrow-circle-down"
                        src={MenuArrowCircleDownIcon}
                        alt="Menu Arrow Circle Down"
                      />
                      <p className="my-placements-home-page__mobile-card-2-status-name">
                        Payment Sent
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-2-location">
                    Location:{" "}
                    <span className="my-placements-home-page__mobile-card-2-location-name">
                      Dallas, TX
                    </span>
                  </p>
                </div>
                <div className="my-placements-home-page__mobile-card-3">
                  <div className="my-placements-home-page__mobile-card-1-id-placement-date-container">
                    <div className="my-placements-home-page__mobile-card-1-id-container">
                      <label
                        className="my-placements-home-page__mobile-card-1-label"
                        htmlFor="mobile-id"
                      >
                        ID:
                      </label>
                      <p className="my-placements-home-page__mobile-card-1-id-number">
                        67838473
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-1-placement-date-container">
                      <label
                        className="my-placements-home-page__mobile-card-1-placement-date-label"
                        htmlFor="mobile-placement-date"
                      >
                        Placement Date:
                      </label>
                      <p className="my-placements-home-page__mobile-card-1-placement-date-text">
                        07/01/24
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-1-job-title">
                    Job Title:{" "}
                    <span className="my-placements-home-page__mobile-card-1-job-title-name">
                      Allied CMA
                    </span>
                  </p>
                  <div className="my-placements-home-page__mobile-card-1-agency-full-name-container">
                    <div className="my-placements-home-page__mobile-card-1-agency-container">
                      <p className="my-placements-home-page__mobile-card-1-agency">
                        Agency:{" "}
                        <span className="my-placements-home-page__mobile-card-1-agency-text">
                          First Staffing Inc.
                        </span>
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-1-full-name-container">
                      <p className="my-placements-home-page__mobile-card-1-full-name">
                        Full Name:
                      </p>
                      <p className="my-placements-home-page__mobile-card-1-full-name-text">
                        Tom Peterson
                      </p>
                    </div>
                  </div>
                  <div className="my-placements-home-page__mobile-card-1-industry-status-container">
                    <p className="my-placements-home-page__mobile-card-1-industry">
                      Industry:{" "}
                      <span className="my-placements-home-page__mobile-card-1-industry-name">
                        Healthcare
                      </span>
                    </p>
                    <div className="my-placements-home-page__mobile-card-1-status-container">
                      <label
                        className="my-placements-home-page__mobile-card-1-status-label"
                        htmlFor="mobile-status"
                      >
                        Status
                      </label>
                      <img
                        className="my-placements-home-page__mobile-card-1-menu-arrow-circle-down"
                        src={MenuArrowCircleDownIcon}
                        alt="Menu Arrow Circle Down"
                      />
                      <p className="my-placements-home-page__mobile-card-1-status-name">
                        Invoiced
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-1-location">
                    Location:{" "}
                    <span className="my-placements-home-page__mobile-card-1-location-name">
                      Dallas, TX
                    </span>
                  </p>
                </div>
                <div className="my-placements-home-page__mobile-card-2">
                  <div className="my-placements-home-page__mobile-card-2-id-placement-date-container">
                    <div className="my-placements-home-page__mobile-card-2-id-container">
                      <label
                        className="my-placements-home-page__mobile-card-2-label"
                        htmlFor="mobile-id"
                      >
                        ID:
                      </label>
                      <p className="my-placements-home-page__mobile-card-2-id-number">
                        67838473
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-2-placement-date-container">
                      <label
                        className="my-placements-home-page__mobile-card-2-placement-date-label"
                        htmlFor="mobile-placement-date"
                      >
                        Placement Date:
                      </label>
                      <p className="my-placements-home-page__mobile-card-2-placement-date-text">
                        07/01/24
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-2-job-title">
                    Job Title:{" "}
                    <span className="my-placements-home-page__mobile-card-2-job-title-name">
                      Allied CMA
                    </span>
                  </p>
                  <div className="my-placements-home-page__mobile-card-2-agency-full-name-container">
                    <div className="my-placements-home-page__mobile-card-2-agency-container">
                      <p className="my-placements-home-page__mobile-card-2-agency">
                        Agency:{" "}
                        <span className="my-placements-home-page__mobile-card-2-agency-text">
                          Staffing Agency 2
                        </span>
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-2-full-name-container">
                      <p className="my-placements-home-page__mobile-card-2-full-name">
                        Full Name:
                      </p>
                      <p className="my-placements-home-page__mobile-card-2-full-name-text">
                        Tom Peterson
                      </p>
                    </div>
                  </div>
                  <div className="my-placements-home-page__mobile-card-2-industry-status-container">
                    <p className="my-placements-home-page__mobile-card-2-industry">
                      Industry:{" "}
                      <span className="my-placements-home-page__mobile-card-2-industry-name">
                        Healthcare
                      </span>
                    </p>
                    <div className="my-placements-home-page__mobile-card-2-status-container">
                      <label
                        className="my-placements-home-page__mobile-card-2-status-label"
                        htmlFor="mobile-status"
                      >
                        Status
                      </label>
                      <img
                        className="my-placements-home-page__mobile-card-2-menu-arrow-circle-down"
                        src={MenuArrowCircleDownIcon}
                        alt="Menu Arrow Circle Down"
                      />
                      <p className="my-placements-home-page__mobile-card-2-status-name">
                        Payment Sent
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-2-location">
                    Location:{" "}
                    <span className="my-placements-home-page__mobile-card-2-location-name">
                      Dallas, TX
                    </span>
                  </p>
                </div>
                <div className="my-placements-home-page__mobile-card-3">
                  <div className="my-placements-home-page__mobile-card-1-id-placement-date-container">
                    <div className="my-placements-home-page__mobile-card-1-id-container">
                      <label
                        className="my-placements-home-page__mobile-card-1-label"
                        htmlFor="mobile-id"
                      >
                        ID:
                      </label>
                      <p className="my-placements-home-page__mobile-card-1-id-number">
                        67838473
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-1-placement-date-container">
                      <label
                        className="my-placements-home-page__mobile-card-1-placement-date-label"
                        htmlFor="mobile-placement-date"
                      >
                        Placement Date:
                      </label>
                      <p className="my-placements-home-page__mobile-card-1-placement-date-text">
                        07/01/24
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-1-job-title">
                    Job Title:{" "}
                    <span className="my-placements-home-page__mobile-card-1-job-title-name">
                      Allied CMA
                    </span>
                  </p>
                  <div className="my-placements-home-page__mobile-card-1-agency-full-name-container">
                    <div className="my-placements-home-page__mobile-card-1-agency-container">
                      <p className="my-placements-home-page__mobile-card-1-agency">
                        Agency:{" "}
                        <span className="my-placements-home-page__mobile-card-1-agency-text">
                          First Staffing Inc.
                        </span>
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-1-full-name-container">
                      <p className="my-placements-home-page__mobile-card-1-full-name">
                        Full Name:
                      </p>
                      <p className="my-placements-home-page__mobile-card-1-full-name-text">
                        Tom Peterson
                      </p>
                    </div>
                  </div>
                  <div className="my-placements-home-page__mobile-card-1-industry-status-container">
                    <p className="my-placements-home-page__mobile-card-1-industry">
                      Industry:{" "}
                      <span className="my-placements-home-page__mobile-card-1-industry-name">
                        Healthcare
                      </span>
                    </p>
                    <div className="my-placements-home-page__mobile-card-1-status-container">
                      <label
                        className="my-placements-home-page__mobile-card-1-status-label"
                        htmlFor="mobile-status"
                      >
                        Status
                      </label>
                      <img
                        className="my-placements-home-page__mobile-card-1-menu-arrow-circle-down"
                        src={MenuArrowCircleDownIcon}
                        alt="Menu Arrow Circle Down"
                      />
                      <p className="my-placements-home-page__mobile-card-1-status-name">
                        Invoiced
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-1-location">
                    Location:{" "}
                    <span className="my-placements-home-page__mobile-card-1-location-name">
                      Dallas, TX
                    </span>
                  </p>
                </div>
                <div className="my-placements-home-page__mobile-card-2">
                  <div className="my-placements-home-page__mobile-card-2-id-placement-date-container">
                    <div className="my-placements-home-page__mobile-card-2-id-container">
                      <label
                        className="my-placements-home-page__mobile-card-2-label"
                        htmlFor="mobile-id"
                      >
                        ID:
                      </label>
                      <p className="my-placements-home-page__mobile-card-2-id-number">
                        67838473
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-2-placement-date-container">
                      <label
                        className="my-placements-home-page__mobile-card-2-placement-date-label"
                        htmlFor="mobile-placement-date"
                      >
                        Placement Date:
                      </label>
                      <p className="my-placements-home-page__mobile-card-2-placement-date-text">
                        07/01/24
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-2-job-title">
                    Job Title:{" "}
                    <span className="my-placements-home-page__mobile-card-2-job-title-name">
                      Allied CMA
                    </span>
                  </p>
                  <div className="my-placements-home-page__mobile-card-2-agency-full-name-container">
                    <div className="my-placements-home-page__mobile-card-2-agency-container">
                      <p className="my-placements-home-page__mobile-card-2-agency">
                        Agency:{" "}
                        <span className="my-placements-home-page__mobile-card-2-agency-text">
                          Staffing Agency 2
                        </span>
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-2-full-name-container">
                      <p className="my-placements-home-page__mobile-card-2-full-name">
                        Full Name:
                      </p>
                      <p className="my-placements-home-page__mobile-card-2-full-name-text">
                        Tom Peterson
                      </p>
                    </div>
                  </div>
                  <div className="my-placements-home-page__mobile-card-2-industry-status-container">
                    <p className="my-placements-home-page__mobile-card-2-industry">
                      Industry:{" "}
                      <span className="my-placements-home-page__mobile-card-2-industry-name">
                        Healthcare
                      </span>
                    </p>
                    <div className="my-placements-home-page__mobile-card-2-status-container">
                      <label
                        className="my-placements-home-page__mobile-card-2-status-label"
                        htmlFor="mobile-status"
                      >
                        Status
                      </label>
                      <img
                        className="my-placements-home-page__mobile-card-2-menu-arrow-circle-down"
                        src={MenuArrowCircleDownIcon}
                        alt="Menu Arrow Circle Down"
                      />
                      <p className="my-placements-home-page__mobile-card-2-status-name">
                        Payment Sent
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-2-location">
                    Location:{" "}
                    <span className="my-placements-home-page__mobile-card-2-location-name">
                      Dallas, TX
                    </span>
                  </p>
                </div>
                <div className="my-placements-home-page__mobile-card-3">
                  <div className="my-placements-home-page__mobile-card-1-id-placement-date-container">
                    <div className="my-placements-home-page__mobile-card-1-id-container">
                      <label
                        className="my-placements-home-page__mobile-card-1-label"
                        htmlFor="mobile-id"
                      >
                        ID:
                      </label>
                      <p className="my-placements-home-page__mobile-card-1-id-number">
                        67838473
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-1-placement-date-container">
                      <label
                        className="my-placements-home-page__mobile-card-1-placement-date-label"
                        htmlFor="mobile-placement-date"
                      >
                        Placement Date:
                      </label>
                      <p className="my-placements-home-page__mobile-card-1-placement-date-text">
                        07/01/24
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-1-job-title">
                    Job Title:{" "}
                    <span className="my-placements-home-page__mobile-card-1-job-title-name">
                      Allied CMA
                    </span>
                  </p>
                  <div className="my-placements-home-page__mobile-card-1-agency-full-name-container">
                    <div className="my-placements-home-page__mobile-card-1-agency-container">
                      <p className="my-placements-home-page__mobile-card-1-agency">
                        Agency:{" "}
                        <span className="my-placements-home-page__mobile-card-1-agency-text">
                          First Staffing Inc.
                        </span>
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-1-full-name-container">
                      <p className="my-placements-home-page__mobile-card-1-full-name">
                        Full Name:
                      </p>
                      <p className="my-placements-home-page__mobile-card-1-full-name-text">
                        Tom Peterson
                      </p>
                    </div>
                  </div>
                  <div className="my-placements-home-page__mobile-card-1-industry-status-container">
                    <p className="my-placements-home-page__mobile-card-1-industry">
                      Industry:{" "}
                      <span className="my-placements-home-page__mobile-card-1-industry-name">
                        Healthcare
                      </span>
                    </p>
                    <div className="my-placements-home-page__mobile-card-1-status-container">
                      <label
                        className="my-placements-home-page__mobile-card-1-status-label"
                        htmlFor="mobile-status"
                      >
                        Status
                      </label>
                      <img
                        className="my-placements-home-page__mobile-card-1-menu-arrow-circle-down"
                        src={MenuArrowCircleDownIcon}
                        alt="Menu Arrow Circle Down"
                      />
                      <p className="my-placements-home-page__mobile-card-1-status-name">
                        Invoiced
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-1-location">
                    Location:{" "}
                    <span className="my-placements-home-page__mobile-card-1-location-name">
                      Dallas, TX
                    </span>
                  </p>
                </div>
                <div className="my-placements-home-page__mobile-card-2">
                  <div className="my-placements-home-page__mobile-card-2-id-placement-date-container">
                    <div className="my-placements-home-page__mobile-card-2-id-container">
                      <label
                        className="my-placements-home-page__mobile-card-2-label"
                        htmlFor="mobile-id"
                      >
                        ID:
                      </label>
                      <p className="my-placements-home-page__mobile-card-2-id-number">
                        67838473
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-2-placement-date-container">
                      <label
                        className="my-placements-home-page__mobile-card-2-placement-date-label"
                        htmlFor="mobile-placement-date"
                      >
                        Placement Date:
                      </label>
                      <p className="my-placements-home-page__mobile-card-2-placement-date-text">
                        07/01/24
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-2-job-title">
                    Job Title:{" "}
                    <span className="my-placements-home-page__mobile-card-2-job-title-name">
                      Allied CMA
                    </span>
                  </p>
                  <div className="my-placements-home-page__mobile-card-2-agency-full-name-container">
                    <div className="my-placements-home-page__mobile-card-2-agency-container">
                      <p className="my-placements-home-page__mobile-card-2-agency">
                        Agency:{" "}
                        <span className="my-placements-home-page__mobile-card-2-agency-text">
                          Staffing Agency 2
                        </span>
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-2-full-name-container">
                      <p className="my-placements-home-page__mobile-card-2-full-name">
                        Full Name:
                      </p>
                      <p className="my-placements-home-page__mobile-card-2-full-name-text">
                        Tom Peterson
                      </p>
                    </div>
                  </div>
                  <div className="my-placements-home-page__mobile-card-2-industry-status-container">
                    <p className="my-placements-home-page__mobile-card-2-industry">
                      Industry:{" "}
                      <span className="my-placements-home-page__mobile-card-2-industry-name">
                        Healthcare
                      </span>
                    </p>
                    <div className="my-placements-home-page__mobile-card-2-status-container">
                      <label
                        className="my-placements-home-page__mobile-card-2-status-label"
                        htmlFor="mobile-status"
                      >
                        Status
                      </label>
                      <img
                        className="my-placements-home-page__mobile-card-2-menu-arrow-circle-down"
                        src={MenuArrowCircleDownIcon}
                        alt="Menu Arrow Circle Down"
                      />
                      <p className="my-placements-home-page__mobile-card-2-status-name">
                        Payment Sent
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-2-location">
                    Location:{" "}
                    <span className="my-placements-home-page__mobile-card-2-location-name">
                      Dallas, TX
                    </span>
                  </p>
                </div>
                <div className="my-placements-home-page__mobile-card-3">
                  <div className="my-placements-home-page__mobile-card-1-id-placement-date-container">
                    <div className="my-placements-home-page__mobile-card-1-id-container">
                      <label
                        className="my-placements-home-page__mobile-card-1-label"
                        htmlFor="mobile-id"
                      >
                        ID:
                      </label>
                      <p className="my-placements-home-page__mobile-card-1-id-number">
                        67838473
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-1-placement-date-container">
                      <label
                        className="my-placements-home-page__mobile-card-1-placement-date-label"
                        htmlFor="mobile-placement-date"
                      >
                        Placement Date:
                      </label>
                      <p className="my-placements-home-page__mobile-card-1-placement-date-text">
                        07/01/24
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-1-job-title">
                    Job Title:{" "}
                    <span className="my-placements-home-page__mobile-card-1-job-title-name">
                      Allied CMA
                    </span>
                  </p>
                  <div className="my-placements-home-page__mobile-card-1-agency-full-name-container">
                    <div className="my-placements-home-page__mobile-card-1-agency-container">
                      <p className="my-placements-home-page__mobile-card-1-agency">
                        Agency:{" "}
                        <span className="my-placements-home-page__mobile-card-1-agency-text">
                          First Staffing Inc.
                        </span>
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-1-full-name-container">
                      <p className="my-placements-home-page__mobile-card-1-full-name">
                        Full Name:
                      </p>
                      <p className="my-placements-home-page__mobile-card-1-full-name-text">
                        Tom Peterson
                      </p>
                    </div>
                  </div>
                  <div className="my-placements-home-page__mobile-card-1-industry-status-container">
                    <p className="my-placements-home-page__mobile-card-1-industry">
                      Industry:{" "}
                      <span className="my-placements-home-page__mobile-card-1-industry-name">
                        Healthcare
                      </span>
                    </p>
                    <div className="my-placements-home-page__mobile-card-1-status-container">
                      <label
                        className="my-placements-home-page__mobile-card-1-status-label"
                        htmlFor="mobile-status"
                      >
                        Status
                      </label>
                      <img
                        className="my-placements-home-page__mobile-card-1-menu-arrow-circle-down"
                        src={MenuArrowCircleDownIcon}
                        alt="Menu Arrow Circle Down"
                      />
                      <p className="my-placements-home-page__mobile-card-1-status-name">
                        Invoiced
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-1-location">
                    Location:{" "}
                    <span className="my-placements-home-page__mobile-card-1-location-name">
                      Dallas, TX
                    </span>
                  </p>
                </div>
                <div className="my-placements-home-page__mobile-card-2">
                  <div className="my-placements-home-page__mobile-card-2-id-placement-date-container">
                    <div className="my-placements-home-page__mobile-card-2-id-container">
                      <label
                        className="my-placements-home-page__mobile-card-2-label"
                        htmlFor="mobile-id"
                      >
                        ID:
                      </label>
                      <p className="my-placements-home-page__mobile-card-2-id-number">
                        67838473
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-2-placement-date-container">
                      <label
                        className="my-placements-home-page__mobile-card-2-placement-date-label"
                        htmlFor="mobile-placement-date"
                      >
                        Placement Date:
                      </label>
                      <p className="my-placements-home-page__mobile-card-2-placement-date-text">
                        07/01/24
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-2-job-title">
                    Job Title:{" "}
                    <span className="my-placements-home-page__mobile-card-2-job-title-name">
                      Allied CMA
                    </span>
                  </p>
                  <div className="my-placements-home-page__mobile-card-2-agency-full-name-container">
                    <div className="my-placements-home-page__mobile-card-2-agency-container">
                      <p className="my-placements-home-page__mobile-card-2-agency">
                        Agency:{" "}
                        <span className="my-placements-home-page__mobile-card-2-agency-text">
                          Staffing Agency 2
                        </span>
                      </p>
                    </div>
                    <div className="my-placements-home-page__mobile-card-2-full-name-container">
                      <p className="my-placements-home-page__mobile-card-2-full-name">
                        Full Name:
                      </p>
                      <p className="my-placements-home-page__mobile-card-2-full-name-text">
                        Tom Peterson
                      </p>
                    </div>
                  </div>
                  <div className="my-placements-home-page__mobile-card-2-industry-status-container">
                    <p className="my-placements-home-page__mobile-card-2-industry">
                      Industry:{" "}
                      <span className="my-placements-home-page__mobile-card-2-industry-name">
                        Healthcare
                      </span>
                    </p>
                    <div className="my-placements-home-page__mobile-card-2-status-container">
                      <label
                        className="my-placements-home-page__mobile-card-2-status-label"
                        htmlFor="mobile-status"
                      >
                        Status
                      </label>
                      <img
                        className="my-placements-home-page__mobile-card-2-menu-arrow-circle-down"
                        src={MenuArrowCircleDownIcon}
                        alt="Menu Arrow Circle Down"
                      />
                      <p className="my-placements-home-page__mobile-card-2-status-name">
                        Payment Sent
                      </p>
                    </div>
                  </div>
                  <p className="my-placements-home-page__mobile-card-2-location">
                    Location:{" "}
                    <span className="my-placements-home-page__mobile-card-2-location-name">
                      Dallas, TX
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-placements-home-page__tablet-container">
            <p className="my-placements-home-page__tablet-header-text">
              Placements
            </p>
            <div className="my-placements-home-page__tablet-invoiced-payment-sent-payment-received-completed-container">
              <div className="my-placements-home-page__tablet-invoiced-container">
                <p className="my-placements-home-page__tablet-invoiced-text">
                  Invoiced
                </p>
                <p className="my-placements-home-page__tablet-invoiced-number">
                  5
                </p>
              </div>
              <div className="my-placements-home-page__tablet-payment-sent-container">
                <p className="my-placements-home-page__tablet-payment-sent-text">
                  Payment Sent
                </p>
                <p className="my-placements-home-page__tablet-payment-sent-number">
                  6
                </p>
              </div>
              <div className="my-placements-home-page__tablet-payment-received-container">
                <p className="my-placements-home-page__tablet-payment-received-text">
                  Payment Received
                </p>
                <p className="my-placements-home-page__tablet-payment-received-number">
                  16
                </p>
              </div>
              <div className="my-placements-home-page__tablet-completed-container">
                <p className="my-placements-home-page__tablet-completed-text">
                  Completed
                </p>
                <p className="my-placements-home-page__tablet-completed-number">
                  11
                </p>
              </div>
            </div>
            <div className="my-placements-home-page__tablet-search-placements-container">
              <label className="my-placements-home-page__tablet-search-placements-label">
                Search Placements
              </label>
              <img
                className="my-placements-home-page__tablet-search-icon"
                src={SearchIcon}
                alt="Search Icon"
              />
              <input
                className="my-placements-home-page__tablet-search-placements-input"
                type="text"
              />
            </div>
            <table className="my-placements-home-page__tablet-placements-table">
              <thead className="my-placements-home-page__tablet-placements-header-row">
                <tr className="my-placements-home-page__tablet-placements-header-row-1">
                  <th className="my-placements-home-page__tablet-all-placements-header-column">
                    All Placements
                  </th>
                  <th className="my-placements-home-page__tablet-invoiced-header-column">
                    Invoiced
                  </th>
                  <th className="my-placements-home-page__tablet-payment-sent-header-column">
                    Payment Sent
                  </th>
                  <th className="my-placements-home-page__tablet-payment-received-header-column">
                    Payment Received
                  </th>
                  <th className="my-placements-home-page__tablet-completed-header-column">
                    Completed
                  </th>
                  <th className="my-placements-home-page__tablet-rating-header-column">
                    Rating
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
