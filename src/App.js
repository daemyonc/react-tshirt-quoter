import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import { StockData } from './PricingData.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
      resultsList: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  };
  
  handleSearch(e) {
    // this.setState({resultsList: StockData.filter})
    console.log(StockData[0])
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Search onChange={this.handleSearch} />
          </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
