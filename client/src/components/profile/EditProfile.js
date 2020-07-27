import React, { Component } from "react";
import axios from "axios";
import AddPicture from "../AddPicture";

export default class Profile extends Component {
  state = {
    wedding: null,
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    axios
      .get("/api/wedding/${id}profile")
      .then((response) => {
        this.setState({
          profile: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props.user);
    return (
      <>
        <div>
          <h1>Profile</h1>
        </div>
    <h2>{this.props.user.firstName} {this.props.user.lastName} & {this.props.user.partnerFirstName} {this.props.user.partnerLastName}</h2>
        <div className="profile-container">
          {/* <img src={this.state.profileImgPath}/> */}
          <form>
            <label htmlFor="email">Email</label>
            <input type="text" id="fname" name="email"></input>
            <label htmlFor="password">Password</label>
            <input type="text" id="fname" name="password"></input>
            <button>Save changes</button>
          </form>
        </div>
      </>
    );
  }
}
