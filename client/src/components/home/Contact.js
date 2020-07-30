import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    console.log(this.props.wedding)
    return (
      <div className="contact">
        <h2>Bridesmaid Contact</h2>
        <p>{this.props.wedding.contact.name}</p>
        <p>{this.props.wedding.contact.email}</p>
      </div>
    )
  }
}
