import React, { useState, createContext, useEffect } from 'react';

const RequestContext = createContext()

const RequestProvider = props => {
  const [requests, setRequests] = useState([]);
  const [communityRequests, setCommunityRequests] = useState([]);
  const [userRequests, setUserRequests] = useState([]);
  const [userLoaned, setUserLoaned] = useState([]);


  
  return ( 
    <RequestContext.Provider value={{ requests, communityRequests, userRequests, userLoaned, setRequests, setCommunityRequests, setUserRequests, setUserLoaned }}>
      {props.children}
    </RequestContext.Provider>
  )
}

export { RequestContext, RequestProvider } 