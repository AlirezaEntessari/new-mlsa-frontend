import React from "react";
import "./MyCandidatesCandidateDetailsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import CandidatesSidePanel from "../../components/CandidatesSidePanel/CandidatesSidePanel";
import ValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";
import MenuArrowCircleDownIcon from "../../assets/icons/MenuCircleArrowGray.svg";
import CircleButtonOnBlueIcon from "../../assets/icons/CircleButtonOnBlue.svg";
import HotJobsOnIcon from "../../assets/icons/hotjobsOn.svg";
import OnHoldButtonOffIcon from "../../assets/icons/Onholdhotbuttonoff.svg";
import OnHoldOffIcon from "../../assets/icons/OnHoldOff.svg";

export default function MyCandidatesCandidateDetailsPage() {
  return (
    <div className="my-candidates-candidate-details-page">
      <HeaderWithProfilePic />
      <div className="my-candidates-candidate-details-page__main-container">
        <CandidatesSidePanel />
        <div className="my-candidates-candidate-details-page__right-container">
          <div className="my-candidates-candidate-details-page__mobile-container">
            <div className="my-candidates-candidate-details-page__mobile-header-container">
              <p className="my-candidates-candidate-details-page__mobile-header-text">
                Candidate Details
              </p>
              <div className="my-candidates-candidate-details-page__mobile-header-right-container">
                <p className="my-candidates-candidate-details-page__mobile-header-right-owner-text">
                  Owner:
                </p>
                <p className="my-candidates-candidate-details-page__mobile-header-right-owner-name">
                  John Smith
                </p>
                <p className="my-candidates-candidate-details-page__mobile-header-right-agency-name">
                  HumanRe Agency
                </p>
              </div>
            </div>
            <div className="my-candidates-candidate-details-page__mobile-top-central-container">
              <img
                className="my-candidates-candidate-details-page__mobile-value-assurance-icon"
                src={ValueAssuranceIcon}
                alt="Value Assurance Icon"
              />
              <p className="my-candidates-candidate-details-page__mobile-information-is-protected">
                Your information is protected by our top-rated value assurance
                system, ensuring its safety and security at all times.
              </p>
            </div>
            <p className="my-candidates-candidate-details-page__mobile-client-name-will-not-be-shared">
              *Client Name will not be shared without NDA or Partnership
              Agreement being signed by both parties.
            </p>
            <p className="my-candidates-candidate-details-page__mobile-mlsa-member-view">
              <img src={MenuArrowCircleDownIcon} alt="Menu Arrow Circle Down" />{" "}
              <span className="my-candidates-candidate-details-page__mobile-mlsa-member-view-text">
                MLSA Member View
              </span>
            </p>
            <div className="my-candidates-candidate-details-page__mobile-views-submissions-interviewing-pending-offers-container">
              <div className="my-candidates-candidate-details-page__mobile-views-submissions-container">
                <div className="my-candidates-candidate-details-page__mobile-views-container">
                  <p className="my-candidates-candidate-details-page__mobile-views-text">
                    Views
                  </p>
                  <p className="my-candidates-candidate-details-page__mobile-views-number">
                    0
                  </p>
                </div>
                <div className="my-candidates-candidate-details-page__mobile-submissions-container">
                  <p className="my-candidates-candidate-details-page__mobile-submission-text">
                    Submissions
                  </p>
                  <p className="my-candidates-candidate-details-page__mobile-submissions-number">
                    0
                  </p>
                </div>
              </div>
              <div className="my-candidates-candidate-details-page__mobile-interviewing-pending-offers-container">
                <div className="my-candidates-candidate-details-page__mobile-interviewing-container">
                  <p className="my-candidates-candidate-details-page__mobile-interviewing-text">
                    Interviewing
                  </p>
                  <p className="my-candidates-candidate-details-page__mobile-interviewing-number">
                    0
                  </p>
                </div>
                <div className="my-candidates-candidate-details-page__mobile-pending-offers-container">
                  <p className="my-candidates-candidate-details-page__mobile-pending-offers-text">
                    Pending Offers
                  </p>
                  <p className="my-candidates-candidate-details-page__mobile-pending-offers-number">
                    0
                  </p>
                </div>
              </div>
            </div>
            <div className="my-candidates-candidate-details-page__mobile-hot-candidate-put-on-hold-container">
              <div className="my-candidates-candidate-details-page__mobile-hot-candidate-container">
                <img
                  className="my-candidates-candidate-details-page__mobile-circle-button-on-blue-icon"
                  src={CircleButtonOnBlueIcon}
                  alt="Circle Button On Blue Icon"
                />
                <img
                  className="my-candidates-candidate-details-page__mobile-hot-jobs-on-icon"
                  src={HotJobsOnIcon}
                  alt="Hot Jobs On Icon"
                />
                <span className="my-candidates-candidate-details-page__mobile-hot-candidate-text">
                  Hot Candidate
                </span>
              </div>
              <div className="my-candidates-candidate-details-page__mobile-put-on-hold-container">
                <img
                  className="my-candidates-candidate-details-page__mobile-on-hold-button-off-icon"
                  src={OnHoldButtonOffIcon}
                  alt="On Hold Button Off Icon"
                />
                <img
                  className="my-candidates-candidate-details-page__mobile-on-hold-off-icon"
                  src={OnHoldOffIcon}
                  alt="On Hold Off Icon"
                />
                <span className="my-candidates-candidate-details-page__mobile-put-on-hold-text">
                  Put On Hold
                </span>
              </div>
            </div>
            <div className="my-candidates-candidate-details-page__mobile-hot-candidate-section">
              <p className="my-candidates-candidate-details-page__mobile-hot-candidate-header">
                <img
                  className="my-candidates-candidate-details-page__mobile-hot-candidate-hot-jobs-on-icon"
                  src={HotJobsOnIcon}
                  alt="Hot Jobs On Icon"
                />
                <span className="my-candidates-candidate-details-page__mobile-hot-candidate-middle-text">
                  Hot Candidate
                </span>
              </p>
              <p className="my-candidates-candidate-details-page__mobile-candidate-id-text">
                Candidate ID# 93782756
              </p>
              <p className="my-candidates-candidate-details-page__mobile-hot-candidate-job-title">
                Mechanical Engineer Designer
              </p>
              <p className="my-candidates-candidate-details-page__mobile-posted-on-text">
                Posted on: 08/07/2024
              </p>
              <p className="my-candidates-candidate-details-page__mobile-duration-text">
                Duration: 13 weeks
              </p>
              <p className="my-candidates-candidate-details-page__mobile-availability-date">
                Availability Date: 09/15/2024
              </p>
              <p className="my-candidates-candidate-details-page__mobile-hot-candidate-salary">
                Salary $110,000 - 145,000 Yearly
              </p>
              <div className="my-candidates-candidate-details-page__mobile-hot-candidate-staffing-agency-container">
                <p className="my-candidates-candidate-details-page__mobile-hot-candidate-staffing-agency-text">
                  Staffing Agency
                </p>
                <p className="my-candidates-candidate-details-page__mobile-hot-candidate-staffing-agency-name">
                  XYZ Staffing Inc.
                </p>
                <p className="my-candidates-candidate-details-page__mobile-hot-candidate-staffing-agency-location">
                  San Antonio, Texas
                </p>
                <p className="my-candidates-candidate-details-page__mobile-hot-candidate-staffing-agency-phone-number">
                  561-123-4567
                </p>
              </div>
              <button className="my-candidates-candidate-details-page__mobile-view-resume-button">
                View Resume
              </button>
            </div>
            <div className="my-candidates-candidate-details-page__mobile-candidate-description-section">
              <p className="my-candidates-candidate-details-page__mobile-candidate-description-header">
                Candidate Description
              </p>
              <p className="my-candidates-candidate-details-page__mobile-candidate-description-text">
                As a seasoned Mechanical Engineer Designer, this candidate
                brings a wealth of experience in mechanical drafting and
                industrial design, particularly within bulk material systems.
                With a strong command of AutoCAD and a keen eye for detail, they
                excel in creating precise, efficient diagrams and drafts. Their
                ability to identify improvements and collaborate effectively
                ensures that even the most complex designs are expertly crafted
                and ready for seamless field installation. Driven by deadlines
                and committed to quality, this candidate is perfectly suited to
                enhance our team and contribute to our success.
              </p>
            </div>
            <div className="my-candidates-candidate-details-page__mobile-professional-experience-container">
              <p className="my-candidates-candidate-details-page__mobile-professional-experience-header">
                Professional Experience
              </p>
              <ul className="my-candidates-candidate-details-page__mobile-professional-experience-list">
                <li className="my-candidates-candidate-details-page__mobile-professional-experience-list-first-bullet">
                  Designed and drafted over 50 complex bulk material handling
                  systems, ensuring accuracy and adherence to industry
                  standards.
                </li>
                <li className="my-candidates-candidate-details-page__mobile-professional-experience-list-second-bullet">
                  Successfully improved system efficiency by 15% through
                  strategic modifications in design and layout.
                </li>
                <li className="my-candidates-candidate-details-page__mobile-professional-experience-list-third-bullet">
                  Led cross functional teams in the review and optimization of
                  mechanical designs, resulting in smoother installation
                  processes.
                </li>
                <li className="my-candidates-candidate-details-page__mobile-professional-experience-list-fourth-bullet">
                  Managed multiple high-priority projects simultaneously,
                  consistently delivering detailed AutoCAD drawings ahead of
                  deadlines.
                </li>
                <li className="my-candidates-candidate-details-page__mobile-professional-experience-list-fifth-bullet">
                  Provided ongoing technical support and updates during the
                  installation phase, minimizing disruptions and ensuring
                  project sucess.
                </li>
              </ul>
            </div>
            <div className="my-candidates-candidate-details-page__mobile-details-container">
              <p className="my-candidates-candidate-details-page__mobile-details-header">
                Details
              </p>
              <ul className="my-candidates-candidate-details-page__mobile-details-list">
                <li className="my-candidates-candidate-details-page__mobile-details-list-first-bullet">
                  <span className="my-candidates-candidate-details-page__mobile-details-list-seniority-level">
                    Seniority level:
                  </span>
                  <span className="my-candidates-candidate-details-page__mobile-details-seniority-level-status">
                    Entry Level
                  </span>
                </li>
                <li className="my-candidates-candidate-details-page__mobile-details-list-second-bullet">
                  <span className="my-candidates-candidate-details-page__mobile-details-list-employment-type">
                    Employment Type:
                  </span>
                  <span className="my-candidates-candidate-details-page__mobile-details-list-employment-type-status">
                    Full Time
                  </span>
                </li>
                <li className="my-candidates-candidate-details-page__mobile-details-list-third-bullet">
                  <span className="my-candidates-candidate-details-page__mobile-details-list-job-function">
                    Job function:
                  </span>
                  <span className="my-candidates-candidate-details-page__mobile-details-list-job-function-status">
                    Engineering, Information Technology
                  </span>
                </li>
                <li className="my-candidates-candidate-details-page__mobile-details-list-fourth-bullet">
                  <span className="my-candidates-candidate-details-page__mobile-details-list-industries">
                    Industries
                  </span>
                  <span className="my-candidates-candidate-details-page__mobile-details-list-industries-status">
                    Industrial Machinery Manufacturing
                  </span>
                </li>
                <li className="my-candidates-candidate-details-page__mobile-details-list-fifth-bullet">
                  <span className="my-candidates-candidate-details-page__mobile-details-list-citizenship">
                    Citizenship:
                  </span>
                  <span className="my-candidates-candidate-details-page__mobile-details-list-citizenship-status">
                    US Citizen
                  </span>
                </li>
                <li className="my-candidates-candidate-details-page__mobile-details-list-sixth-bullet">
                  <span className="my-candidates-candidate-details-page__mobile-details-list-environment">
                    Environment:
                  </span>
                  <span className="my-candidates-candidate-details-page__mobile-details-list-environment-status">
                    Remote
                  </span>
                </li>
                <li className="my-candidates-candidate-details-page__mobile-details-list-seventh-bullet">
                  <span className="my-candidates-candidate-details-page__mobile-details-list-travel">
                    Travel
                  </span>
                  <span className="my-candidates-candidate-details-page__mobile-details-list-travel-status">
                    Open to travel
                  </span>
                </li>
                <li className="my-candidates-candidate-details-page__mobile-details-list-eigth-bullet">
                  <span className="my-candidates-candidate-details-page__mobile-details-list-other">
                    Other
                  </span>
                  <span className="my-candidates-candidate-details-page__mobile-details-list-other-status">
                    Paid Relocation requested
                  </span>
                </li>
                <p className="my-candidates-candidate-details-page__mobile-details-list-bonus-text">
                  Bonus
                </p>
              </ul>
            </div>
            <div className="my-candidates-candidate-details-page__mobile-education-container">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
