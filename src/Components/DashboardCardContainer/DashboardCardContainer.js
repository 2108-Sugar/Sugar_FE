import React from 'react';
import DashboardCard from '../DashboardCard/DashboardCard';
import './DashboardCardContainer.css'

const DashboardCardContainer = ({requests}) => {
  console.log(requests)
  return (
    <div className='dashboard-container'>
      {requests.map(request => {
        return (
          <DashboardCard
            post_date={request.post_date}
            lenderName={request.lender_name}
            category={request.category}
            itemName={request.item_name}
            requestDetails={request.request_details}
            borrowDate={request.borrow_date}
            />
        )
      })}
    </div>
  )
}

export default DashboardCardContainer;
