import axios from 'axios';

const handleUpload = (theFile) => {
  // console.log('file in service: ', theFile)
  return axios.post('/api/upload', theFile) // >>> THIS IS NOT CLEAR !!! !!!
    .then(response => response.data)
    .catch(err => err.response.data);
}

const saveNewThing = (newThing) => {
  // console.log('new thing is: ', newThing)
  return axios.post('/api/gallery/create', newThing)
    .then(response => response.data)
    .catch(err => err.response.data);
} 

export {
  handleUpload,
  saveNewThing
}