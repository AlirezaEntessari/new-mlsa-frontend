import React from "react";
import "./MyJobsPostJobPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import JobsSidePanel from "../../components/JobsSidePanel/JobsSidePanel";
import ValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";
import OnHoldHotButtonOffIcon from "../../assets/icons/Onholdhotbuttonoff.svg";
import HotOffIcon from "../../assets/icons/HotOff.svg";
import OnHoldOffIcon from "../../assets/icons/OnHoldOff.svg";

export default function MyJobsPostJobPage() {
  return (
    <div className="my-jobs-post-job-page">
      <HeaderWithProfilePic />
      <div className="my-jobs-post-job-page__main-container">
        <JobsSidePanel />
        <div className="my-jobs-post-job-page__right-container">
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
            *Client Name will not be shared without NDA or Partnership Agreement
            being signed by both parties.
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
                <option value="power-and-utilities">Power and Utilities</option>
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
        </div>
      </div>
    </div>
  );
}
