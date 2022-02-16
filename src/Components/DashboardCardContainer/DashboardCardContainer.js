import React, { useContext } from 'react';
import DashboardCard from '../DashboardCard/DashboardCard';
import './DashboardCardContainer.css';
import names from '../SampleData/Names';
import catIcon from '../SampleData/Category';
import { RequestContext } from '../../Context/RequestContext';

const DashboardCardContainer = ({ updateRequest }) => {

  const { communityRequests } = useContext(RequestContext)
  console.log('123', communityRequests)

  return (
    <div className='dashboard-container'>
      {communityRequests.map(request => {
        return (
          <DashboardCard
            post_date={request.attributes.created_at}
            requesterName={names[request.attributes.requested_by_id]}
            category={catIcon[request.attributes.item_category]}
            itemName={request.attributes.name}
            requestDetails={request.attributes.details}
            borrowDate={request.attributes.borrow_date}
            requestId={request.id}
            updateRequest={updateRequest}
            key={request.id}
            />
        )
      })}
    </div>
  )
}

export default DashboardCardContainer;
