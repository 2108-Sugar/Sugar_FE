import React from 'react';
import DashboardCard from '../DashboardCard/DashboardCard';
import './DashboardCardContainer.css'

const DashboardCardContainer = ({requests}) => {
  console.log(requests, 'requests')
  return (
    <div className='dashboard-container'>
      {requests.data.map(request => {
        return (
          <DashboardCard
            post_date={request.attributes.created_at}
            lenderName={request.attributes.lender_id || null}
            category={request.attributes.item_category}
            itemName={request.attributes.name}
            requestDetails={request.attributes.details}
            borrowDate={request.attributes.borrow_date}
            />
        )
      })}
    </div>
  )
}

export default DashboardCardContainer;
