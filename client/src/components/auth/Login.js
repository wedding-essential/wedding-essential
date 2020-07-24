import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <div>
        <div><img src='/images/we-circle-01 1.svg' alt='WE logo'/></div>
        <h1>Login to wedding</h1>
        <form>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email'></input>
          <label>Password</label>
          <input type='password'></input>
          <button>Next</button>
        </form>
        <h2>No account yet?</h2>
        <h3>Sign up as a <Link to='/signup/couple'>Couple</Link> or a <Link to='/signup/guest'>Guest</Link></h3>
      </div>
    )
  }
}
