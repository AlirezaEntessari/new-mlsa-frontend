import React from "react";
import "./MyJobsBatchUploadPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import JobsSidePanel from "../../components/JobsSidePanel/JobsSidePanel";

export default function MyJobsBatchUploadPage() {
  return (
    <div className="my-jobs-batch-upload-page">
      <HeaderWithProfilePic />
      <div className="my-jobs-batch-upload-page__main-container">
        <JobsSidePanel />
        <div className="my-jobs-batch-upload-page__right-container">
          <p className="my-jobs-batch-upload-page__header">My Jobs</p>
          <div className="my-jobs-batch-upload-page__batch-upload-container">
            <p className="my-jobs-batch-upload-page__batch-upload-header">
              Batch Upload
            </p>
            <p className="my-jobs-batch-upload-page__batch-upload-container-central-text">
              Batch Uploading supports the following file types: XLSX, XML,
              JSON, Fixed Width, CSV, Google Sheets
            </p>
            <p className="my-jobs-batch-upload-page__batch-upload-container-drag-a-file">
              Drag your file here or select a file from your computer
            </p>
            <button className="my-jobs-batch-upload-page__select-a-file-from-computer-button">
              Select a file from Computer
            </button>
            <div className="my-jobs-batch-upload-page__batch-upload-button-container">
              <button className="my-jobs-batch-upload-page__upload-button">
                Upload
              </button>
              <button className="my-jobs-batch-upload-page__cancel-button">
                Cancel
              </button>
            </div>
          </div>
          <p className="my-jobs-batch-upload-page__download-batch-container">
            <span className="my-jobs-batch-upload-page__download-batch-text">
              Download Batch
            </span>
            <div className="my-jobs-batch-upload-page__upload-template-xlsx-container">
              <span className="my-jobs-batch-upload-page__upload-template-text">
                Upload Template
              </span>
              <span className="my-jobs-batch-upload-page__xlsx-text">
                (XLSX file)
              </span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
