import React from "react";
import "./MyCandidatesBatchUploadPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import CandidatesSidePanel from "../../components/CandidatesSidePanel/CandidatesSidePanel";

export default function MyCandidatesBatchUploadPage() {
  return (
    <div className="my-candidates-batch-upload-page">
      <HeaderWithProfilePic />
      <div className="my-candidates-batch-upload-page__main-container">
        <CandidatesSidePanel />
        <div className="my-candidates-batch-upload-page__right-container">
          <p className="my-candidates-batch-upload-page__header">My Candidates</p>
          <div className="my-candidates-batch-upload-page__batch-upload-container">
            <p className="my-candidates-batch-upload-page__batch-upload-header">
              Batch Upload
            </p>
            <p className="my-candidates-batch-upload-page__batch-upload-container-central-text">
              Batch Uploading supports the following file types: XLSX, XML,
              JSON, Fixed Width, CSV, Google Sheets
            </p>
            <p className="my-candidates-batch-upload-page__batch-upload-container-drag-a-file">
              Drag your file here or select a file from your computer
            </p>
            <button className="my-candidates-batch-upload-page__select-a-file-from-computer-button">
              Select a file from Computer
            </button>
            <div className="my-candidates-batch-upload-page__batch-upload-button-container">
              <button className="my-candidates-batch-upload-page__upload-button">
                Upload
              </button>
              <button className="my-candidates-batch-upload-page__cancel-button">
                Cancel
              </button>
            </div>
          </div>
          <p className="my-candidates-batch-upload-page__download-batch-container">
            <span className="my-candidates-batch-upload-page__download-batch-text">
              Download Batch
            </span>
            <div className="my-candidates-batch-upload-page__upload-template-xlsx-container">
              <span className="my-candidates-batch-upload-page__upload-template-text">
                Upload Template
              </span>
              <span className="my-candidates-batch-upload-page__xlsx-text">
                (XLSX file)
              </span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
