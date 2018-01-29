import React, { Component } from 'react';
import './App.css';

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
    this.setState({searchString: e.target.value});
    fetch('./PricingData.json')
      .then(results => JSON.parse(results))
      .then(dataList => {this.setState({resultsList: dataList.filter.exec(`/${e.target.value}/`)})
      })
    console.log(this.state.resultsList);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <input name="search" type="search" autoFocus="true" onChange={this.handleSearch} />
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
