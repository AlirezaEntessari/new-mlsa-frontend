import React from "react";
import "./PartnershipsViewAgreementPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import PartnershipsSidePanel from "../../components/PartnershipsSidePanel/PartnershipsSidePanel";
import PartnershipsNavbar from "../../components/PartnershipsNavbar/PartnershipsNavbar";
import XYZStaffingIcon from "../../assets/icons/xyzstaffing.svg";
import RatingStarIcon from "../../assets/icons/RatingStar.svg";

export default function PartnershipsViewAgreementPage() {
  return (
    <div className="partnerships-view-agreement-page">
      <HeaderWithProfilePic />
      <div className="partnerships-view-agreement-page__main-container">
        <PartnershipsSidePanel />
        <div className="partnerships-view-agreement-page__right-container">
          <div className="partnerships-view-agreement-page__mobile-container">
            <p className="partnerships-view-agreement-page__mobile-header">
              Partnerships
            </p>
            <PartnershipsNavbar />
            <p className="partnerships-view-agreement-page__mobile-view-agreement">
              View Agreement
            </p>
            <div className="partnerships-view-agreement-page__mobile-first-row">
              <img
                className="partnerships-view-agreement-page__mobile-xyz-staffing-icon"
                src={XYZStaffingIcon}
                alt="XYZ Staffing Icon"
              />
              <div className="partnerships-view-agreement-page__mobile-first-row-agency-information-container">
                <p className="partnerships-view-agreement-page__mobile-first-row-agency-name">
                  XYZ Staffing Inc.
                </p>
                <div className="partnerships-view-agreement-page__mobile-first-row-reviews-container">
                  <div className="partnerships-view-agreement-page__mobile-first-row-star-container">
                    <img
                      className="partnerships-view-agreement-page__mobile-first-row-rating-star-icon-1"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-view-agreement-page__mobile-first-row-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-view-agreement-page__mobile-first-row-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-view-agreement-page__mobile-first-row-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-view-agreement-page__mobile-first-row-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
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
