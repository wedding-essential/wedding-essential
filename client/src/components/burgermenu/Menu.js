import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/auth";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { Container } from "./styles";
import settingsIcon from "../../images/settings-icon.svg";
import logoutIcon from "../../images/logout-icon.svg";

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
            {this.props.user.role === 'couple' ? (
              <>
              <div className="passcode">
              <h2>Your Wedding Passcode</h2>
              <p>{this.state.wedding.passcode}</p>
            </div>
            <div className="menulinks">
              <div className="linkitems">
              <img src={settingsIcon} alt="settings icon" />
                <Link to="/profile">Profile</Link>
              </div>
              <div className="linkitems">
              <img src={logoutIcon} alt="logout icon" />
                <Link to="/" onClick={() => this.handleLogout(this.props)}>
                  Logout
                </Link>
              </div>
            </div>
              </>
            ): (
              <>
              <div className="menulinks">
                <div className="linkitems">
                <img src={settingsIcon} alt="settings icon" />
                  <Link to="/profile">Profile</Link>
                </div>
                <div className="linkitems">
                <img src={logoutIcon} alt="logout icon" />
                  <Link to="/" onClick={() => this.handleLogout(this.props)}>
                    Logout
                  </Link>
                </div>
              </div>
              </>
            )}
            
          </main>
          <Navbar />
        </Container>
      );
    }
  }
}
