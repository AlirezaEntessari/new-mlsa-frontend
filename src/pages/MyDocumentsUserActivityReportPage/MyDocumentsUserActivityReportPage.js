import React, { useState } from "react";
import "./MyDocumentsUserActivityReportPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import DocumentsSidePanel from "../../components/DocumentsSidePanel/DocumentsSidePanel";
import GenerateReportHeader from "../../components/GenerateReportHeader/GenerateReportHeader";
import GenerateReportOptions from "../../components/GenerateReportOptions/GenerateReportOptions";
import ModalGenerateReport from "../../components/ModalGenerateReport/ModalGenerateReport";

export default function MyDocumentsUserActivityReportPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleGenerateReport = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="my-documents-user-activity-report-page">
      <HeaderWithProfilePic />
      <div className="my-documents-user-activity-report-page__main-container">
        <DocumentsSidePanel />
        <div className="my-documents-user-activity-report-page__right-container">
          <p className="my-documents-user-activity-report-page__header">
            My Documents
          </p>
          <div className="my-documents-user-activity-report-page__mobile-report-container">
            <GenerateReportHeader />
            <GenerateReportOptions />
          </div>
          <div className="my-documents-user-activity-report-page__mobile-central-container">
            <div className="my-documents-user-activity-report-page__mobile-daily-activity-container">
              <label
                className="my-documents-user-activity-report-page__mobile-daily-activity-label"
                htmlFor="mobile-daily-activity"
              >
                Daily Activity
              </label>
              <select
                className="my-documents-user-activity-report-page__mobile-daily-activity-select"
                name="mobile-daily-activity"
                id="mobile-daily-activity"
              >
                <option value="all users">All Users</option>
                <option value="0 users">0 users</option>
                <option value="5 users">5 users</option>
                <option value="10 users">10 users</option>
                <option value="25 users">25 users</option>
                <option value="50 users">50 users</option>
                <option value="100 users">100 users</option>
              </select>
            </div>
            <div className="my-documents-user-activity-report-page__mobile-keyword-container">
              <label
                className="my-documents-user-activity-report-page__mobile-keyword-label"
                htmlFor="mobile-keyword"
              >
                Keyword
              </label>
              <input
                className="my-documents-user-activity-report-page__mobile-keyword-input"
                type="text"
                id="mobile-keyword"
                placeholder="Enter Keyword"
              />
            </div>
            <div className="my-documents-user-activity-report-page__mobile-user-name-container">
              <label
                className="my-documents-user-activity-report-page__mobile-user-name-label"
                htmlFor="mobile-user-name"
              >
                User Name
              </label>
              <select
                className="my-documents-user-activity-report-page__mobile-user-name-select"
                name="mobile-user-name"
                id="mobile-user-name"
              >
                <option value="Jane Matthews" disabled selected>
                  Jane Matthews
                </option>
                <option value="Thomas Smith">Thomas Smith</option>
                <option value="Josephine Harris">Josephine Harris</option>
                <option value="Frasier Thompson">Frasier Thompson</option>
                <option value="Paulina White">Paulina White</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
