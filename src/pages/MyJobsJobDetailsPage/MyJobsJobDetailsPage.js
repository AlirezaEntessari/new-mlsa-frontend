import React from "react";
import "./MyJobsJobDetailsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import JobsSidePanel from "../../components/JobsSidePanel/JobsSidePanel";
import ValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";
import CircleButtonOffGrayIcon from "../../assets/icons/CircleButtonOffGray (1).svg";
import CircleButtonOnBlueIcon from "../../assets/icons/CircleButtonOnBlue.svg";
import HotJobsOnIcon from "../../assets/icons/hotjobsOn.svg";
import CircleButtonOffIcon from "../../assets/icons/CircleButtonOff.svg";
import OnHoldHotButtonOffIcon from "../../assets/icons/Onholdhotbuttonoff.svg";
import OnHoldOffIcon from "../../assets/icons/OnHoldOff.svg";
import PartnerIconWhiteCircle from "../../assets/icons/PartnerIconWhiteCircle.svg";
import AgencyLogoBIcon from "../../assets/icons/AgencyLogoB.svg";

export default function MyJobsJobDetailsPage() {
  return (
    <div className="my-jobs-job-details-page">
      <HeaderWithProfilePic />
      <div className="my-jobs-job-details-page__main-container">
        <JobsSidePanel />
        <div className="my-jobs-job-details-page__right-container">
          <div className="my-jobs-job-details-page__mobile-container">
            <div className="my-jobs-job-details-page__mobile-header-owner-information-container">
              <p className="my-jobs-job-details-page__mobile-header">
                Job Details
              </p>
              <div className="my-jobs-job-details-page__mobile-owner-information-container">
                <p className="my-jobs-job-details-page__mobile-owner-text">
                  Owner:
                </p>
                <p className="my-jobs-job-details-page__mobile-owner-name">
                  John Smith
                </p>
                <p className="my-jobs-job-details-page__mobile-owner-agency">
                  HumanRe Agency
                </p>
              </div>
            </div>
            <div className="my-jobs-job-details-page__mobile-value-assurance-information-is-protected-container">
              <img
                className="my-jobs-job-details-page__mobile-value-assurance-icon"
                src={ValueAssuranceIcon}
                alt="Value Assurance Icon"
              />
              <p className="my-jobs-job-details-page__mobile-information-is-protected-text">
                Your information is protected by our top-rated value assurance
                system, ensuring its safety and security at all times.
              </p>
            </div>
            <p className="my-jobs-job-details-page__mobile-client-name-will-not-be-shared">
              *Client Name will not be shared without NDA or Partnership
              Agreement being signed by both parties.
            </p>
            <div className="my-jobs-job-details-page__mobile-mlsa-member-view-partner-view-container">
              <div className="my-jobs-job-details-page__mobile-mlsa-member-view-container">
                <img
                  className="my-jobs-job-details-page__mobile-circle-button-off-gray-icon"
                  src={CircleButtonOffGrayIcon}
                  alt="Circle Button Off Gray"
                />
                <span className="my-jobs-job-details-page__mobile-mlsa-member-view-text">
                  MLSA Member View
                </span>
              </div>
              <div className="my-jobs-job-details-page__mobile-mlsa-partner-view-container">
                <img
                  className="my-jobs-job-details-page__mobile-circle-button-on-blue-icon"
                  src={CircleButtonOnBlueIcon}
                  alt="Circle Button On Blue Icon"
                />
                <span className="my-jobs-job-details-page__mobile-mlsa-partner-view-text">
                  MLSA Partner View
                </span>
              </div>
            </div>
            <div className="my-jobs-job-details-page__mobile-views-submissions-interviewing-pending-offers-container">
              <div className="my-jobs-job-details-page__mobile-views-submissions-container">
                <div className="my-jobs-job-details-page__mobile-views-container">
                  <p className="my-jobs-job-details-page__mobile-views-text">
                    Views
                  </p>
                  <p className="my-jobs-job-details-page__mobile-views-number">
                    0
                  </p>
                </div>
                <div className="my-jobs-job-details-page__mobile-submissions-container">
                  <p className="my-jobs-job-details-page__mobile-submissions-text">
                    Submissions
                  </p>
                  <p className="my-jobs-job-details-page__mobile-submissions-number">
                    0
                  </p>
                </div>
              </div>
              <div className="my-jobs-job-details-page__mobile-interviewing-pending-offers-container">
                <div className="my-jobs-job-details-page__mobile-interviewing-container">
                  <p className="my-jobs-job-details-page__mobile-interviewing-text">
                    Interviewing
                  </p>
                  <p className="my-jobs-job-details-page__mobile-interviewing-number">
                    0
                  </p>
                </div>
                <div className="my-jobs-job-details-page__mobile-pending-offers-container">
                  <p className="my-jobs-job-details-page__mobile-pending-offers-text">
                    Pending Offers
                  </p>
                  <p className="my-jobs-job-details-page__mobile-pending-offers-number">
                    0
                  </p>
                </div>
              </div>
            </div>
            <div className="my-jobs-job-details-page__mobile-hot-job-opening-put-on-hold-container">
              <div className="my-jobs-job-details-page__mobile-hot-job-opening-container">
                <img
                  className="my-jobs-job-details-page__mobile-job-opening-circle-button-on-blue-icon"
                  src={CircleButtonOnBlueIcon}
                  alt="Circle Button On Blue Icon"
                />
                <img
                  className="my-jobs-job-details-page__mobile-job-opening-hot-jobs-on-icon"
                  src={HotJobsOnIcon}
                  alt="Hot Jobs On Icon"
                />
                <span className="my-jobs-job-details-page__mobile-hot-job-opening-text">
                  Hot Job Opening
                </span>
              </div>
              <div className="my-jobs-job-details-page__mobile-put-on-hold-container">
                <img
                  className="my-jobs-job-details-page__mobile-on-hold-hot-button-off-icon"
                  src={OnHoldHotButtonOffIcon}
                  alt="On Hold Hot Button Off Icon"
                />
                <img
                  className="my-jobs-job-details-page__mobile-on-hold-off-icon"
                  src={OnHoldOffIcon}
                  alt="On Hold Off Icon"
                />
                <span className="my-jobs-job-details-page__mobile-put-on-hold-text">
                  Put On Hold
                </span>
              </div>
            </div>
            <div className="my-jobs-job-details-page__mobile-hot-job-opening-field">
              <div className="my-jobs-job-details-page__mobile-hot-job-header-container">
                <img
                  className="my-jobs-job-details-page__mobile-hot-job-header-icon"
                  src={HotJobsOnIcon}
                  alt="Hot Jobs"
                />
                <span className="my-jobs-job-details-page__mobile-hot-job-opening-text">
                  Hot Job Opening
                </span>
              </div>
              <p className="my-jobs-job-details-page__mobile-hot-job-opening-job-id">
                Job ID# 73849020
              </p>
              <p className="my-jobs-job-details-page__mobile-hot-job-opening-job-title">
                Mechanical Engineer Designer
              </p>
              <div className="my-jobs-job-details-page__mobile-hot-job-opening-info-container">
                <p className="my-jobs-job-details-page__mobile-hot-job-opening-location">
                  Location: San Antonio, TX
                </p>
                <p className="my-jobs-job-details-page__mobile-hot-job-opening-posted-on">
                  Posted on: 08/07/2024
                </p>
                <p className="my-jobs-job-details-page__mobile-hot-job-opening-job-type">
                  Job Type: Full Time
                </p>
                <p className="my-jobs-job-details-page__mobile-hot-job-opening-environment">
                  Environment: On-Site
                </p>
              </div>
              <p className="my-jobs-job-details-page__mobile-hot-job-opening-start-date">
                Start Date: 09/15/2024
              </p>
              <p className="my-jobs-job-details-page__mobile-hot-job-opening-salary">
                Salary $110,000 - 145,000 Yearly
              </p>
              <div className="my-jobs-job-details-page__mobile-staffing-agency-container">
                <div className="my-jobs-job-details-page__mobile-staffing-agency-header-container">
                  <img
                    className="my-jobs-job-details-page__mobile-partner-icon-white-circle"
                    src={PartnerIconWhiteCircle}
                    alt="Partner Icon White Circle"
                  />
                  <p className="my-jobs-job-details-page__mobile-staffing-agency-header-text">
                    Staffing Agency:
                  </p>
                </div>
                <p className="my-jobs-job-details-page__mobile-staffing-agency-agency-name">
                  HumanRe Agency
                </p>
                <p className="my-jobs-job-details-page__mobile-staffing-agency-location">
                  Austin, Texas
                </p>
                <p className="my-jobs-job-details-page__mobile-staffing-agency-phone-number">
                  561-123-4567
                </p>
              </div>
              <img
                className="my-jobs-job-details-page__mobile-agency-logo-b-icon"
                src={AgencyLogoBIcon}
                alt="Agency Logo B Icon"
              />
              <div className="my-jobs-job-details-page__mobile-staffing-agency-description-container">
                <p className="my-jobs-job-details-page__mobile-staffing-agency-description-name-text">
                  LB Industrial Systems, LLC
                </p>
                <p className="my-jobs-job-details-page__mobile-staffing-agency-description-name-location">
                  San Antonio, TX
                </p>
                <p className="my-jobs-job-details-page__mobile-staffing-agency-description-website">
                  LB Industrial Systems Website
                </p>
              </div>
            </div>
            <div className="my-jobs-job-details-page__mobile-job-description-field">
              <p className="my-jobs-job-details-page__mobile-job-description-header">
                Job Description
              </p>
              <p className="my-jobs-job-details-page__mobile-job-description-field-description">
                We are seeking a Mechanical Engineer Designer to become a part
                of our team! You will prepare detailed working diagrams of
                industrial facilities as well as identify areas of improvement
                to increase efficiency.
              </p>
              <ul className="my-jobs-job-details-page__mobile-job-description-list">
                <li className="my-jobs-job-details-page__mobile-job-description-list-first-bullet">
                  Prepare diagrams and drafts for Bulk Material Systems.
                </li>
                <li className="my-jobs-job-details-page__mobile-job-description-list-second-bullet">
                  Calculate dimensions and tolerance.
                </li>
                <li className="my-jobs-job-details-page__mobile-job-description-list-third-bullet">
                  Review and modify designs so that the systems can be installed
                  in the field.
                </li>
                <li className="my-jobs-job-details-page__mobile-job-description-list-fourth-bullet">
                  Provide timely updates for drawing completion and workload.
                </li>
                <li className="my-jobs-job-details-page__mobile-job-description-list-fifth-bullet">
                  Coordinate with other colleagues regarding complex designs.
                </li>
                <li className="my-jobs-job-details-page__mobile-job-description-list-sixth-bullet">
                  Previous experience in mechanical drafting, manufacturing or
                  other related fields.
                </li>
                <li className="my-jobs-job-details-page__mobile-job-description-list-seventh-bullet">
                  Familiarity with bulk material.
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
