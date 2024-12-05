import React from "react";
import "./RatingsHomePage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import MLSAValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";
import LargeOrangeStarIcon from "../../assets/icons/LargeOrangeStar.svg";

export default function RatingsHomePage() {
  return (
    <div className="ratings-home-page">
      <HeaderWithProfilePic />
      <div className="ratings-home-page__main-container">
        <RatingsSidePanel />
        <div className="ratings-home-page__right-container">
          <div className="ratings-home-page__mobile-container">
            <div className="ratings-home-page__mobile-header-container">
              <p className="ratings-home-page__mobile-header">
                Ratings & Feedback
              </p>
              <img
                className="ratings-home-page__mobile-mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Assurance Icon"
              />
            </div>
            <div className="ratings-home-page__mobile-button-container">
              <div className="ratings-home-page__mobile-top-button-container">
                <button className="ratings-home-page__mobile-rate-an-agency-button">
                  Rate an Agency
                </button>
                <button className="ratings-home-page__mobile-my-ratings-button">
                  My Ratings
                </button>
              </div>
              <div className="ratings-home-page__mobile-bottom-button-container">
                <button className="ratings-home-page__mobile-search-agencies-button">
                  Search Agencies
                </button>
                <button className="ratings-home-page__mobile-conflict-resolution-button">
                  Conflict Resolution
                </button>
              </div>
            </div>
            <p className="ratings-home-page__mobile-description-text">
              MLSA's value centered rating system is a transformative step that
              benefits both the company and prospective members. This system
              ensures that everyone who joins MLSA aligns with our core values
              of
              <span className="ratings-home-page__mobile-bolded-text">
                integrity, excellence, and collaboration.
              </span>
              By openly rating and showcasing these values, we foster a
              transparent and
              <span className="ratings-home-page__mobile-bolded-text">
                trust-filled community,
              </span>
              where members are recognized for their commitment to our shared
              principles. This not only enhances our internal culture but also
              <span className="ratings-home-page__mobile-bolded-text">
                attracts like-minded individuals
              </span>
              who are passionate about maintaining and upholding our standards.
              Ultimately, this values-based rating system creates a cohesive and
              motivated network,
              <span className="ratings-home-page__mobile-bolded-text">
                driving collective success
              </span>
              and reinforcing MLSA's reputation as a leader in ethical business
              practices.
            </p>
            <div className="ratings-home-page__mobile-about-ratings-container">
              <p className="ratings-home-page__mobile-about-ratings-header">
                About Ratings
              </p>
              <p className="ratings-home-page__mobile-about-ratings-description">
                Ratings are given for the following 4 criteria from 1-5 Stars:
              </p>
              <div className="ratings-home-page__mobile-about-ratings-content-container">
                <div className="ratings-home-page__mobile-about-ratings-left-content-container">
                  <p className="ratings-home-page__mobile-about-ratings-communication">
                    Communication
                  </p>
                  <p className="ratings-home-page__mobile-about-ratings-professionalism">
                    Professionalism
                  </p>
                  <p className="ratings-home-page__mobile-about-ratings-payment-timeliness">
                    Payment Timeliness
                  </p>
                  <p className="ratings-home-page__mobile-about-ratings-resource-quality">
                    Resource Quality
                  </p>
                </div>
                <img
                  className="ratings-home-page__mobile-large-orange-star-icon"
                  src={LargeOrangeStarIcon}
                  alt="Large Orange Star Icon"
                />
              </div>
            </div>
            <div className="ratings-home-page__mobile-feedback-container">
              <p className="ratings-home-page__mobile-feedback-header">
                Feedback
              </p>
              <p className="ratings-home-page__mobile-feedback-description">
                The feedback you receive reflects your ability to perform an
                honest and transparent transaction. If you disagree with any
                feedback you receive, you may challenge it by disputing it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
