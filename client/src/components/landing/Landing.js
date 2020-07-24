import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div><img src='/images/we-circle-01 1.svg' alt='WE logo'/></div>

        <div><Link to='/signup/couple'>Getting married ?</Link></div>
        <div><Link to='/signup/guest'>Attending a wedding ?</Link></div>
        
      </div>
    )
  }
}
