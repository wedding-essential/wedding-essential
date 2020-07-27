import React, { Component } from 'react'
import AddPicture from '../AddPicture'

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <AddPicture user={this.props.user}/>
      </div>
    )
  }
}
