import React, { Component } from 'react'
import {Route} from 'react-router-dom'
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
        render={props => <Home user={this.state.user} />}
      />
      <Route
        exact
        path='/gallery'
        component={Gallery}
      />
      <Route
        exact
        path='/menu'
        render={props => <Menu setUser={this.setUser} {...props} />}
      />
      <Route
        exact
        path='/posts'
        component={Posts}
      />
      
      <Route
      exact
      path='/guests'
      component={Guests}
    />

    <Route
      exact
      path='/gifts'
      component={Gifts}
    /> 
    <Route
      exact
      path='/profile'
      component={Profile}
    />    

      <Navbar/>
    </>
    )
  }
}
