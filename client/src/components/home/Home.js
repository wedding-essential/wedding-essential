import React, { Component, Fragment } from "react";
import Banner from "./Banner";
import Story from "./Story";
import Timeline from "./Timeline";
import Dresscode from "./Dresscode";
import Contact from "./Contact";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { Container } from "./styles";

export default class Home extends Component {
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
            <Banner wedding={this.state.wedding} user={this.props.user} />
            <Story story={this.state.wedding.story} />
            <Timeline wedding={this.state.wedding} />
            <Dresscode dresscode={this.state.wedding.dresscode} />
            <Contact wedding={this.state.wedding} />
          </main>
          <Link to="/edithome">Edit Wedding</Link>

          <Navbar />
        </Container>
      );
    }
  }
}
