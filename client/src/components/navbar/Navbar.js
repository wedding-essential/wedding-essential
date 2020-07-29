import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import homeIcon from "../../images/house-icon.svg";
import guestListIcon from "../../images/guest-list-icon.svg";
import galleryIcon from "../../images/gallery-icon.svg";
import menuIcon from "../../images/burger-menu-icon.svg";

export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <Link to="/home"><img src={homeIcon} alt="home"/></Link>
        <Link to="/guests"><img src={guestListIcon} alt="guests"/></Link>
        <Link to="/gallery"><img src={galleryIcon} alt="gallery"/></Link>
        <Link to="/menu"><img src={menuIcon} alt="menu"/></Link>
      </Container>
    );
  }
}
