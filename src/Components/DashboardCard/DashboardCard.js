import React from 'react';
import './DashboardCard.css';
import pin from '../Images/pin2.png'
import tools from '../Images/tools-icon.png'
import numbers from '../SampleData/Numbers';

const DashboardCard = ({ requesterName, category, itemName, requestDetails, borrowDate, post_date, updateRequest, requestId }) => {

  const createLoan = () => {
    updateRequest({
      lender_id: 1,
      requested_by_id: numbers[requesterName],
      status: 'assigned'
    }, requestId)
  }

  return (
    <div className='request-card'>
      <div className='header-img'>
        <img className='category-icon' src={category} alt='category icon' />
        <img className='pin-img' src={pin} alt='pin' />
      </div>
      <div className='center-card'>
        <div className='top-row'>
          <p className='name'>{requesterName}</p>
          <p className='request-on-date'>Requested on:  {post_date}</p>
        </div>
        <div className='second-row'>
          <p className='item-needed'>Item needed:</p>
          <p className='item-name'>{itemName}</p>
        </div>
        <div className='date-needed-row'>
          <p className='date-needed'>Needed on: {borrowDate}</p>
        </div>
        <div className='details-section'>
          <p className='request-details'>{requestDetails}</p>
        </div>
        <div className='loan-button-section'>
          <button className='loan-button' onClick={createLoan}>Loan Item</button>
        </div>
      </div>
    </div>
    )
}

export default DashboardCard;