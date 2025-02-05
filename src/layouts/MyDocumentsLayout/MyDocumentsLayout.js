import React from 'react';
import './MyDocumentsLayout.scss';
import { Outlet, NavLink } from 'react-router-dom';

const MyDocumentsLayout = () => {
  return (
    <div className='my-documents-layout'>
      <h1 className='my-documents-layout__header'>My Documents</h1>
      <nav className='my-documents-layout__navbar'>
        <NavLink to="agreements">Agreements</NavLink> | 
        <NavLink to="reports">Reports</NavLink> | 
        <NavLink to="archive">Archive</NavLink> | 
        <NavLink to="job-report">Job Report</NavLink> | 
        <NavLink to="candidate-report">Candidate Report</NavLink> | 
        <NavLink to="partnership-report">Partnership Report</NavLink> | 
        <NavLink to="user-activity-report">User Activity Report</NavLink>
      </nav>
      <hr />
      <Outlet />  {/* This will render the child components */}
    </div>
  );
};

export default MyDocumentsLayout;
