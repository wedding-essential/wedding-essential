import React from 'react';
import './App.css';
import Landing from './components/landing/Landing';
import SignupCouple from './components/signup/SignupCouple'
import SignupGuest from './components/signup/SignupGuest'
import {Route} from 'react-router-dom'

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
    {/* <Route
      exact
      path='/signup/guest'
      component={SignupGuest}
    /> */}


    </>
  );
}

export default App;
