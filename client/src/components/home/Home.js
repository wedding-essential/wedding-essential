import React, { Component, Fragment } from 'react'
import wedding from '../../DummyWedding.json'
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
    {console.log(this.state.wedding)}
    if(!this.state.wedding){return <> </>}
    else {
      return (
        <div>
          <h1>Hello world</h1>
          {/* Banner also need profile picture from owner */}
          <Banner wedding={this.state.wedding}/>
          {/* <Story story={this.state.wedding.story}/> */}
          {/* <Timeline date={this.state.wedding.date} events={this.state.wedding.events}/> */}
          {/* <Dresscode dresscode={this.state.wedding.dresscode}/> */}
          {/* <Contact contact={this.state.wedding.contact}/> */}
        </div>
      )
    }
  }
}
