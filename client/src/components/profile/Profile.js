import React, { Component } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export default class Profile extends Component {
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
              <h1>Menu</h1>
            </div>
            <div className="username">
            {this.props.user.role === "couple" ? (<h2>
                {this.props.user.firstName} & {this.props.user.partnerFirstName}
              </h2>) : <h2>{this.props.user.firstName}</h2>}
              
            </div>

            <img src={this.props.user.imgPath} style={{ height: "200px" }} />

            <div className="profile-container">
              {this.props.user.role === "couple" && (
                <>
                  <h3>Email</h3>
                  <p>{this.props.user.email}</p>
                  <h3>Password</h3>
                  <p>*********</p>

                  <h3>1st soul mate</h3>
                  <p>
                    {this.props.user.firstName} {this.props.user.lastName}
                  </p>
                  <h3>2nd soul mate</h3>
                  <p>
                    {this.props.user.partnerFirstName}{" "}
                    {this.props.user.partnerLastName}
                  </p>

                  <Link to="/editprofile">
                    <button>Edit Profile</button>
                  </Link>
                </>
              )}

              {this.props.user.role === "guest" && (
                <>
                  <h3>Email</h3>
                  <p>{this.props.user.email}</p>
                  <h3>Password</h3>
                  <p>*********</p>
                  <h3>Name</h3>
                  <p>
                    {this.props.user.firstName} {this.props.user.lastName}
                  </p>
                  <h3>Food preference</h3>
                  <p>{this.props.user.food}</p>
                  <Link to="/editprofile">
                    <button>Edit Profile</button>
                  </Link>
                </>
              )}
            </div>
          </main>
          <Navbar />
        </Container>
      );
    }
  }
}
