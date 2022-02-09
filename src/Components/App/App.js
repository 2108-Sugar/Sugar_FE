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
      loading: true
    };
  }

  togglePage = () => {
    this.setState({ communityPage: !this.state.communityPage })
  }


  componentDidMount = () => { 
    const allRequests = fetchApi()
    .then(data => {
      const fetchedReq = data
      console.log(data, 'data')
      this.setState({ requests: fetchedReq, loading: false})
      console.log(this.state.requests, 'requests')
    })
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
              <MyStuffContainer />
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