import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/auth";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { Container } from "./styles";

export default class Menu extends Component {
  state = {
    wedding: null,
  };

  handleLogout = () => {
    logout().then(() => {
      this.props.setUser(null);
    });
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const weddingId = this.props.user.wedding;
    axios
      .get(`/api/wedding/${weddingId}`)
      .then((response) => {
        this.setState({
          wedding: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    if (!this.state.wedding) {
      return <> </>;
    } else {
      return (
        <Container>
          <main>
            <div className="topbar">
              <h1>Menu</h1>
            </div>
            <div className="userHeader">
              <img
                src={this.props.user.imgPath}
                alt={this.props.user.imgName}
              />
              <h2>
                {this.props.user.firstName} & {this.props.user.partnerFirstName}
              </h2>
            </div>
            <div>
              <h2>Your Wedding Passcode</h2>
              <p>{this.state.wedding.passcode}</p>
            </div>
            <div>
              <Link to="/guests">Guest list</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/" onClick={() => this.handleLogout(this.props)}>
                Logout
              </Link>
            </div>
          </main>
          <Navbar />
        </Container>
      );
    }
  }
}
