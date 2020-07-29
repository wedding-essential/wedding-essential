import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <Link to="/home">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/gifts">Gifts</Link>
        <Link to="/menu">Menu</Link>
      </Container>
    );
  }
}
