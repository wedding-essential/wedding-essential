import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {logout} from "../../services/auth";
import axios from 'axios'

export default class Menu extends Component {

  state = {
    wedding: null
  }

  handleLogout = () => {
    logout().then(() => {
      this.props.setUser(null);
    });
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
  
    const weddingId = this.props.user.wedding;
    axios
      .get(`/api/wedding/${weddingId}`)
      .then(response => {
        this.setState({
          wedding: response.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.props.user)
    console.log(this.state.wedding)
    if(!this.state.wedding){return <> </>}
    else {
    return (
      <div>
        <h1>Menu</h1>
        <div>
          {/* <img src={logo} alt='couple profile picture'/> */}
    <h2>{this.props.user.firstName} & {this.props.user.partnerFirstName}</h2>
        </div>
        <div>
          <h1>Your wedding passcode</h1>
          <p>{this.state.wedding.passcode}</p>
        </div>
        <div><Link to='/guests'>Guest list</Link></div>
        <div><Link to='/profile'>Settings</Link></div>
        <div><Link to='/' onClick={() => this.handleLogout(this.props)}>Logout</Link></div>
      </div>
    )
    }
  }
}
