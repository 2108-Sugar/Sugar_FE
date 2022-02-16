import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DashboardCardContainer from '../DashboardCardContainer/DashboardCardContainer';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import MyStuffContainer from '../MyStuffContainer/MyStuffContainer';
import { RequestContext } from '../../Context/RequestContext';
import { addNewRequest, postRequest, removeRequest, fetchApi } from '../Api/ApiCalls';

const App = () => {
  const { setRequests, setCommunityRequests, setUserRequests, setUserLoaned, requests } = useContext(RequestContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApi()
    .then(data => setRequests(data.data))
  }, [])
  
  useEffect(() => {
    setCommunityRequests(requests.filter(request => request.attributes.requested_by_id !== 1))
    setUserRequests(requests.filter(request => request.attributes.requested_by_id === 1))
    setUserLoaned(requests.filter(request => request.attributes.lender_id === 1))
    setLoading(false)
  }, [requests])


  const [communityPage, setCommunityPage] = useState(false);
  
  const refreshPage = () => {
      window.location.reload(false);
    }

  const togglePage = () => {
      setCommunityPage(!communityPage)
    }


  const postNewRequest = (data) => {
      addNewRequest(data);
      refreshPage()
    }

  const updateRequest =(data, requestId) => {
      postRequest(data, requestId)
      refreshPage()
    }

  const deleteRequest = (requestId) => {
      removeRequest(requestId)
      refreshPage()
    }
    
  return (
      <main className='App'>
        <Header communityPage={communityPage} togglePage={togglePage}/>
        <Routes>
          <Route path='/' element={
            <div className='community-page'>
              <h2 className='request-title'>Requests from Frey Apartments</h2>
              {!loading && <DashboardCardContainer updateRequest={updateRequest}/>}
            </div>
          }
          />
          <Route path='/my-stuff' element={
            <div className='requests-page'>
              <h2 className='request-title'>My Stuff</h2>
              <MyStuffContainer 
                postNewRequest={postNewRequest}
                deleteRequest={deleteRequest}
              />
            </div>
          }
          />
        </Routes>
        <Footer />
      </main>
  )
}

export default App;