import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signupCouple } from "../../services/auth";
import { Container } from "./styles";
import logo from "../../images/we-circle-logo.svg";

export default class SignupCouple extends Component {
  state = {
    user: "",
    email: "",
    password: "",
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
    const { email, password } = this.state;

    signupCouple(email, password).then((data) => {
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

        <h1>Sign Up to Create your Wedding</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          ></input>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          ></input>
          {this.state.message && <p>{this.state.message}</p>}

          <div className="buttons">
            <Link to="/">
              <button type="button" >Back</button>
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
