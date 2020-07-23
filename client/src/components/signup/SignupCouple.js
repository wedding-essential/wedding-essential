import React, { Component } from 'react'

export default class SignupCouple extends Component {
  render() {
    return (
      <div>
        <div><img src='/images/we-circle-01 1.svg' alt='WE logo'/></div>
        <h1>Sign up to Create your wedding</h1>
        <form>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email'></input>
          <label>Password</label>
          <input></input>
          <button>Next</button>
        </form>
      </div>
    )
  }
}
