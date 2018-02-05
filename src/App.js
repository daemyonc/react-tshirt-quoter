import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import { StockData } from './PricingData.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resultsList: [''],
      selectedCost: 0,
      selectedQty: 12
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    
  };
  
  handleSearch(e) {
    let searchRE = new RegExp(e.target.value)
    // console.log(searchRE)
    this.setState({resultsList: StockData.filter( search => search.product.match(searchRE) ) })
    // console.log(this.state.resultsList)
  }
  
  handleSelect(e) {
    this.setState({selectedCost: parseFloat(e.target.value).toFixed(2)})
    // console.log(this.state.selectedCost)
  }

  render() {
    const { selectedCost } = this.state
    const blankCost = selectedCost / .8
    const screenCost = 
    // console.log(this.state.resultsList)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Search onChange={this.handleSearch} />
          </h1>
        </header>
        <p className="itemSelect">
          <select id="selectResults" onChange={this.handleSelect} className="search" >
            {this.state.resultsList.map((element, idx) => 
              // console.log(element,idx)
              <option key={idx+element.product} value={element.cost}>{element.product}</option>
            )}
          </select>
          <select id="selectDecoMethod" onChange={this.handleSelect} className="search" >
            <option key={1} value={"SP"}>Screen Print</option>
            <option key={2} value={"EMB"}>Embroidery</option>
          </select>
          <select id="selectQty" onChange={this.handleSelect} className="search" >
            {selectDecoMethod === "EMB" &&
            <option key={1} value={1}>1</option>}
            <option key={2} value={12}>12</option>
            <option key={3} value={24}>24</option>
            <option key={4} value={48}>48</option>
            <option key={5} value={72}>72</option>
            <option key={6} value={144}>144</option>
            <option key={7} value={288}>288</option>
            <option key={8} value={500}>500</option>
            <option key={9} value={1000}>1,000</option>
          </select>
        </p>
        <div className="quoteResults">
            <span id="itemCost">{selectedCost}</span>
            <span id="blankCost">{selectedCost/.8}</span>
            <span id="blankCost">{selectedCost/.8}</span>
        </div>
      </div>
    );
  }
}

export default App;
