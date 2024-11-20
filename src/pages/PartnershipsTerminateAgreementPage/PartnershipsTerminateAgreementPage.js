import React, { useState } from "react";
import "./PartnershipsTerminateAgreementPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import PartnershipsSidePanel from "../../components/PartnershipsSidePanel/PartnershipsSidePanel";
import PartnershipsNavbar from "../../components/PartnershipsNavbar/PartnershipsNavbar";
import ABCStaffingLogo from "../../assets/icons/abcstaffinglogo.svg";
import RatingStarIcon from "../../assets/icons/RatingStar.svg";
import ModalTerminateAgreement from "../../components/ModalTerminateAgreement/ModalTerminateAgreement";

export default function PartnershipsTerminateAgreementPage() {
  const [
    isModalTerminateAgreementVisible,
    setIsModalTerminateAgreementVisible,
  ] = useState(false);

  const handleTerminateAgreement = () => {
    setIsModalTerminateAgreementVisible(true);
  };

  const closeModalTerminateAgreement = () => {
    setIsModalTerminateAgreementVisible(false);
  };

  return (
    <div className="partnerships-terminate-agreement-page">
      <HeaderWithProfilePic />
      <div className="partnerships-terminate-agreement-page__main-container">
        <PartnershipsSidePanel />
        <div className="partnerships-terminate-agreement-page__right-container">
          <div className="partnerships-terminate-agreement-page__mobile-container">
            <p className="partnerships-terminate-agreement-page__mobile-header">
              Partnerships
            </p>
            <PartnershipsNavbar />
            <p className="partnerships-terminate-agreement-page__mobile-terminate-agreement">
              Terminate Agreement
            </p>
            <div className="partnerships-terminate-agreement-page__mobile-first-row">
              <img
                className="partnerships-terminate-agreement-page__mobile-abc-staffing-logo"
                src={ABCStaffingLogo}
                alt="ABC Staffing Logo"
              />
              <div className="partnerships-terminate-agreement-page__mobile-first-row-agency-information-container">
                <p className="partnerships-terminate-agreement-page__mobile-first-row-agency-name">
                  ABC Staffing Inc.
                </p>
                <div className="partnerships-terminate-agreement-page__mobile-first-row-reviews-container">
                  <div className="partnerships-terminate-agreement-page__mobile-first-row-star-container">
                    <img
                      className="partnerships-terminate-agreement-page__mobile-first-row-rating-star-icon-1"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-terminate-agreement-page__mobile-first-row-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-terminate-agreement-page__mobile-first-row-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-terminate-agreement-page__mobile-first-row-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-terminate-agreement-page__mobile-first-row-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                  </div>
                  <p className="partnerships-terminate-agreement-page__mobile-first-row-reviews-text">
                    5
                  </p>
                </div>
              </div>
              <div className="partnerships-terminate-agreement-page__mobile-first-row-active-jobs-active-candidates-container">
                <div className="partnerships-terminate-agreement-page__mobile-first-row-active-jobs-container">
                  <p className="partnerships-terminate-agreement-page__mobile-first-row-active-jobs-text">
                    Active Jobs
                  </p>
                  <p className="partnerships-terminate-agreement-page__mobile-first-row-active-jobs-number">
                    <span className="partnerships-terminate-agreement-page__mobile-first-row-active-jobs-first-number">
                      2
                    </span>
                    <span className="partnerships-terminate-agreement-page__mobile-first-row-active-jobs-second-number">
                      /17
                    </span>
                  </p>
                </div>
                <div className="partnerships-terminate-agreement-page__mobile-first-row-active-candidates-container">
                  <p className="partnerships-terminate-agreement-page__mobile-first-row-active-candidates-text">
                    Active Candidates
                  </p>
                  <p className="partnerships-terminate-agreement-page__mobile-first-row-active-candidates-number">
                    <span className="partnerships-terminate-agreement-page__mobile-first-row-active-candidates-first-number">
                      1
                    </span>
                    <span className="partnerships-terminate-agreement-page__mobile-first-row-active-candidates-second-number">
                      /4
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="partnerships-terminate-agreement-page__mobile-card-container">
              <div className="partnerships-terminate-agreement-page__mobile-card-1">
                <div className="partnerships-terminate-agreement-page__mobile-card-1-inner-container">
                  <p className="partnerships-terminate-agreement-page__mobile-card-1-header">
                    Agency 1
                  </p>
                  <p className="partnerships-terminate-agreement-page__mobile-card-1-agency-name">
                    Agency Name: HumanRe
                  </p>
                  <p className="partnerships-terminate-agreement-page__mobile-card-1-signee">
                    Signee: John Smith
                  </p>
                  <p className="partnerships-terminate-agreement-page__mobile-card-1-title">
                    Title: Administrator
                  </p>
                  <p className="partnerships-terminate-agreement-page__mobile-card-1-date">
                    Date: 8/23/24
                  </p>
                  <p className="partnerships-terminate-agreement-page__mobile-card-1-date-signed">
                    Date Signed: 8/23/24
                  </p>
                </div>
              </div>
              <div className="partnerships-terminate-agreement-page__mobile-card-2">
                <div className="partnerships-terminate-agreement-page__mobile-card-2-inner-container">
                  <p className="partnerships-terminate-agreement-page__mobile-card-2-header">
                    Agency 2
                  </p>
                  <p className="partnerships-terminate-agreement-page__mobile-card-2-agency-name">
                    Agency Name: LMN Staffing Inc.
                  </p>
                  <p className="partnerships-terminate-agreement-page__mobile-card-2-signee">
                    Signee: Jennifer Matthews
                  </p>
                  <p className="partnerships-terminate-agreement-page__mobile-card-2-title">
                    Title: Administrator
                  </p>
                  <p className="partnerships-terminate-agreement-page__mobile-card-2-date">
                    Date: 8/23/24
                  </p>
                  <p className="partnerships-terminate-agreement-page__mobile-card-2-date-signed">
                    8/23/24
                  </p>
                </div>
              </div>
            </div>
            <p className="partnerships-terminate-agreement-page__mobile-in-order-for-us-to-provide">
              In order for us to provide the best customer service, please
              answer the following questions below.
            </p>
            <div className="partnerships-terminate-agreement-page__mobile-confirm-name-of-your-agency-container">
              <label
                className="partnerships-terminate-agreement-page__mobile-confirm-name-of-your-agency-label"
                htmlFor="mobile-confirm-name-of-your-agency"
              >
                Confirm Name of Your Agency
              </label>
              <input
                className="partnerships-terminate-agreement-page__mobile-confirm-name-of-your-agency-input"
                type="text"
                id="mobile-confirm-name-of-your-agency"
              />
            </div>
            <div className="partnerships-terminate-agreement-page__mobile-confirm-name-of-agency-partnership-you-would-like-to-terminate-container">
              <label
                className="partnerships-terminate-agreement-page__mobile-confirm-name-of-agency-partnership-you-would-like-to-terminate-label"
                htmlFor="mobile-confirm-name-of-agency-partnership-you-would-like-to-terminate"
              >
                Confirm Name of Agency Partnership you would like to terminate
              </label>
              <input
                className="partnerships-terminate-agreement-page__mobile-confirm-name-of-agency-partnership-you-would-like-to-terminate-input"
                type="text"
                id="mobile-confirm-name-of-agency-partnership-you-would-like-to-terminate"
              />
            </div>
            <div className="partnerships-terminate-agreement-page__mobile-reason-for-termination-container">
              <label
                className="partnerships-terminate-agreement-page__mobile-reason-for-termination-label"
                htmlFor="mobile-reason-for-termination"
              >
                Reason for Termination
              </label>
              <p className="partnerships-terminate-agreement-page__mobile-type-a-paragraph-up-to-250-words">
                Type a paragraph up to 250 words which will be displayed on your
                Agency profile page
              </p>
              <textarea
                className="partnerships-terminate-agreement-page__mobile-reason-for-termination-text-area"
                name="mobile-reason-for-termination"
                id="mobile-reason-for-termination"
              ></textarea>
            </div>
            <button
              onClick={handleTerminateAgreement}
              className="partnerships-terminate-agreement-page__mobile-terminate-agreement-button"
            >
              Terminate Agreement
            </button>
          </div>
          <div className="partnerships-terminate-agreement-page__tablet-container">
            <p className="partnerships-terminate-agreement-page__tablet-header">
              Partnerships
            </p>
            <PartnershipsNavbar />
            <p className="partnerships-terminate-agreement-page__tablet-terminate-agreement">
              Terminate Agreement
            </p>
            <div className="partnerships-terminate-agreement-page__tablet-first-row">
              <img
                className="partnerships-terminate-agreement-page__tablet-abc-staffing-logo"
                src={ABCStaffingLogo}
                alt="ABC Staffing Logo"
              />
              <p className="partnerships-terminate-agreement-page__tablet-first-row-agency-name">
                ABC Staffing Inc.
              </p>
              <div className="partnerships-terminate-agreement-page__tablet-reviews-container">
                <div className="partnerships-terminate-agreement-page__tablet-star-container">
                  <img
                    className="partnerships-terminate-agreement-page__tablet-rating-star-icon-1"
                    src={RatingStarIcon}
                    alt="Rating Star Icon"
                  />
                  <img
                    className="partnerships-terminate-agreement-page__tablet-rating-star-icon"
                    src={RatingStarIcon}
                    alt="Rating Star Icon"
                  />
                  <img
                    className="partnerships-terminate-agreement-page__tablet-rating-star-icon"
                    src={RatingStarIcon}
                    alt="Rating Star Icon"
                  />
                  <img
                    className="partnerships-terminate-agreement-page__tablet-rating-star-icon"
                    src={RatingStarIcon}
                    alt="Rating Star Icon"
                  />
                  <img
                    className="partnerships-terminate-agreement-page__tablet-rating-star-icon"
                    src={RatingStarIcon}
                    alt="Rating Star Icon"
                  />
                </div>
                <p className="partnerships-terminate-agreement-page__tablet-reviews-text">
                  5
                </p>
              </div>
              <div className="partnerships-terminate-agreement-page__tablet-active-jobs-active-candidates-container">
                <div className="partnerships-terminate-agreement-page__tablet-active-jobs-container">
                  <p className="partnerships-terminate-agreement-page__tablet-active-jobs-text">
                    Active Jobs
                  </p>
                  <p className="partnerships-terminate-agreement-page__tablet-active-jobs-number">
                    <span className="partnerships-terminate-agreement-page__tablet-active-jobs-first-number">
                      0
                    </span>
                    <span className="partnerships-terminate-agreement-page__tablet-active-jobs-second-number">
                      /28
                    </span>
                  </p>
                </div>
                <div className="partnerships-terminate-agreement-page__tablet-active-candidates-container">
                  <p className="partnerships-terminate-agreement-page__tablet-active-candidates-text">
                    Active Candidates
                  </p>
                  <p className="partnerships-terminate-agreement-page__tablet-active-candidates-number">
                    <span className="partnerships-terminate-agreement-page__tablet-active-candidates-first-number">
                      8
                    </span>
                    <span className="partnerships-terminate-agreement-page__tablet-active-candidates-second-number">
                      /11
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalTerminateAgreementVisible && (
        <ModalTerminateAgreement closeModal={closeModalTerminateAgreement} />
      )}
    </div>
  );
}
