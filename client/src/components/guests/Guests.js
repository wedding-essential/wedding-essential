import React, { Component } from 'react'
import GuestList from './GuestList';
import axios from 'axios';


export default class Guests extends Component {
  // state = {
  //   guests: []
  // };

  // componentDidMount = () => {
  //   this.getData();
  // };

  // getData = () => {
  //   axios
  //     .get('/api/wedding/${id}guests')
  //     .then(response => {
  //       this.setState({
  //         guests: response.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <>
      <div>
        <h2>Guests</h2>
      </div>
      <div className='guests-container'>
        {/* <GuestList guests={DummyGuests.guestlist} /> */}
      </div>
      </>
    );
  }
}