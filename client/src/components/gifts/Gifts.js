import React, { Component } from 'react'
import GiftList from './GiftList.js';
import axios from 'axios';


export default class Gifts extends Component {
  // state = {
  //   gifts: []
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
        <h2>Gifts</h2>
      </div>
      <div className='gifts-container'>
        {/* <GiftList gifts={DummyGifts.giftlist} /> */}
      </div>
      </>
    );
  }
}