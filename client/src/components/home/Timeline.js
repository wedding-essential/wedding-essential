import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    const eventList = this.props.wedding.events.map((event) => {
      return (
        <div key={event._id}>
          <h2>{event.name}</h2>
          <p>{event.time}</p>
          <p>{event.location}</p>
          <p>{event.description}</p>
        </div>
      );
    });
    
    return (
      <>
        {this.props.wedding.events.length === 0 ? (
          <>
            {" "}
            <h2>Ceremony</h2>
            <p>10 am</p>
            <p>Notre Dame de Paris</p>
            <p>Follow the smoke</p>{" "}
          </>
        ) : (
            <>
              {eventList}
            </>
          )}
      </>
    );
  }
}
