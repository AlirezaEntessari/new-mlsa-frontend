import React from "react";
import "./MyJobsJobDescriptionUploadPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import JobsSidePanel from "../../components/JobsSidePanel/JobsSidePanel";

export default function MyJobsJobDescriptionUploadPage() {
  return (
    <div className="my-jobs-job-description-upload-page">
      <HeaderWithProfilePic />
      <div className="my-jobs-job-description-upload-page__main-container">
        <JobsSidePanel />
        <div className="my-jobs-job-description-upload-page__right-container">
          <p className="my-jobs-job-description-upload-page__header">My Jobs</p>
          <div className="my-jobs-job-description-upload-page__job-description-upload-container">
            <p className="my-jobs-job-description-upload-page__job-description-upload-header">
              Job Description Upload
            </p>
            <p className="my-jobs-job-description-upload-page__job-description-upload-text">
              Job Description Uploading supports the following file types: DOC,
              DOCX, CSV, PDF, TXT
            </p>
            <div className="my-jobs-job-description-upload-page__drag-your-file-container">
              <p className="my-jobs-job-description-upload-page__drag-your-file-text">
                Drag your file here or select a file from your computer
              </p>
            </div>
            <button className="my-jobs-job-description-upload-page__select-a-file-from-computer-button">
              Select a file from Computer
            </button>
            <div className="my-jobs-job-description-upload-page__footer-button-container">
              <button className="my-jobs-job-description-upload-page__upload-button">
                Upload
              </button>
              <button className="my-jobs-job-description-upload-page__cancel-button">
                Cancel
              </button>
            </div>
          </div>
          <p className="my-jobs-job-description-upload-page__download-job-description-template-text">
            <p className="my-jobs-job-description-upload-page__download-job-description-template-first-line">
              Download Job Description Template
            </p>
            <p className="my-jobs-job-description-upload-page__download-job-description-template-second-line">
              <span className="my-jobs-job-description-upload-page__download-job-description-template-text">
                Template
              </span>
              <span className="my-jobs-job-description-upload-page__download-job-description-docx-file">
                (DOCX file)
              </span>
            </p>
          </p>
          <p className="my-jobs-job-description-upload-page__tablet-download-job-description-template-text">
            Download Job Description Template{" "}
            <span className="my-jobs-job-description-upload-page__tablet-download-job-description-docx-file">
              (DOCX file)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
