import React, { Component } from "react";
import { Link } from "react-router-dom";
import {signupCouple} from "../../services/auth";

export default class SignupCouple extends Component {
  state = {
    user: "",
    email: "",
    password: "",
    message: ""
  }

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async event => {
    try {
      event.preventDefault();
      const { email, password } = this.state;

      const signup = await signupCouple(email, password)
        if (signup.message) {
          this.setState({
            message: signup.message,
          })
        } else {
          this.props.setUser(signup);
        }
      const redirect = await function() {return this.props.history.push('/home')};
    }
    catch(err) {console.log(err)}
  }

  render() {

    return (
      <div>
        <div>
          <img src="/images/we-circle-01 1.svg" alt="WE logo" />
        </div>
        <h1>Sign Up to Create your Wedding</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email} required></input>
          <label>Password</label>
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password} required></input>
          {this.state.message && (
            <p>{this.state.message}</p>
          )}
          <button type="submit" value="submit">Next</button>
        </form>
        <h2>
          Already have an account ? <Link to="/login">Log in</Link>
        </h2>
      </div>
    );
  }
}
