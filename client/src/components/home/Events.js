import React, { Component } from 'react'

export default class Events extends Component {
  render() {
    const eventList = this.props.events.map(event => {
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
      
        {eventList}
    
    )
  }
}
