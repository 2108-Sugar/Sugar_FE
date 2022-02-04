import React, { Component } from 'react';
import Header from '../Header/Header';
import data from '../SampleData/sample-data';
import DashboardCardContainer from '../DashboardCardContainer/DashboardCardContainer';


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
        <DashboardCardContainer requests={this.state.requests} />
      </main>
    )
  }
}

export default App;