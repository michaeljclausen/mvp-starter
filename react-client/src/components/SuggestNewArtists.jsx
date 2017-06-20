import React from 'react';
import axios from 'axios';

class SuggestNewArtists extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4> Use the API to add some new artists </h4>  
        <button onClick={this.props.apiSearch}> Add now fool </button>
      </div>
    )
  }
}

export default SuggestNewArtists;