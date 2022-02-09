import React, { Component } from 'react';
import Header from '../Header/Header';
import data from '../SampleData/sample-data';
import DashboardCardContainer from '../DashboardCardContainer/DashboardCardContainer';
import './App.css'
import { fetchApi } from '../Api/ApiCalls'

// console.log(fetchApi)

class App extends Component {
  constructor() {
  
    super();
    this.state = {
      requests: [],
      loading: true
    };
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
  
  // componentDidMount = async () => { 
  //   const allRequests = await fetchApi()
  //   .then(data => {
  //     const fetchedReq = data[0]
  //     console.log(data, 'data')
  //     this.setState({ requests: fetchedReq, loading: false})
  //     console.log(this.state.requests, 'requests')
  //   })
  // }
  
  render = () => {
    return (
      <main className='App'>
        <Header />
        <h2 className='request-title'>Requests from Frey Apartments</h2>
        <hr/>
        {!this.state.loading && <DashboardCardContainer requests={this.state.requests} />}
      </main>
    )
  }
}

export default App;