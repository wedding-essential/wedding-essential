import React, { Component } from "react";
import AddPicture from "../AddPicture";
import axios from "axios";
import { Container } from "./styles";
import Navbar from "../navbar/Navbar";

export default class Gallery extends Component {
  state = {
    wedding: null,
    gallery: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const weddingId = this.props.user.wedding;
    axios
      .get(`/api/wedding/${weddingId}`)
      .then((response) => {
        const { gallery } = response.data;
        this.setState({
          wedding: response.data,
          gallery,
        });
      })
      .catch((err) => console.log(err));
  };

  setGallery = (newGallery) => {
    this.setState({
      gallery: newGallery,
    });
  };

  deletePicture = (pictID) => {
    axios
      .delete(`/api/picture/${pictID}/delete`)
      .then((response) => {
        this.setState({
          gallery: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container>
        <main>
          <div className="topbar-wrapper">
            <div className="topbar">
              <h1>Gallery</h1>
            </div>
          </div>
          <div className="content">
            {this.state.gallery.map((photo) => {
              return (
                
                  <div className="image-wrapper" key={photo._id}>
                    <img src={photo.imageUrl} />
                  
                  {this.props.user.role === "couple" ? (
                    <button onClick={() => this.deletePicture(photo._id)}>
                      Delete
                    </button>
                  ) : null}</div>
                
              );
            })}
            {this.props.user.role === "couple" ? (
              <div>
                <AddPicture
                  user={this.props.user}
                  gallery={this.state.gallery}
                  setGallery={this.setGallery}
                />
              </div>
            ) : null}
          </div>
        </main>
        <Navbar />
      </Container>
    );
  }
}
