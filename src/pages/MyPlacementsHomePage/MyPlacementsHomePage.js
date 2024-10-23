import React from "react";
import "./MyPlacementsHomePage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import PlacementsSidePanel from "../../components/PlacementsSidePanel/PlacementsSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";

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
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
