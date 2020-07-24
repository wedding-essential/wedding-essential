import React, { Component } from 'react'

export default class WriteMessage extends Component {
  render() {
    return (
      <div>
        <form>
          <input name='message' placeholder='Your message'></input>
          <button>Send</button>
        </form>
      </div>
    )
  }
}
