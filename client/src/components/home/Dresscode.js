import React, { Component } from 'react'

export default class Dresscode extends Component {
  render() {
    return (
      <div className="dresscode">
        <h2>Dresscode: <span>{this.props.dresscode}</span></h2>
      </div>
    )
  }
}
