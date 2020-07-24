import React, { Component } from 'react'
import Events from './Events'

export default class Timeline extends Component {
  render() {
    return (
      <div>
          <h1>{this.props.date}</h1>
           <Events events={this.props.events}/>
      </div>
    )
  }
}
