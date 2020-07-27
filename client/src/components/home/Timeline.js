import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    const eventList = this.props.wedding.events.map(event => {
      return (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>{event.time}</p>
          <p>{event.location}</p>
          <p>{event.description}</p>
        </div>
      )
    })
    return (
      <div>
          <h2>{this.props.wedding.date}</h2>
          {eventList}
      </div>
    )
  }
}
