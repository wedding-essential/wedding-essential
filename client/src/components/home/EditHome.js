import React, { Component } from "react";
import axios from "axios";
import AddPicture from "../AddPicture";
import { Link } from "react-router-dom";

export default class EditHome extends Component {
  state = {
    story: "",
    date: "",
    dressCategory: "",
    contactName: "",
    contactEmail: "",
    eventName: "",
    eventTime: "",
    eventLocation: "",
    eventDescription: "",
    events: "",
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const weddingId = this.props.user.wedding;
    axios
      .get(`/api/wedding/${weddingId}`)
      .then((response) => {
        const { story, date, dresscode, events } = response.data;
        const contactName = response.data.contact.name;
        const contactEmail = response.data.contact.email;
        this.setState({
          story,
          date,
          dressCategory: dresscode.category,
          contactName,
          contactEmail,
          events,
        });
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      eventDescription,
      eventLocation,
      eventName,
      eventTime,
      contactEmail,
      date,
      dressCategory,
      contactName,
    } = this.state;

    axios
      .put(`/api/wedding/${this.props.user.wedding}`, {
        story: this.state.story,
        date: this.state.date,
        dresscode: this.state.dressCategory,
        contact: {
          contactName: this.state.contactName,
          contactEmail: this.state.contactEmail,
        },
        eventDescription,
        eventLocation,
        eventTime,
        eventName,
        events: this.state.events,
      })
      .then((response) => {
        console.log(response.data.events,"Marco is jealous")
        const {name, time, location, description} = response.data.events
        
        console.log("handleSubmit response", response.data.events);
        this.setState({
          eventDescription: description,
          eventLocation: location,
          eventName: name,
          eventTime: time,
          events:response.data.events
        });
        // this.props.history.push("/home");
      })
      .catch((err) => {
        return err;
      });
  };

  deleteEvent = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    let filteredEvents = this.state.events.slice().filter((elem) => {
      if (elem._id == event.target.id) {
        return false;
      }
      return true;
    });
    this.setState({
      events: filteredEvents,
    });

    axios
      .put(`/api/wedding/deleteevent`, { events: filteredEvents })
      .then((response) => console.log(response))
      .catch((err) => {
        return err;
      });
  };

  render() {
    console.log("STAITE , ", this.state.events);
    
    return (
      <>
        <h2>Banner image</h2>
        <AddPicture handler="banner" user={this.props.user} />
        <h2>Profile image</h2>
        <AddPicture handler="profile" user={this.props.user} />

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="story">
            <h2>Our Story</h2>
          </label>
          <textarea
            id="story"
            name="story"
            onChange={this.handleChange}
            defaultValue={this.state.story}
          ></textarea>
          <label htmlFor="date">
            <h2>Wedding Date</h2>
          </label>
          <input
            id="date"
            name="date"
            type="date"
            data-date=""
            data-date-format=" DD MMMM YYYY"
            onChange={this.handleChange}
            defaultValue={this.state.date}
          ></input>

          <label htmlFor="dressCategory">
            <h2>Dresscode</h2>
          </label>
          <select
            id="dressCategory"
            name="dressCategory"
            onChange={this.handleChange}
            value={this.state.dressCategory}
          >
            <option value="blacktie">Blacktie</option>
            <option value="formal">Formal</option>
            <option value="semi-formal">Semi-formal</option>
            <option value="festive">Festive</option>
            <option value="casual">Casual</option>
            <option value="tropical">Tropical</option>
            <option value="other">Other</option>
          </select>

          <h1>Bridesmaid</h1>
          <label htmlFor="contactName">
            <h2>Name</h2>
          </label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            onChange={this.handleChange}
            defaultValue={this.state.contactName}
          ></input>

          <label htmlFor="contactEmail">
            <h2>Email</h2>
          </label>
          <input
            id="contactEmail"
            name="contactEmail"
            type="text"
            onChange={this.handleChange}
            defaultValue={this.state.contactEmail}
          ></input>

          <button type="submit">Save</button>
        </form>

        <h2>Current Events:</h2>
        {this.state.events
          ? this.state.events.map((event) => {
              return (
                <div key={event._id}>
                  <h2>{event.name}</h2>
                  <button id={event._id} onClick={this.deleteEvent}>
                    Delete Event
                  </button>
                </div>
              );
            })
          : null}

        <form onSubmit={this.handleSubmit}>
          <h1>Add New Event</h1>
          <label htmlFor="eventName">
            <h2>Name</h2>
          </label>
          <input
            id="eventName"
            name="eventName"
            type="text"
            onChange={this.handleChange}
            defaultValue={this.state.eventName}
          ></input>
          <label htmlFor="eventTime">
            <h2>Time</h2>
          </label>
          <input
            id="eventTime"
            name="eventTime"
            type="text"
            onChange={this.handleChange}
            defaultValue={this.state.eventTime}
          ></input>
          <label htmlFor="eventLocation">
            <h2>Location</h2>
          </label>
          <input
            id="eventLocation"
            name="eventLocation"
            type="text"
            onChange={this.handleChange}
            defaultValue={this.state.eventLocation}
          ></input>
          <label htmlFor="eventDescription">
            <h2>Description</h2>
          </label>
          <input
            id="eventDescription"
            name="eventDescription"
            type="text"
            onChange={this.handleChange}
            defaultValue={this.state.eventDescription}
          ></input>

          <button type="submit">Add an Event</button>
        </form>
        <Link to="home">Back to Wedding</Link>
      </>
    );
  }
}
