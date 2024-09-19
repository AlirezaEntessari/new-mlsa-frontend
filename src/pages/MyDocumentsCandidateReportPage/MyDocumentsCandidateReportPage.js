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
                <input className="my-documents-candidate-report-page__mobile-title-input" name="mobile-title" id="mobile-title" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
