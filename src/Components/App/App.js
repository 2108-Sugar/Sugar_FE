import React, { Component, useContext } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DashboardCardContainer from '../DashboardCardContainer/DashboardCardContainer';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import MyStuffContainer from '../MyStuffContainer/MyStuffContainer';
import { RequestContext, RequestProvider } from '../../Context/RequestContext';
import { addNewRequest, updateRequest, removeRequest, fetchApi } from '../Api/ApiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      communityPage: false,
      loading: true,
    };
  }
  
  
  componentDidMount = () => {
    const { requests, setRequests, setCommunityRequests, setUserRequests, setUserLoaned } = useContext(RequestContext)
    fetchApi()
      .then(data => setRequests(data))
      setCommunityRequests(requests.filter(request => request.attributes.requested_by_id !== 1))
      setUserRequests(requests.filter(request => request.attributes.requested_by_id === 1))
      setUserLoaned(requests.filter(request => request.attributes.lender_id === 1))
    }
  

  refreshPage =() => {
    window.location.reload(false);
  }

  togglePage = () => {
    this.setState({ communityPage: !this.state.communityPage })
  }


  postNewRequest = (data) => {
    addNewRequest(data);
    this.refreshPage()
  }

  updateRequest =(data, requestId) => {
    updateRequest(data, requestId)
    this.refreshPage()
  }

  deleteRequest = (requestId) => {
    removeRequest(requestId)
    this.refreshPage()
  }
  

  render = () => {
    return (
      <RequestProvider>
        <main className='App'>
          <Header communityPage={this.state.communityPage} togglePage={this.togglePage}/>
          <Routes>
            <Route path='/' element={
              <div className='community-page'>
                <h2 className='request-title'>Requests from Frey Apartments</h2>
                {!this.state.loading && <DashboardCardContainer updateRequest={this.updateRequest}/>}
              </div>
            }
            />
            <Route path='/my-stuff' element={
              <div className='requests-page'>
                <h2 className='request-title'>My Stuff</h2>
                <MyStuffContainer 
                  // userRequests={userRequests} 
                  // userLoaned={userLoaned}
                  postNewRequest={this.postNewRequest}
                  deleteRequest={this.deleteRequest}
                />
              </div>
            }
            />
          </Routes>
          <Footer />
        </main>
      </RequestProvider>
    )
  }
}

export default App;