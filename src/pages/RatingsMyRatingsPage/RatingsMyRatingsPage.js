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
          </div>
        </div>
      </div>
    </div>
  );
}
