import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ communityPage, togglePage }) => {

  return (
    <div className='header-container'>
      <h1>Sugar</h1>
      <ul className='nav-container'>
      {communityPage ? <li className='community'>
          <Link to='/'>
            <span onClick={togglePage}>My Stuff</span>
          </Link>
        </li>
        :
        <li className='community'>
          <Link to='/'>
            <span onClick={togglePage}>Community Page</span>
          </Link>
        </li>}
      </ul>
    </div>

    )
}

export default Header;
