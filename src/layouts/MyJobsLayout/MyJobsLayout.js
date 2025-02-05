import React from 'react';
import './MyJobsLayout.scss';
import { Outlet, NavLink } from 'react-router-dom';

const MyJobsLayout = () => {
  return (
    <div>
      <h1>My Jobs</h1>
      <nav>
        <NavLink to="home">Home</NavLink> | 
        <NavLink to="batch-upload">Batch Upload</NavLink> | 
        <NavLink to="active-jobs">Active Jobs</NavLink> | 
        <NavLink to="pending-jobs">Pending Jobs</NavLink> | 
        <NavLink to="reviews-jobs">Reviews</NavLink> | 
        <NavLink to="submissions">Submissions</NavLink> | 
        <NavLink to="interviews">Interviews</NavLink> | 
        <NavLink to="offers">Offers</NavLink> | 
        <NavLink to="placements">Placements</NavLink> | 
        <NavLink to="post-job">Post a Job</NavLink> | 
        <NavLink to="job-description-upload">Job Description Upload</NavLink> | 
        <NavLink to="post-job-batch-upload">Post Job Batch Upload</NavLink> | 
        <NavLink to="job-details">Job Details</NavLink>
      </nav>
      <hr />
      <Outlet />  {/* This will render the child components */}
    </div>
  );
};

export default MyJobsLayout;
