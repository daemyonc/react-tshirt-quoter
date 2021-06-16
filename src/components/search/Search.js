import React, { Component } from 'react'

class Search extends Component {

  render() {
    return (
        <input id="search" className="search" type="search" autoFocus="true" onChange={this.props.onChange} placeholder="Search Product Ids" />
      );
  }
}

export default Search;
