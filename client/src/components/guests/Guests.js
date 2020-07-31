import React, { Component } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { Container } from "./styles";
import omnivore from "../../images/chopped-pork-red.svg";
import vegetarian from "../../images/blue-cheese.svg";
import vegan from "../../images/green-carrot.svg"

export default class Guests extends Component {
  state = {
    wedding: null,
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
  givePicture = (diet) => {
    if (diet === "omnivore") {
      return omnivore;
    } else if (diet === "vegetarian") {
      return vegetarian;
    } else if (diet === "vegan") {
      return vegan;
    }
  };

  render() {
    if (!this.state.wedding) {
      return <> </>;
    } else {
      return (
        <Container>
          <main>
            <div className="topbar-wrapper">
              <div className="topbar">
                <h1>Guests</h1>
              </div>
            </div>
            <div className="content">
              {this.state.wedding.guests.map((guest) => {
                return (
                  <div className="guestWrapper" key={guest._id}>
                    <h2>
                      {guest.firstName} {guest.lastName}
                    </h2>
                    <img src={this.givePicture(guest.food)}></img>
                  </div>
                );
              })}
            </div>
          </main>
          <Navbar />
        </Container>
      );
    }
  }
}
