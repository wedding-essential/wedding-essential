import React, { Component } from 'react'
import PostList from './PostList'
import WriteMessage from './WriteMessage'
import posts from '../../DummyPosts.json'

export default class Posts extends Component {
  render() {
    console.log(posts)
    return (
      <div>
        <PostList posts={posts.posts}/>
        <WriteMessage/>
      </div>
    )
  }
}
