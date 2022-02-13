import React from 'react';
import './LoanCards.css'

const LoanCards = ({ borrower, borrowDate, itemName, returnDate}) => {
  return (
      <div className='loan-card'>
        <div className='top-row'>
          <p className='loan-to-name'>Loaned to: {borrower}</p>
          <p className='loaned-on-date'>Loaned on {borrowDate}</p>
        </div>
        <div className='second-row'>
          <p className='loaned-item-name'>{itemName}</p>
          <p className='return-date'>Return Date: {returnDate}</p>
        </div>
          <button className='item-return-btn'>Item Returned</button>
      </div>
  )
}

export default LoanCards;
