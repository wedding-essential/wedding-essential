import React, { Component } from 'react'
import AddPicture from '../AddPicture'
import axios from 'axios'

export default class Gallery extends Component {
  state = {
    wedding: null,
    gallery: []
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    const weddingId = this.props.user.wedding;
    axios
      .get(`/api/wedding/${weddingId}`)
      .then(response => {
        console.log(response.data)
        const {gallery} = response.data
        this.setState({
          wedding: response.data,
          gallery
        })
      })
      .catch(err => console.log(err))
  }

  setGallery = (newGallery) => {
    console.log(newGallery)
    this.setState({
      gallery: newGallery,
    });
  };

  render() {
    
    return (
      <>
      {this.state.gallery.map(photo => {
        console.log(photo.imageUrl)
        return (
          <>
          <div><img src={photo.imageUrl} style={{width:'200px'}}/></div>
          <button onClick={this.deletePicture}>Delete</button>
          </>
        )
      })}
      <div>
        <AddPicture user={this.props.user} gallery={this.state.gallery} setGallery={this.setGallery}/>
      </div>
      </>
    )
  }
}
