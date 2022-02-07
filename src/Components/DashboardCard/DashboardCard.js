import React from 'react';
import './DashboardCard.css';
import pin from '../pin2.png'

const DashboardCard = ({ lenderName, category, itemName, requestDetails, borrowDate, post_date }) => {
  return (
    <div className='request-card'>
      <img className='pin-img' src={pin} alt='pin' width='90px' height='50px' />
      <div className='top-row'>
        <p className='name'>{lenderName}</p>
        <p>Requested on:  {post_date}</p>
      </div>
      <div className='second-row'>
        <p className='item-name'>{itemName}</p>
        <p className='date-needed'>Needed on: {borrowDate}</p>
      </div>
        <p className='request-details'>{requestDetails}</p>
      <div>
        <button className='loan-button'>Loan Item</button>
      </div>
    </div>
    )
}

export default DashboardCard;