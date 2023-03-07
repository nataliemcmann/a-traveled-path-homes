import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
      <img src='./imgs/ATPH-Logo.png' className='logo'></img>

      </Link>
      <div>
        {/* If no user is logged in, show these links
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {/* {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}  */}

        <Link className="navLink" to="/home">
          Home
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>
        <Link className="navLink" to="/contact">
          Contact 
        </Link>
        <Link className="navLink" to="/ownerdashboard">
          Owner Dashboard
          {/* //Link to where Renters or Owners can see their properties.  */}
        </Link>
        <Link className="navLink" to="/renterdashboard">
          Renter Dashboard
          {/* //Link to where Renters or Owners can see their properties.  */}
        </Link>
        <Link className="navLink" to="/profile">
          Profile
          {/* //Link to where they can review their profile info */}
        </Link>
        <Link className="navLink Avatar" to="/dashboard">
          {/* <img src='./imgs/avatar.jpeg' className='Avatar'></img> */}
        </Link>
      </div>
    </div>
  );
}

export default Nav;
