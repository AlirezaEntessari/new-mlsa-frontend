import React from 'react'
import './MyJobsJobDescriptionUploadPage.scss';
import HeaderWithProfilePic from '../../components/HeaderWithProfilePic/HeaderWithProfilePic';
import JobsSidePanel from '../../components/JobsSidePanel/JobsSidePanel';

export default function MyJobsJobDescriptionUploadPage() {
  return (
    <div className='my-jobs-job-description-upload-page'>
        <HeaderWithProfilePic />
        <div className="my-jobs-job-description-upload-page__main-container">
            <JobsSidePanel />
            <div className="my-jobs-job-description-upload-page__right-container">
                <p className='my-jobs-job-description-upload-page__header'>My Jobs</p>
                <div className="my-jobs-job-description-upload-page__job-description-upload-container">
                    <p className='my-jobs-job-description-upload-page__job-description-upload-header'>Job Description Upload</p>
                </div>
            </div>
        </div>
    </div>
  )
}
