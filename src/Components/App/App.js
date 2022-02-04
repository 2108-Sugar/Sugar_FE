import React, { Component } from 'react';
import Header from '../Header/Header';
import data from '../SampleData/sample-data';
import DashboardCardContainer from '../DashboardCardContainer/DashboardCardContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      requests: [],
    };
  }


  componentDidMount = () => {
    console.log(data)
    this.setState({ requests: data })
    console.log(this.state.requests)
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