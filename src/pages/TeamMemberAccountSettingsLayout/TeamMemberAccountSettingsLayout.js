import { Outlet, NavLink } from 'react-router-dom';

const TeamMemberAccountSettingsLayout = () => {
  return (
    <div>
      <h1>Team Member Account Settings</h1>
      <nav>
        <NavLink to="profile">Profile</NavLink> | 
        <NavLink to="password">Password</NavLink> | 
        <NavLink to="notifications">Notifications</NavLink>
      </nav>
      <hr />
      <Outlet />  {/* This will render the child components */}
    </div>
  );
};

export default TeamMemberAccountSettingsLayout;
