import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signupGuest } from "../../services/auth";
import { Container } from "./styles";
import logo from "../../images/we-circle-logo.svg";

export default class SignupGuest extends Component {
  state = {
    user: "",
    email: "",
    password: "",
    passcode: "",
    message: "",
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
    const { email, password, passcode } = this.state;

    signupGuest(email, password, passcode).then((data) => {
      if (data.message) {
        this.setState({
          message: data.message,
        });
      } else {
        this.props.setUser(data);
        this.props.history.push("/home");
      }
    });
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="WE logo" />

        <h1>Sign up to attend a wedding</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            required
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            required
          ></input>
          <label htmlFor="passcode">Passcode</label>
          <input
            type="text"
            name="passcode"
            onChange={this.handleChange}
            required
          ></input>
          <div className="buttons">
            <Link to="/">
              <button type='button'>Back</button>
            </Link>
            <button type="submit" value="submit">
              Next
            </button>
          </div>
        </form>
        <h2>
          Already have an account ? <Link to="/login">Log in</Link>
        </h2>
      </Container>
    );
  }
}
