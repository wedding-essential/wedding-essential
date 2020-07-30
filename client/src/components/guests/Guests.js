import React, { Component } from "react";
// import GuestList from './GuestList';
import axios from "axios";
import Navbar from '../navbar/Navbar'


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
      console.log(this.state.wedding.guests);
      return (
        <>
          <div>
            <h2>Guests</h2>
          </div>
          <div>
            {this.state.wedding.guests.map((guest) => {
              return (
                <div>
                  <h2>{guest.firstName} {guest.lastName}</h2>
                  <p>{guest.food}</p>
                </div>
              );
            })}
          </div>
          <Navbar/>
        </>
      );
    }
  }
}
