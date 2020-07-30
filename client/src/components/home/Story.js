import React, { Component } from 'react'

export default class Story extends Component {
  render() {
    return (
      <div className="story">
          <h2>Our story</h2>
          <p>{this.props.story}</p>  
      </div>
    )
  }
}
