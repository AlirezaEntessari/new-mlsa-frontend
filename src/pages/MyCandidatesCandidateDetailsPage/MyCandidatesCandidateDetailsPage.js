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
              <p className="my-candidates-candidate-details-page__mobile-education-header">
                Education
              </p>
              <p className="my-candidates-candidate-details-page__mobile-education-text">
                Associate Degree in Mechanical Drafting and Design Technology,
                Milwaukee Area Technical College, 2014
              </p>
            </div>
            <div className="my-candidates-candidate-details-page__mobile-required-skills-container">
              <p className="my-candidates-candidate-details-page__mobile-required-skills-header">
                Required Skills
              </p>
              <p className="my-candidates-candidate-details-page__mobile-required-skills-text">
                AutoCAD proficiency, 3D modeling & simulation, bulk material
                handling systems, mechanical drafting & design, tolerance
                analysis, project management, technical documentation,
                cross-functional team collaboration.
              </p>
            </div>
            <div className="my-candidates-candidate-details-page__mobile-other-requirements-container">
              <p className="my-candidates-candidate-details-page__mobile-other-requirements-header">
                Other Requirements
              </p>
              <p className="my-candidates-candidate-details-page__mobile-other-requirements-description">
                Resident of San Antonio, Texas
              </p>
            </div>
            <div className="my-candidates-candidate-details-page__mobile-bottom-description-container">
              <div className="my-candidates-candidate-details-page__mobile-bottom-description-inner-container">
                <p className="my-candidates-candidate-details-page__mobile-fee-type">
                  <span className="my-candidates-candidate-details-page__mobile-fee-type-text">
                    Fee Type:
                  </span>
                  <span className="my-candidates-candidate-details-page__mobile-percentage-of-salary-text">
                    Percentage of Salary
                  </span>
                </p>
                <p className="my-candidates-candidate-details-page__mobile-split-fee-percentage">
                  <span className="my-candidates-candidate-details-page__mobile-split-fee-percentage-text">
                    Split Fee Percentage:
                  </span>
                  <span className="my-candidates-candidate-details-page__mobile-split-fee-percentage-percentage">
                    50% 50%
                  </span>
                </p>
                <p className="my-candidates-candidate-details-page__mobile-willing-to-negotiate">
                  *Willing to negotiate
                </p>
                <p className="my-candidates-candidate-details-page__mobile-placement-fee">
                  <span className="my-candidates-candidate-details-page__mobile-placement-fee-text">
                    Placement Fee:
                  </span>
                  <span className="my-candidates-candidate-details-page__mobile-placement-fee-number">
                    20%
                  </span>
                </p>
                <p className="my-candidates-candidate-details-page__mobile-guarantee-period">
                  <span className="my-candidates-candidate-details-page__mobile-guarantee-period-text">
                    Guarantee Period:
                  </span>
                  <span className="my-candidates-candidate-details-page__mobile-guarantee-period-duration">
                    30 days
                  </span>
                </p>
                <p className="my-candidates-candidate-details-page__mobile-fee-agreement">
                  Fee Agreement
                </p>
              </div>
            </div>
            <div className="my-candidates-candidate-details-page__mobile-bottom-orange-container"></div>
            <div className="my-candidates-candidate-details-page__mobile-bottom-button-container">
              <button className="my-candidates-candidate-details-page__mobile-post-candidate-button">
                Post Candidate
              </button>
              <button className="my-candidates-candidate-details-page__mobile-edit-candidate-button">
                Edit Candidate
              </button>
            </div>
          </div>
          <div className="my-candidates-candidate-details-page__tablet-container">
            <div className="my-candidates-candidate-details-page__tablet-header-container">
              <p className="my-candidates-candidate-details-page__tablet-candidate-details-header">
                Candidate Details
              </p>
              <p className="my-candidates-candidate-details-page__tablet-candidate-details-header-owner-text">
                Owner: John Smith, HumanRe Agency
              </p>
            </div>
            <div className="my-candidates-candidate-details-page__tablet-top-central-container">
              <img
                className="my-candidates-candidate-details-page__tablet-value-assurance-icon"
                src={ValueAssuranceIcon}
                alt="Value Assurance Icon"
              />
              <div className="my-candidates-candidate-details-page__tablet-top-central-right-container">
                <p className="my-candidates-candidate-details-page__tablet-information-is-protected-text">
                  Your information is protected by our top-rated value assurance
                  system, ensuring its safety and security at all times.
                </p>
                <p className="my-candidates-candidate-details-page__tablet-client-name-will-not-be-shared">
                  *Client Name and info starred will not be shared without NDA
                  or Partnership Agreement being signed by both parties.
                </p>
              </div>
            </div>
            <div className="my-candidates-candidate-details-page__tablet-views-submissions-interviewing-pending-offers-container">
              <div className="my-candidates-candidate-details-page__tablet-views-container">
                <p className="my-candidates-candidate-details-page__tablet-views-text">
                  Views
                </p>
                <p className="my-candidates-candidate-details-page__tablet-views-number">
                  0
                </p>
              </div>
              <div className="my-candidates-candidate-details-page__tablet-submissions-container">
                <p className="my-candidates-candidate-details-page__tablet-submission-text">
                  Submissions
                </p>
                <p className="my-candidates-candidate-details-page__tablet-submissions-number">
                  0
                </p>
              </div>
              <div className="my-candidates-candidate-details-page__tablet-interviewing-container">
                <p className="my-candidates-candidate-details-page__tablet-interviewing-text">
                  Interviewing
                </p>
                <p className="my-candidates-candidate-details-page__tablet-interviewing-number">
                  0
                </p>
              </div>
              <div className="my-candidates-candidate-details-page__tablet-pending-offers-container">
                <p className="my-candidates-candidate-details-page__tablet-pending-offers-text">
                  Pending Offers
                </p>
                <p className="my-candidates-candidate-details-page__tablet-pending-offers-number">
                  0
                </p>
              </div>
            </div>
            <div className="my-candidates-candidate-details-page__tablet-mlsa-member-view-hot-candidate-put-on-hold-container">
              <div className="my-candidates-candidate-details-page__tablet-mlsa-member-view-container">
                <img
                  className="my-candidates-candidate-details-page__tablet-menu-arrow-circle-down-icon"
                  src={MenuArrowCircleDownIcon}
                  alt="Menu Arrow Circle Down Icon"
                />
                <p className="my-candidates-candidate-details-page__tablet-mlsa-member-view-text">
                  MLSA Member View
                </p>
              </div>
              <div className="my-candidates-candidate-details-page__tablet-hot-candidate-container">
                <img
                  className="my-candidates-candidate-details-page__tablet-circle-button-on-blue-icon"
                  src={CircleButtonOnBlueIcon}
                  alt="Circle Button On Blue Icon"
                />
                <img
                  className="my-candidates-candidate-details-page__tablet-hot-jobs-on-icon"
                  src={HotJobsOnIcon}
                  alt="Hot Jobs On Icon"
                />
                <p className="my-candidates-candidate-details-page__tablet-hot-candidate-text">
                  Hot Candidate
                </p>
              </div>
              <div className="my-candidates-candidate-details-page__tablet-put-on-hold-container">
                <img
                  className="my-candidates-candidate-details-page__tablet-on-hold-button-off-icon"
                  src={OnHoldButtonOffIcon}
                  alt="On Hold Button Off Icon"
                />
                <img
                  className="my-candidates-candidate-details-page__tablet-on-hold-off-icon"
                  src={OnHoldOffIcon}
                  alt="On Hold Off Icon"
                />
                <p className="my-candidates-candidate-details-page__tablet-put-on-hold-text">
                  Put On Hold
                </p>
              </div>
            </div>
            <div className="my-candidates-candidate-details-page__tablet-hot-candidate-section">
              <p className="my-candidates-candidate-details-page__tablet-hot-candidate-header">
                <img
                  className="my-candidates-candidate-details-page__tablet-hot-candidate-section-hot-jobs-on-icon"
                  src={HotJobsOnIcon}
                  alt="Hot Jobs On Icon"
                />{" "}
                <span className="my-candidates-candidate-details-page__tablet-hot-candidate-section-header-text">
                  Hot Candidate
                </span>
              </p>
              <div className="my-candidates-candidate-details-page__tablet-hot-candidate-section-information-container">
                <div className="my-candidates-candidate-details-page__tablet-hot-candidate-section-left-container">
                  <p className="my-candidates-candidate-details-page__tablet-hot-candidate-section-candidate-id">
                    Candidate ID# 93782756
                  </p>
                  <p className="my-candidates-candidate-details-page__tablet-hot-candidate-section-job-title">
                    Mechanical Engineer Designer
                  </p>
                  <p className="my-candidates-candidate-details-page__tablet-hot-candidate-section-posted-on">
                    Posted on: 08/07/2024
                  </p>
                  <p className="my-candidates-candidate-details-page__tablet-hot-candidate-section-duration">
                    Duration: 13 weeks
                  </p>
                  <p className="my-candidates-candidate-details-page__tablet-hot-candidate-section-availability-date">
                    Availability Date: 09/15/2024
                  </p>
                  <p className="my-candidates-candidate-details-page__tablet-hot-candidate-section-salary">
                    Salary $110,000 - 145,000 Yearly
                  </p>
                </div>
                <div className="my-candidates-candidate-details-page__tablet-hot-candidate-section-right-container">
                  <div className="my-candidates-candidate-details-page__tablet-hot-candidate-section-staffing-agency-container">
                    <p className="my-candidates-candidate-details-page__tablet-hot-candidate-section-staffing-agency-header">
                      Staffing Agency
                    </p>
                    <p className="my-candidates-candidate-details-page__tablet-hot-candidate-section-staffing-agency-name">
                      XYZ Staffing Inc.
                    </p>
                    <p className="my-candidates-candidate-details-page__tablet-hot-candidate-section-staffing-agency-location">
                      San Antonio, Texas
                    </p>
                    <p className="my-candidates-candidate-details-page__tablet-hot-candidate-section-staffing-agency-phone-number">
                      561-123-4567
                    </p>
                  </div>
                  <button className="my-candidates-candidate-details-page__tablet-view-resume-button">
                    View Resume
                  </button>
                </div>
              </div>
            </div>
            <div className="my-candidates-candidate-details-page__tablet-candidate-description-container">
              <p className="my-candidates-candidate-details-page__tablet-candidate-description-header">
                Candidate Description
              </p>
              <p className="my-candidates-candidate-details-page__tablet-candidate-description-description">
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
            <div className="my-candidates-candidate-details-page__tablet-professional-experience-container">
              <p className="my-candidates-candidate-details-page__tablet-professional-experience-header">
                Professional Experience
              </p>
              <ul className="my-candidates-candidate-details-page__tablet-professional-experience-list">
                <li className="my-candidates-candidate-details-page__tablet-professional-experience-first-bullet">
                  {" "}
                  Designed and drafted over 50 complex bulk material handling
                  systems, ensuring accuracy and adherence to industry
                  standards.
                </li>
                <li className="my-candidates-candidate-details-page__tablet-professional-experience-second-bullet">
                  Successfully improved system efficiency by 15% through
                  strategic modifications in design and layout.
                </li>
                <li className="my-candidates-candidate-details-page__tablet-professional-experience-third-bullet">
                  Led cross functional teams in the review and optimization of
                  mechanical designs, resulting in smoother installation
                  processes.
                </li>
                <li className="my-candidates-candidate-details-page__tablet-professional-experience-fourth-bullet">
                  Managed multiple high-priority projects simultaneously,
                  consistently delivering detailed AutoCAD drawings ahead of
                  deadlines.
                </li>
                <li className="my-candidates-candidate-details-page__tablet-professional-experience-fifth-bullet">
                  Provided ongoing technical support and updates during the
                  installation phase, minimizing disruptions and ensuring
                  project sucess.
                </li>
              </ul>
            </div>
            <div className="my-candidates-candidate-details-page__tablet-details-general-information-container">
              <div className="my-candidates-candidate-details-page__tablet-details-container">
                <p className="my-candidates-candidate-details-page__tablet-details-header">
                  Details
                </p>
                <ul className="my-candidates-candidate-details-page__tablet-details-list">
                  <li className="my-candidates-candidate-details-page__tablet-details-list-first-bullet">
                    <span className="my-candidates-candidate-details-page__tablet-details-list-seniority-level">
                      Seniority Level:
                    </span>
                    <span className="my-candidates-candidate-details-page__tablet-details-list-seniority-level-status">
                      Entry Level
                    </span>
                  </li>
                  <li className="my-candidates-candidate-details-page__tablet-details-list-second-bullet">
                    <span className="my-candidates-candidate-details-page__tablet-details-list-employment-type">
                      Employment Type:
                    </span>
                    <span className="my-candidates-candidate-details-page__tablet-details-list-employment-type-status">
                      Full-time
                    </span>
                  </li>
                  <li className="my-candidates-candidate-details-page__tablet-details-list-third-bullet">
                    <span className="my-candidates-candidate-details-page__tablet-details-list-job-function">
                      Job function:
                    </span>
                    <span className="my-candidates-candidate-details-page__tablet-details-list-job-function-status">
                      Engineering, Information Technology
                    </span>
                  </li>
                  <li className="my-candidates-candidate-details-page__tablet-details-list-fourth-bullet">
                    <span className="my-candidates-candidate-details-page__tablet-details-list-industries">
                      Industries:
                    </span>
                    <span className="my-candidates-candidate-details-page__tablet-details-list-industries-status">
                      Industrial Machinery Manufacturing
                    </span>
                  </li>
                  <li className="my-candidates-candidate-details-page__tablet-details-list-fifth-bullet">
                    <span className="my-candidates-candidate-details-page__tablet-details-list-citizenship">
                      Citizenship:
                    </span>
                    <span className="my-candidates-candidate-details-page__tablet-details-list-citizenship-status">
                      US Citizen
                    </span>
                  </li>
                  <li className="my-candidates-candidate-details-page__tablet-details-list-sixth-bullet">
                    <span className="my-candidates-candidate-details-page__tablet-details-list-environment">
                      Environment:
                    </span>
                    <span className="my-candidates-candidate-details-page__tablet-details-list-environment-status">
                      Remote
                    </span>
                  </li>
                  <li className="my-candidates-candidate-details-page__tablet-details-list-seventh-bullet">
                    <span className="my-candidates-candidate-details-page__tablet-details-list-travel">
                      Travel:
                    </span>
                    <span className="my-candidates-candidate-details-page__tablet-details-list-travel-status">
                      Open to travel
                    </span>
                  </li>
                  <li className="my-candidates-candidate-details-page__tablet-details-list-eighth-bullet">
                    <span className="my-candidates-candidate-details-page__tablet-details-list-other">
                      Other:
                    </span>
                    <span className="my-candidates-candidate-details-page__tablet-details-list-other-status">
                      Paid Relocation requested
                    </span>
                  </li>
                </ul>
                <p className="my-candidates-candidate-details-page__tablet-details-list-bonus-text">
                  Bonus
                </p>
              </div>
              <div className="my-candidates-candidate-details-page__tablet-details-list-general-information-container">
                <div className="my-candidates-candidate-details-page__tablet-details-list-general-information-inner-container">
                  <p className="my-candidates-candidate-details-page__tablet-details-list-fee-type">
                    <span className="my-candidates-candidate-details-page__tablet-details-list-fee-type-text">
                      Fee Type:
                    </span>
                    <span className="my-candidates-candidate-details-page__tablet-details-list-percentage-of-salary">
                      Percentage of Salary
                    </span>
                  </p>
                  <p className="my-candidates-candidate-details-page__tablet-details-list-split-fee-percentage">
                    <span className="my-candidates-candidate-details-page__tablet-detailst-list-split-fee-percentage-text">
                      Split Fee Percentage:
                    </span>
                    <span className="my-candidates-candidate-details-page__tablet-details-list-split-fee-percentage-percentage">
                      50% 50%
                    </span>
                  </p>
                  <p className="my-candidates-candidate-details-page__tablet-willing-to-negotiate">
                    *Willing to negotiate
                  </p>
                  <p className="my-candidates-candidate-details-page__tablet-placement-fee">
                    <span className="my-candidates-candidate-details-page__tablet-placement-fee-text">
                      Placement Fee:
                    </span>
                    <span className="my-candidates-candidate-details-page__tablet-placement-fee-percentage">
                      20%
                    </span>
                  </p>
                  <p className="my-candidates-candidate-details-page__tablet-guarantee-period">
                    <span className="my-candidates-candidate-details-page__tablet-guarantee-period-text">
                      Guarantee Period:
                    </span>
                    <span className="my-candidates-candidate-details-page__tablet-guarantee-period-duration">
                      30 days
                    </span>
                  </p>
                  <p className="my-candidates-candidate-details-page__tablet-fee-agreement-text">
                    Fee Agreement
                  </p>
                </div>
              </div>
            </div>
            <div className="my-candidates-candidate-details-page__tablet-education-container">
              <p className="my-candidates-candidate-details-page__tablet-education-header">
                Education
              </p>
              <p className="my-candidates-candidate-details-page__tablet-education-description">
                Associate Degree in Mechanical Drafting and Design Technology,
                Milwaukee Area Technical College, 2014
              </p>
            </div>
            <div className="my-candidates-candidate-details-page__tablet-required-skills-container">
              <p className="my-candidates-candidate-details-page__tablet-required-skills-header">
                Required Skills
              </p>
              <p className="my-candidates-candidate-details-page__tablet-required-skills-description">
                AutoCAD proficiency, 3D modeling & simulation, bulk material
                handling systems, mechanical drafting & design, tolerance
                analysis, project management, technical documentation,
                cross-functional team collaboration.
              </p>
            </div>
            <div className="my-candidates-candidate-details-page__tablet-other-requirements-container">
              <p className="my-candidates-candidate-details-page__tablet-other-requirements-header">
                Other Requirements
              </p>
              <p className="my-candidates-candidate-details-page__tablet-other-requirements-description">
                Resident of San Antonio, Texas
              </p>
            </div>
            <div className="my-candidates-candidate-details-page__tablet-orange-background-section"></div>
            <div className="my-candidates-candidate-details-page__tablet-bottom-button-container">
              <button className="my-candidates-candidate-details-page__tablet-post-candidate-button">
                Post Candidate
              </button>
              <button className="my-candidates-candidate-details-page__tablet-edit-button">
                Edit
              </button>
            </div>
          </div>
          <div className="my-candidates-candidate-details-page__desktop-container">
            <div className="my-candidates-candidate-details-page__desktop-header-container">
              <p className="my-candidates-candidate-details-page__desktop-header-text">
                Candidate Details
              </p>
              <p className="my-candidates-candidate-details-page__desktop-header-owner-text">
                Owner: John Smith, HumanRe Agency
              </p>
            </div>
            <div className="my-candidates-candidate-details-page__desktop-top-container">
              <img
                className="my-candidates-candidate-details-page__desktop-value-assurance-icon"
                src={ValueAssuranceIcon}
                alt="Value Assurance Icon"
              />
              <div className="my-candidates-candidate-details-page__desktop-top-right-container">
                <p className="my-candidates-candidate-details-page__desktop-information-is-protected-text">
                  Your information is protected by our top-rated value assurance
                  system, ensuring its safety and security at all times.
                </p>
                <p className="my-candidates-candidate-details-page__desktop-client-name-will-not-be-shared">
                  *Client Name will not be shared without NDA or Partnership
                  Agreement being signed by both parties.
                </p>
              </div>
            </div>
            <div className="my-candidates-candidate-details-page__desktop-top-dashboard-container">
              <div className="my-candidates-candidate-details-page__desktop-mlsa-member-view-container">
                <img
                  className="my-candidates-candidate-details-page__desktop-menu-arrow-circle-down-icon"
                  src={MenuArrowCircleDownIcon}
                  alt="Menu Arrow Circle Down Icon"
                />
                <p className="my-candidates-candidate-details-page__desktop-mlsa-member-view-text">
                  MLSA Member View
                </p>
              </div>
              <div className="my-candidates-candidate-details-page__desktop-views-requests-interviewing-pending-offers-container">
                <div className="my-candidates-candidate-details-page__desktop-views-container">
                  <p className="my-candidates-candidate-details-page__desktop-views-text">
                    Views
                  </p>
                  <p className="my-candidates-candidate-details-page__desktop-views-number">
                    23
                  </p>
                </div>
                <div className="my-candidates-candidate-details-page__desktop-requests-container">
                  <p className="my-candidates-candidate-details-page__desktop-requests-text">
                    Requests
                  </p>
                  <p className="my-candidates-candidate-details-page__desktop-requests-number">
                    5
                  </p>
                </div>
                <div className="my-candidates-candidate-details-page__desktop-interviewing-container">
                  <p className="my-candidates-candidate-details-page__desktop-interviewing-text">
                    Interviewing
                  </p>
                  <p className="my-candidates-candidate-details-page__desktop-interviewing-number">
                    1
                  </p>
                </div>
                <div className="my-candidates-candidate-details-page__desktop-pending-offers-container">
                  <p className="my-candidates-candidate-details-page__desktop-pending-offers-text">
                    Pending Offers
                  </p>
                  <p className="my-candidates-candidate-details-page__desktop-pending-offers-number">
                    0
                  </p>
                </div>
              </div>
            </div>
            <div className="my-candidates-candidate-details-page__desktop-hot-candidate-put-on-hold-container">
              <div className="my-candidates-candidate-details-page__desktop-hot-candidate-container">
                <img
                  className="my-candidates-candidate-details-page__desktop-circle-button-on-blue-icon"
                  src={CircleButtonOnBlueIcon}
                  alt="Circle Button On Blue Icon"
                />
                <img
                  className="my-candidates-candidate-details-page__desktop-hot-jobs-on-icon"
                  src={HotJobsOnIcon}
                  alt="Hot Jobs On Icon"
                />
                <span className="my-candidates-candidate-details-page__desktop-hot-candidate-text">
                  Hot Candidate
                </span>
              </div>
              <div className="my-candidates-candidate-details-page__desktop-put-on-hold-container">
                <img
                  className="my-candidates-candidate-details-page__desktop-on-hold-button-off-icon"
                  src={OnHoldButtonOffIcon}
                  alt="On Hold Button Off Icon"
                />
                <img
                  className="my-candidates-candidate-details-page__desktop-on-hold-off-icon"
                  src={OnHoldOffIcon}
                  alt="On Hold Off Icon"
                />
                <span className="my-candidates-candidate-details-page__desktop-put-on-hold-text">
                  Put On Hold
                </span>
              </div>
            </div>
            <div className="my-candidates-candidate-details-page__desktop-candidate-description-section">
              <div className="my-candidates-candidate-details-page__desktop-candidate-description-left-container">
                <p className="my-candidates-candidate-details-page__desktop-candidate-id">
                  Candidate ID# 93782756
                </p>
                <p className="my-candidates-candidate-details-page__desktop-candidate-description-job-title">
                  Mechanical Engineer Designer
                </p>
                <p className="my-candidates-candidate-details-page__desktop-candidate-description-posted-on">
                  Posted on: 08/07/2024
                </p>
                <p className="my-candidates-candidate-details-page__desktop-candidate-description-duration">
                  Duration: 13 Weeks
                </p>
                <p className="my-candidates-candidate-details-page__desktop-candidate-description-availability-date">
                  Availability Date: 09/15/2024
                </p>
                <p className="my-candidates-candidate-details-page__desktop-candidate-description-salary">
                  Salary $110,000 - 145,000 Yearly
                </p>
              </div>
              <div className="my-candidates-candidate-details-page__desktop-candidate-description-right-container">
                <div className="my-candidates-candidate-details-page__desktop-candidate-description-staffing-agency-container">
                  <p className="my-candidates-candidate-details-page__desktop-candidate-description-staffing-agency-header">
                    Staffing Agency
                  </p>
                  <p className="my-candidates-candidate-details-page__desktop-candidate-description-staffing-agency-agency-name">
                    XYZ Staffing Inc.
                  </p>
                  <p className="my-candidates-candidate-details-page__desktop-candidate-description-staffing-agency-location">
                    San Antonio, Texas
                  </p>
                  <p className="my-candidates-candidate-details-page__desktop-candidate-description-phone-number">
                    561-123-4567
                  </p>
                </div>
                <button className="my-candidates-candidate-details-page__desktop-view-resume-button">
                  View Resume
                </button>
              </div>
            </div>
            <div className="my-candidates-candidate-details-page__desktop-candidate-description-lower-education-required-skills-container">
              <div className="my-candidates-candidate-details-page__desktop-candidate-description-lower-container">
                <p className="my-candidates-candidate-details-page__desktop-candidate-description-lower-header">
                  Candidate Description
                </p>
                <p className="my-candidates-candidate-details-page__desktop-candidate-description-lower-description">
                  As a seasoned Mechanical Engineer Designer, this candidate
                  brings a wealth of experience in mechanical drafting and
                  industrial design, particularly within bulk material systems.
                  With a strong command of AutoCAD and a keen eye for detail,
                  they excel in creating precise, efficient diagrams and drafts.
                  Their ability to identify improvements and collaborate
                  effectively ensures that even the most complex designs are
                  expertly crafted and ready for seamless field installation.
                  Driven by deadlines and committed to quality, this candidate
                  is perfectly suited to enhance our team and contribute to our
                  success.
                </p>
              </div>
              <div className="my-candidates-candidate-details-page__desktop-education-required-skills-container">
                <div className="my-candidates-candidate-details-page__desktop-education-container">
                  <p className="my-candidates-candidate-details-page__desktop-education-header">
                    Education
                  </p>
                  <p className="my-candidates-candidate-details-page__desktop-education-description">
                    Associate Degree in Mechanical Drafting and Design
                    Technology Milwaukee Area Technical College, 2014
                  </p>
                </div>
                <div className="my-candidates-candidate-details-page__desktop-required-skills-container">
                  <p className="my-candidates-candidate-details-page__desktop-required-skills-header">
                    Required Skills
                  </p>
                  <p className="my-candidates-candidate-details-page__desktop-required-skills-description">
                    AutoCAD proficiency, 3D modeling & simulation, bulk material
                    handling systems, mechanical drafting & design, tolerance
                    analysis, project management, technical documentation,
                    cross-functional team collaboration.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-candidates-candidate-details-page__desktop-professional-experience-other-requirements-general-information-container">
              <div className="my-candidates-candidate-details-page__desktop-professional-experience-container">
                <p className="my-candidates-candidate-details-page__desktop-professional-experience-header">
                  Professional Experience
                </p>
                <ul className="my-candidates-candidate-details-page__desktop-professional-experience-unordered-list">
                  <li className="my-candidates-candidate-details-page__desktop-professional-experience-first-bullet">
                    Designed and drafted over 50 complex bulk material handling
                    systems, ensuring accuracy and adherence to industry
                    standards.
                  </li>
                  <li className="my-candidates-candidate-details-page__desktop-professional-experience-second-bullet">
                    Successfully improved system efficiency by 15% through
                    strategic modifications in design and layout.
                  </li>
                  <li className="my-candidates-candidate-details-page__desktop-professional-experience-third-bullet">
                    {" "}
                    Led cross functional teams in the review and optimization of
                    mechanical designs, resulting in smoother installation
                    processes.
                  </li>
                  <li className="my-candidates-candidate-details-page__desktop-professional-experience-fourth-bullet">
                    Managed multiple high-priority projects simultaneously,
                    consistently delivering detailed AutoCAD drawings ahead of
                    deadlines.
                  </li>
                  <li className="my-candidates-candidate-details-page__desktop-professional-experience-fifth-bullet">
                    Provided ongoing technical support and updates during the
                    installation phase, minimizing disruptions and ensuring
                    project sucess.
                  </li>
                </ul>
              </div>
              <div className="my-candidates-candidate-details-page__desktop-other-requirements-general-information-container">
                <div className="my-candidates-candidate-details-page__desktop-other-requirements-container">
                  <p className="my-candidates-candidate-details-page__desktop-other-requirements-header">
                    Other Requirements
                  </p>
                  <p className="my-candidates-candidate-details-page__desktop-other-requirements-description">
                    Resident of San Antonio, Texas
                  </p>
                </div>
                <div className="my-candidates-candidate-details-page__desktop-general-information-container">
                  <div className="my-candidates-candidate-details-page__desktop-general-information-inner-container">
                    <p className="my-candidates-candidate-details-page__desktop-fee-type">
                      <span className="my-candidates-candidate-details-page__desktop-fee-type-text">
                        Fee Type:
                      </span>
                      <span className="my-candidates-candidate-details-page__desktop-fee-type-percentage">
                        Percentage of Salary
                      </span>
                    </p>
                    <p className="my-candidates-candidate-details-page__desktop-split-fee-percentage">
                      <span className="my-candidates-candidate-details-page__desktop-split-fee-percentage-text">
                        Split Fee Percentage:
                      </span>
                      <span className="my-candidates-candidate-details-page__desktop-split-fee-percentage-percentage">
                        50% 50%
                      </span>
                    </p>
                    <p className="my-candidates-candidate-details-page__desktop-willing-to-negotiate">
                      *Willing to negotiate
                    </p>
                    <p className="my-candidates-candidate-details-page__desktop-placement-fee">
                      <span className="my-candidates-candidate-details-page__desktop-placement-fee-text">
                        Placement Fee:
                      </span>
                      <span className="my-candidates-candidate-details-page__desktop-placement-fee-percentage">
                        20%
                      </span>
                    </p>
                    <p className="my-candidates-candidate-details-page__desktop-guarantee-period">
                      <span className="my-candidates-candidate-details-page__desktop-guarantee-period-text">
                        Guarantee Period:
                      </span>
                      <span className="my-candidates-candidate-details-page__desktop-guarantee-period-duration">
                        30 days
                      </span>
                    </p>
                    <p className="my-candidates-candidate-details-page__desktop-fee-agreement">
                      Fee Agreement:
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-candidates-candidate-details-page__desktop-details-container">
              <p className="my-candidates-candidate-details-page__desktop-details-header">
                Details
              </p>
              <ul className="my-candidates-candidate-details-page__desktop-details-unordered-list">
                <li className="my-candidates-candidate-details-page__desktop-details-first-bullet">
                  <span className="my-candidates-candidate-details-page__desktop-details-seniority-level">
                    Seniority level:
                  </span>
                  <span className="my-candidates-candidate-details-page__desktop-details-seniority-level-status">
                    Entry level
                  </span>
                </li>
                <li className="my-candidates-candidate-details-page__desktop-details-second-bullet">
                  <span className="my-candidates-candidate-details-page__desktop-details-employment-type">
                    Employment type:
                  </span>
                  <span className="my-candidates-candidate-details-page__desktop-details-employment-type-status">
                    Full-time
                  </span>
                </li>
                <li className="my-candidates-candidate-details-page__desktop-details-third-bullet">
                  <span className="my-candidates-candidate-details-page__desktop-details-job-function">
                    Job function:
                  </span>
                  <span className="my-candidates-candidate-details-page__desktop-details-job-function-status">
                    Engineering, Information Technology
                  </span>
                </li>
                <li className="my-candidates-candidate-details-page__desktop-details-fourth-bullet">
                  <span className="my-candidates-candidate-details-page__desktop-details-industries">
                    Industries:
                  </span>
                  <span className="my-candidates-candidate-details-page__desktop-details-industries-description">
                    Industrial Machinery Manufacturing
                  </span>
                </li>
                <li className="my-candidates-candidate-details-page__desktop-details-fifth-bullet">
                  <span className="my-candidates-candidate-details-page__desktop-details-citizenship">
                    Citizenship:
                  </span>
                  <span className="my-candidates-candidate-details-page__desktop-details-citizenship-status">
                    US Citizen
                  </span>
                </li>
                <li className="my-candidates-candidate-details-page__desktop-details-sixth-bullet">
                  <span className="my-candidates-candidate-details-page__desktop-details-environment">
                    Environment:
                  </span>
                  <span className="my-candidates-candidate-details-page__desktop-details-environment-status">
                    Remote
                  </span>
                </li>
                <li className="my-candidates-candidate-details-page__desktop-details-seventh-bullet">
                  <span className="my-candidates-candidate-details-page__desktop-details-travel">
                    Travel:
                  </span>
                  <span className="my-candidates-candidate-details-page__desktop-details-travel-status">
                    Open to travel
                  </span>
                </li>
                <li className="my-candidates-candidate-details-page__desktop-details-eighth-bullet">
                  <span className="my-candidates-candidate-details-page__desktop-details-other">
                    Other:
                  </span>
                  <span className="my-candidates-candidate-details-page__desktop-details-other-description">
                    Paid Relocation requested
                  </span>
                </li>
              </ul>
              <p className="my-candidates-candidate-details-page__desktop-details-bonus">
                Bonus
              </p>
            </div>
            <div className="my-candidates-candidate-details-page__desktop-orange-background-container"></div>
            <div className="my-candidates-candidate-details-page__desktop-bottom-button-container">
              <button className="my-candidates-candidate-details-page__desktop-post-candidate-button">
                Post Candidate
              </button>
              <button className="my-candidates-candidate-details-page__desktop-edit-button">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
