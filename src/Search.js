import React, { Component } from 'react'

class Search extends Component {

  render() {
    return (
      <div className="searchInput">
        <input id="search" className="search" type="search" autoFocus="true" onChange={this.props.onChange} />
      </div>
    );
  }
}

export default Search;
