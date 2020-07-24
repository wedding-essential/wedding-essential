import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div id='banner'>
          {/* Background image as banner image */}
          <div><img alt='couple profile picture'/></div>
          <div>36 Days 18 Hours 15 Mins</div>
        </div>
        <div id='our-story'>
          <h1>Our story</h1>
            <p>Lorem ipsum dolor sit amet. Cras pulvinar mattis nunc sed. Justo laoreet sit amet cursus sit amet dictum. Interdum consectetur libero id faucibus. Risus pretium quam vulputate dignissim suspendisse in est ante in. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. </p>
        </div>
        <div id='timeline'>
          <h1>Saturday 13th September </h1>
          <div>
            <h2>Ceremony</h2>
            <p>11 am</p>
            <p>Notre Dame de Paris</p>
            <p>Follow the smoke</p>
          </div>
          <div id='dresscode'>
            <h2>Dresscode</h2>
            <p>Fireman</p>
          </div>
          <div>Contact</div>
        </div>
      </div>
    )
  }
}
