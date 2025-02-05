import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './PartnershipsLayout.scss';

const PartnershipsLayout = () => {
  return (
    <div>
      <h1>Partnerships</h1>
      <nav>
        <NavLink to="home">Home</NavLink> | 
        <NavLink to="requests">Requests</NavLink> | 
        <NavLink to="review-requests">Review Requests</NavLink> | 
        <NavLink to="manage">Manage</NavLink> | 
        <NavLink to="view-agreement">View Agreement</NavLink> | 
        <NavLink to="view-activity">View Activity</NavLink> | 
        <NavLink to="terminate-agreement">Terminate Agreement</NavLink>
      </nav>
      <hr />
      <Outlet />  {/* This will render the child components */}
    </div>
  );
};

export default PartnershipsLayout;
