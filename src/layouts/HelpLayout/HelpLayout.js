import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './HelpLayout.scss';

const HelpLayout = () => {
  return (
    <div>
      <h1>Help Center</h1>
      <nav>
        <NavLink to="home">Home</NavLink> | 
        <NavLink to="my-account">My Account</NavLink> | 
        <NavLink to="job-posting">Job Posting</NavLink> | 
        <NavLink to="candidate-posting">Candidate Posting</NavLink> | 
        <NavLink to="documents">Documents</NavLink> | 
        <NavLink to="partnerships">Partnerships</NavLink> | 
        <NavLink to="dashboard">Dashboard</NavLink> | 
        <NavLink to="searching">Searching</NavLink> | 
        <NavLink to="ratings-and-feedback">Ratings & Feedback</NavLink> | 
        <NavLink to="reports">Reports</NavLink> | 
        <NavLink to="membership">Membership</NavLink> | 
        <NavLink to="policies-and-terms">Policies & Terms</NavLink> | 
        <NavLink to="faq">FAQ</NavLink> | 
        <NavLink to="glossary">Glossary</NavLink>
      </nav>
      <hr />
      <Outlet />  {/* This will render the child components */}
    </div>
  );
};

export default HelpLayout;
