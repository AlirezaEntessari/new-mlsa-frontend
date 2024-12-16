import React from "react";
import "./RatingsMyRatingsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import MLSAValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";
import HumanReLogo from "../../assets/icons/HumanReLogo.svg";
import RatingStarMediumIcon from "../../assets/icons/StarMediumRatings.svg";
import RatingStarMediumPartialIcon from "../../assets/icons/StarMediumRatings.7.svg";
import RatingStarSmallIcon from "../../assets/icons/RatingStar.svg";
import StarBoxedFullIcon from "../../assets/icons/StarBoxedFull.svg";
import StarBoxedEmptyIcon from "../../assets/icons/StarBoxedEmpty.svg";
import MenuArrowCircleDownIcon from "../../assets/icons/MenuCircleArrowGray.svg";

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
              <div className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-inner-container">
                <p className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-header">
                  My Ratings and Feedback Summary
                </p>
                <div className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-communication-container">
                  <p className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-communication-header">
                    Communication
                  </p>
                  <p className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-communication-description">
                    The effectiveness and clarity of communication with your
                    agency
                  </p>
                  <div className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-communication-ratings-container">
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon-1"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-empty-icon"
                      src={StarBoxedEmptyIcon}
                      alt="Star Boxed Empty Icon"
                    />
                  </div>
                </div>
                <div className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-professionalism-container">
                  <p className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-professionalism-header">
                    Professionalism
                  </p>
                  <p className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-professionalism-description">
                    Your agency's conduct and adherence to industry standards.
                  </p>
                  <div className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-professionalism-ratings-container">
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon-1"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                  </div>
                </div>
                <div className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-payment-timeliness-container">
                  <p className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-payment-timeliness-header">
                    Payment Timeliness
                  </p>
                  <p className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-payment-timeliness-description">
                    Your agency's speed in making payments.
                  </p>
                  <div className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-payment-timeliness-ratings-container">
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon-1"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                  </div>
                </div>
                <div className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-resource-quality-container">
                  <p className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-resource-quality-header">
                    Resource Quality
                  </p>
                  <p className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-resource-quality-description">
                    Evaluate the agency's overall standard, suitability, and
                    effectiveness of both the candidates and job roles.
                  </p>
                  <div className="ratings-my-ratings-page__mobile-my-ratings-and-feedback-summary-resource-quality-ratings-container">
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon-1"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__mobile-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                  </div>
                </div>
              </div>
              <button className="ratings-my-ratings-page__mobile-tips-to-improve-your-rating-button">
                Tips to Improve Your Rating
              </button>
            </div>
            <p className="ratings-my-ratings-page__mobile-my-feedback-received">
              <span className="ratings-my-ratings-page__mobile-my-feedback-received-text">
                My Feedback Received:
              </span>
              <span className="ratings-my-ratings-page__mobile-my-feedback-received-number">
                3
              </span>
            </p>
            <div className="ratings-my-ratings-page__mobile-unwavering-integrity-container">
              <div className="ratings-my-ratings-page__mobile-unwavering-integrity-ratings-container">
                <div className="ratings-my-ratings-page__mobile-unwavering-integrity-ratings-star-container">
                  <img
                    className="ratings-my-ratings-page__mobile-rating-star-integrity-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-rating-star-integrity-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-rating-star-integrity-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-rating-star-integrity-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-rating-star-integrity-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                </div>
                <span className="ratings-my-ratings-page__mobile-unwavering-integrity-ratings-text">
                  5
                </span>
              </div>
              <p className="ratings-my-ratings-page__mobile-unwavering-integrity-honesty">
                Unwavering integrity, honesty...
              </p>
              <p className="ratings-my-ratings-page__mobile-unwavering-integrity-description">
                I highly recommend HumanRe for their exceptional recruiting
                services, deeply rooted in strong morals and values. Throughout
                my job search, HumanRe demonstrated unwavering integrity,
                honesty, and a genuine commitment to my career goals. They took
                the time to truly understand my aspirations and matched me with
                opportunities that aligned with my personal values and
                professional ambitions.
              </p>
              <div className="ratings-my-ratings-page__mobile-xyz-staffing-agency-container">
                <p className="ratings-my-ratings-page__mobile-xyz-staffing-agency-header">
                  XYZ Staffing Agency
                </p>
                <p className="ratings-my-ratings-page__mobile-xyz-staffing-agency-location">
                  Houston, TX
                </p>
                <p className="ratings-my-ratings-page__mobile-xyz-staffing-agency-date">
                  August 30, 2024
                </p>
              </div>
              <div className="ratings-my-ratings-page__mobile-unwavering-integrity-content-container">
                <div className="ratings-my-ratings-page__mobile-unwavering-integrity-communication-container">
                  <p className="ratings-my-ratings-page__mobile-unwavering-integrity-communication-header">
                    Communication
                  </p>
                  <div className="ratings-my-ratings-page__mobile-unwavering-integrity-communication-ratings-container">
                    <div className="ratings-my-ratings-page__mobile-unwavering-integrity-communication-ratings-star-container">
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon-1"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                    </div>
                    <span className="ratings-my-ratings-page__mobile-unwavering-integrity-communication-rating-text">
                      5
                    </span>
                  </div>
                </div>
                <div className="ratings-my-ratings-page__mobile-unwavering-integrity-professionalism-container">
                  <p className="ratings-my-ratings-page__mobile-unwavering-integrity-professionalism-header">
                    Professionalism
                  </p>
                  <div className="ratings-my-ratings-page__mobile-unwavering-integrity-professionalism-ratings-container">
                    <div className="ratings-my-ratings-page__mobile-unwavering-integrity-professionalism-ratings-star-container">
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon-1"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                    </div>
                    <span className="ratings-my-ratings-page__mobile-unwavering-integrity-professionalism-rating-text">
                      5
                    </span>
                  </div>
                </div>
                <div className="ratings-my-ratings-page__mobile-unwavering-integrity-timeliness-container">
                  <p className="ratings-my-ratings-page__mobile-unwavering-integrity-timeliness-header">
                    Timeliness
                  </p>
                  <div className="ratings-my-ratings-page__mobile-unwavering-integrity-timeliness-ratings-container">
                    <div className="ratings-my-ratings-page__mobile-unwavering-integrity-timeliness-ratings-star-container">
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon-1"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                    </div>
                    <span className="ratings-my-ratings-page__mobile-unwavering-integrity-timeliness-rating-text">
                      5
                    </span>
                  </div>
                </div>
                <div className="ratings-my-ratings-page__mobile-unwavering-integrity-overall-satisfaction-container">
                  <p className="ratings-my-ratings-page__mobile-unwavering-integrity-overall-satisfaction-header">
                    Overall Satisfaction
                  </p>
                  <div className="ratings-my-ratings-page__mobile-unwavering-integrity-overall-satisfaction-ratings-container">
                    <div className="ratings-my-ratings-page__mobile-unwavering-integrity-overall-satisfaction-ratings-star-container">
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon-1"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                    </div>
                    <span className="ratings-my-ratings-page__mobile-unwavering-integrity-overall-satisfaction-text">
                      5
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ratings-my-ratings-page__mobile-genuine-commitment-container">
              <div className="ratings-my-ratings-page__mobile-genuine-commitment-ratings-container">
                <div className="ratings-my-ratings-page__mobile-genuine-commitment-ratings-star-container">
                  <img
                    className="ratings-my-ratings-page__mobile-genuine-commitment-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-genuine-commitment-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-genuine-commitment-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-genuine-commitment-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                </div>
                <span className="ratings-my-ratings-page__mobile-genuine-commitment-rating-star-text">
                  4
                </span>
              </div>
              <p className="ratings-my-ratings-page__mobile-genuine-commitment-header">
                Genuine commitment...
              </p>
              <p className="ratings-my-ratings-page__mobile-genuine-commitment-description">
                I highly recommend HumanRe for their exceptional recruiting
                services, deeply rooted in strong morals and values. Throughout
                my job search, HumanRe demonstrated unwavering integrity,
                honesty, and a genuine commitment to my career goals. They took
                the time to truly understand my aspirations and matched me with
                opportunities that aligned with my personal values and
                professional ambitions.
              </p>
              <div className="ratings-my-ratings-page__mobile-genuine-commitment-zoltan-staffing-inc-container">
                <p className="ratings-my-ratings-page__mobile-genuine-commitment-zoltan-staffing-inc-header">
                  Zoltan Staffing Inc.
                </p>
                <p className="ratings-my-ratings-page__mobile-genuine-commitment-zoltan-staffing-inc-location">
                  Boca Raton, FL
                </p>
                <p className="ratings-my-ratings-page__mobile-genuine-commitment-zoltan-staffing-inc-date">
                  August 12, 2024
                </p>
              </div>
              <div className="ratings-my-ratings-page__mobile-genuine-commitment-content-container">
                <div className="ratings-my-ratings-page__mobile-genuine-commitment-communication-container">
                  <p className="ratings-my-ratings-page__mobile-genuine-commitment-communication-header">
                    Communication
                  </p>
                  <div className="ratings-my-ratings-page__mobile-genuine-commitment-communication-ratings-container">
                    <div className="ratings-my-ratings-page__mobile-genuine-commitment-communication-ratings-star-container">
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon-1"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                    </div>
                    <span className="ratings-my-ratings-page__mobile-genuine-commitment-communication-ratings-text">
                      5
                    </span>
                  </div>
                </div>
                <div className="ratings-my-ratings-page__mobile-genuine-commitment-professionalism-container">
                  <p className="ratings-my-ratings-page__mobile-genuine-commitment-professionalism-header">
                    Professionalism
                  </p>
                  <div className="ratings-my-ratings-page__mobile-genuine-commitment-professionalism-ratings-container">
                    <div className="ratings-my-ratings-page__mobile-genuine-commitment-professionalism-ratings-star-container">
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon-1"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                    </div>
                    <span className="ratings-my-ratings-page__mobile-genuine-commitment-professionalism-ratings-text">
                      4
                    </span>
                  </div>
                </div>
                <div className="ratings-my-ratings-page__mobile-genuine-commitment-timeliness-container">
                  <p className="ratings-my-ratings-page__mobile-genuine-commitment-timeliness-header">
                    Timeliness
                  </p>
                  <div className="ratings-my-ratings-page__mobile-genuine-commitment-timeliness-ratings-container">
                    <div className="ratings-my-ratings-page__mobile-genuine-commitment-timeliness-ratings-star-container">
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon-1"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                    </div>
                    <span className="ratings-my-ratings-page__mobile-genuine-commitment-timeliness-ratings-text">
                      3
                    </span>
                  </div>
                </div>
                <div className="ratings-my-ratings-page__mobile-genuine-commitment-overall-satisfaction-container">
                  <p className="ratings-my-ratings-page__mobile-genuine-commitment-overall-satisfaction-header">
                    Overall Satisfaction
                  </p>
                  <div className="ratings-my-ratings-page__mobile-genuine-commitment-overall-satisfaction-ratings-container">
                    <div className="ratings-my-ratings-page__mobile-genuine-commitment-overall-satisfaction-ratings-star-container">
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon-1"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                    </div>
                    <span className="ratings-my-ratings-page__mobile-genuine-commitment-overall-satisfaction-ratings-text">
                      4
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-container">
              <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-ratings-container">
                <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-ratings-star-container">
                  <img
                    className="ratings-my-ratings-page__mobile-aligns-with-my-values-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-aligns-with-my-values-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-aligns-with-my-values-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-aligns-with-my-values-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-aligns-with-my-values-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                </div>
                <span className="ratings-my-ratings-page__mobile-aligns-with-my-values-ratings-text">
                  5
                </span>
              </div>
              <p className="ratings-my-ratings-page__mobile-aligns-with-my-values-header">
                Aligns with my Values...
              </p>
              <p className="ratings-my-ratings-page__mobile-aligns-with-my-values-description">
                I highly recommend HumanRe for their exceptional recruiting
                services, deeply rooted in strong morals and values. Throughout
                my job search, HumanRe demonstrated unwavering integrity,
                honesty, and a genuine commitment to my career goals. They took
                the time to truly understand my aspirations and matched me with
                opportunities that aligned with my personal values and
                professional ambitions.
              </p>
              <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-lmn-staffing-agency-container">
                <p className="ratings-my-ratings-page__mobile-aligns-with-my-values-lmn-staffing-agency-header">
                  LMN Staffing Agency
                </p>
                <p className="ratings-my-ratings-page__mobile-aligns-with-my-values-lmn-staffing-agency-location">
                  Lincoln, NE
                </p>
                <p className="ratings-my-ratings-page__mobile-aligns-with-my-values-lmn-staffing-agency-date">
                  August 1, 2024
                </p>
              </div>
              <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-content-container">
                <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-communication-container">
                  <p className="ratings-my-ratings-page__mobile-aligns-with-my-values-communication-header">
                    Communication
                  </p>
                  <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-communication-ratings-container">
                    <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-communication-ratings-star-container">
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon-1"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                    </div>
                    <span className="ratings-my-ratings-page__mobile-aligns-with-my-values-communication-text">
                      5
                    </span>
                  </div>
                </div>
                <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-professionalism-container">
                  <p className="ratings-my-ratings-page__mobile-aligns-with-my-values-professionalism-header">
                    Professionalism
                  </p>
                  <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-professionalism-ratings-container">
                    <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-professionalism-ratings-star-container">
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon-1"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                    </div>
                    <span className="ratings-my-ratings-page__mobile-aligns-with-my-values-professionalism-ratings-text">
                      5
                    </span>
                  </div>
                </div>
                <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-timeliness-container">
                  <p className="ratings-my-ratings-page__mobile-aligns-with-my-values-timeliness-header">
                    Timeliness
                  </p>
                  <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-timeliness-ratings-container">
                    <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-timeliness-ratings-star-container">
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon-1"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                    </div>
                    <span className="ratings-my-ratings-page__mobile-aligns-with-my-values-timeliness-ratings-text">
                      5
                    </span>
                  </div>
                </div>
                <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-overall-satisfaction-container">
                  <p className="ratings-my-ratings-page__mobile-aligns-with-my-values-overall-satisfaction-header">
                    Overall Satisfaction
                  </p>
                  <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-overall-satisfaction-ratings-container">
                    <div className="ratings-my-ratings-page__mobile-aligns-with-my-values-overall-satisfaction-ratings-star-container">
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon-1"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__mobile-unwavering-integrity-rating-star-medium-icon"
                        src={RatingStarMediumIcon}
                        alt="Rating Star Medium Icon"
                      />
                    </div>
                    <span className="ratings-my-ratings-page__mobile-aligns-with-my-values-overall-satisfaction-ratings-text">
                      5
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="ratings-my-ratings-page__mobile-my-feedback-left-for-others">
              <span className="ratings-my-ratings-page__mobile-my-feedback-left-for-others-text">
                My Feedback left for Others:
              </span>
              <span className="ratings-my-ratings-page__mobile-my-feedback-left-for-others-number">
                2
              </span>
            </p>
            <div className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-container">
              <div className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-header-container">
                <p className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-header">
                  XYZ Staffing Agency
                </p>
                <p className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-location">
                  Houston, TX
                </p>
              </div>
              <div className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-date-container">
                <p className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-date">
                  August 30, 2024
                </p>
              </div>
              <div className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-date-rating-container">
                <div className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-date-rating-star-container">
                  <img
                    className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-rating-star-small-icon-1"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-rating-star-small-icon"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-rating-star-small-icon"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-rating-star-small-icon"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-rating-star-small-icon"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                </div>
                <p className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-rating-star-text">
                  5
                </p>
              </div>
              <p className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-edit">
                Edit
              </p>
              <p className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-unwavering-integrity-honesty">
                Unwavering integrity, honesty...
              </p>
              <p className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-description-text">
                I highly recommend HumanRe for their exceptional recruiting
                services, deeply rooted in strong morals and values. Throughout
                my job search, HumanRe demonstrated unwavering integrity,
                honesty, and a genuine commitment to my career goals. They took
                the time to truly understand my aspirations and matched me with
                opportunities that aligned with my personal values and
                professional ambitions. Their ethical approach and dedication to
                doing what is right made the entire process seamless and
                stress-free. Thanks to HumanRe, I am now thriving in a role that
                not only fits my skills but also aligns with my values.
              </p>
            </div>
            <div className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-container-2">
              <div className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-header-container">
                <p className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-header">
                  XYZ Staffing Agency
                </p>
                <p className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-location">
                  Houston, TX
                </p>
              </div>
              <div className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-date-container">
                <p className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-date">
                  August 30, 2024
                </p>
              </div>
              <div className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-date-rating-container">
                <div className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-date-rating-star-container">
                  <img
                    className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-rating-star-small-icon-1"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-rating-star-small-icon"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-rating-star-small-icon"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-rating-star-small-icon"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-rating-star-small-icon"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                </div>
                <p className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-rating-star-text">
                  5
                </p>
              </div>
              <p className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-edit">
                Edit
              </p>
              <p className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-unwavering-integrity-honesty">
                Unwavering integrity, honesty...
              </p>
              <p className="ratings-my-ratings-page__mobile-bottom-xyz-staffing-agency-description-text">
                I highly recommend HumanRe for their exceptional recruiting
                services, deeply rooted in strong morals and values. Throughout
                my job search, HumanRe demonstrated unwavering integrity,
                honesty, and a genuine commitment to my career goals. They took
                the time to truly understand my aspirations and matched me with
                opportunities that aligned with my personal values and
                professional ambitions. Their ethical approach and dedication to
                doing what is right made the entire process seamless and
                stress-free. Thanks to HumanRe, I am now thriving in a role that
                not only fits my skills but also aligns with my values.
              </p>
            </div>
            <div className="ratings-my-ratings-page__mobile-my-conflict-resolution-progress-container">
              <p className="ratings-my-ratings-page__mobile-my-conflict-resolution-progress-header">
                My Conflict Resolution Progress
              </p>
              <div className="ratings-my-ratings-page__mobile-my-conflict-resolution-progress-information-container">
                <div className="ratings-my-ratings-page__mobile-my-conflict-resolution-progress-information-container-1">
                  <p className="ratings-my-ratings-page__mobile-my-conflict-resolution-progress-information-date">
                    Date: 9/15/24
                  </p>
                  <p className="ratings-my-ratings-page__mobile-my-conflict-resolution-progress-information-agency">
                    Agency: XYZ Staffing Inc.
                  </p>
                  <p className="ratings-my-ratings-page__mobile-my-conflict-resolution-progress-information-issue">
                    Issue: Feedback & Rating Received
                  </p>
                  <p className="ratings-my-ratings-page__mobile-my-conflict-resolution-progress-progress">
                    Progress: Step 3
                    <img
                      className="ratings-my-ratings-page__mobile-menu-arrow-circle-down-icon"
                      src={MenuArrowCircleDownIcon}
                      alt="Menu Arrow Circle Down Icon"
                    />
                  </p>
                </div>
                <div className="ratings-my-ratings-page__mobile-my-conflict-resolution-progress-information-container-2">
                  <p className="ratings-my-ratings-page__mobile-my-conflict-resolution-progress-information-date-2">
                    Date: 9/15/24
                  </p>
                  <p className="ratings-my-ratings-page__mobile-my-conflict-resolution-progress-information-agency-2">
                    Agency: LMN Staffing Inc.
                  </p>
                  <p className="ratings-my-ratings-page__mobile-my-conflict-resolution-progress-information-issue-2">
                    Issue: Feedback Received
                  </p>
                  <p className="ratings-my-ratings-page__mobile-my-conflict-resolution-progress-progress-2">
                    Progress: Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ratings-my-ratings-page__tablet-container">
            <div className="ratings-my-ratings-page__tablet-header-container">
              <p className="ratings-my-ratings-page__tablet-header-text">
                My Ratings & Feedback
              </p>
              <img
                className="ratings-my-ratings-page__tablet-mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Value Assurance Icon"
              />
            </div>
            <div className="ratings-my-ratings-page__tablet-button-container">
              <button className="ratings-my-ratings-page__tablet-rate-an-agency-button">
                Rate an Agency
              </button>
              <button className="ratings-my-ratings-page__tablet-my-ratings-button">
                My Ratings
              </button>
              <button className="ratings-my-ratings-page__tablet-search-agencies-button">
                Search Agencies
              </button>
              <button className="ratings-my-ratings-page__tablet-conflict-resolution-button">
                Conflict Resolution
              </button>
            </div>
            <div className="ratings-my-ratings-page__tablet-logo-my-rating-container">
              <img
                className="ratings-my-ratings-page__tablet-human-re-logo"
                src={HumanReLogo}
                alt="HumanRe Logo"
              />
              <div className="ratings-my-ratings-page__tablet-my-rating-container">
                <p className="ratings-my-ratings-page__tablet-my-rating-text">
                  My Rating:
                </p>
                <div className="ratings-my-ratings-page__tablet-my-rating-value-container">
                  <span className="ratings-my-ratings-page__tablet-my-rating-value-number">
                    4.7
                  </span>
                  <div className="ratings-my-ratings-page__tablet-my-rating-star-container">
                    <img
                      className="ratings-my-ratings-page__tablet-rating-star-medium-icon"
                      src={RatingStarMediumIcon}
                      alt="Rating Star Medium Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-rating-star-medium-icon"
                      src={RatingStarMediumIcon}
                      alt="Rating Star Medium Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-rating-star-medium-icon"
                      src={RatingStarMediumIcon}
                      alt="Rating Star Medium Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-rating-star-medium-icon"
                      src={RatingStarMediumIcon}
                      alt="Rating Star Medium Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-rating-star-medium-partial-icon"
                      src={RatingStarMediumPartialIcon}
                      alt="Rating Star Medium Partial Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="ratings-my-ratings-page__tablet-agency-rating-container">
              <p className="ratings-my-ratings-page__tablet-agency-rating-text">
                Agency Rating
              </p>
              <div className="ratings-my-ratings-page__tablet-agency-rating-ratings-container">
                <p className="ratings-my-ratings-page__tablet-agency-rating-ratings-text">
                  4.6
                </p>
                <div className="ratings-my-ratings-page__tablet-agency-rating-star-container">
                  <img
                    className="ratings-my-ratings-page__tablet-rating-star-small-icon"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__tablet-rating-star-small-icon"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__tablet-rating-star-small-icon"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__tablet-rating-star-small-icon"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__tablet-agency-rating-star-partial-icon"
                    src={RatingStarMediumPartialIcon}
                    alt="Rating Star Partial Icon"
                  />
                </div>
              </div>
            </div>
            <div className="ratings-my-ratings-page__tablet-my-ratings-and-feedback-summary-container">
              <p className="ratings-my-ratings-page__tablet-my-ratings-and-feedback-summary-header">
                My Ratings and Feedback Summary
              </p>
              <div className="ratings-my-ratings-page__tablet-communication-payment-timeliness-container">
                <div className="ratings-my-ratings-page__tablet-communication-container">
                  <p className="ratings-my-ratings-page__tablet-communication-header">
                    Communication
                  </p>
                  <p className="ratings-my-ratings-page__tablet-communication-description">
                    The effectiveness and clarity of communication with your
                    agency.
                  </p>
                  <div className="ratings-my-ratings-page__tablet-communication-ratings-star-container">
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon-1"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-empty-icon"
                      src={StarBoxedEmptyIcon}
                      alt="Star Boxed Empty Icon"
                    />
                  </div>
                </div>
                <div className="ratings-my-ratings-page__tablet-payment-timeliness-container">
                  <p className="ratings-my-ratings-page__tablet-payment-timeliness-header">
                    Payment Timeliness
                  </p>
                  <p className="ratings-my-ratings-page__tablet-payment-timeliness-description">
                    Your agency's speed in making payments.
                  </p>
                  <div className="ratings-my-ratings-page__tablet-payment-timeliness-ratings-star-container">
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon-1"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                  </div>
                </div>
              </div>
              <div className="ratings-my-ratings-page__tablet-professionalism-resource-quality-container">
                <div className="ratings-my-ratings-page__tablet-professionalism-container">
                  <p className="ratings-my-ratings-page__tablet-professionalism-header">
                    Professionalism
                  </p>
                  <p className="ratings-my-ratings-page__tablet-professionalism-description">
                    Your agency's conduct and adherence to industry standards.
                  </p>
                  <div className="ratings-my-ratings-page__tablet-professionalism-ratings-star-container">
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon-1"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                  </div>
                </div>
                <div className="ratings-my-ratings-page__tablet-resource-quality-container">
                  <p className="ratings-my-ratings-page__tablet-resource-quality-header">
                    Resource Quality
                  </p>
                  <p className="ratings-my-ratings-page__tablet-resource-quality-description">
                    Evaluate the agency's overall standard, suitability, and
                    effectiveness of both the candidates and job roles.
                  </p>
                  <div className="ratings-my-ratings-page__tablet-resource-quality-ratings-star-container">
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon-1"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-star-boxed-full-icon"
                      src={StarBoxedFullIcon}
                      alt="Star Boxed Full Icon"
                    />
                  </div>
                </div>
              </div>
              <button className="ratings-my-ratings-page__tablet-tips-to-improve-your-rating-button">
                Tips to Improve Your Rating
              </button>
            </div>
            <p className="ratings-my-ratings-page__tablet-my-feedback-received">
              <span className="ratings-my-ratings-page__tablet-my-feedback-received-text">
                My Feedback Received:
              </span>
              <span className="ratings-my-ratings-page__tablet-my-feedback-received-number">
                3
              </span>
            </p>
            <div className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-genuine-commitment-container">
              <div className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-container">
                <div className="ratings-my-ratings-page__tablet-unvawering-integrity-honesty-rating-container">
                  <div className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-container">
                    <img
                      className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-medium-icon-1"
                      src={RatingStarMediumIcon}
                      alt="Rating Star Medium Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-medium-icon"
                      src={RatingStarMediumIcon}
                      alt="Rating Star Medium Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-medium-icon"
                      src={RatingStarMediumIcon}
                      alt="Rating Star Medium Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-medium-icon"
                      src={RatingStarMediumIcon}
                      alt="Rating Star Medium Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-medium-icon"
                      src={RatingStarMediumIcon}
                      alt="Rating Star Medium Icon"
                    />
                  </div>
                  <p className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-text">
                    5
                  </p>
                </div>
                <p className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-text">
                  Unwavering integrity, honesty...
                </p>
                <p className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-description">
                  I highly recommend HumanRe for their exceptional recruiting
                  services, deeply rooted in strong morals and values.
                  Throughout my job search, HumanRe demonstrated unwavering
                  integrity, honesty, and a genuine commitment to my career
                  goals. They took the time to truly understand my aspirations
                  and matched me with opportunities that aligned with my
                  personal values and professional ambitions. Their ethical
                  approach and dedication to doing what is right made the entire
                  process seamless and stress-free. Thanks to HumanRe, I am now
                  thriving in a role that not only fits my skills but also
                  aligns with my values.
                </p>
                <div className="ratings-my-ratings-page__tablet-xyz-staffing-agency-container">
                  <p className="ratings-my-ratings-page__tablet-xyz-staffing-agency-header">
                    XYZ Staffing Agency
                  </p>
                  <p className="ratings-my-ratings-page__tablet-xyz-staffing-agency-location">
                    Houston, TX
                  </p>
                  <p className="ratings-my-ratings-page__tablet-xyz-staffing-agency-date">
                    August 30, 2024
                  </p>
                </div>
                <div className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-content-container">
                  <div className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-communication-container">
                    <p className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-communication-header">
                      Communication
                    </p>
                    <div className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-communication-ratings-container">
                      <div className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-communication-ratings-star-container">
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon-1"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                      </div>
                      <span className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-communication-rating-text">
                        5
                      </span>
                    </div>
                  </div>
                  <div className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-professionalism-container">
                    <p className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-professionalism-header">
                      Professionalism
                    </p>
                    <div className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-professionalism-ratings-container">
                      <div className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-professionalism-ratings-star-container">
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon-1"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                      </div>
                      <span className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-professionalism-ratings-text">
                        5
                      </span>
                    </div>
                  </div>
                  <div className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-timeliness-container">
                    <p className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-timeliness-header">
                      Timeliness
                    </p>
                    <div className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-timeliness-ratings-container">
                      <div className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-timeliness-ratings-star-container">
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon-1"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                      </div>
                      <span className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-timeliness-ratings-text">
                        5
                      </span>
                    </div>
                  </div>
                  <div className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-overall-satisfaction-container">
                    <p className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-overall-satisfaction-header">
                      Overall Satisfaction
                    </p>
                    <div className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-overall-satisfaction-ratings-container">
                      <div className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-overall-satisfaction-ratings-star-container">
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon-1"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                      </div>
                      <span className="ratings-my-ratings-page__tablet-unwavering-integrity-honesty-overall-satisfaction-ratings-text">
                        5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ratings-my-ratings-page__tablet-genuine-commitment-container">
                <div className="ratings-my-ratings-page__tablet-genuine-commitment-ratings-container">
                  <div className="ratings-my-ratings-page__tablet-genuine-commitment-ratings-star-container">
                    <img
                      className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-medium-icon-1"
                      src={RatingStarMediumIcon}
                      alt="Rating Star Medium Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-medium-icon"
                      src={RatingStarMediumIcon}
                      alt="Rating Star Medium Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-medium-icon"
                      src={RatingStarMediumIcon}
                      alt="Rating Star Medium Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-medium-icon"
                      src={RatingStarMediumIcon}
                      alt="Rating Star Medium Icon"
                    />
                  </div>
                  <p className="ratings-my-ratings-page__tablet-genuine-commitment-ratings-text">
                    4
                  </p>
                </div>
                <p className="ratings-my-ratings-page__tablet-genuine-commitment-text">
                  Genuine commitment...
                </p>
                <p className="ratings-my-ratings-page__tablet-genuine-commitment-description">
                  I highly recommend HumanRe for their exceptional recruiting
                  services, deeply rooted in strong morals and values.
                  Throughout my job search, HumanRe demonstrated unwavering
                  integrity, honesty, and a genuine commitment to my career
                  goals. They took the time to truly understand my aspirations
                  and matched me with opportunities that aligned with my
                  personal values and professional ambitions. Their ethical
                  approach and dedication to doing what is right made the entire
                  process seamless and stress-free. Thanks to HumanRe, I am now
                  thriving in a role that not only fits my skills but also
                  aligns with my values.
                </p>
                <div className="ratings-my-ratings-page__tablet-genuine-commitment-zoltan-staffing-container">
                  <p className="ratings-my-ratings-page__tablet-genuine-commitment-zoltan-staffing-header">
                    Zoltan Staffing, Inc.
                  </p>
                  <p className="ratings-my-ratings-page__tablet-genuine-commitment-zoltan-staffing-location">
                    Boca Raton, FL
                  </p>
                  <p className="ratings-my-ratings-page__tablet-genuine-commitment-zoltan-staffing-date">
                    August 12, 2024
                  </p>
                </div>
                <div className="ratings-my-ratings-page__tablet-genuine-commitment-content-container">
                  <div className="ratings-my-ratings-page__tablet-genuine-commitment-communication-container">
                    <p className="ratings-my-ratings-page__tablet-genuine-commitment-communication-header">
                      Communication
                    </p>
                    <div className="ratings-my-ratings-page__tablet-genuine-commitment-communication-ratings-container">
                      <div className="ratings-my-ratings-page__tablet-genuine-commitment-communication-ratings-star-container">
                        <img
                          className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-small-icon-1"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                      </div>
                      <span className="ratings-my-ratings-page__tablet-genuine-commitment-communication-ratings-text">
                        5
                      </span>
                    </div>
                  </div>
                  <div className="ratings-my-ratings-page__tablet-genuine-commitment-professionalism-container">
                    <p className="ratings-my-ratings-page__tablet-genuine-commitment-professionalism-header">
                      Professionalism
                    </p>
                    <div className="ratings-my-ratings-page__tablet-genuine-commitment-professionalism-ratings-container">
                      <div className="ratings-my-ratings-page__tablet-genuine-commitment-professionalism-ratings-star-container">
                        <img
                          className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-small-icon-1"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                      </div>
                      <span className="ratings-my-ratings-page__tablet-genuine-commitment-professionalism-ratings-text">
                        4
                      </span>
                    </div>
                  </div>
                  <div className="ratings-my-ratings-page__tablet-genuine-commitment-timeliness-container">
                    <p className="ratings-my-ratings-page__tablet-genuine-commitment-timeliness-header">
                      Timeliness
                    </p>
                    <div className="ratings-my-ratings-page__tablet-genuine-commitment-timeliness-ratings-container">
                      <div className="ratings-my-ratings-page__tablet-genuine-commitment-timeliness-ratings-star-container">
                        <img
                          className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-small-icon-1"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                      </div>
                      <span className="ratings-my-ratings-page__tablet-genuine-commitment-timeliness-ratings-text">
                        3
                      </span>
                    </div>
                  </div>
                  <div className="ratings-my-ratings-page__tablet-genuine-commitment-overall-satisfaction-container">
                    <p className="ratings-my-ratings-page__tablet-genuine-commitment-overall-satisfaction-header">
                      Overall Satisfaction
                    </p>
                    <div className="ratings-my-ratings-page__tablet-genuine-commitment-overall-satisfaction-ratings-container">
                      <div className="ratings-my-ratings-page__tablet-genuine-commitment-overall-satisfaction-ratings-star-container">
                        <img
                          className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-small-icon-1"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                        <img
                          className="ratings-my-ratings-page__tablet-genuine-commitment-rating-star-small-icon"
                          src={RatingStarSmallIcon}
                          alt="Rating Star Small Icon"
                        />
                      </div>
                      <span className="ratings-my-ratings-page__tablet-genuine-commitment-overall-satisfaction-ratings-text">
                        4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-container">
              <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-ratings-container">
                <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-ratings-star-container">
                  <img
                    className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-medium-icon-1"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-medium-icon"
                    src={RatingStarMediumIcon}
                    alt="Rating Star Medium Icon"
                  />
                </div>
                <p className="ratings-my-ratings-page__tablet-aligns-with-my-values-ratings-text">
                  5
                </p>
              </div>
              <p className="ratings-my-ratings-page__tablet-aligns-with-my-values-text">
                Aligns with my Values...
              </p>
              <p className="ratings-my-ratings-page__tablet-aligns-with-my-values-description">
                I highly recommend HumanRe for their exceptional recruiting
                services, deeply rooted in strong morals and values. Throughout
                my job search, HumanRe demonstrated unwavering integrity,
                honesty, and a genuine commitment to my career goals. They took
                the time to truly understand my aspirations and matched me with
                opportunities that aligned with my personal values and
                professional ambitions. Their ethical approach and dedication to
                doing what is right made the entire process seamless and
                stress-free. Thanks to HumanRe, I am now thriving in a role that
                not only fits my skills but also aligns with my values.
              </p>
              <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-lmn-staffing-agency-container">
                <p className="ratings-my-ratings-page__tablet-aligns-with-my-values-lmn-staffing-agency-header">
                  LMN Staffing Agency
                </p>
                <p className="ratings-my-ratings-page__tablet-aligns-with-my-values-lmn-staffing-agency-location">
                  Lincoln, NE
                </p>
                <p className="ratings-my-ratings-page__tablet-aligns-with-my-values-lmn-staffing-agency-date">
                  August 1, 2024
                </p>
              </div>
              <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-content-container">
                <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-communication-container">
                  <p className="ratings-my-ratings-page__tablet-aligns-with-my-values-communication-header">
                    Communication
                  </p>
                  <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-communication-ratings-container">
                    <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-communication-ratings-star-container">
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon-1"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                    </div>
                    <span className="ratings-my-ratings-page__tablet-aligns-with-my-values-communication-ratings-text">
                      5
                    </span>
                  </div>
                </div>
                <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-professionalism-container">
                  <p className="ratings-my-ratings-page__tablet-aligns-with-my-values-professionalism-header">
                    Professionalism
                  </p>
                  <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-professionalism-ratings-container">
                    <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-professionalism-ratings-star-container">
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon-1"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                    </div>
                    <span className="ratings-my-ratings-page__tablet-aligns-with-my-values-professionalism-ratings-text">
                      5
                    </span>
                  </div>
                </div>
                <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-timeliness-container">
                  <p className="ratings-my-ratings-page__tablet-aligns-with-my-values-timeliness-header">
                    Timeliness
                  </p>
                  <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-timeliness-ratings-container">
                    <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-timeliness-ratings-star-container">
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon-1"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                    </div>
                    <span className="ratings-my-ratings-page__tablet-aligns-with-my-values-timeliness-ratings-text">
                      5
                    </span>
                  </div>
                </div>
                <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-overall-satisfaction-container">
                  <p className="ratings-my-ratings-page__tablet-aligns-with-my-values-overall-satisfaction-header">
                    Overall Satisfaction
                  </p>
                  <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-overall-satisfaction-ratings-container">
                    <div className="ratings-my-ratings-page__tablet-aligns-with-my-values-overall-satisfaction-ratings-star-container">
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon-1"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__tablet-aligns-with-my-values-rating-star-small-icon"
                        src={RatingStarSmallIcon}
                        alt="Rating Star Small Icon"
                      />
                    </div>
                    <span className="ratings-my-ratings-page__tablet-aligns-with-my-values-overall-satisfaction-ratings-text">
                      5
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="ratings-my-ratings-page__tablet-aligns-with-my-values-my-feedback-left-for-others">
              <span className="ratings-my-ratings-page__tablet-aligns-with-my-values-my-feedback-left-for-others-text">
                My Feedback left for Others:
              </span>
              <span className="ratings-my-ratings-page__tablet-aligns-with-my-values-my-feedback-left-for-others-number">
                2
              </span>
            </p>
            <div className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-container">
              <div className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-header-container">
                <p className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-header">
                  XYZ Staffing Agency
                </p>
                <p className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-location">
                  Houston, TX
                </p>
                <p className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-date">
                  August 30, 2024
                </p>
                <div className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-ratings-container">
                  <div className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-ratings-star-container">
                    <img
                      className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-rating-star-small-icon-1"
                      src={RatingStarSmallIcon}
                      alt="Rating Star Small Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-rating-star-small-icon"
                      src={RatingStarSmallIcon}
                      alt="Rating Star Small Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-rating-star-small-icon"
                      src={RatingStarSmallIcon}
                      alt="Rating Star Small Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-rating-star-small-icon"
                      src={RatingStarSmallIcon}
                      alt="Rating Star Small Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-rating-star-small-icon"
                      src={RatingStarSmallIcon}
                      alt="Rating Star Small Icon"
                    />
                  </div>
                  <span className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-ratings-text">
                    5
                  </span>
                </div>
              </div>
              <div className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-unwavering-integrity-honesty-edit-container">
                <p className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-unwavering-integrity-honesty-text">
                  Unwavering integrity, honesty...
                </p>
                <p className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-edit-text">
                  Edit
                </p>
              </div>
              <p className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-description">
                I highly recommend HumanRe for their exceptional recruiting
                services, deeply rooted in strong morals and values. Throughout
                my job search, HumanRe demonstrated unwavering integrity,
                honesty, and a genuine commitment to my career goals. They took
                the time to truly understand my aspirations and matched me with
                opportunities that aligned with my personal values and
                professional ambitions. Their ethical approach and dedication to
                doing what is right made the entire process seamless and
                stress-free. Thanks to HumanRe, I am now thriving in a role that
                not only fits my skills but also aligns with my values.
              </p>
            </div>
            <div className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-container-2">
              <div className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-header-container">
                <p className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-header">
                  XYZ Staffing Agency
                </p>
                <p className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-location">
                  Houston, TX
                </p>
                <p className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-date">
                  August 30, 2024
                </p>
                <div className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-ratings-container">
                  <div className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-ratings-star-container">
                    <img
                      className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-rating-star-small-icon-1"
                      src={RatingStarSmallIcon}
                      alt="Rating Star Small Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-rating-star-small-icon"
                      src={RatingStarSmallIcon}
                      alt="Rating Star Small Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-rating-star-small-icon"
                      src={RatingStarSmallIcon}
                      alt="Rating Star Small Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-rating-star-small-icon"
                      src={RatingStarSmallIcon}
                      alt="Rating Star Small Icon"
                    />
                    <img
                      className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-rating-star-small-icon"
                      src={RatingStarSmallIcon}
                      alt="Rating Star Small Icon"
                    />
                  </div>
                  <span className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-ratings-text">
                    5
                  </span>
                </div>
              </div>
              <div className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-unwavering-integrity-honesty-edit-container">
                <p className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-unwavering-integrity-honesty-text">
                  Unwavering integrity, honesty...
                </p>
                <p className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-edit-text">
                  Edit
                </p>
              </div>
              <p className="ratings-my-ratings-page__tablet-bottom-xyz-staffing-agency-description">
                I highly recommend HumanRe for their exceptional recruiting
                services, deeply rooted in strong morals and values. Throughout
                my job search, HumanRe demonstrated unwavering integrity,
                honesty, and a genuine commitment to my career goals. They took
                the time to truly understand my aspirations and matched me with
                opportunities that aligned with my personal values and
                professional ambitions. Their ethical approach and dedication to
                doing what is right made the entire process seamless and
                stress-free. Thanks to HumanRe, I am now thriving in a role that
                not only fits my skills but also aligns with my values.
              </p>
            </div>
            <div className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-container">
              <p className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-header">
                My Conflict Resolution Progress
              </p>
              <table className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-table">
                <thead className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-header-row">
                  <tr className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-data-row-1">
                    <th className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-date-header">
                      Date
                    </th>
                    <th className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-agency-header">
                      Agency
                    </th>
                    <th className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-issue-header">
                      Issue
                    </th>
                    <th className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-progress-header">
                      Progress
                    </th>
                  </tr>
                </thead>
                <tbody className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-body">
                  <tr className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-top-space-row"></tr>
                  <tr className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-data-row-1">
                    <td className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-data-row-1-date">
                      9/15/24
                    </td>
                    <td className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-data-row-1-agency">
                      XYZ Staffing Inc.
                    </td>
                    <td className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-data-row-1-issue">
                      Feedback & Rating Received
                    </td>
                    <td className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-data-row-1-progress">
                      Step 3
                      <img
                        className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-menu-arrow-circle-down-icon-1"
                        src={MenuArrowCircleDownIcon}
                        alt="Menu Arrow Circle Down"
                      />
                    </td>
                  </tr>
                  <tr className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-space-row"></tr>
                  <tr className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-data-row-2">
                    <td className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-data-row-2-date">
                      9/30/24
                    </td>
                    <td className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-data-row-2-agency">
                      ABC Staffing Inc.
                    </td>
                    <td className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-data-row-2-issue">
                      Feedback & Rating Given
                    </td>
                    <td className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-data-row-2-progress">
                      Conflict Resolved{" "}
                      <img
                        className="ratings-my-ratings-page__tablet-my-conflict-resolution-progress-menu-arrow-circle-down-icon-2"
                        src={MenuArrowCircleDownIcon}
                        alt="Menu Arrow Circle Down"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="ratings-my-ratings-page__desktop-container">
            <p className="ratings-my-ratings-page__desktop-header">
              My Ratings & Feedback
            </p>
            <div className="ratings-my-ratings-page__desktop-top-button-value-assurance-container">
              <div className="ratings-my-ratings-page__desktop-top-button-container">
                <button className="ratings-my-ratings-page__desktop-rate-an-agency-button">
                  Rate an Agency
                </button>
                <button className="ratings-my-ratings-page__desktop-my-ratings-button">
                  My Ratings
                </button>
                <button className="ratings-my-ratings-page__desktop-search-agencies-button">
                  Search Agencies
                </button>
                <button className="ratings-my-ratings-page__desktop-conflict-resolution-button">
                  Conflict Resolution
                </button>
              </div>
              <img
                className="ratings-my-ratings-page__desktop-mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Value Assurance Icon"
              />
            </div>
            <div className="ratings-my-ratings-page__desktop-human-re-my-ratings-container">
              <img
                className="ratings-my-ratings-page__desktop-human-re-logo"
                src={HumanReLogo}
                alt="HumanRe Logo"
              />
              <div className="ratings-my-ratings-page__desktop-my-ratings-container">
                <p className="ratings-my-ratings-page__desktop-my-ratings-text">
                  My Ratings:
                </p>
                <p className="ratings-my-ratings-page__desktop-my-ratings-number">
                  4.7
                </p>
                <div className="ratings-my-ratings-page__desktop-my-ratings-star-container">
                  <img
                    src={RatingStarMediumIcon}
                    className="ratings-my-ratings-page__desktop-my-ratings-star-medium-icon-1"
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    src={RatingStarMediumIcon}
                    className="ratings-my-ratings-page__desktop-my-ratings-star-medium-icon"
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    src={RatingStarMediumIcon}
                    className="ratings-my-ratings-page__desktop-my-ratings-star-medium-icon"
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    src={RatingStarMediumIcon}
                    className="ratings-my-ratings-page__desktop-my-ratings-star-medium-icon"
                    alt="Rating Star Medium Icon"
                  />
                  <img
                    src={RatingStarMediumPartialIcon}
                    className="ratings-my-ratings-page__desktop-my-ratings-star-medium-partial-icon"
                    alt="Rating Star Medium Icon"
                  />
                </div>
              </div>
            </div>
            <div className="ratings-my-ratings-page__desktop-agency-rating-container">
              <p className="ratings-my-ratings-page__desktop-agency-rating-header">
                Agency Rating:
              </p>
              <div className="ratings-my-ratings-page__desktop-agency-rating-ratings-container">
                <p className="ratings-my-ratings-page__desktop-agency-rating-ratings-number">
                  4.6
                </p>
                <div className="ratings-my-ratings-page__desktop-agency-rating-ratings-star-container">
                  <img
                    className="ratings-my-ratings-page__desktop-agency-rating-rating-star-small-icon-1"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__desktop-agency-rating-rating-star-small-icon"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__desktop-agency-rating-rating-star-small-icon"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__desktop-agency-rating-rating-star-small-icon"
                    src={RatingStarSmallIcon}
                    alt="Rating Star Small Icon"
                  />
                  <img
                    className="ratings-my-ratings-page__desktop-agency-rating-rating-star-small-partial-icon"
                    src={RatingStarMediumPartialIcon}
                    alt="Rating Small Partial Icon"
                  />
                </div>
              </div>
            </div>
            <div className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-container">
              <div className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-inner-container">
                <p className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-header">
                  My Ratings and Feedback Summary
                </p>
                <div className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-communication-payment-timeliness-container">
                  <div className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-communication-container">
                    <p className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-communication-header">
                      Communication
                    </p>
                    <p className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-communication-description">
                      The effectiveness and clarity of communication with your
                      agency
                    </p>
                    <div className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-communication-ratings-container">
                      <img
                        className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-star-boxed-full-icon-1"
                        src={StarBoxedFullIcon}
                        alt="Star Boxed Full Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-star-boxed-full-icon"
                        src={StarBoxedFullIcon}
                        alt="Star Boxed Full Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-star-boxed-full-icon"
                        src={StarBoxedFullIcon}
                        alt="Star Boxed Full Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-star-boxed-full-icon"
                        src={StarBoxedFullIcon}
                        alt="Star Boxed Full Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-star-boxed-empty-icon"
                        src={StarBoxedEmptyIcon}
                        alt="Star Boxed Empty Icon"
                      />
                    </div>
                  </div>
                  <div className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-payment-timeliness-container">
                    <p className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-payment-timeliness-header">
                      Payment Timeliness
                    </p>
                    <p className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-payment-timeliness-description">
                      Your agency's speed in making payments
                    </p>
                    <div className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-payment-timeliness-ratings-container">
                      <img
                        className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-star-boxed-full-icon-1"
                        src={StarBoxedFullIcon}
                        alt="Star Boxed Full Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-star-boxed-full-icon"
                        src={StarBoxedFullIcon}
                        alt="Star Boxed Full Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-star-boxed-full-icon"
                        src={StarBoxedFullIcon}
                        alt="Star Boxed Full Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-star-boxed-full-icon"
                        src={StarBoxedFullIcon}
                        alt="Star Boxed Full Icon"
                      />
                      <img
                        className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-star-boxed-empty-icon"
                        src={StarBoxedEmptyIcon}
                        alt="Star Boxed Empty Icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-professionalism-resource-quality-container">
                  <div className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-professionalism-container">
                    <p className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-professionalism-header">
                      Professionalism
                    </p>
                    <p className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-professionalism-description">
                      Your agency's conduct amd adherence to industry standards.
                    </p>
                    <div className="ratings-my-ratings-page__desktop-my-ratings-and-feedback-summary-professionalism-ratings-container">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
