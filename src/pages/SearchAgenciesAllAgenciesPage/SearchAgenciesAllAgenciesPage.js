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
          <div className="search-agencies-all-agencies-page__mobile-card-container">
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
            <div className="search-agencies-all-agencies-page__staffing-smarter-card">
              <p className="search-agencies-all-agencies-page__staffing-smarter-card-header">
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-header-text">
                  Agency:
                </span>
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-header-agency">
                  Staffing Smarter
                </span>
              </p>
              <div className="search-agencies-all-agencies-page__staffing-smarter-card-rating-container">
                <span className="search-agencies-all-agencies-page__rating-text">
                  Rating:
                </span>
                <div className="search-agencies-all-agencies-page__staffing-smarter-card-star-container">
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
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-rating-number">
                  5
                </span>
              </div>
              <div className="search-agencies-all-agencies-page__staffing-smarter-card-industry-container">
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-industry-text">
                  Industry:
                </span>
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-industry-name">
                  Manufacturing
                </span>
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-industry-action">
                  Action:
                </span>
              </div>
              <div className="search-agencies-all-agencies-page__staffing-smarter-card-number-of-jobs-container">
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-number-of-jobs-text">
                  # of Jobs:
                </span>
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-number-of-jobs-number">
                  6
                </span>
                <button className="search-agencies-all-agencies-page__staffing-smarter-card-message-button">
                  Message
                </button>
              </div>
              <div className="search-agencies-all-agencies-page__staffing-smarter-card-number-of-candidates-container">
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-number-of-candidates-text">
                  # of Candidates:
                </span>
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-number-of-candidates-number">
                  3
                </span>
                <button className="search-agencies-all-agencies-page__staffing-smarter-card-request-partnership-button">
                  Request Partnership
                </button>
              </div>
            </div>
            <div className="search-agencies-all-agencies-page__champion-agency-card">
              <p className="search-agencies-all-agencies-page__champion-agency-card-header">
                <span className="search-agencies-all-agencies-page__champion-agency-card-header-text">
                  Agency:
                </span>
                <span className="search-agencies-all-agencies-page__champion-agency-card-header-agency">
                  Champion Agency
                </span>
              </p>
              <div className="search-agencies-all-agencies-page__champion-agency-card-rating-container">
                <span className="search-agencies-all-agencies-page__rating-text">
                  Rating:
                </span>
                <div className="search-agencies-all-agencies-page__champion-agency-card-star-container">
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
                <span className="search-agencies-all-agencies-page__champion-agency-card-rating-number">
                  4
                </span>
              </div>
              <div className="search-agencies-all-agencies-page__champion-agency-card-industry-container">
                <span className="search-agencies-all-agencies-page__champion-agency-card-industry-text">
                  Industry:
                </span>
                <span className="search-agencies-all-agencies-page__champion-agency-card-industry-name">
                  Oil & Gas
                </span>
                <span className="search-agencies-all-agencies-page__champion-agency-card-industry-action">
                  Action:
                </span>
              </div>
              <div className="search-agencies-all-agencies-page__champion-agency-card-number-of-jobs-container">
                <span className="search-agencies-all-agencies-page__champion-agency-card-number-of-jobs-text">
                  # of Jobs:
                </span>
                <span className="search-agencies-all-agencies-page__champion-agency-card-number-of-jobs-number">
                  3
                </span>
                <button className="search-agencies-all-agencies-page__champion-agency-card-message-button">
                  Message
                </button>
              </div>
              <div className="search-agencies-all-agencies-page__champion-agency-card-number-of-candidates-container">
                <span className="search-agencies-all-agencies-page__champion-agency-card-number-of-candidates-text">
                  # of Candidates:
                </span>
                <span className="search-agencies-all-agencies-page__champion-agency-card-number-of-candidates-number">
                  8
                </span>
                <button className="search-agencies-all-agencies-page__champion-agency-card-request-partnership-button">
                  Request Partnership
                </button>
              </div>
            </div>
            <div className="search-agencies-all-agencies-page__first-agency-card">
              <p className="search-agencies-all-agencies-page__first-agency-card-header">
                <span className="search-agencies-all-agencies-page__first-agency-card-header-text">
                  Agency:
                </span>
                <span className="search-agencies-all-agencies-page__first-agency-card-header-agency">
                  First Agency
                </span>
                <img
                  className="search-agencies-all-agencies-page__partnership-logo"
                  src={PartnershipLogo}
                  alt="Partnership Logo"
                />
              </p>
              <div className="search-agencies-all-agencies-page__first-agency-card-rating-container">
                <span className="search-agencies-all-agencies-page__rating-text">
                  Rating:
                </span>
                <div className="search-agencies-all-agencies-page__first-agency-card-star-container">
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
                <span className="search-agencies-all-agencies-page__first-agency-card-rating-number">
                  5
                </span>
              </div>
              <div className="search-agencies-all-agencies-page__first-agency-card-industry-container">
                <span className="search-agencies-all-agencies-page__first-agency-card-industry-text">
                  Industry:
                </span>
                <span className="search-agencies-all-agencies-page__first-agency-card-industry-name">
                  Manufacturing
                </span>
                <span className="search-agencies-all-agencies-page__first-agency-card-industry-action">
                  Action:
                </span>
              </div>
              <div className="search-agencies-all-agencies-page__first-agency-card-number-of-jobs-container">
                <span className="search-agencies-all-agencies-page__first-agency-card-number-of-jobs-text">
                  # of Jobs:
                </span>
                <span className="search-agencies-all-agencies-page__first-agency-card-number-of-jobs-number">
                  22
                </span>
                <button className="search-agencies-all-agencies-page__first-agency-card-message-button">
                  Message
                </button>
              </div>
              <div className="search-agencies-all-agencies-page__first-agency-card-number-of-candidates-container">
                <span className="search-agencies-all-agencies-page__first-agency-card-number-of-candidates-text">
                  # of Candidates:
                </span>
                <span className="search-agencies-all-agencies-page__first-agency-card-number-of-candidates-number">
                  28
                </span>
                <button className="search-agencies-all-agencies-page__first-agency-card-request-partnership-button">
                  Request Partnership
                </button>
              </div>
            </div>
            <div className="search-agencies-all-agencies-page__excellence-staffing-card">
              <p className="search-agencies-all-agencies-page__excellence-staffing-card-header">
                <span className="search-agencies-all-agencies-page__excellence-staffing-card-header-text">
                  Agency:
                </span>
                <span className="search-agencies-all-agencies-page__excellence-staffing-card-header-agency">
                  Excellence Staffing Inc.
                </span>
              </p>
              <div className="search-agencies-all-agencies-page__excellence-staffing-card-rating-container">
                <span className="search-agencies-all-agencies-page__rating-text">
                  Rating:
                </span>
                <div className="search-agencies-all-agencies-page__excellence-staffing-card-star-container">
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
                <span className="search-agencies-all-agencies-page__excellence-staffing-card-rating-number">
                  3
                </span>
              </div>
              <div className="search-agencies-all-agencies-page__excellence-staffing-card-industry-container">
                <span className="search-agencies-all-agencies-page__excellence-staffing-agency-card-industry-text">
                  Industry:
                </span>
                <span className="search-agencies-all-agencies-page__excellence-staffing-card-industry-name">
                  Education
                </span>
                <span className="search-agencies-all-agencies-page__excellence-staffing-card-industry-action">
                  Action:
                </span>
              </div>
              <div className="search-agencies-all-agencies-page__excellence-staffing-card-number-of-jobs-container">
                <span className="search-agencies-all-agencies-page__excellence-staffing-card-number-of-jobs-text">
                  # of Jobs:
                </span>
                <span className="search-agencies-all-agencies-page__excellence-staffing-card-number-of-jobs-number">
                  3
                </span>
                <button className="search-agencies-all-agencies-page__excellence-staffing-card-message-button">
                  Message
                </button>
              </div>
              <div className="search-agencies-all-agencies-page__excellence-staffing-card-number-of-candidates-container">
                <span className="search-agencies-all-agencies-page__excellence-staffing-agency-card-number-of-candidates-text">
                  # of Candidates:
                </span>
                <span className="search-agencies-all-agencies-page__excellence-staffing-card-number-of-candidates-number">
                  8
                </span>
                <button className="search-agencies-all-agencies-page__excellence-staffing-card-request-partnership-button">
                  Request Partnership
                </button>
              </div>
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
            <div className="search-agencies-all-agencies-page__staffing-smarter-card">
              <p className="search-agencies-all-agencies-page__staffing-smarter-card-header">
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-header-text">
                  Agency:
                </span>
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-header-agency">
                  Staffing Smarter
                </span>
              </p>
              <div className="search-agencies-all-agencies-page__staffing-smarter-card-rating-container">
                <span className="search-agencies-all-agencies-page__rating-text">
                  Rating:
                </span>
                <div className="search-agencies-all-agencies-page__staffing-smarter-card-star-container">
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
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-rating-number">
                  5
                </span>
              </div>
              <div className="search-agencies-all-agencies-page__staffing-smarter-card-industry-container">
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-industry-text">
                  Industry:
                </span>
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-industry-name">
                  Manufacturing
                </span>
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-industry-action">
                  Action:
                </span>
              </div>
              <div className="search-agencies-all-agencies-page__staffing-smarter-card-number-of-jobs-container">
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-number-of-jobs-text">
                  # of Jobs:
                </span>
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-number-of-jobs-number">
                  6
                </span>
                <button className="search-agencies-all-agencies-page__staffing-smarter-card-message-button">
                  Message
                </button>
              </div>
              <div className="search-agencies-all-agencies-page__staffing-smarter-card-number-of-candidates-container">
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-number-of-candidates-text">
                  # of Candidates:
                </span>
                <span className="search-agencies-all-agencies-page__staffing-smarter-card-number-of-candidates-number">
                  3
                </span>
                <button className="search-agencies-all-agencies-page__staffing-smarter-card-request-partnership-button">
                  Request Partnership
                </button>
              </div>
            </div>
            <div className="search-agencies-all-agencies-page__champion-agency-card">
              <p className="search-agencies-all-agencies-page__champion-agency-card-header">
                <span className="search-agencies-all-agencies-page__champion-agency-card-header-text">
                  Agency:
                </span>
                <span className="search-agencies-all-agencies-page__champion-agency-card-header-agency">
                  Champion Agency
                </span>
              </p>
              <div className="search-agencies-all-agencies-page__champion-agency-card-rating-container">
                <span className="search-agencies-all-agencies-page__rating-text">
                  Rating:
                </span>
                <div className="search-agencies-all-agencies-page__champion-agency-card-star-container">
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
                <span className="search-agencies-all-agencies-page__champion-agency-card-rating-number">
                  4
                </span>
              </div>
              <div className="search-agencies-all-agencies-page__champion-agency-card-industry-container">
                <span className="search-agencies-all-agencies-page__champion-agency-card-industry-text">
                  Industry:
                </span>
                <span className="search-agencies-all-agencies-page__champion-agency-card-industry-name">
                  Oil & Gas
                </span>
                <span className="search-agencies-all-agencies-page__champion-agency-card-industry-action">
                  Action:
                </span>
              </div>
              <div className="search-agencies-all-agencies-page__champion-agency-card-number-of-jobs-container">
                <span className="search-agencies-all-agencies-page__champion-agency-card-number-of-jobs-text">
                  # of Jobs:
                </span>
                <span className="search-agencies-all-agencies-page__champion-agency-card-number-of-jobs-number">
                  3
                </span>
                <button className="search-agencies-all-agencies-page__champion-agency-card-message-button">
                  Message
                </button>
              </div>
              <div className="search-agencies-all-agencies-page__champion-agency-card-number-of-candidates-container">
                <span className="search-agencies-all-agencies-page__champion-agency-card-number-of-candidates-text">
                  # of Candidates:
                </span>
                <span className="search-agencies-all-agencies-page__champion-agency-card-number-of-candidates-number">
                  8
                </span>
                <button className="search-agencies-all-agencies-page__champion-agency-card-request-partnership-button">
                  Request Partnership
                </button>
              </div>
            </div>
            <div className="search-agencies-all-agencies-page__first-agency-card">
              <p className="search-agencies-all-agencies-page__first-agency-card-header">
                <span className="search-agencies-all-agencies-page__first-agency-card-header-text">
                  Agency:
                </span>
                <span className="search-agencies-all-agencies-page__first-agency-card-header-agency">
                  First Agency
                </span>
                <img
                  className="search-agencies-all-agencies-page__partnership-logo"
                  src={PartnershipLogo}
                  alt="Partnership Logo"
                />
              </p>
              <div className="search-agencies-all-agencies-page__first-agency-card-rating-container">
                <span className="search-agencies-all-agencies-page__rating-text">
                  Rating:
                </span>
                <div className="search-agencies-all-agencies-page__first-agency-card-star-container">
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
                <span className="search-agencies-all-agencies-page__first-agency-card-rating-number">
                  5
                </span>
              </div>
              <div className="search-agencies-all-agencies-page__first-agency-card-industry-container">
                <span className="search-agencies-all-agencies-page__first-agency-card-industry-text">
                  Industry:
                </span>
                <span className="search-agencies-all-agencies-page__first-agency-card-industry-name">
                  Manufacturing
                </span>
                <span className="search-agencies-all-agencies-page__first-agency-card-industry-action">
                  Action:
                </span>
              </div>
              <div className="search-agencies-all-agencies-page__first-agency-card-number-of-jobs-container">
                <span className="search-agencies-all-agencies-page__first-agency-card-number-of-jobs-text">
                  # of Jobs:
                </span>
                <span className="search-agencies-all-agencies-page__first-agency-card-number-of-jobs-number">
                  22
                </span>
                <button className="search-agencies-all-agencies-page__first-agency-card-message-button">
                  Message
                </button>
              </div>
              <div className="search-agencies-all-agencies-page__first-agency-card-number-of-candidates-container">
                <span className="search-agencies-all-agencies-page__first-agency-card-number-of-candidates-text">
                  # of Candidates:
                </span>
                <span className="search-agencies-all-agencies-page__first-agency-card-number-of-candidates-number">
                  28
                </span>
                <button className="search-agencies-all-agencies-page__first-agency-card-request-partnership-button">
                  Request Partnership
                </button>
              </div>
            </div>
            <div className="search-agencies-all-agencies-page__excellence-staffing-card">
              <p className="search-agencies-all-agencies-page__excellence-staffing-card-header">
                <span className="search-agencies-all-agencies-page__excellence-staffing-card-header-text">
                  Agency:
                </span>
                <span className="search-agencies-all-agencies-page__excellence-staffing-card-header-agency">
                  Excellence Staffing Inc.
                </span>
              </p>
              <div className="search-agencies-all-agencies-page__excellence-staffing-card-rating-container">
                <span className="search-agencies-all-agencies-page__rating-text">
                  Rating:
                </span>
                <div className="search-agencies-all-agencies-page__excellence-staffing-card-star-container">
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
                <span className="search-agencies-all-agencies-page__excellence-staffing-card-rating-number">
                  3
                </span>
              </div>
              <div className="search-agencies-all-agencies-page__excellence-staffing-card-industry-container">
                <span className="search-agencies-all-agencies-page__excellence-staffing-agency-card-industry-text">
                  Industry:
                </span>
                <span className="search-agencies-all-agencies-page__excellence-staffing-card-industry-name">
                  Education
                </span>
                <span className="search-agencies-all-agencies-page__excellence-staffing-card-industry-action">
                  Action:
                </span>
              </div>
              <div className="search-agencies-all-agencies-page__excellence-staffing-card-number-of-jobs-container">
                <span className="search-agencies-all-agencies-page__excellence-staffing-card-number-of-jobs-text">
                  # of Jobs:
                </span>
                <span className="search-agencies-all-agencies-page__excellence-staffing-card-number-of-jobs-number">
                  3
                </span>
                <button className="search-agencies-all-agencies-page__excellence-staffing-card-message-button">
                  Message
                </button>
              </div>
              <div className="search-agencies-all-agencies-page__excellence-staffing-card-number-of-candidates-container">
                <span className="search-agencies-all-agencies-page__excellence-staffing-agency-card-number-of-candidates-text">
                  # of Candidates:
                </span>
                <span className="search-agencies-all-agencies-page__excellence-staffing-card-number-of-candidates-number">
                  8
                </span>
                <button className="search-agencies-all-agencies-page__excellence-staffing-card-request-partnership-button">
                  Request Partnership
                </button>
              </div>
            </div>
          </div>
          <table className="search-agencies-all-agencies-page__tablet-table">
            <thead className="search-agencies-all-agencies-page__header-row">
              <tr>
                <th className="search-agencies-all-agencies-page__agency-name-row">
                  Agency Name{" "}
                  <img
                    className="search-agencies-all-agencies-page__tablet-arrow-gray-icon"
                    src={MenuCircleArrowGrayIcon}
                    alt="Arrow Gray Icon"
                  />
                </th>
                <th className="search-agencies-all-agencies-page__rating-name-row">
                  Rating{" "}
                  <img
                    className="search-agencies-all-agencies-page__tablet-arrow-gray-icon"
                    src={MenuCircleArrowGrayIcon}
                    alt="Arrow Gray Icon"
                  />
                </th>
                <th className="search-agencies-all-agencies-page__industry-row">
                  Industry{" "}
                  <img
                    className="search-agencies-all-agencies-page__tablet-arrow-gray-icon"
                    src={MenuCircleArrowGrayIcon}
                    alt="Arrow Gray Icon"
                  />
                </th>
                <th className="search-agencies-all-agencies-page__number-of-jobs-row">
                  # of Jobs{" "}
                  <img
                    className="search-agencies-all-agencies-page__tablet-arrow-gray-icon"
                    src={MenuCircleArrowGrayIcon}
                    alt="Arrow Gray Icon"
                  />
                </th>
                <th className="search-agencies-all-agencies-page__number-of-candidates-row">
                  # of Candidates{" "}
                  <img
                    className="search-agencies-all-agencies-page__tablet-arrow-gray-icon"
                    src={MenuCircleArrowGrayIcon}
                    alt="Arrow Gray Icon"
                  />
                </th>
                <th className="search-agencies-all-agencies-page__action-row">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="search-agencies-all-agencies-page__table-row">
                <td className="search-agencies-all-agencies-page__agency-name-data-row">
                  HumanRe Agency{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-partnership-logo"
                    src={PartnershipLogo}
                    alt="Partnership Logo"
                  />
                </td>
                <td className="search-agencies-all-agencies-page__rating-data-row-five-stars">
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />
                  <span className="search-agencies-all-agencies-page__table-rating-text">
                    5
                  </span>
                </td>
                <td className="search-agencies-all-agencies-page__industry-data-row">
                  Manufacturing
                </td>
                <td className="search-agencies-all-agencies-page__number-of-jobs-data-row">
                  6
                </td>
                <td className="search-agencies-all-agencies-page__number-of-candidates-data-row">
                  3
                </td>
                <td className="search-agencies-all-agencies-page__action-data-row">
                  <button className="search-agencies-all-agencies-page__message-button">
                    Message
                  </button>
                  <button className="search-agencies-all-agencies-page__request-partnership-button">
                    Request Partnership
                  </button>
                </td>
              </tr>
              <tr className="search-agencies-all-agencies-page__table-row-blue">
                <td className="search-agencies-all-agencies-page__agency-name-data-row">
                  Acme Agency{" "}
                </td>
                <td className="search-agencies-all-agencies-page__rating-data-row-four-stars">
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />
                  <span className="search-agencies-all-agencies-page__table-rating-text">
                    4
                  </span>
                </td>
                <td className="search-agencies-all-agencies-page__industry-data-row">
                  Healthcare
                </td>
                <td className="search-agencies-all-agencies-page__number-of-jobs-data-row">
                  27
                </td>
                <td className="search-agencies-all-agencies-page__number-of-candidates-data-row">
                  0
                </td>
                <td className="search-agencies-all-agencies-page__action-data-row">
                  <button className="search-agencies-all-agencies-page__message-button">
                    Message
                  </button>
                  <button className="search-agencies-all-agencies-page__request-partnership-button">
                    Request Partnership
                  </button>
                </td>
              </tr>
              <tr className="search-agencies-all-agencies-page__table-row">
                <td className="search-agencies-all-agencies-page__agency-name-data-row">
                  Staffing Smarter
                </td>
                <td className="search-agencies-all-agencies-page__rating-data-row-five-stars">
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />
                  <span className="search-agencies-all-agencies-page__table-rating-text">
                    5
                  </span>
                </td>
                <td className="search-agencies-all-agencies-page__industry-data-row">
                  Healthcare
                </td>
                <td className="search-agencies-all-agencies-page__number-of-jobs-data-row">
                  11
                </td>
                <td className="search-agencies-all-agencies-page__number-of-candidates-data-row">
                  1
                </td>
                <td className="search-agencies-all-agencies-page__action-data-row">
                  <button className="search-agencies-all-agencies-page__message-button">
                    Message
                  </button>
                  <button className="search-agencies-all-agencies-page__request-partnership-button">
                    Request Partnership
                  </button>
                </td>
              </tr>
              <tr className="search-agencies-all-agencies-page__table-row-blue">
                <td className="search-agencies-all-agencies-page__agency-name-data-row">
                  Champion Agency
                  <img
                    className="search-agencies-all-agencies-page__table-partnership-logo"
                    src={PartnershipLogo}
                    alt="Partnership Logo"
                  />
                </td>
                <td className="search-agencies-all-agencies-page__rating-data-row-four-stars">
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />
                  <span className="search-agencies-all-agencies-page__table-rating-text">
                    4
                  </span>
                </td>
                <td className="search-agencies-all-agencies-page__industry-data-row">
                  Oil and Gas
                </td>
                <td className="search-agencies-all-agencies-page__number-of-jobs-data-row">
                  3
                </td>
                <td className="search-agencies-all-agencies-page__number-of-candidates-data-row">
                  8
                </td>
                <td className="search-agencies-all-agencies-page__action-data-row">
                  <button className="search-agencies-all-agencies-page__message-button">
                    Message
                  </button>
                  <button className="search-agencies-all-agencies-page__request-partnership-button">
                    Request Partnership
                  </button>
                </td>
              </tr>
              <tr className="search-agencies-all-agencies-page__table-row">
                <td className="search-agencies-all-agencies-page__agency-name-data-row">
                  First Agency
                  <img
                    className="search-agencies-all-agencies-page__table-partnership-logo"
                    src={PartnershipLogo}
                    alt="Partnership Logo"
                  />
                </td>
                <td className="search-agencies-all-agencies-page__rating-data-row-five-stars">
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />
                  <span className="search-agencies-all-agencies-page__table-rating-text">
                    5
                  </span>
                </td>
                <td className="search-agencies-all-agencies-page__industry-data-row">
                  Manufacturing
                </td>
                <td className="search-agencies-all-agencies-page__number-of-jobs-data-row">
                  22
                </td>
                <td className="search-agencies-all-agencies-page__number-of-candidates-data-row">
                  28
                </td>
                <td className="search-agencies-all-agencies-page__action-data-row">
                  <button className="search-agencies-all-agencies-page__message-button">
                    Message
                  </button>
                  <button className="search-agencies-all-agencies-page__request-partnership-button">
                    Request Partnership
                  </button>
                </td>
              </tr>
              <tr className="search-agencies-all-agencies-page__table-row-blue">
                <td className="search-agencies-all-agencies-page__agency-name-data-row-excellence-staffing-inc">
                  Excellence Staffing Inc.
                  <img
                    className="search-agencies-all-agencies-page__table-partnership-logo"
                    src={PartnershipLogo}
                    alt="Partnership Logo"
                  />
                </td>
                <td className="search-agencies-all-agencies-page__rating-data-row-three-stars">
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <span className="search-agencies-all-agencies-page__table-rating-text">
                    3
                  </span>
                </td>
                <td className="search-agencies-all-agencies-page__industry-data-row">
                  Education
                </td>
                <td className="search-agencies-all-agencies-page__number-of-jobs-data-row">
                  34
                </td>
                <td className="search-agencies-all-agencies-page__number-of-candidates-data-row">
                  0
                </td>
                <td className="search-agencies-all-agencies-page__action-data-row">
                  <button className="search-agencies-all-agencies-page__message-button">
                    Message
                  </button>
                  <button className="search-agencies-all-agencies-page__request-partnership-button">
                    Request Partnership
                  </button>
                </td>
              </tr>
              <tr className="search-agencies-all-agencies-page__table-row">
                <td className="search-agencies-all-agencies-page__agency-name-data-row-great-solutions-staffing">
                  Great Solutions Staffing
                  <img
                    className="search-agencies-all-agencies-page__table-partnership-logo"
                    src={PartnershipLogo}
                    alt="Partnership Logo"
                  />
                </td>
                <td className="search-agencies-all-agencies-page__rating-data-row-five-stars">
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />
                  <span className="search-agencies-all-agencies-page__table-rating-text">
                    5
                  </span>
                </td>
                <td className="search-agencies-all-agencies-page__industry-data-row">
                 Healthcare
                </td>
                <td className="search-agencies-all-agencies-page__number-of-jobs-data-row">
                  12
                </td>
                <td className="search-agencies-all-agencies-page__number-of-candidates-data-row">
                  13
                </td>
                <td className="search-agencies-all-agencies-page__action-data-row">
                  <button className="search-agencies-all-agencies-page__message-button">
                    Message
                  </button>
                  <button className="search-agencies-all-agencies-page__request-partnership-button">
                    Request Partnership
                  </button>
                </td>
              </tr>
              <tr className="search-agencies-all-agencies-page__table-row-blue">
                <td className="search-agencies-all-agencies-page__agency-name-data-row">
                  Hilton Agency
                  <img
                    className="search-agencies-all-agencies-page__table-partnership-logo"
                    src={PartnershipLogo}
                    alt="Partnership Logo"
                  />
                </td>
                <td className="search-agencies-all-agencies-page__rating-data-row-three-stars">
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <img
                    className="search-agencies-all-agencies-page__table-star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />{" "}
                  <span className="search-agencies-all-agencies-page__table-rating-text">
                    4
                  </span>
                </td>
                <td className="search-agencies-all-agencies-page__industry-data-row">
                  Oil and Gas
                </td>
                <td className="search-agencies-all-agencies-page__number-of-jobs-data-row">
                  17
                </td>
                <td className="search-agencies-all-agencies-page__number-of-candidates-data-row">
                  7
                </td>
                <td className="search-agencies-all-agencies-page__action-data-row">
                  <button className="search-agencies-all-agencies-page__message-button">
                    Message
                  </button>
                  <button className="search-agencies-all-agencies-page__request-partnership-button">
                    Request Partnership
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
