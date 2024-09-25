import React from 'react'
import './MyJobsHomePage.scss';
import HeaderWithProfilePic from '../../components/HeaderWithProfilePic/HeaderWithProfilePic';
import JobsSidePanel from '../../components/JobsSidePanel/JobsSidePanel';
import MyJobsTopDashboard from '../../components/MyJobsTopDashboard/MyJobsTopDashboard';

export default function MyJobsHomePage() {
  return (
    <div className='my-jobs-home-page'>
        <HeaderWithProfilePic />
        <div className="my-jobs-home-page__main-container">
            <JobsSidePanel />
            <div className="my-jobs-home-page__right-container">
                <p className='my-jobs-home-page__header'>My Jobs</p>
                <MyJobsTopDashboard />

            </div>
        </div>
    </div>
  )
}
