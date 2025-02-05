import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './MyCandidatesLayout.scss';

const MyCandidatesLayout = () => {
  return (
    <div>
      <h1>My Candidates</h1>
      <nav>
        <NavLink to="home">Home</NavLink> | 
        <NavLink to="post-candidate">Post Candidate</NavLink> | 
        <NavLink to="candidate-details">Candidate Details</NavLink>
      </nav>
      <hr />
      <Outlet />  {/* This will render the child components */}
    </div>
  );
};

export default MyCandidatesLayout;
