import React from 'react';
import DashboardCard from '../DashboardCard/DashboardCard';

const DashboardCardContainer = ({requests}) => {
  console.log(requests)
  return (
    requests.map(request => {
      return (
        <DashboardCard
          lenderName={request.lender_name}
          category={request.category}
          itemName={request.item_name}
          requestDetails={request.request_details}
          borrowDate={request.borrow_date}
          />
      )
    })
  )
}

export default DashboardCardContainer;
