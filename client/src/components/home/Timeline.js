import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    const eventList = this.props.wedding.events.map((event) => {
      return (
        <div className="event" key={event._id}>
          <h3>{event.name}</h3>
          <p>Time: {event.time}</p>
          <p>Location: {event.location}</p>
          <p>{event.description}</p>
        </div>
      );
    });
    
    return (
      <div className="timeline">
       <h2>Timeline</h2>
        {this.props.wedding.events.length === 0 ? (
          <>
            <p>Edit wedding to add your events</p>
          </>
        ) : (
            <>
              {eventList}
            </>
          )}
      </div>
    );
  }
}
