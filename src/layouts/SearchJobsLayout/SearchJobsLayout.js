import React from 'react';
import './SearchJobsLayout.scss';
import { Outlet, NavLink } from 'react-router-dom';

const SearchJobsLayout = () => {
  return (
    <div>
      <h1>Search Jobs</h1>
      <nav>
        <NavLink to="home-grid-view">Home Grid View</NavLink> | 
        <NavLink to="view-searches">View Searches</NavLink> | 
        <NavLink to="list-view">List View</NavLink>
      </nav>
      <hr />
      <Outlet />  {/* This will render the child components */}
    </div>
  );
};

export default SearchJobsLayout;
