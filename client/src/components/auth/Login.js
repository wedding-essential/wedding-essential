import React, { Component } from "react";
import { Link } from "react-router-dom";
import {login} from "../../services/auth";

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    message: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    login(email, password).then(data => {
      if (data.message) {
        this.setState({
          message: data.message,
          email: '',
          password: ''
        });
      } else {
        this.props.setUser(data);
        this.props.history.push('/home');
      }
    });
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <div>
          <img src="/images/we-circle-01 1.svg" alt="WE logo" />
        </div>
        <h1>Login to a wedding</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
          <button type="submit">Next</button>
        </form>
        <h2>No account yet?</h2>
        <h3>
          Sign up as a <Link to="/signup/couple">Couple</Link> or a{" "}
          <Link to="/signup/guest">Guest</Link>
        </h3>
      </div>
    );
  }
}
