import React, { Component } from 'react';
import Header from '../Header/Header';
import data from '../SampleData/sample-data';
import DashboardCardContainer from '../DashboardCardContainer/DashboardCardContainer';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import MyStuffContainer from '../MyStuffContainer/MyStuffContainer';
import { fetchApi } from '../Api/ApiCalls'

import Footer from '../Footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      requests: [],
      communityPage: false,
      loading: true,
      communityRequests: [],
      userRequests: [],
      userLoaned: []
    };
  }

  
  togglePage = () => {
    this.setState({ communityPage: !this.state.communityPage })
  }
  
  
  componentDidMount = () => { 
    const allRequests = fetchApi()
    .then(data => {
      const fetchedReq = data
      this.setState({ requests: fetchedReq, loading: false})
      this.sortCommunityRequests()
      this.sortUserRequests()
      this.sortLoaned()
    })
  }
  
  sortCommunityRequests = () => {
    const communityReq = this.state.requests.data.filter(request => request.attributes.requested_by_id !== 1)
    this.setState({communityRequests: communityReq})
    console.log(this.state.communityRequests, 'communityreq')
  }

  sortUserRequests = () => {
    const userReq = this.state.requests.data.filter(request => request.attributes.requested_by_id === 1)
    this.setState({userRequests: userReq})
    console.log(this.state.userRequests, 'userReqeust')
  }

  sortLoaned = () => {
    const userLoan = this.state.requests.data.filter(request => request.attributes.lender_id === 1)
    this.setState({userLoaned: userLoan})
    console.log(this.state.userLoaned, 'loaned')
  }

  render = () => {
    return (
      <main className='App'>
        <Header communityPage={this.state.communityPage} togglePage={this.togglePage}/>
        <Routes>
          <Route path='/' element={
            <div className='community-page'>
              <h2 className='request-title'>Requests from Frey Apartments</h2>
              {!this.state.loading && <DashboardCardContainer requests={this.state.requests} />}
            </div>
          }
          />
          <Route path='/my-stuff' element={
            <div className='requests-page'>
              <h2 className='request-title'>My Stuff</h2>
              <MyStuffContainer userRequests={this.state.userRequests} userLoaned={this.state.userLoaned}/>
            </div>
          }
          />
        </Routes>
        <Footer />
      </main>
    )
  }
}

export default App;