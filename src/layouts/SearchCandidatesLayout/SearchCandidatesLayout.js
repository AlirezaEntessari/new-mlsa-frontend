import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './SearchCandidatesLayout.scss';

const SearchCandidatesLayout = () => {
  return (
    <div>
      <h1>Search Candidates</h1>
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

export default SearchCandidatesLayout;
