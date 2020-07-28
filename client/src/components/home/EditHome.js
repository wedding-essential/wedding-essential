import React, { Component } from "react";
import axios from "axios";
import AddPicture from "../AddPicture";

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
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const weddingId = this.props.user.wedding;
    axios
      .get(`/api/wedding/${weddingId}`)
      .then((response) => {
        const { story, date, dresscode } = response.data;
        const contactName = response.data.contact.name;
        const contactEmail = response.data.contact.email;
        this.setState({
          story,
          date,
          dressCategory: dresscode.category,
          contactName,
          contactEmail,
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
    event.preventDefault();
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
      })
      .then((response) => {
        this.props.history.push("/home");
      })
      .catch((err) => {
        return err;
      });
  };

  render() {
    console.log("STAITE , ", this.state);
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

        <form onSubmit={this.handleSubmit}>
          <h1>Events</h1>
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
      </>
    );
  }
}
