import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {logout} from "../../services/auth";

export default class Menu extends Component {

  handleLogout = () => {
    logout().then(() => {
      this.props.setUser(null);
    });
  }

  render() {
    return (
      <div>
        <h1>Menu</h1>
        <div>
          {/* <img src={logo} alt='couple profile picture'/> */}
          <p>Caroline & Alberto</p>
        </div>
        <div>
          <h1>Your wedding passcode</h1>
          <p>******</p>
        </div>
        <div><Link to='/guests'>Guest list</Link></div>
        <div><Link to='/profile'>Settings</Link></div>
        <div><Link to='/' onClick={() => this.handleLogout(this.props)}>Logout</Link></div>
      </div>
    )
  }
}
