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
          </div>
        </div>
      </div>
    </div>
  );
}
