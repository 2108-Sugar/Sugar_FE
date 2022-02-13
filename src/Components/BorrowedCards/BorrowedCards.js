import React from 'react';
import './BorrowedCards.css'

const BorrowedCards = ({ loaner, itemName, borrowDate, returnDate, createdAt }) => {
  return (
  

  {loaner} ?
     <div className='borrow-card'>
        <p className='borrow-from'>Borrowed from: {loaner}</p>
        <p className='borrow-item-name'>{itemName}</p>
        <div className='bottom-row'>
          <p className='borrow-on-date'>Borrowed on: {borrowDate}</p>
          <p className='return-date'>Return on: {returnDate}</p>
        </div>
      </div>
      :
      <div className='borrow-card'>
        <p className='borrow-item-name'>{itemName}</p>
        <p>Requested on {createdAt}</p>
      </div>
    
  )
}

export default BorrowedCards;