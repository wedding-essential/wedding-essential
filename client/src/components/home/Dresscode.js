import React, { Component } from 'react'

export default class Dresscode extends Component {
  render() {
    return (
      <div>
        <h2>Dresscode: {this.props.dresscode.category}</h2>
        <p>{this.props.dresscode.description}</p>
      </div>
    )
  }
}
