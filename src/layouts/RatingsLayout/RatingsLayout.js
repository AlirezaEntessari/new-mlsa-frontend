import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './RatingsLayout.scss';

const RatingsLayout = () => {
  return (
    <div>
      <h1>Ratings</h1>
      <nav>
        <NavLink to="home">Home</NavLink> | 
        <NavLink to="rate-an-agency">Rate an Agency</NavLink> | 
        <NavLink to="my-ratings">My Ratings</NavLink> | 
        <NavLink to="conflict-resolution">Conflict Resolution</NavLink> | 
        <NavLink to="giving-negative-feedback">Giving Negative Feedback</NavLink> | 
        <NavLink to="giving-negative-feedback-step-3">Step 3 (Giving)</NavLink> | 
        <NavLink to="giving-negative-feedback-step-4">Step 4 (Giving)</NavLink> | 
        <NavLink to="giving-negative-feedback-step-5">Step 5 (Giving)</NavLink> | 
        <NavLink to="giving-negative-feedback-end-dispute">End Dispute (Giving)</NavLink> | 
        <NavLink to="receiving-negative-feedback">Receiving Negative Feedback</NavLink> | 
        <NavLink to="receiving-negative-feedback-step-3">Step 3 (Receiving)</NavLink> | 
        <NavLink to="receiving-negative-feedback-step-4">Step 4 (Receiving)</NavLink> | 
        <NavLink to="receiving-negative-feedback-step-5">Step 5 (Receiving)</NavLink> | 
        <NavLink to="receiving-negative-feedback-end-dispute">End Dispute (Receiving)</NavLink>
      </nav>
      <hr />
      <Outlet />  {/* This will render the child components */}
    </div>
  );
};

export default RatingsLayout;
