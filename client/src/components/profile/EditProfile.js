import React, { Component } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { Container } from "./styles";

export default class Profile extends Component {
  state = {
    email: this.props.user.email,
    password: this.props.user.password,
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    partnerFirstName: this.props.user.partnerFirstName,
    partnerLastName: this.props.user.partnerLastName,
    food: this.props.user.food,
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
    axios
      .put(`/api/wedding/${this.props.user.wedding}/user`, {
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        partnerFirstName: this.state.partnerFirstName,
        partnerLastName: this.state.partnerLastName,
        food: this.state.food,
      })
      .then((response) => {
        this.props.setUser(response.data);
        this.props.history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container>
        <main>
          <div className="topbar-wrapper">
            <div className="topbar">
              <h1>Profile</h1>
            </div>
          </div>

          {this.props.user.role === "couple" ? (
            <>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                  defaultValue={this.state.email}
                ></input>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  defaultValue={this.state.password}
                ></input>
                <label htmlFor="firstName">1st soul mate</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={this.handleChange}
                  defaultValue={this.state.firstName}
                  placeholder="first name"
                ></input>
                <input
                  type="text"
                  name="lastName"
                  onChange={this.handleChange}
                  defaultValue={this.state.lastName}
                  placeholder="last name"
                ></input>
                <label htmlFor="partnerFirstName">2nd soul mate</label>
                <input
                  type="text"
                  name="partnerFirstName"
                  onChange={this.handleChange}
                  defaultValue={this.state.partnerFirstName}
                  placeholder="First name"
                ></input>
                <input
                  type="text"
                  name="partnerLastName"
                  onChange={this.handleChange}
                  defaultValue={this.state.partnerLastName}
                  placeholder="Last name"
                ></input>
                <button className="formButton" type="submit">
                  Save changes
                </button>
              </form>
            </>
          ) : (
            <>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                  defaultValue={this.state.email}
                ></input>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  defaultValue={this.state.password}
                ></input>
                <label htmlFor="firstName">Name</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={this.handleChange}
                  defaultValue={this.state.firstName}
                  placeholder="first name"
                ></input>
                <input
                  type="text"
                  name="lastName"
                  onChange={this.handleChange}
                  defaultValue={this.state.lastName}
                  placeholder="last name"
                ></input>
                <label htmlFor="food">Food preference</label>
                <select
                  id="food"
                  name="food"
                  onChange={this.handleChange}
                  value={this.state.food}
                >
                  <option value="omnivore">Omnivore</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                </select>
                <button className="formButton" type="submit">
                  Save changes
                </button>
              </form>
            </>
          )}
        </main>
        <Navbar />
      </Container>
    );
  }
}
