import { Outlet, NavLink } from 'react-router-dom';

const SearchAgenciesLayout = () => {
  return (
    <div>
      <h1>Search Agencies</h1>
      <nav>
        <NavLink to="all">All Agencies</NavLink> | 
        <NavLink to="industry">By Industry</NavLink> | 
        <NavLink to="ratings">By Ratings</NavLink>
      </nav>
      <hr />
      <Outlet />  {/* This will render the child components */}
    </div>
  );
};

export default SearchAgenciesLayout;
