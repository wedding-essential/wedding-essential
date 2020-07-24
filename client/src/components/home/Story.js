import React, { Component } from 'react'

export default class Story extends Component {
  render() {
    return (
      <div>
          <h1>Our story</h1>
          <p>{this.props.story}</p>
      </div>
    )
  }
}
