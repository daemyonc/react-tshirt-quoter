import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import { StockData } from './PricingData.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resultsList: ['']
    };
    this.handleSearch = this.handleSearch.bind(this);
  };
  
  handleSearch(e) {
    let searchRE = new RegExp(e.target.value)
    // console.log(searchRE)
    this.setState({resultsList: StockData.filter( search => search.product.match(searchRE) ) })
    // console.log(this.state.resultsList)
  }

  render() {
    // const { resultsList } = this.state
    // console.log(this.state.resultsList)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Search onChange={this.handleSearch} />
          </h1>
        </header>
        <p className="App-intro">
          <select id="selectResults" className="search" >
            {this.state.resultsList.map((element, idx) => 
              // console.log(element,idx)
              <option key={idx+element.product} value={element.cost}>{element.product}</option>
            )}
          </select>
        </p>
      </div>
    );
  }
}

export default App;
