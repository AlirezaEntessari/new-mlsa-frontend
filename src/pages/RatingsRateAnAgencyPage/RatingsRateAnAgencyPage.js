import React from "react";
import "./RatingsRateAnAgencyPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import MLSAValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";
import ValuesCircleGraphicIcon from "../../assets/logos/ValuesCircleGraphic.svg";
import SearchIcon from "../../assets/icons/Search (2).svg";
import RatingsEmptyStarsIcon from "../../assets/icons/RatingsEmptyStars.svg";

export default function RatingsRateAnAgencyPage() {
  return (
    <div className="ratings-rate-an-agency-page">
      <HeaderWithProfilePic />
      <div className="ratings-rate-an-agency-page__main-container">
        <RatingsSidePanel />
        <div className="ratings-rate-an-agency-page__right-container">
          <div className="ratings-rate-an-agency-page__mobile-container">
            <div className="ratings-rate-an-agency-page__mobile-header-container">
              <p className="ratings-rate-an-agency-page__mobile-header">
                Rate an Agency
              </p>
              <img
                className="ratings-rate-an-agency-page__mobile-mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Value Assurance Icon"
              />
            </div>
            <img
              className="ratings-rate-an-agency-page__mobile-values-circle-graphic-icon"
              src={ValuesCircleGraphicIcon}
              alt="Values Circle Graphic Icon"
            />
            <div className="ratings-rate-an-agency-page__mobile-enter-agency-name-container">
              <img
                className="ratings-rate-an-agency-page__mobile-search-icon"
                src={SearchIcon}
                alt="Search Icon"
              />
              <input
                className="ratings-rate-an-agency-page__mobile-enter-agency-name-input"
                type="text"
                placeholder="Enter Agency Name"
              />
            </div>
            <div className="ratings-rate-an-agency-page__mobile-content-container">
              <div className="ratings-rate-an-agency-page__mobile-communication-container">
                <p className="ratings-rate-an-agency-page__mobile-communication-header">
                  Communication
                </p>
                <p className="ratings-rate-an-agency-page__mobile-communication-description">
                  Evaluate the effectiveness and clarity of communication with
                  the agency
                </p>
                <img
                  className="ratings-rate-an-agency-page__mobile-ratings-empty-stars-icon"
                  src={RatingsEmptyStarsIcon}
                  alt="Ratings Empty Stars Icon"
                />
              </div>
              <div className="ratings-rate-an-agency-page__mobile-professionalism-container">
                <p className="ratings-rate-an-agency-page__mobile-professionalism-header">
                  Professionalism
                </p>
                <p className="ratings-rate-an-agency-page__mobile-professionalism-description">
                  Assess the agency's conduct and adherence to industry
                  standards.
                </p>
                <img
                  className="ratings-rate-an-agency-page__mobile-ratings-empty-stars-icon"
                  src={RatingsEmptyStarsIcon}
                  alt="Ratings Empty Stars Icon"
                />
              </div>
              <div className="ratings-rate-an-agency-page__mobile-payment-timeliness-container">
                <p className="ratings-rate-an-agency-page__mobile-payment-timeliness-header">
                  Payment Timeliness
                </p>
                <p className="ratings-rate-an-agency-page__mobile-payment-timeliness-description">
                  Rate the agency's speed in handling payments.
                </p>
                <img
                  className="ratings-rate-an-agency-page__mobile-ratings-empty-stars-icon"
                  src={RatingsEmptyStarsIcon}
                  alt="Ratings Empty Stars Icon"
                />
              </div>
              <div className="ratings-rate-an-agency-page__mobile-resource-quality-container">
                <p className="ratings-rate-an-agency-page__mobile-resource-quality-header">
                  Resource Quality
                </p>
                <p className="ratings-rate-an-agency-page__mobile-resource-quality-description">
                  Evaluate the agency's overall standard, suitability, and
                  effectiveness of both the candidates and job roles.
                </p>
                <img
                  className="ratings-rate-an-agency-page__mobile-ratings-empty-stars-icon"
                  src={RatingsEmptyStarsIcon}
                  alt="Ratings Empty Stars Icon"
                />
              </div>
              <div className="ratings-rate-an-agency-page__mobile-feedback-container">
                <p className="ratings-rate-an-agency-page__mobile-feedback-header">
                  Feedback:
                </p>
                <p className="ratings-rate-an-agency-page__mobile-feedback-description">
                  Provide comments or feedback on your experience with the
                  agency.
                </p>
              </div>
              <textarea
                className="ratings-rate-an-agency-page__mobile-text-area"
                name="mobile-text-area"
                id="mobile-text-area"
              ></textarea>
            </div>
            <div className="ratings-rate-an-agency-page__mobile-bottom-button-container">
              <button className="ratings-rate-an-agency-page__mobile-submit-button">
                Submit
              </button>
              <button className="ratings-rate-an-agency-page__mobile-cancel-button">
                Cancel
              </button>
            </div>
          </div>
          <div className="ratings-rate-an-agency-page__tablet-container">
            <p className="ratings-rate-an-agency-page__tablet-header">
              Rate an Agency
            </p>
            <img
              className="ratings-rate-an-agency-page__tablet-values-circle-graphic-icon"
              src={ValuesCircleGraphicIcon}
              alt="Values Circle Graphic Icon"
            />
            <div className="ratings-rate-an-agency-page__tablet-input-container">
              <img
                className="ratings-rate-an-agency-page__tablet-search-icon"
                src={SearchIcon}
                alt="Search Icon"
              />
              <input
                className="ratings-rate-an-agency-page__tablet-enter-agency-name-input"
                type="text"
                placeholder="Enter Agency Name"
              />
            </div>
            <div className="ratings-rate-an-agency-page__tablet-content-container">
              <div className="ratings-rate-an-agency-page__tablet-communication-container">
                <p className="ratings-rate-an-agency-page__tablet-communication-header">
                  Communication
                </p>
                <p className="ratings-rate-an-agency-page__tablet-communication-description">
                  Evaluate the effectiveness and clarity of communication with
                  the agency.
                </p>
                <img
                  className="ratings-rate-an-agency-page__tablet-ratings-empty-stars-icon"
                  src={RatingsEmptyStarsIcon}
                  alt="Ratings Empty Stars Icon"
                />
              </div>
              <div className="ratings-rate-an-agency-page__tablet-professionalism-container">
                <p className="ratings-rate-an-agency-page__tablet-professionalism-header">
                  Professionalism
                </p>
                <p className="ratings-rate-an-agency-page__tablet-professionalism-description">
                  Assess the agency's conduct and adherence to industry
                  standards.
                </p>
                <img
                  className="ratings-rate-an-agency-page__tablet-ratings-empty-stars-icon"
                  src={RatingsEmptyStarsIcon}
                  alt="Ratings Empty Stars Icon"
                />
              </div>
              <div className="ratings-rate-an-agency-page__tablet-payment-timeliness-container">
                <p className="ratings-rate-an-agency-page__tablet-payment-timeliness-header">
                  Payment Timeliness
                </p>
                <p className="ratings-rate-an-agency-page__tablet-payment-timeliness-description">
                  Rate the agency's speed in handling payments.
                </p>
                <img
                  className="ratings-rate-an-agency-page__tablet-ratings-empty-stars-icon"
                  src={RatingsEmptyStarsIcon}
                  alt="Ratings Empty Stars Icon"
                />
              </div>
              <div className="ratings-rate-an-agency-page__tablet-resource-quality-container">
                <p className="ratings-rate-an-agency-page__tablet-resource-quality-header">
                  Resource Quality
                </p>
                <p className="ratings-rate-an-agency-page__tablet-resource-quality-description">
                  Evaluate the agency's overall standard, suitability, and
                  effectiveness of both the candidates and the job roles.
                </p>
                <img
                  className="ratings-rate-an-agency-page__tablet-ratings-empty-stars-icon"
                  src={RatingsEmptyStarsIcon}
                  alt="Ratings Empty Stars Icon"
                />
              </div>
              <div className="ratings-rate-an-agency-page__tablet-feedback-container">
                <p className="ratings-rate-an-agency-page__tablet-feedback-header">
                  Feedback:
                </p>
                <p className="ratings-rate-an-agency-page__tablet-feedback-description">
                  Provide comments or feedback on your experience with the
                  agency.
                </p>
              </div>
            </div>
            <textarea
              className="ratings-rate-an-agency-page__tablet-text-area"
              name="tablet-text-area"
              id="tablet-text-area"
            ></textarea>
            <div className="ratings-rate-an-agency-page__tablet-bottom-button-container">
              <button className="ratings-rate-an-agency-page__tablet-submit-button">
                Submit
              </button>
              <button className="ratings-rate-an-agency-page__tablet-cancel-button">
                Cancel
              </button>
            </div>
          </div>
          <div className="ratings-rate-an-agency-page__desktop-container">
            <p className="ratings-rate-an-agency-page__desktop-header">
              Rate an Agency
            </p>
            <div className="ratings-rate-an-agency-page__desktop-content-container">
              <div className="ratings-rate-an-agency-page__desktop-content-left-container">
                <div className="ratings-rate-an-agency-page__desktop-enter-agency-name-container">
                  <img
                    className="ratings-rate-an-agency-page__desktop-search-icon"
                    src={SearchIcon}
                    alt="Search Icon"
                  />
                  <input
                    className="ratings-rate-an-agency-page__desktop-enter-agency-name-input"
                    type="text"
                  />
                </div>
                <div className="ratings-rate-an-agency-page__desktop-communication-container">
                  <p className="ratings-rate-an-agency-page__desktop-communication-header">
                    Communication
                  </p>
                  <p className="ratings-rate-an-agency-page__desktop-communication-description">
                    Evaluate the effectiveness and clarity of communication with
                    the agency.
                  </p>
                  <img
                    className="ratings-rate-an-agency-page__desktop-ratings-empty-stars-icon"
                    src={RatingsEmptyStarsIcon}
                    alt="Ratings Empty Stars Icon"
                  />
                </div>
                <div className="ratings-rate-an-agency-page__desktop-professionalism-container">
                  <p className="ratings-rate-an-agency-page__desktop-professionalism-header">
                    Professionalism
                  </p>
                  <p className="ratings-rate-an-agency-page__desktop-professionalism-description">
                    Assess the agency's conduct and adherence to industry
                    standards.
                  </p>
                  <img
                    className="ratings-rate-an-agency-page__desktop-ratings-empty-stars-icon"
                    src={RatingsEmptyStarsIcon}
                    alt="Ratings Empty Stars Icon"
                  />
                </div>
                <div className="ratings-rate-an-agency-page__desktop-payment-timeliness-container">
                  <p className="ratings-rate-an-agency-page__desktop-payment-timeliness-header">
                    Payment Timeliness
                  </p>
                  <p className="ratings-rate-an-agency-page__desktop-payment-timeliness-description">
                    Rate the agency's speed in handling payments.
                  </p>
                  <img
                    className="ratings-rate-an-agency-page__desktop-ratings-empty-stars-icon"
                    src={RatingsEmptyStarsIcon}
                    alt="Ratings Empty Stars Icon"
                  />
                </div>
                <div className="ratings-rate-an-agency-page__desktop-resource-quality-container">
                  <p className="ratings-rate-an-agency-page__desktop-resource-quality-header">
                    Resource Quality
                  </p>
                  <p className="ratings-rate-an-agency-page__desktop-resource-quality-description">
                    Evaluate the agency's overall standard, suitability, and
                    effectiveness of both the candidates and job roles.
                  </p>
                  <img
                    className="ratings-rate-an-agency-page__desktop-ratings-empty-stars-icon"
                    src={RatingsEmptyStarsIcon}
                    alt="Ratings Empty Stars Icon"
                  />
                </div>
                <div className="ratings-rate-an-agency-page__desktop-feedback-container">
                  <p className="ratings-rate-an-agency-page__desktop-feedback-header">
                    Feedback:
                  </p>
                  <p className="ratings-rate-an-agency-page__desktop-feedback-description">
                    Provide comments or feedback on your experience with the
                    agency.
                  </p>
                </div>
              </div>
              <img
                className="ratings-rate-an-agency-page__desktop-values-circle-graphic-icon"
                src={ValuesCircleGraphicIcon}
                alt="Values Circle Graphic Icon"
              />
            </div>
            <textarea
              className="ratings-rate-an-agency-page__desktop-text-area"
              name="desktop-text-area"
              id="desktop-text-area"
            ></textarea>
            <div className="ratings-rate-an-agency-page__desktop-bottom-button-container">
              <button className="ratings-rate-an-agency-page__desktop-submit-button">
                Submit
              </button>
              <button className="ratings-rate-an-agency-page__desktop-cancel-button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
