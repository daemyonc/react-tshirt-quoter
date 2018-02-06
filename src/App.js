import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import { StockData } from './PricingData.js'
import { decoPricing } from './decoPricing.js'

// console.log(decoPricing["EMB"]["288"])

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resultsList: [{"product":"5000","cost":"1.55"}],
      value: 'EMB',
      selectedCost: 1.87,
      selectedQty: '12'
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDecoMethod = this.handleDecoMethod.bind(this);
    this.handleQty = this.handleQty.bind(this);
    
  };
  
  handleSearch(e) {
    let searchRE = new RegExp(e.target.value)
    this.setState({resultsList: StockData.filter( search => search.product.match(searchRE) ) })
  }
  
  handleSelect(e) {
    this.setState({selectedCost: parseFloat(e.target.value).toFixed(2)})
  }

  handleDecoMethod(e) {
    this.setState({value: e.target.value})
    console.log("Deco method: " + e.target.value)
  }

  handleQty(e) {
    this.setState({selectedQty: e.target.value});
    console.log("Qty: " + this.state.selectedQty)
  }

  render() {
    let { selectedCost,selectedQty,value } = this.state
    const blankCost = parseFloat(selectedCost / .8).toFixed(2)
    const decoCost = parseFloat(blankCost + (decoPricing[value][selectedQty]).toFixed(2))
    console.log(decoCost, decoPricing[value][selectedQty] )
    // console.log("Blank: " + blankCost)
    // console.log("Deco method: " + value)
    // console.log("Qty: " + selectedQty)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Search onChange={this.handleSearch} />
          </h1>
        </header>
        <p className="itemSelect">
          <select id="selectResults" onClick={this.handleSelect} onChange={this.handleSelect} className="search" >
            {this.state.resultsList.map((element, idx) => 
              <option key={idx+element.product} value={element.cost}>{element.product}</option>
            )}
          </select>

          <select className="decoMethod" value={value} onClick={this.handleDecoMethod} onChange={this.handleDecoMethod} >
            <option value="SP">Screen Print</option>
            <option value="EMB">Embroidery</option>
          </select>

          <select className="selectQty" onClick={this.handleQty} onChange={this.handleQty} >
            <option value="1">1</option>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="48">48</option>
            <option value="72">72</option>
            <option value="144">144</option>
            <option value="288">288</option>
            <option value="500">500</option>
            <option value="1000">1,000</option>
          </select>
        </p>
        <div className="quoteResults">
            <span className="priceResults">Our Cost: {selectedCost}</span>
            <span className="priceResults">Blank Price: {blankCost}</span>
            <span className="priceResults">Screen Price: {decoCost}</span>           
        </div>
      </div>
    );
  }
}

export default App;
