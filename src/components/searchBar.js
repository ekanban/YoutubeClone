import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ""};
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term} />
      </div>
    );
  }


}

export default SearchBar;
