import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class SignupGuest extends Component {
  render() {
    return (
      <div>
        <div><img src='/images/we-circle-01 1.svg' alt='WE logo'/></div>
        <h1>Sign up to Attend a wedding</h1>
        <form>
          <label htmlFor='passcode'>Email</label>
          <input type='text' name='passcode'></input>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email'></input>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password'></input>
          <button>Next</button>
        </form>
        <h2>Already have an account ? <Link to='/login'>Log in</Link></h2>
      </div>
    )
  }
}