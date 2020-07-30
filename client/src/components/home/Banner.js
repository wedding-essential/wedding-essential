import React, { Component } from "react";

export default class Banner extends Component {
  wedDate = (date) => {
    const wedDate = new Date(date)
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ];
    const weekday = dayNames[wedDate.getDay()]
    const day = wedDate.getDay()
    const month = monthNames[wedDate.getMonth()]
   return `${weekday} ${day} ${month}`
  }

  render() {
    const img = this.props.wedding.bannerImgPath;
    const style = {
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "20%",
    };
    console.log(this.props.wedding.date);
    

    return (
      <div style={style}>
        <div>
          <img
            src={this.props.user.imgPath}
            style={{ width: "100px" }}
            alt="couple profile picture"
          />
        </div>
        <div>{this.wedDate(this.props.wedding.date)}</div>
      </div>
    );
  }
}
