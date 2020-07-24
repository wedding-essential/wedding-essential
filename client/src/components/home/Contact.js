import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <p>Contact ID: {this.props.contact._id}</p>
      </div>
    )
  }
}
