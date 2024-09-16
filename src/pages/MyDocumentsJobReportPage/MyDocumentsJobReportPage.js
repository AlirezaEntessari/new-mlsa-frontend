import React from "react";
import "./MyDocumentsJobReportPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import DocumentsSidePanel from "../../components/DocumentsSidePanel/DocumentsSidePanel";
import GenerateReportHeader from "../../components/GenerateReportHeader/GenerateReportHeader";
import GenerateReportOptions from "../../components/GenerateReportOptions/GenerateReportOptions";

export default function MyDocumentsJobReportPage() {
  return (
    <div className="my-documents-job-report-page">
      <HeaderWithProfilePic />
      <div className="my-documents-job-report-page__main-container">
        <DocumentsSidePanel />
        <div className="my-documents-job-report-page__right-container">
          <p className="my-documents-job-report-page__header">My Documents</p>
          <GenerateReportHeader />
          <GenerateReportOptions />
          <div className="my-documents-job-report-page__central-container">
            <label
              className="my-documents-job-report-page__client-name-label"
              htmlFor="client-name"
            >
              Client Name
            </label>
            <input
              className="my-documents-job-report-page__client-name-input"
              type="text"
              id="client-name"
            />
            <div className="my-documents-job-report-page__job-container">
              <div className="my-documents-job-report-page__job-type-container">
                <label
                  className="my-documents-job-report-page__job-type-label"
                  htmlFor="job-type"
                >
                  Job Type
                </label>
                <select
                  className="my-documents-job-report-page__job-type-select"
                  name="job-type"
                  id="job-type"
                >
                  <option value="" disabled selected>
                    Full Time
                  </option>

                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
              <div className="my-documents-job-report-page__job-status-container">
                <label
                  className="my-documents-job-report-page__job-status-label"
                  htmlFor="job-status"
                >
                  Job Status
                </label>
                <select
                  className="my-documents-job-report-page__job-status-select"
                  name="job-status"
                  id="job-status"
                >
                  <option value="expiring-soon" disabled selected>
                    Expiring Soon
                  </option>
                  <option value="new">New</option>
                  <option value="hot-job">Hot Job</option>
                </select>
              </div>
            </div>
            <div className="my-documents-job-report-page__job-title-environment-container">
              <div className="my-documents-job-report-page__job-title-container">
                <label
                  className="my-documents-job-report-page__job-title-label"
                  htmlFor="job-title"
                >
                  Job Title
                </label>
                <input
                  className="my-documents-job-report-page__job-title-input"
                  type="text"
                  id="job-title"
                />
              </div>
              <div className="my-documents-job-report-page__environment-container">
                <label
                  className="my-documents-job-report-page__environment-label"
                  htmlFor="environment"
                >
                  Environment
                </label>
                <select
                  className="my-documents-job-report-page__environment-select"
                  name="environment"
                  id="environment"
                >
                  <option value="on-site" disabled selected>
                    On-Site
                  </option>
                  <option value="remote">Remote</option>
                  <option value="traveling">Traveling</option>
                </select>
              </div>
            </div>
            <div className="my-documents-job-report-page__industry-container">
              <label
                className="my-documents-job-report-page__industry-label"
                htmlFor="industry"
              >
                Industry
              </label>
              <select
                className="my-documents-job-report-page__industry-select"
                name="industry"
                id="industry"
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
            <div className="my-documents-job-report-page__location-container">
              <div className="my-documents-job-report-page__city-container">
                <label
                  className="my-documents-job-report-page__city-label"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  className="my-documents-job-report-page__city-input"
                  type="text"
                />
              </div>
              <div className="my-documents-job-report-page__state-container">
                <label
                  className="my-documents-job-report-page__state-label"
                  htmlFor="state"
                >
                  State
                </label>
                <select
                  className="my-documents-job-report-page__state-select"
                  name="state"
                  id="state"
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
          </div>
        </div>
      </div>
    </div>
  );
}
