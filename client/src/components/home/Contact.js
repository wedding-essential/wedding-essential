import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    console.log(this.props.wedding)
    return (
      <div>
        <h1>Contact</h1>
        <p>{this.props.wedding.contact.name}</p>
        <p>{this.props.wedding.contact.email}</p>
      </div>
    )
  }
}
