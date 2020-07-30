import axios from 'axios';

const handleUpload = (theFile) => {
  // console.log('file in service: ', theFile)
  return axios.post('/api/upload', theFile)
    .then(response => response.data)
    .catch(err => err.response.data);
}

const saveNewPicture = (newThing) => {
  return axios.post('/api/picture/create', newThing)
    .then(response => {
      return response.data})
    .catch(err => err.response.data);
} 

const saveNewPictureBanner = (newThing) => {
  return axios.post('/api/picture/create/banner', newThing)
    .then(response => {
      return response.data})
    .catch(err => err.response.data);
} 


const saveNewPictureProfile = (newThing) => {
  return axios.post('/api/picture/create/profile', newThing)
    .then(response => {
      return response.data})
    .catch(err => err.response.data);
} 

export {
  handleUpload,
  saveNewPicture,
  saveNewPictureBanner,
  saveNewPictureProfile
}