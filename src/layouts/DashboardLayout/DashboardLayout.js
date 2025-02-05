import React from 'react';
import './DashboardLayout.scss';
import { Outlet, NavLink } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <NavLink to="home">Home</NavLink> | 
        <NavLink to="quick-search-results">Quick Search Results</NavLink> | 
        <NavLink to="read-notification">Read Notification</NavLink> | 
        <NavLink to="read-message">Read Message</NavLink> | 
        <NavLink to="compose-message">Compose Message</NavLink> | 
        <NavLink to="calendar-event">Calendar Event</NavLink>
      </nav>
      <hr />
      <Outlet />  {/* This will render the child components */}
    </div>
  );
};

export default DashboardLayout;
