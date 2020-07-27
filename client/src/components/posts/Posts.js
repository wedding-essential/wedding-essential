import React, { Component } from 'react'
import PostList from './PostList'
import WriteMessage from './WriteMessage'


export default class Posts extends Component {
  render() {
    return (
      <div>
        {/* <PostList posts={posts.posts}/> */}
        <WriteMessage/>
      </div>
    )
  }
}
