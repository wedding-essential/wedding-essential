import React, { Component } from "react";
import AddPicture from "../AddPicture";
import axios from "axios";

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
        console.log(response.data);
        const { gallery } = response.data;
        this.setState({
          wedding: response.data,
          gallery,
        });
      })
      .catch((err) => console.log(err));
  };

  setGallery = (newGallery) => {
    console.log(newGallery);
    this.setState({
      gallery: newGallery,
    });
  };

  deletePicture = (pictID) => {
    axios
      .delete(`/api/picture/${pictID}/delete`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          gallery: response.data,
        });
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        {this.state.gallery.map((photo) => {
          console.log(photo);
          return (
            <>
              <div>
                <img src={photo.imageUrl} style={{ width: "200px" }} />
              </div>
              {this.props.user.role === "couple" ? (
                <button onClick={() => this.deletePicture(photo._id)}>
                  Delete
                </button>
              ) : null}
            </>
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
      </>
    );
  }
}
