import React, { Component } from 'react'
import axios from 'axios';

export default class Profile extends Component {
  // state = {
  //   profile: []
  // };

  // componentDidMount = () => {
  //   this.getData();
  // };

  // getData = () => {
  //   axios
  //     .get('/api/wedding/${id}profile')
  //     .then(response => {
  //       this.setState({
  //         profile: response.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  render() {
    // console.log(this.state.profile);
    return (
      <>
      <div>
        <h2>Profile</h2>
      </div>
      <div className='profile-container'>
        <img />
        <button>
          Update Photo
          <img/>
        </button>
        <input type="text" id="fname" name="fname"></input>
        <input type="text" id="fname" name="fname"></input>
        <button>Delete Wedding</button>
      </div>
      </>
    );
  }
}