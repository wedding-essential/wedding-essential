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
import Menu from './components/burgermenu/menu'
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
        component={Home}
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

      <Navbar/>
    </>
    )
  }
}
