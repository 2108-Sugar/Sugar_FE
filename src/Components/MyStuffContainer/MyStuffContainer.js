import React, { useContext, useState} from 'react';
import './MyStuffContainer.css'
import LoanCards from '../LoanCards/LoanCards';
import BorrowedCards from '../BorrowedCards/BorrowedCards';
import names from '../SampleData/Names';
import RequestForm from '../RequestForm/RequestForm';
import { RequestContext } from '../../Context/RequestContext';

const MyStuffContainer = ({ postNewRequest, deleteRequest }) => {

  const { userLoaned, userRequests } = useContext(RequestContext)
  const [requestPage, setRequestPage] = useState(false)

  const toggleRequestForm = () => {
    setRequestPage(!requestPage)
  }

  return (
    <main className='my-stuff-page'>
      <div className='button-container'>
        {!requestPage && <button className='new-request' onClick={toggleRequestForm}>Make a new request</button>}
      </div>
      {requestPage && <RequestForm toggleRequestForm={toggleRequestForm} postNewRequest={postNewRequest} />}
      <div className='column-container'>
        <div className='loaned-items-container'>
          <p className='loaned-items-title'>Loaned Items</p>
          {userLoaned.map(loan => {
            return (
              <LoanCards 
                borrower={names[loan.attributes.requested_by_id]}
                borrowDate={loan.attributes.borrow_date}
                itemName={loan.attributes.name}
                returnDate={loan.attributes.return_date}
                deleteRequest={deleteRequest}
                requestId={loan.id}
              />
            )
          })}
        </div>
        <div className='borrowed-items-container'>
          <p className='borrowed-items-title'>Borrowed Items</p>
          {userRequests.map((request) => {
            return (
              <BorrowedCards 
                loaner={names[request.attributes.lender_id || null]}
                itemName={request.attributes.name}
                borrowDate={request.attributes.borrow_date || null}
                returnDate={request.attributes.return_date}
                createdAt={request.attributes.createdAt}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default MyStuffContainer;

