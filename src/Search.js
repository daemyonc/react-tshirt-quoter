import React, { Component } from 'react'

class Search extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     searchString: '',
  //     resultsList: []
  //   };
  // };

  render() {
    return (
      <div className="searchInput">
        <input id="search" className="search" type="search" autoFocus="true" onChange={this.props.onChange} />
      </div>
    );
  }
}

export default Search;
