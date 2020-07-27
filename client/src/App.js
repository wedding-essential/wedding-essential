import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'
import './App.css';
import Landing from './components/landing/Landing';
import SignupCouple from './components/auth/SignupCouple'
import SignupGuest from './components/auth/SignupGuest'
import Home from './components/home/Home'
import Login from './components/auth/Login'
import Gallery from './components/gallery/Gallery'
import Navbar from './components/navbar/Navbar'
import Menu from './components/burgermenu/Menu'
import Guests from './components/guests/Guests'
import Gifts from './components/gifts/Gifts'
import Profile from './components/profile/Profile'
import Posts from './components/posts/Posts'
import AddPicture from './components/AddPicture';
import EditProfile from './components/profile/EditProfile'


export default class App extends Component {
  
  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
    <>
      <Route
        exact
        path='/'
        component={Landing}
      />
      <Route
        exact
        path='/signup/couple'
        render={props => <SignupCouple setUser={this.setUser} {...props} />}
      />
      <Route
        exact
        path='/signup/guest'
        render={props => <SignupGuest setUser={this.setUser} {...props} />}
      />
      <Route
        exact
        path='/login'
        render={props => <Login setUser={this.setUser} {...props} />}
      />
      <Route
        exact
        path='/home'
        render={props => {if (this.state.user) return <Home user={this.state.user} />
        else return <Redirect to='/'/>}}
      />
      <Route
        exact
        path='/gallery'
        render={props => {if (this.state.user) return <Gallery user={this.state.user} />
        else return <Redirect to='/'/>}}
      />
      <Route
        exact
        path='/menu'
        render={props => {if (this.state.user) return <Menu setUser={this.setUser} {...props} user={this.state.user}/>
        else return <Redirect to='/'/>} }
      />
      <Route
        exact
        path='/posts'
        render={props => {if (this.state.user) return <Posts />
        else return <Redirect to='/'/>}}
      />
      
      <Route
      exact
      path='/guests'
      render={props => {if (this.state.user) return <Guests  user={this.state.user}/>
        else return <Redirect to='/'/>}}
    />

    <Route
      exact
      path='/gifts'
      render={props => {if (this.state.user) return <Gifts />
        else return <Redirect to='/'/>}}
    /> 
    <Route
      exact
      path='/profile'
      render={props => {if (this.state.user) return <Profile user={this.state.user} />
        else return <Redirect to='/'/>}}
    />
    <Route
      exact
      path='/editprofile'
      render={props => {if (this.state.user) return <EditProfile user={this.state.user} {...props} setUser={this.setUser}/>
        else return <Redirect to='/'/>}}
    />    

    {this.state.user && <Navbar/>}
    
    <AddPicture user={this.state.user}/>

    </>
    )
  }
}
