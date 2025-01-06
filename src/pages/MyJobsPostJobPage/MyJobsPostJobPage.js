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
import axios from "axios";

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

  const initialFormData = {
    clientName: "",
    agencyJobId: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    jobTitle: "",
    industry: "",
    jobType: "",
    openings: "",
    citizenship: "",
    typeOfVisa: "",
    experienceLevel: "",
    salaryType: "",
    environment: "",
    startDate: "",
    travel: "",
    paidRelocation: "",
    bonus: "",
    requiredEducation: "",
    jobDescription: "",
    requirement1: "",
    comments: "",
    requiredSkills: "",
    placementFee: "",
    guaranteePeriod: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Name: ${name}, Value: ${value}`);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/post-job", formData);
      alert("Job posted successfully!");
      setFormData(initialFormData); // Reset form fields after successful submission
    } catch (error) {
      alert("An error occurred while posting the job.");
    }
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
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
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
                name="agencyJobId"
                value={formData.agencyJobId}
                onChange={handleChange}
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
                  id="mobile-country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="USA">USA</option>
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
                  id="mobile-state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="Alabama">AL</option>
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
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
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
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
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
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
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
                  id="mobile-industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                >
                  <option value="aerospace-defense">
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
                  id="mobile-job-type"
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                >
                  <option value="full-time">Full Time</option>
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
                  id="mobile-openings"
                  name="openings"
                  value={formData.openings}
                  onChange={handleChange}
                >
                  <option value="0">0</option>
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
                  id="mobile-citizenship"
                  name="citizenship"
                  value={formData.citizenship}
                  onChange={handleChange}
                >
                  <option value="US Citizen">US Citizen</option>
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
                  id="mobile-type-of-visa"
                  name="typeOfVisa"
                  value={formData.typeOfVisa}
                  onChange={handleChange}
                >
                  <option value="US Citizen">US Citizen</option>
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
                  id="mobile-experience-level"
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                >
                  <option value="0 - 1 years">0 - 1 years</option>
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
                  id="mobile-salary-type"
                  name="salaryType"
                  value={formData.salaryType}
                  onChange={handleChange}
                >
                  <option value="annual">Annual</option>
                  <option value="weekly">Weekly</option>
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
                  id="mobile-environment"
                  name="environment"
                  value={formData.environment}
                  onChange={handleChange}
                >
                  <option value="on-site">On-site</option>
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
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
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
                  id="mobile-travel"
                  name="travel"
                  value={formData.travel}
                  onChange={handleChange}
                >
                  <option value="none required">None Required</option>
                  <option value="weekly">Weekly</option>
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
                  id="paid-relocation"
                  name="paidRelocation"
                  value={formData.paidRelocation}
                  onChange={handleChange}
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
                id="mobile-bonus"
                name="bonus"
                value={formData.bonus}
                onChange={handleChange}
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
                name="requiredEducation"
                value={formData.requiredEducation}
                onChange={handleChange}
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
                id="mobile-job-description"
                placeholder="Enter Job Description"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
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
                name="requirement1"
                value={formData.requirement1}
                onChange={handleChange}
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
                name="comments"
                value={formData.comments}
                onChange={handleChange}
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
                name="requiredSkills"
                value={formData.requiredSkills}
                onChange={handleChange}
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
                  name="placementFee"
                  value={formData.placementFee}
                  onChange={handleChange}
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
                  id="mobile-guarantee-period"
                  name="guaranteePeriod"
                  value={formData.guaranteePeriod}
                  onChange={handleChange}
                >
                  <option value="30 days">30 Days</option>
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
                onClick={() => {
                  handlePostJob(); // Triggers the modal
                  handleSubmit(); // Submits the data
                }}
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
            <div className="my-jobs-post-job-page__tablet-client-name-agency-job-id-number-container">
              <div className="my-jobs-post-job-page__tablet-client-name-container">
                <label
                  className="my-jobs-post-job-page__tablet-client-name-label"
                  htmlFor="tablet-client-name"
                >
                  Client Name*
                </label>
                <input
                  className="my-jobs-post-job-page__tablet-client-name-input"
                  type="text"
                  placeholder="Enter Client Name"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                />
              </div>
              <div className="my-jobs-post-job-page__tablet-agency-job-id-number-container">
                <label
                  className="my-jobs-post-job-page__tablet-agency-job-id-label"
                  htmlFor="tablet-agency-job-id"
                >
                  Agency Job ID #
                </label>
                <input
                  className="my-jobs-post-job-page__tablet-agency-job-id-input"
                  type="text"
                  name="agencyJobId"
                  value={formData.agencyJobId}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="my-jobs-post-job-page__tablet-country-state-city-zip-code-container">
              <div className="my-jobs-post-job-page__tablet-country-container">
                <label
                  className="my-jobs-post-job-page__tablet-country-label"
                  htmlFor="tablet-country"
                >
                  Country
                </label>
                <select
                  className="my-jobs-post-job-page__tablet-country-select"
                  id="tablet-country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Spain">Spain</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__tablet-state-container">
                <label
                  className="my-jobs-post-job-page__tablet-state-label"
                  htmlFor="tablet-state"
                >
                  State
                </label>
                <select
                  className="my-jobs-post-job-page__tablet-state-select"
                  id="tablet-state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="Alabama">
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
              <div className="my-jobs-post-job-page__tablet-city-container">
                <label
                  className="my-jobs-post-job-page__tablet-city-label"
                  htmlFor="tablet-city"
                >
                  City
                </label>
                <input
                  className="my-jobs-post-job-page__tablet-city-input"
                  type="text"
                  placeholder="Enter City"
                  id="tablet-city"
                />
              </div>
              <div className="my-jobs-post-job-page__tablet-zip-code-container">
                <label
                  className="my-jobs-post-job-page__tablet-zip-code-label"
                  htmlFor="tablet-zip-code"
                >
                  Zip Code
                </label>
                <input
                  className="my-jobs-post-job-page__tablet-zip-code-input"
                  type="text"
                  id="tablet-zip-code"
                  placeholder="5-digit Zip Code"
                />
              </div>
            </div>
            <div className="my-jobs-post-job-page__tablet-job-title-container">
              <label
                className="my-jobs-post-job-page__tablet-job-title-label"
                htmlFor="tablet-job-title"
              >
                Job Title
              </label>
              <input
                className="my-jobs-post-job-page__tablet-job-title-input"
                type="text"
                id="tablet-job-title"
              />
            </div>
            <div className="my-jobs-post-job-page__tablet-industry-openings-job-type-citizenship-type-of-visa-container">
              <div className="my-jobs-post-job-page__tablet-industry-container">
                <label
                  className="my-jobs-post-job-page__tablet-industry-label"
                  htmlFor="tablet-industry"
                >
                  Industry
                </label>
                <select
                  className="my-jobs-post-job-page__tablet-industry-select"
                  id="tablet-industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                >
                  <option value="aerospace-defense">
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
              <div className="my-jobs-post-job-page__tablet-openings-container">
                <label
                  className="my-jobs-post-job-page__tablet-openings-label"
                  htmlFor="tablet-openings"
                >
                  Openings
                </label>
                <select
                  className="my-jobs-post-job-page__tablet-openings-select"
                  id="tablet-openings"
                  name="openings"
                  value={formData.openings}
                  onChange={handleChange}
                >
                  <option value="1">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__tablet-job-type-container">
                <label
                  className="my-jobs-post-job-page__tablet-job-type-label"
                  htmlFor="tablet-job-type"
                >
                  Job Type
                </label>
                <select
                  className="my-jobs-post-job-page__tablet-job-type-select"
                  id="tablet-job-type"
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                >
                  <option value="Full Time" >
                    Full Time
                  </option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__tablet-citizenship-container">
                <label
                  className="my-jobs-post-job-page__tablet-citizenship-label"
                  htmlFor="tablet-citizenship"
                >
                  Citizenship
                </label>
                <select
                  className="my-jobs-post-job-page__tablet-citizenship-select"
                  id="tablet-citizenship"
                  name="citizenship"
                  value={formData.citizenship}
                  onChange={handleChange}
                >
                  <option value="US Citizen">
                    US Citizen
                  </option>
                  <option value="VISA">VISA</option>
                  <option value="Permanent Resident">Permanent Resident</option>
                  <option value="OPT">OPT</option>
                  <option value="H1B">H1B</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__tablet-type-of-visa-container">
                <label
                  className="my-jobs-post-job-page__tablet-type-of-visa-label"
                  htmlFor="tablet-type-of-visa"
                >
                  Type of Visa
                </label>
                <select
                  className="my-jobs-post-job-page__tablet-type-of-visa-select"
                  id="tablet-type-of-visa"
                  name="typeOfVisa"
                  value={formData.typeOfVisa}
                  onChange={handleChange}
                >
                  <option value="H1B">H1B</option>
                  <option value="F1">F1</option>
                  <option value="J1">J1</option>
                  <option value="OPT">OPT</option>
                  <option value="EB-5">EB-5</option>
                </select>
              </div>
            </div>
            <div className="my-jobs-post-job-page__tablet-experience-level-salary-type-container">
              <div className="my-jobs-post-job-page__tablet-experience-level-container">
                <label
                  className="my-jobs-post-job-page__tablet-experience-level-label"
                  htmlFor="tablet-experience-level"
                >
                  Experience Level
                </label>
                <select
                  className="my-jobs-post-job-page__tablet-experience-level-select"
                  id="tablet-experience-level"
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                >
                  <option value="0 - 1 years">
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
              <div className="my-jobs-post-job-page__tablet-salary-type-container">
                <label
                  className="my-jobs-post-job-page__tablet-salary-type-label"
                  htmlFor="tablet-salary-type"
                >
                  Salary Type
                </label>
                <select
                  className="my-jobs-post-job-page__tablet-salary-type-select"
                  id="tablet-salary-type"
                  name="salaryType"
                  value={formData.salaryType}
                  onChange={handleChange}
                >
                  <option value="annual">
                    Annual
                  </option>
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Biweekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>
            <div className="my-jobs-post-job-page__tablet-environment-start-date-container">
              <div className="my-jobs-post-job-page__tablet-environment-container">
                <label
                  className="my-jobs-post-job-page__tablet-environment-label"
                  htmlFor="tablet-environment"
                >
                  Environment
                </label>
                <select
                  className="my-jobs-post-job-page__tablet-environment-select"
                  id="tablet-environment"
                  name="environment"
                  value={formData.environment}
                  onChange={handleChange}
                >
                  <option value="on-site">
                    On-site
                  </option>
                  <option value="remote">Remote</option>
                  <option value="traveling">Traveling</option>
                </select>
              </div>
              <img
                className="my-jobs-post-job-page__tablet-calendar-icon"
                src={CalendarIcon}
                alt="Calendar Icon"
              />
              <div className="my-jobs-post-job-page__tablet-start-date-container">
                <label
                  className="my-jobs-post-job-page__tablet-start-date-label"
                  htmlFor="tablet-start-date"
                >
                  Start Date
                </label>
                <input
                  className="my-jobs-post-job-page__tablet-start-date-input"
                  type="text"
                  placeholder="mm/dd/yy"
                />
              </div>
            </div>
            <div className="my-jobs-post-job-page__tablet-salary-range-container">
              <p className="my-jobs-post-job-page__tablet-salary-range-header">
                Salary Range
              </p>
              <div className="my-jobs-post-job-page__tablet-salary-range-slider-container">
                <span className="my-jobs-post-job-page__tablet-salary-range-min-text">
                  MIN
                </span>
                <input
                  className="my-jobs-post-job-page__tablet-salary-range-input"
                  type="range"
                />
                <span className="my-jobs-post-job-page__tablet-salary-range-max-text">
                  MAX
                </span>
              </div>
              <div className="my-jobs-post-job-page__tablet-salary-range-values-container">
                <div className="my-jobs-post-job-page__tablet-salary-range-first-value-container">
                  <span className="my-jobs-post-job-page__tablet-salary-range-first-value-number">
                    230,000
                  </span>
                </div>
                <img
                  className="my-jobs-post-job-page__tablet-minus-sign-salary-icon"
                  src={MinusSignSalaryIcon}
                  alt="Minus Sign Salary Icon"
                />
                <div className="my-jobs-post-job-page__tablet-salary-range-second-value-container">
                  <p className="my-jobs-post-job-page__tablet-salary-range-second-value">
                    <img
                      className="my-jobs-post-job-page__tablet-dollar-sign-salary-icon"
                      src={DollarSignSalaryIcon}
                      alt="Dollar Sign Salary Icon"
                    />
                    <span className="my-jobs-post-job-page__tablet-salary-range-second-value-number">
                      337,000
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="my-jobs-post-job-page__tablet-travel-paid-relocation-bonus-container">
              <div className="my-jobs-post-job-page__tablet-travel-container">
                <label
                  className="my-jobs-post-job-page__tablet-travel-label"
                  htmlFor="tablet-travel"
                >
                  Travel
                </label>
                <select
                  className="my-jobs-post-job-page__tablet-travel-select"
                  name="tablet-travel"
                  id="tablet-travel"
                >
                  <option value="none-required" selected>
                    None Required
                  </option>
                  <option value="travel-required">Travel Required</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__tablet-paid-relocation-container">
                <label
                  className="my-jobs-post-job-page__tablet-paid-relocation-label"
                  htmlFor="tablet-paid-relocation"
                >
                  Paid Relocation
                </label>
                <select
                  className="my-jobs-post-job-page__tablet-paid-relocation-select"
                  name="tablet-paid-relocation"
                  id="tablet-paid-relocation"
                >
                  <option value="unknown" selected>
                    Unknown
                  </option>
                  <option value="known">Known</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__tablet-bonus-container">
                <label
                  className="my-jobs-post-job-page__tablet-bonus-label"
                  htmlFor="tablet-bonus"
                >
                  Bonus
                </label>
                <select
                  className="my-jobs-post-job-page__tablet-bonus-select"
                  name="tablet-bonus"
                  id="tablet-bonus"
                >
                  <option value="unknown">Unknown</option>
                  <option value="known">Known</option>
                </select>
              </div>
            </div>
            <div className="my-jobs-post-job-page__tablet-required-education-container">
              <label
                className="my-jobs-post-job-page__tablet-required-education-label"
                htmlFor="tablet-required-education"
              >
                Required Education
              </label>
              <input
                className="my-jobs-post-job-page__tablet-required-education-input"
                type="text"
                placeholder="Enter Required Education"
              />
            </div>
            <div className="my-jobs-post-job-page__tablet-job-description-container">
              <label
                className="my-jobs-post-job-page__tablet-job-description-label"
                htmlFor="tablet-job-description"
              >
                Job Description
              </label>
              <textarea
                className="my-jobs-post-job-page__tablet-job-description-text-area"
                name="tablet-job-description"
                id="tablet-job-description"
                placeholder="Enter Job Description"
              ></textarea>
            </div>
            <p className="my-jobs-post-job-page__tablet-candidate-requirements-header">
              Candidate Requirements
            </p>
            <div className="my-jobs-post-job-page__tablet-requirement-one-container">
              <p className="my-jobs-post-job-page__tablet-requirement-one-header">
                Requirement 1
              </p>
              <input
                className="my-jobs-post-job-page__tablet-requirement-one-input"
                type="text"
                placeholder="Enter Requirement"
              />
            </div>
            <p className="my-jobs-post-job-page__tablet-add-requirement">
              +{" "}
              <span className="my-jobs-post-job-page__tablet-add-requirement-text">
                Add Requirement
              </span>
            </p>
            <div className="my-jobs-post-job-page__tablet-comments-container">
              <p className="my-jobs-post-job-page__tablet-comments-text">
                Comments
              </p>
              <input
                className="my-jobs-post-job-page__tablet-comments-input"
                type="text"
                placeholder="Enter Comment"
              />
            </div>
            <div className="my-jobs-post-job-page__tablet-required-skills-container">
              <label
                className="my-jobs-post-job-page__tablet-required-skills-label"
                htmlFor="tablet-required-skills"
              >
                Required Skills
              </label>
              <input
                className="my-jobs-post-job-page__tablet-required-skills-input"
                type="text"
                placeholder="Enter Required Skills separated by commas"
              />
            </div>
            <div className="my-jobs-post-job-page__tablet-fee-type-container">
              <p className="my-jobs-post-job-page__tablet-fee-type-header">
                Fee Type
              </p>
              <div className="my-jobs-post-job-page__tablet-fee-type-options-container">
                <div className="my-jobs-post-job-page__tablet-percentage-of-salary-container">
                  <img
                    className="my-jobs-post-job-page__tablet-circle-button-on-icon"
                    src={CircleButtonOnIcon}
                    alt="Circle Button On Icon"
                  />
                  <span className="my-jobs-post-job-page__tablet-percentage-of-salary-text">
                    Percentage of Salary
                  </span>
                </div>
                <div className="my-jobs-post-job-page__tablet-percentage-of-total-compensation-container">
                  <img
                    className="my-jobs-post-job-page__tablet-circle-button-off-icon"
                    src={CircleButtonOffIcon}
                    alt="Circle Button Off Icon"
                  />
                  <span className="my-jobs-post-job-page__tablet-percentage-of-total-compensation-text">
                    % of Total Compensation
                  </span>
                </div>
                <div className="my-jobs-post-job-page__tablet-flat-fee-container">
                  <img
                    className="my-jobs-post-job-page__tablet-circle-button-off-icon"
                    src={CircleButtonOffIcon}
                    alt="Circle Button Off Icon"
                  />
                  <span className="my-jobs-post-job-page__tablet-flat-fee-text">
                    Flat Fee
                  </span>
                </div>
              </div>
            </div>
            <div className="my-jobs-post-job-page__tablet-split-fee-percentage-of-salary-willing-to-negotiate-fee-container">
              <div className="my-jobs-post-job-page__tablet-split-fee-percentage-of-salary-container">
                <p className="my-jobs-post-job-page__tablet-split-fee-percentage-of-salary-header">
                  Split Fee Percentage of Salary
                </p>
                <input
                  className="my-jobs-post-job-page__tablet-split-fee-percentage-of-salary-slider"
                  type="range"
                />
                <div className="my-jobs-post-job-page__tablet-split-fee-percentage-value-container">
                  <div className="my-jobs-post-job-page__tablet-split-fee-my-percentage-container">
                    <p className="my-jobs-post-job-page__tablet-split-fee-my-percentage-number">
                      50%
                    </p>
                    <p className="my-jobs-post-job-page__tablet-split-fee-my-percentage-text">
                      My Percentage
                    </p>
                  </div>
                  <div className="my-jobs-post-job-page__tablet-split-fee-shared-percentage-container">
                    <p className="my-jobs-post-job-page__tablet-split-fee-shared-percentage-number">
                      50%
                    </p>
                    <p className="my-jobs-post-job-page__tablet-split-fee-shared-percentage-text">
                      Shared Percentage
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-jobs-post-job-page__tablet-willing-to-negotiate-fee">
                <span className="my-jobs-post-job-page__tablet-willing-to-negotiate-fee-text">
                  Willing to Negotiate Fee?
                </span>
                <div className="my-jobs-post-job-page__tablet-willing-to-negotiate-fee-yes-container">
                  <img
                    className="my-jobs-post-job-page__tablet-willing-to-negotiate-fee-circle-button-on-icon"
                    src={CircleButtonOnIcon}
                    alt="Circle Button On Icon"
                  />
                  <span className="my-jobs-post-job-page__tablet-willing-to-negotiate-fee-yes-text">
                    Yes
                  </span>
                </div>
                <div className="my-jobs-post-job-page__tablet-willing-to-negotiate-fee-no-container">
                  <img
                    className="my-jobs-post-job-page__tablet-willing-to-negotiate-fee-circle-button-off-icon"
                    src={CircleButtonOffIcon}
                    alt="Circle Button Off Icon"
                  />
                  <span className="my-jobs-post-job-page__tablet-willing-to-negotiate-fee-no-text">
                    No
                  </span>
                </div>
              </div>
            </div>
            <div className="my-jobs-post-job-page__tablet-placement-fee-container">
              <label
                className="my-jobs-post-job-page__tablet-placement-fee-label"
                htmlFor="tablet-placement-fee"
              >
                Placement Fee
              </label>
              <input
                className="my-jobs-post-job-page__tablet-placement-fee-input"
                type="text"
                placeholder="20%"
              />
            </div>
            <div className="my-jobs-post-job-page__tablet-guarantee-period-container">
              <label
                className="my-jobs-post-job-page__tablet-guarantee-period-label"
                htmlFor="tablet-guarantee-period"
              >
                Guarantee Period
              </label>
              <select
                className="my-jobs-post-job-page__tablet-guarantee-period-select"
                name="tablet-guarantee-period"
                id="tablet-guarantee-period"
              >
                <option value="30 days">30 days</option>
                <option value="1 week">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="3 weeks">3 weeks</option>
                <option value="2 months">2 months</option>
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
              </select>
            </div>
            <p className="my-jobs-post-job-page__tablet-fee-agreement">
              Fee Agreement
            </p>
            <div className="my-jobs-post-job-page__tablet-auto-generated-agreement-view-agreement-container">
              <p className="my-jobs-post-job-page__tablet-mlsa-auto-generated-agreement">
                MLSA Auto-Generated Agreement
              </p>
              <button className="my-jobs-post-job-page__tablet-view-agreement-button">
                View Agreement
              </button>
            </div>
            <p className="my-jobs-post-job-page__tablet-about-this-agreement-text">
              About this agreement
            </p>
            <div className="my-jobs-post-job-page__tablet-button-container">
              <button
                className="my-jobs-post-job-page__tablet-post-button"
                onClick={handlePostJob}
              >
                Post
              </button>
              <button className="my-jobs-post-job-page__tablet-preview-button">
                Preview
              </button>
              <button
                className="my-jobs-post-job-page__tablet-save-draft-button"
                onClick={handleSaveDraft}
              >
                Save Draft
              </button>
              <button
                className="my-jobs-post-job-page__tablet-clear-form-button"
                onClick={handleClearForm}
              >
                Clear Form
              </button>
            </div>
          </div>
          <div className="my-jobs-post-job-page__desktop-container">
            <div className="my-jobs-post-job-page__desktop-header-owner-container">
              <p className="my-jobs-post-job-page__desktop-header">Post Job</p>
              <p className="my-jobs-post-job-page__desktop-owner-text">
                Owner: John Smith, HumanRe Agency
              </p>
            </div>
            <div className="my-jobs-post-job-page__desktop-value-assurance-information-is-protected-container">
              <img
                className="my-jobs-post-job-page__desktop-value-assurance-icon"
                src={ValueAssuranceIcon}
                alt="Value Assurance Icon"
              />
              <div className="my-jobs-post-job-page__desktop-information-is-protected-container">
                <p className="my-jobs-post-job-page__desktop-information-is-protected-text">
                  Your information is protected by our top-rated value assurance
                  system, ensuring its safety and security at all times.
                </p>
                <p className="my-jobs-post-job-page__desktop-client-name-will-not-be-shared">
                  *Client Name will not be shared without NDA or Partnership
                  Agreement being signed by both parties.
                </p>
              </div>
            </div>
            <div className="my-jobs-post-job-page__desktop-button-container">
              <button className="my-jobs-post-job-page__desktop-upload-job-description-button">
                Upload Job Description
              </button>
              <button className="my-jobs-post-job-page__desktop-open-archived-job-button">
                Open Archived Job
              </button>
              <button className="my-jobs-post-job-page__desktop-open-saved-draft-button">
                Open Saved Draft
              </button>
              <button className="my-jobs-post-job-page__desktop-batch-upload-button">
                Batch Upload
              </button>
              <button className="my-jobs-post-job-page__desktop-open-job-through-api">
                Open Job Through API
              </button>
            </div>
            <div className="my-jobs-post-job-page__desktop-hot-job-opening-put-on-hold-container">
              <div className="my-jobs-post-job-page__desktop-hot-job-opening-container">
                <img
                  className="my-jobs-post-job-page__desktop-on-hold-button-off-icon"
                  src={OnHoldHotButtonOffIcon}
                  alt="On Hold Button Off Icon"
                />
                <img
                  className="my-jobs-post-job-page__desktop-hot-off-icon"
                  src={HotOffIcon}
                  alt="Hot Off Icon"
                />
                <span className="my-jobs-post-job-page__desktop-hot-job-opening-text">
                  Hot Job Opening
                </span>
              </div>
              <div className="my-jobs-post-job-page__desktop-put-on-hold-container">
                <img
                  className="my-jobs-post-job-page__desktop-on-hold-button-off-icon"
                  src={OnHoldHotButtonOffIcon}
                  alt="On Hold Button Off Icon"
                />
                <img
                  className="my-jobs-post-job-page__desktop-on-hold-off-icon"
                  src={OnHoldOffIcon}
                  alt="On Hold Off Icon"
                />
                <span className="my-jobs-post-job-page__desktop-put-on-hold-text">
                  Put On Hold
                </span>
              </div>
            </div>
            <div className="my-jobs-post-job-page__desktop-client-name-agency-job-id-number-container">
              <div className="my-jobs-post-job-page__desktop-client-name-container">
                <label
                  className="my-jobs-post-job-page__desktop-client-name-label"
                  htmlFor="desktop-client-name"
                >
                  Client Name*
                </label>
                <input
                  className="my-jobs-post-job-page__desktop-client-name-input"
                  type="text"
                  id="desktop-client-name"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                />
              </div>
              <div className="my-jobs-post-job-page__desktop-agency-job-id-number-container">
                <label
                  className="my-jobs-post-job-page__desktop-agency-job-id-number-label"
                  htmlFor="desktop-agency-job-id-number"
                >
                  Agency Job ID #
                </label>
                <input
                  className="my-jobs-post-job-page__desktop-agency-job-id-number-input"
                  type="text"
                  id="desktop-agency-job-id-number"
                  name="agencyJobId"
                  value={formData.agencyJobId}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="my-jobs-post-job-page__desktop-country-state-city-zip-code-container">
              <div className="my-jobs-post-job-page__desktop-country-container">
                <label
                  className="my-jobs-post-job-page__desktop-country-label"
                  htmlFor="desktop-country"
                >
                  Country
                </label>
                <select
                  className="my-jobs-post-job-page__desktop-country-select"
                  id="desktop-country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="USA" selected>
                    USA
                  </option>
                  <option value="EU">EU</option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                  <option value="United Kingdom">United Kingdom</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__desktop-state-container">
                <label
                  className="my-jobs-post-job-page__desktop-state-label"
                  htmlFor="desktop-state"
                >
                  State
                </label>
                <select
                  className="my-jobs-post-job-page__desktop-state-select"
                  id="desktop-state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="Alabama">
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
              <div className="my-jobs-post-job-page__desktop-city-container">
                <label
                  className="my-jobs-post-job-page__desktop-city-label"
                  htmlFor="desktop-city"
                >
                  City
                </label>
                <input
                  className="my-jobs-post-job-page__desktop-city-input"
                  type="text"
                  placeholder="Enter City"
                />
              </div>
              <div className="my-jobs-post-job-page__desktop-zip-code-container">
                <label
                  className="my-jobs-post-job-page__desktop-zip-code-label"
                  htmlFor="desktop-zip-code"
                >
                  Zip Code
                </label>
                <input
                  className="my-jobs-post-job-page__desktop-zip-code-input"
                  type="text"
                  placeholder="5-digit Zip Code"
                />
              </div>
            </div>
            <div className="my-jobs-post-job-page__desktop-job-title-container">
              <label
                className="my-jobs-post-job-page__desktop-job-title-label"
                htmlFor="desktop-job-title"
              >
                Job Title
              </label>
              <input
                className="my-jobs-post-job-page__desktop-job-title-input"
                type="text"
                placeholder="Enter Job Title"
              />
            </div>
            <div className="my-jobs-post-job-page__desktop-industry-openings-job-type-citizenship-type-of-visa-container">
              <div className="my-jobs-post-job-page__desktop-industry-container">
                <label
                  className="my-jobs-post-job-page__desktop-industry-label"
                  htmlFor="desktop-industry-label"
                >
                  Industry
                </label>
                <select
                  className="my-jobs-post-job-page__desktop-industry-select"
                  id="desktop-industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                >
                  <option value="aerospace-defense">
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
              <div className="my-jobs-post-job-page__desktop-openings-container">
                <label
                  className="my-jobs-post-job-page__desktop-openings-label"
                  htmlFor="desktop-openings"
                >
                  Openings
                </label>
                <select
                  className="my-jobs-post-job-page__desktop-openings-select"
                  id="desktop-openings"
                  name="openings"
                  value={formData.openings}
                  onChange={handleChange}
                >
                  <option value="1">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50"></option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__desktop-job-type-container">
                <label
                  className="my-jobs-post-job-page__desktop-job-type-label"
                  htmlFor="desktop-job-type"
                >
                  Job Type
                </label>
                <select
                  className="my-jobs-post-job-page__desktop-job-type-select"
                  name="desktop-job-type"
                  id="desktop-job-type"
                >
                  <option value="Full Time">
                    Full Time
                  </option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__desktop-citizenship-container">
                <label
                  className="my-jobs-post-job-page__desktop-citizenship-label"
                  htmlFor="desktop-citizenship"
                >
                  Citizenship
                </label>
                <select
                  className="my-jobs-post-job-page__desktop-citizenship-select"
                  id="desktop-citizenship"
                  name="citizenship"
                  value={formData.citizenship}
                  onChange={handleChange}
                >
                  <option value="US Citizen">
                    US Citizen
                  </option>
                  <option value="VISA">VISA</option>
                  <option value="Permanent Resident">Permanent Resident</option>
                  <option value="OPT">OPT</option>
                  <option value="H1B">H1B</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__desktop-type-of-visa-container">
                <label
                  className="my-jobs-post-job-page__desktop-type-of-visa-label"
                  htmlFor="desktop-type-of-visa"
                >
                  Type of VISA
                </label>
                <select
                  className="my-jobs-post-job-page__desktop-type-of-visa-select"
                  id="desktop-type-of-visa"
                  name="typeOfVisa"
                  value={formData.typeOfVisa}
                  onChange={handleChange}
                >
                  <option value="permanent resident">Permanent Resident</option>
                  <option value="F1">F1</option>
                  <option value="H1B">H1B</option>
                  <option value="J1">J1</option>
                  <option value="OPT">OPT</option>
                </select>
              </div>
            </div>
            <div className="my-jobs-post-job-page__desktop-experience-level-salary-type-container">
              <div className="my-jobs-post-job-page__desktop-experience-level-container">
                <label
                  className="my-jobs-post-job-page__desktop-experience-level-label"
                  htmlFor="desktop-experience-level"
                >
                  Experience Level
                </label>
                <select
                  className="my-jobs-post-job-page__desktop-experience-level-select"
                  id="desktop-experience-level"
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                >
                  <option value="0 - 1 years">
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
              <div className="my-jobs-post-job-page__desktop-salary-type-container">
                <label
                  className="my-jobs-post-job-page__desktop-salary-type-label"
                  htmlFor="desktop-salary-type"
                >
                  Salary Type
                </label>
                <select
                  className="my-jobs-post-job-page__desktop-salary-type-select"
                  id="desktop-salary-type"
                  name="salaryType"
                  value={formData.salaryType}
                  onChange={handleChange}
                >
                  <option value="annual">
                    Annual
                  </option>
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Biweekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>
            <div className="my-jobs-post-job-page__desktop-environment-start-date-container">
              <div className="my-jobs-post-job-page__desktop-environment-container">
                <label
                  className="my-jobs-post-job-page__desktop-environment-label"
                  htmlFor="desktop-environment"
                >
                  Environment
                </label>
                <select
                  className="my-jobs-post-job-page__desktop-environment-select"
                  id="desktop-environment"
                  name="environment"
                  value={formData.environment}
                  onChange={handleChange}
                >
                  <option value="on-site">
                    On-site
                  </option>
                  <option value="remote">Remote</option>
                  <option value="traveling">Traveling</option>
                </select>
              </div>
              <img
                className="my-jobs-post-job-page__desktop-calendar-icon"
                src={CalendarIcon}
                alt="Calendar Icon"
              />
              <div className="my-jobs-post-job-page__desktop-start-date-container">
                <label
                  className="my-jobs-post-job-page__desktop-start-date-label"
                  htmlFor="desktop-start-date"
                >
                  Start Date
                </label>
                <input
                  className="my-jobs-post-job-page__desktop-start-date-input"
                  type="text"
                  placeholder="mm/dd/yy"
                />
              </div>
            </div>
            <div className="my-jobs-post-job-page__desktop-salary-range-container">
              <p className="my-jobs-post-job-page__desktop-salary-range-header">
                Salary Range
              </p>
              <div className="my-jobs-post-job-page__desktop-salary-range-slider-container">
                <span className="my-jobs-post-job-page__desktop-salary-range-min-text">
                  MIN
                </span>
                <input
                  className="my-jobs-post-job-page__desktop-salary-range-slider"
                  type="range"
                />
                <span className="my-jobs-post-job-page__desktop-salary-range-max-text">
                  MAX
                </span>
              </div>
              <div className="my-jobs-post-job-page__desktop-salary-range-values-container">
                <div className="my-jobs-post-job-page__desktop-salary-range-first-value-container">
                  <p className="my-jobs-post-job-page__desktop-salary-range-first-value-number">
                    230,000
                  </p>
                </div>
                <img
                  className="my-jobs-post-job-page__desktop-minus-sign-salary-icon"
                  src={MinusSignSalaryIcon}
                  alt="Minus Sign Salary Icon"
                />
                <div className="my-jobs-post-job-page__desktop-salary-range-second-value-container">
                  <img
                    className="my-jobs-post-job-page__desktop-dollar-sign-salary-icon"
                    src={DollarSignSalaryIcon}
                    alt="Dollar Sign Salary Icon"
                  />
                  <p className="my-jobs-post-job-page__desktop-salary-range-second-value-number">
                    337,000
                  </p>
                </div>
              </div>
            </div>
            <div className="my-jobs-post-job-page__desktop-travel-paid-relocation-bonus-container">
              <div className="my-jobs-post-job-page__desktop-travel-container">
                <label
                  className="my-jobs-post-job-page__desktop-travel-label"
                  htmlFor="desktop-travel"
                >
                  Travel
                </label>
                <select
                  className="my-jobs-post-job-page__desktop-travel-select"
                  name="desktop-travel"
                  id="desktop-travel"
                >
                  <option value="none required" selected>
                    None Required
                  </option>
                  <option value="weekly">weekly</option>
                  <option value="biweekly">Biweekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__desktop-paid-relocation-container">
                <label
                  className="my-jobs-post-job-page__desktop-paid-relocation-label"
                  htmlFor="desktop-paid-relocation"
                >
                  Paid Relocation
                </label>
                <select
                  className="my-jobs-post-job-page__desktop-paid-relocation-select"
                  name="desktop-paid-relocation"
                  id="desktop-paid-relocation"
                >
                  <option value="unknown" selected>
                    Unknown
                  </option>
                  <option value="known">Known</option>
                </select>
              </div>
              <div className="my-jobs-post-job-page__desktop-bonus-container">
                <label
                  className="my-jobs-post-job-page__desktop-bonus-label"
                  htmlFor="desktop-bonus"
                >
                  Bonus
                </label>
                <select
                  className="my-jobs-post-job-page__desktop-bonus-select"
                  name="desktop-bonus"
                  id="desktop-bonus"
                >
                  <option value="unknown">Unknown</option>
                  <option value="known">Known</option>
                </select>
              </div>
            </div>
            <div className="my-jobs-post-job-page__desktop-required-education-container">
              <label
                className="my-jobs-post-job-page__desktop-required-education-label"
                htmlFor="desktop-required-education"
              >
                Required Education
              </label>
              <input
                className="my-jobs-post-job-page__desktop-required-education-input"
                type="text"
                placeholder="Enter Required Education"
              />
            </div>
            <div className="my-jobs-post-job-page__desktop-job-description-container">
              <label
                className="my-jobs-post-job-page__desktop-job-description-label"
                htmlFor="desktop-job-description"
              >
                Job Description
              </label>
              <textarea
                className="my-jobs-post-job-page__desktop-job-description-text-area"
                name="desktop-job-description"
                id="desktop-job-description"
                placeholder="Enter Job Description"
              ></textarea>
            </div>
            <p className="my-jobs-post-job-page__desktop-candidate-requirements-text">
              Candidate Requirements
            </p>
            <div className="my-jobs-post-job-page__desktop-requirement-one-container">
              <p className="my-jobs-post-job-page__desktop-requirement-one-text">
                Requirement 1
              </p>
              <input
                className="my-jobs-post-job-page__desktop-requirement-one-input"
                type="text"
                placeholder="Enter Requirement"
              />
            </div>
            <p className="my-jobs-post-job-page__desktop-add-requirement-container">
              <span className="my-jobs-post-job-page__desktop-plus-sign">
                +
              </span>
              <span className="my-jobs-post-job-page__desktop-add-requirement-text">
                Add Requirement
              </span>
            </p>
            <div className="my-jobs-post-job-page__desktop-comments-container">
              <span className="my-jobs-post-job-page__desktop-comments-text">
                Comments
              </span>
              <input
                className="my-jobs-post-job-page__desktop-comments-input"
                type="text"
                placeholder="Enter Comment"
              />
            </div>
            <div className="my-jobs-post-job-page__desktop-required-skills-container">
              <label
                className="my-jobs-post-job-page__desktop-required-skills-label"
                htmlFor="desktop-required-skills"
              >
                Required Skills
              </label>
              <input
                className="my-jobs-post-job-page__desktop-required-skills-input"
                type="text"
                id="desktop-required-skills"
              />
            </div>
            <div className="my-jobs-post-job-page__desktop-fee-type-split-fee-percentage-of-salary-placement-fee-container">
              <div className="my-jobs-post-job-page__desktop-fee-type-container">
                <p className="my-jobs-post-job-page__desktop-fee-type-header">
                  Fee Type
                </p>
                <div className="my-jobs-post-job-page__desktop-fee-type-options-container">
                  <div className="my-jobs-post-job-page__desktop-percentage-of-salary-container">
                    <img
                      className="my-jobs-post-job-page__desktop-circle-button-on-icon"
                      src={CircleButtonOnIcon}
                      alt="Circle Button On Icon"
                    />
                    <span className="my-jobs-post-job-page__desktop-percentage-of-salary-text">
                      Percentage of Salary
                    </span>
                  </div>
                  <div className="my-jobs-post-job-page__desktop-percentage-of-total-compensation-container">
                    <img
                      className="my-jobs-post-job-page__desktop-circle-button-off-icon"
                      src={CircleButtonOffIcon}
                      alt="Circle Button Off Icon"
                    />
                    <span className="my-jobs-post-job-page__desktop-percentage-of-total-compensation-text">
                      Percentage of Total Compensation
                    </span>
                  </div>
                  <div className="my-jobs-post-job-page__desktop-flat-fee-container">
                    <img
                      className="my-jobs-post-job-page__desktop-circle-button-off-icon"
                      src={CircleButtonOffIcon}
                      alt="Circle Button Off Icon"
                    />
                    <span className="my-jobs-post-job-page__desktop-flat-fee-text">
                      Flat Fee
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-jobs-post-job-page__desktop-split-fee-percentage-of-salary-willing-to-negotiate-fee-container">
                <div className="my-jobs-post-job-page__desktop-split-fee-percentage-of-salary-container">
                  <p className="my-jobs-post-job-page__desktop-split-fee-percentage-of-salary-header">
                    Split Fee Percentage of Salary
                  </p>
                  <input
                    className="my-jobs-post-job-page__desktop-split-fee-slider"
                    type="range"
                  />
                  <div className="my-jobs-post-job-page__desktop-split-fee-percentage-container">
                    <div className="my-jobs-post-job-page__desktop-my-percentage-container">
                      <p className="my-jobs-post-job-page__desktop-my-percentage-number">
                        50%
                      </p>
                      <p className="my-jobs-post-job-page__desktop-my-percentage-text">
                        My Percentage
                      </p>
                    </div>
                    <div className="my-jobs-post-job-page__desktop-shared-percentage-container">
                      <p className="my-jobs-post-job-page__desktop-shared-percentage-number">
                        50%
                      </p>
                      <p className="my-jobs-post-job-page__desktop-shared-percentage-text">
                        Shared Percentage
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-jobs-post-job-page__desktop-willing-to-negotiate-container">
                  <p className="my-jobs-post-job-page__desktop-willing-to-negotiate-fee-text">
                    Willing to Negotiate Fee?
                  </p>
                  <div className="my-jobs-post-job-page__desktop-willing-to-negotiate-yes-container">
                    <img
                      className="my-jobs-post-job-page__desktop-willing-to-negotiate-fee-circle-button-on-icon"
                      src={CircleButtonOnIcon}
                      alt="Circle Button On Icon"
                    />
                    <span className="my-jobs-post-job-page__desktop-willing-to-negotiate-fee-yes-text">
                      Yes
                    </span>
                  </div>
                  <div className="my-jobs-post-job-page__desktop-willing-to-negotiate-no-container">
                    <img
                      className="my-jobs-post-job-page__desktop-willing-to-negotiate-fee-circle-button-off-icon"
                      src={CircleButtonOffIcon}
                      alt="Circle Button Off Icon"
                    />
                    <span className="my-jobs-post-job-page__desktop-willing-to-negotiate-no-text">
                      No
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-jobs-post-job-page__desktop-placement-fee-guarantee-period-container">
                <div className="my-jobs-post-job-page__desktop-placement-fee-container">
                  <label
                    className="my-jobs-post-job-page__desktop-placement-fee-label"
                    htmlFor="desktop-placement-fee"
                  >
                    Placement Fee
                  </label>
                  <input
                    className="my-jobs-post-job-page__desktop-placement-fee-input"
                    type="text"
                    placeholder="20%"
                    id="desktop-placement-fee"
                  />
                </div>
                <div className="my-jobs-post-job-page__desktop-guarantee-period-container">
                  <label
                    className="my-jobs-post-job-page__desktop-guarantee-period-label"
                    htmlFor="desktop-guarantee-period"
                  >
                    Guarantee Period
                  </label>
                  <select
                    className="my-jobs-post-job-page__desktop-guarantee-period-select"
                    name="desktop-guarantee-period"
                    id="desktop-guarantee-period"
                  >
                    <option value="30 days" selected>
                      30 Days
                    </option>
                    <option value="1 week">1 week</option>
                    <option value="2 weeks">2 weeks</option>
                    <option value="3 weeks">3 weeks</option>
                    <option value="1 month">1 month</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="my-jobs-post-job-page__desktop-fee-agreement-container">
              <p className="my-jobs-post-job-page__desktop-fee-agreement-header">
                Fee Agreement
              </p>
              <div className="my-jobs-post-job-page__desktop-mlsa-auto-generated-agreement-view-agreement-container">
                <p className="my-jobs-post-job-page__desktop-mlsa-auto-generated-agreement-text">
                  MLSA Auto-Generated Agreement
                </p>
                <button className="my-jobs-post-job-page__desktop-view-agreement-button">
                  View Agreement
                </button>
              </div>
              <p className="my-jobs-post-job-page__desktop-about-this-agreement-text">
                About this agreement
              </p>
            </div>
            <div className="my-jobs-post-job-page__desktop-footer-button-container">
              <button
                className="my-jobs-post-job-page__desktop-post-button"
                onClick={handlePostJob}
              >
                Post
              </button>
              <button className="my-jobs-post-job-page__desktop-preview-button">
                Preview
              </button>
              <button
                className="my-jobs-post-job-page__desktop-save-draft-button"
                onClick={handleSaveDraft}
              >
                Save Draft
              </button>
              <button
                className="my-jobs-post-job-page__desktop-clear-form-button"
                onClick={handleClearForm}
              >
                Clear Form
              </button>
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
