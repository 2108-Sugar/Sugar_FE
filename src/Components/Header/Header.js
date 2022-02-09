import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ communityPage, togglePage }) => {
  let navigate = useNavigate();
  return (
    <div className='header-container'>
      <h1 onClick={() => navigate('/')}>Sugar</h1>
      <ul className='nav-container'>
      {communityPage ? <li className='nav-button'>
          <Link to='/'>
            <span onClick={togglePage}>Community Board</span>
          </Link>
        </li>
        :
        <li className='nav-button'>
          <Link to='/my-stuff'>
            <span onClick={togglePage}>My Stuff</span>
          </Link>
        </li>}
      </ul>
    </div>

    )
}

export default Header;
