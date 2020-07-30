import React, { Component } from "react";

// import the service file since we need them to send (and get) the data to(from) server
import {
  handleUpload,
  saveNewPicture,
  saveNewPictureBanner,
  saveNewPictureProfile
} from "./api/service";

class AddPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      wedding: this.props.user.wedding,
      imageUrl: "",
      uploadOn: false,
      public_id: "",
      pictures: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // this method handles just the file upload
  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    this.setState({ uploadOn: true });
    handleUpload(uploadData)
      .then((response) => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({
          imageUrl: response.secure_url,
          public_id: response.public_id,
          uploadOn: false,
          pictures: response.secure_url,
        });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
  };

  // this method submits the form
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("working");
    if (this.state.uploadOn) {
      console.log("happening");
      return;
    } // do nothing if the file is still being uploaded

    if (!this.props.handler) {
      saveNewPicture(this.state)
        .then((res) => {
          console.log("added: ", res);
          this.props.setGallery(res.gallery)
          // here you would redirect to some other page
        })
        .catch((err) => {
          console.log("Error while adding the picture: ", err);
        });
    } else if (this.props.handler === "banner") {
      saveNewPictureBanner(this.state)
        .then((res) => {
          console.log("added: ", res);
          // here you would redirect to some other page
        })
        .catch((err) => {
          console.log("Error while adding the picture: ", err);
        });
    } else if (this.props.handler === "profile") {
      saveNewPictureProfile(this.state)
        .then((res) => {
          console.log("added: ", res);
          // here you would redirect to some other page
        })
        .catch((err) => {
          console.log("Error while adding the picture: ", err);
        });
      }
  };

  render() {
    return (
      <>
        {/* {this.state.pictures ? (<img src={this.state.pictures} style={{height:'200px'}}/>) : null} */}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="file" onChange={(e) => this.handleFileUpload(e)} />
          <button
            type="submit"
            onClick={(e) => this.handleSubmit(e)}
            disabled={this.state.uploadOn}
          >
            Save
          </button>
          
        </form>
      </>
    );
  }
}

export default AddPicture;
