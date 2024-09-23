import React, { useState } from "react";
import "./MyDocumentsCandidateReportPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import DocumentsSidePanel from "../../components/DocumentsSidePanel/DocumentsSidePanel";
import GenerateReportHeader from "../../components/GenerateReportHeader/GenerateReportHeader";
import GenerateReportOptions from "../../components/GenerateReportOptions/GenerateReportOptions";
import ModalGenerateReport from "../../components/ModalGenerateReport/ModalGenerateReport";

export default function MyDocumentsCandidateReportPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleGenerateReport = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="my-documents-candidate-report-page">
      <HeaderWithProfilePic />
      <div className="my-documents-candidate-report-page__main-container">
        <DocumentsSidePanel />
        <div className="my-documents-candidate-report-page__right-container">
          <p className="my-documents-candidate-report-page__header">
            My Documents
          </p>
          <div className="my-documents-candidate-report-page__mobile-report-container">
            <GenerateReportHeader />
            <GenerateReportOptions />
          </div>
          <div className="my-documents-candidate-report-page__mobile-central-container">
            <label
              className="my-documents-candidate-report-page__mobile-name-label"
              htmlFor="mobile-name"
            >
              Name
            </label>
            <input
              className="my-documents-candidate-report-page__mobile-name-input"
              type="text"
              id="mobile-name"
            />
            <div className="my-documents-candidate-report-page__mobile-job-type-title-container">
              <div className="my-documents-candidate-report-page__mobile-job-type-container">
                <label
                  className="my-documents-candidate-report-page__mobile-job-type-label"
                  htmlFor="mobile-job-type"
                >
                  Job Type
                </label>
                <select
                  className="my-documents-candidate-report-page__mobile-job-type-select"
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
              <div className="my-documents-candidate-report-page__mobile-title-container">
                <label
                  className="my-documents-candidate-report-page__mobile-title-label"
                  htmlFor="mobile-title"
                >
                  Title
                </label>
                <input
                  className="my-documents-candidate-report-page__mobile-title-input"
                  name="mobile-title"
                  id="mobile-title"
                />
              </div>
            </div>
            <div className="my-documents-candidate-report-page__mobile-experience-environment-container">
              <div className="my-documents-candidate-report-page__mobile-experience-container">
                <label
                  className="my-documents-candidate-report-page__mobile-experience-label"
                  htmlFor="mobile-experience"
                >
                  Experience
                </label>
                <select
                  className="my-documents-candidate-report-page__mobile-experience-select"
                  name="mobile-experience"
                  id="mobile-experience"
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
              <div className="my-documents-candidate-report-page__mobile-environment-container">
                <label
                  className="my-documents-candidate-report-page__mobile-environment-label"
                  htmlFor="mobile-environment"
                >
                  Environment
                </label>
                <select
                  className="my-documents-candidate-report-page__mobile-environment-select"
                  name="mobile-environment"
                  id="mobile-environment"
                >
                  <option value="on-site" disabled selected>
                    On-Site
                  </option>
                  <option value="remote">Remote</option>
                  <option value="traveling">Traveling</option>
                </select>
              </div>
            </div>
            <div className="my-documents-candidate-report-page__mobile-industry-container">
              <label
                className="my-documents-candidate-report-page__mobile-industry-label"
                htmlFor="mobile-industry"
              >
                Industry
              </label>
              <select
                className="my-documents-candidate-report-page__mobile-industry-select"
                name="mobile-industry"
                id="mobile-industry"
              >
                <option
                  value="professional-services-consulting"
                  disabled
                  selected
                >
                  Professional Services/Consulting
                </option>
                <option value="aerospace-defense">Aerospace and Defense</option>
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
                <option value="power-and-utilities">Power and Utilities</option>
                <option value="telecommunications">Telecommunications</option>
              </select>
            </div>
            <div className="my-documents-candidate-report-page__mobile-city-state-container">
              <div className="my-documents-candidate-report-page__mobile-city-container">
                <label
                  className="my-documents-candidate-report-page__mobile-city-label"
                  htmlFor="mobile-city"
                >
                  City
                </label>
                <input
                  className="my-documents-candidate-report-page__mobile-city-input"
                  type="text"
                />
              </div>
              <div className="my-documents-candidate-report-page__mobile-state-container">
                <label
                  className="my-documents-candidate-report-page__mobile-state-label"
                  htmlFor="mobile-state"
                >
                  State
                </label>
                <select
                  className="my-documents-candidate-report-page__mobile-state-select"
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
            <div className="my-documents-candidate-report-page__mobile-country-zip-code-container">
              <div className="my-documents-candidate-report-page__mobile-country-container">
                <label
                  className="my-documents-candidate-report-page__mobile-country-label"
                  htmlFor="mobile-country"
                >
                  Country
                </label>
                <select
                  className="my-documents-candidate-report-page__mobile-country-select"
                  name="mobile-country"
                  id="mobile-country"
                >
                  <option value="USA" disabled selected>
                    USA
                  </option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Spain">Spain</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>
              <div className="my-documents-candidate-report-page__mobile-zip-code-container">
                <label
                  className="my-documents-candidate-report-page__mobile-zip-code-label"
                  htmlFor="mobile-zip-code"
                >
                  Zip Code
                </label>
                <input
                  className="my-documents-candidate-report-page__mobile-zip-code-input"
                  type="text"
                />
              </div>
            </div>
            <div className="my-documents-candidate-report-page__mobile-email-citizenship-container">
              <div className="my-documents-candidate-report-page__mobile-email-container">
                <label
                  className="my-documents-candidate-report-page__mobile-email-label"
                  htmlFor="mobile-email"
                >
                  Email
                </label>
                <input
                  className="my-documents-candidate-report-page__mobile-email-input"
                  type="text"
                />
              </div>
              <div className="my-documents-candidate-report-page__mobile-citizenship-container">
                <label
                  className="my-documents-candidate-report-page__mobile-citizenship-label"
                  htmlFor="mobile-citizenship"
                >
                  Citizenship/Type of VISA
                </label>
                <select
                  className="my-documents-candidate-report-page__mobile-citizenship-select"
                  name="mobile-citizenship"
                  id="mobile-citizenship"
                >
                  <option value="VISA" disabled selected>
                    VISA
                  </option>
                  <option value="US Citizen">US Citizen</option>
                  <option value="Permanent Resident">Permanent Resident</option>
                  <option value="OPT">OPT</option>
                  <option value="H1B">H1B</option>
                </select>
              </div>
            </div>
            <div className="my-documents-candidate-report-page__mobile-willing-to-travel-availability-date-salary-type-container">
              <div className="my-documents-candidate-report-page__mobile-willing-to-travel-container">
                <label
                  className="my-documents-candidate-report-page__mobile-willing-to-travel-label"
                  htmlFor="mobile-willing-to-travel"
                >
                  Willing to travel
                </label>
                <select
                  className="my-documents-candidate-report-page__mobile-willing-to-travel-select"
                  name="mobile-willing-to-travel"
                  id="mobile-willing-to-travel"
                >
                  <option value="yes" disabled selected>
                    Yes
                  </option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="my-documents-candidate-report-page__mobile-availability-date-container">
                <label
                  className="my-documents-candidate-report-page__mobile-availability-date-label"
                  htmlFor="mobile-availability-date"
                >
                  Availability Date
                </label>
                <select
                  className="my-documents-candidate-report-page__mobile-availability-date-select"
                  name="mobile-availability-date"
                  id="mobile-availability-date"
                >
                  <option value="01/01/25" disabled selected>
                    01/01/25
                  </option>
                  <option value="01/02/25">01/02/25</option>
                  <option value="01/03/25">01/03/25</option>
                  <option value="01/04/25">01/04/25</option>
                  <option value="01/05/25">01/05/25</option>
                </select>
              </div>
              <div className="my-documents-candidate-report-page__mobile-salary-type-container">
                <label
                  className="my-documents-candidate-report-page__mobile-salary-type-label"
                  htmlFor="mobile-salary-type"
                >
                  Salary Type
                </label>
                <select
                  className="my-documents-candidate-report-page__mobile-salary-type-select"
                  name="mobile-salary-type"
                  id="mobile-salary-type"
                >
                  <option value="Yearly" disabled selected>
                    Yearly
                  </option>
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Biweekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>
            <div className="my-documents-candidate-report-page__mobile-salary-range-container">
              <div className="my-documents-candidate-report-page__mobile-salary-range-first-container">
                <label
                  className="my-documents-candidate-report-page__mobile-salary-range-first-label"
                  htmlFor="mobile-salary-range-first"
                >
                  Salary Range
                </label>
                <select
                  className="my-documents-candidate-report-page__mobile-salary-range-first-select"
                  name="mobile-salary-range"
                  id="mobile-salary-range-first"
                >
                  <option value="0" disabled selected>
                    0
                  </option>
                  <option value="50,000">50,000</option>
                  <option value="100,000">100,000</option>
                  <option value="150,000">150,000</option>
                  <option value="200,000">200,000</option>
                  <option value="250,000">250,000</option>
                  <option value="500,000+">500,000+</option>
                </select>
              </div>
              <div className="my-documents-candidate-report-page__mobile-salary-range-second-container">
                <select
                  className="my-documents-candidate-report-page__mobile-salary-range-second-select"
                  name="mobile-salary-range-second"
                  id="mobile-salary-range-second"
                >
                  <option value="50,000" disabled selected>
                    50,000
                  </option>
                  <option value="100,000">100,000</option>
                  <option value="150,000">150,000</option>
                  <option value="200,000">200,000</option>
                  <option value="250,000">250,000</option>
                  <option value="500,000">500,000</option>
                  <option value="500,000+">500,000+</option>
                </select>
              </div>
            </div>
            <button
              onClick={handleGenerateReport}
              className="my-documents-candidate-report-page__mobile-generate-report-button"
            >
              Generate Report
            </button>
          </div>
          <div className="my-documents-candidate-report-page__tablet-desktop-generate-report-container">
            <GenerateReportHeader />
          </div>
          <div className="my-documents-candidate-report-page__tablet-central-container">
            <GenerateReportOptions />
            <div className="my-documents-candidate-report-page__tablet-content-container">
              <div className="my-documents-candidate-report-page__tablet-client-name-container">
                <label
                  className="my-documents-candidate-report-page__tablet-client-name-label"
                  htmlFor="tablet-client-name"
                >
                  Client Name
                </label>
                <input
                  className="my-documents-candidate-report-page__tablet-client-name-input"
                  type="text"
                />
              </div>
              <div className="my-documents-candidate-report-page__tablet-job-title-container">
                <label
                  className="my-documents-candidate-report-page__tablet-job-title-label"
                  htmlFor="tablet-job-title"
                >
                  Job Title
                </label>
                <input
                  className="my-documents-candidate-report-page__tablet-job-title-input"
                  type="text"
                />
              </div>
              <div className="my-documents-candidate-report-page__tablet-job-type-job-status-environment-container">
                <div className="my-documents-candidate-report-page__tablet-job-type-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-job-type-label"
                    htmlFor="tablet-job-type"
                  >
                    Job Type
                  </label>
                  <select
                    className="my-documents-candidate-report-page__tablet-job-type-select"
                    name="tablet-job-type"
                    id="tablet-job-type"
                  >
                    <option value="full-time" disabled selected>
                      Full Time
                    </option>
                    <option value="part-time">Part Time</option>
                    <option value="contract">Contract</option>
                    <option value="traveling">Traveling</option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__tablet-job-status-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-job-status"
                    htmlFor="tablet-job-status"
                  >
                    Job Status
                  </label>
                  <select
                    className="my-documents-candidate-report-page__tablet-job-status-select"
                    name="tablet-job-status"
                    id="tablet-job-status"
                  >
                    <option value="expiring-soon" disabled selected>
                      Expiring Soon
                    </option>
                    <option value="new job">New Job</option>
                    <option value="hot job">Hot Job</option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__tablet-environment-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-environment-label"
                    htmlFor="tablet-environment"
                  >
                    Environment
                  </label>
                  <select
                    className="my-documents-candidate-report-page__tablet-environment-select"
                    name="tablet-environment"
                    id="tablet-environment"
                  >
                    <option value="on-site" disabled selected>
                      On-Site
                    </option>
                    <option value="remote">Remote</option>
                    <option value="traveling">Traveling</option>
                  </select>
                </div>
              </div>
              <div className="my-documents-candidate-report-page__tablet-industry-city-container">
                <div className="my-documents-candidate-report-page__tablet-industry-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-industry-label"
                    htmlFor="tablet-industry"
                  >
                    Industry
                  </label>
                  <select
                    className="my-documents-candidate-report-page__tablet-industry-select"
                    name="tablet-industry"
                    id="tablet-industry"
                  >
                    <option
                      value="professional-services-consulting"
                      disabled
                      selected
                    >
                      Professional Services/Consulting
                    </option>
                    <option value="aerospace-defense">
                      Aerospace and Defense
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
                    <option value="telecommunications">
                      Telecommunications
                    </option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__tablet-city-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-city-label"
                    htmlFor="tablet-city"
                  >
                    City
                  </label>
                  <input
                    className="my-documents-candidate-report-page__tablet-city-input"
                    type="text"
                    id="tablet-city"
                  />
                </div>
              </div>
              <div className="my-documents-candidate-report-page__tablet-state-country-zip-code-container">
                <div className="my-documents-candidate-report-page__tablet-state-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-state-label"
                    htmlFor="tablet-state-label"
                  >
                    State
                  </label>
                  <select
                    className="my-documents-candidate-report-page__tablet-state-select"
                    name="tablet-state"
                    id="tablet-state"
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
                <div className="my-documents-candidate-report-page__tablet-country-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-country-label"
                    htmlFor="tablet-country"
                  >
                    Country
                  </label>
                  <select
                    className="my-documents-candidate-report-page__tablet-country-select"
                    name="tablet-country"
                    id="tablet-country"
                  >
                    <option value="USA" disabled selected>
                      USA
                    </option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Spain">Spain</option>
                    <option value="Germany">Germany</option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__tablet-zip-code-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-zip-code-label"
                    htmlFor="tablet-zip-code"
                  >
                    Zip Code
                  </label>
                  <input
                    className="my-documents-candidate-report-page__tablet-zip-code-input"
                    type="text"
                    id="tablet-zip-code"
                  />
                </div>
              </div>
              <div className="my-documents-candidate-report-page__tablet-number-of-openings-citizenship-experience-required-container">
                <div className="my-documents-candidate-report-page__tablet-number-of-openings-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-number-of-openings-label"
                    htmlFor="tablet-number-of-openings"
                  >
                    Number of Openings
                  </label>
                  <select
                    className="my-documents-candidate-report-page__tablet-number-of-openings-select"
                    name="tablet-number-of-openings"
                    id="tablet-number-of-openings"
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
                <div className="my-documents-candidate-report-page__tablet-citizenship-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-citizenship-label"
                    htmlFor="tablet-citizenship"
                  >
                    Citizenship/Type of VISA
                  </label>
                  <select
                    className="my-documents-candidate-report-page__tablet-citizenship-select"
                    name="tablet-citizenship"
                    id="tablet-citizenship"
                  >
                    <option value="VISA" disabled selected>
                      VISA
                    </option>
                    <option value="US Citizen">US Citizen</option>
                    <option value="Permanent Resident">
                      Permanent Resident
                    </option>
                    <option value="OPT">OPT</option>
                    <option value="H1B">H1B</option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__tablet-experience-required-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-experience-required-label"
                    htmlFor="tablet-experience-required"
                  >
                    Experience Required
                  </label>
                  <select
                    className="my-documents-candidate-report-page__tablet-experience-required-select"
                    name="tablet-experience-required"
                    id="tablet-experience-required"
                  >
                    <option value="3 - 5 years" disabled selected>
                      3 - 5 years
                    </option>
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
              </div>
              <div className="my-documents-candidate-report-page__tablet-start-date-salary-type-salary-range-container">
                <div className="my-documents-candidate-report-page__tablet-start-date-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-start-date-label"
                    htmlFor="tablet-start-date"
                  >
                    Start Date
                  </label>
                  <select
                    className="my-documents-candidate-report-page__tablet-start-date-select"
                    name="tablet-start-date"
                    id="tablet-start-date"
                  >
                    <option value="01/01/25" disabled selected>
                      01/01/25
                    </option>
                    <option value="01/02/25">01/02/25</option>
                    <option value="01/03/25">01/03/25</option>
                    <option value="01/04/25">01/04/25</option>
                    <option value="01/05/25"></option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__tablet-salary-type-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-salary-type-label"
                    htmlFor="tablet-salary-type"
                  >
                    Salary Type
                  </label>
                  <select
                    className="my-documents-candidate-report-page__tablet-salary-type-select"
                    name="tablet-salary-type"
                    id="tablet-salary-type"
                  >
                    <option value="salary-type" disabled selected>
                      Yearly
                    </option>
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__tablet-salary-range-first-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-salary-range-first-label"
                    htmlFor="tablet-salary-range-first"
                  >
                    Salary Range
                  </label>
                  <select
                    className="my-documents-candidate-report-page__tablet-salary-range-first-select"
                    name="tablet-salary-range-first"
                    id="tablet-salary-range-first"
                  >
                    <option value="0" disabled selected>
                      0
                    </option>
                    <option value="50,000">50,000</option>
                    <option value="100,000">100,000</option>
                    <option value="150,000">150,000</option>
                    <option value="200,000">200,000</option>
                    <option value="250,000">250,000</option>
                    <option value="500,000+">500,000+</option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__tablet-salary-range-second-container">
                  <select
                    className="my-documents-candidate-report-page__tablet-salary-range-second-select"
                    name="tablet-salary-range-second"
                    id="tablet-salary-range-second"
                  >
                    <option value="50,000">50,000</option>
                    <option value="100,000">100,000</option>
                    <option value="150,000">150,000</option>
                    <option value="200,000">200,000</option>
                    <option value="250,000">250,000</option>
                    <option value="500,000">500,000</option>
                    <option value="500,000+">500,000+</option>
                  </select>
                </div>
              </div>
              <div className="my-documents-candidate-report-page__tablet-fee-type-fee-negotiable-guarantee-period-travel-required-container">
                <div className="my-documents-candidate-report-page__tablet-fee-type-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-fee-type-label"
                    htmlFor="tablet-fee-type"
                  >
                    Fee Type
                  </label>
                  <select
                    className="my-documents-candidate-report-page__tablet-fee-type-select"
                    name="tablet-fee-type"
                    id="tablet-fee-type"
                  >
                    <option disabled selected value="0% / 100%">
                      0% / 100%
                    </option>
                    <option value="25% / 75%">25% / 75%</option>
                    <option value="50% / 50%">50% / 50%</option>
                    <option value="75% / 25%">75% / 25%</option>
                    <option value="100% / 0%">100% / 0%</option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__tablet-fee-negotiable-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-fee-negotiable-label"
                    htmlFor="'tablet-fee-negotiable"
                  >
                    Fee Negotiable
                  </label>
                  <select
                    className="my-documents-candidate-report-page__tablet-fee-negotiable-select"
                    name="tablet-fee-negotiable"
                    id="tablet-fee-negotiable"
                  >
                    <option value="yes" disabled selected>
                      Yes
                    </option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__tablet-guarantee-period-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-guarantee-period-label"
                    htmlFor="tablet-guarantee-period"
                  >
                    Guarantee Period
                  </label>
                  <select
                    className="my-documents-candidate-report-page__tablet-guarantee-period-select"
                    name="tablet-guarantee-period"
                    id="tablet-guarantee-period"
                  >
                    <option value="guarantee-period" disabled selected>
                      30 days
                    </option>
                    <option value="0 days">0 days</option>
                    <option value="1 week">1 week</option>
                    <option value="2 weeks">2 weeks</option>
                    <option value="3 weeks">3 weeks</option>
                    <option value="1 month">1 month</option>
                    <option value="2 months">2 months</option>
                    <option value="6 months">6 months</option>
                    <option value="1 year">1 year</option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__tablet-travel-required-container">
                  <label
                    className="my-documents-candidate-report-page__tablet-travel-required"
                    htmlFor="tablet-travel-required"
                  >
                    Travel Required
                  </label>
                  <select
                    className="my-documents-candidate-report-page__tablet-travel-required-select"
                    name="tablet-travel-required"
                    id="tablet-travel-required"
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
              <button
                onClick={handleGenerateReport}
                className="my-documents-candidate-report-page__generate-report-button"
              >
                Generate Report
              </button>
            </div>
          </div>
          <div className="my-documents-candidate-report-page__desktop-central-container">
            <GenerateReportOptions />
            <div className="my-documents-candidate-report-page__desktop-content-container">
              <div className="my-documents-candidate-report-page__desktop-name-job-type-title-container">
                <div className="my-documents-candidate-report-page__desktop-name-container">
                  <label
                    className="my-documents-candidate-report-page__desktop-name-label"
                    htmlFor="desktop-name"
                  >
                    Name
                  </label>
                  <input
                    className="my-documents-candidate-report-page__desktop-name-input"
                    type="text"
                    id="desktop-name"
                  />
                </div>
                <div className="my-documents-candidate-report-page__desktop-job-type-container">
                  <label
                    className="my-documents-candidate-report-page__desktop-job-type-label"
                    htmlFor="desktop-job-type"
                  >
                    Job Type
                  </label>
                  <select
                    className="my-documents-candidate-report-page__desktop-job-type-select"
                    name="desktop-job-type"
                    id="desktop-job-type"
                  >
                    <option value="" disabled selected>
                      Full Time
                    </option>

                    <option value="part-time">Part Time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__desktop-title-container">
                  <label
                    className="my-documents-candidate-report-page__desktop-title-label"
                    htmlFor="desktop-title"
                  >
                    Title
                  </label>
                  <input
                    className="my-documents-candidate-report-page__desktop-title-input"
                    type="text"
                    id="desktop-title"
                  />
                </div>
              </div>
              <div className="my-documents-candidate-report-page__desktop-experience-environment-industry-container">
                <div className="my-documents-candidate-report-page__desktop-experience-container">
                  <label
                    className="my-documents-candidate-report-page__desktop-experience-label"
                    htmlFor="desktop-experience"
                  >
                    Experience
                  </label>
                  <select
                    className="my-documents-candidate-report-page__desktop-experience-select"
                    name="desktop-experience"
                    id="desktop-experience"
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
                <div className="my-documents-candidate-report-page__desktop-environment-container">
                  <label
                    className="my-documents-candidate-report-page__desktop-environment-label"
                    htmlFor="desktop-environment"
                  >
                    Environment
                  </label>
                  <select
                    className="my-documents-candidate-report-page__desktop-environment-select"
                    name="desktop-environment"
                    id="desktop-environment"
                  >
                    <option value="on-site" disabled selected>
                      On-Site
                    </option>
                    <option value="remote">Remote</option>
                    <option value="traveling">Traveling</option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__desktop-industry-container">
                  <label
                    className="my-documents-candidate-report-page__desktop-industry-label"
                    htmlFor="desktop-industry"
                  >
                    Industry
                  </label>
                  <select
                    className="my-documents-candidate-report-page__desktop-industry-select"
                    name="desktop-industry"
                    id="desktop-industry"
                  >
                    <option
                      value="professional-services-consulting"
                      disabled
                      selected
                    >
                      Professional Services/Consulting
                    </option>
                    <option value="aerospace-defense">
                      Aerospace and Defense
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
                    <option value="telecommunications">
                      Telecommunications
                    </option>
                  </select>
                </div>
              </div>
              <div className="my-documents-candidate-report-page__desktop-city-state-country-zip-code-container">
                <div className="my-documents-candidate-report-page__desktop-city-container">
                  <label
                    className="my-documents-candidate-report-page__desktop-city-label"
                    htmlFor="desktop-city"
                  >
                    City
                  </label>
                  <input
                    className="my-documents-candidate-report-page__desktop-city-input"
                    type="text"
                  />
                </div>
                <div className="my-documents-candidate-report-page__desktop-state-container">
                  <label
                    className="my-documents-candidate-report-page__desktop-state-label"
                    htmlFor="desktop-state"
                  >
                    State
                  </label>
                  <select
                    className="my-documents-candidate-report-page__desktop-state-select"
                    name="desktop-state"
                    id="desktop-state"
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
                <div className="my-documents-candidate-report-page__desktop-country-container">
                  <label
                    className="my-documents-candidate-report-page__desktop-country-label"
                    htmlFor="desktop-country"
                  >
                    Country
                  </label>
                  <select
                    className="my-documents-candidate-report-page__desktop-country-select"
                    name="desktop-country"
                    id="desktop-country"
                  >
                    <option value="USA" disabled selected>
                      USA
                    </option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Spain">Spain</option>
                    <option value="Germany">Germany</option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__desktop-zip-code-container">
                  <label
                    className="my-documents-candidate-report-page__desktop-zip-code-label"
                    htmlFor="desktop-zip-code"
                  >
                    Zip Code
                  </label>
                  <input
                    className="my-documents-candidate-report-page__desktop-zip-code-input"
                    type="text"
                    id="desktop-zip-code"
                  />
                </div>
              </div>
              <div className="my-documents-candidate-report-page__desktop-email-citizenship-willing-to-travel-container">
                <div className="my-documents-candidate-report-page__desktop-email-container">
                  <label
                    className="my-documents-candidate-report-page__desktop-email-label"
                    htmlFor="desktop-email"
                  >
                    Email
                  </label>
                  <input
                    className="my-documents-candidate-report-page__desktop-email-input"
                    type="text"
                  />
                </div>
                <div className="my-documents-candidate-report-page__desktop-citizenship-container">
                  <label
                    className="my-documents-candidate-report-page__desktop-citizenship-label"
                    htmlFor="desktop-citizenship"
                  >
                    Citizenship/Type of VISA
                  </label>
                  <select
                    className="my-documents-candidate-report-page__desktop-citizenship-select"
                    name="desktop-citizenship"
                    id="desktop-citizenship"
                  >
                    <option value="VISA" disabled selected>
                      VISA
                    </option>
                    <option value="US Citizen">US Citizen</option>
                    <option value="Permanent Resident">
                      Permanent Resident
                    </option>
                    <option value="OPT">OPT</option>
                    <option value="H1B">H1B</option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__desktop-willing-to-travel-container">
                  <label
                    className="my-documents-candidate-report-page__desktop-willing-to-travel-label"
                    htmlFor="desktop-willing-to-travel"
                  >
                    Willing to travel
                  </label>
                  <select
                    className="my-documents-candidate-report-page__desktop-willing-to-travel-select"
                    name="desktop-willing-to-travel"
                    id="desktop-willing-to-travel"
                  >
                    <option value="yes" disabled selected>
                      Yes
                    </option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
              <div className="my-documents-candidate-report-page__desktop-availability-date-salary-type-salary-range-container">
                <div className="my-documents-candidate-report-page__desktop-availability-date-container">
                  <label
                    className="my-documents-candidate-report-page__desktop-availability-date-label"
                    htmlFor="desktop-availability-date"
                  >
                    Availability Date
                  </label>
                  <select
                    className="my-documents-candidate-report-page__desktop-availability-date-select"
                    name="desktop-availability-date"
                    id="desktop-availability-date"
                  >
                    <option value="01/01/25" disabled selected>
                      01/01/25
                    </option>
                    <option value="01/02/25">01/02/25</option>
                    <option value="01/03/25">01/03/25</option>
                    <option value="01/04/25">01/04/25</option>
                    <option value="01/05/25">01/05/25</option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__desktop-salary-type-container">
                  <label
                    className="my-documents-candidate-report-page__desktop-salary-type-label"
                    htmlFor="desktop-salary-type"
                  >
                    Salary Type
                  </label>
                  <select
                    className="my-documents-candidate-report-page__desktop-salary-type-select"
                    name="desktop-salary-type"
                    id="desktop-salary-type"
                  >
                    <option value="Yearly" disabled selected>
                      Yearly
                    </option>
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Biweekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                <div className="my-documents-candidate-report-page__desktop-salary-range-first-container">
                  <label
                    className="my-documents-candidate-report-page__desktop-salary-range-first-label"
                    htmlFor="desktop-salary-range-first"
                  >
                    Salary Range
                  </label>
                  <select
                    className="my-documents-candidate-report-page__desktop-salary-range-first-select"
                    name="desktop-salary-range-first"
                    id="desktop-salary-range-first"
                  >
                    <option value="0" disabled selected>
                      0
                    </option>
                    <option value="50,000">50,000</option>
                    <option value="100,000">100,000</option>
                    <option value="150,000">150,000</option>
                    <option value="200,000">200,000</option>
                    <option value="250,000">250,000</option>
                    <option value="500,000">500,000</option>
                    <option value="500,000+">500,000+</option>
                  </select>
                </div>
                <span className="my-documents-candidate-report-page__desktop-salary-range-dash">
                  -
                </span>
                <div className="my-documents-candidate-report-page__desktop-salary-range-second-container">
                  <select
                    className="my-documents-candidate-report-page__desktop-salary-range-second-select"
                    name="salary-range-second"
                    id="salary-range-second"
                  >
                    <option value="50,000" disabled selected>
                      50,000
                    </option>
                    <option value="100,000">100,000</option>
                    <option value="150,000">150,000</option>
                    <option value="200,000">200,000</option>
                    <option value="250,000">250,000</option>
                    <option value="500,000">500,000</option>
                    <option value="500,000+">500,000+</option>
                  </select>
                </div>
              </div>
              <button
                onClick={handleGenerateReport}
                className="my-documents-candidate-report-page__desktop-generate-report-button"
              >
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && <ModalGenerateReport closeModal={closeModal} />}
    </div>
  );
}
