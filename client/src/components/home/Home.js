import React, { Component } from 'react'
import wedding from '../../DummyWedding.json'
import Banner from './Banner'
import Story from './Story'
import Timeline from './Timeline'
import Dresscode from './Dresscode'
import Contact from './Contact'
export default class Home extends Component {
  render() {
    console.log(wedding)
    return (
      <div>
        {/* Banner also need profile picture from owner */}
        <Banner imgName={wedding.bannerImgName} imgPath={wedding.bannerImgPath} imgId={wedding.bannerImgPublicId}/>
        <Story story={wedding.story}/>
        <Timeline date={wedding.date} events={wedding.events}/>
        <Dresscode dresscode={wedding.dresscode}/>  
        <Contact contact={wedding.contact}/>
      </div>
    )
  }
}
