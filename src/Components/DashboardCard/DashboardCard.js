import React from 'react';
import './DashboardCard.css';

const DashboardCard = ({ lenderName, category, itemName, requestDetails, borrowDate, post_date }) => {
  return (
    <div className='request-card'>
      <div className='top-row'>
        <p>{lenderName}</p>
        <p>{post_date}</p>
      </div>
      <div className='second-row'>
        <p>{itemName}</p>
        <p>{borrowDate}</p>
      </div>
        <p className='request-details'>{requestDetails}</p>
      <div className='loan-button'>
        <button>Loan Item</button>
      </div>
    </div>
    )
}

export default DashboardCard;