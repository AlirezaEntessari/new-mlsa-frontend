import React, { useState } from "react";
import "./MyDocumentsPartnershipReportPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import DocumentsSidePanel from "../../components/DocumentsSidePanel/DocumentsSidePanel";
import GenerateReportHeader from "../../components/GenerateReportHeader/GenerateReportHeader";
import GenerateReportOptions from "../../components/GenerateReportOptions/GenerateReportOptions";
import ModalGenerateReport from "../../components/ModalGenerateReport/ModalGenerateReport";
import CircleButtonOffGrayIcon from "../../assets/icons/CircleButtonOffGray (1).svg";
import CircleButtonOnBlueIcon from "../../assets/icons/CircleButtonOnBlue.svg";

export default function MyDocumentsPartnershipReportPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleGenerateReport = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="my-documents-partnership-report-page">
      <HeaderWithProfilePic />
      <div className="my-documents-partnership-report-page__main-container">
        <DocumentsSidePanel />
        <div className="my-documents-partnership-report-page__right-container">
          <p className="my-documents-partnership-report-page__header">
            My Documents
          </p>
          <div className="my-documents-partnership-report-page__mobile-report-container">
            <GenerateReportHeader />
            <GenerateReportOptions />
          </div>
          <div className="my-documents-partnership-report-page__mobile-central-container">
            <div className="my-documents-partnership-report-page__mobile-active-partnerships-container">
              <label
                className="my-documents-partnership-report-page__mobile-active-partnerships-label"
                htmlFor="mobile-active-partnerships"
              >
                Active Partnerships
              </label>
              <select
                className="my-documents-partnership-report-page__mobile-active-partnerships-select"
                name="mobile-active-partnerships"
                id="mobile-active-partnerships"
              >
                <option value="most placements" disabled selected>
                  Most Placements
                </option>
                <option value="fewest placements">Fewest Placements</option>
                <option value="medium placements">Medium Placements</option>
              </select>
            </div>
            <div className="my-documents-partnership-report-page__mobile-rejected-requests-container">
              <label
                className="my-documents-partnership-report-page__mobile-rejected-requests-label"
                htmlFor="mobile-rejected-requests"
              >
                Rejected Requests
              </label>
              <select
                className="my-documents-partnership-report-page__mobile-rejected-requests-select"
                name="mobile-rejected-requests"
                id="mobile-rejected-requests"
              >
                <option value="rejected by another agency" disabled selected>
                  Rejected by Another Agency
                </option>
                <option value="rejected by multiple agencies">
                  Rejected by Multiple Agencies
                </option>
              </select>
            </div>
            <div className="my-documents-partnership-report-page__mobile-terminated-partnerships-container">
              <label
                className="my-documents-partnership-report-page__mobile-terminated-partnerships-label"
                htmlFor="mobile-terminated-partnerships"
              >
                Terminated Partnerships
              </label>
              <select
                className="my-documents-partnership-report-page__mobile-terminated-partnerships-select"
                name="mobile-terminated-partnerships"
                id="mobile-terminated-partnerships"
              >
                <option value="terminated by another agency" disabled selected>
                  Terminated by Another Agency
                </option>
                <option value="terminated by multiple agencies">
                  Terminated by Multiple Agencies
                </option>
              </select>
            </div>
            <div className="my-documents-partnership-report-page__mobile-partnership-requests-sent-container">
              <img
                className="my-documents-partnership-report-page__circle-button-on-blue-icon"
                src={CircleButtonOnBlueIcon}
                alt="Circle Button On Blue Icon"
              />
              <span className="my-documents-partnership-report-page__mobile-partnership-requests-sent-text">
                Partnership Requests Sent
              </span>
            </div>
            <div className="my-documents-partnership-report-page__mobile-partnership-requests-pending-container">
              <img
                className="my-documents-partnership-report-page__circle-button-off-gray-icon"
                src={CircleButtonOffGrayIcon}
                alt="Circle Button Off Gray Icon"
              />
              <span className="my-documents-partnership-report-page__mobile-partnership-requests-pending-text">
                Partnership Requests Pending
              </span>
            </div>
            <div className="my-documents-partnership-report-page__mobile-partnership-requests-received-container">
              <img
                className="my-documents-partnership-report-page__circle-button-off-gray-icon"
                src={CircleButtonOffGrayIcon}
                alt="Circle Button Off Gray Icon"
              />
              <span className="my-documents-partnership-report-page__mobile-partnership-requests-received-text">
                Partnership Requests Received
              </span>
            </div>
            <button
              onClick={handleGenerateReport}
              className="my-documents-partnership-report-page__mobile-generate-report-button"
            >
              Generate Report
            </button>
          </div>
          <div className="my-documents-partnership-report-page__tablet-desktop-generate-report-container">
            <GenerateReportHeader />
          </div>
          <div className="my-documents-partnership-report-page__tablet-central-container">
            <GenerateReportOptions />
            <div className="my-documents-partnership-report-page__tablet-content-container">
              <div className="my-documents-partnership-report-page__tablet-active-partnerships-rejected-requests-container">
                <div className="my-documents-partnership-report-page__tablet-active-partnerships-container">
                  <label
                    className="my-documents-partnership-report-page__tablet-active-partnerships-label"
                    htmlFor="tablet-active-partnerships"
                  >
                    Active Partnerships
                  </label>
                  <select
                    className="my-documents-partnership-report-page__tablet-active-partnerships-select"
                    name="tablet-active-partnerships"
                    id="tablet-active-partnerships"
                  >
                    <option value="most placements" disabled selected>
                      Most Placements
                    </option>
                    <option value="fewest placements">Fewest Placements</option>
                    <option value="medium placements">Medium Placements</option>
                  </select>
                </div>
                <div className="my-documents-partnership-report-page__tablet-rejected-requests-container">
                  <label
                    className="my-documents-partnership-report-page__tablet-rejected-requests-label"
                    htmlFor="tablet-rejected-requests"
                  >
                    Rejected Requests
                  </label>
                  <select
                    className="my-documents-partnership-report-page__tablet-rejected-requests-select"
                    name="tablet-rejected-requests"
                    id="tablet-rejected-requests"
                  >
                    <option
                      value="rejected by another agency"
                      disabled
                      selected
                    >
                      Rejected by Another Agency
                    </option>
                    <option value="rejected by multiple agencies">
                      Rejected by Multiple Agencies
                    </option>
                  </select>
                </div>
              </div>
              <div className="my-documents-partnership-report-page__tablet-terminated-partnerships-container">
                <label
                  className="my-documents-partnership-report-page__tablet-terminated-partnerships-label"
                  htmlFor="tablet-terminated-partnerships"
                >
                  Terminated Partnerships
                </label>
                <select
                  className="my-documents-partnership-report-page__tablet-terminated-partnerships-select"
                  name="tablet-terminated-partnerships"
                  id="tablet-terminated-partnerships"
                >
                  <option
                    value="terminated by another agency"
                    disabled
                    selected
                  >
                    Terminated by Another Agency
                  </option>
                  <option value="terminated by multiple agencies">
                    Terminated by Multiple Agencies
                  </option>
                </select>
              </div>
              <div className="my-documents-partnership-report-page__tablet-partnerships-container">
                <div className="my-documents-partnership-report-page__tablet-partnership-requests-container">
                  <img
                    className="my-documents-partnership-report-page__circle-button-on-blue-icon"
                    src={CircleButtonOnBlueIcon}
                    alt="Circle Button On Blue Icon"
                  />
                  <span className="my-documents-partnership-report-page__tablet-partnership-requests-sent-text">
                    Partnership Requests Sent
                  </span>
                </div>
                <div className="my-documents-partnership-report-page__tablet-partnership-requests-pending-container">
                  <img
                    className="my-documents-partnership-report-page__circle-button-off-gray-icon"
                    src={CircleButtonOffGrayIcon}
                    alt="Circle Button Off Gray Icon"
                  />
                  <span className="my-documents-partnership-report-page__tablet-partnership-requests-pending-text">
                    Partnership Requests Pending
                  </span>
                </div>
                <div className="my-documents-partnership-report-page__tablet-partnership-requests-received-container">
                  <img
                    className="my-documents-partnership-report-page__circle-button-off-gray-icon"
                    src={CircleButtonOffGrayIcon}
                    alt="Circle Button Off Gray Icon"
                  />
                  <span className="my-documents-partnership-report-page__tablet-partnership-requests-received-text">
                    Partnership Requests Received
                  </span>
                </div>
              </div>
              <button className="my-documents-partnership-report-page__tablet-generate-report-button">
                Generate Report
              </button>
            </div>
          </div>
          <div className="my-documents-partnership-report-page__desktop-central-container">
            <GenerateReportOptions />
            <div className="my-documents-partnership-report-page__desktop-content-container">
              <div className="my-documents-partnership-report-page__desktop-active-partnerships-rejected-requests-container">
                <div className="my-documents-partnership-report-page__desktop-active-partnerships-container">
                  <label
                    className="my-documents-partnership-report-page__desktop-active-partnerships-label"
                    htmlFor="desktop-active-partnerships"
                  >
                    Active Partnerships
                  </label>
                  <select
                    className="my-documents-partnership-report-page__desktop-active-partnerships-select"
                    name="desktop-active-partnerships"
                    id="desktop-active-partnerships"
                  >
                    <option value="most placements" disabled selected>
                      Most Placements
                    </option>
                    <option value="fewest placements">Fewest Placements</option>
                    <option value="medium placements">Medium Placements</option>
                  </select>
                </div>
                <div className="my-documents-partnership-report-page__desktop-rejected-requests-container">
                  <label
                    className="my-documents-partnership-report-page__desktop-rejected-requests-label"
                    htmlFor="desktop-rejected-requests"
                  >
                    Rejected Requests
                  </label>
                  <select
                    className="my-documents-partnership-report-page__desktop-rejected-requests-select"
                    name="desktop-rejected-requests"
                    id="desktop-rejected-requests"
                  >
                    <option
                      value="rejected by another agency"
                      disabled
                      selected
                    >
                      Rejected by Another Agency
                    </option>
                    <option value="rejected by multiple agencies">
                      Rejected by Multiple Agencies
                    </option>
                  </select>
                </div>
                <div className="my-documents-partnership-report-page__desktop-terminated-partnerships-partnership-choices-container">
                  <div className="my-documents-partnership-report-page__desktop-terminated-partnerships-container">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && <ModalGenerateReport closeModal={closeModal} />}
    </div>
  );
}
