import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/auth";
import { Container } from "./styles";
import logo from "../../images/we-circle-logo.svg";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    message: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    login(email, password).then((data) => {
      if (data.message) {
        this.setState({
          message: data.message,
          email: "",
          password: "",
        });
      } else {
        this.props.setUser(data);
        this.props.history.push("/home");
      }
    });
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="WE logo" />

        <h1>Login to a wedding</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          ></input>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          ></input>
          <div className="buttons">
            <Link to="/">
              <button>Back</button>
            </Link>
            <button type="submit" value="submit">
              Next
            </button>
          </div>
        </form>
        <h2>
          No account yet ? Sign up as a <Link to="/signup/couple">Couple</Link> or a{" "}
          <Link to="/signup/guest">Guest</Link>
        </h2>
      </Container>
    );
  }
}
