import React, { useState } from "react";
import "./MyDocumentsPartnershipReportPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import DocumentsSidePanel from "../../components/DocumentsSidePanel/DocumentsSidePanel";
import GenerateReportHeader from "../../components/GenerateReportHeader/GenerateReportHeader";
import GenerateReportOptions from "../../components/GenerateReportOptions/GenerateReportOptions";
import ModalGenerateReport from "../../components/ModalGenerateReport/ModalGenerateReport";

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
            <div className="my-documents-candidate-report-page__mobile-active-partnerships-container">
              <label
                className="my-documents-candidate-report-page__mobile-active-partnerships-label"
                htmlFor="mobile-active-partnerships"
              >
                Active Partnerships
              </label>
              <select
                className="my-documents-candidate-report-page__mobile-active-partnerships-select"
                name="mobile-active-partnerships"
                id="mobile-active-partnerships"
              >
                <option value="most placements" disabled selected>Most Placements</option>
                <option value="fewest placements">Fewest Placements</option>
                <option value="medium placements">Medium Placements</option>
              </select>
            </div>
            <div className="my-documents-candidate-report-page__mobile-rejected-requests-container">
                <label className="my-documents-candidate-report-page__mobile-rejected-requests" htmlFor="mobile-rejected-requests">Rejected Requests</label>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
