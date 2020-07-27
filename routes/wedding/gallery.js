const express = require('express');
const router  = express.Router();

// include the model:
const Gallery = require('../models/Gallery');

router.get('/gallery', (req, res, next) => {
    Gallery.find()
    .then(galleryFromDB => {
        res.status(200).json(galleryFromDB)
    })
    .catch(err => next(err))
})

router.post('/gallery/create', (req, res, next) => {
    // console.log('body: ', req.body); ==> here we can see that all
    // the fields have the same names as the ones in the model so we can simply pass
    // req.body to the .create() method
    
    Gallery.create(req.body)
    .then( aNewGallery => {
        // console.log('Created new gallery: ', aNewGallery);
        res.status(200).json(aNewGallery);
    })
    .catch( err => next(err) )
})

module.exports = router;