import React, { Component } from "react";
import axios from "axios";

export default class EditHome extends Component {
  state = {
    story: "",
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const weddingId = this.props.user.wedding;
    axios
      .get(`/api/wedding/${weddingId}`)
      .then((response) => {
        const { story } = response.data;
        this.setState({
          story,
        });
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/api/wedding/${this.props.user.wedding}`, {story: this.state.story})
      .then((response) => {
        this.props.history.push("/home");
      })
      .catch((err) => {
        return err;
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="story">
          <h2>Our Story</h2>
        </label>
        <textarea
          id="story"
          name="story"
          onChange={this.handleChange}
          defaultValue={this.state.story}
        ></textarea>

        <button type="submit">Save</button>
      </form>
    );
  }
}
