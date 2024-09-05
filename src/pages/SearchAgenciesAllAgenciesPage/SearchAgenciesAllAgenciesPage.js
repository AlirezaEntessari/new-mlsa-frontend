import React, { useState } from "react";
import "./SearchAgenciesAllAgenciesPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import AgenciesSidePanel from "../../components/AgenciesSidePanel/AgenciesSidePanel";
import SearchIcon from "../../assets/icons/Search (2).svg";
import MenuCircleArrowGrayIcon from "../../assets/icons/MenuCircleArrowGray.svg";
import PartnershipLogo from "../../assets/icons/PartnershipLogo25.svg";
import RatingStarLogo from "../../assets/icons/RatingStar.svg";

export default function SearchAgenciesAllAgenciesPage() {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const getButtonClass = (button) => {
    return activeButton === button
      ? "search-agencies-all-agencies-page__button--active"
      : "";
  };

  return (
    <div className="search-agencies-all-agencies-page">
      <HeaderWithProfilePic />
      <div className="search-agencies-all-agencies-page__main-container">
        <AgenciesSidePanel />
        <div className="search-agencies-all-agencies-page__right-container">
          <p className="search-agencies-all-agencies-page__header">
            Search Agencies
          </p>
          <div className="search-agencies-all-agencies-page__button-container">
            <button
              className={`search-agencies-all-agencies-page__all-agencies-button ${getButtonClass(
                "all-agencies"
              )}`}
              onClick={() => handleButtonClick("all-agencies")}
            >
              All Agencies
            </button>
            <button
              className={`search-agencies-all-agencies-page__industry-button ${getButtonClass(
                "industry"
              )}`}
              onClick={() => handleButtonClick("industry")}
            >
              Industry
            </button>
            <button
              className={`search-agencies-all-agencies-page__ratings-button ${getButtonClass(
                "ratings"
              )}`}
              onClick={() => handleButtonClick("ratings")}
            >
              Ratings
            </button>
          </div>
          <img
            className="search-agencies-all-agencies-page__search-icon"
            src={SearchIcon}
            alt="Search Icon"
          />
          <input
            className="search-agencies-all-agencies-page__keyword-search-input"
            type="text"
            placeholder="Keyword Search"
          />
          <div className="search-agencies-all-agencies-page__sort-by-agency-name-container">
            <span className="search-agencies-all-agencies-page__sort-by-text">
              Sort by:
            </span>
            <span className="search-agencies-all-agencies-page__agency-name-text">
              Agency Name
            </span>
            <img
              className="search-agencies-all-agencies-page__menu-circle-arrow-gray-icon"
              src={MenuCircleArrowGrayIcon}
              alt="Menu Circle Arrow Gray Icon"
            />
          </div>
          <div className="search-agencies-all-agencies-page__human-re-agency-card">
            <p className="search-agencies-all-agencies-page__human-re-agency-card-header">
              <span className="search-agencies-all-agencies-page__human-re-agency-card-header-text">
                Agency:
              </span>
              <span className="search-agencies-all-agencies-page__human-re-agency-card-header-agency">
                HumanRe Agency
              </span>
              <img
                className="search-agencies-all-agencies-page__partnership-logo"
                src={PartnershipLogo}
                alt="Partnership Logo"
              />
            </p>
            <div className="search-agencies-all-agencies-page__human-re-agency-card-rating-container">
              <span className="search-agencies-all-agencies-page__rating-text">
                Rating:
              </span>
              <div className="search-agencies-all-agencies-page__human-re-agency-card-star-container">
                <img
                  className="search-agencies-all-agencies-page__rating-star-logo"
                  src={RatingStarLogo}
                  alt="Rating Star"
                />
                <img
                  className="search-agencies-all-agencies-page__rating-star-logo"
                  src={RatingStarLogo}
                  alt="Rating Star"
                />
                <img
                  className="search-agencies-all-agencies-page__rating-star-logo"
                  src={RatingStarLogo}
                  alt="Rating Star"
                />
                <img
                  className="search-agencies-all-agencies-page__rating-star-logo"
                  src={RatingStarLogo}
                  alt="Rating Star"
                />
                <img
                  className="search-agencies-all-agencies-page__rating-star-logo"
                  src={RatingStarLogo}
                  alt="Rating Star"
                />
              </div>
              <span className="search-agencies-all-agencies-page__human-re-agency-card-rating-number">
                5
              </span>
            </div>
            <div className="search-agencies-all-agencies-page__human-re-agency-card-industry-container">
              <span className="search-agencies-all-agencies-page__human-re-agency-card-industry-text">
                Industry:
              </span>
              <span className="search-agencies-all-agencies-page__human-re-agency-card-industry-name">
                Manufacturing
              </span>
              <span className="search-agencies-all-agencies-page__human-re-agency-card-industry-action">
                Action:
              </span>
            </div>
            <div className="search-agencies-all-agencies-page__human-re-agency-card-number-of-jobs-container">
              <span className="search-agencies-all-agencies-page__human-re-agency-card-number-of-jobs-text">
                # of Jobs:
              </span>
              <span className="search-agencies-all-agencies-page__human-re-agency-card-number-of-jobs-number">
                6
              </span>
              <button className="search-agencies-all-agencies-page__human-re-agency-card-message-button">
                Message
              </button>
            </div>
            <div className="search-agencies-all-agencies-page__human-re-agency-card-number-of-candidates-container">
              <span className="search-agencies-all-agencies-page__human-re-agency-card-number-of-candidates-text">
                # of Candidates:
              </span>
              <span className="search-agencies-all-agencies-page__human-re-agency-card-number-of-candidates-number">
                3
              </span>
              <button className="search-agencies-all-agencies-page__human-re-agency-card-request-partnership-button">
                Request Partnership
              </button>
            </div>
          </div>
          <div className="search-agencies-all-agencies-page__acme-agency-card">
            <p className="search-agencies-all-agencies-page__acme-agency-card-header">
              <span className="search-agencies-all-agencies-page__acme-agency-card-header-text">
                Agency:
              </span>
              <span className="search-agencies-all-agencies-page__acme-agency-card-header-agency">
                Acme Agency
              </span>
            </p>
            <div className="search-agencies-all-agencies-page__acme-agency-card-rating-container">
              <span className="search-agencies-all-agencies-page__rating-text">
                Rating:
              </span>
              <div className="search-agencies-all-agencies-page__acme-agency-card-star-container">
                <img
                  className="search-agencies-all-agencies-page__rating-star-logo"
                  src={RatingStarLogo}
                  alt="Rating Star"
                />
                <img
                  className="search-agencies-all-agencies-page__rating-star-logo"
                  src={RatingStarLogo}
                  alt="Rating Star"
                />
                <img
                  className="search-agencies-all-agencies-page__rating-star-logo"
                  src={RatingStarLogo}
                  alt="Rating Star"
                />
                <img
                  className="search-agencies-all-agencies-page__rating-star-logo"
                  src={RatingStarLogo}
                  alt="Rating Star"
                />
              </div>
              <span className="search-agencies-all-agencies-page__acme-agency-card-rating-number">
                4
              </span>
            </div>
            <div className="search-agencies-all-agencies-page__acme-agency-card-industry-container">
              <span className="search-agencies-all-agencies-page__acme-agency-card-industry-text">
                Industry:
              </span>
              <span className="search-agencies-all-agencies-page__acme-agency-card-industry-name">
                Healthcare
              </span>
              <span className="search-agencies-all-agencies-page__acme-agency-card-industry-action">
                Action:
              </span>
            </div>
            <div className="search-agencies-all-agencies-page__acme-agency-card-number-of-jobs-container">
              <span className="search-agencies-all-agencies-page__acme-agency-card-number-of-jobs-text">
                # of Jobs:
              </span>
              <span className="search-agencies-all-agencies-page__acme-agency-card-number-of-jobs-number">
                27
              </span>
              <button className="search-agencies-all-agencies-page__acme-agency-card-message-button">
                Message
              </button>
            </div>
            <div className="search-agencies-all-agencies-page__acme-agency-card-number-of-candidates-container">
              <span className="search-agencies-all-agencies-page__acme-agency-card-number-of-candidates-text">
                # of Candidates:
              </span>
              <span className="search-agencies-all-agencies-page__acme-agency-card-number-of-candidates-number">
                0
              </span>
              <button className="search-agencies-all-agencies-page__acme-agency-card-request-partnership-button">
                Request Partnership
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
