import React, { Component } from 'react';
import Header from '../Header/Header';
import data from '../SampleData/sample-data';
import DashboardCardContainer from '../DashboardCardContainer/DashboardCardContainer';

import './App.css'

import Footer from '../Footer/Footer';


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
        <hr/>
        <DashboardCardContainer requests={this.state.requests} />
        <Footer />
      </main>
    )
  }
}

export default App;