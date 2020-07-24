import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

export default function GiftList(props) {
  console.log(props.gifts);
  return (
    <div>
      <img />
      <h2>GIFT NAME</h2>
      <p>Gift Description</p>
      <button>Buy it Here</button>
      <button>Give this Gift</button>
      {/* <button>Give this Gift</button> */}
    </div>
  )}