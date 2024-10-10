import React from "react";
import "./MyJobsPostJobBatchUploadPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import JobsSidePanel from "../../components/JobsSidePanel/JobsSidePanel";

export default function MyJobsPostJobBatchUploadPage() {
  return (
    <div className="my-jobs-post-job-batch-upload-page">
      <HeaderWithProfilePic />
      <div className="my-jobs-post-job-batch-upload-page__main-container">
        <JobsSidePanel />
        <div className="my-jobs-post-job-batch-upload-page__right-container">
          <p className="my-jobs-post-job-batch-upload-page__header">My Jobs</p>
          <div className="my-jobs-post-job-batch-upload-page__batch-upload-container">
            <p className="my-jobs-post-job-batch-upload-page__batch-upload-header">
              Batch Upload
            </p>
            <p className="my-jobs-post-job-batch-upload-page__batch-upload-text">
              Batch Uploading supports the following file types: DOC,
              DOCX, CSV, PDF, TXT
            </p>
            <div className="my-jobs-post-job-batch-upload-page__drag-your-file-container">
              <p className="my-jobs-post-job-batch-upload-page__drag-your-file-text">
                Drag your file here or select a file from your computer
              </p>
            </div>
            <button className="my-jobs-post-job-batch-upload-page__select-a-file-from-computer-button">
              Select a file from Computer
            </button>
            <div className="my-jobs-post-job-batch-upload-page__footer-button-container">
              <button className="my-jobs-job-description-upload-page__upload-button">
                Upload
              </button>
              <button className="my-jobs-post-job-batch-upload-page__cancel-button">
                Cancel
              </button>
            </div>
          </div>
          <p className="my-jobs-post-job-batch-upload-page__download-batch-upload-template-text">
            <p className="my-jobs-post-job-batch-upload-page__download-batch-upload-template-first-line">
              Download Batch Upload Template
            </p>
            <p className="my-jobs-post-job-batch-upload-page__download-batch-upload-template-second-line">
              <span className="my-jobs-post-job-batch-upload-page__download-batch-upload-template-text">
                Template
              </span>
              <span className="my-jobs-post-job-batch-upload-page__download-batch-upload-docx-file">
                (DOCX file)
              </span>
            </p>
          </p>
          <p className="my-jobs-post-job-batch-upload-page__tablet-batch-upload-template-text">
            Download Batch Upload Template{" "}
            <span className="my-jobs-post-job-batch-upload-page__tablet-batch-upload-description-docx-file">
              (DOCX file)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
