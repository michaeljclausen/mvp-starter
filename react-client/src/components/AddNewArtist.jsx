import React from 'react';
import axios from 'axios';

class AddNewArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ''
    }
  }

  addNewArtist(e) {
    e.preventDefault();
    console.log(`${this.props.user.value} wants to add ${this.state.artist}`);
    axios.get(`/add?username=${this.props.user.value}&artist=${this.state.artist}`)
    .then(data => {
      console.log(data);
    })
  }

  handleChange(e) {
    this.setState({artist: e.target.value});
  }

  render() {
    return (
      <div>
        <h4> Add a new artist to check out </h4>  
        <form onSubmit={this.addNewArtist.bind(this)}>
          <label>
            Name:
            <input type="text" value={this.state.artist} onChange={this.handleChange.bind(this)}/>
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default AddNewArtist;