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
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
