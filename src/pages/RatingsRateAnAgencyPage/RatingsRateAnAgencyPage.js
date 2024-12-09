import React from "react";
import "./RatingsRateAnAgencyPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";

export default function RatingsRateAnAgencyPage() {
  return (
    <div className="ratings-rate-an-agency-page">
      <HeaderWithProfilePic />
      <div className="ratings-rate-an-agency-page__main-container">
        <RatingsSidePanel />
        <div className="ratings-rate-an-agency-page__right-container">
          <div className="ratings-rate-an-agency-page__mobile-container">
            <div className="ratings-rate-an-agency-page__mobile-header-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
