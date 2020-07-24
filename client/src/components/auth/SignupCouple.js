import React, { Component } from 'react'
import {Link} from 'react-router-dom'

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
          <input type='password'></input>
          <button>Next</button>
        </form>
        <h2>Already have an account ? <Link to='/login'>Log in</Link></h2>
      </div>
    )
  }
}
