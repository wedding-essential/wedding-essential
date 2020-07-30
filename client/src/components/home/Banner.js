import React, { Component } from "react";

export default class Banner extends Component {
  wedDate = (date) => {
    const wedDate = new Date(date);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayNames = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const weekday = dayNames[wedDate.getDay()];
    const day = wedDate.getDay();
    const month = monthNames[wedDate.getMonth()];
    return `${weekday} ${day} ${month}`;
  };

  render() {

    return (
      <div className="banner">
        <img
          src={this.props.user.imgPath}
          style={{ width: "100px" }}
          alt="couple profile picture"
        />

        {this.props.wedding.date === "My Wedding date" ? (
          <div className="date">{this.props.wedding.date}</div>
        ) : (
          <div className="date">{this.wedDate(this.props.wedding.date)}</div>
        )}
      </div>
    );
  }
}
