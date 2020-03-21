import React, { Component } from 'react'

class Search extends Component {

  render() {
    return (
      <label>Search Products
        <input id="search" className="search" type="search" autoFocus="true" onChange={this.props.onChange} />
      </label>
      );
  }
}

export default Search;
