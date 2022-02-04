import React from 'react';
import './DashboardCard.css';

const DashboardCard = ({ lenderName, category, itemName, requestDetails, borrowDate }) => {
  return (
    <div className='request-card'>
      <p>{lenderName}</p>
      <p>{category}</p>
      <p>{itemName}</p>
      <p>{requestDetails}</p>
      <p>{borrowDate}</p>
    </div>
    )
}

export default DashboardCard;