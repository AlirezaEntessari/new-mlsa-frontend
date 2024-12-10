import React from "react";
import "./RatingsMyRatingsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import MLSAValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";
import HumanReLogo from "../../assets/icons/HumanReLogo.svg";
import RatingStarMediumIcon from "../../assets/icons/StarMediumRatings.svg";
import RatingStarMediumPartialIcon from "../../assets/icons/StarMediumRatings.7.svg";
import RatingStarSmallIcon from "../../assets/icons/RatingStar.svg";

export default function RatingsMyRatingsPage() {
  return (
    <div className="ratings-my-ratings-page">
      <HeaderWithProfilePic />
      <div className="ratings-my-ratings-page__main-container">
        <RatingsSidePanel />
        <div className="ratings-my-ratings-page__right-container">
          <div className="ratings-my-ratings-page__mobile-container">
            <div className="ratings-my-ratings-page__mobile-header-container">
              <p className="ratings-my-ratings-page__mobile-header">
                My Ratings & Feedback
              </p>
              <img
                className="ratings-my-ratings-page__mobile-mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Value Assurance Icon"
              />
            </div>
            <div className="ratings-my-ratings-page__mobile-button-container">
              <div className="ratings-my-ratings-page__mobile-top-button-container">
                <button className="ratings-my-ratings-page__mobile-rate-an-agency-button">
                  Rate an Agency
                </button>
                <button className="ratings-my-ratings-page__mobile-my-ratings-button">
                  My Ratings
                </button>
              </div>
              <div className="ratings-my-ratings-page__mobile-bottom-button-container">
                <button className="ratings-my-ratings-page__mobile-search-agencies-button">
                  Search Agencies
                </button>
                <button className="ratings-my-ratings-page__mobile-conflict-resolution-button">
                  Conflict Resolution
                </button>
              </div>
            </div>
            <div className="ratings-my-ratings-page__mobile-my-rating-container">
              <p className="ratings-my-ratings-page__mobile-my-rating-header">
                My Rating:
              </p>
              <div className="ratings-my-ratings-page__mobile-my-rating-reviews-container">
                <span className="ratings-my-ratings-page__mobile-my-rating-reviews-text">
                  4.7
                </span>
                <div className="ratings-my-ratings-page__mobile-star-container">
                  <img
                    className="ratings-my-ratings-page__mobile-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-rating-star-medium-partial-icon"
                    src={RatingStarMediumPartialIcon}
                    alt="Rating Star Medium Partial Icon"
                  />
                </div>
              </div>
              <img
                className="ratings-my-ratings-page__mobile-human-re-logo"
                src={HumanReLogo}
                alt="HumanRe Logo"
              />
                <p className="ratings-my-ratings-page__mobile-agency-rating-text">
                  Agency Rating
                </p>
                <div className="ratings-my-ratings-page__mobile-agency-rating-reviews-container">
                  <span className="ratings-my-ratings-page__mobile-agency-rating-reviews-text">
                    4.6
                  </span>
                  <div className="ratings-my-ratings-page__mobile-agency-rating-reviews-star-container">
                    <img
                      className="ratings-my-ratings-page__mobile-rating-star-small-icon"
                      src={RatingStarSmallIcon}
                      alt="Rating Star Small Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-rating-star-small-icon"
                      src={RatingStarSmallIcon}
                      alt="Rating Star Medium Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-rating-star-small-icon"
                      src={RatingStarSmallIcon}
                      alt="Rating Star Small Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-rating-star-small-icon"
                      src={RatingStarSmallIcon}
                      alt="Rating Star Small Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-rating-star-small-partial-icon"
                      src={RatingStarMediumPartialIcon}
                      alt="Rating Star Medium Partial Icon"
                    />
                  </div>
                </div>
            </div>
            <div className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-container">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
