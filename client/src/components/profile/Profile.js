import React, { Component } from "react";
import axios from "axios";
import AddPicture from "../AddPicture";
import {Link} from 'react-router-dom'

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
        <h2>
          {this.props.user.firstName} {this.props.user.lastName} &{" "}
          {this.props.user.partnerFirstName} {this.props.user.partnerLastName}
        </h2>
        <div className="profile-container">
          {/* <img src={this.state.profileImgPath}/> */}
          <div>
            <h3>Email</h3>
            <p>{this.props.user.email}</p>
            <h3>Password</h3>
            <p>*********</p>
            <Link to='/editprofile'>Change</Link>
          </div>
          <div>
            <button>Delete Wedding</button>
          </div>
        </div>
      </>
    );
  }
}
