import React from "react";
import "./PartnershipsManagePage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import PartnershipsSidePanel from "../../components/PartnershipsSidePanel/PartnershipsSidePanel";
import PartnershipsNavbar from "../../components/PartnershipsNavbar/PartnershipsNavbar";
import CircleButtonOnOrangeIcon from "../../assets/icons/CircleButtonOnOrange.svg";
import CircleButtonOffGrayIcon from "../../assets/icons/CircleButtonOffGray (1).svg";
import { Link } from "react-router-dom";

export default function PartnershipsManagePage() {
  return (
    <div className="partnerships-manage-page">
      <HeaderWithProfilePic />
      <div className="partnerships-manage-page__main-container">
        <PartnershipsSidePanel />
        <div className="partnerships-manage-page__right-container">
          <div className="partnerships-manage-page__mobile-container">
            <p className="partnerships-manage-page__mobile-header">
              Partnerships
            </p>
            <PartnershipsNavbar />
            <div className="partnerships-manage-page__mobile-content-container">
              <p className="partnerships-manage-page__mobile-choose-partnership-to-manage-header">
                Choose Partnership to Manage:
              </p>
              <div className="partnerships-manage-page__mobile-partnership-options-container">
                <div className="partnerships-manage-page__mobile-partnership-options-abc-staffing-inc-container">
                  <img
                    className="partnerships-manage-page__mobile-circle-button-on-orange-icon"
                    src={CircleButtonOnOrangeIcon}
                    alt="Circle Button On Orange Icon"
                  />
                  <p className="partnerships-manage-page__mobile-abc-staffing-inc-text">
                    ABC Staffing Inc.
                  </p>
                </div>
                <div className="partnerships-manage-page__mobile-partnership-options-acme-agency-container">
                  <img
                    className="partnerships-manage-page__mobile-circle-button-off-gray-icon"
                    src={CircleButtonOffGrayIcon}
                    alt="Circle Button Off Gray Icon"
                  />
                  <p className="partnerships-manage-page__mobile-acme-agency-text">
                    Acme Agency
                  </p>
                </div>
                <div className="partnerships-manage-page__mobile-partnership-options-columbus-staffing-container">
                  <img
                    className="partnerships-manage-page__mobile-circle-button-off-gray-icon"
                    src={CircleButtonOffGrayIcon}
                    alt="Circle Button Off Gray Icon"
                  />
                  <p className="partnerships-manage-page__mobile-columbus-staffing-text">
                    Columbus Staffing
                  </p>
                </div>
                <div className="partnerships-manage-page__mobile-partnership-options-lmn-staffing-container">
                  <img
                    className="partnerships-manage-page__mobile-circle-button-off-gray-icon"
                    src={CircleButtonOffGrayIcon}
                    alt="Circle Button Off Gray Icon"
                  />
                  <p className="partnerships-manage-page__mobile-lmn-staffing-text">
                    LMN Staffing
                  </p>
                </div>
              </div>
              <div className="partnerships-manage-page__mobile-button-container">
                <Link
                  className="partnerships-manage-page__mobile-view-agreement-link"
                  to="/partnerships-view-agreement-page"
                >
                  <button className="partnerships-manage-page__mobile-view-agreement-button">
                    View Agreement
                  </button>
                </Link>
                <Link
                  className="partnerships-manage-page__mobile-view-activity-link"
                  to="/partnerships-view-activity-page"
                >
                  <button className="partnerships-manage-page__mobile-view-activity-button">
                    View Activity
                  </button>
                </Link>
                <Link
                  className="partnerships-manage-page__mobile-terminate-agreement-link"
                  to="/partnerships-terminate-agreement-page"
                >
                  <button className="partnerships-manage-page__mobile-terminate-agreement-button">
                    Terminate Agreement
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="partnerships-manage-page__tablet-container">
            <p className="partnerships-manage-page__tablet-header">
              Partnerships
            </p>
            <PartnershipsNavbar />
            <div className="partnerships-manage-page__tablet-content-container">
              <p className="partnerships-manage-page__tablet-choose-partnership-to-manage-header">
                Choose Partnership to Manage:
              </p>
              <div className="partnerships-manage-page__tablet-partnership-options-button-container">
                <div className="partnerships-manage-page__tablet-partnership-options-container">
                  <div className="partnerships-manage-page__tablet-partnership-options-abc-staffing-container">
                    <img
                      className="partnerships-manage-page__tablet-circle-button-on-orange-icon"
                      src={CircleButtonOnOrangeIcon}
                      alt="Circle Button On Orange Icon"
                    />
                    <p className="partnerships-manage-page__tablet-abc-staffing-text">
                      ABC Staffing Inc.
                    </p>
                  </div>
                  <div className="partnerships-manage-page__tablet-partnership-options-acme-agency-container">
                    <img
                      className="partnerships-manage-page__tablet-circle-button-off-gray-icon"
                      src={CircleButtonOffGrayIcon}
                      alt="Circle Button Off Gray Icon"
                    />
                    <p className="partnerships-manage-page__tablet-acme-agency-text">
                      Acme Agency
                    </p>
                  </div>
                  <div className="partnerships-manage-page__tablet-partnership-options-columbus-staffing-container">
                    <img
                      className="partnerships-manage-page__tablet-circle-button-off-gray-icon"
                      src={CircleButtonOffGrayIcon}
                      alt="Circle Button Off Gray Icon"
                    />
                    <p className="partnerships-manage-page__tablet-columbus-staffing-text">
                      Columbus Staffing
                    </p>
                  </div>
                  <div className="partnerships-manage-page__tablet-partnership-options-lmn-staffing-container">
                    <img
                      className="partnerships-manage-page__tablet-circle-button-off-gray-icon"
                      src={CircleButtonOffGrayIcon}
                      alt="Circle Button Off Gray Icon"
                    />
                    <p className="partnerships-manage-page__tablet-lmn-staffing-text">
                      LMN Staffing
                    </p>
                  </div>
                </div>
                <div className="partnerships-manage-page__tablet-button-container">
                  <Link
                    className="partnerships-manage-page__tablet-view-agreement-link"
                    to="/partnerships-view-agreement-page"
                  >
                    <button className="partnerships-manage-page__tablet-view-agreement-button">
                      View Agreement
                    </button>
                  </Link>
                  <Link
                    className="partnerships-manage-page__tablet-view-activity-link"
                    to="/partnerships-view-activity-page"
                  >
                    <button className="partnerships-manage-page__tablet-view-activity-button">
                      View Activity
                    </button>
                  </Link>
                  <Link
                    className="partnerships-manage-page__tablet-terminate-agreement-link"
                    to="/partnerships-terminate-agreement-page"
                  >
                    <button className="partnerships-manage-page__tablet-terminate-agreement-button">
                      Terminate Agreement
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
