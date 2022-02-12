import React from 'react';
import './BorrowedCards.css'

const BorrowedCards = ({ loaner, itemName, borrowDate, returnDate, createdAt }) => {
  return (
    {loaner} ?
      <div className='borrow-card'>
        <p>Borrowed from {loaner}</p>
        <p>{itemName}</p>
        <div className='bottom-row'>
          <p>Borrowed on {borrowDate}</p>
          <p>Return on: {returnDate}</p>
        </div>
      </div>
      :
      <div className='borrow-card'>
        <p>{itemName}</p>
        <p>Requested on {createdAt}</p>
      </div>
    
  )
}

export default BorrowedCards;