import React, { Component } from "react";
import axios from "axios";
import AddPicture from "../AddPicture";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { Container } from "./editStyles";

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
        console.log(response.data.events, "Marco is jealous");
        const { name, time, location, description } = response.data.events;

        console.log("handleSubmit response", response.data.events);
        this.setState({
          eventDescription: description,
          eventLocation: location,
          eventName: name,
          eventTime: time,
          events: response.data.events,
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
      <Container>
        <main>
          <div className="topbar-wrapper">
            <div className="topbar">
              <h1>Edit Wedding</h1>
            </div>
          </div>
          <div className="content">
              <h2>Banner image</h2>
              <AddPicture handler="banner" user={this.props.user} />
              <h2>Profile image</h2>
              <AddPicture handler="profile" user={this.props.user} />
            <form className="form" onSubmit={this.handleSubmit}>
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

              <h2>Bridesmaid</h2>
              <label htmlFor="contactName">
                <h3>Name</h3>
              </label>
              <input
                id="contactName"
                name="contactName"
                type="text"
                onChange={this.handleChange}
                defaultValue={this.state.contactName}
              ></input>

              <label htmlFor="contactEmail">
                <h3>Email</h3>
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
                    <div className="popotoEvents" key={event._id}>
                      <h3>{event.name}</h3>
                      <button className="popotoButtons" id={event._id} onClick={this.deleteEvent}>
                        Delete
                      </button>
                    </div>
                  );
                })
              : null}

            <form className="form" onSubmit={this.handleSubmit}>
              <h2>Add New Event</h2>
              <label htmlFor="eventName">
                <h3>Name</h3>
              </label>
              <input
                id="eventName"
                name="eventName"
                type="text"
                onChange={this.handleChange}
                defaultValue={this.state.eventName}
              ></input>
              <label htmlFor="eventTime">
                <h3>Time</h3>
              </label>
              <input
                id="eventTime"
                name="eventTime"
                type="text"
                onChange={this.handleChange}
                defaultValue={this.state.eventTime}
              ></input>
              <label htmlFor="eventLocation">
                <h3>Location</h3>
              </label>
              <input
                id="eventLocation"
                name="eventLocation"
                type="text"
                onChange={this.handleChange}
                defaultValue={this.state.eventLocation}
              ></input>
              <label htmlFor="eventDescription">
                <h3>Description</h3>
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
            <Link className="editlink" to="home">
              <button>Back to Wedding</button>
            </Link>
          </div>
        </main>
        <Navbar />
      </Container>
    );
  }
}
