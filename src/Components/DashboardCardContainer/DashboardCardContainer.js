import React from 'react';
import DashboardCard from '../DashboardCard/DashboardCard';
import './DashboardCardContainer.css'
import names from '../SampleData/Names'
import catIcon from '../SampleData/Category'

const DashboardCardContainer = ({requests}) => {
  return (
    <div className='dashboard-container'>
      {requests.data.map(request => {
        return (
          <DashboardCard
            post_date={request.attributes.created_at}
            requesterName={names[request.attributes.requested_by_id]}
            category={catIcon[request.attributes.item_category]}
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
