import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    const img = this.props.wedding.bannerImgPath;
    const style = {
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "20%",
      
    }
    return (
      <div style={style} >
          <div><img src={this.props.user.imgPath} style={{width:"100px"}} alt='couple profile picture'/></div>
          <div>{this.props.wedding.date}</div>
      </div>
    )
  }
}
