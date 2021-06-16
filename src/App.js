import React, { Component } from 'react';
import './App.css';
import Search from './components/search/Search';
import { StockData } from './shared/PricingData.js';
import { decoPricing } from './shared/decoPricing.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultsList: [{ product: 5000, cost: 1.55 }],
            value: 'EMB',
            selectedCost: 1.55,
            selectedQty: '12',
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleDecoMethod = this.handleDecoMethod.bind(this);
        this.handleQty = this.handleQty.bind(this);
    }

    handleSearch(e) {
        let searchRE = new RegExp(e.target.value.toUpperCase());
        this.setState({
            resultsList: StockData.filter((search) =>
                search.product.match(searchRE)
            ),
        });
    }

    handleSelect(e) {
        this.setState({ selectedCost: parseFloat(e.target.value).toFixed(2) });
    }

    handleDecoMethod(e) {
        this.setState({ value: e.target.value });
    }

    handleQty(e) {
        this.setState({ selectedQty: e.target.value });
    }

    render() {
        let { selectedCost, selectedQty, value } = this.state;
        const blankCost = parseFloat(selectedCost / 0.8).toFixed(2);
        const decoCost = parseFloat(
            blankCost + decoPricing[value][selectedQty].toFixed(2)
        );
        const screenPrice = (
            decoCost + decoPricing[value][selectedQty]
        ).toFixed(2);

        return (
            <div className="App">
                <main className="mainContent">
                    <header>
                        <Search
                            className="search"
                            onChange={this.handleSearch}
                        />
                    </header>

                    <select
                        id="selectResults"
                        onClick={this.handleSelect}
                        onChange={this.handleSelect}
                        className="selectResults"
                    >
                        {this.state.resultsList.map((element, idx) => (
                            <option
                                key={idx + element.product}
                                value={element.cost}
                            >
                                {element.product}
                            </option>
                        ))}
                    </select>

                    <select
                        className="decoMethod"
                        value={value}
                        onClick={this.handleDecoMethod}
                        onChange={this.handleDecoMethod}
                    >
                        <option value="SP">Screen Print</option>
                        <option value="EMB">Embroidery</option>
                    </select>

                    <select
                        className="selectQty"
                        onClick={this.handleQty}
                        onChange={this.handleQty}
                    >
                        <option value="1" selected>
                            Select quantity
                        </option>
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

                    <div className="quoteResults">
                        <div className="priceResults">
                            <h2>Cost</h2>
                            <span>${selectedCost}</span>
                        </div>
                        <div className="priceResults">
                            <h2>Blank</h2>
                            <span>${blankCost}</span>
                        </div>
                        <div className="priceResults">
                            <h2>Decorated</h2>
                            <span>${screenPrice}</span>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
