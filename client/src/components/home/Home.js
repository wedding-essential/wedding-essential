import React, { Component } from 'react'
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
    const weddingId = this.props.user.wedding
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
    return (
      <div>
        {/* Banner also need profile picture from owner */}
        <Banner imgName={this.state.wedding.bannerImgName} imgPath={this.state.wedding.bannerImgPath} imgId={this.state.wedding.bannerImgPublicId}/>
        <Story story={this.state.wedding.story}/>
        <Timeline date={this.state.wedding.date} events={this.state.wedding.events}/>
        <Dresscode dresscode={this.state.wedding.dresscode}/>  
        <Contact contact={this.state.wedding.contact}/>
      </div>
    )
  }
}
