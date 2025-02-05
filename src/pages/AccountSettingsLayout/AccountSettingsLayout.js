import { Outlet, NavLink } from 'react-router-dom';

const AccountSettingsLayout = () => {
  return (
    <div>
      <h1>Account Settings</h1>
      <nav>
        <NavLink to="profile">Profile</NavLink> | 
        <NavLink to="agency">Agency</NavLink> | 
        <NavLink to="password">Password</NavLink> | 
        <NavLink to="billing">Billing</NavLink> | 
        <NavLink to="notifications">Notifications</NavLink>
      </nav>
      <hr />
      <Outlet /> {/* This renders the child components */}
    </div>
  );
};

export default AccountSettingsLayout;
