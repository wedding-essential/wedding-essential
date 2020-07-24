import React, { Component } from 'react'

export default class PostList extends Component {
  render() {
    console.log(this.props.posts)
    return (
      <div>
        <div>
          <img />
          <h3> Marco Muser</h3>
        </div>
        <p>Message</p>
        <p>sent on Wednesday, 15:37</p>
      </div>
    )
  }
}
