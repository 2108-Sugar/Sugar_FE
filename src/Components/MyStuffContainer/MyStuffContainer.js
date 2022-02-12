import React from 'react';
import './MyStuffContainer.css'
import LoanCards from '../LoanCards/LoanCards';
import BorrowedCards from '../BorrowedCards/BorrowedCards';
import names from '../SampleData/Names';


const MyStuffContainer = ({ userLoaned, userRequests }) => {
  return (
    <div className='column-container'>
      <div className='loaned-items-container'>
        {userLoaned.map(loan => {
          return (
            <LoanCards 
              borrower={names[loan.attributes.requested_by_id]}
              borrowDate={loan.attributes.borrow_date}
              itemName={loan.attributes.name}
              returnDate={loan.attributes.return_date}
            />
          )
        })}
      </div>
      <div className='borrowed-items-container'>
        {userRequests.map((request) => {
          return (
            <BorrowedCards 
              loaner={request.attributes.lender_id || null}
              itemName={request.attributes.name}
              borrowDate={request.attributes.borrow_date || null}
              returnDate={request.attributes.return_date}
              createdAt={request.attributes.createdAt}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MyStuffContainer;

