import React, { Component } from 'react';
import Header from '../Header/Header';
import data from '../SampleData/sample-data';
import DashboardCardContainer from '../DashboardCardContainer/DashboardCardContainer';
import './App.css'

class App extends Component {
  constructor() {
    console.log(data)
    super();
    this.state = {
      requests: [],
    };
  }


  componentDidMount = () => {
    this.setState({ requests: data });
  }
  
  render = () => {
    return (
      <main className='App'>
        <Header />
        <h2 className='request-title'>Requests from Frey Apartments</h2>
        <DashboardCardContainer requests={this.state.requests} />
      </main>
    )
  }
}

export default App;