import React, { Component } from 'react';

class SearchBar extends Component {
constructor(props) {
  super(props);

  this.state = { term: '' }; // only in constructor you can manipulate state like this
}

  render() {
    return (
      <div className="search-bar">
        <input className="col-lg-8 col-md-8 col-sm-auto"
          value={this.state.term} // I tell input what value should it has, I changed it to controlled object
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
    //prop onSearchTermChange comes from index.js SearchBar compoment
  }
}

export default SearchBar;
