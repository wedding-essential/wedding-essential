import React, { Component, Fragment } from 'react'
import Banner from './Banner'
import Story from './Story'
import Timeline from './Timeline'
import Dresscode from './Dresscode'
import Contact from './Contact'
import axios from 'axios'


export default class Home extends Component {

  state = {
    wedding: null
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
    if(!this.state.wedding){return <> </>}
    else {
      return (
        <div>
          <Banner wedding={this.state.wedding} user={this.props.user}/>
          <Story story={this.state.wedding.story}/>
          <Timeline wedding={this.state.wedding}/>
          <Dresscode dresscode={this.state.wedding.dresscode}/>
          <Contact contact={this.state.wedding.contact}/>
        </div>
      )
    }
  }
}
