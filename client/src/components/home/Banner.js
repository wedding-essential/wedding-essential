import React, { Component } from 'react'
import { urlencoded } from 'body-parser'

export default class Banner extends Component {
  render() {
    return (
      <div >
          {/* Background image as banner image */}
          <div><img src={this.props.wedding.owner}alt='couple profile picture'/></div>
          <div>{this.props.wedding.date}</div>
      </div>
    )
  }
}
