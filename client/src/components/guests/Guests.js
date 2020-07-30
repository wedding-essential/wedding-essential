import React, { Component } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { Container } from "./styles";

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

  render() {
    if (!this.state.wedding) {
      return <> </>;
    } else {
      return (
        <Container>
          <main>
            <div className="topbar">
              <h1>Guests</h1>
            </div>
            <div>
              {this.state.wedding.guests.map((guest) => {
                return (
                  <div key={guest._id}>
                    <h2>
                      {guest.firstName} {guest.lastName}
                    </h2>
                    <p>{guest.food}</p>
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
