import React from 'react';
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


function App() {
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
      component={SignupCouple}
    />
    <Route
      exact
      path='/signup/guest'
      component={SignupGuest}
    />
    <Route
      exact
      path='/login'
      component={Login}
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
      component={Menu}
    />

    <Navbar/>
    </>
  );
}

export default App;
