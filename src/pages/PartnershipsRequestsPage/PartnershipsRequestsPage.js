import React from "react";
import "./PartnershipsRequestsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import PartnershipsNavbar from "../../components/PartnershipsNavbar/PartnershipsNavbar";
import PartnershipsSidePanel from "../../components/PartnershipsSidePanel/PartnershipsSidePanel";
import LMNStaffingIncLogo from "../../assets/icons/lmnstaffinginc.svg";

export default function PartnershipsRequestsPage() {
  return (
    <div className="partnerships-requests-page">
      <HeaderWithProfilePic />
      <div className="partnerships-requests-page__main-container">
        <PartnershipsSidePanel />
        <div className="partnerships-requests-page__right-container">
          <p className="partnerships-requests-page__mobile-header">
            Partnerships
          </p>
          <PartnershipsNavbar />
          <p className="partnerships-requests-page__mobile-incoming-requests">
            Incoming Requests
          </p>
          <div className="partnerships-requests-page__mobile-card-container">
            <div className="partnerships-requests-page__mobile-card-1">
              <div className="partnerships-requests-page__mobile-card-1-top-container">
                <img
                  className="partnerships-requests-page__mobile-lmn-staffing-logo"
                  src={LMNStaffingIncLogo}
                  alt="LMN Staffing Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
