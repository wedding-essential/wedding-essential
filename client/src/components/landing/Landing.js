import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/we-circle-logo.svg'
import { Container } from './styles';


export default class Landing extends Component {
  render() {
    return (
      <Container>
        <img src={logo} alt='WE logo'/>

        <Link to='/signup/couple'><button>GETTING MARRIED?</button></Link>
        <Link to='/signup/guest'><button>ATTENDING A WEDDING?</button></Link>
        
      </Container>
    )
  }
}
