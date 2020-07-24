import React, { Component } from 'react'
import { urlencoded } from 'body-parser'

export default class Banner extends Component {
  render() {
    return (
      <div >
          {/* Background image as banner image */}
          <div><img alt='couple profile picture'/></div>
          <div>36 Days 18 Hours 15 Mins</div>
      </div>
    )
  }
}
