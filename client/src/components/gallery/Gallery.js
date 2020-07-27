import React, { Component } from 'react'
import AddPicture from '../AddPicture'

export default class Gallery extends Component {
  render() {
    return (
      <div>
        {/* for each photo in the Gallery */}
        <div><img src='/images/we-circle-01 1.svg'/></div>
        <div><img src='/images/we-circle-01 1.svg'/></div>
        <AddPicture />

      </div>
    )
  }
}
