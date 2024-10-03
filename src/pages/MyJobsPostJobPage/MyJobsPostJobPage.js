import React, { useState, useEffect } from "react";
import "./MyJobsPostJobPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import JobsSidePanel from "../../components/JobsSidePanel/JobsSidePanel";
import ValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";
import OnHoldHotButtonOffIcon from "../../assets/icons/Onholdhotbuttonoff.svg";
import HotOffIcon from "../../assets/icons/HotOff.svg";
import OnHoldOffIcon from "../../assets/icons/OnHoldOff.svg";
import CalendarIcon from "../../assets/icons/CalendarIcon.svg";
import MinusSignSalaryIcon from "../../assets/icons/MinusSignSalary.svg";
import DollarSignSalaryIcon from "../../assets/icons/DollarSignSalary.svg";
import CircleButtonOnIcon from "../../assets/icons/CircleButtonOnBlue.svg";
import CircleButtonOffIcon from "../../assets/icons/CircleButtonOff.svg";
import ModalPostJob from "../../components/ModalPostJob/ModalPostJob";
import ModalSaveDraft from "../../components/ModalSaveDraft/ModalSaveDraft";
import ModalClearForm from "../../components/ModalClearForm/ModalClearForm";

export default function MyJobsPostJobPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalSaveDraftVisible, setIsModalSaveDraftVisible] = useState(false);
  const [isModalClearFormVisible, setIsModalClearFormVisible] = useState(false);

  const handlePostJob = () => {
    setIsModalVisible(true);
  };

  const handleSaveDraft = () => {
    setIsModalSaveDraftVisible(true);
  };

  const handleClearForm = () => {
    setIsModalClearFormVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const closeModalSaveDraft = () => {
    setIsModalSaveDraftVisible(false);
  };

  const closeModalClearForm = () => {
    setIsModalClearFormVisible(false);
  };

  return (
    <div className="my-jobs-post-job-page">
      <HeaderWithProfilePic />
      <div className="my-jobs-post-job-page__main-container">
        <JobsSidePanel />
        <div className="my-jobs-post-job-page__right-container">
          <div className="my-jobs-post-job-page__mobile-container">
            <p className="my-jobs-post-job-page__header">Post Job</p>
            <div className="my-jobs-post-job-page__owner-information-container">
              <p className="my-jobs-post-job-page__owner-title">Owner:</p>
              <p className="my-jobs-post-job-page__owner-name">John Smith</p>
              <p className="my-jobs-post-job-page__owner-agency">
                HumanRe Agency
              </p>
            </div>
            <div className="my-jobs-post-job-page__top-central-container">
              <img
                className="my-jobs-post-job-page__value-assurance-icon"
                src={ValueAssuranceIcon}
                alt="Value Assurance Icon"
              />
              <p className="my-jobs-post-job-page__information-is-protected">
                Your information is protected by our top-rated value assurance
                system, ensuring its safety and security at all times.
              </p>
            </div>
            <p className="my-jobs-post-job-page__client-name-will-not-be-shared">
              *Client Name will not be shared without NDA or Partnership
              Agreement being signed by both parties.
            </p>
            <div className="my-jobs-post-job-page__mobile-button-container">
              <div className="my-jobs-post-job-page__mobile-button-first-container">
                <button className="my-jobs-post-job-page__mobile-upload-job-description-button">
                  Upload Job Description
                </button>
                <button className="my-jobs-post-job-page__mobile-open-archived-job-button">
                  Open Archived Button
                </button>
              </div>
              <div className="my-jobs-post-job-page__mobile-button-second-container">
                <button className="my-jobs-post-job-page__mobile-open-saved-draft-button">
                  Open Saved Draft
                </button>
                <button className="my-jobs-post-job-page__mobile-batch-upload-button">
                  Batch Upload
                </button>
              </div>
              <div className="my-jobs-post-job-page__mobile-button-third-container">
                <button className="my-jobs-post-job-page__mobile-open-job-through-api-button">
                  Open Job Through API
                </button>
                <button className="my-jobs-post-job-page__mobile-return-to-my-jobs-button">
                  Return to My Jobs
                </button>
              </div>
            </div>
            <div className="my-jobs-post-job-page__mobile-hot-job-opening-put-on-hold-container">
              <div className="my-jobs-post-job-page__mobile-hot-job-opening-container">
                <img
                  className="my-jobs-post-job-page__mobile-on-hold-hot-button-off-icon"
                  src={OnHoldHotButtonOffIcon}
                  alt="On Hold Hot Button Off Icon"
                />
                <img
                  className="my-jobs-post-job-page__mobile-hot-off-icon"
                  src={HotOffIcon}
                  alt="Hot Off Icon"
                />
                <span className="my-jobs-post-job-page__mobile-hot-job-opening-text">
                  Hot Job Opening
                </span>
              </div>
              <div className="my-jobs-post-job-page__mobile-put-on-hold-container">
                <img
                  className="my-jobs-post-job-page__mobile-on-hold-hot-button-off-icon"
                  src={OnHoldHotButtonOffIcon}
                  alt="On Hold Hot Button Off Icon"
                />
                <img
                  className="my-jobs-post-job-page__mobile-on-hold-off-icon"
                  src={OnHoldOffIcon}
                  alt="On Hold Off Icon"
                />
                <span className="my-jobs-post-job-page__mobile-put-on-hold-text">
                  Put On Hold
                </span>
              </div>
            </div>
            <div className="my-jobs-post-job-page__mobile-client-name-container">
              <label
                className="my-jobs-post-job-page__mobile-client-name-label"
                htmlFor="mobile-client-name"
              >
                Client Name*
              </label>
              <input
                className="my-jobs-post-job-page__mobile-client-name-input"
                id="mobile-client-name"
                type="text"
                placeholder="Enter Client Name"
              />
            </div>
            <div className="my-jobs-post-job-page__mobile-agency-job-id-number-container">
              <label
                className="my-jobs-post-job-page__mobile-agency-job-id-number-label"
                htmlFor="mobile-agency-job-id"
              >
                Agency Job ID #
              </label>
              <input
                className="my-jobs-post-job-page__mobile-agency-job-id-number-input"
                type="text"
                id="mobile-agency-job-id"
              />
            </div>
            <div className="my-jobs-post-job-page__mobile-country-state-container">
              <div className="my-jobs-post-job-page__mobile-country-container">
                <label
                  className="my-jobs-post-job-page__mobile-country-label"
                  htmlFor="mobile-country"
                >
                  Country
                </label>
                <select
                  className="my-jobs-post-job-page__mobile-country-select"
                  name="mobile-country"
                  id="mobile-country"
                >
                  <option value="USA" disabled selected>
                    USA
                  </option>
                  <option value="EU">EU</option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                  <option value="United Kingdom">United Kingdom</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__mobile-state-container">
                <label
                  className="my-jobs-post-job-page__mobile-state-label"
                  htmlFor="mobile-state"
                >
                  State
                </label>
                <select
                  className="my-jobs-post-job-page__mobile-state-select"
                  name="mobile-state"
                  id="mobile-state"
                >
                  <option value="Alabama" disabled selected>
                    AL
                  </option>
                  <option value="Alaska">AK</option>
                  <option value="Arizona">AZ</option>
                  <option value="Arkansas">AR</option>
                  <option value="California">CA</option>
                  <option value="Colorado">CO</option>
                  <option value="Connecticut">CT</option>
                  <option value="Delaware">DE</option>
                  <option value="Florida">FL</option>
                  <option value="Georgia">GA</option>
                  <option value="Hawaii">HI</option>
                  <option value="Idaho">ID</option>
                  <option value="Illinois">IL</option>
                  <option value="Indiana">IN</option>
                  <option value="Iowa">IA</option>
                  <option value="Kansas">KS</option>
                  <option value="Kentucky">KY</option>
                  <option value="Louisiana">LA</option>
                  <option value="Maine">ME</option>
                  <option value="Maryland">MD</option>
                  <option value="Massachusetts">MA</option>
                  <option value="Michigan">MI</option>
                  <option value="Minnesota">MN</option>
                  <option value="Missouri">MO</option>
                  <option value="Montana">MT</option>
                  <option value="Nebraska">NE</option>
                  <option value="Nevada">NV</option>
                  <option value="New Hampshire">NH</option>
                  <option value="New Jersey">NJ</option>
                  <option value="New Mexico">NM</option>
                  <option value="New York">NY</option>
                  <option value="North Carolina">NC</option>
                  <option value="North Dakota">ND</option>
                  <option value="Ohio">OH</option>
                  <option value="Oklahoma">OK</option>
                  <option value="Oregon">OR</option>
                  <option value="Pennsylvania">PA</option>
                  <option value="Rhode Island">RI</option>
                  <option value="South Carolina">SC</option>
                  <option value="South Dakota">SD</option>
                  <option value="Tennessee">TN</option>
                  <option value="Texas">TX</option>
                  <option value="Utah">UT</option>
                  <option value="Vermont">VT</option>
                  <option value="Virginia">VA</option>
                  <option value="Washington">WA</option>
                  <option value="West Virginia">WV</option>
                  <option value="Wisconsin">WI</option>
                  <option value="Wyoming">WY</option>
                </select>
              </div>
            </div>
            <div className="my-jobs-post-job-page__mobile-city-zip-code-container">
              <div className="my-jobs-post-job-page__mobile-city-container">
                <label
                  className="my-jobs-post-job-page__mobile-city-label"
                  htmlFor="mobile-city"
                >
                  City
                </label>
                <input
                  className="my-jobs-post-job-page__mobile-city-input"
                  type="text"
                  id="mobile-city"
                  placeholder="Enter City"
                />
              </div>
              <div className="my-jobs-post-job-page__mobile-zip-code-container">
                <label
                  className="my-jobs-post-job-page__mobile-zip-code-label"
                  htmlFor="mobile-zip-code"
                >
                  Zip Code
                </label>
                <input
                  className="my-jobs-post-job-page__mobile-zip-code-input"
                  type="text"
                  id="mobile-zip-code"
                  placeholder="5-digit Zip Code"
                />
              </div>
            </div>
            <div className="my-jobs-post-job-page__mobile-job-title-container">
              <label
                className="my-jobs-post-job-page__mobile-job-title-label"
                htmlFor="mobile-job-title"
              >
                Job Title
              </label>
              <input
                className="my-jobs-post-job-page__mobile-job-title-input"
                type="text"
                id="mobile-job-title"
                placeholder="Enter Job Title"
              />
            </div>
            <div className="my-jobs-post-job-page__mobile-industry-job-type-container">
              <div className="my-jobs-post-job-page__mobile-industry-container">
                <label
                  className="my-jobs-post-job-page__mobile-industry-label"
                  htmlFor="mobile-industry"
                >
                  Industry
                </label>
                <select
                  className="my-jobs-post-job-page__mobile-industry-select"
                  name="mobile-industry"
                  id="mobile-industry"
                >
                  <option value="aerospace-defense" disabled selected>
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
              <div className="my-jobs-post-job-page__mobile-job-type-container">
                <label
                  className="my-jobs-post-job-page__mobile-job-type-label"
                  htmlFor="mobile-job-type"
                >
                  Job Type
                </label>
                <select
                  className="my-jobs-post-job-page__mobile-job-type-select"
                  name="mobile-job-type"
                  id="mobile-job-type"
                >
                  <option value="" disabled selected>
                    Full Time
                  </option>

                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
            </div>
            <div className="my-jobs-post-job-page__mobile-openings-citizenship-type-of-visa-container">
              <div className="my-jobs-post-job-page__mobile-openings-container">
                <label
                  className="my-jobs-post-job-page__mobile-openings-label"
                  htmlFor="mobile-openings"
                >
                  Openings
                </label>
                <select
                  className="my-jobs-post-job-page__mobile-openings-select"
                  name="mobile-openings"
                  id="mobile-openings"
                >
                  <option value="0" disabled selected>
                    0
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__mobile-citizenship-container">
                <label
                  className="my-jobs-post-job-page__mobile-citizenship-label"
                  htmlFor="mobile-citizenship"
                >
                  Citizenship
                </label>
                <select
                  className="my-jobs-post-job-page__mobile-citizenship-select"
                  name="mobile-citizenship"
                  id="mobile-citizenship"
                >
                  <option value="US Citizen" disabled selected>
                    US Citizen
                  </option>
                  <option value="VISA">VISA</option>
                  <option value="Permanent Resident">Permanent Resident</option>
                  <option value="OPT">OPT</option>
                  <option value="H1B">H1B</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__mobile-type-of-visa-container">
                <label
                  className="my-jobs-post-job-page__mobile-type-of-visa-label"
                  htmlFor="mobile-type-of-visa"
                >
                  Type of VISA
                </label>
                <select
                  className="my-jobs-post-job-page__mobile-type-of-visa-select"
                  name="mobile-type-of-visa"
                  id="mobile-type-of-visa"
                >
                  <option value="Select" disabled selected>
                    Select ...
                  </option>
                  <option value="permanent resident">Permanent Resident</option>
                  <option value="F1">F1</option>
                  <option value="H1B">H1B</option>
                  <option value="J1">J1</option>
                  <option value="OPT">OPT</option>
                </select>
              </div>
            </div>
            <div className="my-jobs-post-job-page__mobile-experience-level-salary-type-container">
              <div className="my-jobs-post-job-page__mobile-experience-level-container">
                <label
                  className="my-jobs-post-job-page__mobile-experience-level-label"
                  htmlFor="mobile-experience-level"
                >
                  Experience Level
                </label>
                <select
                  className="my-jobs-post-job-page__mobile-experience-level-select"
                  name="mobile-experience-level"
                  id="mobile-experience-level"
                >
                  <option value="0 - 1 years" disabled selected>
                    0 - 1 years
                  </option>
                  <option value="1 - 2 years">1 - 2 years</option>
                  <option value="2 - 3 years">2 - 3 years</option>
                  <option value="3 - 4 years">3 - 4 years</option>
                  <option value="4 - 5 years">4 - 5 years</option>
                  <option value="5 - 6 years">5 - 6 years</option>
                  <option value="6 - 7 years">6 - 7 years</option>
                  <option value="7 - 8 years">7 - 8 years</option>
                  <option value="8 - 9 years">8 - 9 years</option>
                  <option value="9 - 10 years">9 - 10 years</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__mobile-salary-type-container">
                <label
                  className="my-jobs-post-job-page__mobile-salary-type-label"
                  htmlFor="mobile-salary-type"
                >
                  Salary Type
                </label>
                <select
                  className="my-jobs-post-job-page__mobile-salary-type-select"
                  name="mobile-salary-type"
                  id="mobile-salary-type"
                >
                  <option value="annual" disabled selected>
                    Annual
                  </option>
                  <option value="weekly" disabled selected>
                    Weekly
                  </option>
                  <option value="biweekly">Biweekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>
            <div className="my-jobs-post-job-page__mobile-environment-start-date-container">
              <div className="my-jobs-post-job-page__mobile-environment-container">
                <label
                  className="my-jobs-post-job-page__mobile-environment-label"
                  htmlFor="mobile-environment"
                >
                  Environment
                </label>
                <select
                  className="my-jobs-post-job-page__mobile-environment-select"
                  name="mobile-environment"
                  id="mobile-environment"
                >
                  <option value="on-site" disabled selected>
                    On-site
                  </option>
                  <option value="remote">Remote</option>
                  <option value="traveling">Traveling</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__mobile-start-date-container">
                <label
                  className="my-jobs-post-job-page__mobile-start-date-label"
                  htmlFor="mobile-start-date"
                >
                  Start Date
                </label>
                <img
                  className="my-jobs-post-job-page__mobile-calendar-icon"
                  src={CalendarIcon}
                  alt="Calendar Icon"
                />
                <input
                  className="my-jobs-post-job-page__mobile-start-date-input"
                  type="text"
                  id="mobile-start-date"
                  placeholder="mm/dd/yy"
                />
              </div>
            </div>
            <div className="my-jobs-post-job-page__mobile-salary-range-container">
              <p className="my-jobs-post-job-page__mobile-salary-range-header">
                Salary Range
              </p>
              <div className="my-jobs-post-job-page__mobile-slider-container">
                <span className="my-jobs-post-job-page__mobile-slider-min-text">
                  MIN
                </span>
                <input
                  className="my-jobs-post-job-page__mobile-slider"
                  type="range"
                />
                <span className="my-jobs-post-job-page__mobile-slider-max-text">
                  MAX
                </span>
              </div>
              <img
                className="my-jobs-post-job-page__mobile-dollar-sign-salary-icon"
                src={DollarSignSalaryIcon}
                alt="Dollar Sign Salary Icon"
              />
              <div className="my-jobs-post-job-page__mobile-slider-values-container">
                <div className="my-jobs-post-job-page__mobile-first-value-container">
                  <p className="my-jobs-post-job-page__mobile-first-value">
                    230,000
                  </p>
                </div>
                <img
                  className="my-jobs-post-job-page__mobile-minus-sign-salary-icon"
                  src={MinusSignSalaryIcon}
                  alt="Minus Sign Salary Icon"
                />
                <div className="my-jobs-post-job-page__mobile-second-value-container">
                  <p className="my-jobs-post-job-page__mobile-second-value">
                    337,000
                  </p>
                </div>
              </div>
            </div>
            <div className="my-jobs-post-job-page__mobile-travel-paid-relocation-container">
              <div className="my-jobs-post-job-page__mobile-travel-container">
                <label
                  className="my-jobs-post-job-page__mobile-travel-label"
                  htmlFor="mobile-travel"
                >
                  Travel
                </label>
                <select
                  className="my-jobs-post-job-page__mobile-travel-select"
                  name="mobile-travel"
                  id="mobile-travel"
                >
                  <option value="none required" disabled selected>
                    None Required
                  </option>
                  <option value="weekly">weekly</option>
                  <option value="biweekly">Biweekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__mobile-paid-relocation-container">
                <label
                  className="my-jobs-post-job-page__mobile-paid-relocation-label"
                  htmlFor="mobile-paid-relocation"
                >
                  Paid Relocation
                </label>
                <select
                  className="my-jobs-post-job-page__mobile-paid-relocation-select"
                  name="paid-relocation"
                  id="paid-relocation"
                >
                  <option value="unknown">Unknown</option>
                  <option value="known">Known</option>
                </select>
              </div>
            </div>
            <div className="my-jobs-post-job-page__mobile-bonus-container">
              <label
                className="my-jobs-post-job-page__mobile-bonus-label"
                htmlFor="mobile-bonus"
              >
                Bonus
              </label>
              <select
                className="my-jobs-post-job-page__mobile-bonus-select"
                name="mobile-bonus"
                id="mobile-bonus"
              >
                <option value="unknown">Unknown</option>
                <option value="known">Known</option>
              </select>
            </div>
            <div className="my-jobs-post-job-page__mobile-required-education-container">
              <label
                className="my-jobs-post-job-page__mobile-required-education-label"
                htmlFor="required-education"
              >
                Required Education
              </label>
              <input
                className="my-jobs-post-job-page__mobile-required-education-input"
                type="text"
                placeholder="Enter Required Education"
              />
            </div>
            <div className="my-jobs-post-job-page__mobile-job-description-container">
              <label
                className="my-jobs-post-job-page__mobile-job-description-label"
                htmlFor="mobile-job-description"
              >
                Job Description
              </label>
              <textarea
                className="my-jobs-post-job-page__mobile-job-description-text-area"
                name="mobile-job-description"
                id="mobile-job-description"
                placeholder="Enter Job Description"
              ></textarea>
            </div>
            <p className="my-jobs-post-job-page__candidate-requirements-text">
              Candidate Requirements
            </p>
            <div className="my-jobs-post-job-page__mobile-requirement-container">
              <p className="my-jobs-post-job-page__requirement-one-text">
                Requirement 1
              </p>
              <input
                className="my-jobs-post-job-page__mobile-requirement-one-input"
                type="text"
                placeholder="Enter Requirement"
              />
            </div>
            <p className="my-jobs-post-job-page__mobile-add-requirement">
              <span className="my-jobs-post-job-page__mobile-plus-sign">+</span>{" "}
              <span className="my-jobs-post-job-page__mobile-add-requirement-text">
                Add Requirement
              </span>
            </p>
            <div className="my-jobs-post-job-page__mobile-comments-container">
              <p className="my-jobs-post-job-page__mobile-comments-text">
                Comments
              </p>
              <input
                className="my-jobs-post-job-page__mobile-comments-input"
                type="text"
                placeholder="Enter Comment"
              />
            </div>
            <div className="my-jobs-post-job-page__mobile-required-skills-container">
              <label
                className="my-jobs-post-job-page__mobile-required-skills-label"
                htmlFor="mobile-required-skills"
              >
                Required Skills
              </label>
              <input
                className="my-jobs-post-job-page__mobile-required-skills-input"
                type="text"
                placeholder="Enter Required Skills separated by commas"
              />
            </div>
            <div className="my-jobs-post-job-page__mobile-fee-type-container">
              <p className="my-jobs-post-job-page__mobile-fee-type-header">
                Fee Type
              </p>
              <div className="my-jobs-post-job-page__mobile-inner-fee-type-container">
                <p className="my-jobs-post-job-page__mobile-percentage-of-salary">
                  <img
                    className="my-jobs-post-job-page__mobile-circle-button-on-icon"
                    src={CircleButtonOnIcon}
                    alt="Circle Button On Icon"
                  />
                  <span className="my-jobs-post-job-page__mobile-percentage-of-salary-text">
                    Percentage of Salary
                  </span>
                </p>
                <p className="my-jobs-post-job-page__mobile-percentage-of-total-compensation">
                  <img
                    className="my-jobs-post-job-page__mobile-circle-button-off-icon"
                    src={CircleButtonOffIcon}
                    alt="Circle Button Off Icon"
                  />
                  <span className="my-jobs-post-job-page__mobile-percentage-of-total-compensation-text">
                    Percentage of Total Compensation
                  </span>
                </p>
                <p className="my-jobs-post-job-page__mobile-flat-fee">
                  <img
                    className="my-jobs-post-job-page__mobile-circle-button-off-icon"
                    src={CircleButtonOffIcon}
                    alt="Circle Button Off Icon"
                  />{" "}
                  <span className="my-jobs-post-job-page__mobile-flat-fee-text">
                    Flat Fee
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="my-jobs-post-job-page__mobile-split-fee-percentage-of-salary-container">
              <p className="my-jobs-post-job-page__mobile-split-fee-percentage-of-salary-header">
                Split Fee Percentage of Salary
              </p>
              <input
                className="my-jobs-post-job-page__mobile-split-fee-percentage-of-salary-input"
                type="range"
              />
              <div className="my-jobs-post-job-page__mobile-percentage-container">
                <div className="my-jobs-post-job-page__mobile-my-percentage-container">
                  <p className="my-jobs-post-job-page__mobile-my-percentage-number">
                    50%
                  </p>
                  <p className="my-jobs-post-job-page__mobile-my-percentage-text">
                    My Percentage
                  </p>
                </div>
                <div className="my-jobs-post-job-page__mobile-shared-percentage-container">
                  <p className="my-jobs-post-job-page__mobile-shared-percentage-number">
                    50%
                  </p>
                  <p className="my-jobs-post-job-page__mobile-shared-percentage-text">
                    Shared Percentage
                  </p>
                </div>
              </div>
            </div>
            <div className="my-jobs-post-job-page__mobile-willing-to-negotiate-fee-container">
              <p className="my-jobs-post-job-page__mobile-willing-to-negotiate-fee-text">
                Willing to Negotiate Fee?
              </p>
              <img
                className="my-jobs-post-job-page__willing-to-negotiate-mobile-circle-button-on-icon"
                src={CircleButtonOnIcon}
                alt="Circle Button On Icon"
              />
              <span className="my-jobs-post-job-page__mobile-yes-text">
                Yes
              </span>
              <img
                className="my-jobs-post-job-page__willing-to-negotiate-mobile-circle-button-off-icon"
                src={CircleButtonOffIcon}
                alt="Circle Button Off Icon"
              />
              <span className="my-jobs-post-job-page__mobile-no-text">No</span>
            </div>
            <div className="my-jobs-post-job-page__mobile-placement-fee-guarantee-period-container">
              <div className="my-jobs-post-job-page__mobile-placement-fee-container">
                <label
                  className="my-jobs-post-job-page__mobile-placement-fee-label"
                  htmlFor="mobile-placement-fee"
                >
                  Placement Fee
                </label>
                <input
                  className="my-jobs-post-job-page__mobile-placement-fee-input"
                  type="text"
                  placeholder="20%"
                />
              </div>
              <div className="my-jobs-post-job-page__mobile-guarantee-period-container">
                <label
                  className="my-jobs-post-job-page__mobile-guarantee-period-label"
                  htmlFor="mobile-guarantee-period"
                >
                  Guarantee Period
                </label>
                <select
                  className="my-jobs-post-job-page__mobile-guarantee-period-select"
                  name="mobile-guarantee-period"
                  id="mobile-guarantee-period"
                >
                  <option value="30 days" disabled selected>
                    30 Days
                  </option>
                  <option value="1 week">1 week</option>
                  <option value="2 weeks">2 weeks</option>
                  <option value="3 weeks">3 weeks</option>
                  <option value="1 month">1 month</option>
                </select>
              </div>
            </div>
            <p className="my-jobs-post-job-page__mobile-fee-agreement-text">
              Fee Agreement
            </p>
            <div className="my-jobs-post-job-page__mobile-agreement-container">
              <p className="my-jobs-post-job-page__mobile-mlsa-auto-generated-container">
                MLSA Auto-Generated Agreement
              </p>
              <button className="my-jobs-post-job-page__mobile-view-agreement-button">
                View Agreement
              </button>
            </div>
            <div className="my-jobs-post-job-page__mobile-about-this-agreement-text">
              About this agreement
            </div>
            <div className="my-jobs-post-job-page__mobile-bottom-button-container">
              <button
                className="my-jobs-post-job-page__mobile-post-button"
                onClick={handlePostJob}
              >
                Post
              </button>
              <button className="my-jobs-post-job-page__mobile-preview-button">
                Preview
              </button>
              <button
                className="my-jobs-post-job-page__mobile-save-draft-button"
                onClick={handleSaveDraft}
              >
                Save Draft
              </button>
              <button
                className="my-jobs-post-job-page__mobile-clear-form-button"
                onClick={handleClearForm}
              >
                Clear Form
              </button>
            </div>
          </div>
          <div className="my-jobs-post-job-page__tablet-container">
            <div className="my-jobs-post-job-page__tablet-post-job-container">
              <p className="my-jobs-post-job-page__tablet-post-job-header">
                Post Job
              </p>
              <p className="my-jobs-post-job-page__tablet-post-job-owner-text">
                Owner: John Smith, HumanRe Agency
              </p>
            </div>
            <div className="my-jobs-post-job-page__tablet-value-assurance-information-protected">
              <img
                className="my-jobs-post-job-page__tablet-value-assurance-icon"
                src={ValueAssuranceIcon}
                alt="Value Assurance Icon"
              />
              <div className="my-jobs-post-job-page__tablet-information-is-protected-client-name-container">
                <p className="my-jobs-post-job-page__tablet-information-is-protected-text">
                  Your information is protected by our top-rated value assurance
                  system, ensuring its safety and security at all times.
                </p>
                <p className="my-jobs-post-job-page__tablet-client-name-will-not-be-shared">
                  *Client Name will not be shared without NDA or Partnership
                  Agreement being signed by both parties.
                </p>
              </div>
            </div>
            <div className="my-jobs-post-job-page__tablet-button-container">
              <div className="my-jobs-post-job-page__tablet-button-top-container">
                <button className="my-jobs-post-job-page__tablet-upload-job-description-button">
                  Upload Job Description
                </button>
                <button className="my-jobs-post-job-page__tablet-open-archived-job-button">
                  Open Archived Job
                </button>
                <button className="my-jobs-post-job-page__tablet-open-saved-draft-button">
                  Open Saved Draft
                </button>
              </div>
              <div className="my-jobs-post-job-page__tablet-button-bottom-container">
                <button className="my-jobs-post-job-page__tablet-batch-upload-button">
                  Batch Upload
                </button>
                <button className="my-jobs-post-job-page__tablet-open-job-through-api-button">
                  Open Job Through API
                </button>
                <div className="my-jobs-post-job-page__tablet-hot-job-opening-container">
                  <img
                    className="my-jobs-post-job-page__tablet-on-hold-button-off-icon"
                    src={OnHoldHotButtonOffIcon}
                    alt="On Hold Button Off Icon"
                  />
                  <img
                    className="my-jobs-post-job-page__tablet-hot-off-icon"
                    src={HotOffIcon}
                    alt="Hot Off Icon"
                  />
                  <span className="my-jobs-post-job-page__tablet-hot-job-opening-text">
                    Hot Job Opening
                  </span>
                </div>
                <div className="my-jobs-post-job-page__tablet-put-on-hold-container">
                  <img
                    className="my-jobs-post-job-page__tablet-on-hold-button-off-icon"
                    src={OnHoldHotButtonOffIcon}
                    alt="On Hold Button Off Icon"
                  />
                  <img
                    className="my-jobs-post-job-page__tablet-on-hold-off-icon"
                    src={OnHoldOffIcon}
                    alt="On Hold Off"
                  />
                  <span className="my-jobs-post-job-page__tablet-put-on-hold-text">
                    Put On Hold
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && <ModalPostJob closeModal={closeModal} />}
      {isModalSaveDraftVisible && (
        <ModalSaveDraft closeModal={closeModalSaveDraft} />
      )}
      {isModalClearFormVisible && (
        <ModalClearForm closeModal={closeModalClearForm} />
      )}
    </div>
  );
}
