import React from "react";
import "./MyCandidatesPostCandidatePage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import CandidatesSidePanel from "../../components/CandidatesSidePanel/CandidatesSidePanel";
import ValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";
import OnHoldButtonOffIcon from "../../assets/icons/Onholdhotbuttonoff.svg";
import HotOffIcon from "../../assets/icons/HotOff.svg";
import OnHoldOffIcon from "../../assets/icons/OnHoldOff.svg";
import MinusSignSalaryIcon from "../../assets/icons/MinusSignSalary.svg";
import DollarSignSalaryIcon from "../../assets/icons/DollarSignSalary.svg";
import CalendarIcon from "../../assets/icons/CalendarIcon.svg";

export default function MyCandidatesPostCandidatePage() {
  return (
    <div className="my-candidates-post-candidate-page">
      <HeaderWithProfilePic />
      <div className="my-candidates-post-candidate-page__main-container">
        <CandidatesSidePanel />
        <div className="my-candidates-post-candidate-page__right-container">
          <div className="my-candidates-post-candidate-page__mobile-container">
            <div className="my-candidates-post-candidate-page__mobile-header-container">
              <p className="my-candidates-post-candidate-page__mobile-header-text">
                Post Candidate
              </p>
              <div className="my-candidates-post-candidate-page__mobile-header-right-container">
                <p className="my-candidates-post-candidate-page__mobile-header-owner-text">
                  Owner:
                </p>
                <p className="my-candidates-post-candidate-page__mobile-header-owner-name">
                  John Smith
                </p>
                <p className="my-candidates-post-candidate-page__mobile-header-owner-agency">
                  HumanRe Agency
                </p>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__mobile-top-central-container">
              <img
                className="my-candidates-post-candidate-page__mobile-value-assurance-icon"
                src={ValueAssuranceIcon}
                alt="Value Assurance Icon"
              />
              <p className="my-candidates-post-candidate-page__mobile-top-central-text-field">
                Your information is protected by our top-rated value assurance
                system, ensuring its safety and security at all times.
              </p>
            </div>
            <p className="my-candidates-post-candidate-page__mobile-client-name-will-not-be-shared">
              *Client Name will not be shared without NDA or Partnership
              Agreement being signed by both parties.
            </p>
            <div className="my-candidates-post-candidate-page__mobile-top-button-container">
              <div className="my-candidates-post-candidate-page__mobile-top-button-first-level-container">
                <button className="my-candidates-post-candidate-page__mobile-parse-resume-button">
                  Parse Resume
                </button>
                <button className="my-candidates-post-candidate-page__mobile-open-archived-candidate-button">
                  Open Archived Candidate
                </button>
              </div>
              <div className="my-candidates-post-candidate-page__mobile-top-button-second-level-container">
                <button className="my-candidates-post-candidate-page__mobile-open-saved-draft-button">
                  Open Saved Draft
                </button>
                <button className="my-candidates-post-candidate-page__mobile-batch-upload-button">
                  Batch Upload
                </button>
              </div>
              <div className="my-candidates-post-candidate-page__mobile-top-button-third-level-container">
                <button className="my-candidates-post-candidate-page__mobile-open-through-api-button">
                  Open Through API
                </button>
                <button className="my-candidates-post-candidate-page__mobile-return-to-my-candidates-button">
                  Return to My Candidates
                </button>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__mobile-hot-candidate-put-on-hold-container">
              <div className="my-candidates-post-candidate-page__mobile-hot-candidate-container">
                <img
                  className="my-candidates-post-candidate-page__mobile-on-hold-button-off-icon"
                  src={OnHoldButtonOffIcon}
                  alt="On Hold Button Off Icon"
                />
                <img
                  className="my-candidates-post-candidate-page__mobile-hot-off-icon"
                  src={HotOffIcon}
                  alt="Hot Off Icon"
                />
                <span className="my-candidates-post-candidate-page__mobile-hot-candidate-text">
                  Hot Candidate
                </span>
              </div>
              <div className="my-candidates-post-candidate-page__mobile-put-on-hold-container">
                <img
                  className="my-candidates-post-candidate-page__mobile-on-hold-button-off-icon"
                  src={OnHoldButtonOffIcon}
                  alt="On Hold Button Off Icon"
                />
                <img
                  className="my-candidates-post-candidate-page__mobile-on-hold-off-icon"
                  src={OnHoldOffIcon}
                  alt="On Hold Off Icon"
                />
                <span className="my-candidates-post-candidate-page__mobile-put-on-hold-text">
                  Put On Hold
                </span>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__mobile-candidate-first-name-container">
              <label
                className="my-candidates-post-candidate-page__mobile-candidate-first-name-label"
                htmlFor="mobile-candidate-first-name"
              >
                Candidate First Name*
              </label>
              <input
                className="my-candidates-post-candidate-page__mobile-candidate-first-name-input"
                type="text"
                id="mobile-candidate-first-name"
                placeholder="Enter First Name"
              />
            </div>
            <div className="my-candidates-post-candidate-page__mobile-middle-name-container">
              <label
                className="my-candidates-post-candidate-page__mobile-middle-name-label"
                htmlFor="mobile-middle-name"
              >
                Middle Name*
              </label>
              <input
                className="my-candidates-post-candidate-page__mobile-middle-name-input"
                type="text"
                placeholder="Enter Middle Name"
              />
            </div>
            <div className="my-candidates-post-candidate-page__mobile-last-name-container">
              <label
                className="my-candidates-post-candidate-page__mobile-last-name-label"
                htmlFor="mobile-last-name"
              >
                Last Name*
              </label>
              <input
                className="my-candidates-post-candidate-page__mobile-last-name-input"
                type="text"
                placeholder="Enter Last Name"
              />
            </div>
            <p className="my-candidates-post-candidate-page__mobile-check-for-duplicate">
              Check for duplicate?
            </p>
            <div className="my-candidates-post-candidate-page__mobile-country-state-container">
              <div className="my-candidates-post-candidate-page__mobile-country-container">
                <label
                  className="my-candidates-post-candidate-page__mobile-country-label"
                  htmlFor="mobile-country"
                >
                  Country
                </label>
                <select
                  className="my-candidates-post-candidate-page__mobile-country-select"
                  name="mobile-country"
                  id="mobile-country"
                >
                  <option value="USA" selected>
                    USA
                  </option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="France">France</option>
                  <option value="Spain">Spain</option>
                  <option value="Germany">Germany</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Australia">Australia</option>
                  <option value="Italy">Italy</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__mobile-state-container">
                <label
                  className="my-candidates-post-candidate-page__mobile-state-label"
                  htmlFor="mobile-state"
                >
                  State
                </label>
                <select
                  className="my-candidates-post-candidate-page__mobile-state-select"
                  name="mobile-state"
                  id="mobile-state"
                >
                  <option value="Alabama" selected>
                    Alabama
                  </option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__mobile-city-zip-code-container">
              <div className="my-candidates-post-candidate-page__mobile-city-container">
                <label
                  className="my-candidates-post-candidate-page__mobile-city-label"
                  htmlFor="mobile-city"
                >
                  City
                </label>
                <input
                  className="my-candidates-post-candidate-page__mobile-city-input"
                  placeholder="Enter City"
                  type="text"
                  id="mobile-city"
                />
              </div>
              <div className="my-candidates-post-candidate-page__mobile-zip-code-container">
                <label
                  className="my-candidates-post-candidate-page__mobile-zip-code-label"
                  htmlFor="mobile-zip-code"
                >
                  Zip Code
                </label>
                <input
                  className="my-candidates-post-candidate-page__mobile-zip-code-input"
                  type="text"
                  id="mobile-zip-code"
                  placeholder="5-digit Zip Code"
                />
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__mobile-primary-email-container">
              <label
                className="my-candidates-post-candidate-page__mobile-primary-email-label"
                htmlFor="mobile-primary-email"
              >
                Primary Email*
              </label>
              <input
                className="my-candidates-post-candidate-page__mobile-primary-email-input"
                type="text"
                placeholder="Enter Email Address"
              />
            </div>
            <div className="my-candidates-post-candidate-page__mobile-home-phone-container">
              <label
                className="my-candidates-post-candidate-page__mobile-home-phone-label"
                htmlFor="mobile-home-phone"
              >
                Home Phone*
              </label>
              <input
                className="my-candidates-post-candidate-page__mobile-home-phone-input"
                type="text"
                id="mobile-home-phone"
                placeholder="Enter Home Phone Number"
              />
            </div>
            <div className="my-candidates-post-candidate-page__mobile-cell-phone-container">
              <label
                className="my-candidates-post-candidate-page__mobile-cell-phone-label"
                htmlFor="mobile-cell-phone"
              >
                Cell Phone
              </label>
              <input
                className="my-candidates-post-candidate-page__mobile-cell-phone-input"
                type="text"
                id="mobile-cell-phone"
                placeholder="Enter Cell Phone Number"
              />
            </div>
            <div className="my-candidates-post-candidate-page__mobile-best-time-to-call-container">
              <label
                className="my-candidates-post-candidate-page__mobile-best-time-to-call-label"
                htmlFor="mobile-best-time-to-call"
              >
                Best Time to Call
              </label>
              <input
                className="my-candidates-post-candidate-page__mobile-best-time-to-call-input"
                type="text"
                id="mobile-best-time-to-call"
                placeholder="Enter Time(s)"
              />
            </div>
            <div className="my-candidates-post-candidate-page__mobile-title-container">
              <label
                className="my-candidates-post-candidate-page__mobile-title-label"
                htmlFor="mobile-title"
              >
                Title
              </label>
              <input
                className="my-candidates-post-candidate-page__mobile-title-input"
                type="text"
                id="mobile-title"
                placeholder="Enter Your Job Title"
              />
            </div>
            <div className="my-candidates-post-candidate-page__mobile-industry-job-type-container">
              <div className="my-candidates-post-candidate-page__mobile-industry-container">
                <label
                  className="my-candidates-post-candidate-page__mobile-industry-label"
                  htmlFor="mobile-industry"
                >
                  Industry
                </label>
                <select
                  className="my-candidates-post-candidate-page__mobile-industry-select"
                  name="mobile-industry"
                  id="mobile-industry"
                >
                  <option value="aerospace-defense" selected>
                    Aerospace and Defense
                  </option>
                  <option value="professional-services-consulting">
                    Professional Services/Consulting
                  </option>
                  <option value="agricultural">Agricultural</option>
                  <option value="computers-and-technology">
                    Computers and Technology
                  </option>
                  <option value="conglomerate">Conglomerate</option>
                  <option value="consumer-goods">Consumer Goods</option>
                  <option value="financial">Financial</option>
                  <option value="government">Government</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="insurance">Insurance</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="oil-and-gas">Oil and Gas</option>
                  <option value="pharmaceuticals">Pharmaceuticals</option>
                  <option value="power-and-utilities">
                    Power and Utilities
                  </option>
                  <option value="telecommunications">Telecommunications</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__mobile-job-type-container">
                <label
                  className="my-candidates-post-candidate-page__mobile-job-type-label"
                  htmlFor="mobile-job-type"
                >
                  Job Type
                </label>
                <select
                  className="my-candidates-post-candidate-page__mobile-job-type-select"
                  name="mobile-job-type"
                  id="mobile-job-type"
                >
                  <option value="full-time" selected>
                    Full Time
                  </option>

                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__mobile-citizenship-type-of-visa-container">
              <div className="my-candidates-post-candidate-page__mobile-citizenship-container">
                <label
                  className="my-candidates-post-candidate-page__mobile-citizenship-label"
                  htmlFor="mobile-citizenship"
                >
                  Citizenship
                </label>
                <select
                  className="my-candidates-post-candidate-page__mobile-citizenship-select"
                  name="mobile-citizenship"
                  id="mobile-citizenship"
                >
                  <option value="US Citizen" selected>
                    US Citizen
                  </option>
                  <option value="green-card">Green Card</option>
                  <option value="permanent-resident">Permanent Resident</option>
                  <option value="non-resident">Non-resident</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__mobile-type-of-visa-container">
                <label
                  className="my-candidates-post-candidate-page__mobile-type-of-visa-label"
                  htmlFor="mobile-type-of-visa"
                >
                  Type of Visa
                </label>
                <select
                  className="my-candidates-post-candidate-page__mobile-type-of-visa-select"
                  name="mobile-type-of-visa"
                  id="mobile-type-of-visa"
                >
                  <option value="" disabled selected>
                    Select...
                  </option>
                  <option value="H1B">H1B</option>
                  <option value="EB5">EB5</option>
                  <option value="OPT">OPT</option>
                  <option value="F1">F1</option>
                </select>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__mobile-experience-level-salary-type-container">
              <div className="my-candidates-post-candidate-page__mobile-experience-level-container">
                <label
                  className="my-candidates-post-candidate-page__mobile-experience-level-label"
                  htmlFor="mobile-experience-level"
                >
                  Experience Level
                </label>
                <select
                  className="my-candidates-post-candidate-page__mobile-experience-level-select"
                  name="mobile-experience-level-select"
                  id="mobile-experience-level"
                >
                  <option value="0-1 years">0-1 years</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="2-3 years">2-3 years</option>
                  <option value="3-4 years">3-4 years</option>
                  <option value="4-5 years">4-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__mobile-salary-type-container">
                <label
                  className="my-candidates-post-candidate-page__mobile-salary-type-label"
                  htmlFor="mobile-salary-type"
                >
                  Salary Type
                </label>
                <select
                  className="my-candidates-post-candidate-page__mobile-salary-type-select"
                  name="mobile-salary-type"
                  id="mobile-salary-type"
                >
                  <option value="annual" selected>
                    Annual
                  </option>
                  <option value="monthly">Monthly</option>
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Biweekly</option>
                </select>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__mobile-environment-start-date-container">
              <div className="my-candidates-post-candidate-page__mobile-environment-container">
                <label
                  className="my-candidates-post-candidate-page__mobile-environment-label"
                  htmlFor="mobile-environment"
                >
                  Environment
                </label>
                <select
                  className="my-candidates-post-candidate-page__mobile-environment-select"
                  name="mobile-environment"
                  id="mobile-environment"
                >
                  <option value="on-site" selected>
                    On-site
                  </option>
                  <option value="traveling">Traveling</option>
                  <option value="remote">Remote</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__mobile-start-date-container">
                <label
                  className="my-candidates-post-candidate-page__mobile-start-date-label"
                  htmlFor="mobile-start-date"
                >
                  Start Date
                </label>
                <img
                  className="my-candidates-post-candidate-page__mobile-calendar-icon"
                  src={CalendarIcon}
                  alt="Calendar Icon"
                />
                <input
                  className="my-candidates-post-candidate-page__mobile-start-date-input"
                  type="text"
                  id="mobile-start-date"
                  placeholder="mm/dd/yy"
                />
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__mobile-desired-salary-range-container">
              <p className="my-candidates-post-candidate-page__mobile-desired-salary-range-text">
                Desired Salary Range
              </p>
              <div className="my-candidates-post-candidate-page__mobile-desired-salary-range-slider-container">
                <span className="my-candidates-post-candidate-page__mobile-desired-salary-range-min-text">
                  MIN
                </span>
                <input
                  className="my-candidates-post-candidate-page__mobile-desired-salary-range-slider"
                  type="range"
                />
                <span className="my-candidates-post-candidate-page__mobile-desired-salary-range-max-text">
                  MAX
                </span>
              </div>
              <div className="my-candidates-post-candidate-page__mobile-desired-salary-range-values-container">
                <div className="my-candidates-post-candidate-page__mobile-desired-salary-range-left-value-container">
                  <p className="my-candidates-post-candidate-page__mobile-desired-salary-range-left-value-number">
                    230,000
                  </p>
                </div>
                <img
                  className="my-candidates-post-candidate-page__mobile-minus-sign-salary-icon"
                  src={MinusSignSalaryIcon}
                  alt="Minus Sign Salary Icon"
                />
                <div className="my-candidates-post-candidate-page__mobile-desired-salary-range-right-value-container">
                  <p className="my-candidates-post-candidate-page__mobile-desired-salary-range-right-value-number">
                    <img
                      className="my-candidates-post-candidate-page__mobile-dollar-sign-salary-icon"
                      src={DollarSignSalaryIcon}
                      alt="Dollar Sign Salary Icon"
                    />{" "}
                    337,000
                  </p>
                </div>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__mobile-willing-to-travel-willing-to-relocate-container">
              <div className="my-candidates-post-candidate-page__mobile-willing-to-travel-container">
                <label
                  className="my-candidates-post-candidate-page__mobile-willing-to-travel-label"
                  htmlFor="mobile-willing-to-travel"
                >
                  Willing to Travel
                </label>
                <select
                  className="my-candidates-post-candidate-page__mobile-willing-to-travel-select"
                  name="mobile-willing-to-travel"
                  id="mobile-willing-to-travel"
                >
                  <option value="" disabled selected>
                    Select...
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__mobile-willing-to-relocate-container">
                <label
                  className="my-candidates-post-candidate-page__mobile-willing-to-relocate-label"
                  htmlFor="mobile-willing-to-relocate"
                >
                  Willing to Relocate
                </label>
                <select
                  className="my-candidates-post-candidate-page__mobile-willing-to-relocate-select"
                  name="mobile-willing-to-relocate"
                  id="mobile-willing-to-relocate"
                >
                  <option value="" disabled selected>
                    Select...
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__mobile-education-container">
              <label
                className="my-candidates-post-candidate-page__mobile-education-label"
                htmlFor="mobile-education"
              >
                Education
              </label>
              <input
                className="my-candidates-post-candidate-page__mobile-education-input"
                type="text"
                id="mobile-education"
                placeholder="Enter Education"
              />
            </div>
            <div className="my-candidates-post-candidate-page__mobile-attach-cv-resume-container">
              <div className="my-candidates-post-candidate-page__mobile-attach-cv-resume-top-container">
                <p className="my-candidates-post-candidate-page__mobile-attach-cv-resume-text">
                  Attach CV/Resume*
                </p>
                <p className="my-candidates-post-candidate-page__mobile-last-uploaded-text">
                  Last Uploaded 8/14/24
                </p>
              </div>
              <div className="my-candidates-post-candidate-page__mobile-choose-file-resume-link-1-container">
                <button className="my-candidates-post-candidate-page__mobile-choose-file-1-button">
                  Choose File
                </button>
                <p className="my-candidates-post-candidate-page__mobile-resume-link-1">
                  SmithResume82024.doc
                </p>
              </div>
              <p className="my-candidates-post-candidate-page__mobile-doc-or-pdf-accepted">
                .DOC or PDF accepted. Max Size: 2 MB
              </p>
              <p className="my-candidates-post-candidate-page__mobile-preview-current-resume-link">
                Preview Current Resume
              </p>
              <p className="my-candidates-post-candidate-page__mobile-manage-resumes-link">
                Manage Resumes
              </p>
            </div>
            <div className="my-candidates-post-candidate-page__mobile-attach-blind-resume-container">
              <div className="my-candidates-post-candidate-page__mobile-attach-blind-resume-top-container">
                <p className="my-candidates-post-candidate-page__mobile-attach-blind-resume-text">
                  Attach Blind Resume
                </p>
                <p className="my-candidates-post-candidate-page__mobile-no-file-available-text">
                  No file available
                </p>
              </div>
              <div className="my-candidates-post-candidate-page__mobile-choose-file-resume-link-2-container">
                <button className="my-candidates-post-candidate-page__choose-file-2-button">
                  Choose File
                </button>
                <p className="my-candidates-post-candidate-page__mobile-no-file-chosen-text">
                  No file chosen
                </p>
              </div>
              <p className="my-candidates-post-candidate-page__mobile-doc-or-pdf-accepted">
                .DOC or PDF accepted. Max Size: 2 MB
              </p>
              <p className="my-candidates-post-candidate-page__mobile-preview-current-resume-link">
                Preview Current Resume
              </p>
              <p className="my-candidates-post-candidate-page__mobile-manage-resumes-link">
                Manage Resumes
              </p>
            </div>
            <div className="my-candidates-post-candidate-page__mobile-linked-in-container">
              <label
                className="my-candidates-post-candidate-page__mobile-linkedin-label"
                htmlFor="mobile-linkedin"
              >
                LinkedIn*
              </label>
              <input
                className="my-candidates-post-candidate-page__mobile-linkedin-input"
                type="text"
                id="mobile-linkedin"
                placeholder="Enter Link"
              />
            </div>
            <div className="my-candidates-post-candidate-page__mobile-facebook-container">
              <label
                className="my-candidates-post-candidate-page__mobile-facebook-label"
                htmlFor="mobile-facebook"
              >
                Facebook*
              </label>
              <input
                className="my-candidates-post-candidate-page__mobile-facebook-input"
                type="text"
                id="mobile-facebook"
                placeholder="Enter Link"
              />
            </div>
            <div className="my-candidates-post-candidate-page__mobile-twitter-container">
              <label
                className="my-candidates-post-candidate-page__mobile-twitter-label"
                htmlFor="mobile-twitter"
              >
                Twitter (x)*
              </label>
              <input
                className="my-candidates-post-candidate-page__mobile-twitter-input"
                type="text"
                id="mobile-twitter"
                placeholder="Enter Link"
              />
            </div>
            <div className="my-candidates-post-candidate-page__mobile-portfolio-container">
              <label
                className="my-candidates-post-candidate-page__mobile-portfolio-label"
                htmlFor="mobile-portfolio"
              >
                Portfolio
              </label>
              <input
                className="my-candidates-post-candidate-page__mobile-portfolio-input"
                type="text"
                placeholder="Enter Link"
              />
            </div>
            <div className="my-candidates-post-candidate-page__mobile-candidate-description-container">
              <label
                className="my-candidates-post-candidate-page__mobile-candidate-description-label"
                htmlFor="mobile-candidate-description"
              >
                Candidate Description/Notes
              </label>
              <textarea
                className="my-candidates-post-candidate-page__mobile-candidate-description-text-area"
                name="mobile-candidate-description"
                id="mobile-candidate-description"
                placeholder="Enter Candidate Description/Notes"
              ></textarea>
            </div>
            <div className="my-candidates-post-candidate-page__mobile-skills-container">
              <label
                className="my-candidates-post-candidate-page__mobile-skills-label"
                htmlFor="mobile-skills"
              >
                Skills
              </label>
              <input
                className="my-candidates-post-candidate-page__mobile-skills-input"
                type="text"
                id="mobile-skills"
                placeholder="Enter Skills separated by commas"
              />
            </div>
            <div className="my-candidates-post-candidate-page__mobile-bottom-button-container">
              <button className="my-candidates-post-candidate-page__mobile-post-button">
                Post
              </button>
              <button className="my-candidates-post-candidate-page__mobile-preview-button">
                Preview
              </button>
              <button className="my-candidates-post-candidate-page__mobile-save-draft-button">
                Save Draft
              </button>
              <button className="my-candidates-post-candidate-page__mobile-clear-form-button">
                Clear Form
              </button>
            </div>
          </div>
          <div className="my-candidates-post-candidate-page__tablet-container">
            <div className="my-candidates-post-candidate-page__tablet-header-container">
              <p className="my-candidates-post-candidate-page__tablet-header-text">
                Post Candidate
              </p>
              <p className="my-candidates-post-candidate-page__tablet-owner-text">
                Owner: John Smith, HumanRe Agency
              </p>
            </div>
            <div className="my-candidates-post-candidate-page__tablet-top-central-container">
              <img
                className="my-candidates-post-candidate-page__tablet-value-assurance-icon"
                src={ValueAssuranceIcon}
                alt="Value Assurance Icon"
              />
              <div className="my-candidates-post-candidate-page__tablet-top-central-right-container">
                <p className="my-candidates-post-candidate-page__tablet-top-central-information-is-protected-text">
                  Your information is protected by our top-rated value assurance
                  system, ensuring its safety and security at all times.
                </p>
                <p className="my-candidates-post-candidate-page__tablet-client-name-will-not-be-shared-text">
                  *Client Name and info starred will not be shared without NDA
                  or Partnership Agreement being signed by both parties.
                </p>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__tablet-top-dashboard-container">
              <div className="my-candidates-post-candidate-page__tablet-top-dashboard-container-top-container">
                <button className="my-candidates-post-candidate-page__tablet-parse-resume-button">
                  Parse Resume
                </button>
                <button className="my-candidates-post-candidate-page__tablet-open-archived-candidate-button">
                  Open Archived Candidate
                </button>
                <button className="my-candidates-post-candidate-page__tablet-open-saved-draft-button">
                  Open Saved Draft
                </button>
              </div>
              <div className="my-candidates-post-candidate-page__tablet-top-dashboard-container-bottom-container">
                <button className="my-candidates-post-candidate-page__tablet-batch-upload-button">
                  Batch Upload
                </button>
                <button className="my-candidates-post-candidate-page__tablet-open-through-api-button">
                  Open Through API
                </button>
                <div className="my-candidates-post-candidate-page__tablet-hot-candidate-put-on-hold-container">
                  <div className="my-candidates-post-candidate-page__tablet-hot-candidate-container">
                    <img
                      className="my-candidates-post-candidate-page__tablet-hot-candidate-on-hold-button-off-icon"
                      src={OnHoldButtonOffIcon}
                      alt="On Hold Button Off Icon"
                    />
                    <img
                      className="my-candidates-post-candidate-page__tablet-hot-off-icon"
                      src={HotOffIcon}
                      alt="Hot Off Icon"
                    />
                    <span className="my-candidates-post-candidate-page__tablet-hot-candidate-text">
                      Hot Candidate
                    </span>
                  </div>
                  <div className="my-candidates-post-candidate-page__tablet-put-on-hold-container">
                    <img
                      className="my-candidates-post-candidate-page__tablet-put-on-hold-on-hold-button-off-icon"
                      src={OnHoldButtonOffIcon}
                      alt="On Hold Button Off Icon"
                    />
                    <img
                      className="my-candidates-post-candidate-page__tablet-on-hold-off-icon"
                      src={OnHoldOffIcon}
                      alt="On Hold Off Icon"
                    />
                    <span className="my-candidates-post-candidate-page__tablet-put-on-hold-text">
                      Put On Hold
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__tablet-candidate-first-name-middle-name-last-name-container">
              <div className="my-candidates-post-candidate-page__tablet-candidate-first-name-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-candidate-first-name-label"
                  htmlFor="candidate-first-name"
                >
                  Candidate First Name*
                </label>
                <input
                  className="my-candidates-post-candidate-page__tablet-candidate-first-name-input"
                  type="text"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="my-candidates-post-candidate-page__tablet-middle-name-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-middle-name-label"
                  htmlFor="tablet-middle-name"
                >
                  Middle Name*
                </label>
                <input
                  className="my-candidates-post-candidate-page__tablet-middle-name-input"
                  type="text"
                  id="tablet-middle-name"
                  placeholder="Enter Middle Name"
                />
              </div>
              <div className="my-candidates-post-candidate-page__tablet-last-name-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-last-name-label"
                  htmlFor="tablet-last-name"
                >
                  Last Name*
                </label>
                <input
                  className="my-candidates-post-candidate-page__tablet-last-name-input"
                  type="text"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <p className="my-candidates-post-candidate-page__tablet-check-for-duplicate">
              Check for duplicate?
            </p>
            <div className="my-candidates-post-candidate-page__tablet-country-state-city-zip-code-container">
              <div className="my-candidates-post-candidate-page__tablet-country-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-country-label"
                  htmlFor="tablet-country"
                >
                  Country
                </label>
                <select
                  className="my-candidates-post-candidate-page__tablet-country-select"
                  name="tablet-country"
                  id="tablet-country"
                >
                  <option value="USA" selected>
                    USA
                  </option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="France">France</option>
                  <option value="Spain">Spain</option>
                  <option value="Germany">Germany</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Australia">Australia</option>
                  <option value="Italy">Italy</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__tablet-state-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-state-label"
                  htmlFor="tablet-state"
                >
                  State
                </label>
                <select
                  className="my-candidates-post-candidate-page__tablet-state-select"
                  name="tablet-state"
                  id="tablet-state"
                >
                  <option value="Alabama" selected>
                    Alabama
                  </option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__tablet-city-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-city-label"
                  htmlFor="tablet-city"
                >
                  City
                </label>
                <input
                  className="my-candidates-post-candidate-page__tablet-city-input"
                  type="text"
                  id="tablet-city"
                  placeholder="Enter City"
                />
              </div>
              <div className="my-candidates-post-candidate-page__tablet-zip-code-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-zip-code-label"
                  htmlFor="tablet-zip-code"
                >
                  Zip Code
                </label>
                <input
                  className="my-candidates-post-candidate-page__tablet-zip-code-input"
                  type="text"
                  id="tablet-zip-code"
                  placeholder="5-digit Zip Code"
                />
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__tablet-primary-email-home-phone-container">
              <div className="my-candidates-post-candidate-page__tablet-primary-email-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-primary-email-label"
                  htmlFor="tablet-primary-email"
                >
                  Primary Email*
                </label>
                <input
                  className="my-candidates-post-candidate-page__tablet-primary-email-input"
                  type="text"
                  id="tablet-primary-email"
                  placeholder="Enter Email Address"
                />
              </div>
              <div className="my-candidates-post-candidate-page__tablet-home-phone-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-home-phone-label"
                  htmlFor="tablet-home-phone"
                >
                  Home Phone*
                </label>
                <input
                  className="my-candidates-post-candidate-page__tablet-home-phone-input"
                  type="text"
                  id="tablet-home-phone"
                  placeholder="Enter Home Phone Number"
                />
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__tablet-best-time-to-call-cell-phone-container">
              <div className="my-candidates-post-candidate-page__tablet-best-time-to-call-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-best-time-to-call-label"
                  htmlFor="tablet-best-time-to-call"
                >
                  Best Time to Call
                </label>
                <input
                  className="my-candidates-post-candidate-page__tablet-best-time-to-call-input"
                  type="text"
                  id="tablet-best-time-to-call"
                  placeholder="Enter Time(s)"
                />
              </div>
              <div className="my-candidates-post-candidate-page__tablet-cell-phone-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-cell-phone-label"
                  htmlFor="tablet-cell-phone"
                >
                  Cell Phone*
                </label>
                <input
                  className="my-candidates-post-candidate-page__tablet-cell-phone-input"
                  type="text"
                  placeholder="Enter Cell Phone Number"
                />
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__tablet-title-container">
              <label
                className="my-candidates-post-candidate-page__tablet-title-label"
                htmlFor="tablet-title"
              >
                Title
              </label>
              <input
                className="my-candidates-post-candidate-page__tablet-title-input"
                type="text"
                id="tablet-title"
                placeholder="Enter Job Title"
              />
            </div>
            <div className="my-candidates-post-candidate-page__tablet-industry-job-type-citizenship-type-of-visa-container">
              <div className="my-candidates-post-candidate-page__tablet-industry-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-industry-label"
                  htmlFor="tablet-industry"
                >
                  Industry
                </label>
                <select
                  className="my-candidates-post-candidate-page__tablet-industry-select"
                  name="tablet-industry"
                  id="tablet-industry"
                >
                  <option value="aerospace-defense" selected>
                    Aerospace and Defense
                  </option>
                  <option value="professional-services-consulting">
                    Professional Services/Consulting
                  </option>
                  <option value="agricultural">Agricultural</option>
                  <option value="computers-and-technology">
                    Computers and Technology
                  </option>
                  <option value="conglomerate">Conglomerate</option>
                  <option value="consumer-goods">Consumer Goods</option>
                  <option value="financial">Financial</option>
                  <option value="government">Government</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="insurance">Insurance</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="oil-and-gas">Oil and Gas</option>
                  <option value="pharmaceuticals">Pharmaceuticals</option>
                  <option value="power-and-utilities">
                    Power and Utilities
                  </option>
                  <option value="telecommunications">Telecommunications</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__tablet-job-type-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-job-type-label"
                  htmlFor="tablet-job-type"
                >
                  Job Type
                </label>
                <select
                  className="my-candidates-post-candidate-page__tablet-job-type-select"
                  name="tablet-job-type"
                  id="tablet-job-type"
                >
                  <option value="full-time" selected>
                    Full Time
                  </option>

                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__tablet-citizenship-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-citizenship-label"
                  htmlFor="tablet-citizenship"
                >
                  Citizenship
                </label>
                <select
                  className="my-candidates-post-candidate-page__tablet-citizenship-select"
                  name="tablet-citizenship"
                  id="tablet-citizenship"
                >
                  <option value="US Citizen" selected>
                    US Citizen
                  </option>
                  <option value="green-card">Green Card</option>
                  <option value="permanent-resident">Permanent Resident</option>
                  <option value="non-resident">Non-resident</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__tablet-type-of-visa-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-type-of-visa-label"
                  htmlFor="tablet-type-of-visa"
                >
                  Type of VISA
                </label>
                <select
                  className="my-candidates-post-candidate-page__tablet-type-of-visa-select"
                  name="tablet-type-of-visa"
                  id="tablet-type-of-visa"
                >
                  <option value="" disabled selected>
                    Select...
                  </option>
                  <option value="H1B">H1B</option>
                  <option value="EB5">EB5</option>
                  <option value="OPT">OPT</option>
                  <option value="F1">F1</option>
                </select>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__tablet-middle-input-container">
              <div className="my-candidates-post-candidate-page__tablet-middle-input-left-container">
                <div className="my-candidates-post-candidate-page__tablet-middle-input-left-top-container">
                  <div className="my-candidates-post-candidate-page__tablet-experience-level-container">
                    <label
                      className="my-candidates-post-candidate-page__tablet-experience-level-label"
                      htmlFor="tablet-experience-level"
                    >
                      Experience Level
                    </label>
                    <select
                      className="my-candidates-post-candidate-page__tablet-experience-level-select"
                      name="tablet-experience-level"
                      id="tablet-experience-level"
                    >
                      <option value="0-1 years">0-1 years</option>
                      <option value="1-2 years">1-2 years</option>
                      <option value="2-3 years">2-3 years</option>
                      <option value="3-4 years">3-4 years</option>
                      <option value="4-5 years">4-5 years</option>
                      <option value="5-10 years">5-10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>
                  <div className="my-candidates-post-candidate-page__tablet-salary-type-container">
                    <label
                      className="my-candidates-post-candidate-page__tablet-salary-type-label"
                      htmlFor="tablet-salary-type"
                    >
                      Salary Type
                    </label>
                    <select
                      className="my-candidates-post-candidate-page__tablet-salary-type-select"
                      name="tablet-salary-type"
                      id="tablet-salary-type"
                    >
                      <option value="annual" selected>
                        Annual
                      </option>
                      <option value="monthly">Monthly</option>
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Biweekly</option>
                    </select>
                  </div>
                </div>
                <div className="my-candidates-post-candidate-page__tablet-middle-input-left-bottom-container">
                  <div className="my-candidates-post-candidate-page__tablet-environment-container">
                    <label
                      className="my-candidates-post-candidate-page__tablet-environment-label"
                      htmlFor="tablet-environment"
                    >
                      Environment
                    </label>
                    <select
                      className="my-candidates-post-candidate-page__tablet-environment-select"
                      name="tablet-environment"
                      id="tablet-environment"
                    >
                      <option value="on-site" selected>
                        On-site
                      </option>
                      <option value="traveling">Traveling</option>
                      <option value="remote">Remote</option>
                    </select>
                  </div>
                  <div className="my-candidates-post-candidate-page__tablet-start-date-container">
                    <label
                      className="my-candidates-post-candidate-page__tablet-start-date-label"
                      htmlFor="tablet-start-date"
                    >
                      Start Date
                    </label>
                    <img
                      className="my-candidates-post-candidate-page__tablet-calendar-icon"
                      src={CalendarIcon}
                      alt="Calendar Icon"
                    />
                    <input
                      className="my-candidates-post-candidate-page__tablet-start-date-input"
                      type="text"
                      id="tablet-start-date"
                      placeholder="mm/dd/yy"
                    />
                  </div>
                </div>
              </div>
              <div className="my-candidates-post-candidate-page__tablet-middle-input-right-container">
                <div className="my-candidates-post-candidate-page__tablet-desired-salary-range-container">
                  <p className="my-candidates-post-candidate-page__tablet-desired-salary-range-header">
                    Desired Salary Range
                  </p>
                  <div className="my-candidates-post-candidate-page__tablet-desired-salary-range-slider-container">
                    <span className="my-candidates-post-candidate-page__tablet-desired-salary-range-min-text">
                      MIN
                    </span>
                    <input
                      className="my-candidates-post-candidate-page__tablet-desired-salary-range-input"
                      type="range"
                    />
                    <span className="my-candidates-post-candidate-page__tablet-desired-salary-range-max-text">
                      MAX
                    </span>
                  </div>
                  <div className="my-candidates-post-candidate-page__tablet-desired-salary-range-values-container">
                    <div className="my-candidates-post-candidate-page__tablet-desired-salary-range-left-value-container">
                      <p className="my-candidates-post-candidate-page__tablet-desired-salary-range-left-value-number">
                        230,000
                      </p>
                    </div>
                    <img
                      className="my-candidates-post-candidate-page__tablet-minus-sign-salary-icon"
                      src={MinusSignSalaryIcon}
                      alt="Minus Sign Salary Icon"
                    />
                    <div className="my-candidates-post-candidate-page__tablet-desired-salary-range-right-value-container">
                      <p className="my-candidates-post-candidate-page__tablet-desired-salary-range-right-value-number">
                        <img
                          className="my-candidates-post-candidate-page__tablet-dollar-sign-salary-icon"
                          src={DollarSignSalaryIcon}
                          alt="Dollar Sign Salary Icon"
                        />
                        337,000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__tablet-willing-to-travel-willing-to-relocate-container">
              <div className="my-candidates-post-candidate-page__tablet-willing-to-travel-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-willing-to-travel-label"
                  htmlFor="tablet-willing-to-travel"
                >
                  Willing to Travel
                </label>
                <select
                  className="my-candidates-post-candidate-page__tablet-willing-to-travel-select"
                  name="tablet-willing-to-travel"
                  id="tablet-willing-to-travel"
                >
                  <option value="" disabled selected>
                    Select...
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__tablet-willing-to-relocate-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-willing-to-relocate-label"
                  htmlFor="tablet-willing-to-relocate"
                >
                  Willing to Relocate
                </label>
                <select
                  className="my-candidates-post-candidate-page__tablet-willing-to-relocate-select"
                  name="tablet-willing-to-relocate"
                  id="tablet-willing-to-relocate"
                >
                  <option value="" disabled selected>
                    Select...
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__tablet-education-container">
              <label
                className="my-candidates-post-candidate-page__tablet-education-label"
                htmlFor="tablet-education"
              >
                Education
              </label>
              <input
                className="my-candidates-post-candidate-page__tablet-education-input"
                type="text"
                id="tablet-education"
                placeholder="Enter Education"
              />
            </div>
            <div className="my-candidates-post-candidate-page__tablet-attach-cv-resume-attach-blind-resume-container">
              <div className="my-candidates-post-candidate-page__tablet-attach-cv-resume-container">
                <div className="my-candidates-post-candidate-page__tablet-attach-cv-resume-last-uploaded-container">
                  <p className="my-candidates-post-candidate-page__tablet-attach-cv-resume-text">
                    Attach CV/Resume*
                  </p>
                  <p className="my-candidates-post-candidate-page__tablet-last-uploaded-text">
                    Last Uploaded: 8/14/24
                  </p>
                </div>
                <div className="my-candidates-post-candidate-page__tablet-choose-file-uploaded-resume-container">
                  <button className="my-candidates-post-candidate-page__tablet-choose-file-button">
                    Choose File
                  </button>
                  <p className="my-candidates-post-candidate-page__tablet-uploaded-resume-text">
                    SmithResume82024.doc
                  </p>
                </div>
                <p className="my-candidates-post-candidate-page__tablet-doc-or-pdf-accepted">
                  .DOC or PDF accepted. Max Size: 2 MB
                </p>
                <p className="my-candidates-post-candidate-page__tablet-preview-current-resume">
                  Preview Current Resume
                </p>
                <p className="my-candidates-post-candidate-page__tablet-manage-resumes">
                  Manage Resumes
                </p>
              </div>
              <div className="my-candidates-post-candidate-page__tablet-attach-blind-resume-container">
                <div className="my-candidates-post-candidate-page__tablet-attach-blind-resume-no-file-available-container">
                  <p className="my-candidates-post-candidate-page__tablet-attach-blind-resume-text">
                    Attach Blind Resume
                  </p>
                  <p className="my-candidates-post-candidate-page__tablet-no-file-available-text">
                    No file available
                  </p>
                </div>
                <div className="my-candidates-post-candidate-page__tablet-choose-file-no-file-chosen-container">
                  <button className="my-candidates-post-candidate-page__tablet-choose-file-button-2">
                    Choose File
                  </button>
                  <p className="my-candidates-post-candidate-page__tablet-no-file-chosen-text">
                    No file chosen
                  </p>
                </div>
                <p className="my-candidates-post-candidate-page__tablet-doc-or-pdf-accepted-2">
                  .DOC or PDF accepted. Max Size: 2 MB
                </p>
                <p className="my-candidates-post-candidate-page__tablet-preview-current-resume-text-2">
                  Preview Current Resume
                </p>
                <p className="my-candidates-post-candidate-page__tablet-manage-resumes-2">
                  Manage Resumes
                </p>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__tablet-linkedin-facebook-container">
              <div className="my-candidates-post-candidate-page__tablet-linkedin-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-linkedin-label"
                  htmlFor="tablet-linkedin"
                >
                  LinkedIn*
                </label>
                <input
                  className="my-candidates-post-candidate-page__tablet-linkedin-input"
                  type="text"
                  placeholder="Enter Link"
                />
              </div>
              <div className="my-candidates-post-candidate-page__tablet-facebook-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-facebook-label"
                  htmlFor="tablet-facebook"
                >
                  Facebook*
                </label>
                <input
                  className="my-candidates-post-candidate-page__tablet-facebook-input"
                  type="text"
                  id="tablet-facebook"
                  placeholder="Enter Link"
                />
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__tablet-twitter-portfolio-container">
              <div className="my-candidates-post-candidate-page__tablet-twitter-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-twitter-label"
                  htmlFor="tablet-twitter"
                >
                  Twitter (x)*
                </label>
                <input
                  className="my-candidates-post-candidate-page__tablet-twitter-input"
                  type="text"
                  id="tablet-twitter"
                  placeholder="Enter Link"
                />
              </div>
              <div className="my-candidates-post-candidate-page__tablet-portfolio-container">
                <label
                  className="my-candidates-post-candidate-page__tablet-portfolio-label"
                  htmlFor="tablet-portfolio"
                >
                  Portfolio*
                </label>
                <input
                  className="my-candidates-post-candidate-page__tablet-portfolio-input"
                  type="text"
                  id="tablet-portfolio"
                  placeholder="Enter Link"
                />
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__tablet-candidate-description-container">
              <label
                className="my-candidates-post-candidate-page__tablet-candidate-description-label"
                htmlFor="tablet-candidate-description"
              >
                Candidate Description/Notes
              </label>
              <textarea
                className="my-candidates-post-candidate-page__tablet-candidate-description-text-area"
                name="tablet-candidate-description"
                id="tablet-candidate-description"
                placeholder="Enter Candidate Description/Notes"
              ></textarea>
            </div>
            <div className="my-candidates-post-candidate-page__tablet-skills-container">
              <label
                className="my-candidates-post-candidate-page__tablet-skills-label"
                htmlFor="tablet-skills"
              >
                Skills
              </label>
              <input
                className="my-candidates-post-candidate-page__tablet-skills-input"
                type="text"
                id="tablet-skills"
                placeholder="Enter Skills separated by commas"
              />
            </div>
            <div className="my-candidates-post-candidate-page__tablet-post-preview-save-draft-button-container">
              <button className="my-candidates-post-candidate-page__tablet-post-button">
                Post
              </button>
              <button className="my-candidates-post-candidate-page__tablet-preview-button">
                Preview
              </button>
              <button className="my-candidates-post-candidate-page__tablet-save-draft-button">
                Save Draft
              </button>
            </div>
          </div>
          <div className="my-candidates-post-candidate-page__desktop-container">
            <div className="my-candidates-post-candidate-page__desktop-header-container">
              <p className="my-candidates-post-candidate-page__desktop-header-text">
                Post Candidate
              </p>
              <p className="my-candidates-post-candidate-page__desktop-header-owner-text">
                Owner: John Smith, HumanRe Agency
              </p>
            </div>
            <div className="my-candidates-post-candidate-page__desktop-top-central-container">
              <img
                className="my-candidates-post-candidate-page__desktop-value-assurance-icon"
                src={ValueAssuranceIcon}
                alt="Value Assurance Icon"
              />
              <div className="my-candidates-post-candidate-page__desktop-top-central-right-container">
                <p className="my-candidates-post-candidate-page__desktop-information-is-protected-text">
                  Your information is protected by our top-rated value assurance
                  system, ensuring its safety and security at all times.
                </p>
                <p className="my-candidates-post-candidate-page__desktop-candidate-will-not-be-shared-text">
                  *Candidate Name and Contact Information will not be shared
                  without NDA or Partnership Agreement being signed by both
                  parties.
                </p>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__desktop-top-button-container">
              <button className="my-candidates-post-candidate-page__desktop-parse-resume-button">
                Parse Resume
              </button>
              <button className="my-candidates-post-candidate-page__desktop-open-archived-candidate-button">
                Open Archived Candidate
              </button>
              <button className="my-candidates-post-candidate-page__desktop-open-saved-draft-button">
                Open Saved Draft
              </button>
              <button className="my-candidates-post-candidate-page__desktop-batch-upload-button">
                Batch Upload
              </button>
              <button className="my-candidates-post-candidate-page__desktop-open-through-api-button">
                Open Through API
              </button>
            </div>
            <div className="my-candidates-post-candidate-page__desktop-candidate-first-name-middle-name-last-name-container">
              <div className="my-candidates-post-candidate-page__desktop-candidate-first-name-container">
                <label
                  className="my-candidates-post-candidate-page__desktop-candidate-first-name-label"
                  htmlFor="desktop-candidate-first-name"
                >
                  Candidate First Name
                </label>
                <input
                  className="my-candidates-post-candidate-page__desktop-candidate-first-name-input"
                  type="text"
                  id="desktop-candidate-first-name"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="my-candidates-post-candidate-page__desktop-middle-name-container">
                <label
                  className="my-candidates-post-candidate-page__desktop-middle-name-label"
                  htmlFor="desktop-middle-name"
                >
                  Middle Name*
                </label>
                <input
                  className="my-candidates-post-candidate-page__desktop-middle-name-input"
                  type="text"
                  id="desktop-middle-name"
                  placeholder="Enter Middle Name"
                />
              </div>
              <div className="my-candidates-post-candidate-page__desktop-last-name-container">
                <label
                  className="my-candidates-post-candidate-page__desktop-last-name-label"
                  htmlFor="desktop-last-name"
                >
                  Last Name*
                </label>
                <input
                  className="my-candidates-post-candidate-page__desktop-last-name-input"
                  type="text"
                  id="desktop-last-name"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <p className="my-candidates-post-candidate-page__desktop-check-for-duplicate">
              Check for duplicate?
            </p>
            <div className="my-candidates-post-candidate-page__desktop-country-state-city-zip-code-container">
              <div className="my-candidates-post-candidate-page__desktop-country-container">
                <label
                  className="my-candidates-post-candidate-page__desktop-country-label"
                  htmlFor="desktop-country"
                >
                  Country
                </label>
                <select
                  className="my-candidates-post-candidate-page__desktop-country-select"
                  name="desktop-country"
                  id="desktop-country"
                >
                  <option value="USA" selected>
                    USA
                  </option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="France">France</option>
                  <option value="Spain">Spain</option>
                  <option value="Germany">Germany</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Australia">Australia</option>
                  <option value="Italy">Italy</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__desktop-state-container">
                <label
                  className="my-candidates-post-candidate-page__desktop-state-label"
                  htmlFor="desktop-state"
                >
                  State
                </label>
                <select
                  className="my-candidates-post-candidate-page__desktop-state-select"
                  name="desktop-state"
                  id="desktop-state"
                >
                  <option value="Alabama" selected>
                    Alabama
                  </option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__desktop-city-container">
                <label
                  className="my-candidates-post-candidate-page__desktop-city-label"
                  htmlFor="desktop-city"
                >
                  City
                </label>
                <input
                  className="my-candidates-post-candidate-page__desktop-city-input"
                  type="text"
                  id="desktop-city"
                  placeholder="Enter City"
                />
              </div>
              <div className="my-candidates-post-candidate-page__desktop-zip-code-container">
                <label
                  className="my-candidates-post-candidate-page__desktop-zip-code-label"
                  htmlFor="desktop-zip-code"
                >
                  Zip Code
                </label>
                <input
                  className="my-candidates-post-candidate-page__desktop-zip-code-input"
                  type="text"
                  id="desktop-zip-code"
                  placeholder="5-digit Zip Code"
                />
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__desktop-primary-email-home-phone-container">
              <div className="my-candidates-post-candidate-page__desktop-primary-email-container">
                <label
                  className="my-candidates-post-candidate-page__desktop-primary-email-label"
                  htmlFor="desktop-primary-email"
                >
                  Primary Email
                </label>
                <input
                  className="my-candidates-post-candidate-page__desktop-primary-email-input"
                  type="text"
                  id="desktop-primary-email"
                  placeholder="Enter email"
                />
              </div>
              <div className="my-candidates-post-candidate-page__desktop-home-phone-container">
                <label
                  className="my-candidates-post-candidate-page__desktop-home-phone-label"
                  htmlFor="desktop-home-phone"
                >
                  Home Phone
                </label>
                <input
                  className="my-candidates-post-candidate-page__desktop-home-phone-input"
                  type="text"
                  id="desktop-home-phone"
                  placeholder="Enter phone #"
                />
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__desktop-best-time-to-call-cell-phone-container">
              <div className="my-candidates-post-candidate-page__desktop-best-time-to-call-container">
                <label
                  className="my-candidates-post-candidate-page__desktop-best-time-to-call-label"
                  htmlFor="desktop-best-time-to-call"
                >
                  Best Time to Call
                </label>
                <input
                  className="my-candidates-post-candidate-page__desktop-best-time-to-call-input"
                  type="text"
                  id="desktop-best-time-to-call"
                  placeholder="Enter time(s)"
                />
              </div>
              <div className="my-candidates-post-candidate-page__desktop-cell-phone-container">
                <label
                  className="my-candidates-post-candidate-page__desktop-cell-phone-label"
                  htmlFor="desktop-cell-phone"
                >
                  Cell Phone
                </label>
                <input
                  className="my-candidates-post-candidate-page__desktop-cell-phone-input"
                  type="text"
                  id="desktop-cell-phone"
                  placeholder="Enter phone #"
                />
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__desktop-title-container">
              <label
                className="my-candidates-post-candidate-page__desktop-title-label"
                htmlFor="desktop-title"
              >
                Title
              </label>
              <input
                className="my-candidates-post-candidate-page__desktop-title-input"
                type="text"
                id="desktop-title"
                placeholder="Enter Job Title"
              />
            </div>
            <div className="my-candidates-post-candidate-page__desktop-industry-job-type-citizenship-type-of-visa-container">
              <div className="my-candidates-post-candidate-page__desktop-industry-container">
                <label
                  className="my-candidates-post-candidate-page__desktop-industry-label"
                  htmlFor="desktop-industry"
                >
                  Industry
                </label>
                <select
                  className="my-candidates-post-candidate-page__desktop-industry-select"
                  name="desktop-industry"
                  id="desktop-industry"
                >
                  <option value="aerospace-defense" selected>
                    Aerospace and Defense
                  </option>
                  <option value="professional-services-consulting">
                    Professional Services/Consulting
                  </option>
                  <option value="agricultural">Agricultural</option>
                  <option value="computers-and-technology">
                    Computers and Technology
                  </option>
                  <option value="conglomerate">Conglomerate</option>
                  <option value="consumer-goods">Consumer Goods</option>
                  <option value="financial">Financial</option>
                  <option value="government">Government</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="insurance">Insurance</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="oil-and-gas">Oil and Gas</option>
                  <option value="pharmaceuticals">Pharmaceuticals</option>
                  <option value="power-and-utilities">
                    Power and Utilities
                  </option>
                  <option value="telecommunications">Telecommunications</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__desktop-job-type-container">
                <label
                  className="my-candidates-post-candidate-page__desktop-job-type-label"
                  htmlFor="desktop-job-type"
                >
                  Job Type
                </label>
                <select
                  className="my-candidates-post-candidate-page__desktop-job-type-select"
                  name="desktop-job-type"
                  id="desktop-job-type"
                >
                  <option value="full-time" selected>
                    Full Time
                  </option>

                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__desktop-citizenship-container">
                <label
                  className="my-candidates-post-candidate-page__desktop-citizenship-label"
                  htmlFor="desktop-citizenship"
                >
                  Citizenship
                </label>
                <select
                  className="my-candidates-post-candidate-page__desktop-citizenship-select"
                  name="desktop-citizenship"
                  id="desktop-citizenship"
                >
                  <option value="US Citizen" selected>
                    US Citizen
                  </option>
                  <option value="green-card">Green Card</option>
                  <option value="permanent-resident">Permanent Resident</option>
                  <option value="non-resident">Non-resident</option>
                </select>
              </div>
              <div className="my-candidates-post-candidate-page__desktop-type-of-visa-container">
                <label
                  className="my-candidates-post-candidate-page__desktop-type-of-visa-label"
                  htmlFor="desktop-type-of-visa"
                >
                  Type of VISA
                </label>
                <select
                  className="my-candidates-post-candidate-page__desktop-type-of-visa-select"
                  name="desktop-type-of-visa"
                  id="desktop-type-of-visa"
                >
                  <option value="" disabled selected>
                    Select...
                  </option>
                  <option value="H1B">H1B</option>
                  <option value="EB5">EB5</option>
                  <option value="OPT">OPT</option>
                  <option value="F1">F1</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
