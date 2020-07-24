import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class menu extends Component {
  render() {
    return (
      <div>
        <h1>Menu</h1>
        <div>
          <img src='/images/we-circle-01 1.svg' alt='couple profile picture'/>
          <p>Caroline & Alberto</p>
        </div>
        <div>
          <h1>Your wedding passcode</h1>
          <p>******</p>
        </div>
        <div><Link to='/guests'>Guest list</Link></div>
        <div><Link to='/settings'>Settings</Link></div>
        <div><Link to='/logout'>Logout</Link></div>
      </div>
    )
  }
}
