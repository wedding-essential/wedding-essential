import axios from 'axios';

const handleUpload = (theFile) => {
  // console.log('file in service: ', theFile)
  return axios.post('/api/upload', theFile) // >>> THIS IS NOT CLEAR !!! !!!
    .then(response => response.data)
    .catch(err => err.response.data);
}

const saveNewPicture = (newThing) => {
  return axios.post('/api/picture/create', newThing)
    .then(response => {
      return response.data})
    .catch(err => err.response.data);
} 

export {
  handleUpload,
  saveNewPicture
}